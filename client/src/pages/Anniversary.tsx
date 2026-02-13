import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function Anniversary() {
  return (
    <Layout>
      <SEO 
        title="Restore 7th Anniversary Celebration - April 16-19"
        description="Join Restore Hyper Wellness Columbus for our 7th Anniversary celebration! Exclusive offers on medical services, skin health, and core services. April 16-19, 2026."
      />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-teal-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 text-yellow-300 text-8xl font-bold">7</div>
          <div className="absolute bottom-20 left-10 text-yellow-300 text-6xl opacity-30">✨</div>
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 px-4 py-2 text-lg font-bold uppercase tracking-wider mb-4 border-none">
              7 Years of Wellness Excellence
            </Badge>
            
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight">
              Celebrate With Us
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Seven years of helping Columbus residents recover faster, feel better, and live longer. Join us April 16-19 for exclusive anniversary offers on all our premium therapies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold text-lg h-14 px-8 rounded-full shadow-lg transition-all hover:scale-105">
                <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Your Anniversary Session</a>
              </Button>
            </div>
            
            <p className="text-sm text-white/70 pt-4">
              <strong>April 16-19, 2026</strong> • Easton, Dublin & Upper Arlington Studios
            </p>
          </div>
        </div>
      </section>

      {/* Medical Services */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-4xl text-primary">Medical Services</h2>
            <p className="text-lg text-muted-foreground">Premium therapies at anniversary prices</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* IV Services */}
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-primary">IV Therapy & Infusions</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">50% Off IVs</p>
                      <p className="text-sm text-muted-foreground">Members Favorites IV Menu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">20% Off IV Nutrient Packs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">20% Off NAD+ IV 5-Pack</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">20% Off NR (Niagen) 4-Pack</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">20% Off IM Shots 10-Pack</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialized Therapies */}
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-primary">Specialized Treatments</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">Hyperbaric Oxygen</p>
                      <p className="text-sm text-muted-foreground">20 Packs: $1,000 / $1,500</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">TRT Plans</p>
                      <p className="text-sm text-muted-foreground">Free 10 pack of Core Services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">PNOE Test</p>
                      <p className="text-sm text-muted-foreground">$49 / $99</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skin Health */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-4xl text-primary">Skin Health</h2>
            <p className="text-lg text-muted-foreground">Rejuvenate and refresh your complexion</p>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-pink-200">
            <CardHeader className="bg-pink-50">
              <CardTitle className="text-primary">Facial Treatments</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Neveskin Facials</p>
                    <p className="text-sm text-muted-foreground">$125</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">20% Off All Skin Health 5-Packs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">25% Off All Skin Health 10-Packs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-heading font-bold text-4xl text-primary">Core Services</h2>
            <p className="text-lg text-muted-foreground">Essential therapies for recovery and wellness</p>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-teal-200">
            <CardHeader className="bg-teal-50">
              <CardTitle className="text-primary">Core Service Packs</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-lg">10 Packs of Core Services</p>
                  <p className="text-lg text-primary font-bold mt-2">$199 Members / $299 Non-Members</p>
                  <p className="text-sm text-muted-foreground mt-3">Access our most popular therapies: Cryotherapy, Compression, Infrared Sauna, Red Light Therapy, and more.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Membership Offer */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl">
              50% Off Your First Month Membership
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Start your wellness journey with Restore and enjoy half off your first month. Perfect time to experience our full range of therapies.
            </p>
          </div>

          <Button asChild size="lg" className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold text-lg h-14 px-8 rounded-full shadow-lg transition-all hover:scale-105">
            <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Claim Your Anniversary Offer</a>
          </Button>
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Terms & Conditions:</strong> Credits are not to be used towards the purchase of any anniversary offers. Offers valid only at Easton, Dublin, and Upper Arlington studios in Columbus, OH. April 16-19, 2026. Prices and services subject to change. Cannot be combined with other promotions. See studio for complete details.
          </p>
        </div>
      </section>
    </Layout>
  );
}
