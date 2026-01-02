import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
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
      {/* Top Bar - Local Focus */}
      <div className="bg-primary text-primary-foreground py-2 text-xs md:text-sm font-medium">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Proudly serving Columbus, OH since 2019</span>
            <span className="md:hidden">Columbus, OH</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:6145550101" className="hover:text-accent transition-colors flex items-center gap-1">
              <Phone className="w-3 h-3" /> <span className="hidden sm:inline">Call Us</span>
            </a>
            <Link href="/locations" className="hover:text-accent transition-colors flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Find Your Studio
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm py-2" : "bg-background py-4"
        }`}
      >
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/restore-logo-transparent.png" alt="Restore Hyper Wellness" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="/services" className={`transition-colors hover:text-primary ${location === '/services' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Services
            </Link>
            <Link href="/comparisons" className={`transition-colors hover:text-primary ${location === '/comparisons' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Comparisons
            </Link>
            <Link href="/faq" className={`transition-colors hover:text-primary ${location === '/faq' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              FAQ
            </Link>
            <Link href="/memberships" className={`transition-colors hover:text-primary ${location === '/memberships' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Memberships
            </Link>
            <Link href="/pricing" className={`transition-colors hover:text-primary ${location === '/pricing' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Pricing
            </Link>
            <Link href="/locations" className={`transition-colors hover:text-primary ${location === '/locations' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Locations
            </Link>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6">
              <Link href="https://www.restore.com/book-now">Book Now</Link>
            </Button>
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
            <nav className="container py-4 flex flex-col gap-4 font-medium">
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/comparisons" className="text-foreground hover:text-primary transition-colors">
                Comparisons
              </Link>
              <Link href="/faq" className="text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/memberships" className="text-foreground hover:text-primary transition-colors">
                Memberships
              </Link>
              <Link href="/pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="/locations" className="text-foreground hover:text-primary transition-colors">
                Locations
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full w-full">
                <Link href="https://www.restore.com/book-now">Book Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky Mobile Book Now Button - Shows on Scroll */}
      {showMobileFooter && (
        <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-gradient-to-t from-background via-background to-transparent pt-4 pb-4 px-4 border-t border-border animate-in slide-in-from-bottom-3 duration-300">
          <Button asChild className="w-full bg-accent hover:bg-white text-accent-foreground hover:text-primary font-bold rounded-full py-3 text-base shadow-lg transition-all hover:scale-105">
            <Link href="https://www.restore.com/book-now">Book Your Session</Link>
          </Button>
        </div>
      )}

      {/* Always-visible Mobile Book Now Button - Always present */}
      {!showMobileFooter && (
        <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 bg-gradient-to-t from-background via-background to-transparent pt-4 pb-4 px-4 border-t border-border">
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-lg py-6 text-base shadow-lg">
            <Link href="https://www.restore.com/book-now">Book Now</Link>
          </Button>
        </div>
      )}

      {/* Main Content - Add padding to prevent overlap with sticky button */}
      <main className="flex-1 w-full pb-28 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 md:py-16 relative z-30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-lg mb-4">Restore Hyper Wellness</h3>
              <p className="text-sm opacity-90 mb-4">Local wellness authority in Columbus, Ohio. Science-backed therapies for recovery, energy, and longevity.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="hover:opacity-80 transition-opacity"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-bold mb-4">Locations</h4>
              <div className="space-y-3 text-sm">
                {locations.map(loc => (
                  <Link key={loc.id} href={`/location/${loc.id}`} className="hover:opacity-80 transition-opacity block">
                    <div className="font-medium">{loc.name.split(' - ')[1]}</div>
                    <div className="opacity-90">{loc.city}, {loc.state}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:opacity-80 transition-opacity">All Services</Link></li>
                <li><Link href="/services" className="hover:opacity-80 transition-opacity">Cryotherapy</Link></li>
                <li><Link href="/services" className="hover:opacity-80 transition-opacity">IV Therapy</Link></li>
                <li><Link href="/services" className="hover:opacity-80 transition-opacity">Red Light</Link></li>
                <li><Link href="/services" className="hover:opacity-80 transition-opacity">Skin Health</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:6145550101" className="hover:opacity-80 transition-opacity block">Call: 614-555-0101</a>
                <a href="mailto:info@restorecolumbus.com" className="hover:opacity-80 transition-opacity block">Email: info@restorecolumbus.com</a>
                <Link href="https://www.restore.com/book-now" className="hover:opacity-80 transition-opacity block font-medium text-accent">Book Appointment</Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 text-sm opacity-80">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2025 Restore Hyper Wellness Columbus. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile spacer to prevent content from hiding behind sticky button */}
      <div className="md:hidden h-24"></div>
    </div>
  );
}
