import { useState } from "react";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const membershipTiers: Record<string, { name: string; price: number; credits: number }> = {
  "level-up": { name: "Level Up", price: 170, credits: 8 },
  "elevate": { name: "Elevate", price: 260, credits: 14 },
  "core": { name: "Core", price: 300, credits: 31 },
};

export default function MembershipSignup() {
  const [, params] = useRoute("/membership/:id");
  const membershipId = params?.id || "";
  const membership = membershipTiers[membershipId];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const signupMutation = trpc.membership.signup.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We will contact you soon to complete your membership.");
      setFormData({ name: "", email: "", phone: "" });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit. Please try again.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await signupMutation.mutateAsync({
        membershipTier: membership.name,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!membership) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-primary">Membership not found</h1>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary">Join {membership.name}</h1>
          <p className="text-lg text-muted-foreground">
            Complete your membership signup and we will contact you shortly
          </p>
        </div>

        <Card className="bg-white border-2 border-accent/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">{membership.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Monthly Price:</span>
              <span className="text-3xl font-bold text-primary">${membership.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Credits per Month:</span>
              <span className="text-xl font-semibold text-accent">{membership.credits} Credits</span>
            </div>
            <div className="pt-2 border-t">
              <p className="text-sm text-muted-foreground">
                3-month commitment required. Terms and restrictions apply.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(614) 555-0123"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Complete ${membership.name} Signup`
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center pt-2">
                We will contact you shortly to confirm your membership and answer any questions.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
