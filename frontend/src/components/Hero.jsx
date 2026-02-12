import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { heroImages } from '../data/mock';

export const Hero = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    travelers: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search data:', searchData);
    // Search functionality will be implemented
    alert(`Searching for: ${searchData.destination || 'all destinations'}`);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImages[0]})`,
          }}
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Wonders of<br />
            <span className="text-blue-400">India & Nepal</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
            Experience the rich heritage of Bihar and the majestic beauty of Nepal with our carefully curated luxury tour packages
          </p>

          {/* Search form */}
          <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Destination */}
              <div className="relative md:col-span-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Where to?"
                  value={searchData.destination}
                  onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                  className="pl-11 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Date */}
              <div className="relative md:col-span-1">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="date"
                  placeholder="When?"
                  value={searchData.date}
                  onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                  className="pl-11 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Travelers */}
              <div className="relative md:col-span-1">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  type="number"
                  placeholder="Travelers"
                  min="1"
                  value={searchData.travelers}
                  onChange={(e) => setSearchData({ ...searchData, travelers: e.target.value })}
                  className="pl-11 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Search button */}
              <div className="md:col-span-1">
                <Button 
                  type="submit" 
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </form>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-300 text-sm">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-slate-300 text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9</div>
              <div className="text-slate-300 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-slate-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
