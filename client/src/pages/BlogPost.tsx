import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link, useRoute } from "wouter";
import { Streamdown } from "streamdown";
import { blogPosts } from "@/lib/data";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!post) return <div className="container py-20">Post not found</div>;

  return (
    <Layout>
      <article className="min-h-screen pb-20">
        {/* Hero Header */}
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="container max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <Link href="/blog">
                <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 mb-4 pl-0 gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Button>
              </Link>
              
              <div className="flex flex-wrap gap-3 items-center">
                <Badge className="bg-accent text-accent-foreground hover:bg-accent/90 border-none">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                  <User className="w-4 h-4" />
                  Restore Team
                </div>
              </div>

              <h1 className="font-heading font-bold text-3xl md:text-5xl text-white leading-tight">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-3xl mx-auto py-12 px-4 md:px-0">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none 
            prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-lg
            prose-strong:text-primary
          ">
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* Author Bio / CTA */}
          <div className="mt-16 p-8 bg-secondary/30 rounded-2xl border border-border flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl shrink-0">
              R
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div>
                <h3 className="font-heading font-bold text-xl text-primary">Written by Restore Columbus Team</h3>
                <p className="text-muted-foreground">
                  Our team of wellness experts and medical professionals is dedicated to helping the Columbus community do more of what they love.
                </p>
              </div>
              <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-full">
                <Link href="https://www.restore.com/book-now">Book a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
