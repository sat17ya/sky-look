// src/components/about/CoreValues.jsx
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa"; // dynamic import

export default function CoreValues() {
  const coreValues = [
    {
      id: 1,
      icon: "FaCheckCircle",
      title: "Trust & Transparency",
      description:
        "Verified plots with clear documentation and honest dealings."
    },
    {
      id: 2,
      icon: "FaSmile",
      title: "Customer Satisfaction",
      description:
        "Ensuring smooth processes and happy families & investors."
    },
    {
      id: 3,
      icon: "FaMapMarkedAlt",
      title: "Reliability",
      description:
        "Timely handover and support for all your land needs."
    },
    {
      id: 4,
      icon: "FaLeaf",
      title: "Sustainable Growth",
      description:
        "Helping you make smart, future-ready land investments."
    },
  ];

  return (
    <section className="py-16 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-10"
        >
          Our <span className="text-yellow-400">Core Values</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {coreValues.map((value, index) => {
            const IconComponent = Icons[value.icon] || Icons.FaRegCircle;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition h-full"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 text-yellow-500 text-4xl">
                  <IconComponent />
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
