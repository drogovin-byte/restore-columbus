import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Zap } from "lucide-react";
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
  const costPerTherapyDifference = target.perTherapy - current.perTherapy;
  const yearlySavings = monthlyCostDifference * 12;

  const isUpgrade = target.price > current.price;
  const isSameTier = currentTier === targetTier;

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
        <Card className="border-2 bg-gradient-to-br from-background to-secondary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-accent" />
              {isUpgrade ? "Upgrade Comparison" : "Downgrade Comparison"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Monthly Cost Change */}
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Monthly Cost Change
                  </span>
                </div>
                <div
                  className={`text-3xl font-bold ${
                    monthlyCostDifference > 0
                      ? "text-orange-600"
                      : "text-green-600"
                  }`}
                >
                  {monthlyCostDifference > 0 ? "+" : ""}${Math.abs(monthlyCostDifference)}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {isUpgrade ? "Additional cost per month" : "Savings per month"}
                </p>
              </div>

              {/* Yearly Impact */}
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Annual Impact
                  </span>
                </div>
                <div
                  className={`text-3xl font-bold ${
                    yearlySavings > 0 ? "text-orange-600" : "text-green-600"
                  }`}
                >
                  {yearlySavings > 0 ? "+" : ""}${Math.abs(yearlySavings)}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {isUpgrade ? "Additional yearly cost" : "Yearly savings"}
                </p>
              </div>

              {/* Credit Increase */}
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-semibold text-muted-foreground">
                    Additional Credits
                  </span>
                </div>
                <div className="text-3xl font-bold text-accent">
                  +{creditDifference}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Extra credits per month
                </p>
              </div>
            </div>

            {/* Detailed Breakdown */}
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
                <span className="text-sm font-semibold">Net Change</span>
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

            {/* Value Proposition */}
            <div className="bg-primary/5 rounded-lg p-4 space-y-2">
              <p className="text-sm font-semibold text-primary">
                {isUpgrade
                  ? `Get ${creditDifference} more credits per month`
                  : `Reduce your monthly spend by $${Math.abs(
                      monthlyCostDifference
                    )}`}
              </p>
              <p className="text-xs text-muted-foreground">
                {isUpgrade
                  ? `That's ${creditDifference} additional therapy sessions or combinations per month!`
                  : `Perfect if you want to maintain flexibility while reducing costs.`}
              </p>
            </div>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="w-full bg-primary text-white hover:bg-primary/90 font-semibold"
            >
              <a
                href="https://www.restore.com/book-now"
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
              Select different tiers to see the comparison and cost differences.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
