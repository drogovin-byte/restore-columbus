import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Snowflake, Wind, Lightbulb, Zap, Droplets, Activity, Syringe, Sparkles, Star, CircleDot, Waves, Atom, Dna } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { memberships, services } from "@/lib/data";

export default function Pricing() {
  // Separate services by category
  const coreTherapies = services.filter(s => 
    ["cryotherapy", "infrared-sauna", "red-light", "compression"].includes(s.id)
  );

  const specialtyServices = services.filter(s => 
    !["cryotherapy", "infrared-sauna", "red-light", "compression", "nad-iv", "niagen-nr-iv"].includes(s.id)
  );

  // Separate premium IV services
  const premiumIVServices = services.filter(s => 
    ["nad-iv", "niagen-nr-iv"].includes(s.id)
  );

  // Get other specialty services (excluding premium IV)
  const otherSpecialtyServices = specialtyServices.filter(s => 
    !["nad-iv", "niagen-nr-iv"].includes(s.id)
  );

  // Icon mapping for specialty services
  const specialtyIcons: Record<string, any> = {
    "iv-therapy": Droplets,
    "trt": Activity,
    "im-shots": Syringe,
    "hydrafacial": Sparkles,
    "neveskin-facial": Star,
    "neveskin-shape": CircleDot,
    "neveskin-tone": Waves,
    "hyperbaric": Atom,
  };

  // Color mapping for specialty services
  const specialtyColors = [
    { bg: '#6366F1', gradient: 'from-indigo-500 to-purple-500' },
    { bg: '#EC4899', gradient: 'from-pink-500 to-rose-500' },
    { bg: '#F59E0B', gradient: 'from-amber-500 to-orange-500' },
    { bg: '#10B981', gradient: 'from-emerald-500 to-teal-500' },
    { bg: '#8B5CF6', gradient: 'from-violet-500 to-purple-500' },
    { bg: '#EF4444', gradient: 'from-red-500 to-rose-500' },
    { bg: '#06B6D4', gradient: 'from-cyan-500 to-blue-500' },
    { bg: '#84CC16', gradient: 'from-lime-500 to-green-500' },
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
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Core Therapies</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Included in all memberships. 1 credit per session.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreTherapies.map((service, idx) => {
              const icons = [Snowflake, Wind, Lightbulb, Zap];
              const IconComponent = icons[idx % 4];
              const colors = ['#5DADE2', '#3FA3B8', '#2B7A9B', '#1B5E7F'];
              const bgColor = colors[idx % 4];
              
              return (
                <Card key={service.id} className="hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group">
                  <div className="relative h-32 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity" style={{backgroundColor: bgColor}}>
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.shortDesc}</p>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-slate-900">1 Credit per session</span>
                        <span className="inline-block px-3 py-1 bg-blue-200 text-blue-900 text-xs font-bold rounded-full">Included</span>
                      </div>
                      <p className="text-xs text-slate-600">
                        Available with all membership tiers
                      </p>
                      <div className="border-t border-blue-200 pt-3 mt-3">
                        <p className="text-sm font-semibold text-slate-900">{service.pricing}</p>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold h-11 rounded-lg transition-all">
                      <Link href={`/service/${service.id}`}>Learn More</Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Specialty Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              30% discount for members. Pay-per-session for non-members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherSpecialtyServices.map((service, idx) => {
              const IconComponent = specialtyIcons[service.id] || Sparkles;
              const colorSet = specialtyColors[idx % specialtyColors.length];
              
              return (
                <Card key={service.id} className="hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group">
                  <div className="relative h-28 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 transition-opacity" style={{backgroundColor: colorSet.bg}}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{service.shortDesc}</p>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900">Premium Service</span>
                        <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded-full">30% Off</span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Member discount available
                      </p>
                      <div className="border-t border-slate-200 pt-2 mt-2">
                        <p className="text-xs font-semibold text-slate-900">{service.pricing}</p>
                      </div>
                    </div>

                    <Button asChild className={`w-full bg-gradient-to-r ${colorSet.gradient} hover:opacity-90 text-white font-semibold h-10 rounded-lg transition-all text-sm`}>
                      <Link href={`/service/${service.id}`}>View Details</Link>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium IV Services */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-white">Premium IV Services</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Advanced cellular therapies. Not included in memberships. Pay-per-session only.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* NAD+ */}
            <Card className="border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative h-36 flex items-center justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center">
                  <Dna className="w-14 h-14 text-white mx-auto mb-2" />
                  <span className="text-white/90 text-sm font-medium">Cellular Rejuvenation</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">NAD+ IV Therapy</h3>
                  <span className="inline-block px-3 py-1 bg-violet-100 text-violet-800 text-xs font-bold rounded-full">Premium</span>
                </div>
                <p className="text-slate-600">
                  Advanced cellular rejuvenation therapy that restores energy, supports longevity, and enhances mental clarity.
                </p>

                <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-5 rounded-xl border border-violet-100 space-y-3">
                  <p className="text-xs text-violet-700 font-medium">
                    60-90 minute sessions | Pay-per-session
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white p-3 rounded-lg border border-violet-100">
                      <p className="text-xs text-slate-500 mb-1">500 mg</p>
                      <p className="text-sm font-bold text-slate-900">$440 <span className="text-xs font-normal text-slate-500">member</span></p>
                      <p className="text-xs text-slate-400">$550 retail</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-violet-100">
                      <p className="text-xs text-slate-500 mb-1">750 mg</p>
                      <p className="text-sm font-bold text-slate-900">$530 <span className="text-xs font-normal text-slate-500">member</span></p>
                      <p className="text-xs text-slate-400">$670 retail</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-violet-100">
                      <p className="text-xs text-slate-500 mb-1">125 mg Add-On</p>
                      <p className="text-sm font-bold text-slate-900">$110 <span className="text-xs font-normal text-slate-500">member</span></p>
                      <p className="text-xs text-slate-400">$138 retail</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-violet-100">
                      <p className="text-xs text-slate-500 mb-1">125 mg IM</p>
                      <p className="text-sm font-bold text-slate-900">$115 <span className="text-xs font-normal text-slate-500">member</span></p>
                      <p className="text-xs text-slate-400">$144 retail</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span>Restore cellular energy</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span>Support longevity</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-violet-500 flex-shrink-0" />
                    <span>Enhance mental clarity</span>
                  </li>
                </ul>

                <Button asChild className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold h-12 rounded-lg transition-all">
                  <Link href="/service/nad-iv">View Details</Link>
                </Button>
              </div>
            </Card>

            {/* Niagen */}
            <Card className="border-0 overflow-hidden group hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="relative h-36 flex items-center justify-center bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 text-center">
                  <Atom className="w-14 h-14 text-white mx-auto mb-2" />
                  <span className="text-white/90 text-sm font-medium">Cellular Regeneration</span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">Niagen (NR) IV Drips</h3>
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Premium</span>
                </div>
                <p className="text-slate-600">
                  NAD+ precursor for cellular regeneration that boosts energy levels and supports healthy metabolism.
                </p>

                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl border border-emerald-100 space-y-3">
                  <p className="text-xs text-emerald-700 font-medium">
                    30-45 minute sessions | Pay-per-session
                  </p>
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-white p-3 rounded-lg border border-emerald-100">
                      <p className="text-xs text-slate-500 mb-1">500 mg</p>
                      <p className="text-sm font-bold text-slate-900">$690 <span className="text-xs font-normal text-slate-500">member</span></p>
                      <p className="text-xs text-slate-400">$860 retail</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-emerald-100">
                      <p className="text-xs text-slate-500 mb-1">1000 mg</p>
                      <p className="text-sm font-bold text-slate-900">$1,380 <span className="text-xs font-normal text-slate-500">member</span></p>
                      <p className="text-xs text-slate-400">$1,720 retail</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-emerald-100">
                      <p className="text-xs text-slate-500 mb-1">125 mg Add-On</p>
                      <p className="text-sm font-bold text-slate-900">$173 <span className="text-xs font-normal text-slate-500">member</span></p>
                      <p className="text-xs text-slate-400">$215 retail</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-emerald-100">
                      <p className="text-xs text-slate-500 mb-1">125 mg IM</p>
                      <p className="text-sm font-bold text-slate-900">$205 <span className="text-xs font-normal text-slate-500">member</span></p>
                      <p className="text-xs text-slate-400">$245 retail</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Boost NAD+ levels</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Increase energy</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>Support metabolism</span>
                  </li>
                </ul>

                <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold h-12 rounded-lg transition-all">
                  <Link href="/service/niagen-nr-iv">View Details</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing FAQs</h2>
          
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold mb-2">Can I switch membership plans?</h3>
              <p className="text-slate-600">Yes, you can upgrade or downgrade your membership at any time. Changes take effect on your next billing cycle.</p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold mb-2">Do unused credits roll over?</h3>
              <p className="text-slate-600">Credits are monthly and do not roll over. We recommend using your credits each month to maximize your membership value.</p>
            </div>
            
            <div className="border-b pb-6">
              <h3 className="text-lg font-bold mb-2">Are there any contracts?</h3>
              <p className="text-slate-600">All memberships require a 3-month commitment. After that, you can cancel anytime with no penalties.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-slate-600">We accept all major credit cards, debit cards, and digital payment methods. Contact us for other payment options.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
