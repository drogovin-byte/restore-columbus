import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Zap, TrendingUp, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NADNiagenComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-blue-600 text-white overflow-hidden">
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
              NAD+ vs Niagen (NR): Which is Right for You?
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Understand the differences between two powerful cellular rejuvenation therapies and choose the one that aligns with your wellness goals.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* NAD+ Card */}
            <Card className="border-2 border-cyan-200 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50 border-b-2 border-cyan-200">
                <CardTitle className="text-2xl text-cyan-700">NAD+ IV Therapy</CardTitle>
                <p className="text-sm text-cyan-600 font-medium mt-2">Direct cellular energy restoration</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">60-90 Minute Infusion</p>
                      <p className="text-sm text-slate-600">Longer session with immediate results</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Immediate Effects</p>
                      <p className="text-sm text-slate-600">Feel energized within hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Temporary Side Effects</p>
                      <p className="text-sm text-slate-600">Flushing, nausea, muscle aches (brief)</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm text-slate-600 mb-2">Starting at</p>
                  <p className="text-2xl font-bold text-cyan-700">$440 <span className="text-sm font-normal text-slate-600">(Member)</span></p>
                </div>
              </CardContent>
            </Card>

            {/* Niagen Card */}
            <Card className="border-2 border-emerald-200 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b-2 border-emerald-200">
                <CardTitle className="text-2xl text-emerald-700">Niagen (NR) IV Therapy</CardTitle>
                <p className="text-sm text-emerald-600 font-medium mt-2">Advanced NAD+ precursor therapy</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">30-45 Minute Infusion</p>
                      <p className="text-sm text-slate-600">Faster, more convenient session</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Gradual Benefits</p>
                      <p className="text-sm text-slate-600">Results build over 24-72 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-900">Minimal Side Effects</p>
                      <p className="text-sm text-slate-600">Comfortable experience for most</p>
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
      <section className="py-16 bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Detailed Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-gradient-to-r from-slate-100 to-slate-50 border-b-2 border-slate-200">
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Factor</th>
                  <th className="px-6 py-4 text-left font-bold text-cyan-700">NAD+ IV</th>
                  <th className="px-6 py-4 text-left font-bold text-emerald-700">Niagen (NR) IV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">Infusion Time</td>
                  <td className="px-6 py-4 text-slate-700">60-90 minutes</td>
                  <td className="px-6 py-4 text-slate-700">30-45 minutes</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">Mechanism</td>
                  <td className="px-6 py-4 text-slate-700">Direct NAD+ replenishment</td>
                  <td className="px-6 py-4 text-slate-700">NAD+ precursor (body synthesizes)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">Side Effects</td>
                  <td className="px-6 py-4 text-slate-700">Flushing, nausea, muscle aches (common)</td>
                  <td className="px-6 py-4 text-slate-700">Minimal to none (rare)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">Onset of Effects</td>
                  <td className="px-6 py-4 text-slate-700">Immediate (within hours)</td>
                  <td className="px-6 py-4 text-slate-700">Gradual (24-72 hours)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">500mg Pricing</td>
                  <td className="px-6 py-4 text-slate-700">$440 Member / $550 Retail</td>
                  <td className="px-6 py-4 text-slate-700">$690 Member / $860 Retail</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-900">High Dose Pricing</td>
                  <td className="px-6 py-4 text-slate-700">750mg: $530 M / $670 R</td>
                  <td className="px-6 py-4 text-slate-700">1000mg: $1,380 M / $1,720 R</td>
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

      {/* Who Should Choose */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Which Therapy is Right for You?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* NAD+ Ideal For */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Choose NAD+ if:</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "You want immediate energy and mental clarity",
                  "You're recovering from acute fatigue or jet lag",
                  "You prefer proven, extensively researched therapy",
                  "You have a specific event requiring peak performance",
                  "You don't mind temporary side effects for rapid results"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Niagen Ideal For */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Choose Niagen if:</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  "You prefer a comfortable, side-effect-free experience",
                  "You're building a long-term wellness routine",
                  "You want sustained cellular rejuvenation over time",
                  "You're sensitive to traditional NAD+ side effects",
                  "You value convenience and minimal downtime"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combination Approach */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container max-w-3xl">
          <Card className="border-2 border-purple-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 border-b-2 border-purple-200">
              <CardTitle className="text-2xl text-purple-900">The Hybrid Approach</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-slate-700 leading-relaxed">
                Many of our most dedicated wellness enthusiasts use both therapies strategically. For example, they might use <strong>NAD+ for acute needs</strong> (pre-event energy boost, recovery from illness) and <strong>Niagen for maintenance</strong> (monthly sessions for sustained cellular health).
              </p>
              
              <p className="text-slate-700 leading-relaxed">
                This hybrid approach maximizes the benefits of both therapies while managing cost and experience preferences. Our medical team can help you design a personalized protocol that works for your lifestyle and goals.
              </p>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-4">
                <p className="text-sm text-purple-900 font-semibold">💡 Pro Tip</p>
                <p className="text-sm text-purple-800 mt-1">Start with a 500mg dose of either therapy to assess tolerance. Most patients notice significant benefits within the first session, with optimal results after 3-6 sessions spaced 1-2 weeks apart.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Experience Cellular Rejuvenation?</h2>
            
            <p className="text-lg text-white/90">
              Book your first NAD+ or Niagen session today and discover which therapy aligns best with your wellness journey.
            </p>
            
            <div className="space-y-3 text-sm">
              <p className="font-semibold">Call your local studio:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="font-semibold">Easton</p>
                  <p className="text-white/80">614-944-9041</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="font-semibold">Dublin</p>
                  <p className="text-white/80">614-553-7207</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="font-semibold">Upper Arlington</p>
                  <p className="text-white/80">614-745-0966</p>
                </div>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-white/90 font-bold text-lg h-12 px-8 rounded-full shadow-lg transition-all hover:scale-105 w-full sm:w-auto">
              <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">
                Book Your Session
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
