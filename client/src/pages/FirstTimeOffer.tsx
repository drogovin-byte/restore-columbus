import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, Heart, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";

export default function FirstTimeOffer() {
  return (
    <Layout>
      {/* Hero - Limited Time Offer */}
      <section className="relative py-24 bg-gradient-to-r from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        
        <div className="container relative z-10 max-w-3xl text-center space-y-8">
          <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-1 text-sm font-bold uppercase tracking-wider border-none mx-auto">
            Limited Time Offer
          </Badge>
          
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-white leading-tight">
            Your First Session is on Us
          </h1>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Experience the science-backed wellness revolution. New clients get a FREE first therapy session (up to $60 value) plus a complimentary 15-minute consultation.
          </p>

          <div className="pt-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-xl h-16 px-12 rounded-full shadow-2xl transition-all hover:scale-105">
              <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Claim Your Free Session</a>
            </Button>
          </div>

          <p className="text-sm text-white/80">
            No credit card required. Valid at all three locations.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">What's Included in Your First Visit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Clock,
                title: "15-Minute Consultation",
                desc: "Meet with our wellness team to discuss your goals and health history."
              },
              {
                icon: Zap,
                title: "Free Therapy Session",
                desc: "Choose any core therapy (Cryo, Red Light, Sauna, Compression) - up to $60 value."
              },
              {
                icon: Heart,
                title: "Personalized Plan",
                desc: "Get recommendations tailored to your specific wellness goals."
              },
              {
                icon: MapPin,
                title: "Facility Tour",
                desc: "See our state-of-the-art equipment and meet our team."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Card key={i} className="border-none shadow-md bg-card">
                  <CardContent className="pt-6 space-y-4">
                    <Icon className="w-8 h-8 text-accent" />
                    <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Try Restore */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">Why Try Restore?</h2>
          
          <div className="space-y-4">
            {[
              "Science-backed therapies used by professional athletes",
              "FDA-cleared equipment and licensed medical professionals",
              "Three convenient locations across Columbus",
              "Flexible memberships starting at $170/month",
              "Personalized wellness plans tailored to your goals",
              "Join thousands of satisfied Columbus clients",
              "Free consultation with no obligation"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <span className="font-semibold text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "Columbus, OH",
                text: "I was skeptical at first, but after my first cryotherapy session, I was hooked. The staff is amazing and the results speak for themselves.",
                rating: 5
              },
              {
                name: "Mike D.",
                location: "Upper Arlington, OH",
                text: "The free consultation helped me understand exactly which therapies would work best for my goals. Best decision I made for my health.",
                rating: 5
              },
              {
                name: "Jessica T.",
                location: "Dublin, OH",
                text: "Beautiful facility, knowledgeable staff, and real results. I'm now a member and couldn't be happier with my progress.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <Card key={i} className="border-none shadow-md bg-card">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <span key={j} className="text-accent text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">How to Claim Your Free Session</h2>
          
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Click the Button Below",
                desc: "Select your preferred location and therapy."
              },
              {
                step: 2,
                title: "Schedule Your Visit",
                desc: "Choose a time that works for you. We have flexible hours."
              },
              {
                step: 3,
                title: "Show Up & Enjoy",
                desc: "Meet our team, get your consultation, and experience your first therapy."
              },
              {
                step: 4,
                title: "Join Our Community",
                desc: "Decide if you want to continue with a membership or pay-per-session."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-primary flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  {item.step < 4 && <div className="w-1 h-16 bg-white/30 mt-2" />}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl text-center space-y-8">
          <h2 className="font-heading font-bold text-4xl text-primary">
            Ready to Transform Your Wellness?
          </h2>
          <p className="text-lg text-muted-foreground">
            Your first session is free. Your first consultation is free. The only thing you have to lose is the status quo.
          </p>
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-xl h-16 px-12 rounded-full shadow-lg">
            <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Claim Your Free Session Now</a>
          </Button>
          
          <div className="space-y-3 pt-4">
            <p className="text-sm text-muted-foreground font-semibold">Or call your preferred location:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold text-sm md:text-base h-auto py-3 px-3 rounded-lg whitespace-normal">
                <a href="tel:614-944-9041">
                  Easton: 614-944-9041
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold text-sm md:text-base h-auto py-3 px-3 rounded-lg whitespace-normal">
                <a href="tel:614-553-7207">
                  Dublin: 614-553-7207
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold text-sm md:text-base h-auto py-3 px-3 rounded-lg whitespace-normal">
                <a href="tel:614-745-0966">
                  Upper Arlington: 614-745-0966
                </a>
              </Button>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Valid at all three locations. No credit card required.
          </p>
        </div>
      </section>
    </Layout>
  );
}
