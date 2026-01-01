import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import { locations } from "@/lib/data";

export default function Contact() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg text-white/80">
            Have questions? Our team is here to help. Contact us at any of our three locations.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {locations.map((location) => (
              <Card key={location.id} className="border-none shadow-md bg-card">
                <CardHeader className="bg-primary/10">
                  <CardTitle className="text-primary">{location.city}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">{location.address}</p>
                      <p className="text-muted-foreground">{location.city}, {location.state} {location.zip}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <a href={`tel:${location.phone}`} className="text-sm font-semibold text-primary hover:text-secondary-foreground transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p>Mon-Fri: 10am-7pm</p>
                      <p>Sat: 9am-5pm</p>
                      <p>Sun: 11am-4pm</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-primary text-white hover:bg-primary/90 font-bold mt-4">
                    <Link href={`/location/${location.id}`}>Visit Location</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* General Inquiry */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-none shadow-lg bg-card">
              <CardHeader className="bg-primary/10">
                <CardTitle className="text-primary">General Inquiry</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90 font-bold h-12 rounded-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-primary text-center mb-12">Quick Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Book an Appointment", href: "/book", desc: "Schedule your first session" },
              { title: "View Services", href: "/services", desc: "Explore all our therapies" },
              { title: "Read FAQs", href: "/faq", desc: "Get answers to common questions" },
              { title: "First-Time Offer", href: "/first-time-offer", desc: "Claim your free session" },
              { title: "About Us", href: "/about", desc: "Learn our story" },
              { title: "Blog", href: "/blog", desc: "Read wellness articles" }
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <Card className="border-none shadow-md bg-card hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-primary text-lg mb-1">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
