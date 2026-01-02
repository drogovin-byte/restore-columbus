import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
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
            {problemStates.map((state: any, idx: number) => (
              <Link key={`problem-${state.id}-${idx}`} href={`/problem/${state.id}`}>
                <Card className="cursor-pointer hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Target className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{state.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{state.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{service.category}</Badge>
                    <CardTitle>{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{service.shortDescription}</p>
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
              <Card key={`membership-${tier.id}-${idx}`} className={`relative ${tier.isPopular ? 'ring-2 ring-accent md:scale-105' : ''}`}>
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-accent-foreground">MOST POPULAR</Badge>
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
                  <ul className="space-y-3 text-sm text-center">
                    {tier.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center justify-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${tier.isPopular ? 'text-primary' : 'text-accent'}`} />
                        <span className={tier.isPopular ? 'text-foreground' : 'text-white/90'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full font-bold ${tier.isPopular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-primary hover:bg-white/90'}`}>
                    <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Choose {tier.name}</a>
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
