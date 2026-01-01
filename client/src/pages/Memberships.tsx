import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";
import { memberships } from "@/lib/data";

export default function Memberships() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container space-y-6 text-center">
          <div className="inline-block rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-accent">
            MEMBERSHIP PLANS
          </div>
          <h1 className="text-5xl font-bold tracking-tight">
            Choose Your Wellness Path
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Flexible membership plans designed to fit your wellness goals and lifestyle. Pause or cancel anytime.
          </p>
        </div>
      </div>

      {/* Memberships Grid */}
      <div className="container py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          {memberships.map((membership, index) => (
            <Card
              key={index}
              className={`relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl ${
                membership.isPopular ? "border-accent shadow-lg lg:scale-105" : ""
              }`}
            >
              {membership.isPopular && (
                <div className="absolute top-0 right-0 bg-accent px-4 py-2 text-sm font-bold text-accent-foreground rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="space-y-6 p-8 flex-1 flex flex-col">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{membership.name}</h3>
                  <p className="text-sm text-muted-foreground">{membership.description}</p>
                </div>

                {/* Pricing */}
                <div className="space-y-2 border-b pb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">${membership.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      Value: <span className="font-semibold text-foreground">${membership.value}</span>
                    </p>
                    <p className="text-green-600 font-semibold">
                      Save ${membership.savings}/month
                    </p>
                  </div>
                </div>

                {/* Credits */}
                <div className="space-y-2 bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-accent" />
                    <span className="font-semibold">{membership.credits} Monthly Credits</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ${membership.perTherapy.toFixed(2)} per therapy
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3 flex-1">
                  <h4 className="font-semibold">What's Included:</h4>
                  <ul className="space-y-2">
                    {membership.benefits.map((benefit, i) => (
                      <li key={i} className="flex gap-3 text-sm">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="https://www.restore.com/book-now"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className={`w-full ${
                      membership.isPopular
                        ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                        : ""
                    }`}
                    variant={membership.isPopular ? "default" : "outline"}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-muted/50 py-20">
        <div className="container max-w-2xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Membership FAQs</h2>
            <p className="text-muted-foreground">Common questions about our membership plans</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Can I pause my membership?</h3>
              <p className="text-muted-foreground">
                Yes! You can pause your membership anytime without penalty. Perfect if you need a break.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Do credits roll over each month?</h3>
              <p className="text-muted-foreground">
                Credits are monthly and don't roll over. However, you can pause your membership if you need flexibility.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Can I use my credits at any location?</h3>
              <p className="text-muted-foreground">
                Absolutely! Your credits work at any Restore location nationwide, giving you maximum flexibility.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">What if I want to upgrade or downgrade?</h3>
              <p className="text-muted-foreground">
                You can change your membership tier anytime. Changes take effect on your next billing cycle.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Are there any cancellation fees?</h3>
              <p className="text-muted-foreground">
                No cancellation fees. You can cancel your membership anytime with no penalties or questions asked.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Do specialty services require extra credits?</h3>
              <p className="text-muted-foreground">
                Some specialty services (like HydraFacial or advanced TRT consultations) may require additional credits or payment, but members get 30% off all specialty services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container py-20">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Ready to Transform Your Wellness?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of Columbus residents who've made Restore part of their wellness routine.
          </p>
          <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary" className="font-semibold">
              Book Your First Session
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
