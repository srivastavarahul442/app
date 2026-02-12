import React, { useState } from 'react';
import { MapPin, Star, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { biharDestinations, nepalDestinations } from '../data/mock';

export const Destinations = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getFilteredDestinations = () => {
    if (activeTab === 'bihar') return biharDestinations;
    if (activeTab === 'nepal') return nepalDestinations;
    return [...biharDestinations, ...nepalDestinations];
  };

  const filteredDestinations = getFilteredDestinations();

  return (
    <section id="destinations" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our handpicked destinations across India and Nepal
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <Button
            onClick={() => setActiveTab('all')}
            variant={activeTab === 'all' ? 'default' : 'outline'}
            className={activeTab === 'all' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }
          >
            All Destinations
          </Button>
          <Button
            onClick={() => setActiveTab('bihar')}
            variant={activeTab === 'bihar' ? 'default' : 'outline'}
            className={activeTab === 'bihar' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }
          >
            Bihar, India
          </Button>
          <Button
            onClick={() => setActiveTab('nepal')}
            variant={activeTab === 'nepal' ? 'default' : 'outline'}
            className={activeTab === 'nepal' 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }
          >
            Nepal
          </Button>
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-slate-900 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {destination.rating}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {destination.name}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {destination.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Clock className="w-4 h-4" />
                  {destination.duration}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-500">Starting from</div>
                    <div className="text-2xl font-bold text-blue-600">{destination.price}</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
