import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin, Phone, Clock, Star, ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { locations, services } from "@/lib/data";
import { MapView } from "@/components/Map";

// Define landmarks for each location to enhance local SEO
const locationLandmarks: Record<string, string[]> = {
  "dublin": ["Bridge Park", "Scioto Mile", "Historic Dublin", "Dublin Methodist Hospital"],
  "easton": ["Easton Town Center", "Easton Gateway", "Columbus Airport (CMH)", "Gahanna"],
  "upper-arlington": ["Ohio State University", "Lane Avenue", "Shops on Lane", "Grandview Heights"]
};

// Helper to generate page config dynamically
const getPageConfig = (slug: string) => {
  // Parse slug: service-location (e.g., "cryotherapy-dublin", "iv-drip-easton")
  // We need to find the matching service and location from our data
  
  // Sort locations by length desc to match "upper-arlington" before "dublin"
  // This prevents partial matching issues
  const sortedLocations = [...locations].sort((a, b) => b.id.length - a.id.length);
  
  const location = sortedLocations.find(loc => slug.endsWith(loc.id));
  if (!location) return null;
  
  const serviceId = slug.replace(`-${location.id}`, "");
  const service = services.find(s => s.id === serviceId);
  if (!service) return null;

  const landmarks = locationLandmarks[location.id] || [];
  const primaryLandmark = landmarks[0] || location.city;

  // Generate dynamic content based on service and location
  return {
    service,
    location,
    landmarks,
    title: `${service.title} near ${primaryLandmark} in ${location.city} | Restore`,
    headline: `${location.city}'s Premier ${service.title} Studio`,
    subheadline: `Experience the benefits of ${service.title.toLowerCase()} just minutes from ${primaryLandmark} and ${landmarks[1] || location.city}.`,
    description: `Best ${service.title} near ${primaryLandmark} in ${location.city}, OH. Visit Restore Hyper Wellness at ${location.address}. Book your session today for recovery and wellness.`,
    localContent: `Located conveniently at ${location.address}, our ${location.city} studio serves the local community near ${landmarks.join(", ")}. Whether you're a busy professional, an athlete, or just looking to improve your wellness, our expert team in ${location.city} is here to help you feel your best.`
  };
};

export default function LocalLanding() {
  const [match, params] = useRoute("/:slug");
  
  // Only process if we have a slug
  if (!match || !params?.slug) return null;

  const config = getPageConfig(params.slug);

  // If no valid config found (not a valid service-location combo), 
  // return null to let other routes handle it or show 404
  if (!config) return null;

  const { service, location, landmarks } = config;

  return (
    <Layout>
      <SEO 
        title={config.title}
        description={config.description}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "provider": {
            "@type": "LocalBusiness",
            "name": location.name,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": location.address,
              "addressLocality": location.city,
              "addressRegion": location.state,
              "postalCode": location.zip,
              "addressCountry": "US"
            },
            "telephone": location.phone,
            "image": location.image
          },
          "areaServed": {
            "@type": "City",
            "name": location.city
          },
          "description": config.description
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={`${service.title} at ${location.name}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-1 text-sm font-bold uppercase tracking-wider mb-2 border-none">
              Now Open near {landmarks[0]}
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight">
              {config.headline}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              {config.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-bold text-lg h-14 px-8 rounded-full shadow-lg transition-all hover:scale-105">
                <a href={`tel:${location.phone.replace(/\D/g,'')}`}>Call {location.city} Studio</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg h-14 px-8 rounded-full backdrop-blur-sm transition-all hover:scale-105">
                <a href="https://www.restore.com/book-now">Book Appointment</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl text-primary">
              Why Choose {service.title} near {landmarks[0]}?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {config.localContent}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {service.benefits.slice(0, 4).map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Location Card */}
          <Card className="border-none shadow-xl bg-card overflow-hidden">
            <div className="h-48 bg-muted relative">
              <img 
                src={location.image} 
                alt={location.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center gap-1 text-accent font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{location.averageRating}</span>
                  <span className="text-white/80 font-normal">({location.totalReviews} reviews)</span>
                </div>
              </div>
            </div>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary text-lg">{location.name}</h3>
                    <p className="text-muted-foreground">{location.address}</p>
                    <p className="text-muted-foreground">{location.city}, {location.state} {location.zip}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href={`tel:${location.phone.replace(/\D/g,'')}`} className="text-lg font-semibold hover:text-accent transition-colors">
                    {location.phone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">{location.hours}</p>
                </div>
              </div>

              <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12">
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer">
                  Get Directions to {location.city}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <MapView 
          className="w-full h-full"
          onMapReady={(map: google.maps.Map) => {
            let position = { lat: 40.05, lng: -82.95 };
            if(location.id === 'easton') position = { lat: 40.0497, lng: -82.9153 };
            if(location.id === 'dublin') position = { lat: 40.1103, lng: -83.1141 };
            if(location.id === 'upper-arlington') position = { lat: 40.0086, lng: -83.0556 };

            map.setCenter(position);
            map.setZoom(15);

            new google.maps.Marker({
              position: position,
              map: map,
              title: location.name
            });
          }}
        />
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading font-bold text-3xl text-center text-primary mb-12">
            What Our {location.city} Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.reviews.slice(0, 3).map((review, i) => (
              <Card key={i} className="border-none shadow-md bg-card">
                <CardContent className="p-6 space-y-4">
                  <div className="flex text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-primary">{review.author}</span>
                    <span className="text-muted-foreground/60">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl">Ready to Feel Your Best?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Book your {service.title} session at our {location.city} studio today.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14 px-10 rounded-full">
            <a href="https://www.restore.com/book-now">Book Now</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
