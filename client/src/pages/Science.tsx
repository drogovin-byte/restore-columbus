import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Activity, Zap, ShieldCheck } from "lucide-react";

export default function Science() {
  return (
    <Layout>
      <div className="bg-primary text-white py-20">
        <div className="container text-center space-y-6">
          <h1 className="font-heading font-bold text-4xl md:text-6xl">The Science of Hyper Wellness</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We don't guess; we measure. Our protocols are grounded in physiology and backed by clinical research.
          </p>
        </div>
      </div>

      <div className="container py-20 space-y-20">
        {/* Core Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl text-primary">Hormesis: The Good Stress</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many of our therapies—like Cryotherapy and Infrared Sauna—rely on a biological principle called <strong>Hormesis</strong>. This is the process of exposing the body to a mild, controlled stressor (like extreme cold or heat) to trigger a beneficial adaptive response.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Just like lifting weights tears down muscle to build it back stronger, these therapies signal your body to repair itself, reduce inflammation, and produce more energy.
            </p>
          </div>
          <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
            <h3 className="font-heading font-bold text-xl text-primary mb-4">The Hormetic Response Cycle</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
                <div>
                  <strong className="block text-primary">Stimulus</strong>
                  <span className="text-sm text-muted-foreground">Exposure to cold, heat, or light stress.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
                <div>
                  <strong className="block text-primary">Response</strong>
                  <span className="text-sm text-muted-foreground">Body releases anti-inflammatory proteins and endorphins.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
                <div>
                  <strong className="block text-primary">Adaptation</strong>
                  <span className="text-sm text-muted-foreground">Cells become more resilient and efficient over time.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Mitochondrial Health */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="order-2 md:order-1 relative aspect-square rounded-2xl overflow-hidden">
             <img 
              src="/images/red-light-therapy.jpg" 
              alt="Cellular Health" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex items-center gap-2 text-accent font-bold">
              <Zap className="w-5 h-5" />
              <span>Cellular Energy</span>
            </div>
            <h2 className="font-heading font-bold text-3xl text-primary">Powering Up Your Mitochondria</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aging and fatigue often start at the cellular level. Your mitochondria are the "batteries" of your cells, producing ATP (energy). As we age, they become less efficient.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Therapies like <strong>Red Light Therapy</strong> and <strong>NAD+ IV Drips</strong> are designed to recharge these cellular batteries, improving everything from skin health to cognitive function.
            </p>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/services#red-light">Explore Red Light Therapy</Link>
            </Button>
          </div>
        </div>

        {/* Medical Oversight */}
        <div className="bg-primary text-white rounded-3xl p-8 md:p-12 text-center space-y-8">
          <ShieldCheck className="w-16 h-16 mx-auto text-accent" />
          <h2 className="font-heading font-bold text-3xl md:text-4xl">Safety First, Always</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Every Restore studio in Columbus is overseen by a Medical Director, and our services are administered by licensed medical professionals (Registered Nurses and Nurse Practitioners).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto pt-8">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2 text-accent">Expert Staff</h3>
              <p className="text-sm text-white/80">Our team undergoes rigorous training on all modalities and safety protocols.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2 text-accent">Medical Intake</h3>
              <p className="text-sm text-white/80">We review your health history before your first service to ensure safety.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="font-bold text-lg mb-2 text-accent">Cleanliness</h3>
              <p className="text-sm text-white/80">Hospital-grade sanitation standards across all our studios.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
