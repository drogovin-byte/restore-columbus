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
          {memberships.map((membership, index) => {
            const isPopular = membership.isPopular;
            const isFirst = index === 0;
            const isLast = index === 2;
            
            // Color scheme for each card
            let cardBg = "bg-gradient-to-br from-slate-50 to-slate-100";
            let accentColor = "text-slate-600";
            let borderColor = "border-slate-200";
            let headerBg = "bg-slate-50";
            let creditsBg = "bg-slate-100";
            
            if (isPopular) {
              cardBg = "bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50";
              accentColor = "text-teal-600";
              borderColor = "border-cyan-200";
              headerBg = "bg-gradient-to-r from-cyan-50 to-teal-50";
              creditsBg = "bg-cyan-100/40";
            } else if (isFirst) {
              cardBg = "bg-gradient-to-br from-orange-50 to-amber-50";
              accentColor = "text-orange-600";
              borderColor = "border-orange-200";
              headerBg = "bg-orange-50";
              creditsBg = "bg-orange-100/40";
            } else if (isLast) {
              cardBg = "bg-gradient-to-br from-purple-50 to-indigo-50";
              accentColor = "text-purple-600";
              borderColor = "border-purple-200";
              headerBg = "bg-purple-50";
              creditsBg = "bg-purple-100/40";
            }

            return (
              <Card
                key={index}
                className={`relative flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 ${borderColor} ${cardBg} ${
                  isPopular ? "lg:scale-105 shadow-xl" : "shadow-md"
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-cyan-400 to-teal-500 px-4 py-2 text-sm font-bold text-white rounded-bl-lg shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="space-y-6 p-8 flex-1 flex flex-col">
                  {/* Header */}
                  <div className={`space-y-2 -mx-8 -mt-8 px-8 pt-8 pb-6 ${headerBg} border-b-2 ${borderColor}`}>
                    <h3 className={`text-2xl font-bold ${accentColor}`}>{membership.name}</h3>
                    <p className="text-sm text-muted-foreground">{membership.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2 border-b-2 pb-6 border-current/10">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-bold ${accentColor}`}>${membership.price}</span>
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
                  <div className={`space-y-2 ${creditsBg} rounded-lg p-4 border border-current/20`}>
                    <div className="flex items-center gap-2">
                      <Zap className={`w-5 h-5 ${accentColor}`} />
                      <span className={`font-semibold ${accentColor}`}>{membership.credits} Monthly Credits</span>
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
                          <Check className={`w-5 h-5 ${accentColor} flex-shrink-0 mt-0.5`} />
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
                      className={`w-full font-bold text-base py-6 ${
                        isPopular
                          ? "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white shadow-lg"
                          : isFirst
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                          : "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white"
                      }`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-slate-50 to-background py-20">
        <div className="container max-w-2xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Membership FAQs</h2>
            <p className="text-muted-foreground">Common questions about our membership plans</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2 bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">Can I pause my membership?</h3>
              <p className="text-muted-foreground">
                Yes! You can pause your membership anytime without penalty. Perfect if you need a break.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">Do credits roll over each month?</h3>
              <p className="text-muted-foreground">
                Credits are monthly and don't roll over. However, you can pause your membership if you need flexibility.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">Can I use my credits at any location?</h3>
              <p className="text-muted-foreground">
                Absolutely! Your credits work at any Restore location nationwide, giving you maximum flexibility.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">What if I want to upgrade or downgrade?</h3>
              <p className="text-muted-foreground">
                You can change your membership tier anytime. Changes take effect on your next billing cycle.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">Are there any cancellation fees?</h3>
              <p className="text-muted-foreground">
                No cancellation fees. You can cancel your membership anytime with no penalties or questions asked.
              </p>
            </div>

            <div className="space-y-2 bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
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
        <div className="rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-12 text-center space-y-6 shadow-xl">
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
