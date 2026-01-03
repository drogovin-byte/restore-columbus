import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import TherapyQuiz from "@/components/TherapyQuiz";
import { comparisons } from "@/lib/data";

export default function Comparisons() {
  const accentColors = [
    { bg: 'from-blue-500/15 to-cyan-500/15', border: 'border-l-blue-500', accent: 'text-blue-600' },
    { bg: 'from-purple-500/15 to-pink-500/15', border: 'border-l-purple-500', accent: 'text-purple-600' },
    { bg: 'from-amber-500/15 to-orange-500/15', border: 'border-l-amber-500', accent: 'text-amber-600' },
    { bg: 'from-emerald-500/15 to-teal-500/15', border: 'border-l-emerald-500', accent: 'text-emerald-600' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl">
            Comparison Guides
          </h1>
          <p className="text-lg text-white/80">
            Confused about which therapy is right for you? We break down the science and help you make an informed decision.
          </p>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comparisons.map((comp, idx) => {
              const colors = accentColors[idx % accentColors.length];
              
              return (
                <Link key={comp.id} href={`/comparison/${comp.slug}`}>
                  <Card className={`group h-full overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card cursor-pointer border-l-4 ${colors.border} relative`}>
                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                    
                    {/* Decorative floating element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                    
                    {/* Top accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg}`} />
                    
                    <CardHeader className="relative z-10 bg-gradient-to-r from-primary/10 to-transparent pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <CardTitle className="text-primary group-hover:text-secondary-foreground transition-colors text-lg font-bold leading-tight">
                          {comp.title}
                        </CardTitle>
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:from-accent/40 group-hover:to-accent/20 transition-all flex-shrink-0`}>
                          <ArrowRight className="w-5 h-5 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-4 space-y-4 relative z-10">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {comp.excerpt}
                      </p>
                      
                      {/* Subtle divider */}
                      <div className="h-px bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0" />
                      
                      <div className="pt-2 flex items-center text-sm font-semibold text-secondary-foreground group-hover:text-accent-foreground transition-colors">
                        Read Full Comparison 
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 duration-300" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Therapy Quiz Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl">
          <div className="text-center space-y-6 mb-12">
            <h2 className="font-heading font-bold text-4xl">Not Sure Which Therapy?</h2>
            <p className="text-lg text-white/80">
              Take our quick 3-question quiz to get personalized therapy recommendations based on your wellness goals.
            </p>
          </div>
          <TherapyQuiz />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-2xl text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl text-primary">Still Have Questions?</h2>
          <p className="text-muted-foreground text-lg">
            Schedule a free consultation with our wellness team. We'll help you choose the right therapies for your specific goals.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg h-14 px-10 rounded-full">
            <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
