import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface LuxuryCarouselProps {
  className?: string;
}

const LuxuryCarousel: React.FC<LuxuryCarouselProps> = ({ className = "" }) => {
  // Sample luxury jewelry images - replace with your actual images
  const luxuryImages = [
    {
      src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000",
      alt: "Luxury Gold Jewelry",
      title: "Premium Gold Collection",
    },
    {
      src: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1000",
      alt: "Diamond Necklace",
      title: "Exquisite Diamond Series",
    },
    {
      src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1000",
      alt: "Luxury Watch",
      title: "Timeless Elegance",
    },
    {
      src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000",
      alt: "Gold and Diamond Ring",
      title: "Signature Collection",
    },
    {
      src: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000",
      alt: "Luxury Bracelet",
      title: "Artisan Craftsmanship",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      className={`luxury-carousel-container ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {luxuryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden rounded-xl group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
                <p className="text-gray-200 text-sm mt-2">
                  Experience luxury redefined
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default LuxuryCarousel;
