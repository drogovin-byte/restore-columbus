import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import { comparisonGuides } from "@/lib/data";
import { Streamdown } from "streamdown";

export default function ComparisonDetail() {
  const [match, params] = useRoute("/comparison/:slug");
  const comparison = comparisonGuides.find(c => c.slug === params?.slug);

  if (!match || !comparison) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Comparison Not Found</h1>
          <Button asChild>
            <Link href="/comparisons">Back to Comparisons</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO 
        title={comparison.title}
        description={comparison.description}
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": comparison.title,
          "description": comparison.description,
          "image": comparison.image,
          "author": {
            "@type": "Organization",
            "name": "Restore Hyper Wellness Columbus"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Restore Hyper Wellness Columbus",
            "logo": {
              "@type": "ImageObject",
              "url": "https://restore-columbus.manus.space/images/restore-logo.png"
            }
          },
          "datePublished": "2025-01-01",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://restore-columbus.manus.space/comparison/${comparison.slug}`
          }
        }}
      />
      {/* Hero */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-3xl">
          <Link href="/comparisons" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Comparisons
          </Link>
          <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight">
            {comparison.title}
          </h1>
          <p className="text-lg text-white/80 mt-6">
            {comparison.excerpt}
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {comparison.solutions && comparison.solutions.map((solution: any) => (
              <Link key={solution.id} href={solution.link}>
                <Card className="border-none shadow-lg bg-card hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  <CardContent className="p-8 md:p-10">
                    <h3 className="font-heading font-bold text-2xl text-primary mb-3">{solution.name}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{solution.description}</p>
                    <div className="mt-6 inline-flex items-center text-primary font-bold">
                      Learn More →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-2xl text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl">Ready to Get Started?</h2>
          <p className="text-lg text-white/80">
            Book your first session today and experience the difference for yourself.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg h-14 px-10 rounded-full">
            <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Now</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
