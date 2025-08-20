import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      subtitle: 'Basic Plan',
      price: 'Free',
      period: 'Forever',
      recommended: false,
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
        { name: 'API Access', included: false }
      ]
    },
    {
      name: 'Professional',
      subtitle: 'Most Popular',
      price: '₹2,999',
      period: 'per month',
      recommended: true,
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
        { name: 'API Access', included: false }
      ]
    },
    {
      name: 'Enterprise',
      subtitle: 'Complete Solution',
      price: '₹4,999',
      period: 'per month',
      recommended: false,
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
        { name: 'Full API Access', included: true }
      ]
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            Flexible pricing designed to grow with your business. Start free, upgrade when you need more power.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#00296b] to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
                    Recommended
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

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.recommended
                      ? 'bg-gradient-to-r from-[#00296b] to-blue-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-[#00296b] hover:text-white dark:hover:bg-blue-600'
                  }`}
                >
                  {plan.price === 'Free' ? 'Start Free' : 'Get Started'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ✓ All plans include free setup and training
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Need a custom solution? <button className="text-[#00296b] dark:text-blue-400 hover:underline">Contact our sales team</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;