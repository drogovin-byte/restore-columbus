import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "wouter";
import { services, blogPosts, testimonials, locations } from "@/lib/data";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-wellness-columbus.jpg" 
            alt="Restore Hyper Wellness Columbus Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-1 text-sm font-bold uppercase tracking-wider mb-2 border-none">
              Columbus' Premier Wellness Destination
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight">
              Do More of What You Love in <span className="text-accent">Columbus</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
              Look and feel your best with science-backed therapies. From cryotherapy to IV drips, we help Columbus residents recover faster and live longer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-bold text-lg h-14 px-8 rounded-full shadow-lg transition-all hover:scale-105">
                <Link href="/book">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white/10 hover:text-white font-bold text-lg h-14 px-8 rounded-full backdrop-blur-sm">
                <Link href="/services">Explore Therapies</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-primary overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-accent">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <span>Trusted by 5,000+ Locals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Science-Backed Therapies</h2>
            <p className="text-muted-foreground text-lg">
              Our medical-grade modalities are designed to optimize your health, speed up recovery, and enhance your longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Link key={service.id} href={`/services#${service.id}`}>
                <Card className="group h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                      <service.icon className="w-5 h-5 text-accent" />
                      <span className="font-bold">{service.category}</span>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-heading font-bold text-xl text-primary group-hover:text-secondary-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <div className="pt-2 flex items-center text-sm font-bold text-secondary-foreground group-hover:text-accent-foreground transition-colors">
                      Learn More <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-bold">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Local Roots / About Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/columbus-community-wellness.jpg" 
                alt="Columbus Community Wellness" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary font-bold">Locally Owned & Operated</Badge>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">
                  Rooted in Columbus,<br />Focused on Your Health
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We aren't just a franchise; we are your neighbors. Our three Columbus studios are locally owned by passionate health advocates who believe that everyone deserves access to elite-level recovery and wellness care.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're training for the Columbus Marathon, recovering from a Buckeyes game, or just trying to keep up with your kids, we're here to help you do more.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Medical Professionals on Staff",
                  "3 Convenient Locations",
                  "Open 7 Days a Week",
                  "Customized Wellness Plans"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0" />
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 rounded-full px-8">
                <Link href="/about">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">Find Your Studio</h2>
            <p className="text-muted-foreground text-lg">Three convenient locations serving the Greater Columbus area.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc) => (
              <div key={loc.id} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-heading font-bold text-xl text-primary">{loc.name.replace("Restore Hyper Wellness - ", "")}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
                      <span>{loc.address}<br/>{loc.city}, {loc.state} {loc.zip}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{loc.phone}</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href={`/locations#${loc.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Columbus Wellness Journal</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Expert advice, local health tips, and recovery guides tailored for our Columbus community.
              </p>
            </div>
            <Button asChild variant="link" className="text-primary font-bold text-lg p-0 h-auto hover:text-secondary-foreground">
              <Link href="/blog">Read All Articles <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer space-y-4">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-primary hover:bg-white backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground font-medium">{post.date}</div>
                    <h3 className="font-heading font-bold text-xl text-primary group-hover:text-secondary-foreground transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="container relative z-10 text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl md:text-5xl">Ready to Feel Your Best?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of Columbus residents who have made Restore a part of their weekly wellness routine.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-16 px-10 rounded-full shadow-xl">
            <Link href="/book">Book Your First Session</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
