import React, { useState } from "react";
import {
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  Users,
  Zap,
  Shield,
  Loader2,
} from "lucide-react";
import { useToast } from "../context/ToastContext";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

const Demo: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    businessType: "",
    currentSoftware: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useToast();

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);

    try {
      const payload = { ...formData, preferredTime: selectedTime };
      const response = await fetch(`${API_BASE}/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Failed to schedule demo");
      }

      showSuccess(
        "Demo Scheduled Successfully! 🎉",
        `Your demo is scheduled for ${selectedTime}. We'll contact you shortly to confirm the details.`
      );

      setFormData({
        name: "",
        business: "",
        phone: "",
        email: "",
        businessType: "",
        currentSoftware: "",
      });
      setSelectedTime("");
    } catch (error: any) {
      showError(
        "Failed to Schedule Demo",
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const processSteps = [
    {
      icon: Calendar,
      title: "Schedule Demo",
      description:
        "Book a convenient time slot for your personalized demo session.",
      duration: "2 minutes",
    },
    {
      icon: Phone,
      title: "Expert Consultation",
      description:
        "Our specialist will understand your business needs and show you the system.",
      duration: "30 minutes",
    },
    {
      icon: CheckCircle,
      title: "Get Onboarded",
      description:
        "Start using the system within 1 hour with complete setup and training.",
      duration: "1 hour",
    },
  ];

  const demoFeatures = [
    {
      icon: Users,
      title: "Personalized Walkthrough",
      description:
        "See how the software works specifically for your business type and needs.",
    },
    {
      icon: Zap,
      title: "Live System Demo",
      description:
        "Experience real-time billing, inventory management, and reporting features.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Learn about our bank-grade security and compliance features.",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-up">
            Schedule Your Free Demo
          </h1>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            See how Focus Lifetime can transform your jewellery business. Get
            onboarded within 1 hour - completely free!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Process Steps */}
          <div className="animate-fade-right">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              How It Works
            </h2>

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
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-[#00296b] dark:text-blue-400 px-2 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
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
                <span className="font-semibold text-gray-900 dark:text-white">
                  Free Demo Benefits
                </span>
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
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Book Your Demo
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose your preferred time and we'll call you
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "100ms" }}
                  >
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    />
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "200ms" }}
                  >
                    <input
                      type="text"
                      placeholder="Business Name"
                      value={formData.business}
                      onChange={(e) =>
                        setFormData({ ...formData, business: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "300ms" }}
                  >
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    />
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "400ms" }}
                  >
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "500ms" }}
                  >
                    <select
                      value={formData.businessType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    >
                      <option value="">Business Type</option>
                      <option value="pawn-shop">Pawn Shop</option>
                      <option value="jewellery-store">Jewellery Store</option>
                      <option value="gold-loan">Gold Loan Business</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div
                    className="animate-slide-up"
                    style={{ animationDelay: "600ms" }}
                  >
                    <select
                      value={formData.currentSoftware}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          currentSoftware: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                    >
                      <option value="">Current Software (Optional)</option>
                      <option value="none">No Software</option>
                      <option value="excel">Excel/Manual</option>
                      <option value="other-software">Other Software</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>
                </div>

                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "700ms" }}
                >
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
                            ? "bg-[#00296b] text-white border-[#00296b] scale-105"
                            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-[#00296b] dark:hover:border-blue-400"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedTime || isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-[#00296b] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 animate-slide-up flex items-center justify-center space-x-2"
                  style={{ animationDelay: "800ms" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Scheduling...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="h-5 w-5" />
                      <span>Schedule Free Demo</span>
                    </>
                  )}
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

        {/* Demo Features */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            What You'll See in the Demo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demoFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#00296b] to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
