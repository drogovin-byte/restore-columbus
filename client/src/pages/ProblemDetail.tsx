import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { problemStates, services } from "@/lib/data";

export default function ProblemDetail() {
  const [match, params] = useRoute("/problem/:id");
  const problem = problemStates.find(p => p.id === params?.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!match || !problem) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Page Not Found</h1>
          <Button asChild>
            <Link href="/">Back Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = problem.icon;
  const recommendedServices = services.filter(s => 
    problem.recommendedServices.includes(s.id)
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={problem.image} 
            alt={problem.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl space-y-6">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-1 text-sm font-bold uppercase tracking-wider border-none">
              Your Health Goal
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight">
              {problem.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              {problem.description}
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-bold text-lg h-14 px-8 rounded-full shadow-lg transition-all hover:scale-105 w-fit">
              {(problem.id === 'mens-health' || problem.id === 'womens-wellness') ? (
                <Link href="/book">Book Consultation</Link>
              ) : (
                <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Consultation</a>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl text-primary">The Problem</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {problem.problem}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed italic">
              You're not alone. Thousands of Columbus residents face this challenge every day. The good news? It's treatable.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl text-primary">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {problem.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Services */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Recommended Therapies</h2>
            <p className="text-muted-foreground text-lg">
              These science-backed treatments are specifically chosen to address your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {recommendedServices.map((service) => (
              <Link key={service.id} href={`/service/${service.id}`}>
                <Card className="group h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-heading font-bold text-xl text-primary group-hover:text-secondary-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="pt-2 flex items-center text-sm font-bold text-secondary-foreground group-hover:text-accent-foreground transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-primary mb-12 text-center">How It Works</h2>
          
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Free Consultation",
                desc: "Schedule a free 15-minute consultation with our wellness team. We'll assess your needs and recommend the best therapies for you."
              },
              {
                step: 2,
                title: "Personalized Plan",
                desc: "We create a customized treatment plan based on your goals, timeline, and budget. No one-size-fits-all approach."
              },
              {
                step: 3,
                title: "Start Therapy",
                desc: "Begin your first session. Our experienced staff will guide you through every step and ensure your comfort."
              },
              {
                step: 4,
                title: "Track Progress",
                desc: "Monitor your results with regular check-ins. We adjust your plan as needed to optimize outcomes."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  {item.step < 4 && <div className="w-1 h-16 bg-primary/30 mt-2" />}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Restore */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-primary mb-12 text-center">Why Choose Restore Columbus?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Local Ownership",
                desc: "Owned and operated by Columbus residents who care about our community's health."
              },
              {
                title: "Medical Grade",
                desc: "All therapies are FDA-cleared and administered by licensed medical professionals."
              },
              {
                title: "Science-Backed",
                desc: "Every therapy is grounded in peer-reviewed research and clinical evidence."
              },
              {
                title: "Personalized",
                desc: "We customize every plan to your unique needs, goals, and preferences."
              },
              {
                title: "Results-Focused",
                desc: "We track your progress and adjust your plan to ensure you get real results."
              },
              {
                title: "Three Locations",
                desc: "Convenient access in Easton, Dublin, and Upper Arlington."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="container relative z-10 text-center space-y-8 max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Ready to Feel Better?</h2>
          <p className="text-lg text-white/80">
            Don't let {problem.title.toLowerCase()} control your life. Take the first step toward feeling your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14 px-10 rounded-full">
              <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Your First Session</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-bold text-lg h-14 px-10 rounded-full">
              <a href="https://manus.im/app/gDb7fBedok5ZZ3AQc00pA1" target="_blank" rel="noopener noreferrer">Free Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
