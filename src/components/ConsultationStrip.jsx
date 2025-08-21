// src/components/common/ConsultationStrip.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ConsultationStrip() {
  return (
    <section
      className="relative py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/business-background-design_1409-1646.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Left text */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Get Consultation
          </h2>
          <p className="text-gray-300 mt-2 text-lg">
            Get A Free Consultation Contact Us !
          </p>
        </div>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
