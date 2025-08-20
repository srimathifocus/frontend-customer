import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, EffectCreative } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

interface LuxuryModelCarouselProps {
  className?: string;
}

const LuxuryModelCarousel: React.FC<LuxuryModelCarouselProps> = ({
  className = "",
}) => {
  // Luxury jewelry models - replace with your actual images
  const luxuryModels = [
    {
      src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1000",
      alt: "Model with Diamond Necklace",
      title: "Diamond Elegance",
      description: "Exquisite craftsmanship for the modern woman",
    },
    {
      src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000",
      alt: "Gold Jewelry Collection",
      title: "Gold Heritage",
      description: "Timeless designs inspired by tradition",
    },
    {
      src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000",
      alt: "Model with Luxury Watch",
      title: "Precision Timepieces",
      description: "Where luxury meets functionality",
    },
    {
      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000",
      alt: "Bride with Traditional Jewelry",
      title: "Bridal Collection",
      description: "Make your special day unforgettable",
    },
    {
      src: "https://images.unsplash.com/photo-1630018548696-e1900d3da3b6?q=80&w=1000",
      alt: "Luxury Gemstone Jewelry",
      title: "Gemstone Treasures",
      description: "Rare and precious stones for the discerning",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      className={`luxury-model-carousel ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative">
        {/* Gold accent decorative elements */}
        <div className="gold-accent gold-accent-1"></div>
        <div className="gold-accent gold-accent-2"></div>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          cardsEffect={{
            slideShadows: true,
            perSlideOffset: 8,
            perSlideRotate: 2,
          }}
          modules={[EffectCards, Autoplay, EffectCreative]}
          className="luxury-model-swiper"
        >
          {luxuryModels.map((model, index) => (
            <SwiperSlide key={index}>
              <div className="luxury-model-slide">
                <img
                  src={model.src}
                  alt={model.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div className="model-content">
                    <h3 className="text-white text-2xl font-bold mb-2">
                      {model.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{model.description}</p>
                  </div>
                </div>

                {/* Luxury badge */}
                <div className="luxury-badge">Premium</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default LuxuryModelCarousel;
