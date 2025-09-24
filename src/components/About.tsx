import React from 'react';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '1000+' },
    { icon: Shield, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Industry Awards', value: '7' },
    { icon: TrendingUp, label: 'Response Time', value: '<3min' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proactive and responsive security services.
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At Alarmshield Security Company, we’re dedicated to providing top-notch security solutions to individuals, businesses, and organizations in Zimbabwe. 
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of highly trained professionals is committed to delivering exceptional service, ensuring the safety and security of our clients’ interests.
              We offer a wide range of security services, leveraging cutting-edge technology and expertise to safeguard our clients.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Licensed and fully insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">24/7 professional monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Advanced smart home integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Free security assessments</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div 
              className="rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop)'
              }}
            >
              <div className="aspect-[4/3] bg-cover bg-center"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;