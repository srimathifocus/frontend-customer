import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Receipt,
  BarChart3,
  Package,
  FileText,
  Users,
  DollarSign,
  Shield,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Features: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Receipt,
      title: "Smart Billing System",
      description:
        "Create professional invoices instantly with automated calculations and tax compliance.",
      details: [
        "Automated GST calculations",
        "Professional invoice templates",
        "Quick billing process",
        "Print & email invoices",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      darkBgColor: "from-blue-900/20 to-blue-800/20",
    },
    {
      icon: DollarSign,
      title: "Repayment Management",
      description:
        "Track loan repayments, interest calculations, and payment schedules effortlessly.",
      details: [
        "Automated interest calculations",
        "Payment reminders",
        "Flexible repayment schedules",
        "Overdue tracking",
      ],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
      darkBgColor: "from-emerald-900/20 to-emerald-800/20",
    },
    {
      icon: BarChart3,
      title: "Advanced Dashboard",
      description:
        "Real-time insights into your business performance with interactive charts and KPIs.",
      details: [
        "Real-time analytics",
        "Interactive charts",
        "Key performance indicators",
        "Business insights",
      ],
      color: "from-violet-500 to-violet-600",
      bgColor: "from-violet-50 to-violet-100",
      darkBgColor: "from-violet-900/20 to-violet-800/20",
    },
    {
      icon: FileText,
      title: "Comprehensive Reports",
      description:
        "Generate detailed transaction reports, audit trails, and business analytics.",
      details: [
        "Transaction reports",
        "Audit trails",
        "Financial summaries",
        "Custom report generation",
      ],
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      darkBgColor: "from-amber-900/20 to-amber-800/20",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Complete item tracking system for easy cataloging and quick billing processes.",
      details: [
        "Item cataloging",
        "Stock tracking",
        "Quick search & billing",
        "Category management",
      ],
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      darkBgColor: "from-teal-900/20 to-teal-800/20",
    },
    {
      icon: Users,
      title: "Multi-User Access",
      description:
        "Role-based access for admin and managers with customizable permissions.",
      details: [
        "Admin & manager roles",
        "Customizable permissions",
        "User activity tracking",
        "Secure access control",
      ],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      darkBgColor: "from-indigo-900/20 to-indigo-800/20",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Bank-grade encryption and secure cloud backups to protect your business data.",
      details: [
        "Bank-grade encryption",
        "Automated backups",
        "Data recovery",
        "Compliance ready",
      ],
      color: "from-rose-500 to-rose-600",
      bgColor: "from-rose-50 to-rose-100",
      darkBgColor: "from-rose-900/20 to-rose-800/20",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description:
        "Access your business from anywhere with our responsive mobile interface.",
      details: [
        "Responsive design",
        "Mobile optimized",
        "Offline capabilities",
        "Cross-platform support",
      ],
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      darkBgColor: "from-pink-900/20 to-pink-800/20",
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.5),
              0 0 60px rgba(139, 92, 246, 0.3);
          }
        }

        .animate-fade-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .shimmer-bg {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        .visible {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }

        .hidden-initial {
          opacity: 0;
        }

        .feature-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-card:hover {
          transform: translateY(-8px);
        }

        .feature-icon {
          transition: all 0.3s ease;
        }

        .feature-icon:hover {
          transform: rotate(5deg) scale(1.1);
        }

        .cta-button {
          background: linear-gradient(135deg, #00296b, #2563eb);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 41, 107, 0.3);
        }

        .progress-bar {
          transition: width 2s ease-in-out;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block" data-animate id="header">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-full blur-2xl animate-pulse-subtle" />
            <h1
              className={`relative text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-violet-800 dark:from-white dark:via-blue-200 dark:to-violet-200 bg-clip-text text-transparent mb-6 ${
                visibleItems.has("header")
                  ? "animate-fade-up"
                  : "hidden-initial"
              }`}
            >
              Powerful Features
            </h1>
          </div>

          <p
            className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed ${
              visibleItems.has("header") ? "animate-fade-up" : "hidden-initial"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            Everything you need to manage your pawn jewellery business
            efficiently, with elegant simplicity and powerful functionality.
          </p>
        </div>

        {/* Features Alternating Layout */}
        <div className="space-y-32 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              data-animate
              id={`feature-${index}`}
              className="group"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-16 items-center`}
              >
                {/* Feature Visual Side */}
                <div
                  className={`w-full lg:w-1/2 ${
                    visibleItems.has(`feature-${index}`)
                      ? index % 2 === 0
                        ? "animate-fade-left"
                        : "animate-fade-right"
                      : "hidden-initial"
                  }`}
                >
                  <div className="relative">
                    {/* Floating background orbs */}
                    <div
                      className={`absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r ${feature.bgColor} dark:bg-gradient-to-r dark:${feature.darkBgColor} rounded-full opacity-60 blur-3xl animate-float`}
                    />
                    <div
                      className={`absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r ${feature.bgColor} dark:bg-gradient-to-r dark:${feature.darkBgColor} rounded-full opacity-40 blur-3xl animate-float`}
                      style={{ animationDelay: "1s" }}
                    />

                    {/* Main feature card */}
                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden feature-card">
                      {/* Icon with animated background */}
                      <div
                        className={`w-24 h-24 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-8 relative overflow-hidden feature-icon animate-glow`}
                      >
                        <div className="absolute inset-0 shimmer-bg rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        <feature.icon className="h-12 w-12 text-white relative z-10" />
                      </div>

                      {/* Mock UI Dashboard */}
                      <div className="space-y-4">
                        <div
                          className={`bg-gradient-to-r ${feature.bgColor} dark:bg-gradient-to-r dark:${feature.darkBgColor} rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50`}
                        >
                          <div className="h-4 w-32 bg-gray-400/60 dark:bg-gray-600/60 rounded-full mb-4 animate-pulse-subtle" />
                          <div className="space-y-3">
                            <div
                              className="h-3 bg-gray-300/60 dark:bg-gray-700/60 rounded-full progress-bar"
                              style={{
                                width: visibleItems.has(`feature-${index}`)
                                  ? "100%"
                                  : "0%",
                              }}
                            />
                            <div
                              className="h-3 bg-gray-300/60 dark:bg-gray-700/60 rounded-full progress-bar"
                              style={{
                                width: visibleItems.has(`feature-${index}`)
                                  ? "85%"
                                  : "0%",
                                transitionDelay: "0.5s",
                              }}
                            />
                            <div
                              className="h-3 bg-gray-300/60 dark:bg-gray-700/60 rounded-full progress-bar"
                              style={{
                                width: visibleItems.has(`feature-${index}`)
                                  ? "70%"
                                  : "0%",
                                transitionDelay: "1s",
                              }}
                            />
                          </div>

                          <div className="mt-6 flex items-center justify-between">
                            <div
                              className={`h-10 w-10 rounded-full bg-gradient-to-r ${feature.color} animate-pulse-subtle`}
                            />
                            <div
                              className={`h-8 w-24 bg-gradient-to-r ${feature.color} rounded-full opacity-80 hover:scale-105 transition-transform cursor-pointer`}
                            />
                          </div>
                        </div>

                        {/* Animated status indicators */}
                        <div className="flex justify-end space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.color} animate-pulse-subtle`}
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature Content Side */}
                <div
                  className={`w-full lg:w-1/2 ${
                    visibleItems.has(`feature-${index}`)
                      ? index % 2 === 0
                        ? "animate-fade-right"
                        : "animate-fade-left"
                      : "hidden-initial"
                  }`}
                  style={{ animationDelay: "0.2s" }}
                >
                  <div
                    className={`inline-flex items-center px-6 py-2 bg-gradient-to-r ${feature.bgColor} dark:bg-gradient-to-r dark:${feature.darkBgColor} rounded-full mb-6 border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-transform cursor-default`}
                  >
                    <Sparkles className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Feature {index + 1}
                    </span>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    {feature.title}
                  </h3>

                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:scale-102 transition-transform feature-card">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      Key Benefits
                    </h4>
                    <ul className="space-y-4">
                      {feature.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className={`flex items-center space-x-4 group hover:translate-x-2 transition-transform ${
                            visibleItems.has(`feature-${index}`)
                              ? "animate-fade-up"
                              : "hidden-initial"
                          }`}
                          style={{
                            animationDelay: `${0.8 + detailIndex * 0.1}s`,
                          }}
                        >
                          <div
                            className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.bgColor} dark:bg-gradient-to-r dark:${feature.darkBgColor} flex items-center justify-center flex-shrink-0 border border-gray-200/50 dark:border-gray-700/50 group-hover:scale-110 transition-transform`}
                          >
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Admin & Manager Section */}
        <div
          data-animate
          id="admin-section"
          className={`bg-gradient-to-r from-[#00296b] via-blue-700 to-blue-600 rounded-3xl p-8 lg:p-16 text-white mb-20 relative overflow-hidden ${
            visibleItems.has("admin-section")
              ? "animate-fade-up"
              : "hidden-initial"
          }`}
        >
          {/* Floating background elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Admin & Manager Access
              </h2>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                Designed specifically for jewellery business owners and managers
                with intuitive role-based access control.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Admin Features",
                    items: [
                      "Full system access",
                      "User management",
                      "Financial reports",
                      "System configuration",
                    ],
                  },
                  {
                    title: "Manager Features",
                    items: [
                      "Daily operations",
                      "Customer management",
                      "Transaction processing",
                      "Inventory updates",
                    ],
                  },
                ].map((role, index) => (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 hover:scale-102 transition-all feature-card ${
                      visibleItems.has("admin-section")
                        ? "animate-fade-up"
                        : "hidden-initial"
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <h4 className="font-semibold mb-4 text-lg">{role.title}</h4>
                    <ul className="space-y-2">
                      {role.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-blue-100 flex items-center opacity-0 animate-fade-left"
                          style={{
                            animationDelay: `${0.5 + itemIndex * 0.1}s`,
                            animationFillMode: "forwards",
                          }}
                        >
                          <CheckCircle className="w-4 h-4 mr-2 text-blue-300" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`text-center ${
                visibleItems.has("admin-section")
                  ? "animate-fade-up"
                  : "hidden-initial"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-12 rounded-2xl border border-white/20 inline-block animate-float">
                <div className="hover:rotate-12 transition-transform duration-500">
                  <Users className="h-20 w-20 mx-auto mb-6" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Multi-User Ready
                </h3>
                <p className="text-blue-100 text-lg">
                  Support for unlimited users with customizable permissions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          data-animate
          id="cta-section"
          className={`text-center bg-gradient-to-r from-gray-50 via-blue-50 to-violet-50 dark:from-gray-800/50 dark:via-blue-900/20 dark:to-violet-900/20 p-16 rounded-3xl shadow-inner border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden ${
            visibleItems.has("cta-section")
              ? "animate-fade-up"
              : "hidden-initial"
          }`}
        >
          {/* Background animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-violet-500/5 rounded-3xl animate-pulse-subtle" />

          <h2
            className={`text-4xl font-bold text-gray-900 dark:text-white mb-6 relative z-10 ${
              visibleItems.has("cta-section")
                ? "animate-fade-up"
                : "hidden-initial"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Ready to Experience These Features?
          </h2>

          <p
            className={`text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed relative z-10 ${
              visibleItems.has("cta-section")
                ? "animate-fade-up"
                : "hidden-initial"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            Get a personalized demo and see how our software can transform your
            jewelry business operations with elegant simplicity.
          </p>

          <div
            className={`relative z-10 ${
              visibleItems.has("cta-section")
                ? "animate-fade-up"
                : "hidden-initial"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/demo"
              className="inline-flex items-center px-12 py-5 cta-button text-white font-semibold rounded-2xl shadow-lg group relative z-10"
            >
              <span className="mr-3">Schedule Free Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <p
            className={`mt-8 text-gray-500 dark:text-gray-400 relative z-10 ${
              visibleItems.has("cta-section")
                ? "animate-fade-up"
                : "hidden-initial"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            No credit card required • Free setup & training included
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
