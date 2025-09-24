import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Alarmshield Security gave us complete peace of mind. The installation was professional, and their monitoring service is exceptional. We feel so much safer now.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'Outstanding service! They secured our office complex with state-of-the-art cameras and access control. Their response time is incredible.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Property Manager',
      content: 'We manage 15 properties and Alarmshield Security handles security for all of them. Their professionalism and reliability are unmatched.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our security services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-blue-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">4.9/5</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Reviews</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-gray-600">Recommend Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;