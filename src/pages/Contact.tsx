import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { useToast } from "../context/ToastContext";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      showSuccess(
        "Message Sent Successfully!",
        "We'll get back to you within 2 hours during business hours."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      showError(
        "Failed to Send Message",
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9876543210", "+91 8765432109"],
      description: "Mon-Sat, 9 AM to 8 PM",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@focuslifetime.com", "sales@focuslifetime.com"],
      description: "We reply within 2 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Gudiyatham, Vellore, Tamil Nadu 632001"],
      description: "Visit our office",
    },
    {
      icon: Clock,
      title: "Support Hours",
      details: ["24/7 Emergency Support"],
      description: "Always here to help",
    },
  ];

  const supportOptions = [
    {
      title: "Technical Support",
      description:
        "Get help with software issues, bugs, or technical questions.",
      icon: "🔧",
      contact: "support@focuslifetime.com",
    },
    {
      title: "Sales Inquiry",
      description:
        "Questions about pricing, features, or choosing the right plan.",
      icon: "💼",
      contact: "sales@focuslifetime.com",
    },
    {
      title: "Training & Onboarding",
      description: "Schedule training sessions or get help with setup.",
      icon: "📚",
      contact: "training@focuslifetime.com",
    },
    {
      title: "Billing Support",
      description: "Questions about invoices, payments, or account management.",
      icon: "💳",
      contact: "billing@focuslifetime.com",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-up">
            Get in Touch
          </h1>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Have questions about our software? Need help getting started? We're
            here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="animate-fade-right">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up border border-gray-200 dark:border-gray-700"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#00296b] to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {info.title}
                  </h3>

                  <div className="space-y-1 mb-2">
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#00296b] to-blue-600 text-white p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Need Immediate Help?
              </h3>
              <p className="text-blue-100 mb-4">
                Our support team is available 24/7 for emergency assistance.
                Don't hesitate to reach out!
              </p>
              <button className="bg-white text-[#00296b] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Support Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-left">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Send us a Message
              </h2>

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
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="demo">Request Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div
                  className="animate-slide-up"
                  style={{ animationDelay: "500ms" }}
                >
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00296b] dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-[#00296b] to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 animate-slide-up disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ animationDelay: "600ms" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                We'll get back to you within 2 hours during business hours.
              </p>
            </div>
          </div>
        </div>

        {/* Support Options */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            How Can We Help You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-3xl mb-4">{option.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {option.description}
                </p>
                <a
                  href={`mailto:${option.contact}`}
                  className="text-[#00296b] dark:text-blue-400 font-medium text-sm hover:underline"
                >
                  {option.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
