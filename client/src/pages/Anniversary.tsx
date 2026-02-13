import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Anniversary() {
  const bookingUrl = "https://www.restore.com/book-now";

  const offers = {
    membership: {
      title: "50% Off First Month Membership",
      description: "Join our community and get half off your first month",
      color: "from-accent to-accent/80",
    },
    medical: [
      {
        title: "50% Off IV's",
        description: "Members Favorites IV Menu",
        highlight: true,
      },
      {
        title: "20% Off IV Nutrient Packs",
        description: "Essential vitamins and minerals",
      },
      {
        title: "20% Off NAD+ IV 5-Pack",
        description: "Cellular energy and cognitive support",
      },
      {
        title: "20% Off NR (Niagen) 4-Pack",
        description: "NAD+ precursor therapy",
      },
      {
        title: "20% Off IM Shots 10-Pack",
        description: "Intramuscular injections",
      },
      {
        title: "Hyperbaric Oxygen 20-Pack",
        description: "$1,000 / $1,500",
      },
      {
        title: "TRT Plans",
        description: "Free 10 pack of Core Services",
      },
      {
        title: "PNOE Test",
        description: "$49 / $99",
      },
    ],
    skinHealth: [
      {
        title: "Neveskin Facials",
        description: "$125 per session",
        highlight: true,
      },
      {
        title: "20% Off 5-Packs",
        description: "All Skin Health Services",
      },
      {
        title: "25% Off 10-Packs",
        description: "All Skin Health Services",
      },
    ],
    coreServices: [
      {
        title: "Core Services 10-Pack",
        description: "$199 members / $299 non-members",
        highlight: true,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://private-us-east-1.manuscdn.com/sessionFile/gDb7fBedok5ZZ3AQc00pA1/sandbox/SGoShF7K09ZyCDRIRqf7Tm-img-1_1770976575000_na1fn_YW5uaXZlcnNhcnktaGVybw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0RiN2ZCZWRvazVaWjNBUWMwMHBBMS9zYW5kYm94L1NHb1NoRjdLMDlaeUNEUklScWY3VG0taW1nLTFfMTc3MDk3NjU3NTAwMF9uYTFmbl9ZVzV1YVhabGNuTmhjbmt0YUdWeWJ3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=f4hynCJZeFoXmt2hg6kQCLjhpjGJCNslaXIMktxpCvAORKV14JbHlW33hS2IgxxKY5lJMw-Abh7kjS2ziQDs3HSk-LY-rhX0ROoJGzZWMqiEp2NDGoWSF1JJkJASwYOaPktjHL34WNNs8UEVpnCauhH1NTBRfW7tAcPeyS2ha~IkJ~KET~tMDSsF~-abQ5g~fFSJXb2nw2lgIZ-O6wfKTmXCQNgAcU8PK9dZjWNscbLRS9yBOGuDp~UKP6SK-teROZJVNaPdvs6HCmA3a9uxolLSvnPXqWMLOd3-K5IGSDro-Y8qW1Kca7KDKdY2E4Pzj-OfwsMINVjkD4WzkGPVTg__"
            alt="7th Anniversary Celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        </div>

        <div className="container relative z-10 text-white">
          <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-1 text-sm font-bold uppercase tracking-wider mb-2 border-none">
              <Sparkles className="w-4 h-4 mr-2" />
              Limited Time Celebration
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight">
              7 Years of Wellness in <span className="text-accent">Columbus</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Join us April 16-19 for our 7th Anniversary celebration and enjoy exclusive offers on all our premium therapies and services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-bold text-lg h-14 px-8 rounded-full shadow-lg transition-all hover:scale-105"
              >
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg h-14 px-8 rounded-full backdrop-blur-sm transition-all hover:scale-105"
              >
                <a href="#offers">View All Offers</a>
              </Button>
            </div>
            <div className="pt-4 text-sm text-white/80">
              <p className="font-semibold">April 16-19, 2026</p>
              <p>All three Columbus locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Offer */}
      <section className="py-16 bg-gradient-to-r from-accent/20 to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-accent bg-gradient-to-br from-accent/5 to-transparent overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-4">
                  <Sparkles className="w-8 h-8 text-accent shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      50% Off Your First Month
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Join our membership community and start your wellness journey with an incredible discount. Perfect for experiencing the full Restore lifestyle.
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="mt-6 bg-primary text-white hover:bg-primary/90 font-bold text-lg h-12 px-8 rounded-full"
                >
                  <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                    Claim Membership Offer
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 bg-background">
        <div className="container">
          {/* Medical Services */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Medical Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Accelerate your recovery and optimize your health with our exclusive medical therapy offers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.medical.map((offer, idx) => (
                <Card
                  key={`medical-${idx}`}
                  className={`overflow-hidden transition-all hover:shadow-lg ${
                    offer.highlight
                      ? "border-2 border-accent lg:col-span-1 md:col-span-2"
                      : ""
                  }`}
                >
                  <CardContent className="p-6">
                    {offer.highlight && (
                      <Badge className="mb-3 bg-accent text-accent-foreground">
                        Featured Offer
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{offer.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skin Health Services */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Skin Health</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Rejuvenate your skin with our advanced aesthetic treatments at anniversary prices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.skinHealth.map((offer, idx) => (
                <Card
                  key={`skin-${idx}`}
                  className={`overflow-hidden transition-all hover:shadow-lg ${
                    offer.highlight ? "border-2 border-accent" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    {offer.highlight && (
                      <Badge className="mb-3 bg-accent text-accent-foreground">
                        Featured Offer
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{offer.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div className="mb-20">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Core Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Experience our signature therapies at unbeatable anniversary pricing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.coreServices.map((offer, idx) => (
                <Card
                  key={`core-${idx}`}
                  className={`overflow-hidden transition-all hover:shadow-lg ${
                    offer.highlight ? "border-2 border-accent lg:col-span-1 md:col-span-2" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    {offer.highlight && (
                      <Badge className="mb-3 bg-accent text-accent-foreground">
                        Best Value
                      </Badge>
                    )}
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{offer.description}</p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                        Book Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-primary mb-4">Anniversary Offer Terms</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Valid April 16-19, 2026 only</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Available at Easton, Dublin, and Upper Arlington locations</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Membership credits cannot be used toward anniversary offers</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Offers cannot be combined with other promotions</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Book early—limited availability during celebration period</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Celebrate 7 Years with Restore
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Thank you for being part of our wellness community. We're excited to celebrate with you and help you achieve your health goals.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-bold text-lg h-14 px-8 rounded-full shadow-lg transition-all hover:scale-105"
          >
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
              Book Your Anniversary Session
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
