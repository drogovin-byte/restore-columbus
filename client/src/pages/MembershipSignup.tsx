import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { locations, memberships, problemStates } from "@/lib/data";

export default function MembershipSignup() {
  const [step, setStep] = useState<"info" | "goal" | "membership">("info");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studioId: "",
    goal: "",
    membershipTier: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitMutation = trpc.membershipSignups.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We'll contact you shortly to confirm your membership.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        studioId: "",
        goal: "",
        membershipTier: "",
      });
      setStep("info");
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit membership sign-up");
      setIsSubmitting(false);
    },
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === "info") {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.studioId) {
        toast.error("Please fill in all fields");
        return;
      }
      setStep("goal");
    } else if (step === "goal") {
      if (!formData.goal) {
        toast.error("Please select a health goal");
        return;
      }
      setStep("membership");
    }
  };

  const handleSubmit = async () => {
    if (!formData.membershipTier) {
      toast.error("Please select a membership tier");
      return;
    }
    setIsSubmitting(true);
    await submitMutation.mutateAsync(formData);
  };

  const goalOptions = problemStates.map(state => ({
    id: state.id,
    title: state.title,
    description: state.problem,
  }));

  const studioOptions = locations.map(loc => ({
    id: loc.id,
    name: loc.name.replace("Restore Hyper Wellness - ", ""),
  }));

  const membershipOptions = memberships.map(m => ({
    id: m.name,
    name: m.name,
    price: m.price,
    credits: m.credits,
  }));

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
        <div className="container max-w-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1B5E7F] mb-4">Join Restore Membership</h1>
            <p className="text-lg text-gray-600">
              Start your wellness journey with a membership tailored to your goals
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-between mb-8">
            <div className={`flex-1 h-2 mx-1 rounded ${step === "info" || step === "goal" || step === "membership" ? "bg-[#1B5E7F]" : "bg-gray-300"}`}></div>
            <div className={`flex-1 h-2 mx-1 rounded ${step === "goal" || step === "membership" ? "bg-[#1B5E7F]" : "bg-gray-300"}`}></div>
            <div className={`flex-1 h-2 mx-1 rounded ${step === "membership" ? "bg-[#1B5E7F]" : "bg-gray-300"}`}></div>
          </div>

          {/* Step 1: Personal Info & Studio */}
          {step === "info" && (
            <Card className="p-8 border-0 shadow-lg rounded-2xl">
              <h2 className="text-2xl font-bold text-[#1B5E7F] mb-6">Your Information</h2>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    placeholder="(614) 555-0123"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Studio</label>
                  <Select value={formData.studioId} onValueChange={(value) => handleInputChange("studioId", value)}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select a studio" />
                    </SelectTrigger>
                    <SelectContent>
                      {studioOptions.map(studio => (
                        <SelectItem key={studio.id} value={studio.id}>
                          {studio.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleNext}
                className="w-full bg-[#1B5E7F] hover:bg-[#154a5f] text-white font-bold py-6 rounded-lg"
                size="lg"
              >
                Continue to Goals
              </Button>
            </Card>
          )}

          {/* Step 2: Health Goal */}
          {step === "goal" && (
            <Card className="p-8 border-0 shadow-lg rounded-2xl">
              <h2 className="text-2xl font-bold text-[#1B5E7F] mb-6">What's Your Health Goal?</h2>
              
              <div className="space-y-3 mb-6">
                {goalOptions.map(goal => (
                  <div
                    key={goal.id}
                    onClick={() => handleInputChange("goal", goal.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.goal === goal.id
                        ? "border-[#1B5E7F] bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <h3 className="font-bold text-gray-900">{goal.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{goal.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setStep("info")}
                  variant="outline"
                  className="flex-1 py-6 rounded-lg"
                  size="lg"
                >
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  className="flex-1 bg-[#1B5E7F] hover:bg-[#154a5f] text-white font-bold py-6 rounded-lg"
                  size="lg"
                >
                  Continue to Membership
                </Button>
              </div>
            </Card>
          )}

          {/* Step 3: Membership Selection */}
          {step === "membership" && (
            <Card className="p-8 border-0 shadow-lg rounded-2xl">
              <h2 className="text-2xl font-bold text-[#1B5E7F] mb-6">Select Your Membership</h2>
              
              <div className="space-y-3 mb-6">
                {membershipOptions.map(membership => (
                  <div
                    key={membership.id}
                    onClick={() => handleInputChange("membershipTier", membership.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.membershipTier === membership.id
                        ? "border-[#1B5E7F] bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">{membership.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{membership.credits} Credits/Month</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-[#1B5E7F]">${membership.price}</p>
                        <p className="text-xs text-gray-600">/month</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => setStep("goal")}
                  variant="outline"
                  className="flex-1 py-6 rounded-lg"
                  size="lg"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-[#1B5E7F] hover:bg-[#154a5f] text-white font-bold py-6 rounded-lg"
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Complete Sign-up"}
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
