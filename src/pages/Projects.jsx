// src/pages/Projects.jsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import ConsultationStrip from "../components/ConsultationStrip";
import FAQ from "../components/FAQ";

export default function Projects() {
  const navigate = useNavigate();

  // Filter FAQs for investment category

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4"
          >
            Our <span className="text-yellow-400">Projects</span>
          </motion.h1>
          <h1 className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore our latest, ongoing, and completed real estate projects
            tailored for modern living and smart investments.
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              location={project.location}
              img={project.img}
              label={project.label}
              area={project.area}
              type={project.type}
              onClick={() => navigate(`/projects/${project.slug}`)}
            />
          ))}
        </div>
      </section>

      <ConsultationStrip />

      <FAQ category="investment" />
    </div>
  );
}
