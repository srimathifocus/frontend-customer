import React from 'react';
import { Award, Clock, Users, TrendingUp, Shield, Headphones } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Industry Leading',
      description: 'Trusted by 10,000+ jewellery businesses across India with 99.9% customer satisfaction.',
      stats: '10,000+ Businesses'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Get your entire business system up and running within just 1 hour with our expert team.',
      stats: '1 Hour Setup'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 customer support with dedicated account managers and free training sessions.',
      stats: '24/7 Support'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description: 'Our clients see an average 40% increase in efficiency and 25% reduction in manual errors.',
      stats: '40% More Efficient'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Bank-grade security with automated backups and compliance with all Indian regulations.',
      stats: 'Bank-Grade Security'
    },
    {
      icon: Headphones,
      title: 'Free Training',
      description: 'Comprehensive training for your team with ongoing support and regular system updates.',
      stats: 'Free Training'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      business: 'Kumar Jewellers, Mumbai',
      text: 'Focus Lifetime transformed our business operations. The billing is so much faster now!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      business: 'Golden Palace, Delhi',
      text: 'Best investment for our shop. The inventory management saves us hours every day.',
      rating: 5
    },
    {
      name: 'Arjun Patel',
      business: 'Patel Gems, Ahmedabad',
      text: 'Customer support is exceptional. They helped us migrate all our data seamlessly.',
      rating: 5
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up">
            Why Choose Focus Lifetime Pawn Jeweller Software?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            Join thousands of successful jewellery businesses who trust us with their operations.
          </p>
        </div>

        {/* Main Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00296b] to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-semibold text-[#00296b] dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {reason.stats}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#00296b] dark:group-hover:text-blue-400 transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-up">
            What Our Customers Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 200 + 600}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.business}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#00296b] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-slow"
          >
            Join 10,000+ Happy Customers
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;