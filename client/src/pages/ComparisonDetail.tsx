import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Star, Users, Clock, Zap } from "lucide-react";
import { Link, useRoute } from "wouter";
import { comparisonGuides } from "@/lib/data";

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
            {comparison.solutions && comparison.solutions.map((solution: any, idx: number) => (
              <Card key={solution.id} className="border-2 border-border hover:border-primary transition-colors overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-4">
                  <CardTitle className="text-2xl text-primary">{solution.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <p className="text-base text-foreground leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-3">
                    <p className="font-bold text-sm text-primary uppercase tracking-wide">Key Benefits:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Rapid results visible within sessions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Scientifically proven effectiveness</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">No downtime or side effects</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">Works synergistically with other therapies</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg mt-6">
                    <Link href={solution.link}>
                      Learn More & Book
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                <p className="text-sm text-muted-foreground">Dublin, OH</p>
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
                  "This has become part of my weekly routine. The results speak for themselves—better sleep, more energy, and improved recovery."
                </p>
                <p className="font-bold text-primary">Maria L.</p>
                <p className="text-sm text-muted-foreground">Upper Arlington, OH</p>
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
                  "Outstanding service. The team really cares about your wellness journey and takes time to understand your goals."
                </p>
                <p className="font-bold text-primary">David K.</p>
                <p className="text-sm text-muted-foreground">Columbus, OH</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary/5">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-12 text-center">
            Common Questions
          </h2>
          
          <div className="space-y-4">
            {[
              {
                q: "How soon will I see results?",
                a: "Most clients notice benefits within their first session. Results continue to improve with regular use over 2-4 weeks."
              },
              {
                q: "Is it safe for everyone?",
                a: "Our therapies are safe for most people. We screen all clients for contraindications and customize treatments for your needs."
              },
              {
                q: "How often should I come?",
                a: "Frequency depends on your goals. We recommend 2-4 sessions per week for optimal results, but we customize plans for you."
              },
              {
                q: "Do you offer memberships?",
                a: "Yes! We offer flexible membership options that provide significant savings compared to retail pricing."
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <p className="font-bold text-primary mb-2">{item.q}</p>
                  <p className="text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container max-w-3xl text-center space-y-8">
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Ready to Transform Your Wellness?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of Columbus residents who have already experienced the Restore difference. Your first consultation is free.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14 px-8 rounded-lg">
              <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">
                Book Your Session
              </a>
            </Button>
          </div>

          <div className="space-y-3">
            <p className="text-sm text-white/80 font-semibold">Or call your preferred location:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-base h-12 rounded-lg">
                <a href="tel:614-944-9041">
                  Easton: 614-944-9041
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-base h-12 rounded-lg">
                <a href="tel:614-553-7207">
                  Dublin: 614-553-7207
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-bold text-base h-12 rounded-lg">
                <a href="tel:614-745-0966">
                  Upper Arlington: 614-745-0966
                </a>
              </Button>
            </div>
          </div>

          <p className="text-sm text-white/80">
            ✓ Free consultation • ✓ No commitment • ✓ Expert guidance
          </p>
        </div>
      </section>
    </Layout>
  );
}
