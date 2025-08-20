import React from "react";
import { Link } from "react-router-dom";
import {
  Gem,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const supportLinks = [
    { name: "Support", path: "/contact" },
    { name: "Demo", path: "/demo" },
    { name: "Documentation", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Gem className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">
                Focus<span className="text-blue-600">Lifetime</span>
              </div>
            </Link>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-md">
              Intelligent billing software for jewellery businesses across India. 
              Simple, powerful, and reliable.
            </p>

            {/* CTA Card */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 max-w-sm">
              <h4 className="font-semibold text-gray-900 mb-2">
                Ready to get started?
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Experience Focus Lifetime with a personalized demo.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  {link.path ? (
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>support@focuslifetime.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-gray-600">
                  <p>123 Gudiyatham</p>
                  <p>Vellore, Tamil Nadu 632001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2024 Focus Lifetime. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;