import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">TravelHub</h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Your trusted partner for discovering the wonders of India and Nepal. Creating unforgettable journeys since 2008.
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-blue-400 transition-colors">Destinations</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-blue-400 transition-colors">Tour Packages</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Popular destinations */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Popular Destinations</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Bodh Gaya</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Nalanda</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Kathmandu</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Pokhara</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">Everest Base Camp</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span>123 Travel Street,<br />Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="hover:text-blue-400 transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@travelhub.com" className="hover:text-blue-400 transition-colors">
                  info@travelhub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 TravelHub. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
