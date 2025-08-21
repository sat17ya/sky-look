// src/pages/PropertyDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRulerCombined, FaBath, FaCar, FaBed, FaFilePdf } from "react-icons/fa";

// ✅ function to generate slug from title
const slugify = (title) =>
  title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

const PropertyDetails = () => {
  const { slug } = useParams();

  // ✅ Find project by slug
  const project = projects.find((p) => slugify(p.title) === slug);

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
      {/* Title & Location */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2 text-red-500" /> {project.location}
        </p>
      </motion.div>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        <img
          src={project.img}
          alt={project.title}
          className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
        />
        <div className="grid grid-cols-2 gap-4">
          {project.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} ${index}`}
              className="rounded-xl shadow-md object-cover h-48 w-full"
              loading="lazy"
            />
          ))}
        </div>
      </motion.div>

      {/* Key Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        <div className="flex items-center gap-3">
          <FaRulerCombined className="text-blue-600 text-2xl" />
          <span className="text-lg">{project.area}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaBed className="text-green-600 text-2xl" />
          <span className="text-lg">{project.type.bhk} BHK</span>
        </div>
        <div className="flex items-center gap-3">
          <FaBath className="text-purple-600 text-2xl" />
          <span className="text-lg">{project.type.bathrooms} Bathrooms</span>
        </div>
        <div className="flex items-center gap-3">
          <FaCar className="text-orange-600 text-2xl" />
          <span className="text-lg">{project.type.parking} Parking</span>
        </div>
      </motion.div>

      {/* Description */}
      {project.description && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>
        </motion.div>
      )}

      {/* Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.features.map((feature, index) => (
            <li
              key={index}
              className="bg-gray-100 px-4 py-2 rounded-lg shadow-sm"
            >
              ✅ {feature}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* PDFs */}
      {project.pdfs && project.pdfs.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Download Brochures</h2>
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

      {/* Back Link */}
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
