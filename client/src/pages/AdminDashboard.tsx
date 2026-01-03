import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Download, Search, Filter, X, AlertCircle, LogOut } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import AdminLogin from "./AdminLogin";

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  converted: "bg-green-100 text-green-800",
  not_interested: "bg-red-100 text-red-800",
  scheduled: "bg-purple-100 text-purple-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

const statusLabels: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  converted: "Converted",
  not_interested: "Not Interested",
  scheduled: "Scheduled",
  completed: "Completed",
  cancelled: "Cancelled",
};

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<"inquiries" | "appointments" | "memberships">("inquiries");

  useEffect(() => {
    // Check if user is already authenticated in this session
    const authToken = sessionStorage.getItem("adminAuth");
    if (authToken === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    sessionStorage.removeItem("adminAuthTime");
    setIsAuthenticated(false);
    toast.success("Logged out successfully");
  };
  
  const [inquiryFilters, setInquiryFilters] = useState({
    status: "all",
    tier: "all",
    search: "",
  });

  const [appointmentFilters, setAppointmentFilters] = useState({
    status: "all",
    search: "",
  });

  const [membershipFilters, setMembershipFilters] = useState({
    status: "all",
    studioId: "all",
    search: "",
  });

  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);
  const [selectedMembership, setSelectedMembership] = useState<any>(null);
  const [editingNotes, setEditingNotes] = useState("");
  const [editingStatus, setEditingStatus] = useState("");
  const [lastRefresh, setLastRefresh] = useState<number>(Date.now());

  const { data: user, isLoading: userLoading } = trpc.auth.me.useQuery();
  const { data: inquiries, refetch: refetchInquiries } = trpc.inquiries.list.useQuery(inquiryFilters);
  const { data: appointments, refetch: refetchAppointments } = trpc.appointments.list.useQuery(appointmentFilters);
  const { data: memberships, refetch: refetchMemberships } = trpc.membershipSignups.list.useQuery(membershipFilters);

  const updateInquiryStatusMutation = trpc.inquiries.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("Status updated");
      refetchInquiries();
      if (selectedLead) {
        setSelectedLead(null);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateInquiryNotesMutation = trpc.inquiries.updateNotes.useMutation({
    onSuccess: () => {
      toast.success("Notes updated");
      refetchInquiries();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateAppointmentStatusMutation = trpc.appointments.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("Status updated");
      refetchAppointments();
      if (selectedAppointment) {
        setSelectedAppointment(null);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateAppointmentNotesMutation = trpc.appointments.updateNotes.useMutation({
    onSuccess: () => {
      toast.success("Notes updated");
      refetchAppointments();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const exportMutation = trpc.inquiries.exportCsv.useQuery(
    { status: inquiryFilters.status !== "all" ? inquiryFilters.status : undefined, tier: inquiryFilters.tier !== "all" ? inquiryFilters.tier : undefined },
    { enabled: false }
  );

  // Poll for new data every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refetchInquiries();
      refetchAppointments();
      setLastRefresh(Date.now());
    }, 10000);

    return () => clearInterval(interval);
  }, [refetchInquiries, refetchAppointments]);

  // Show notification when new items arrive
  useEffect(() => {
    const newInquiries = inquiries?.filter((i: any) => i.status === "new").length || 0;
    const newAppointments = appointments?.filter((a: any) => a.status === "new").length || 0;
    if ((newInquiries > 0 || newAppointments > 0) && lastRefresh > Date.now() - 15000) {
      const messages = [];
      if (newInquiries > 0) messages.push(`${newInquiries} new inquiry(ies)`);
      if (newAppointments > 0) messages.push(`${newAppointments} new appointment(s)`);
      toast.info(messages.join(" and "));
    }
  }, [inquiries, appointments]);

  // useEffect(() => {
  //   if (!user) {
  //     window.location.href = "/";
  //   }
  // }, [user]);

  // if (userLoading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-background">
  //       <div className="text-center space-y-4">
  //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
  //         <p className="text-muted-foreground">Loading...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // if (!user) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-background">
  //       <div className="text-center space-y-4">
  //         <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
  //         <h1 className="text-2xl font-bold">Access Denied</h1>
  //         <p className="text-muted-foreground">You must be logged in to access this page.</p>
  //         <Button onClick={() => window.location.href = "/"}>Back to Home</Button>
  //       </div>
  //     </div>
  //   );
  // }

  // if (user.role !== "admin") {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-background">
  //       <div className="text-center space-y-4">
  //         <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
  //         <h1 className="text-2xl font-bold">Admin Access Required</h1>
  //         <p className="text-muted-foreground">Only administrators can access this dashboard.</p>
  //         <Button onClick={() => window.location.href = "/"}>Back to Home</Button>
  //       </div>
  //     </div>
  //   );
  // }

  const handleInquiryStatusChange = (id: number, status: string) => {
    updateInquiryStatusMutation.mutate({ id, status: status as any });
  };

  const handleInquiryNotesUpdate = (id: number) => {
    updateInquiryNotesMutation.mutate({ id, notes: editingNotes });
    setSelectedLead(null);
    setEditingNotes("");
  };

  const handleAppointmentStatusChange = (id: number, status: string) => {
    updateAppointmentStatusMutation.mutate({ id, status: status as any });
  };

  const handleAppointmentNotesUpdate = (id: number) => {
    updateAppointmentNotesMutation.mutate({ id, notes: editingNotes });
    setSelectedAppointment(null);
    setEditingNotes("");
  };

  const handleExport = async () => {
    const csv = exportMutation.data;
    if (csv) {
      const element = document.createElement("a");
      const file = new Blob([csv], { type: "text/csv" });
      element.href = URL.createObjectURL(file);
      element.download = `membership-inquiries-${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      toast.success("CSV exported successfully");
    }
  };

  const inquiryStats = {
    total: inquiries?.length || 0,
    new: inquiries?.filter((i: any) => i.status === "new").length || 0,
    contacted: inquiries?.filter((i: any) => i.status === "contacted").length || 0,
    converted: inquiries?.filter((i: any) => i.status === "converted").length || 0,
  };

  const appointmentStats = {
    total: appointments?.length || 0,
    new: appointments?.filter((a: any) => a.status === "new").length || 0,
    contacted: appointments?.filter((a: any) => a.status === "contacted").length || 0,
    scheduled: appointments?.filter((a: any) => a.status === "scheduled").length || 0,
  };

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage membership inquiries and appointment requests</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b">
          <Button
            variant={activeTab === "inquiries" ? "default" : "ghost"}
            onClick={() => setActiveTab("inquiries")}
            className="rounded-none border-b-2 border-transparent data-[active=true]:border-primary"
          >
            Membership Inquiries
          </Button>
          <Button
            variant={activeTab === "appointments" ? "default" : "ghost"}
            onClick={() => setActiveTab("appointments")}
            className="rounded-none border-b-2 border-transparent data-[active=true]:border-primary"
          >
            Appointment Requests
          </Button>
          <Button
            variant={activeTab === "memberships" ? "default" : "ghost"}
            onClick={() => setActiveTab("memberships")}
            className="rounded-none border-b-2 border-transparent data-[active=true]:border-primary"
          >
            Membership Sign-ups
          </Button>
        </div>

        {/* Membership Inquiries Tab */}
        {activeTab === "inquiries" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Inquiries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{inquiryStats.total}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">New</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{inquiryStats.new}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Contacted</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600">{inquiryStats.contacted}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Converted</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{inquiryStats.converted}</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="search">Search</Label>
                    <Input
                      id="search"
                      placeholder="Name, email, or phone..."
                      value={inquiryFilters.search}
                      onChange={(e) => setInquiryFilters({ ...inquiryFilters, search: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select value={inquiryFilters.status} onValueChange={(value) => setInquiryFilters({ ...inquiryFilters, status: value })}>
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="converted">Converted</SelectItem>
                        <SelectItem value="not_interested">Not Interested</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tier">Membership Tier</Label>
                    <Select value={inquiryFilters.tier} onValueChange={(value) => setInquiryFilters({ ...inquiryFilters, tier: value })}>
                      <SelectTrigger id="tier">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Tiers</SelectItem>
                        <SelectItem value="Level Up">Level Up</SelectItem>
                        <SelectItem value="Elevate">Elevate</SelectItem>
                        <SelectItem value="Core">Core</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button onClick={() => handleExport()} className="w-full gap-2" variant="outline">
                      <Download className="w-4 h-4" />
                      Export CSV
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inquiries ({inquiries?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                {!inquiries || inquiries.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No inquiries found</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Name</th>
                          <th className="text-left py-3 px-4 font-semibold">Email</th>
                          <th className="text-left py-3 px-4 font-semibold">Phone</th>
                          <th className="text-left py-3 px-4 font-semibold">Tier</th>
                          <th className="text-left py-3 px-4 font-semibold">Status</th>
                          <th className="text-left py-3 px-4 font-semibold">Date</th>
                          <th className="text-left py-3 px-4 font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {inquiries.map((inquiry: any) => (
                          <tr key={inquiry.id} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">{inquiry.name}</td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{inquiry.email}</td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{inquiry.phone}</td>
                            <td className="py-3 px-4 text-sm">{inquiry.membershipTier}</td>
                            <td className="py-3 px-4">
                              <Badge className={statusColors[inquiry.status]}>
                                {statusLabels[inquiry.status]}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">
                              {new Date(inquiry.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-4">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setSelectedLead(inquiry);
                                  setEditingNotes(inquiry.notes || "");
                                  setEditingStatus(inquiry.status);
                                }}
                              >
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}

        {/* Appointment Requests Tab */}
        {activeTab === "appointments" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Requests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{appointmentStats.total}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">New</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{appointmentStats.new}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Contacted</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600">{appointmentStats.contacted}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Scheduled</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">{appointmentStats.scheduled}</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="apt-search">Search</Label>
                    <Input
                      id="apt-search"
                      placeholder="Name, email, or phone..."
                      value={appointmentFilters.search}
                      onChange={(e) => setAppointmentFilters({ ...appointmentFilters, search: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apt-status">Status</Label>
                    <Select value={appointmentFilters.status} onValueChange={(value) => setAppointmentFilters({ ...appointmentFilters, status: value })}>
                      <SelectTrigger id="apt-status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Appointment Requests ({appointments?.length || 0})</CardTitle>
              </CardHeader>
              <CardContent>
                {!appointments || appointments.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No appointment requests found</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold">Name</th>
                          <th className="text-left py-3 px-4 font-semibold">Email</th>
                          <th className="text-left py-3 px-4 font-semibold">Phone</th>
                          <th className="text-left py-3 px-4 font-semibold">Location</th>
                          <th className="text-left py-3 px-4 font-semibold">Service</th>
                          <th className="text-left py-3 px-4 font-semibold">Status</th>
                          <th className="text-left py-3 px-4 font-semibold">Date</th>
                          <th className="text-left py-3 px-4 font-semibold">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((appointment: any) => (
                          <tr key={appointment.id} className="border-b hover:bg-muted/50">
                            <td className="py-3 px-4">{appointment.firstName} {appointment.lastName}</td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{appointment.email}</td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{appointment.phone}</td>
                            <td className="py-3 px-4 text-sm">{appointment.preferredLocation}</td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">{appointment.serviceOfInterest || "-"}</td>
                            <td className="py-3 px-4">
                              <Badge className={statusColors[appointment.status]}>
                                {statusLabels[appointment.status]}
                              </Badge>
                            </td>
                            <td className="py-3 px-4 text-sm text-muted-foreground">
                              {new Date(appointment.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-4">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setSelectedAppointment(appointment);
                                  setEditingNotes(appointment.notes || "");
                                  setEditingStatus(appointment.status);
                                }}
                              >
                                View
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>

      {/* Inquiry Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle>Inquiry Details</CardTitle>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSelectedLead(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground">Name</Label>
                    <p className="font-medium">{selectedLead.name}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Email</Label>
                    <p className="font-medium text-sm break-all">{selectedLead.email}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Phone</Label>
                    <p className="font-medium">{selectedLead.phone}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Membership Tier</Label>
                    <p className="font-medium">{selectedLead.membershipTier}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Status</h3>
                <Select value={editingStatus} onValueChange={setEditingStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="converted">Converted</SelectItem>
                    <SelectItem value="not_interested">Not Interested</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Notes</h3>
                <Textarea
                  placeholder="Add internal notes about this inquiry..."
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <Label className="text-xs">Created</Label>
                  <p>{new Date(selectedLead.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <Label className="text-xs">Updated</Label>
                  <p>{new Date(selectedLead.updatedAt).toLocaleString()}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button
                  onClick={() => {
                    handleInquiryStatusChange(selectedLead.id, editingStatus);
                    handleInquiryNotesUpdate(selectedLead.id);
                  }}
                  className="flex-1"
                >
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedLead(null)}
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle>Appointment Details</CardTitle>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setSelectedAppointment(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs text-muted-foreground">First Name</Label>
                    <p className="font-medium">{selectedAppointment.firstName}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Last Name</Label>
                    <p className="font-medium">{selectedAppointment.lastName}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Email</Label>
                    <p className="font-medium text-sm break-all">{selectedAppointment.email}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Phone</Label>
                    <p className="font-medium">{selectedAppointment.phone}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Preferred Location</Label>
                    <p className="font-medium">{selectedAppointment.preferredLocation}</p>
                  </div>
                  <div>
                    <Label className="text-xs text-muted-foreground">Service of Interest</Label>
                    <p className="font-medium">{selectedAppointment.serviceOfInterest || "-"}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Status</h3>
                <Select value={editingStatus} onValueChange={setEditingStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Notes</h3>
                <Textarea
                  placeholder="Add internal notes about this appointment..."
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <Label className="text-xs">Created</Label>
                  <p>{new Date(selectedAppointment.createdAt).toLocaleString()}</p>
                </div>
                <div>
                  <Label className="text-xs">Updated</Label>
                  <p>{new Date(selectedAppointment.updatedAt).toLocaleString()}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button
                  onClick={() => {
                    handleAppointmentStatusChange(selectedAppointment.id, editingStatus);
                    handleAppointmentNotesUpdate(selectedAppointment.id);
                  }}
                  className="flex-1"
                >
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedAppointment(null)}
                  className="flex-1"
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

        {/* Membership Sign-ups Tab */}
        {activeTab === "memberships" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Sign-ups</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{memberships?.length || 0}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">New</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{memberships?.filter((m: any) => m.status === "new").length || 0}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Contacted</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600">{memberships?.filter((m: any) => m.status === "contacted").length || 0}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Converted</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{memberships?.filter((m: any) => m.status === "converted").length || 0}</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Membership Sign-ups ({memberships?.length || 0})</CardTitle>
                  <div className="flex gap-2 mt-4">
                    <Input
                      placeholder="Search by name or email..."
                      value={membershipFilters.search}
                      onChange={(e) => setMembershipFilters({...membershipFilters, search: e.target.value})}
                      className="flex-1"
                    />
                    <Select value={membershipFilters.status} onValueChange={(value) => setMembershipFilters({...membershipFilters, status: value})}>
                      <SelectTrigger className="w-40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="converted">Converted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {memberships?.map((membership: any) => (
                      <div
                        key={membership.id}
                        onClick={() => setSelectedMembership(membership)}
                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                          selectedMembership?.id === membership.id
                            ? "bg-primary/10 border-primary"
                            : "hover:bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <p className="font-medium">{membership.firstName} {membership.lastName}</p>
                            <p className="text-sm text-gray-600">{membership.email}</p>
                            <p className="text-xs text-gray-500 mt-1">{membership.studioId} • {membership.membershipTier}</p>
                          </div>
                          <Badge className={statusColors[membership.status] || "bg-gray-100"}>
                            {statusLabels[membership.status] || membership.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {selectedMembership && (
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                    <CardTitle>Details</CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedMembership(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-primary">Contact Information</h3>
                      <div className="space-y-2">
                        <div>
                          <Label className="text-xs text-muted-foreground">Name</Label>
                          <p className="font-medium">{selectedMembership.firstName} {selectedMembership.lastName}</p>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Email</Label>
                          <p className="font-medium text-sm break-all">{selectedMembership.email}</p>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Phone</Label>
                          <p className="font-medium">{selectedMembership.phone}</p>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Studio</Label>
                          <p className="font-medium">{selectedMembership.studioId}</p>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Health Goals</Label>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {selectedMembership.goal && selectedMembership.goal.split(',').map((goal: string, idx: number) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {goal.trim()}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <Label className="text-xs text-muted-foreground">Membership Tier</Label>
                          <p className="font-medium">{selectedMembership.membershipTier}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-primary">Status</h3>
                      <Select value={editingStatus} onValueChange={setEditingStatus}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="converted">Converted</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-semibold text-primary">Notes</h3>
                      <Textarea
                        placeholder="Add internal notes..."
                        value={editingNotes}
                        onChange={(e) => setEditingNotes(e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div>
                        <Label className="text-xs">Created</Label>
                        <p>{new Date(selectedMembership.createdAt).toLocaleString()}</p>
                      </div>
                      <div>
                        <Label className="text-xs">Updated</Label>
                        <p>{new Date(selectedMembership.updatedAt).toLocaleString()}</p>
                      </div>
                    </div>

                    <Button className="w-full">Save Changes</Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </>
        )}
    </div>
  );
}
