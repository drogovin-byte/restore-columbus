import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Zap, TrendingUp, AlertCircle, Zap as ZapIcon, Droplets, Sparkles } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";

export default function NADNiagenComparison() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-1 text-sm font-semibold uppercase tracking-wider border-white/30">
                Cellular Rejuvenation Guide
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                NAD+ or Niagen (NR): Which is Right for You?
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Boost metabolism, energy, longevity and more. Understand the differences between two powerful cellular rejuvenation therapies and choose the one that aligns with your wellness goals.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Choose Premium Cellular Therapy?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Rapid Results */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Rapid Results</h3>
                  <p className="text-slate-600">Faster NAD+ increase. Significant boost in just 3 hours. Quick energy and mental clarity boost.</p>
                </CardContent>
              </Card>

              {/* Comfortable & Safe */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Comfortable & Safe</h3>
                  <p className="text-slate-600">Administered by a Registered Nurse. Minimal side effects. Well tolerated, unlike traditional NAD+ IVs.</p>
                </CardContent>
              </Card>

              {/* Efficient Treatment */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Efficient Treatment</h3>
                  <p className="text-slate-600">75% faster than traditional NAD+ IVs. Effective absorption. Niagen® NRCl passes directly into cells.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* NAD+ Card */}
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b-2 border-blue-200">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-blue-700">NAD+ IV Therapy</CardTitle>
                    <Badge className="bg-blue-100 text-blue-800 text-xs font-bold">THE BEST VALUE</Badge>
                  </div>
                  <p className="text-sm text-blue-600 font-medium mt-2">Repair DNA, reduce inflammation and slow down the aging process</p>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-700">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Active form of NAD+</p>
                        <p className="text-sm text-slate-600">Not naturally found in high concentrations in the blood</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-700">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Direct cellular energy</p>
                        <p className="text-sm text-slate-600">Plays a direct role in cellular energy production and repair processes</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-amber-700">!</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Potential side effects</p>
                        <p className="text-sm text-slate-600">Clients may experience nausea, headache, or discomfort during administration</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600 mb-2">Starting at</p>
                    <p className="text-2xl font-bold text-blue-700">$440 <span className="text-sm font-normal text-slate-600">(Member)</span></p>
                  </div>
                </CardContent>
              </Card>

              {/* Niagen Card */}
              <Card className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-emerald-700">Niagen (NR) IV Therapy</CardTitle>
                    <Badge className="bg-emerald-100 text-emerald-800 text-xs font-bold">SUPERIOR CHOICE</Badge>
                  </div>
                  <p className="text-sm text-emerald-600 font-medium mt-2">A powerful precursor to NAD+ with longer-lasting effects</p>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-emerald-700">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Natural precursor to NAD+</p>
                        <p className="text-sm text-slate-600">NR is needed for NAD+ to boost anti-aging intervention, metabolism and energy</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-emerald-700">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Pharmaceutical-grade form</p>
                        <p className="text-sm text-slate-600">NR is naturally found in certain foods, but Niagen is the patented, pharmaceutical-grade form of NR</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-emerald-700">✓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Fewer adverse experiences</p>
                        <p className="text-sm text-slate-600">20% increase in NAD+ at the 3-hour mark. 75% faster infusion time compared to NAD+. Less adverse experiences because it is naturally absorbed into the cell</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600 mb-2">Starting at</p>
                    <p className="text-2xl font-bold text-emerald-700">$690 <span className="text-sm font-normal text-slate-600">(Member)</span></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Detailed Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
                <thead>
                  <tr className="bg-gradient-to-r from-slate-100 to-slate-50 border-b-2 border-slate-200">
                    <th className="px-6 py-4 text-left font-bold text-slate-900">Factor</th>
                    <th className="px-6 py-4 text-left font-bold text-blue-700">NAD+ IV</th>
                    <th className="px-6 py-4 text-left font-bold text-emerald-700">Niagen (NR) IV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Type</td>
                    <td className="px-6 py-4 text-slate-700">Active form of NAD+</td>
                    <td className="px-6 py-4 text-slate-700">Natural precursor to NAD+</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Infusion Time</td>
                    <td className="px-6 py-4 text-slate-700">60-90 minutes</td>
                    <td className="px-6 py-4 text-slate-700">30-45 minutes</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Absorption</td>
                    <td className="px-6 py-4 text-slate-700">Direct infusion into bloodstream</td>
                    <td className="px-6 py-4 text-slate-700">Passes directly into cells (75% faster)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Side Effects</td>
                    <td className="px-6 py-4 text-slate-700">Common (flushing, nausea, muscle aches)</td>
                    <td className="px-6 py-4 text-slate-700">Minimal to none (rare)</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Onset of Effects</td>
                    <td className="px-6 py-4 text-slate-700">Immediate (within hours)</td>
                    <td className="px-6 py-4 text-slate-700">20% NAD+ increase at 3 hours</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-900">Best For</td>
                    <td className="px-6 py-4 text-slate-700">Acute energy, immediate clarity, events</td>
                    <td className="px-6 py-4 text-slate-700">Long-term health, sustained energy, comfort</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* NAD+ Plans Section */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">NAD+ Plans</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Repair DNA, reduce inflammation and slow down the aging process. NAD+ Loading Dose Plans are applicable for 6 months before rolling into the Maintenance Plan.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 500mg Loading */}
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b-2 border-blue-200">
                  <CardTitle className="text-xl text-blue-700">500mg Loading Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-blue-700">$599</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold">Value:</span> $825</p>
                  </div>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 rounded-lg">
                    <Link href="/pricing">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 500mg Maintenance */}
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b-2 border-blue-200">
                  <CardTitle className="text-xl text-blue-700">500mg Maintenance Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-blue-700">$399</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold">Value:</span> $550</p>
                  </div>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 rounded-lg">
                    <Link href="/pricing">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 750mg Loading */}
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b-2 border-blue-200">
                  <CardTitle className="text-xl text-blue-700">750mg Loading Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-blue-700">$719</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold">Value:</span> $1,005</p>
                  </div>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 rounded-lg">
                    <Link href="/pricing">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 750mg Maintenance */}
              <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 border-b-2 border-blue-200">
                  <CardTitle className="text-xl text-blue-700">750mg Maintenance Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-blue-700">$479</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold">Value:</span> $670</p>
                  </div>
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-10 rounded-lg">
                    <Link href="/pricing">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Niagen Plans Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Niagen (NR) Plans</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">A powerful precursor to NAD+ with longer-lasting effects. Boost metabolism, energy, longevity and more with our Niagen (NR) Plans.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* 500mg Plan */}
              <Card className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200">
                  <CardTitle className="text-xl text-emerald-700">500mg Niagen (NR) Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-emerald-700">$599</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold">Value:</span> $860</p>
                  </div>
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-10 rounded-lg">
                    <Link href="/pricing">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* 1000mg Plan */}
              <Card className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200">
                  <CardTitle className="text-xl text-emerald-700">1000mg Niagen (NR) Plan</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-emerald-700">$1,199</p>
                    <p className="text-sm text-slate-600"><span className="font-semibold">Value:</span> $1,720</p>
                  </div>
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold h-10 rounded-lg">
                    <Link href="/pricing">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg max-w-4xl mx-auto">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Must be used at the studio of purchase.</span> Minimum 6-month commitment for NAD+ Loading Dose Plans. Loading doses are IV only. These Plans are a recurring purchase every 28 days. Medical services are provided by an independently owned physician practice. Some services may require medical clearance and prescription. We reserve the right to refuse service to anyone. Services, therapies, nutrients and prices may vary per location. The content on our site, blog posts, educational apps, promotions, newsletters, and any other written content is not intended to replace an evaluation by a qualified healthcare professional and are not intended as medical advice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-700 to-emerald-700 text-white">
          <div className="container max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Experience Cellular Rejuvenation?</h2>
            <p className="text-lg text-white/90">
              Choose NAD+ for immediate results or Niagen (NR) for superior comfort and longer-lasting effects. Both therapies are designed to help you turn back the clock with science.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-white/90 font-bold text-lg h-12 px-8 rounded-full shadow-lg transition-all hover:scale-105">
              <Link href="/pricing">View All Plans & Pricing</Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
