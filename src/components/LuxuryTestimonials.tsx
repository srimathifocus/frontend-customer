import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const LuxuryTestimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Owner, Krishna Jewellers",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      quote:
        "Focus Lifetime has transformed how we manage our pawn jewelry business. The billing system is intuitive and the inventory management is exceptional.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      position: "Director, Royal Gems",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      quote:
        "The repayment tracking feature has saved us countless hours and improved our cash flow. Customer support is always responsive and helpful.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      position: "Manager, Golden Touch Jewellers",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
      quote:
        "We've tried several billing solutions, but Focus Lifetime stands out with its specialized features for pawn jewellers. Worth every penny!",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      position: "CEO, Sparkle Diamonds",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200",
      quote:
        "The reporting capabilities have given us insights we never had before. We can now make data-driven decisions that have increased our profitability.",
      rating: 5,
    },
    {
      name: "Suresh Reddy",
      position: "Owner, Heritage Jewels",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
      quote:
        "The onboarding process was smooth and the team was extremely helpful. Our staff learned the system quickly and we saw immediate improvements.",
      rating: 5,
    },
  ];

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

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  return (
    <div className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="absolute top-20 left-20 w-40 h-40">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <motion.path
            d="M20,50 A30,30 0 1,1 80,50 A30,30 0 1,1 20,50 Z"
            stroke="url(#goldGradient3)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient
              id="goldGradient3"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#f9f295" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <svg
              className="h-4 w-4 text-blue-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 4zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium text-blue-700">
              Client Success Stories
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Trusted by Leading Jewellers
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Hear what our clients have to say about their experience with Focus
            Lifetime
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="testimonial-slide">
                <motion.div
                  className="bg-white border border-gray-200 p-8 rounded-xl relative overflow-hidden group shadow-md hover:shadow-lg"
                  variants={itemVariants}
                >
                  {/* Blue corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500 to-indigo-600 transform rotate-45 translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>
                  </div>

                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400/30 mr-4 flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-600 text-sm">
                        {testimonial.position}
                      </p>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 italic relative">
                    <span className="absolute -top-2 -left-2 text-4xl text-blue-500/20">
                      "
                    </span>
                    {testimonial.quote}
                    <span className="absolute -bottom-5 -right-2 text-4xl text-blue-500/20">
                      "
                    </span>
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx>{`
        .testimonial-swiper {
          width: 100%;
          padding: 50px 0;
        }
        .testimonial-slide {
          width: 400px;
          height: auto;
        }
        .swiper-pagination-bullet {
          background: #d4af37;
        }
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background-image: linear-gradient(
            to left,
            rgba(212, 175, 55, 0.15),
            rgba(0, 0, 0, 0)
          );
        }
      `}</style>
    </div>
  );
};

export default LuxuryTestimonials;
