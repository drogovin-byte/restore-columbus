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
            {memberships.map((membership, idx) => (
              <Card 
                key={idx} 
                className={`relative flex flex-col h-full ${
                  membership.isPopular ? "ring-2 ring-primary shadow-lg scale-105" : ""
                }`}
              >
                {membership.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{membership.name}</CardTitle>
                  <p className="text-slate-600 text-sm mt-2">{membership.description}</p>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  {/* Pricing */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">${membership.price}</span>
                      <span className="text-slate-600">/month</span>
                    </div>
                    <p className="text-sm text-slate-600">
                      Value: ${membership.value} | Save ${membership.savings}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      ${membership.perTherapy} per therapy
                    </p>
                  </div>

                  {/* Credits */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="font-semibold text-lg mb-2">{membership.credits} Monthly Credits</p>
                    <p className="text-sm text-slate-600">
                      1 credit = 1 core therapy | 4 credits = IV Drip with 2 nutrients
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {membership.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex gap-3 text-sm">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="w-full mt-auto" variant={membership.isPopular ? "default" : "outline"}>
                    <Link href="/memberships">Choose Plan</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm">{service.shortDesc}</p>
                  
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900">
                      1 Credit per session
                    </p>
                    <p className="text-xs text-blue-700 mt-1">
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
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm">{service.shortDesc}</p>
                  
                  <div className="bg-amber-50 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-amber-900">
                      Premium Service
                    </p>
                    <p className="text-xs text-amber-700 mt-1">
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
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>NAD+ IV Therapy</CardTitle>
                <p className="text-slate-600 text-sm mt-2">
                  Advanced cellular rejuvenation therapy
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-100 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Premium Service</p>
                  <p className="text-xs text-slate-600">
                    Pay-per-session pricing | Not included in memberships | 60-90 minute sessions
                  </p>
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Restore cellular energy</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Support DNA repair</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Enhance cognitive function</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Improve athletic performance</span>
                  </li>
                </ul>

                <Button asChild className="w-full">
                  <Link href="/service/nad-iv">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Niagen NR */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle>Niagen (NR) IV Drips</CardTitle>
                <p className="text-slate-600 text-sm mt-2">
                  Superior NAD+ precursor therapy
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-slate-100 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Premium Service</p>
                  <p className="text-xs text-slate-600">
                    Pay-per-session pricing | Not included in memberships | 30-45 minute sessions
                  </p>
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>75% faster infusion than NAD+</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fewer side effects</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Enhanced cellular energy</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Superior NAD+ bioavailability</span>
                  </li>
                </ul>

                <Button asChild className="w-full">
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
