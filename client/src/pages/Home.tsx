import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, CheckCircle2, MapPin, Target } from "lucide-react";
import { Link } from "wouter";
import { services, blogPosts, locations, problemStates, memberships } from "@/lib/data";
import GoogleReviews from "@/components/GoogleReviews";

export default function Home() {
  return (
    <Layout>
      {/* Google Reviews Section */}
      {locations[0].reviews && (
        <GoogleReviews 
          locationName={locations[0].name}
          reviews={locations[0].reviews}
          averageRating={locations[0].averageRating}
          totalReviews={locations[0].totalReviews}
        />
      )}

      {/* Blog Section */}
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
                <Link href="https://www.restore.com/book-now">Book Appointment</Link>
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

      {/* Need States / Shop by Goal */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">What's Your Goal?</h2>
            <p className="text-muted-foreground text-lg">
              We don't just offer services; we offer solutions. Tell us how you want to feel, and we'll show you how to get there.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemStates.map((state: any) => (
              <Link key={state.id} href={`/problem/${state.id}`}>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-none bg-card h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <state.icon className="w-8 h-8 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-primary">{state.title}</h3>
                    <p className="text-sm text-muted-foreground">{state.description}</p>
                    <div className="pt-2 text-xs font-bold text-accent uppercase tracking-wider">
                      Recommended Therapies &rarr;
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
          
          <div className="text-center mt-12 space-y-4">
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-bold">
              <Link href="/services">View All Services</Link>
            </Button>
            <div>
              <p className="text-muted-foreground text-sm mb-2">Confused about which therapy is right for you?</p>
              <Button asChild variant="link" className="text-accent font-bold hover:text-accent/80">
                <Link href="/comparisons">Read Our Comparison Guides →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Pricing */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl">Join the Club</h2>
            <p className="text-white/80 text-lg">
              Consistency is key to results. Our memberships offer the best value for your wellness routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {memberships.map((tier) => (
              <Card key={tier.name} className={`relative border-none overflow-hidden ${tier.isPopular ? 'scale-105 shadow-2xl z-10' : 'bg-white/10 text-white'}`}>
                {tier.isPopular && (
                  <div className="absolute top-0 inset-x-0 bg-accent text-accent-foreground text-center text-xs font-bold py-1 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`text-center pb-2 ${tier.isPopular ? 'pt-8' : 'pt-6'}`}>
                  <CardTitle className={`font-heading font-bold text-2xl ${tier.isPopular ? 'text-primary' : 'text-white'}`}>{tier.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1 mt-2">
                    <span className={`text-4xl font-bold ${tier.isPopular ? 'text-primary' : 'text-white'}`}>${tier.price}</span>
                    <span className={`text-sm ${tier.isPopular ? 'text-muted-foreground' : 'text-white/60'}`}>/month</span>
                  </div>
                  <div className={`text-xs font-medium px-3 py-1 rounded-full inline-block mx-auto mt-2 ${tier.isPopular ? 'bg-secondary text-secondary-foreground' : 'bg-white/20 text-white'}`}>
                    A ${tier.value} value! You save ${tier.savings}!
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className={`text-center text-sm ${tier.isPopular ? 'text-muted-foreground' : 'text-white/80'}`}>
                    <strong>{tier.credits}</strong> Credits / Month<br/>
                    <span className="text-xs">${tier.perTherapy.toFixed(2)} per Therapy</span>
                  </div>
                  <ul className="space-y-3 text-sm">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${tier.isPopular ? 'text-primary' : 'text-accent'}`} />
                        <span className={tier.isPopular ? 'text-foreground' : 'text-white/90'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full font-bold ${tier.isPopular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-white/90'}`}>
                    <Link href="https://www.restore.com/book-now">Choose {tier.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-xs text-white/40 mt-8 max-w-2xl mx-auto">
            *Terms and restrictions apply. Prices subject to change. See studio for details. 3-month commitment required.
          </p>
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
            <Link href="https://www.restore.com/book-now">Book Your First Session</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
