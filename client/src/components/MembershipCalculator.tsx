import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Heart, Zap, DollarSign, ArrowRight } from "lucide-react";
import { memberships } from "@/lib/data";

type MembershipTier = "level-up" | "elevate" | "core";

export default function MembershipCalculator() {
  const [currentTier, setCurrentTier] = useState<MembershipTier>("level-up");
  const [targetTier, setTargetTier] = useState<MembershipTier>("elevate");

  const tierMap: Record<MembershipTier, number> = {
    "level-up": 0,
    "elevate": 1,
    "core": 2,
  };

  const current = memberships[tierMap[currentTier]];
  const target = memberships[tierMap[targetTier]];

  const monthlyCostDifference = target.price - current.price;
  const creditDifference = target.credits - current.credits;
  const costPerTherapyDifference = Math.round((target.perTherapy - current.perTherapy) * 100) / 100;

  const isUpgrade = target.price > current.price;
  const isSameTier = currentTier === targetTier;

  // Health benefit messaging
  const getHealthBenefits = () => {
    if (isUpgrade) {
      return [
        `${creditDifference} more therapy sessions per month`,
        "More consistent wellness routine for better results",
        "Accelerated recovery and performance gains",
        "Better long-term health outcomes with regular treatment"
      ];
    } else {
      return [
        `${Math.abs(creditDifference)} fewer therapy sessions per month`,
        "Less frequent treatment may slow recovery progress",
        "Reduced consistency could impact long-term results",
        "May need to supplement with additional out-of-pocket sessions"
      ];
    }
  };

  return (
    <div className="space-y-8">
      {/* Tier Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Current Tier */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Your Current Membership
          </label>
          <div className="grid grid-cols-1 gap-3">
            {memberships.map((membership, idx) => {
              const tierKey = Object.keys(tierMap).find(
                (k) => tierMap[k as MembershipTier] === idx
              ) as MembershipTier;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentTier(tierKey)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    currentTier === tierKey
                      ? "border-accent bg-accent/10 shadow-md"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className="font-semibold text-primary">{membership.name}</div>
                  <div className="text-sm text-muted-foreground">
                    ${membership.price}/month • {membership.credits} credits
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Target Tier */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Switch To
          </label>
          <div className="grid grid-cols-1 gap-3">
            {memberships.map((membership, idx) => {
              const tierKey = Object.keys(tierMap).find(
                (k) => tierMap[k as MembershipTier] === idx
              ) as MembershipTier;
              return (
                <button
                  key={idx}
                  onClick={() => setTargetTier(tierKey)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    targetTier === tierKey
                      ? "border-secondary bg-secondary/10 shadow-md"
                      : "border-border hover:border-secondary/50"
                  }`}
                >
                  <div className="font-semibold text-primary">{membership.name}</div>
                  <div className="text-sm text-muted-foreground">
                    ${membership.price}/month • {membership.credits} credits
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Comparison Results */}
      {!isSameTier && (
        <Card className="border-2 bg-gradient-to-br from-background to-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              {isUpgrade ? "Unlock Better Health Outcomes" : "What You'll Miss"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Cost Per Service Comparison */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Cost Per Therapy Session
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-sm text-muted-foreground mb-1">Current</div>
                  <div className="text-2xl font-bold text-primary">
                    ${current.perTherapy}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    {current.name}
                  </div>
                </div>
                <div className={`p-4 rounded-lg border-2 ${
                  isUpgrade
                    ? "bg-green-50 border-green-200"
                    : "bg-orange-50 border-orange-200"
                }`}>
                  <div className="text-sm text-muted-foreground mb-1">New</div>
                  <div className={`text-2xl font-bold ${
                    isUpgrade ? "text-green-700" : "text-orange-700"
                  }`}>
                    ${target.perTherapy}
                  </div>
                  <div className={`text-xs font-semibold mt-2 ${
                    isUpgrade ? "text-green-700" : "text-orange-700"
                  }`}>
                    {isUpgrade ? "Save" : "Increase"} ${Math.abs(costPerTherapyDifference)}/session
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg">
                {isUpgrade
                  ? `By upgrading, you'll pay $${Math.abs(costPerTherapyDifference)} less per therapy session, making consistent wellness more affordable.`
                  : `Downgrading increases your per-session cost to $${target.perTherapy}, making it more expensive to maintain consistency.`}
              </p>
            </div>

            {/* Health Benefits */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Heart className="w-4 h-4" />
                {isUpgrade ? "Health Benefits You'll Gain" : "Health Benefits You'll Lose"}
              </h3>
              <div className="space-y-2">
                {getHealthBenefits().map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-lg bg-card border border-border">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                      isUpgrade ? "bg-green-500" : "bg-orange-500"
                    }`}>
                      {isUpgrade ? "+" : "−"}
                    </div>
                    <p className="text-sm text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Frequency Impact */}
            <div className="space-y-4">
              <h3 className="font-semibold text-primary flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Monthly Service Frequency
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <div className="text-sm text-muted-foreground mb-2">Current</div>
                  <div className="text-3xl font-bold text-primary">{current.credits}</div>
                  <div className="text-xs text-muted-foreground mt-2">
                    sessions/month
                  </div>
                </div>
                <div className={`p-4 rounded-lg border-2 ${
                  isUpgrade
                    ? "bg-green-50 border-green-200"
                    : "bg-orange-50 border-orange-200"
                }`}>
                  <div className="text-sm text-muted-foreground mb-2">New</div>
                  <div className={`text-3xl font-bold ${
                    isUpgrade ? "text-green-700" : "text-orange-700"
                  }`}>
                    {target.credits}
                  </div>
                  <div className={`text-xs font-semibold mt-2 ${
                    isUpgrade ? "text-green-700" : "text-orange-700"
                  }`}>
                    {isUpgrade ? "+" : "−"}{Math.abs(creditDifference)} sessions/month
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground bg-primary/5 p-3 rounded-lg">
                {isUpgrade
                  ? `${creditDifference} additional sessions per month means more consistent treatment, faster recovery, and better long-term health outcomes.`
                  : `Fewer sessions per month means less frequent treatment, which can slow your progress and require supplemental out-of-pocket visits.`}
              </p>
            </div>

            {/* Monthly Cost Impact */}
            <div className="space-y-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Current: {current.name}
                </span>
                <span className="font-semibold">${current.price}/month</span>
              </div>
              <div className="flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  New: {target.name}
                </span>
                <span className="font-semibold">${target.price}/month</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <span className="text-sm font-semibold">Monthly Change</span>
                <span
                  className={`font-bold text-lg ${
                    monthlyCostDifference > 0
                      ? "text-orange-600"
                      : "text-green-600"
                  }`}
                >
                  {monthlyCostDifference > 0 ? "+" : ""}${Math.abs(
                    monthlyCostDifference
                  )}/month
                </span>
              </div>
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-white hover:bg-primary/90 font-semibold"
            >
              <a
                href="https://manus.im/app/gDb7fBedok5ZZ3AQc00pA1"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isUpgrade ? "Upgrade Now" : "Downgrade Now"}
              </a>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Same Tier Message */}
      {isSameTier && (
        <Card className="border-2 border-border/50 bg-muted/30">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Select different tiers to see how your health outcomes and service frequency will change.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
