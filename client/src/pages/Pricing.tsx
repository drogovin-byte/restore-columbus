import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { memberships, services } from "@/lib/data";

export default function Pricing() {
  // Separate services by category
  const coreTherapies = services.filter(s => 
    ["cryotherapy", "infrared-sauna", "red-light", "compression", "iv-drip"].includes(s.id)
  );

  const specialtyServices = services.filter(s => 
    !["cryotherapy", "infrared-sauna", "red-light", "compression", "iv-drip"].includes(s.id)
  );

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

      {/* Membership Plans - Matching Memberships Page Design */}
      <div className="min-h-screen bg-white">
        <div className="container py-20">
          <div className="grid gap-8 lg:grid-cols-3 relative pb-8">
            {memberships.map((membership, index) => {
              const isPopular = membership.isPopular;
              
              let cardBg = "";
              if (index === 0) {
                cardBg = "bg-gradient-to-br from-[#5DADE2] via-[#4A9FD8] to-[#3B8BC9]";
              } else if (index === 1) {
                cardBg = "bg-gradient-to-br from-[#2B7A9B] via-[#1B5E7F] to-[#0F3D52]";
              } else {
                cardBg = "bg-gradient-to-br from-[#3FA3B8] via-[#2E8B9E] to-[#1F6B7F]";
              }

              return (
                <div key={index} className="relative">
                  {isPopular && (
                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-[#5DADE2] rounded-full w-28 h-28 flex items-center justify-center border-4 border-white shadow-xl">
                        <div className="text-center">
                          <div className="text-xs font-bold text-white leading-tight">BEST</div>
                          <div className="text-xs font-bold text-white leading-tight">VALUE</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Card
                    className={`flex flex-col overflow-hidden transition-all duration-300 h-full border-0 rounded-3xl shadow-xl ${
                      isPopular ? "lg:scale-105 lg:shadow-2xl" : ""
                    } ${cardBg}`}
                  >
                    <div className="space-y-0 p-0 flex-1 flex flex-col">
                      <div className="space-y-6 px-8 text-center pt-8 pb-8">
                        <h3 className="text-4xl font-bold text-white tracking-wide">{membership.name}</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-baseline justify-center gap-2">
                            <span className="text-6xl font-bold text-white">${membership.price}</span>
                            <span className="text-xl text-white/90">/month</span>
                          </div>
                          <div className="space-y-1 text-base">
                            <p className="text-white/90">
                              A ${membership.value} value!
                            </p>
                            <p className="text-white font-semibold">
                              You save ${membership.savings}!
                            </p>
                          </div>
                        </div>

                        <div className="border-b border-white/30"></div>

                        <div className="space-y-2">
                          <div className="text-7xl font-bold text-white">{membership.credits}</div>
                          <p className="text-xl text-white/90">Credits / Month</p>
                          <p className="text-base text-white/80">
                            ${membership.perTherapy.toFixed(2)} per Therapy
                          </p>
                        </div>

                        <div className="border-b border-white/30"></div>
                      </div>

                      <div className="space-y-4 px-8 py-8 flex-1 flex flex-col text-center">
                        <div className="space-y-3 flex-1">
                          {membership.benefits.slice(0, 4).map((benefit, i) => (
                            <p key={i} className="text-white/95 text-base leading-relaxed">
                              {benefit}
                            </p>
                          ))}
                        </div>

                        <Button
                          asChild
                          className="w-full mt-6 font-bold text-base py-6 rounded-lg bg-white hover:bg-gray-100 text-[#1B5E7F] transition-all duration-200 shadow-md hover:shadow-lg"
                          size="lg"
                        >
                          <Link href="/memberships">
                            Choose Plan
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

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
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#1B5E7F]">{service.title}</h3>
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
                </div>
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
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-[#1B5E7F]">{service.title}</h3>
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium IV Services */}
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
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#1B5E7F]">NAD+ IV Therapy</h3>
                <p className="text-slate-600 text-sm">
                  Advanced cellular rejuvenation therapy
                </p>

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
              </div>
            </Card>

            {/* Niagen NR */}
            <Card className="border-l-4 border-l-[#3FA3B8] hover:shadow-lg transition-shadow">
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-[#1B5E7F]">Niagen (NR) IV Drips</h3>
                <p className="text-slate-600 text-sm">
                  Superior NAD+ precursor therapy
                </p>

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
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Savings */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Membership Savings</h2>
            <p className="text-slate-600">See how much you save with a membership</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-3 px-4 font-bold">Scenario</th>
                  <th className="text-left py-3 px-4 font-bold">Pay-Per-Session</th>
                  <th className="text-left py-3 px-4 font-bold">Level Up Member</th>
                  <th className="text-left py-3 px-4 font-bold">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4">4 Core Therapies/month</td>
                  <td className="py-3 px-4">$120</td>
                  <td className="py-3 px-4">$170</td>
                  <td className="py-3 px-4 text-red-600">-$50</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4">8 Core Therapies/month</td>
                  <td className="py-3 px-4">$240</td>
                  <td className="py-3 px-4">$170</td>
                  <td className="py-3 px-4 text-green-600">+$70</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4">1 Specialty Service/month</td>
                  <td className="py-3 px-4">$100</td>
                  <td className="py-3 px-4">$70 (30% off)</td>
                  <td className="py-3 px-4 text-green-600">+$30</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold">Total Monthly Value</td>
                  <td className="py-3 px-4 font-bold">$460</td>
                  <td className="py-3 px-4 font-bold">$410</td>
                  <td className="py-3 px-4 font-bold text-green-600">+$50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing FAQ</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can I pause my membership?</h3>
              <p className="text-slate-600">Yes! You can pause your membership anytime and resume whenever you're ready. No penalties or cancellation fees.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can I use credits at other locations?</h3>
              <p className="text-slate-600">Yes! Your membership credits work at any Restore location nationwide, giving you flexibility wherever you are.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do unused credits roll over?</h3>
              <p className="text-slate-600">Credits are monthly and don't roll over. We recommend booking your sessions throughout the month to maximize your membership value.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Are premium services included?</h3>
              <p className="text-slate-600">NAD+ and Niagen (NR) are premium services paid separately. All other specialty services receive a 30% member discount.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Can I upgrade or downgrade?</h3>
              <p className="text-slate-600">Absolutely! Change your membership plan anytime. Upgrades take effect immediately, downgrades at the end of your billing cycle.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">What if I'm new to Restore?</h3>
              <p className="text-slate-600">New members often start with Level Up to explore different therapies. Our team can recommend the best plan for your goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B5E7F] to-[#3FA3B8] text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Transform Your Health?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of Columbus residents who've made wellness a priority. Start your membership today.
          </p>
          <Button asChild size="lg" className="bg-white text-[#1B5E7F] hover:bg-gray-100">
            <Link href="/memberships">View Memberships</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
