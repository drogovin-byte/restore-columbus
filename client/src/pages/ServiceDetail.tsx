import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Clock, DollarSign, Users, X, ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { services, problemStates } from "@/lib/data";

export default function ServiceDetail() {
  const [match, params] = useRoute("/service/:id");
  const service = services.find(s => s.id === params?.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!match || !service) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Service Not Found</h1>
          <Button asChild>
            <Link href="/services">Back to Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const Icon = service.icon;
  const relatedProblems = problemStates.filter(p => 
    p.recommendedServices.includes(service.id)
  );

  return (
    <Layout>
      <SEO 
        title={service.title}
        description={service.shortDesc}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.shortDesc,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Restore Hyper Wellness Columbus"
          },
          "areaServed": {
            "@type": "City",
            "name": "Columbus"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Wellness Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title
                }
              }
            ]
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 pb-12 text-white">
          <div className="space-y-4">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-1 text-sm font-bold uppercase tracking-wider border-none">
              {service.category}
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight max-w-3xl">
              {service.title}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary">What Is {service.title}?</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.fullDesc}
              </p>
            </div>

            {/* What to Expect */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                What to Expect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.whatToExpect}
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who It's For */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary flex items-center gap-2">
                <Users className="w-6 h-6 text-accent" />
                Who It's For
              </h2>
              <div className="space-y-2">
                {service.whoItsFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who It's NOT For */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-destructive" />
                Who It's NOT For
              </h2>
              <div className="space-y-2">
                {service.whoItsNotFor.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-muted-foreground">
                    <X className="w-4 h-4 text-destructive mt-1 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-2xl text-primary">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border border-border rounded-lg p-6 space-y-2">
                    <h3 className="font-bold text-primary">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="border-none shadow-lg bg-card sticky top-24">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  Pricing
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-3 font-semibold">Pricing Options</p>
                  <div className="space-y-2">
                    {service.pricing.split(' | ').map((option, idx) => (
                      <p key={idx} className="text-sm text-primary font-medium">{option}</p>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12">
                  <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Now</a>
                </Button>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-bold h-12">
                  <Link href="/memberships">View Memberships</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Related Problems */}
            {relatedProblems.length > 0 && (
              <Card className="border-none shadow-md bg-secondary/30">
                <CardHeader>
                  <CardTitle className="text-lg">Solves These Problems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {relatedProblems.map((problem) => (
                    <Link key={problem.id} href={`/problem/${problem.id}`}>
                      <div className="p-3 bg-card rounded-lg hover:bg-muted transition-colors cursor-pointer border border-border">
                        <p className="font-semibold text-primary text-sm">{problem.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{problem.description}</p>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Related Services */}
            <Card className="border-none shadow-md bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg">Often Combined With</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {services.slice(0, 3).map((relatedService) => (
                  relatedService.id !== service.id && (
                    <Link key={relatedService.id} href={`/service/${relatedService.id}`}>
                      <div className="p-2 text-sm text-primary hover:text-accent transition-colors cursor-pointer flex items-center gap-2">
                        <ArrowRight className="w-3 h-3" />
                        {relatedService.title}
                      </div>
                    </Link>
                  )
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl">Ready to Experience {service.title}?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Book your first session today and discover how {service.title} can transform your health and performance.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14 px-10 rounded-full">
            <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Your Session</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
