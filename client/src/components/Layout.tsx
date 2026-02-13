import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, Instagram, Facebook, Linkedin, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { locations } from "@/lib/data";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMobileFooter, setShowMobileFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Show mobile footer after scrolling past hero (600px on mobile)
      setShowMobileFooter(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background selection:bg-secondary selection:text-secondary-foreground">
      {/* Skip to Content Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-primary focus:text-white focus:p-2 focus:rounded">Skip to main content</a>

      {/* Top Bar - Local Focus */}
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm font-medium">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Proudly serving Columbus, OH since 2019</span>
            <span className="md:hidden">Columbus, OH</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:6149449041" className="hover:text-accent transition-colors flex items-center gap-1" aria-label="Call Easton studio at 614-944-9041">
              <Phone className="w-3 h-3" aria-hidden="true" /> <span className="hidden sm:inline">Call Us</span>
            </a>
            <Link href="/locations" className="hover:text-accent transition-colors flex items-center gap-1" aria-label="Find your studio location">
              <MapPin className="w-3 h-3" aria-hidden="true" /> Find Your Studio
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm py-2" : "bg-background py-4"
        }`}
        role="banner"
      >
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663273219915/XkMqMJcbWlosWPrs.png" alt="Restore Hyper Wellness" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm" aria-label="Main navigation">
            <Link href="/services" className={`transition-colors hover:text-primary ${location === '/services' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Therapies
            </Link>
            <Link href="/comparisons" className={`transition-colors hover:text-primary ${location === '/comparisons' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Solutions
            </Link>
            <Link href="/pricing" className={`transition-colors hover:text-primary ${location === '/pricing' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Pricing
            </Link>
            <Link href="/memberships" className={`transition-colors hover:text-primary ${location === '/memberships' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Memberships
            </Link>
            <Link href="/locations" className={`transition-colors hover:text-primary ${location === '/locations' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Locations
            </Link>
            <Link href="/blog" className={`transition-colors hover:text-primary ${location === '/blog' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Blog
            </Link>
            <Link href="/faq" className={`transition-colors hover:text-primary ${location === '/faq' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              FAQ
            </Link>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6">
              <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Now</a>
            </Button>
            <Link href="/admin" className="ml-4 p-2 rounded-lg hover:bg-muted transition-colors" title="Admin Dashboard" aria-label="Admin Dashboard">
              <Settings className="w-5 h-5 text-muted-foreground hover:text-primary" aria-hidden="true" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container py-4 flex flex-col gap-4 font-medium" aria-label="Mobile navigation">
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/comparisons" className="text-foreground hover:text-primary transition-colors">
                Solutions
              </Link>
              <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/memberships" className="text-foreground hover:text-primary transition-colors">
                Memberships
              </Link>
              <Link href="/locations" className="text-foreground hover:text-primary transition-colors">
                Locations
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full w-full">
                <a href="https://www.restore.com/book-now" target="_blank" rel="noopener noreferrer">Book Now</a>
              </Button>
              <Link href="/admin" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Settings className="w-4 h-4" /> Admin Dashboard
              </Link>
            </nav>
          </div>
        )}
      </header>



      {/* Main Content */}
      <main className="flex-1 w-full" id="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 md:py-16 relative z-30" role="contentinfo">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-lg mb-4">Restore Hyper Wellness</h3>
              <p className="text-sm opacity-90 mb-4">Local wellness authority in Columbus, Ohio. Science-backed therapies for recovery, energy, and longevity.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Visit us on Instagram"><Instagram className="w-5 h-5" aria-hidden="true" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Visit us on Facebook"><Facebook className="w-5 h-5" aria-hidden="true" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Visit us on LinkedIn"><Linkedin className="w-5 h-5" aria-hidden="true" /></a>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-bold mb-4" id="footer-locations">Locations</h4>
              <div className="space-y-3 text-sm">
                {locations.map(loc => (
                  <Link key={loc.id} href={`/locations/${loc.id}`} className="hover:opacity-80 transition-opacity block">
                    <div className="font-medium">{loc.name.split(' - ')[1]}</div>
                    <div className="opacity-90">{loc.city}, {loc.state}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recovery Therapies */}
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-wider opacity-90" id="footer-recovery">Recovery</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/service/cryotherapy" className="hover:opacity-80 transition-opacity">Cryotherapy</Link></li>
                <li><Link href="/service/compression" className="hover:opacity-80 transition-opacity">Compression Therapy</Link></li>
                <li><Link href="/service/infrared-sauna" className="hover:opacity-80 transition-opacity">Infrared Sauna</Link></li>
                <li><Link href="/service/mild-hyperbaric-oxygen" className="hover:opacity-80 transition-opacity">Hyperbaric Oxygen</Link></li>
              </ul>
            </div>

            {/* Optimization */}
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-wider opacity-90" id="footer-optimization">Optimization</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/service/iv-drip" className="hover:opacity-80 transition-opacity">IV Therapy</Link></li>
                <li><Link href="/service/nad-iv" className="hover:opacity-80 transition-opacity">NAD+ IV</Link></li>
                <li><Link href="/service/niagen-nr-iv" className="hover:opacity-80 transition-opacity">Niagen (NR) IV</Link></li>
                <li><Link href="/service/im-shots" className="hover:opacity-80 transition-opacity">IM Injections</Link></li>
              </ul>
            </div>

            {/* Wellness */}
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-wider opacity-90" id="footer-wellness">Wellness</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/service/red-light" className="hover:opacity-80 transition-opacity">Red Light Therapy</Link></li>
                <li><Link href="/service/trt" className="hover:opacity-80 transition-opacity">Testosterone Therapy</Link></li>
                <li><Link href="/service/glp1-weight-loss" className="hover:opacity-80 transition-opacity">GLP-1 Weight Loss</Link></li>
                <li><Link href="/service/biomarker-assessments" className="hover:opacity-80 transition-opacity">Biomarker Tests</Link></li>
              </ul>
            </div>

            {/* Aesthetic */}
            <div>
              <h4 className="font-bold mb-4 text-xs uppercase tracking-wider opacity-90" id="footer-aesthetic">Aesthetic</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/service/hydrafacial" className="hover:opacity-80 transition-opacity">HydraPeptide Facial</Link></li>
                <li><Link href="/service/neveskin" className="hover:opacity-80 transition-opacity">Neveskin Facial</Link></li>
                <li><Link href="/service/neveskin-shape" className="hover:opacity-80 transition-opacity">Neveskin Shape</Link></li>
                <li><Link href="/service/neveskin-tone" className="hover:opacity-80 transition-opacity">Neveskin Tone</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4" id="footer-contact">Contact</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:6149449041" className="hover:opacity-80 transition-opacity block" aria-label="Call Easton studio at 614-944-9041">Call: 614-944-9041</a>
                <a href="mailto:info@restorecolumbus.com" className="hover:opacity-80 transition-opacity block" aria-label="Email frontdeskOH001@restore.com">Email: frontdeskOH001@restore.com</a>
                <Link href="/book" className="hover:opacity-80 transition-opacity block font-medium text-accent">Book Appointment</Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 text-sm opacity-80">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2025 Restore Hyper Wellness Columbus. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
                <a href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</a>
                <button className="hover:opacity-100 transition-opacity text-accent" onClick={(e) => {const d = document.getElementById('footer-disclaimer'); if (d) d.classList.toggle('hidden');}} aria-label="Toggle disclaimers section" aria-expanded={!document.getElementById('footer-disclaimer')?.classList.contains('hidden')} aria-controls="footer-disclaimer">Disclaimers</button>
              </div>
            </div>
            
            {/* Collapsible Disclaimer */}
            <div id="footer-disclaimer" className="mt-6 pt-6 border-t border-primary-foreground/20 text-xs opacity-75 space-y-3 max-h-96 overflow-y-auto">
              <p><strong>Disclaimers:</strong> Terms and restrictions may apply. Prices and services subject to change without warning. Discounts cannot be combined or redeemed for cash value. Medical services are provided by an independently-owned physician practice. Some services may require medical clearance and a prescription. We reserve the right to refuse service to anyone. Services, therapies, nutrients and prices may vary per location.</p>
              
              <p>Restore does not provide medical advice, diagnosis or treatment. Our services are not intended to replace the care of a qualified healthcare professional. Always consult your physician or other licensed medical provider regarding any questions about your health, medical conditions or before beginning any new therapy.</p>
              
              <p>The content on our site, blog posts, educational materials, app, promotional newsletters and any other written content are not intended to replace an evaluation with a qualified healthcare professional and are not intended as medical advice.</p>
              
              <p>Testimonials reflect individual experiences of real customers, are applicable solely to the individual depicted, and are not necessarily representative of all who use Restore Hyper Wellness products and services. Results do vary and are unique to each individual. Testimonials are not intended to make claims that these products can be used to diagnose treat, cure, mitigate or prevent any disease. Medical services available to clients of Restore are provided by an independently owned physician practice.</p>
              
              <p>For all active Members: A $30 up-charge will be added to Universal Membership IV appointments in California studios.</p>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}
