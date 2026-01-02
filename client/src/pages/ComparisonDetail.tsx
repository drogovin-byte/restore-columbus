import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link, useRoute } from "wouter";
import { comparisons } from "@/lib/data";
import { Streamdown } from "streamdown";

export default function ComparisonDetail() {
  const [match, params] = useRoute("/comparison/:slug");
  const comparison = comparisons.find(c => c.slug === params?.slug);

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

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <Card className="border-none shadow-lg bg-card">
            <CardContent className="p-8 md:p-12 prose prose-invert max-w-none prose-headings:text-2xl md:prose-headings:text-3xl prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 first:prose-headings:mt-0 prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-4 prose-ul:text-base md:prose-ul:text-lg prose-ul:leading-relaxed prose-li:mb-2">
              <Streamdown>{comparison.fullContent || comparison.description}</Streamdown>
            </CardContent>
          </Card>
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
            <Link href="https://www.restore.com/book-now">Book Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
