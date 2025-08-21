// src/components/home/HeroBanner.jsx
import { motion } from "framer-motion";
// import heroImage from "../../assets/hero-banner.avif"; 

export default function HeroBanner() {
  return (
    <section
      className="h-[100vh] relative bg-gray-900 text-white overflow-hidden"
      aria-label="Skylook Property Hero Banner"
    >
      {/* Background Image */}
      <img
        src="https://media.istockphoto.com/id/2154752387/photo/real-estate-concept-business-home-insurance-and-real-estate-protection-real-estate-investment.jpg?s=612x612&w=0&k=20&c=r6Tmn31ZHHr-8ZuWfZaYIYdqM9nD4dMc6NfDXxwsZeo="
        alt="Luxury apartments by Skylook Property"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager" // Hero image should load first
        width="1920"
        height="900"
        fetchpriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
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
          <a
            href="/projects"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="bg-transparent border border-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
