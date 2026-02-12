import React, { useState } from 'react';
import { X, Calendar, Users, Mail, Phone, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { toast } from 'sonner';
import { createBooking } from '../services/api';

export const BookingModal = ({ isOpen, onClose, packageData }) => {
  const [formData, setFormData] = useState({
    customer_name: '',
    email: '',
    phone: '',
    travelers: 1,
    travel_date: '',
    special_requests: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const bookingData = {
        ...formData,
        package_id: packageData.id,
        package_name: packageData.title
      };

      const response = await createBooking(bookingData);
      toast.success(`Booking confirmed! Your booking ID is ${response.booking_id}`);
      
      // Reset form
      setFormData({
        customer_name: '',
        email: '',
        phone: '',
        travelers: 1,
        travel_date: '',
        special_requests: ''
      });
      
      onClose();
    } catch (error) {
      toast.error('Booking failed. Please try again or contact support.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!packageData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            Book Your Tour
          </DialogTitle>
          <DialogDescription>
            {packageData.title} - {packageData.duration}
          </DialogDescription>
        </DialogHeader>

        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-slate-600">Total Price</p>
              <p className="text-3xl font-bold text-blue-600">{packageData.price}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Duration</p>
              <p className="text-lg font-semibold text-slate-900">{packageData.duration}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="customer_name" className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                id="customer_name"
                name="customer_name"
                type="text"
                required
                value={formData.customer_name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="pl-11"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="pl-11"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="pl-11"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="travel_date" className="block text-sm font-semibold text-slate-700 mb-2">
                Travel Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  id="travel_date"
                  name="travel_date"
                  type="date"
                  required
                  value={formData.travel_date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="pl-11"
                />
              </div>
            </div>

            <div>
              <label htmlFor="travelers" className="block text-sm font-semibold text-slate-700 mb-2">
                Number of Travelers *
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  id="travelers"
                  name="travelers"
                  type="number"
                  min="1"
                  max="20"
                  required
                  value={formData.travelers}
                  onChange={handleChange}
                  className="pl-11"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="special_requests" className="block text-sm font-semibold text-slate-700 mb-2">
              Special Requests (Optional)
            </label>
            <Textarea
              id="special_requests"
              name="special_requests"
              value={formData.special_requests}
              onChange={handleChange}
              placeholder="Any special requirements or preferences..."
              rows={4}
              className="resize-none"
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={submitting}
            >
              {submitting ? 'Booking...' : 'Confirm Booking'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
