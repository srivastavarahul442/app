import React, { useState, useEffect } from 'react';
import { Star, Clock, MapPin, Check, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { getPackages } from '../services/api';

export const FeaturedPackages = ({ onBookNow }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPackages();
      setPackages(data);
    } catch (err) {
      setError('Failed to load packages');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Carefully crafted itineraries for an unforgettable journey
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">{error}</p>
            <Button onClick={fetchPackages} className="mt-4 bg-blue-600 hover:bg-blue-700">
              Try Again
            </Button>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="group overflow-hidden border-2 border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white px-3 py-1 text-sm font-semibold">
                    Featured
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-slate-900">{pkg.rating}</span>
                  <span className="text-slate-500 text-sm">({pkg.reviews})</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="font-medium">{pkg.duration}</span>
                  </div>

                  <div className="flex items-start gap-2 text-slate-600">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="flex flex-wrap gap-2">
                      {pkg.destinations.map((dest, index) => (
                        <Badge key={index} variant="outline" className="border-blue-200 text-blue-700">
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-3">Package Highlights</h4>
                    <ul className="space-y-2">
                      {pkg.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div>
                  <div className="text-sm text-slate-500">Starting from</div>
                  <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                </div>
                <Button 
                  onClick={() => onBookNow && onBookNow(pkg)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
          </div>
        )}
      </div>
    </section>
  );
};
