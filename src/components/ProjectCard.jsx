import { motion, AnimatePresence } from "framer-motion";
import { useState, memo } from "react";

function Tooltip({ children, text }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-2 px-2 py-1 rounded-md bg-gray-800 text-white text-xs whitespace-nowrap shadow-lg z-20"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectCard({
  title,
  location,
  img,
  onClick,
  label,
  area,
  dimension,
  facing,
  roadWidth,
}) {
  const badgeColors = {
    New: "bg-green-600",
    Ongoing: "bg-orange-500",
    Completed: "bg-gray-600",
  };

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
        {label && (
          <span
            className={`absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-md shadow-lg ${
              badgeColors[label] ?? "bg-blue-600"
            }`}
          >
            {label.toUpperCase()}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title + Location */}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500 text-sm">{location}</p>
          {area && (
            <p className="font-semibold text-gray-700 text-base mt-1">
              Area: {area}
            </p>
          )}
        </div>

        {/* Plot details + Button aligned */}
        <div className="mt-auto flex items-end justify-between pt-3">
          <div className="flex flex-col text-gray-700 text-sm font-medium gap-1">
            {dimension && <p>📐 Dimension: {dimension}</p>}
            {facing && <p>🧭 Facing: {facing}</p>}
            {roadWidth && <p>🚗 Road Width: {roadWidth}</p>}
          </div>

          <button
            onClick={onClick}
            aria-label={`View details about ${title}`}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);
