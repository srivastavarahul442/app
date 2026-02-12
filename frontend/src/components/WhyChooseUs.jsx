import React from 'react';
import * as LucideIcons from 'lucide-react';
import { whyChooseUs } from '../data/mock';

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Choose TravelHub
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your trusted partner for memorable journeys across India and Nepal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = LucideIcons[item.icon];
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors duration-300 border-2 border-transparent hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Tour Packages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-slate-600">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
