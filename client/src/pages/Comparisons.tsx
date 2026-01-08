import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import TherapyQuiz from "@/components/TherapyQuiz";
import { comparisonGuides } from "@/lib/data";

export default function Comparisons() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl">
            Wellness Solutions
          </h1>
          <p className="text-lg text-white/80">
            Discover outcome-focused therapy combinations designed to address your specific health goals.
          </p>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comparisonGuides.map((comp) => (
              <Link key={comp.id} href={`/comparison/${comp.slug}`}>
                <Card className="group h-full overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img 
                      src={comp.cardImage || comp.image} 
                      alt={comp.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <CardHeader className="pb-3 pt-6">
                    <CardTitle className="text-lg font-bold text-primary group-hover:text-secondary-foreground transition-colors duration-200 leading-tight">
                      {comp.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 pb-6">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {comp.excerpt}
                    </p>
                    
                    {/* CTA */}
                    <div className="pt-2 inline-flex items-center text-sm font-bold text-accent group-hover:text-accent-foreground transition-colors duration-200">
                      Click Here For The Solution 
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 duration-200" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
            <a href="https://3000-i5tg0ej12i3rz29p27kc4-77abe038.us2.manus.computer/book" target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
