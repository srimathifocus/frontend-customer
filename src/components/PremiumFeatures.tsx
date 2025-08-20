import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Gem,
  Shield,
  Zap,
  BarChart4,
  FileText,
  Database,
  Users,
  CreditCard,
  Clock,
} from "lucide-react";

const PremiumFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: CreditCard,
      title: "Smart Billing System",
      description:
        "Generate professional invoices with customizable templates and automated tax calculations.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Repayment Management",
      description:
        "Track loan repayments, schedule reminders, and manage interest calculations automatically.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: BarChart4,
      title: "Advanced Dashboard",
      description:
        "Real-time analytics and insights to track business performance and growth metrics.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      title: "Transaction Reports",
      description:
        "Comprehensive reports for sales, purchases, loans, and repayments with export options.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Audit Reports",
      description:
        "Maintain compliance with detailed audit trails and secure record-keeping.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Inventory Management",
      description:
        "Track jewelry items with detailed specifications, images, and valuation history.",
      color: "from-indigo-500 to-violet-500",
    },
    {
      icon: Users,
      title: "Customer Management",
      description:
        "Build customer profiles with purchase history, preferences, and communication logs.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description:
        "Process transactions quickly with our optimized system designed for speed.",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div className="inline-flex items-center px-4 py-2 bg-blue-100/60 backdrop-blur-md rounded-full mb-6">
            <Gem className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-700">
              Premium Features
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Designed for Pawn Jewellery Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive suite of features streamlines your operations and
            enhances customer experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative rounded-2xl p-6 bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-xl transition duration-500"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-md`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumFeatures;
