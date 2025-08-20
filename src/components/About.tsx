import React from 'react';
import { Users, Award, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Customers', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },
    { number: '99.9%', label: 'Uptime', icon: Zap },
    { number: '24/7', label: 'Support', icon: Heart }
  ];

  const team = [
    {
      name: 'Rajesh Singh',
      role: 'Founder & CEO',
      description: '15+ years in jewellery industry with deep understanding of business needs.'
    },
    {
      name: 'Priya Mehta',
      role: 'Head of Product',
      description: 'Expert in software design with focus on user experience and functionality.'
    },
    {
      name: 'Amit Kumar',
      role: 'Technical Lead',
      description: 'Full-stack developer with specialization in secure financial applications.'
    },
    {
      name: 'Neha Sharma',
      role: 'Customer Success',
      description: 'Dedicated to ensuring every customer gets maximum value from our software.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up">
            About Focus Lifetime
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            We're passionate about empowering jewellery businesses with technology that makes a real difference.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#00296b] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Focus Lifetime was born from a simple observation: jewellery businesses were struggling 
                with outdated, complex software that didn't understand their unique needs.
              </p>
              <p>
                Our founder, with over 15 years in the jewellery industry, experienced these challenges 
                firsthand and decided to create a solution that would be different - intuitive, 
                powerful, and built specifically for Indian jewellery businesses.
              </p>
              <p>
                Today, we're proud to serve over 10,000 businesses across India, helping them streamline 
                operations, reduce errors, and focus on what they do best - serving their customers.
              </p>
            </div>
          </div>

          <div className="animate-fade-left">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-blue-900 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To empower every jewellery business in India with technology that's simple to use, 
                powerful in capability, and backed by exceptional support.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00296b] dark:bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Simplify complex business processes
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00296b] dark:bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Provide world-class customer support
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00296b] dark:bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Continuously innovate based on user feedback
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        {/* <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-up">
            Meet Our Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-[#00296b] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h4>
                
                <p className="text-[#00296b] dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00296b] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-slow"
          >
            Get in Touch
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;