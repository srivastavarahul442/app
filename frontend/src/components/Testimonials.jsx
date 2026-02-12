import React, { useState, useEffect } from 'react';
import { Star, Quote, Loader2 } from 'lucide-react';
import { getTestimonials } from '../services/api';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const data = await getTestimonials();
      setTestimonials(data);
    } catch (err) {
      console.error('Error loading testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real experiences from real travelers
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.location}</div>
                    <div className="text-xs text-blue-600 mt-1">{testimonial.tour}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Additional testimonial image section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <div className="relative h-48 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3" 
              alt="Happy travelers" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1536607961765-592e80bcc19e" 
              alt="Group trekking" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden col-span-2 md:col-span-1">
            <img 
              src="https://images.unsplash.com/photo-1558511916-905a523564c6" 
              alt="Adventure travel" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
