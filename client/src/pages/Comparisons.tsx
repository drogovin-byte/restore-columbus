import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { comparisons } from "@/lib/data";

export default function Comparisons() {
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
            {comparisons.map((comp) => (
              <Link key={comp.id} href={`/comparison/${comp.slug}`}>
                <Card className="group h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card cursor-pointer">
                  <CardHeader className="bg-primary/10">
                    <CardTitle className="text-primary group-hover:text-secondary-foreground transition-colors">
                      {comp.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {comp.excerpt}
                    </p>
                    <div className="pt-2 flex items-center text-sm font-bold text-secondary-foreground group-hover:text-accent-foreground transition-colors">
                      Read Full Comparison <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-2xl text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl text-primary">Still Unsure?</h2>
          <p className="text-muted-foreground text-lg">
            Schedule a free consultation with our wellness team. We'll help you choose the right therapies for your specific goals.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg h-14 px-10 rounded-full">
            <Link href="https://www.restore.com/book-now">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
