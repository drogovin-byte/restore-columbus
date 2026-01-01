import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "Is Restore right for me?",
        a: "Restore therapies are designed for anyone seeking to optimize their health, recover faster, or perform better. Whether you're an athlete, entrepreneur, or simply interested in wellness, we have something for you. Book a free consultation to discuss your specific goals."
      },
      {
        q: "Do I need a doctor's referral?",
        a: "No referral is required. However, if you have specific health conditions or concerns, we recommend consulting with your doctor first. Our medical team will review your health history during your initial consultation."
      },
      {
        q: "What should I expect on my first visit?",
        a: "Your first visit includes a brief consultation with our wellness team to understand your goals, a tour of our facility, and your first therapy session. Most first visits take 45 minutes to an hour."
      },
      {
        q: "Are there any side effects?",
        a: "Most therapies have minimal side effects. Some people experience mild soreness after cryotherapy or slight nausea with IV therapy. Serious side effects are rare. Our staff will discuss potential effects before your session."
      }
    ]
  },
  {
    category: "Pricing & Memberships",
    questions: [
      {
        q: "What are your membership options?",
        a: "We offer three membership tiers: Level Up ($170/mo, 8 credits), Elevate ($260/mo, 14 credits), and Core ($300/mo, 31 daily credits). Each credit can be used for core therapies or IV drips. Memberships include 30% off specialty services."
      },
      {
        q: "Can I use my insurance?",
        a: "Most insurance plans do not cover wellness therapies. However, some plans may cover specific treatments like IV therapy for medical purposes. We recommend checking with your insurance provider. We offer flexible payment options and financing."
      },
      {
        q: "Do you offer package deals?",
        a: "Yes. Memberships provide significant savings compared to pay-per-session pricing. We also offer custom packages for groups or corporate wellness programs."
      },
      {
        q: "Is there a cancellation fee?",
        a: "Memberships can be cancelled anytime with no penalties. We ask for 24-hour notice for appointment cancellations to avoid a $25 cancellation fee."
      }
    ]
  },
  {
    category: "Safety & Medical",
    questions: [
      {
        q: "Are all therapies FDA-approved?",
        a: "Yes. All equipment we use is FDA-cleared for their intended use. Our medical staff is licensed and trained on all equipment."
      },
      {
        q: "Is cryotherapy safe?",
        a: "Yes. Whole-body cryotherapy is FDA-cleared and widely used by professional athletes. Sessions are brief (2-3 minutes) to prevent tissue damage. Our staff monitors you throughout."
      },
      {
        q: "Is IV therapy safe?",
        a: "Yes. All IVs are administered by licensed nurses using sterile, medical-grade equipment. Serious complications are extremely rare. We follow strict safety protocols."
      },
      {
        q: "What if I have a medical condition?",
        a: "Please inform our staff of any medical conditions during your consultation. Some conditions may require doctor approval or modifications to your treatment plan. Your safety is our priority."
      }
    ]
  },
  {
    category: "Services & Therapies",
    questions: [
      {
        q: "How often should I do cryotherapy?",
        a: "For athletic recovery, 2-3 times per week is ideal. For general wellness, 1-2 times per week. Start with 1-2 sessions to assess tolerance."
      },
      {
        q: "How long do IV therapy effects last?",
        a: "Most people feel effects for 2-4 weeks. Many do monthly infusions to maintain optimal levels. Frequency depends on your goals and lifestyle."
      },
      {
        q: "Can I combine multiple therapies?",
        a: "Absolutely. Many of our clients combine therapies for synergistic effects. For example, cryotherapy + red light therapy or IV drip + sauna. Our team can recommend combinations based on your goals."
      },
      {
        q: "Are there any therapies I should avoid?",
        a: "Some therapies have contraindications for specific conditions. For example, pregnant women should avoid certain therapies. We'll discuss this during your consultation."
      }
    ]
  },
  {
    category: "Locations & Booking",
    questions: [
      {
        q: "Which location should I visit?",
        a: "We have three locations: Easton, Dublin, and Upper Arlington. Choose the one most convenient to you. All locations offer the same services and pricing."
      },
      {
        q: "How do I book an appointment?",
        a: "You can book online through our website, call us directly, or visit a location in person. First-time visitors can book a free 15-minute consultation."
      },
      {
        q: "What if I need to reschedule?",
        a: "You can reschedule online or by calling us. We ask for 24-hour notice to avoid a $25 cancellation fee."
      },
      {
        q: "Do you offer corporate wellness programs?",
        a: "Yes. We offer custom corporate packages for businesses interested in employee wellness. Contact us for details."
      }
    ]
  }
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [schemaAdded, setSchemaAdded] = useState(false);

  useEffect(() => {
    // Add FAQPage schema markup
    if (!schemaAdded) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.flatMap(category =>
          category.questions.map(q => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.a
            }
          }))
        )
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      setSchemaAdded(true);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [schemaAdded]);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-primary text-white">
        <div className="container max-w-3xl text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80">
            Can't find your answer? Contact us directly at any of our locations.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl space-y-12">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="space-y-4">
              <h2 className="font-heading font-bold text-2xl text-primary">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = faqs.slice(0, catIndex).reduce((sum, c) => sum + c.questions.length, 0) + qIndex;
                  const isExpanded = expandedIndex === globalIndex;

                  return (
                    <Card key={qIndex} className="border-none shadow-md bg-card overflow-hidden">
                      <button
                        onClick={() => setExpandedIndex(isExpanded ? null : globalIndex)}
                        className="w-full p-6 flex items-start justify-between hover:bg-muted/50 transition-colors text-left"
                      >
                        <h3 className="font-bold text-primary text-lg pr-4">{faq.q}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isExpanded && (
                        <CardContent className="pt-0 pb-6 px-6 border-t border-border">
                          <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container max-w-2xl text-center space-y-6">
          <h2 className="font-heading font-bold text-3xl text-primary">Still Have Questions?</h2>
          <p className="text-muted-foreground text-lg">
            Our wellness team is happy to help. Book a free consultation or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold text-lg h-14 px-10 rounded-full">
              <Link href="/book">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg h-14 px-10 rounded-full">
              <Link href="/locations">Find Your Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
