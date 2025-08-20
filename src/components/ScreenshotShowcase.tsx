import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import custom CSS
import "./ScreenshotSlider.css";

// Import screenshots
import screenshot1 from "../assets/Screenshot 2025-08-19 154433.png";
import screenshot2 from "../assets/Screenshot 2025-08-19 154450.png";
import screenshot3 from "../assets/Screenshot 2025-08-19 154500.png";
import screenshot4 from "../assets/Screenshot 2025-08-19 154509.png";
import screenshot5 from "../assets/Screenshot 2025-08-19 154517.png";
import screenshot6 from "../assets/Screenshot 2025-08-19 154550.png";
import screenshot7 from "../assets/Screenshot 2025-08-19 154558.png";
import screenshot8 from "../assets/Screenshot 2025-08-19 154609.png";

const screenshots = [
  { src: screenshot1, alt: "Billing Software Dashboard" },
  { src: screenshot2, alt: "Customer Management" },
  { src: screenshot3, alt: "Inventory Management" },
  { src: screenshot4, alt: "Transaction History" },
  { src: screenshot5, alt: "Reports and Analytics" },
  { src: screenshot6, alt: "Invoice Generation" },
  { src: screenshot7, alt: "Settings Panel" },
  { src: screenshot8, alt: "User Management" },
];

const ScreenshotShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
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
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6"
            variants={itemVariants}
          >
            <span className="text-sm font-medium text-blue-700">
              Software Preview
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            See Our Software in Action
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Explore the intuitive interface and powerful features of our pawn
            jewellery billing software
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
            navigation={true}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="screenshot-swiper"
          >
            {screenshots.map((screenshot, index) => (
              <SwiperSlide key={index} className="screenshot-slide">
                <div className="browser-frame">
                  {/* Browser header */}
                  <div className="browser-header">
                    <div className="browser-buttons">
                      <div className="browser-button browser-button-red"></div>
                      <div className="browser-button browser-button-yellow"></div>
                      <div className="browser-button browser-button-green"></div>
                    </div>
                    <div className="browser-address-bar">
                      <span className="mr-2">🔒</span>
                      focuslifetime.com/dashboard
                    </div>
                  </div>

                  {/* Browser content */}
                  <div className="browser-content">
                    <img src={screenshot.src} alt={screenshot.alt} />
                  </div>

                  {/* Caption */}
                  <div className="screenshot-caption">
                    <h3>{screenshot.alt}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default ScreenshotShowcase;
