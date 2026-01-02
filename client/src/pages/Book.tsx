import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { locations, services } from "@/lib/data";
import { useState } from "react";
import { toast } from "sonner";

export default function Book() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Request received! We'll call you shortly to confirm your appointment.");
    }, 1500);
  };

  return (
    <Layout>
      <div className="container py-20">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="font-heading font-bold text-4xl text-primary">Book Your Session</h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will contact you to schedule your appointment at your preferred Columbus studio.
            </p>
          </div>

          <div className="bg-card border rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required placeholder="(614) 555-0123" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Preferred Location</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a studio" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(loc => (
                      <SelectItem key={loc.id} value={loc.id}>{loc.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service of Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.id} value={service.id}>{service.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending Request..." : "Request Appointment"}
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                By submitting this form, you agree to receive calls or texts from Restore Hyper Wellness Columbus regarding your appointment request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
