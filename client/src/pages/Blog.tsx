import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { blogPosts } from "@/lib/data";

export default function Blog() {
  return (
    <Layout>
      <div className="bg-secondary/30 py-20">
        <div className="container text-center space-y-6">
          <Badge className="bg-primary text-white hover:bg-primary/90 mb-4">Columbus Wellness Journal</Badge>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary">Local Health & Recovery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert insights, recovery guides, and wellness tips tailored for the Columbus community.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group cursor-pointer flex flex-col h-full bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm shadow-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <div className="flex-1 p-6 space-y-4 flex flex-col">
                  <div className="text-sm text-muted-foreground font-medium">{post.date}</div>
                  <h2 className="font-heading font-bold text-2xl text-primary group-hover:text-secondary-foreground transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 mt-auto">
                    <span className="text-primary font-bold text-sm group-hover:underline underline-offset-4">Read Article &rarr;</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-primary text-white py-20">
        <div className="container text-center space-y-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Stay in the Loop</h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive Columbus offers, new service announcements, and health tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 h-12 px-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="h-12 px-8 rounded-full bg-accent text-accent-foreground hover:bg-white hover:text-primary font-bold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
