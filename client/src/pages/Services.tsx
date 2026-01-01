import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <Layout>
      <div className="bg-primary text-white py-20">
        <div className="container text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-6xl">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive, science-backed therapies designed to help you feel your best, recover faster, and live longer.
          </p>
        </div>
      </div>

      <div className="container py-20 space-y-32">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className={`flex flex-col gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
              </div>
            </div>
            
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-accent text-accent-foreground font-bold px-3 py-1">
                  {service.category}
                </Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-lg text-primary">Potential Benefits:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8">
                  <Link href="https://www.restore.com/book-now">
                    Book {service.title} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-muted/30 py-20">
        <div className="container text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Not Sure Where to Start?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expert team can help you build a customized wellness plan based on your unique goals and health data.
          </p>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg h-14 px-8 rounded-full">
            <Link href="/contact">Schedule a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
