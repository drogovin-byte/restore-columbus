import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, ParkingCircle, MapPinIcon, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";
import { locations, services } from "@/lib/data";
import { useEffect } from "react";
import GoogleReviews from "@/components/GoogleReviews";
import { MapView } from "@/components/Map";

export default function LocationDetail() {
  const [match, params] = useRoute("/locations/:id");
  const location = locations.find(l => l.id === params?.id);

  useEffect(() => {
    // Add schema markup for LocalBusiness
    if (location) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `https://restore-columbus.com/location/${location.id}`,
        "name": location.name,
        "image": location.image,
        "description": `${location.name} - Premier wellness destination in ${location.city}, OH offering cryotherapy, IV therapy, red light therapy, and more.`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": location.address,
          "addressLocality": location.city,
          "addressRegion": location.state,
          "postalCode": location.zip,
          "addressCountry": "US"
        },
        "telephone": location.phone,
        "url": `https://restore-columbus.manus.space/location/${location.id}`,
        "priceRange": "$$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "10:00",
            "closes": "19:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "11:00",
            "closes": "16:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/restore",
          "https://www.instagram.com/restore"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": location.averageRating.toString(),
          "reviewCount": location.totalReviews.toString(),
          "bestRating": "5",
          "worstRating": "1"
        }
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [location]);

  if (!match || !location) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Location Not Found</h1>
          <Button asChild>
            <Link href="/locations">Back to Locations</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const nearbyLandmarks = {
    "easton": ["Easton Shopping Center", "Columbus Airport CMH", "New Albany"],
    "dublin": ["Tuttle Crossing Mall", "Riverside Drive", "Muirfield Village"],
    "upper-arlington": ["Upper Arlington High School", "Kingsdale Shopping Center", "Scioto Park"]
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={location.image} 
            alt={location.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 pb-12 text-white">
          <div className="space-y-4">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-1 text-sm font-bold uppercase tracking-wider border-none">
              {location.city} Location
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight">
              {location.name}
            </h1>
            <p className="text-lg text-white/90">
              Your local wellness destination for recovery, performance, and longevity.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Contact & Hours */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-md bg-card">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Phone className="w-5 h-5" />
                    Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href={`tel:${location.phone}`} className="text-lg font-bold text-primary hover:text-secondary-foreground transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="font-semibold text-foreground">{location.address}</p>
                    <p className="text-sm text-muted-foreground">{location.city}, {location.state} {location.zip}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md bg-card">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="flex items-center gap-2 text-primary">
                    <Clock className="w-5 h-5" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mon-Fri:</span>
                    <span className="font-semibold">10am - 7pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-semibold">9am - 5pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-semibold">11am - 4pm</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary">Location Map</h2>
              <div className="w-full h-96 bg-muted rounded-lg overflow-hidden border border-border">
                <MapView
                  className="w-full h-full"
                  initialCenter={{
                    lat: location.id === 'easton' ? 40.056673 : location.id === 'dublin' ? 40.1051554 : 40.0086,
                    lng: location.id === 'easton' ? -82.9077847 : location.id === 'dublin' ? -83.1100015 : -83.0556
                  }}
                  initialZoom={15}
                  onMapReady={(map: google.maps.Map) => {
                    new google.maps.Marker({
                      position: {
                        lat: location.id === 'easton' ? 40.056673 : location.id === 'dublin' ? 40.1051554 : 40.0086,
                        lng: location.id === 'easton' ? -82.9077847 : location.id === 'dublin' ? -83.1100015 : -83.0556
                      },
                      map: map,
                      title: location.name
                    });
                  }}
                />
              </div>
            </div>

            {/* Parking & Access */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary flex items-center gap-2">
                <ParkingCircle className="w-6 h-6 text-accent" />
                Parking & Access
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Convenient parking available directly at our location. Easy access from major roads and highways. Wheelchair accessible entrance and facilities.
              </p>
            </div>

            {/* Nearby Landmarks */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary flex items-center gap-2">
                <MapPinIcon className="w-6 h-6 text-accent" />
                Nearby Landmarks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {nearbyLandmarks[location.id as keyof typeof nearbyLandmarks]?.map((landmark, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-secondary/30 rounded-lg border border-border">
                    <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <span className="text-sm font-semibold text-foreground">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Available */}
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary">Services Available</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.slice(0, 8).map((service) => (
                  <Link key={service.id} href={`/service/${service.id}`}>
                    <div className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="font-semibold text-foreground hover:text-primary transition-colors">{service.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <Card className="border-none shadow-lg bg-primary text-white sticky top-24">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-bold text-lg">Ready to Visit?</h3>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-white hover:text-primary font-bold h-12 rounded-full">
                  <Link href="/book">Book Your Session</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary font-bold h-12 rounded-full">
                  <a href={`tel:${location.phone}`}>Call Now</a>
                </Button>
                <p className="text-sm text-white/80 text-center">
                  First-time visitors get a free consultation
                </p>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="border-none shadow-md bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  Reviews
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <span className="font-bold text-primary">4.9/5</span>
                  <span className="text-sm text-muted-foreground">(150+ reviews)</span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "Amazing experience! The staff is knowledgeable and the facilities are top-notch. Highly recommend!"
                </p>
              </CardContent>
            </Card>

            {/* Location-Specific Reviews Highlight */}
            <Card className="border-none shadow-md bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  Top Reviews from {location.city}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {location.reviews?.filter(r => r.rating === 5).slice(0, 3).map((review, i) => (
                  <div key={i} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-semibold text-sm text-foreground">{review.author}</p>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className="w-3 h-3 text-accent fill-accent" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground italic line-clamp-2">"{review.text}"</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Why This Location */}
            <Card className="border-none shadow-md bg-secondary/30">
              <CardHeader>
                <CardTitle className="text-lg">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Medical-grade equipment",
                  "Licensed professionals",
                  "Personalized care plans",
                  "Convenient location",
                  "First-time consultation free"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl">Visit {location.city} Today</h2>
          <p className="text-lg text-white/80">
            Experience the difference that science-backed wellness can make. Book your first session at our {location.city} location.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14 px-10 rounded-full">
            <Link href="/book">Book Now</Link>
          </Button>
        </div>
      </section>

      {/* Google Reviews Section */}
      {location?.reviews && (
        <GoogleReviews 
          locationName={location.name}
          reviews={location.reviews}
          averageRating={location.averageRating}
          totalReviews={location.totalReviews}
        />
      )}
    </Layout>
  );
}
