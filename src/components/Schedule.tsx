import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, Phone, Mail } from 'lucide-react';

const Schedule: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    preferredTime: ''
  });

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', 
    '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo scheduled:', { ...formData, preferredTime: selectedTime });
    // Handle demo scheduling
  };

  const processSteps = [
    {
      icon: Calendar,
      title: 'Schedule Demo',
      description: 'Book a convenient time slot for your personalized demo session.'
    },
    {
      icon: Phone,
      title: 'Expert Consultation',
      description: 'Our specialist will understand your business needs and show you the system.'
    },
    {
      icon: CheckCircle,
      title: 'Get Onboarded',
      description: 'Start using the system within 1 hour with complete setup and training.'
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up">
            Schedule Your Free Demo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '200ms' }}>
            See how Focus Lifetime can transform your jewellery business. Get onboarded within 1 hour - completely free!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Process Steps */}
          <div className="animate-fade-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              How It Works
            </h3>
            
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 animate-slide-right"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#00296b] to-blue-600 rounded-full flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-semibold text-gray-900 dark:text-white">Free Demo Benefits</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>✓ Personalized system walkthrough</li>
                <li>✓ Business needs assessment</li>
                <li>✓ Custom configuration setup</li>
                <li>✓ Team training session</li>
                <li>✓ Data migration assistance</li>
                <li>✓ 30-day free trial period</li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <div className="animate-fade-left">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <div className="text-center mb-6">
                <Clock className="h-12 w-12 text-[#00296b] dark:text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Book Your Demo
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose your preferred time and we'll call you
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                    <input
                      type="text"
                      placeholder="Business Name"
                      value={formData.business}
                      onChange={(e) => setFormData({...formData, business: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="animate-slide-up" style={{ animationDelay: '500ms' }}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Preferred Time Slot
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {timeSlots.map((time, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 text-sm rounded-lg border transition-all duration-300 ${
                          selectedTime === time
                            ? 'bg-[#00296b] text-white border-[#00296b] scale-105'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-[#00296b] dark:hover:border-blue-400'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedTime}
                  className="w-full py-3 bg-gradient-to-r from-[#00296b] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-slide-up"
                  style={{ animationDelay: '600ms' }}
                >
                  Schedule Free Demo
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Phone className="h-4 w-4" />
                  <span>No cold calls</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="h-4 w-4" />
                  <span>No spam emails</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;