import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLocation, Link } from "wouter";
import { services } from "@/lib/data";

export default function Services() {
  const [, setLocation] = useLocation();
  
  // Group services by category
  const servicesByCategory = {
    "Core Therapies": services.filter(s => s.category === "Recovery" || s.category === "Wellness"),
    "Power Up at the Cellular Level": services.filter(s => s.category === "Optimization" || s.category === "Longevity"),
    "Reveal Youthful, Beautiful Skin": services.filter(s => s.category === "Skin Health"),
    "Medical Services": services.filter(s => s.category === "Medical Services"),
    "Weight Loss": services.filter(s => s.category === "Weight Loss"),
    "Recovery & Wellness": services.filter(s => s.category === "Recovery & Wellness" || s.category === "Men's Health")
  };

  // Generate Service schema markup for each service
  const generateServiceSchema = (service: any) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.fullDesc,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Restore Hyper Wellness Columbus",
      "url": "https://restore-columbus.manus.space",
      "areaServed": {
        "@type": "City",
        "name": "Columbus",
        "addressCountry": "US",
        "addressRegion": "OH"
      }
    },
    "serviceType": service.category,
    "image": service.image,
    "url": `https://restore-columbus.manus.space/service/${service.id}`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "description": service.pricing
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1002"
    }
  });

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>, serviceId: string) => {
    const target = e.target as HTMLElement;
    // Don't navigate if clicking on button or link
    if (target.closest('button') || target.closest('a')) return;
    setLocation(`/service/${serviceId}`);
  };

  return (
    <Layout>
      {/* Service Schema Markup for all services */}
      {services.map((service) => (
        <script key={service.id} type="application/ld+json">
          {JSON.stringify(generateServiceSchema(service))}
        </script>
      ))}
      
      <div className="bg-primary text-white py-20">
        <div className="container text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-6xl">Our Therapies</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive, science-backed therapies designed to help you feel your best, recover faster, and live longer.
          </p>
        </div>
      </div>

      <div className="container py-20 space-y-24">
        {Object.entries(servicesByCategory).map(([category, categoryServices]) => 
          categoryServices.length > 0 ? (
            <div key={category} className="space-y-12">
              {/* Section Header */}
              <div className="text-center space-y-3 pb-8 border-b-2 border-accent/20">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">{category}</h2>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {categoryServices.map((service) => (
                  <div 
                    key={service.id}
                    id={service.id}
                    className="border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group bg-card"
                    itemScope 
                    itemType="https://schema.org/Service"
                    onClick={(e) => handleCardClick(e, service.id)}
                  >
                    {/* Service Image - Center */}
                    <div className="mb-6">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          itemProp="image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                      </div>
                    </div>

                    {/* Service Info - Left Side */}
                    <div className="space-y-4 overflow-hidden">
                      <div>
                        <h3 className="font-heading font-bold text-xl text-primary mb-2" itemProp="name">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground" itemProp="description">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* MAY HELP Benefits */}
                      <div className="space-y-3 pt-4 border-t border-border">
                        <p className="font-bold text-sm text-primary">MAY HELP</p>
                        <ul className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-accent font-bold mt-0.5">—</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learn More Link */}
                      <div className="pt-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <Button 
                          asChild 
                          variant="ghost" 
                          className="text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto font-semibold text-sm group/link w-full justify-start min-w-0"
                        >
                          <a href={`/service/${service.id}`} className="flex items-center gap-1 min-w-0">
                            <span className="flex items-center gap-1 min-w-0 truncate">
                              Learn about {service.title}
                              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 flex-shrink-0" />
                            </span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null
        )}
      </div>

      <section className="bg-muted/30 py-20">
        <div className="container text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Not Sure Where to Start?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our expert team can help you build a customized wellness plan based on your unique goals and health data.
          </p>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg h-14 px-8 rounded-full">
            <a href="https://3000-i5tg0ej12i3rz29p27kc4-77abe038.us2.manus.computer/book" target="_blank" rel="noopener noreferrer">Schedule a Free Consultation</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
