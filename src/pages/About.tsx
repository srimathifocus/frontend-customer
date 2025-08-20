import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Zap, Heart, Target, Eye, Lightbulb } from 'lucide-react';

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
      description: '15+ years in jewellery industry with deep understanding of business needs.',
      expertise: ['Business Strategy', 'Industry Knowledge', 'Customer Relations']
    },
    {
      name: 'Priya Mehta',
      role: 'Head of Product',
      description: 'Expert in software design with focus on user experience and functionality.',
      expertise: ['Product Design', 'User Experience', 'Feature Development']
    },
    {
      name: 'Amit Kumar',
      role: 'Technical Lead',
      description: 'Full-stack developer with specialization in secure financial applications.',
      expertise: ['Software Architecture', 'Security', 'Performance']
    },
    {
      name: 'Neha Sharma',
      role: 'Customer Success',
      description: 'Dedicated to ensuring every customer gets maximum value from our software.',
      expertise: ['Customer Support', 'Training', 'Success Management']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Customer-Centric',
      description: 'Every feature we build is designed with our customers\' success in mind.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to stay ahead of industry needs and trends.'
    },
    {
      icon: Heart,
      title: 'Reliability',
      description: 'Our customers depend on us, and we take that responsibility seriously.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and honest business practices in everything we do.'
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-up">
            About Focus Lifetime
          </h1>
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

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-right">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
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
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                To empower every jewellery business in India with technology that's simple to use, 
                powerful in capability, and backed by exceptional support.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00296b] dark:bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Simplify complex business processes
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00296b] dark:bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Provide world-class customer support
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00296b] dark:bg-blue-400 rounded-full mt-2"></div>
                  <span className="text-gray-600 dark:text-gray-400">
                    Continuously innovate based on user feedback
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#00296b] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fade-up">
            Meet Our Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#00296b] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    
                    <p className="text-[#00296b] dark:text-blue-400 font-medium mb-3">
                      {member.role}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {member.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-[#00296b] dark:text-blue-400 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#00296b] to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of the 10,000+ jewellery businesses that trust Focus Lifetime 
            for their daily operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/demo"
              className="px-8 py-3 bg-white text-[#00296b] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Schedule Free Demo
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#00296b] transition-all duration-300 hover:scale-105"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;