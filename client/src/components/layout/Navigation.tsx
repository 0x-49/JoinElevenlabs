import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <img 
              src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_logo_2.png" 
              alt="ElevenLabs Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features">Features</Link>
            <Link href="#use-cases">Use Cases</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#contact">Contact</Link>
            <Button>Start Free Trial</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <Link href="#features">Features</Link>
              <Link href="#use-cases">Use Cases</Link>
              <Link href="#pricing">Pricing</Link>
              <Link href="#contact">Contact</Link>
              <Button className="w-full">Start Free Trial</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
