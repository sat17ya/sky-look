// src/components/about/StatsStrip.jsx
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatsStrip() {
  const stats = [
    { id: 1, number: 15, suffix: "+", label: "Project Completed" },
    { id: 2, number: 1500, suffix: "+", label: "Customer Satisfied" },
    { id: 3, number: 30, suffix: "+", label: "Expert Team Members" },
    { id: 4, number: 3, suffix: "+", label: "Available in Cities" },
  ];

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Number with CountUp */}
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: index * 0.2 }}
                className="text-3xl md:text-4xl font-extrabold drop-shadow-sm"
              >
                <CountUp 
                  start={0} 
                  end={item.number} 
                  duration={2} 
                  separator="," 
                  suffix={item.suffix} 
                  enableScrollSpy 
                  scrollSpyOnce 
                />
              </motion.h3>

              {/* Label */}
              <p className="mt-2 text-sm md:text-base font-medium opacity-90">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
