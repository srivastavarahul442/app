import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-blue-100">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex items-center justify-end py-2 text-sm text-slate-600 border-b border-blue-50">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:info@travelhub.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@travelhub.com</span>
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TravelHub
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            <a href="#destinations" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Destinations
            </a>
            <a href="#packages" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Packages
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2">
              Home
            </a>
            <a href="#destinations" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2">
              Destinations
            </a>
            <a href="#packages" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2">
              Packages
            </a>
            <a href="#testimonials" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium py-2">
              Contact
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-blue-100">
              <Button variant="outline" className="border-blue-600 text-blue-600">
                Sign In
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Book Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
