import React from 'react';
import { Receipt, BarChart3, Package, FileText, Users, DollarSign, Shield, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Receipt,
      title: 'Smart Billing System',
      description: 'Create professional invoices instantly with automated calculations and tax compliance.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Repayment Management',
      description: 'Track loan repayments, interest calculations, and payment schedules effortlessly.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Advanced Dashboard',
      description: 'Real-time insights into your business performance with interactive charts and KPIs.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Comprehensive Reports',
      description: 'Generate detailed transaction reports, audit trails, and business analytics.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Complete item tracking system for easy cataloging and quick billing processes.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Users,
      title: 'Multi-User Access',
      description: 'Role-based access for admin and managers with customizable permissions.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Bank-grade encryption and secure cloud backups to protect your business data.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Access your business from anywhere with our responsive mobile interface.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up">
            Powerful Features for Your Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            Everything you need to manage your pawn jewellery business efficiently, 
            with no unwanted distractions - just the essential tools that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up border border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-[#00296b] dark:group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-[#00296b] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-bounce-slow"
          >
            View All Plans
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;