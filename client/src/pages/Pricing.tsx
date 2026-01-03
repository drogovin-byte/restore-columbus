import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Snowflake, Wind, Lightbulb, Zap, Droplets, Activity, Syringe, Sparkles, Star, CircleDot, Waves, Atom, Dna, Eye } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { memberships, services } from "@/lib/data";
import ServiceQuickViewModal from "@/components/ServiceQuickViewModal";

export default function Pricing() {
  const [quickViewService, setQuickViewService] = useState<typeof services[0] | null>(null);
  const [quickViewColorSet, setQuickViewColorSet] = useState<{ bg: string; gradient: string } | null>(null);
  const [quickViewIcon, setQuickViewIcon] = useState<React.ElementType | null>(null);
  const [isPremiumQuickView, setIsPremiumQuickView] = useState(false);
  const [premiumPricingData, setPremiumPricingData] = useState<any>(null);

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

  // Icon mapping for core therapies
  const coreIcons: Record<string, any> = {
    "cryotherapy": Snowflake,
    "infrared-sauna": Wind,
    "red-light": Lightbulb,
    "compression": Zap,
  };

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

  // Color mapping for core therapies
  const coreColors = [
    { bg: '#0EA5E9', gradient: 'from-sky-500 to-cyan-500' },
    { bg: '#F97316', gradient: 'from-orange-500 to-amber-500' },
    { bg: '#EF4444', gradient: 'from-red-500 to-rose-500' },
    { bg: '#8B5CF6', gradient: 'from-violet-500 to-purple-500' },
  ];

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

  // Premium pricing data
  const nadPricing = {
    dosages: [
      { label: "500 mg", member: "$440", retail: "$550" },
      { label: "750 mg", member: "$530", retail: "$670" },
      { label: "125 mg Add-On", member: "$110", retail: "$138" },
      { label: "125 mg IM", member: "$115", retail: "$144" },
    ],
    sessionTime: "60-90 minute sessions"
  };

  const niagenPricing = {
    dosages: [
      { label: "500 mg", member: "$690", retail: "$860" },
      { label: "1000 mg", member: "$1,380", retail: "$1,720" },
      { label: "125 mg Add-On", member: "$173", retail: "$215" },
      { label: "125 mg IM", member: "$205", retail: "$245" },
    ],
    sessionTime: "30-45 minute sessions"
  };

  const openQuickView = (
    service: typeof services[0],
    colorSet: { bg: string; gradient: string },
    icon: React.ElementType,
    isPremium: boolean = false,
    premiumPricing?: any
  ) => {
    setQuickViewService(service);
    setQuickViewColorSet(colorSet);
    setQuickViewIcon(() => icon);
    setIsPremiumQuickView(isPremium);
    setPremiumPricingData(premiumPricing);
  };

  const closeQuickView = () => {
    setQuickViewService(null);
    setQuickViewColorSet(null);
    setQuickViewIcon(null);
    setIsPremiumQuickView(false);
    setPremiumPricingData(null);
  };

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
                        <h3 className="text-2xl font-bold text-white">{membership.name}</h3>
                        
                        <div className="space-y-2">
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-6xl font-bold text-white">${membership.price}</span>
                            <span className="text-white/80">/month</span>
                          </div>
                          <p className="text-white/90 text-sm">A ${membership.value} value!</p>
                          <p className="text-[#7FDBFF] font-bold">You save ${membership.savings}!</p>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-6xl font-bold text-white">{membership.credits}</span>
                          <span className="text-white/80 text-sm">Credits / Month</span>
                          <span className="text-white/70 text-xs mt-1">${membership.perTherapy.toFixed(2)} per Therapy</span>
                        </div>
                      </div>

                      <div className="bg-white/10 backdrop-blur-sm flex-1 px-8 py-6">
                        <ul className="space-y-3 text-sm">
                          {membership.benefits.slice(0, 4).map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3 text-white/90">
                              <Check className="w-5 h-5 text-[#7FDBFF] flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-6 pt-0 bg-white/10">
                      <Button 
                        asChild
                        className="w-full bg-white hover:bg-white/90 text-slate-900 font-bold h-14 text-lg rounded-xl shadow-lg"
                      >
                        <Link href="/memberships">Choose Plan</Link>
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Core Therapies */}
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
              const IconComponent = coreIcons[service.id] || Zap;
              const colorSet = coreColors[idx % coreColors.length];
              
              return (
                <Card key={service.id} className="hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out border-0 overflow-hidden group relative cursor-pointer">
                  {/* Quick View Button */}
                  <button
                    onClick={() => openQuickView(service, colorSet, IconComponent)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110"
                    title="Quick View"
                  >
                    <Eye className="w-4 h-4 text-slate-700" />
                  </button>

                  <div className={`relative h-28 flex items-center justify-center bg-gradient-to-br ${colorSet.gradient}`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">{service.shortDesc}</p>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 rounded-xl border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900">1 Credit per session</span>
                        <span className="inline-block px-2 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Included</span>
                      </div>
                      <p className="text-xs text-slate-500">
                        Available with all membership tiers
                      </p>
                      <div className="border-t border-slate-200 pt-2 mt-2">
                        <p className="text-xs font-semibold text-slate-900">{service.pricing}</p>
                      </div>
                    </div>

                    <Button asChild className={`w-full bg-gradient-to-r ${colorSet.gradient} hover:opacity-90 text-white font-semibold h-10 rounded-lg transition-all text-sm`}>
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
                <Card key={service.id} className="hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out border-0 overflow-hidden group relative cursor-pointer">
                  {/* Quick View Button */}
                  <button
                    onClick={() => openQuickView(service, colorSet, IconComponent)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110"
                    title="Quick View"
                  >
                    <Eye className="w-4 h-4 text-slate-700" />
                  </button>

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
            <Card className="border-0 overflow-hidden group hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out bg-white relative cursor-pointer">
              {/* Quick View Button */}
              <button
                onClick={() => {
                  const nadService = services.find(s => s.id === "nad-iv");
                  if (nadService) {
                    openQuickView(
                      nadService,
                      { bg: '#8B5CF6', gradient: 'from-violet-600 to-purple-600' },
                      Dna,
                      true,
                      nadPricing
                    );
                  }
                }}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110"
                title="Quick View"
              >
                <Eye className="w-4 h-4 text-slate-700" />
              </button>

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
            <Card className="border-0 overflow-hidden group hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out bg-white relative cursor-pointer">
              {/* Quick View Button */}
              <button
                onClick={() => {
                  const niagenService = services.find(s => s.id === "niagen-nr-iv");
                  if (niagenService) {
                    openQuickView(
                      niagenService,
                      { bg: '#10B981', gradient: 'from-emerald-600 to-teal-600' },
                      Atom,
                      true,
                      niagenPricing
                    );
                  }
                }}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:scale-110"
                title="Quick View"
              >
                <Eye className="w-4 h-4 text-slate-700" />
              </button>

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
      <section className="py-20 bg-white pb-40 md:pb-20">
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

      {/* Quick View Modal */}
      {quickViewService && quickViewColorSet && quickViewIcon && (
        <ServiceQuickViewModal
          isOpen={!!quickViewService}
          onClose={closeQuickView}
          service={quickViewService}
          colorSet={quickViewColorSet}
          IconComponent={quickViewIcon}
          isPremium={isPremiumQuickView}
          premiumPricing={premiumPricingData}
        />
      )}
    </Layout>
  );
}
