import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const LuxuryCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
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
    <div className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke="url(#blueGradient)"
              strokeWidth="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="blueGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#93c5fd" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto bg-white p-1 rounded-2xl overflow-hidden shadow-xl"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="relative">
            {/* Blue border effect */}
            <div className="absolute inset-0 p-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-70"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-600 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-600 to-transparent opacity-70"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-700 opacity-70"></div>
            </div>

            <div className="p-12 text-center">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6"
                variants={itemVariants}
              >
                <span className="text-sm font-medium text-blue-700">
                  Start Your Free Demo
                </span>
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                Get Onboarded{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                  Within 1 Hour
                </span>
              </motion.h2>

              <motion.p
                className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Join 10,000+ successful jewellery businesses. Our experts will
                set up your account and provide personalized training to get you
                started quickly.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                variants={itemVariants}
              >
                <Link
                  to="/demo"
                  className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Request Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
                variants={itemVariants}
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">No credit card required</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Free setup & training</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">24/7 support</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LuxuryCTA;
