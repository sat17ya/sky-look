// src/pages/PropertyDetailPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt,
  FaFilePdf,
  FaLocationArrow 
} from "react-icons/fa";
import ImageModal from "../components/ImageModal";

// SLUGIFY
const slugify = (title) =>
  title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const PropertyDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => slugify(p.title) === slug);

  // --------------------------
  // MODAL STATE
  // --------------------------
  const [activeIndex, setActiveIndex] = useState(null);

  // unified image array → cover + gallery
  const allImages = [project?.img, ...(project?.images || [])];

  const openModal = (i) => setActiveIndex(i);
  const closeModal = () => setActiveIndex(null);

  const nextImage = () => {
    if (activeIndex < allImages.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevImage = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // --------------------------
  // NO PROJECT FOUND
  // --------------------------
  if (!project) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-red-600">Property not found</h2>
        <Link to="/projects" className="text-blue-600 underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* ---------------- Title ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl text-blue-700 font-bold mb-2">{project.title}</h1>

        <p className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2 text-red-500" /> {project.location}
        </p>
      </motion.div>

      {/* ---------------- Gallery ---------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {/* Main Cover Image — index 0 */}
        <img
          src={project.img}
          alt={project.title}
          className="rounded-2xl shadow-lg w-full h-[400px] object-cover cursor-pointer"
          onClick={() => openModal(0)}
        />

        {/* Smaller Images */}
        <div className="grid grid-cols-2 gap-4">
          {project.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} ${index}`}
              className="rounded-xl shadow-md object-cover h-48 w-full cursor-pointer"
              loading="lazy"
              onClick={() => openModal(index + 1)}  // shift index +1
            />
          ))}
        </div>
      </motion.div>

      {/* ---------------- Modal Component ---------------- */}
      <ImageModal
        images={allImages}
        index={activeIndex}
        onClose={closeModal}
        onNext={nextImage}
        onPrev={prevImage}
      />

      {/* ---------------- Description ---------------- */}
      {project.description && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
          <h2 className="text-2xl text-green-500 font-semibold mb-4">
            Property Details
          </h2>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>
        </motion.div>
      )}

      {/* ---------------- Features ---------------- */}
      {project.features && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
          <h2 className="text-2xl text-green-500 font-semibold mb-4">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li key={index} className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm">
                ✅ {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* ---------------- Nearby ---------------- */}
      {project.nearbyLocations && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
          <h2 className="text-2xl text-green-500 font-semibold mb-4">Nearby Locations</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.nearbyLocations.map((place, index) => (
              <li
                key={index}
                className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg shadow-sm"
              >
                <FaLocationArrow className="text-blue-500" />
                {place}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* ---------------- PDFs ---------------- */}
      {project.pdfs && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-12">
          <h2 className="text-2xl text-green-500 font-semibold mb-4">Download Brochures</h2>
          <ul>
            {project.pdfs.map((pdf, index) => (
              <li key={index} className="flex items-center gap-3 mb-2">
                <FaFilePdf className="text-red-600 text-2xl" />
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Download PDF {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* ---------------- Back Link ---------------- */}
      <div className="mt-8">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default PropertyDetails;
