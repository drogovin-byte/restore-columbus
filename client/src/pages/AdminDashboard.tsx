import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Download, Search, Filter, X, AlertCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  converted: "bg-green-100 text-green-800",
  not_interested: "bg-red-100 text-red-800",
};

const statusLabels: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  converted: "Converted",
  not_interested: "Not Interested",
};

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const [filters, setFilters] = useState({
    status: "all",
    tier: "all",
    search: "",
  });

  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [editingNotes, setEditingNotes] = useState("");
  const [editingStatus, setEditingStatus] = useState("");
  const [lastRefresh, setLastRefresh] = useState<number>(Date.now());

  const { data: user } = trpc.auth.me.useQuery();
  const { data: inquiries, refetch } = trpc.inquiries.list.useQuery(filters);

  const updateStatusMutation = trpc.inquiries.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("Status updated");
      refetch();
      if (selectedLead) {
        setSelectedLead(null);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateNotesMutation = trpc.inquiries.updateNotes.useMutation({
    onSuccess: () => {
      toast.success("Notes updated");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const exportMutation = trpc.inquiries.exportCsv.useQuery(
    { status: filters.status !== "all" ? filters.status : undefined, tier: filters.tier !== "all" ? filters.tier : undefined },
    { enabled: false }
  );

  // Poll for new inquiries every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
      setLastRefresh(Date.now());
    }, 10000);

    return () => clearInterval(interval);
  }, [refetch]);

  // Show notification when new inquiries arrive
  useEffect(() => {
    const newCount = inquiries?.filter((i: any) => i.status === "new").length || 0;
    if (newCount > 0 && lastRefresh > Date.now() - 15000) {
      toast.info(`${newCount} new inquiry(ies) available`);
    }
  }, [inquiries]);

  useEffect(() => {
    if (!user) {
      window.location.href = "/";
    }
  }, [user]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
          <h1 className="text-2xl font-bold">Access Denied</h1>
          <p className="text-muted-foreground">You must be logged in to access this page.</p>
          <Button onClick={() => window.location.href = "/"}>Back to Home</Button>
        </div>
      </div>
    );
  }

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
          <h1 className="text-2xl font-bold">Admin Access Required</h1>
          <p className="text-muted-foreground">Only administrators can access this dashboard.</p>
          <Button onClick={() => window.location.href = "/"}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const handleStatusChange = (id: number, status: string) => {
    updateStatusMutation.mutate({ id, status: status as any });
  };

  const handleNotesUpdate = (id: number) => {
    updateNotesMutation.mutate({ id, notes: editingNotes });
    setSelectedLead(null);
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

  const stats = {
    total: inquiries?.length || 0,
    new: inquiries?.filter((i: any) => i.status === "new").length || 0,
    contacted: inquiries?.filter((i: any) => i.status === "contacted").length || 0,
    converted: inquiries?.filter((i: any) => i.status === "converted").length || 0,
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-primary">Membership Inquiries</h1>
          <p className="text-muted-foreground">Manage and track all membership signup requests</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Inquiries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">New</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{stats.new}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Contacted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">{stats.contacted}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Converted</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{stats.converted}</div>
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
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={filters.status} onValueChange={(value) => setFilters({ ...filters, status: value })}>
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
                <Select value={filters.tier} onValueChange={(value) => setFilters({ ...filters, tier: value })}>
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
      </div>

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
                    handleStatusChange(selectedLead.id, editingStatus);
                    handleNotesUpdate(selectedLead.id);
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
    </div>
  );
}
