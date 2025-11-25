import { motion } from "framer-motion";
import { memo } from "react";

// =========================
// UPDATED VERSION AS PER REQUIREMENT
// =========================

function ProjectCard({
  title,
  location,
  img,
  onClick,
  label,
  area,
  subFeature,
  roadWidth,
  subLoc,
}) {
  const badgeColors = {
    New: "bg-gradient-to-r from-red-800 via-red-500 to-yellow-400",
    Ongoing: "bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400",
    Completed: "bg-gray-600",
  };

  const glowEffect =
    label === "New" || label === "Ongoing" ? "animate-gradient-glow" : "";

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition relative flex flex-col h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="relative">
        <img
          src={img}
          alt={`${title} project in ${location}`}
          className="w-full h-56 object-cover"
          width="400"
          height="300"
          loading="lazy"
        />

        {/* Badge */}
        {label && (
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [1, 1.15, 1], opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg
              ${badgeColors[label] ?? "bg-blue-600"}
              bg-[length:200%_200%] ${glowEffect}`}
          >
            {label === "New" ? "Newly Launched" : label}
          </motion.span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">

        {/* Title & Address in one row */}
        <div className="flex justify-between items-center flex-col">
          <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
          <p className="text-gray-600 text-center font-bold text-sm">
            {location}
          </p>
          {subLoc && <p className="text-gray-400 text-center font-bold text-sm">
            ({subLoc})
            </p>}
        </div>

        {/* Details */}
       <div className="flex flex-row gap-3">
         <div className="mt-3 mb-4 text-gray-700 text-sm font-medium space-y-1">
          {subFeature && <p>📜 Feature: {subFeature}</p>}
          {area && <p>📐 Area: {area}</p>}
          {roadWidth && <p>🛣️ Raod Width: {roadWidth}</p>}
        </div>
       </div>

        {/* Button centered at the bottom */}
        <div className="mt-auto flex justify-center pt-3">
          <button
            onClick={onClick}
            aria-label={`View details about ${title}`}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-6 py-2.5"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);
