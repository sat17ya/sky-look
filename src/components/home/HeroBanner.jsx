// src/components/home/HeroBanner.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {Banner1,Banner2,Banner3,Banner4} from "../../assets/index"
import { Link } from "react-router-dom";

// ✅ Your 4 images
const images = [Banner1,Banner2,Banner3,Banner4]
  

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  // ✅ Auto-change image every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-[100vh] relative bg-gray-900 text-white overflow-hidden"
      aria-label="Skylook Property Hero Banner"
    >
      {/* ✅ Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
            width="1920"
            height="900"
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content (unchanged) */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight"
        >
          Discover Your Dream Property with{" "}
          <span className="text-yellow-400">Skylook</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-gray-200"
        >
          Premium properties tailored for you — from modern apartments to luxury villas.  
          Start your journey today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            to="/projects"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border border-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
