import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { locations, memberships, problemStates } from "@/lib/data";
import { Link } from "wouter";
import { CheckCircle, Phone, Home } from "lucide-react";

export default function MembershipSignup() {
  const [step, setStep] = useState<"info" | "goal" | "membership" | "confirmation">("info");
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
  const [selectedStudio, setSelectedStudio] = useState<typeof locations[0] | null>(null);

  const submitMutation = trpc.membershipSignups.submit.useMutation({
    onSuccess: () => {
      setStep("confirmation");
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit membership interest");
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
      // Find and store the selected studio
      const studio = locations.find(loc => loc.id === formData.studioId);
      if (studio) {
        setSelectedStudio(studio);
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
            <h1 className="text-4xl font-bold text-[#1B5E7F] mb-4">Express Your Interest</h1>
            <p className="text-lg text-gray-600">
              {step === "confirmation" ? "Thank you for your interest!" : "Tell us about your wellness goals and preferred membership"}
            </p>
          </div>

          {/* Progress Indicator */}
          {step !== "confirmation" && (
            <div className="flex justify-between mb-8">
              <div className={`flex-1 h-2 mx-1 rounded ${step === "info" || step === "goal" || step === "membership" ? "bg-[#1B5E7F]" : "bg-gray-300"}`}></div>
              <div className={`flex-1 h-2 mx-1 rounded ${step === "goal" || step === "membership" ? "bg-[#1B5E7F]" : "bg-gray-300"}`}></div>
              <div className={`flex-1 h-2 mx-1 rounded ${step === "membership" ? "bg-[#1B5E7F]" : "bg-gray-300"}`}></div>
            </div>
          )}

          {/* Confirmation Page */}
          {step === "confirmation" && (
            <Card className="p-8 border-0 shadow-lg rounded-2xl">
              <div className="text-center mb-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-[#1B5E7F] mb-2">Interest Received!</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Thank you, {formData.firstName}! We've received your membership interest.
                </p>
                <p className="text-gray-600 mb-6">
                  Our wellness team will reach out within 24 hours to discuss your goals and help you get started with your selected membership tier.
                </p>
              </div>

              {/* Selected Membership Info */}
              <div className="bg-blue-50 border-2 border-[#1B5E7F] rounded-lg p-6 mb-8">
                <h3 className="font-bold text-[#1B5E7F] mb-2">Your Selection:</h3>
                <p className="text-gray-800">
                  <strong>{memberships.find(m => m.name === formData.membershipTier)?.name}</strong> - ${memberships.find(m => m.name === formData.membershipTier)?.price}/month
                </p>
              </div>

              {/* Studio Contact Info */}
              {selectedStudio && (
                <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-[#1B5E7F] mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contact {selectedStudio.name.replace("Restore Hyper Wellness - ", "")}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Phone:</strong> <a href={`tel:${selectedStudio.phone}`} className="text-[#1B5E7F] hover:underline">{selectedStudio.phone}</a></p>
                    <p><strong>Address:</strong> {selectedStudio.address}, {selectedStudio.city}, {selectedStudio.state} {selectedStudio.zip}</p>
                    <p><strong>Hours:</strong> {selectedStudio.hours}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">Call for a faster response or to schedule your first session!</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link href="/" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full py-6 rounded-lg flex items-center justify-center gap-2"
                    size="lg"
                  >
                    <Home className="w-5 h-5" />
                    Return to Home
                  </Button>
                </Link>
                <Button
                  onClick={() => {
                    if (selectedStudio) {
                      window.location.href = `tel:${selectedStudio.phone}`;
                    }
                  }}
                  className="flex-1 bg-[#1B5E7F] hover:bg-[#154a5f] text-white font-bold py-6 rounded-lg flex items-center justify-center gap-2"
                  size="lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Studio Now
                </Button>
              </div>
            </Card>
          )}

          {/* Step 1: Personal Info & Studio */}
          {step === "info" && (
            <Card className="p-8 border-0 shadow-lg rounded-2xl">
              <h2 className="text-2xl font-bold text-[#1B5E7F] mb-6">Step 1: Your Information</h2>
              
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
                  <Select value={formData.studioId} onValueChange={(value) => {
                    handleInputChange("studioId", value);
                    const studio = locations.find(loc => loc.id === value);
                    if (studio) {
                      setSelectedStudio(studio);
                    }
                  }}>
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
              <h2 className="text-2xl font-bold text-[#1B5E7F] mb-6">Step 2: What's Your Health Goal?</h2>
              
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
              <h2 className="text-2xl font-bold text-[#1B5E7F] mb-6">Step 3: Select Your Membership</h2>
              
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
                  {isSubmitting ? "Submitting..." : "Express Interest"}
                </Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
