import Layout from "@/components/Layout";
import { useAuth } from "@/_core/hooks/useAuth";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, CheckCircle2, MapPin, Target, Battery, Activity, AlertCircle, Moon, TrendingUp, Heart } from "lucide-react";
import { Link } from "wouter";
import { services, blogPosts, locations, problemStates, memberships } from "@/lib/data";
import GoogleReviews from "@/components/GoogleReviews";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  return (
    <Layout>
      <SEO 
        title="Cryotherapy, IV Drip & Red Light Therapy"
        description="Restore Hyper Wellness Columbus offers science-backed wellness services including Cryotherapy, IV Drip Therapy, Red Light Therapy, and Infrared Sauna. Recover faster and feel better."
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Restore Hyper Wellness Columbus",
          "image": "https://restore-columbus.manus.space/images/hero-wellness-columbus.jpg",
          "telephone": "614-944-9041",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "4158 Easton Gateway",
            "addressLocality": "Columbus",
            "addressRegion": "OH",
            "postalCode": "43219",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.0498,
            "longitude": -82.9152
          },
          "url": "https://restore-columbus.manus.space",
          "priceRange": "$$"
        }}
      />
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
                <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Appointment</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-bold text-lg h-14 px-8 rounded-full backdrop-blur-sm transition-all hover:scale-105">
                <Link href="/services">Explore Therapies</Link>
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80 pt-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={`avatar-${i}`} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-primary overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt={`User ${i}`} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-accent">
                  {[1,2,3,4,5].map(i => <Star key={`star-${i}`} className="w-3 h-3 fill-current" />)}
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
            {problemStates.map((state: any, idx: number) => {
              // Define gradient and icon based on problem type
              const cardStyles: Record<string, { gradient: string; icon: React.ReactNode }> = {
                "fatigue-burnout": { gradient: "from-amber-500 to-orange-400", icon: <Battery className="w-10 h-10" /> },
                "athletic-recovery": { gradient: "from-blue-500 to-cyan-400", icon: <Activity className="w-10 h-10" /> },
                "pain-inflammation": { gradient: "from-red-500 to-rose-400", icon: <AlertCircle className="w-10 h-10" /> },
                "stress-sleep": { gradient: "from-purple-500 to-indigo-400", icon: <Moon className="w-10 h-10" /> },
                "mens-health": { gradient: "from-emerald-500 to-teal-400", icon: <TrendingUp className="w-10 h-10" /> },
                "womens-wellness": { gradient: "from-pink-500 to-rose-400", icon: <Heart className="w-10 h-10" /> }
              };
              const style = cardStyles[state.id] || { gradient: "from-accent to-primary", icon: <Target className="w-10 h-10" /> };
              
              return (
                <Link key={`problem-${state.id}-${idx}`} href={`/problem/${state.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full cursor-pointer hover:scale-[1.02]">
                    {/* Gradient accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${style.gradient}`} />
                    
                    {/* Card content */}
                    <div className="p-8 pt-10">
                      {/* Icon with gradient background */}
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${style.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {style.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-heading font-bold text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                        {state.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {state.description}
                      </p>
                      
                      {/* CTA */}
                      <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                    
                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary">Science-Backed Therapies</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Our medical-grade modalities are designed to optimize your health, speed up recovery, and enhance your longevity.
              </p>
            </div>
            <Button asChild variant="link" className="text-primary font-bold text-lg p-0 h-auto hover:text-secondary-foreground">
              <Link href="/services">View All Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service: any, idx: number) => (
              <Link key={`service-${service.id}-${idx}`} href={`/service/${service.id}`}>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden h-full">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{service.category}</Badge>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{service.shortDesc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-accent/10 border border-accent/20 rounded-xl p-8 text-center space-y-4">
            <h3 className="font-heading font-bold text-2xl text-primary">Confused about which therapy is right for you?</h3>
            <Button asChild variant="link" className="text-primary font-bold text-lg p-0 h-auto hover:text-secondary-foreground">
              <Link href="/comparisons">Read Our Comparison Guides → </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading font-bold text-3xl md:text-4xl">Join the Club</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Consistency is key to results. Our memberships offer the best value for your wellness routine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {memberships.map((tier: any, idx: number) => (
              <div key={`membership-${tier.id}-${idx}`} className={`relative bg-white rounded-lg shadow-lg ${tier.isPopular ? 'ring-2 ring-accent md:scale-105' : ''}`}>
                {tier.isPopular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-accent text-accent-foreground font-bold px-4 py-1">MOST POPULAR</Badge>
                  </div>
                )}
                <div className={`text-center p-6 ${tier.isPopular ? 'pt-16' : 'pt-6'}`}>
                  <h3 className="font-heading font-bold text-2xl text-primary mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-5xl font-bold text-primary">${tier.price}</span>
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <div className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
                    A ${tier.value} value! You save ${tier.savings}!
                  </div>
                  <div className="text-center text-sm text-muted-foreground border-t pt-4">
                    <strong className="text-primary text-lg">{tier.credits}</strong> Credits / Month<br/>
                    <span className="text-xs text-muted-foreground">${tier.perTherapy.toFixed(2)} per Therapy</span>
                  </div>
                </div>
                <div className="px-6 pb-6 space-y-4">
                  <ul className="space-y-3 text-sm text-center">
                    {tier.features.map((feature: string, i: number) => (
                      <li key={`feature-${i}`} className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full font-bold bg-primary text-white hover:bg-primary/90 h-11">
                    <Link href={`/membership/${tier.id}`}>Choose {tier.name}</Link>
                  </Button>
                </div>
              </div>
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
            {locations.map((loc, idx: number) => (
              <div key={`location-${loc.id}-${idx}`} className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
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
            {blogPosts.map((post, idx: number) => (
              <Link key={`blog-${post.slug}-${idx}`} href={`/blog/${post.slug}`}>
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
                    <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                    <h3 className="font-heading font-bold text-lg text-primary group-hover:text-secondary-foreground transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Ready to Feel Your Best?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Join thousands of Columbus residents who have made Restore a part of their weekly wellness routine.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-bold text-lg h-14 px-8 rounded-full shadow-lg transition-all hover:scale-105">
            <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Your First Session</a>
          </Button>
        </div>
      </section>

      {/* Reviews Section */}
      <GoogleReviews locationName="Restore Hyper Wellness Columbus" reviews={[]} averageRating={4.9} totalReviews={500} />
    </Layout>
  );
}
