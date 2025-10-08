import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import services from "../data/services";
import ConsultationStrip from "../components/ConsultationStrip";
import FAQ from "../components/FAQ";

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 text-center">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Our <span className="text-yellow-400">Services</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg"
        >
          We offer end-to-end real estate solutions including consultation,
          legal assistance, financing, and property management. Our services are
          designed to simplify your property journey and give you peace of mind.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = FaIcons[service.icon];
              return (
                <motion.div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 text-3xl">
                    {Icon && <Icon />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <ConsultationStrip />
      <FAQ category="services" />
    </div>
  );
};

export default ServicesPage;
