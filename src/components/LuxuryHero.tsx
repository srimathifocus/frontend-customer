import React, { useEffect, useMemo, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Gem,
  ArrowRight,
  Layers,
  LayoutDashboard,
  Smile,
  Cog,
} from "lucide-react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";

const LuxuryHero = () => {
  const controls = useAnimation();

  // Use exactly the two specified banner images
  const images = useMemo(() => {
    return [banner1, banner2];
  }, []);

  // Index for rotating background images
  const [currentIndex, setCurrentIndex] = useState(0);

  // Start animation controls
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Auto-rotate background every 2 seconds
  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="relative text-gray-900">
      {/* Hero Section with rotating banner background */}
      <section className="relative min-h-[520px] md:min-h-[640px]">
        {/* Background image extends above to cover header/navigation as well */}
        <div
          className="absolute left-0 right-0 -top-16 bottom-0 z-0 bg-gray-200 bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: currentImage ? `url(${currentImage})` : undefined,
          }}
        />
        {/* Soft gradient overlay for readability */}
        <div className="absolute left-0 right-0 -top-16 bottom-0 z-10 pointer-events-none bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

        <div className="container mx-auto px-4 pt-20 pb-16 relative z-20">
          <motion.div
            className="flex flex-col items-center text-center mb-14"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Tag */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6"
              variants={itemVariants}
            >
              <Gem className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">
                India's #1 Pawn Jeweller Software
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="block">Elevate Your</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                Jewellery Business
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed"
              variants={itemVariants}
            >
              Experience the ultimate billing solution designed exclusively for
              pawn jewellers. Streamline your operations with our premium
              software suite.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mb-8"
              variants={itemVariants}
            >
              <Link
                to="/demo"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Get Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/features"
                className="px-8 py-4 border-2 border-blue-600/50 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Features
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              className="flex items-center justify-center space-x-2 text-sm text-gray-600"
              variants={itemVariants}
            >
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 text-blue-600 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Trusted by 10,000+ businesses
              </span>
              <span className="w-1 h-1 rounded-full bg-blue-400"></span>
              <span>99.9% Uptime</span>
              <span className="w-1 h-1 rounded-full bg-blue-400"></span>
              <span>24/7 Support</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Focus Lifetime */}
      <div className="bg-gradient-to-b from-indigo-50 to-white py-16 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            Why Choose <span className="text-blue-600">Focus Lifetime?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Layers className="w-8 h-8 text-blue-600" />,
                title: "All-in-One Software",
                desc: "Everything you need to manage your pawn jewellery business in one platform.",
              },
              {
                icon: <LayoutDashboard className="w-8 h-8 text-indigo-600" />,
                title: "Advanced Dashboard",
                desc: "Track sales, loans, and inventory with our powerful dashboard.",
              },
              {
                icon: <Smile className="w-8 h-8 text-blue-500" />,
                title: "Easy to Use",
                desc: "A clean, intuitive interface designed for simplicity and speed.",
              },
              {
                icon: <Cog className="w-8 h-8 text-indigo-500" />,
                title: "Customized Solutions",
                desc: "Tailored features to suit your unique business requirements.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryHero;
