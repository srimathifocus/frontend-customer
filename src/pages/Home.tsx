import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useToast } from "../context/ToastContext";
import LuxuryHero from "../components/LuxuryHero";
import PremiumFeatures from "../components/PremiumFeatures";
import LuxuryTestimonials from "../components/LuxuryTestimonials";
import LuxuryCTA from "../components/LuxuryCTA";
import ScreenshotShowcase from "../components/ScreenshotShowcase";
import "../components/LuxuryCarousel.css";
import "../components/LuxuryModelCarousel.css";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);

    try {
      // Add default values for required fields that aren't in this quick form
      const payload = {
        ...formData,
        businessType: "jewellery-store", // Default business type for home page
        preferredTime: "ASAP", // Default preferred time for quick demo requests
        currentSoftware: "unknown", // Default current software
      };

      const response = await fetch(`${API_BASE}/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Failed to request demo");
      }

      showSuccess(
        "Demo Request Sent! 🎉",
        "We'll contact you within 1 hour to schedule your free demo and onboard you quickly."
      );

      setFormData({
        name: "",
        business: "",
        phone: "",
        email: "",
      });
    } catch (error: any) {
      showError(
        "Failed to Send Demo Request",
        error.message ||
          "Something went wrong. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Luxury Hero Section */}
      <LuxuryHero />

      {/* Screenshot Showcase */}
      <ScreenshotShowcase />

      {/* Premium Features Section */}
      <PremiumFeatures />

      {/* Testimonials Section */}
      <LuxuryTestimonials />

      {/* CTA Section */}
      <LuxuryCTA />
    </div>
  );
};

export default Home;
