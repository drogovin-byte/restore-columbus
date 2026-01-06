import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Star, Users, Clock, Zap } from "lucide-react";
import { Link, useRoute } from "wouter";
import { comparisonGuides } from "@/lib/data";

// Color scheme for different services
const serviceColors: Record<string, { bg: string; border: string; text: string; accent: string }> = {
  "cryotherapy": { bg: "from-blue-50 to-cyan-50", border: "border-blue-300", text: "text-blue-700", accent: "bg-blue-100" },
  "infrared-sauna": { bg: "from-orange-50 to-amber-50", border: "border-orange-300", text: "text-orange-700", accent: "bg-orange-100" },
  "redlight": { bg: "from-red-50 to-rose-50", border: "border-red-300", text: "text-red-700", accent: "bg-red-100" },
  "red-light": { bg: "from-red-50 to-rose-50", border: "border-red-300", text: "text-red-700", accent: "bg-red-100" },
  "iv-therapy": { bg: "from-purple-50 to-violet-50", border: "border-purple-300", text: "text-purple-700", accent: "bg-purple-100" },
  "compression": { bg: "from-emerald-50 to-teal-50", border: "border-emerald-300", text: "text-emerald-700", accent: "bg-emerald-100" },
  "hyperbaric": { bg: "from-cyan-50 to-blue-50", border: "border-cyan-300", text: "text-cyan-700", accent: "bg-cyan-100" },
  "nad-iv": { bg: "from-indigo-50 to-purple-50", border: "border-indigo-300", text: "text-indigo-700", accent: "bg-indigo-100" },
  "niagen": { bg: "from-violet-50 to-purple-50", border: "border-violet-300", text: "text-violet-700", accent: "bg-violet-100" },
};

// Service-specific benefits
const serviceBenefits: Record<string, string[]> = {
  "cryotherapy": [
    "Reduces inflammation and muscle soreness",
    "Boosts mood and mental clarity",
    "Accelerates muscle recovery between workouts",
    "Improves circulation and athletic performance"
  ],
  "infrared-sauna": [
    "Deep detoxification through sweat",
    "Improves sleep quality and duration",
    "Enhances cardiovascular health",
    "Reduces stress and promotes relaxation"
  ],
  "redlight": [
    "Stimulates collagen production",
    "Boosts cellular energy and ATP production",
    "Improves skin health and appearance",
    "Supports muscle recovery and repair"
  ],
  "red-light": [
    "Stimulates collagen production",
    "Boosts cellular energy and ATP production",
    "Improves skin health and appearance",
    "Supports muscle recovery and repair"
  ],
  "iv-therapy": [
    "100% nutrient absorption bypassing digestion",
    "Rapid hydration and energy restoration",
    "Customizable formulas for specific goals",
    "Immediate results and sustained benefits"
  ],
  "compression": [
    "Flushes metabolic waste and toxins",
    "Accelerates recovery between sessions",
    "Improves circulation and lymphatic flow",
    "Reduces muscle soreness and fatigue"
  ],
  "hyperbaric": [
    "Increases oxygen delivery to cells",
    "Supports wound healing and recovery",
    "Reduces inflammation and swelling",
    "Enhances cognitive function and clarity"
  ],
  "nad-iv": [
    "Restores cellular energy at mitochondrial level",
    "Supports DNA repair and longevity",
    "Enhances mental clarity and focus",
    "Improves athletic performance and recovery"
  ],
  "niagen": [
    "Natural NAD+ precursor for daily support",
    "Faster infusion with fewer side effects",
    "Sustainable cellular energy production",
    "Supports cognitive enhancement and vitality"
  ],
};

export default function ComparisonDetail() {
  const [match, params] = useRoute("/comparison/:slug");
  const comparison = comparisonGuides.find(c => c.slug === params?.slug);

  if (!match || !comparison) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Comparison Not Found</h1>
          <Button asChild>
            <Link href="/comparisons">Back to Comparisons</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={comparison.title}
        description={comparison.description}
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": comparison.title,
          "description": comparison.description,
          "image": comparison.image,
          "author": {
            "@type": "Organization",
            "name": "Restore Hyper Wellness Columbus"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Restore Hyper Wellness Columbus",
            "logo": {
              "@type": "ImageObject",
              "url": "https://restore-columbus.manus.space/images/restore-logo.png"
            }
          },
          "datePublished": "2025-01-01",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://restore-columbus.manus.space/comparison/${comparison.slug}`
          }
        }}
      />

      {/* Hero with Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img 
          src={comparison.image} 
          alt={comparison.title}
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container max-w-4xl">
            <Link href="/comparisons" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Comparisons
            </Link>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight text-white mb-4 max-w-2xl">
              {comparison.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {comparison.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-primary/5 border-b border-border">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">5,000+ Clients</p>
              <p className="font-bold text-lg text-primary">Trusted</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-6 h-6 text-accent fill-accent" />
              </div>
              <p className="text-sm text-muted-foreground">4.9/5 Rating</p>
              <p className="font-bold text-lg text-primary">Rated</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Since 2019</p>
              <p className="font-bold text-lg text-primary">Established</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Science-Backed</p>
              <p className="font-bold text-lg text-primary">Proven</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Comparison */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
              Which Therapy Is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground">
              Compare our recommended therapies and choose the one that fits your wellness goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {comparison.solutions && comparison.solutions.map((solution: any, idx: number) => {
              const colors = serviceColors[solution.id] || serviceColors["cryotherapy"];
              const benefits = serviceBenefits[solution.id] || serviceBenefits["cryotherapy"];
              
              return (
                <Card key={solution.id} className={`border-2 ${colors.border} hover:shadow-lg transition-all overflow-hidden`}>
                  <CardHeader className={`bg-gradient-to-r ${colors.bg} pb-6 border-b-2 ${colors.border}`}>
                    <CardTitle className={`text-2xl ${colors.text} text-center`}>{solution.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    <p className="text-base text-foreground leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Key Benefits */}
                    <div className="space-y-3">
                      <p className={`font-bold text-sm ${colors.text} uppercase tracking-wide`}>Key Benefits:</p>
                      <ul className="space-y-2">
                        {benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${colors.text}`} />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Button asChild className={`w-full text-white font-bold h-12 rounded-lg mt-6 transition-all hover:shadow-md`}
                      style={{
                        backgroundColor: colors.text.replace('text-', '').split('-')[0] === 'blue' ? '#0369a1' :
                                       colors.text.replace('text-', '').split('-')[0] === 'orange' ? '#ea580c' :
                                       colors.text.replace('text-', '').split('-')[0] === 'red' ? '#dc2626' :
                                       colors.text.replace('text-', '').split('-')[0] === 'purple' ? '#7c3aed' :
                                       colors.text.replace('text-', '').split('-')[0] === 'emerald' ? '#059669' :
                                       colors.text.replace('text-', '').split('-')[0] === 'cyan' ? '#0891b2' :
                                       colors.text.replace('text-', '').split('-')[0] === 'indigo' ? '#4f46e5' :
                                       colors.text.replace('text-', '').split('-')[0] === 'violet' ? '#7c3aed' :
                                       '#0369a1'
                      }}
                    >
                      <Link href={solution.link}>
                        Learn More & Book
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Restore Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-12 text-center">
            Why Choose Restore for {comparison.title}?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Knowledgeable staff trained in all therapies to guide your wellness journey
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Medical-Grade Equipment</h3>
              <p className="text-muted-foreground">
                State-of-the-art technology for optimal results and safety
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">Personalized Plans</h3>
              <p className="text-muted-foreground">
                Customized therapy recommendations based on your specific goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-12 text-center">
            Real Results from Real Clients
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "The therapy sessions have completely transformed how I manage stress. I feel more relaxed and energized than I have in years."
                </p>
                <p className="font-bold text-primary">Sarah M.</p>
                <p className="text-sm text-muted-foreground">Columbus, OH</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  "I was skeptical at first, but after my first session, I noticed an immediate difference. The team is incredibly knowledgeable and professional."
                </p>
                <p className="font-bold text-primary">James T.</p>
                <p className="text-sm text-muted-foreground">Columbus, OH</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container max-w-4xl text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Transform Your Wellness?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your complimentary consultation today and discover which therapy is perfect for your goals.
          </p>
          <Button asChild className="bg-white text-primary hover:bg-white/90 font-bold h-12 px-8 rounded-lg">
            <Link href="/locations">
              Book Your Session
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
