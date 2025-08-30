import projects from "../../data/projects";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import ProjectCard from "../ProjectCard"; // ✅ dynamic card

export default function NewProjectsSection() {
  const navigate = useNavigate();

  // Filter projects with label === "New"
  const newProjects = projects
    .filter((project) => project.label === "New")
    .slice(0, 4); // ✅ only 4 cards

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-black relative z-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Top <span className="text-yellow-400">Featured Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {newProjects.length > 0 ? (
            newProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                location={project.location}
                img={project.img}
                onClick={() => navigate(`/projects/${project.slug}`)}
                label={project.label}
                area={project.area}
                dimension={project.dimension}
                facing={project.facing}
                roadWidth={project.roadWidth}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No new projects available right now.
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-6 relative z-10">
        <Link
          to="/projects"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
