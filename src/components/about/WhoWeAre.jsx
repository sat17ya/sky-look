import { motion } from "framer-motion";
import teamImg from "../../assets/images/photo-test.avif"; 

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
            alt="Our Team"
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
          {/* Who We Are */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Who <span className="text-yellow-400">We</span> Are
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We are a forward-thinking organization dedicated to delivering 
            innovative solutions and exceptional value. Our team is committed 
            to excellence, driven by passion, and focused on creating a 
            positive impact in every project we undertake.
          </p>

          {/* Mission & Vision Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                To empower communities and clients by providing innovative, 
                sustainable, and impactful solutions tailored to their needs.
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
                To be a leader in innovation and service excellence, shaping 
                a brighter and more sustainable future for all.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
