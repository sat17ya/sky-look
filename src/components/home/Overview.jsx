import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa"; // import all FA icons
import services from "../../data/services";
import ladyImg from "../../assets/logos/image.png";
import bgImg2 from "../../assets/logos/9924918_4303688.svg";


export default function Overview() {
  const achievements = [
    { id: 1, icon: "FaUsers", number: "1200+", label: "Happy Clients" },
    { id: 2, icon: "FaAward", number: "15+", label: "Awards Won" },
    { id: 3, icon: "FaProjectDiagram", number: "200+", label: "Projects Delivered" },
  ];

  // Helper to render dynamic icon
  const renderIcon = (iconName, className = "text-yellow-600 text-2xl") => {
    const IconComponent = FaIcons[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };

  return (
    <section className="relative py-20 px-6 lg:px-16 bg-gray-50"style={{
        backgroundImage: `url(${bgImg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Lady Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={ladyImg}
            alt="Our Expert"
            className="w-full max-w-md rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Right Side - Services & Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services & <span className=" text-yellow-400">Achievements</span>
          </h2>
          <p className="text-gray-600 mb-6">
            We provide end-to-end real estate solutions that ensure a smooth
            experience from consultation to handover. Here’s a quick look:
          </p>

          {/* Services Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {services.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="p-5 bg-white shadow-md rounded-lg border hover:shadow-lg transition flex flex-col h-full"
              >
                <div className="mb-3">{renderIcon(service.icon, "text-3xl text-yellow-600")}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 flex-grow">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {achievements.map((ach) => (
              <motion.div
                key={ach.id}
                className="bg-yellow-100 p-6 rounded-lg text-center shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center mb-2">
                  {renderIcon(ach.icon, "text-yellow-600 text-3xl")}
                </div>
                <h4 className="text-xl font-bold text-gray-900">{ach.number}</h4>
                <p className="text-gray-600 text-sm">{ach.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
