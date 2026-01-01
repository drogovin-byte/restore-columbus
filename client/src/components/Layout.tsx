import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { locations } from "@/lib/data";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
            <span className="hidden md:inline">Proudly serving Columbus, OH since 2020</span>
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
            <img src="/images/restore-logo.png" alt="Restore Hyper Wellness" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="/services" className={`transition-colors hover:text-primary ${location === '/services' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Services
            </Link>
            <Link href="/science" className={`transition-colors hover:text-primary ${location === '/science' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              The Science
            </Link>
            <Link href="/blog" className={`transition-colors hover:text-primary ${location.startsWith('/blog') ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Local Blog
            </Link>
            <Link href="/locations" className={`transition-colors hover:text-primary ${location === '/locations' ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
              Locations
            </Link>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-6">
              <Link href="/book">Book Now</Link>
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
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg animate-in slide-in-from-top-5">
            <nav className="container flex flex-col gap-4 py-6">
              <Link href="/services" className="text-lg font-medium py-2 border-b border-border/50">Services</Link>
              <Link href="/science" className="text-lg font-medium py-2 border-b border-border/50">The Science</Link>
              <Link href="/blog" className="text-lg font-medium py-2 border-b border-border/50">Local Blog</Link>
              <Link href="/locations" className="text-lg font-medium py-2 border-b border-border/50">Locations</Link>
              <Button asChild className="w-full mt-4 bg-primary text-white">
                <Link href="/book">Book Appointment</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl">RESTORE</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Helping Columbus do more of what they love through science-backed wellness therapies. Locally owned and operated.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/services#cryotherapy" className="hover:text-white transition-colors">Cryotherapy</Link></li>
              <li><Link href="/services#iv-drip" className="hover:text-white transition-colors">IV Drip Therapy</Link></li>
              <li><Link href="/services#red-light" className="hover:text-white transition-colors">Red Light Therapy</Link></li>
              <li><Link href="/services#infrared-sauna" className="hover:text-white transition-colors">Infrared Sauna</Link></li>
              <li><Link href="/services#compression" className="hover:text-white transition-colors">Compression</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Columbus Wellness Blog</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">Locations</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              {locations.map(loc => (
                <li key={loc.id} className="flex gap-2 items-start">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-accent" />
                  <div>
                    <strong className="block text-white">{loc.name.replace("Restore Hyper Wellness - ", "")}</strong>
                    <span>{loc.address}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="container border-t border-primary-foreground/20 pt-8 text-center text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Restore Hyper Wellness Columbus. All rights reserved. Independent Franchisee.</p>
        </div>
      </footer>
    </div>
  );
}
