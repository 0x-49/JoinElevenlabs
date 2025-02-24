import { useState, useEffect } from "react";
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex-shrink-0">
            <img 
              src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/ElevenLabs_logo_2.png" 
              alt="ElevenLabs Logo" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("use-cases")}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <a 
              href="https://try.elevenlabs.io/7qngyxyh42op" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="medium">
                Start Free Trial
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 bg-white rounded-lg shadow-lg px-4 mb-4">
            <button 
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("use-cases")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              Contact
            </button>
            <a 
              href="https://try.elevenlabs.io/7qngyxyh42op" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="primary" size="medium" fullWidth>
                Start Free Trial
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
