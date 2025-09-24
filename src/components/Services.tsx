import React from 'react';
import { Home, Building2, Video, UserCheck, Clock, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Security',
      description: 'Complete home security systems with smart technology, doorbell cameras, and 24/7 monitoring for your peace of mind.',
      features: ['Smart home integration', 'Mobile app control', 'Emergency response', 'Installation included']
    },
    {
      icon: Building2,
      title: 'Commercial Security',
      description: 'Comprehensive business security solutions including access control, surveillance, and alarm systems tailored to your industry.',
      features: ['Access control systems', 'Employee monitoring', 'Asset protection', 'Compliance support']
    },
    {
      icon: Video,
      title: 'Video Surveillance',
      description: 'State-of-the-art CCTV systems with HD recording, remote viewing, and intelligent motion detection capabilities.',
      features: ['HD/4K cameras', 'Cloud storage', 'Remote viewing', 'Night vision']
    },
    {
      icon: UserCheck,
      title: 'Security Consulting',
      description: 'Professional security assessments and risk analysis to identify vulnerabilities and recommend optimal solutions.',
      features: ['Risk assessment', 'Security audits', 'Custom solutions', 'Compliance guidance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Security Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive security solutions designed to protect what matters most to you. 
            From homes to businesses, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-950 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Clock className="h-12 w-12" />
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">24/7 Emergency Response</h3>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our monitoring center never sleeps. Get immediate response when you need it most, 
            with direct connections to local emergency services.
          </p>
          <button className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Learn About Our Response Times
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;