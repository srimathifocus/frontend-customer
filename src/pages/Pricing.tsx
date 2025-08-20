import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      subtitle: 'Basic Plan',
      price: 'Free',
      period: 'Forever',
      recommended: false,
      popular: false,
      features: [
        { name: 'Basic Billing', included: true },
        { name: 'Up to 100 transactions/month', included: true },
        { name: 'Basic Reports', included: true },
        { name: 'Email Support', included: true },
        { name: 'Advanced Dashboard', included: false },
        { name: 'Inventory Management', included: false },
        { name: 'Multi-user Access', included: false },
        { name: 'Premium Support', included: false },
        { name: 'Custom Reports', included: false },
        { name: 'API Access', included: false },
        { name: 'Audit Reports', included: false },
        { name: 'Advanced Security', included: false }
      ]
    },
    {
      name: 'Professional',
      subtitle: 'Most Popular',
      price: '₹2,999',
      period: 'per month',
      recommended: true,
      popular: true,
      features: [
        { name: 'Advanced Billing System', included: true },
        { name: 'Unlimited transactions', included: true },
        { name: 'Advanced Reports & Analytics', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Advanced Dashboard', included: true },
        { name: 'Complete Inventory Management', included: true },
        { name: 'Multi-user Access (5 users)', included: true },
        { name: 'Premium Support', included: true },
        { name: 'Custom Reports', included: false },
        { name: 'API Access', included: false },
        { name: 'Audit Reports', included: true },
        { name: 'Advanced Security', included: true }
      ]
    },
    {
      name: 'Enterprise',
      subtitle: 'Complete Solution',
      price: '₹4,999',
      period: 'per month',
      recommended: false,
      popular: false,
      features: [
        { name: 'Complete Billing Suite', included: true },
        { name: 'Unlimited everything', included: true },
        { name: 'Advanced Analytics & AI Insights', included: true },
        { name: '24/7 Dedicated Support', included: true },
        { name: 'Advanced Dashboard', included: true },
        { name: 'Complete Inventory Management', included: true },
        { name: 'Unlimited Users', included: true },
        { name: 'Premium Support', included: true },
        { name: 'Custom Reports & Exports', included: true },
        { name: 'Full API Access', included: true },
        { name: 'Audit Reports', included: true },
        { name: 'Advanced Security', included: true }
      ]
    }
  ];

  const comparisonFeatures = [
    'Basic Billing',
    'Transaction Limit',
    'Dashboard',
    'Reports',
    'Inventory Management',
    'Multi-user Access',
    'Support Level',
    'Custom Reports',
    'API Access',
    'Audit Reports',
    'Security Level',
    'Setup & Training'
  ];

  return (
    <div className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-up">
            Choose Your Perfect Plan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            Flexible pricing designed to grow with your business. Start free, upgrade when you need more power.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 animate-slide-up ${
                plan.recommended 
                  ? 'border-[#00296b] dark:border-blue-400 scale-105' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-[#00296b] dark:hover:border-blue-400'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#00296b] to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {plan.subtitle}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#00296b] dark:text-blue-400">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 animate-slide-right"
                      style={{ animationDelay: `${(index * 200) + (featureIndex * 50)}ms` }}
                    >
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 dark:text-gray-600 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.included 
                          ? 'text-gray-700 dark:text-gray-300' 
                          : 'text-gray-400 dark:text-gray-600'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/demo"
                  className={`block w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 text-center ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-[#00296b] to-blue-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-[#00296b] hover:text-white dark:hover:bg-blue-600'
                  }`}
                >
                  {plan.price === 'Free' ? 'Start Free' : 'Get Started'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Detailed Feature Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900 dark:text-white">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#00296b] dark:text-blue-400">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900 dark:text-white">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Monthly Price</td>
                  <td className="py-4 px-4 text-center font-semibold text-green-600">Free</td>
                  <td className="py-4 px-4 text-center font-semibold text-[#00296b] dark:text-blue-400">₹2,999</td>
                  <td className="py-4 px-4 text-center font-semibold text-gray-900 dark:text-white">₹4,999</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Transaction Limit</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-400">100/month</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Unlimited</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Users</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-400">1 User</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">5 Users</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300">Support</td>
                  <td className="py-4 px-4 text-center text-gray-600 dark:text-gray-400">Email</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">Priority</td>
                  <td className="py-4 px-4 text-center text-green-600 font-semibold">24/7 Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Can I upgrade anytime?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Is there a setup fee?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">No setup fees! We provide free setup and training for all plans.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What about data security?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">All plans include bank-grade security with encrypted data and regular backups.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Yes, no long-term contracts. Cancel anytime with 30 days notice.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            ✓ All plans include free setup and training ✓ 30-day money-back guarantee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/demo"
              className="px-8 py-3 bg-gradient-to-r from-[#00296b] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Schedule Free Demo
            </Link>
            <Link 
              to="/contact"
              className="px-8 py-3 border-2 border-[#00296b] text-[#00296b] dark:border-blue-400 dark:text-blue-400 font-semibold rounded-lg hover:bg-[#00296b] hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;