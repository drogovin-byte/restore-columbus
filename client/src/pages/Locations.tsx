import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { locations } from "@/lib/data";
import { MapView } from "@/components/Map";
import { useState } from "react";
import { Link } from "wouter";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <Layout>
      <SEO 
        title="Locations - Easton, Dublin, Upper Arlington"
        description="Find a Restore Hyper Wellness near you in Columbus, OH. Locations in Easton, Dublin, and Upper Arlington. Open 7 days a week."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Restore Hyper Wellness Columbus",
          "url": "https://restore-columbus.manus.space/locations",
          "areaServed": ["Columbus", "Dublin", "Upper Arlington", "Easton"],
          "department": locations.map(loc => ({
            "@type": "LocalBusiness",
            "name": `Restore Hyper Wellness - ${loc.name}`,
            "image": loc.image,
            "telephone": loc.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": loc.address,
              "addressLocality": loc.city,
              "addressRegion": loc.state,
              "postalCode": loc.zip,
              "addressCountry": "US"
            }
          }))
        }}
      />
      {/* Breadcrumb Navigation */}
      <div className="container pt-6 pb-4">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Locations" }
          ]}
        />
      </div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-6xl">Find Your Studio</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Three convenient locations serving the Greater Columbus area. Visit us today to start your wellness journey.
          </p>
        </div>
      </div>

      {/* Location Cards - Horizontal Layout */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <Card 
                key={loc.id}
                className="cursor-pointer transition-all duration-300 border-2 overflow-hidden hover:shadow-lg hover:border-accent/50 h-full"
                onClick={() => window.location.href = `/locations/${loc.id}`}
              >

                {/* Location Image */}
                <div className="h-48 overflow-hidden bg-muted">
                  <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Location Info */}
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-2xl text-primary">
                    {loc.name.replace("Restore Hyper Wellness - ", "")}
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div className="text-muted-foreground">
                        <div>{loc.address}</div>
                        <div>{loc.city}, {loc.state} {loc.zip}</div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-accent shrink-0" />
                      <a 
                        href={`tel:${loc.phone.replace(/\D/g,'')}`} 
                        className="text-muted-foreground hover:text-primary transition-colors font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {loc.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div className="text-muted-foreground text-xs leading-relaxed">
                        {loc.hours}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex gap-2" onClick={(e) => e.stopPropagation()}>
                    <Button 
                      className="flex-1 bg-primary text-white hover:bg-primary/90 font-semibold" 
                      asChild
                    >
                      <a href={`tel:${loc.phone.replace(/\D/g,'')}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white font-semibold" 
                      asChild
                    >
                      <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">
                        <Navigation className="w-4 h-4 mr-2" />
                        Directions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-2">
              Serving Greater Columbus
            </h2>
            <p className="text-muted-foreground text-lg">
              All three locations are marked on the map below. Click on any marker to see more details.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-[500px] md:h-[600px] bg-white">
            <MapView 
              className="w-full h-full"
              onMapReady={(map: google.maps.Map) => {
                // Center map roughly between locations
                map.setCenter({ lat: 40.05, lng: -82.95 });
                map.setZoom(11);
                
                // Add markers for each location with info windows
                locations.forEach(loc => {
                  let position = { lat: 40.05, lng: -82.95 };
                  
                  if(loc.id === 'easton') position = { lat: 40.0497, lng: -82.9153 };
                  if(loc.id === 'dublin') position = { lat: 40.1103, lng: -83.1141 };
                  if(loc.id === 'upper-arlington') position = { lat: 40.0086, lng: -83.0556 };

                  const marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: loc.name
                  });

                  // Info window for each marker
                  const infoWindow = new google.maps.InfoWindow({
                    content: `
                      <div style="padding: 12px; font-family: system-ui;">
                        <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #003d6b;">
                          ${loc.name.replace("Restore Hyper Wellness - ", "")}
                        </h3>
                        <p style="margin: 4px 0; font-size: 13px;">
                          ${loc.address}<br/>
                          ${loc.city}, ${loc.state} ${loc.zip}
                        </p>
                        <p style="margin: 4px 0; font-size: 13px;">
                          <strong>Phone:</strong> ${loc.phone}
                        </p>
                      </div>
                    `
                  });

                  marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                  });
                });
              }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
