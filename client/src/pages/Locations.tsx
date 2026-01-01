import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { locations } from "@/lib/data";
import { MapView } from "@/components/Map";
import { useState } from "react";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <Layout>
      <div className="bg-primary text-white py-20">
        <div className="container text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-6xl">Find Your Studio</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Three convenient locations serving the Greater Columbus area. Visit us today to start your wellness journey.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[800px] lg:h-[600px]">
          {/* Location List */}
          <div className="lg:col-span-1 space-y-6 overflow-y-auto pr-2">
            {locations.map((loc) => (
              <Card 
                key={loc.id} 
                id={loc.id}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  selectedLocation.id === loc.id 
                    ? "border-accent shadow-lg scale-[1.02]" 
                    : "border-transparent hover:border-accent/50"
                }`}
                onClick={() => setSelectedLocation(loc)}
              >
                <div className="h-32 overflow-hidden">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-xl text-primary">{loc.name.replace("Restore Hyper Wellness - ", "")}</h3>
                  
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
                      <span>{loc.address}<br/>{loc.city}, {loc.state} {loc.zip}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="hover:text-primary transition-colors">{loc.phone}</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 mt-1 text-accent shrink-0" />
                      <span>{loc.hours}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <Button className="flex-1 bg-primary text-white hover:bg-primary/90" asChild>
                      <a href={`tel:${loc.phone.replace(/\D/g,'')}`}>Call</a>
                    </Button>
                    <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-white" asChild>
                      <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer">Directions</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border shadow-inner h-full min-h-[400px]">
            <MapView 
              className="w-full h-full"
              onMapReady={(map: google.maps.Map) => {
                // In a real implementation, we would add markers here
                // For now, we just center the map on Columbus
                map.setCenter({ lat: 40.05, lng: -82.95 }); // Center roughly between locations
                map.setZoom(11);
                
                // Add markers for each location
                locations.forEach(loc => {
                  // Mock coordinates for demo purposes
                  // Easton
                  if(loc.id === 'easton') {
                    new google.maps.Marker({
                      position: { lat: 40.0497, lng: -82.9153 },
                      map: map,
                      title: loc.name
                    });
                  }
                  // Upper Arlington
                  if(loc.id === 'upper-arlington') {
                    new google.maps.Marker({
                      position: { lat: 40.0086, lng: -83.0556 },
                      map: map,
                      title: loc.name
                    });
                  }
                  // Polaris
                  if(loc.id === 'polaris') {
                    new google.maps.Marker({
                      position: { lat: 40.1465, lng: -82.9722 },
                      map: map,
                      title: loc.name
                    });
                  }
                });
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
