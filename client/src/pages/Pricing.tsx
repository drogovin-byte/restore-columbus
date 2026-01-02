import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { memberships, services } from "@/lib/data";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  // Separate services by category
  const coreTherapies = services.filter(s => 
    ["cryotherapy", "infrared-sauna", "red-light", "compression", "iv-drip"].includes(s.id)
  );

  const specialtyServices = services.filter(s => 
    !["cryotherapy", "infrared-sauna", "red-light", "compression", "iv-drip"].includes(s.id)
  );

  const premiumServices = [
    { name: "NAD+ IV Therapy", price: "Premium", included: false },
    { name: "Niagen (NR) IV Drips", price: "Premium", included: false }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="container text-center space-y-6">
          <h1 className="text-5xl font-bold">Transparent Pricing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Choose the membership that fits your wellness goals. All memberships include unlimited access to core therapies and 30% off specialty services.
          </p>
        </div>
      </section>

      {/* Membership Comparison */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Membership Plans</h2>
            <p className="text-slate-600 mb-8">Choose the plan that matches your wellness commitment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {memberships.map((membership, idx) => {
              // Color scheme matching Memberships page
              let cardBg = "";
              if (idx === 0) {
                // Level Up - Light Blue to Teal gradient
                cardBg = "bg-gradient-to-br from-[#5DADE2] via-[#4A9FD8] to-[#3B8BC9]";
              } else if (idx === 1) {
                // Elevate - Dark Teal to Navy gradient (Most Popular)
                cardBg = "bg-gradient-to-br from-[#2B7A9B] via-[#1B5E7F] to-[#0F3D52]";
              } else {
                // Core - Teal to Deep Teal gradient
                cardBg = "bg-gradient-to-br from-[#3FA3B8] via-[#2E8B9E] to-[#1F6B7F]";
              }
              return (
              <Card 
                key={idx} 
                className={`relative flex flex-col h-full border-0 rounded-2xl overflow-hidden transition-all duration-300 ${
                  membership.isPopular ? "ring-2 ring-primary shadow-2xl scale-105" : "shadow-lg"
                } ${cardBg}`}
              >
                {membership.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-[#5DADE2] text-white font-bold px-4 py-2 rounded-full shadow-lg">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-white pt-8 pb-6">
                  <CardTitle className="text-3xl font-bold text-white">{membership.name}</CardTitle>
                  <p className="text-white/90 text-sm mt-2">{membership.description}</p>
                </CardHeader>

                <CardContent className="flex-1 space-y-6 text-white pb-8">
                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">${membership.price}</span>
                      <span className="text-white/90">/month</span>
                    </div>
                    <p className="text-white/90 text-sm mt-2">
                      Value: ${membership.value} | Save ${membership.savings}
                    </p>
                    <p className="text-sm font-semibold text-white/95">
                      ${membership.perTherapy} per therapy
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="border-b border-white/30"></div>

                  {/* Credits */}
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                    <p className="font-bold text-2xl text-white mb-2">{membership.credits}</p>
                    <p className="text-white/90 text-sm mb-1">Monthly Credits</p>
                    <p className="text-white/80 text-xs">
                      1 credit = 1 core therapy | 4 credits = IV Drip with 2 nutrients
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {membership.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex gap-3 text-sm text-white/95">
                        <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full mt-auto bg-white text-slate-900 hover:bg-white/90 font-bold">
                    <Link href="/memberships">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            );
            })}
          </div>
        </div>
      </section>

      {/* Core Therapies Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Therapies</h2>
            <p className="text-slate-600">
              Included in all memberships. 1 credit per session.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTherapies.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-[#3FA3B8]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-[#1B5E7F]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm">{service.shortDesc}</p>
                  
                  <div className="bg-gradient-to-br from-[#E8F4F8] to-[#D4E9F0] p-4 rounded-lg border border-[#3FA3B8]/20">
                    <p className="text-sm font-semibold text-[#1B5E7F]">
                      1 Credit per session
                    </p>
                    <p className="text-xs text-[#2E8B9E] mt-1">
                      Included in all memberships
                    </p>
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/service/${service.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Specialty Services</h2>
            <p className="text-slate-600">
              30% discount for members. Pay-per-session for non-members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-[#3FA3B8]">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-[#1B5E7F]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm">{service.shortDesc}</p>
                  
                  <div className="bg-gradient-to-br from-[#E8F4F8] to-[#D4E9F0] p-4 rounded-lg border border-[#3FA3B8]/20">
                    <p className="text-sm font-semibold text-[#1B5E7F]">
                      Premium Service
                    </p>
                    <p className="text-xs text-[#2E8B9E] mt-1">
                      30% member discount available
                    </p>
                  </div>

                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={`/service/${service.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Premium IV Services</h2>
            <p className="text-slate-600">
              Advanced cellular therapies. Not included in memberships. Pay-per-session only.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NAD+ */}
            <Card className="border-l-4 border-l-[#3FA3B8] hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#1B5E7F]">NAD+ IV Therapy</CardTitle>
                <p className="text-slate-600 text-sm mt-2">
                  Advanced cellular rejuvenation therapy
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-[#E8F4F8] to-[#D4E9F0] p-4 rounded-lg border border-[#3FA3B8]/20">
                  <p className="text-sm font-semibold text-[#1B5E7F] mb-2">Premium Service</p>
                  <p className="text-xs text-[#2E8B9E]">
                    Pay-per-session pricing | Not included in memberships | 60-90 minute sessions
                  </p>
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#3FA3B8] flex-shrink-0 mt-0.5" />
                    <span>Restore cellular energy</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#3FA3B8] flex-shrink-0 mt-0.5" />
                    <span>Support DNA repair</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#3FA3B8] flex-shrink-0 mt-0.5" />
                    <span>Enhance cognitive function</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#3FA3B8] flex-shrink-0 mt-0.5" />
                    <span>Improve athletic performance</span>
                  </li>
                </ul>

                <Button asChild className="w-full bg-[#3FA3B8] hover:bg-[#2E8B9E] text-white">
                  <Link href="/service/nad-iv">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Niagen NR */}
            <Card className="border-l-4 border-l-[#3FA3B8] hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#1B5E7F]">Niagen (NR) IV Drips</CardTitle>
                <p className="text-slate-600 text-sm mt-2">
                  Superior NAD+ precursor therapy
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-br from-[#E8F4F8] to-[#D4E9F0] p-4 rounded-lg border border-[#3FA3B8]/20">
                  <p className="text-sm font-semibold text-[#1B5E7F] mb-2">Premium Service</p>
                  <p className="text-xs text-[#2E8B9E]">
                    Pay-per-session pricing | Not included in memberships | 30-45 minute sessions
                  </p>
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#3FA3B8] flex-shrink-0 mt-0.5" />
                    <span>75% faster infusion than NAD+</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#3FA3B8] flex-shrink-0 mt-0.5" />
                    <span>Fewer side effects</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#3FA3B8] flex-shrink-0 mt-0.5" />
                    <span>Enhanced cellular energy</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-[#3FA3B8] flex-shrink-0 mt-0.5" />
                    <span>Superior NAD+ bioavailability</span>
                  </li>
                </ul>

                <Button asChild className="w-full bg-[#3FA3B8] hover:bg-[#2E8B9E] text-white">
                  <Link href="/service/niagen-nr-iv">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership vs Pay-Per-Session Comparison */}
      <section className="py-20">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">Membership Savings</h2>
            <p className="text-slate-600 text-center">
              See how much you save with a membership
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold">Scenario</th>
                  <th className="text-right py-4 px-4 font-semibold">Pay-Per-Session</th>
                  <th className="text-right py-4 px-4 font-semibold">Level Up Member</th>
                  <th className="text-right py-4 px-4 font-semibold">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4">4 Core Therapies/month</td>
                  <td className="text-right py-4 px-4">$120</td>
                  <td className="text-right py-4 px-4">$170</td>
                  <td className="text-right py-4 px-4 text-green-600 font-semibold">-$50</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4">8 Core Therapies/month</td>
                  <td className="text-right py-4 px-4">$240</td>
                  <td className="text-right py-4 px-4">$170</td>
                  <td className="text-right py-4 px-4 text-green-600 font-semibold">+$70</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-4 px-4">1 Specialty Service/month</td>
                  <td className="text-right py-4 px-4">$100</td>
                  <td className="text-right py-4 px-4">$70 (30% off)</td>
                  <td className="text-right py-4 px-4 text-green-600 font-semibold">+$30</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold">Total Monthly Value</td>
                  <td className="text-right py-4 px-4 font-semibold">$460</td>
                  <td className="text-right py-4 px-4 font-semibold">$410</td>
                  <td className="text-right py-4 px-4 text-green-600 font-bold">+$50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing FAQ</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Can I pause my membership?</h3>
              <p className="text-slate-600">
                Yes! You can pause your membership anytime and resume whenever you're ready. No penalties or cancellation fees.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Can I use credits at other locations?</h3>
              <p className="text-slate-600">
                Yes! Your membership credits work at any Restore location nationwide, giving you flexibility wherever you are.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Do unused credits roll over?</h3>
              <p className="text-slate-600">
                Credits are monthly and don't roll over. We recommend booking your sessions throughout the month to maximize your membership value.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Are premium services included?</h3>
              <p className="text-slate-600">
                NAD+ and Niagen (NR) are premium services paid separately. All other specialty services receive a 30% member discount.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Can I upgrade or downgrade?</h3>
              <p className="text-slate-600">
                Absolutely! Change your membership plan anytime. Upgrades take effect immediately, downgrades at the end of your billing cycle.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">What if I'm new to Restore?</h3>
              <p className="text-slate-600">
                New members often start with Level Up to explore different therapies. Our team can recommend the best plan for your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Transform Your Health?</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of Columbus residents who've made wellness a priority. Start your membership today.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/memberships">View Memberships</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
