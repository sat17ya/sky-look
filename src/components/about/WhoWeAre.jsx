import { motion } from "framer-motion";
import teamImg from "../../assets/images/photo-test.avif"; 
import { Link } from "react-router-dom";

export default function WhoWeAre() {
  return (
    <section className="py-8 px-4 bg-gray-50 overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={teamImg}
            alt="Skylook Team"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            loading="lazy"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Your Trusted Partner in <span className="text-yellow-400">Land & Plots</span>
          </h2>

          {/* Subheading / Paragraph */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            At <span className="text-green-500">Skylook</span>, we provide verified plots and hassle-free land solutions 
            that help you secure your dream home or a smart investment. Transparency, trust, and timely handover 
            are at the core of everything we do.
          </p>

          {/* Mission & Vision Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                To empower families and investors with verified plots and seamless assistance for building their future.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm">
                To be the most trusted name in land solutions, helping clients create secure, valuable, and sustainable investments.
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <Link
            to="/projects"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Start Your Investment Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
