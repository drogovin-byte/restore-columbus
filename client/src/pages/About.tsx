import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Heart, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl">
            About Restore Hyper Wellness Columbus
          </h1>
          <p className="text-lg text-white/80">
            Proudly serving Columbus since 2019. Locally owned, medically backed, community focused.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl space-y-8">
          <div className="space-y-4">
            <h2 className="font-heading font-bold text-3xl text-primary">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Restore Hyper Wellness Columbus was founded on a simple belief: every Columbus resident deserves access to world-class wellness therapies that actually work.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              We started with one location and a mission to bring science-backed recovery and performance therapies to our community. Today, with three locations across Columbus (Easton, Dublin, and Upper Arlington), we've helped thousands of local athletes, entrepreneurs, and wellness enthusiasts optimize their health and performance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading font-bold text-3xl text-primary">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To empower Columbus residents to live longer, recover faster, and perform at their peak through access to cutting-edge, science-backed wellness therapies delivered by compassionate medical professionals.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-heading font-bold text-3xl text-primary">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Science First",
                  desc: "Every therapy we offer is backed by peer-reviewed research and FDA clearance. We don't guess—we measure."
                },
                {
                  title: "Local Roots",
                  desc: "We're Columbus residents who care about this community. Our success is tied to your wellness."
                },
                {
                  title: "Medical Excellence",
                  desc: "All therapies are administered by licensed medical professionals. Your safety is our top priority."
                },
                {
                  title: "Results-Focused",
                  desc: "We track your progress, adjust your plan, and celebrate real results. Vanity metrics don't matter."
                }
              ].map((value, i) => (
                <Card key={i} className="border-none shadow-md bg-card">
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="font-bold text-primary text-lg">{value.title}</h3>
                    <p className="text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-3xl space-y-8">
          <h2 className="font-heading font-bold text-3xl text-primary text-center">Why Choose Restore Columbus?</h2>
          
          <div className="space-y-6">
            {[
              {
                icon: Heart,
                title: "Locally Owned & Operated",
                desc: "We're not a franchise. We're Columbus residents who invested in our community's health."
              },
              {
                icon: Zap,
                title: "Medical-Grade Equipment",
                desc: "All our equipment is FDA-cleared and regularly maintained. We invest in the best so you get the best."
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Our staff includes nurses, wellness coaches, and medical professionals with years of experience."
              },
              {
                icon: CheckCircle2,
                title: "Proven Results",
                desc: "Thousands of Columbus residents have transformed their health with our therapies. You're not alone."
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-6">
                  <Icon className="w-8 h-8 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl space-y-8">
          <h2 className="font-heading font-bold text-3xl text-primary text-center">Community Involvement</h2>
          
          <p className="text-muted-foreground leading-relaxed text-lg text-center">
            We're not just a wellness business—we're part of the Columbus community. We sponsor local athletes, support community events, and partner with local organizations to make wellness accessible to everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Local Athletes",
                desc: "We sponsor Columbus-based athletes and fitness enthusiasts who are pushing the limits of human performance."
              },
              {
                title: "Community Events",
                desc: "You'll find us at Columbus marathons, fitness expos, and wellness events throughout the year."
              },
              {
                title: "Partnerships",
                desc: "We partner with local gyms, physical therapy clinics, and health practitioners to serve our community better."
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md bg-card">
                <CardContent className="pt-6 space-y-3">
                  <h3 className="font-bold text-primary text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-2xl text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl">Join the Restore Columbus Community</h2>
          <p className="text-lg text-white/80">
            Experience the difference that local, science-backed wellness can make.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14 px-10 rounded-full">
            <Link href="https://www.restore.com/book-now">Book Your First Session</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
