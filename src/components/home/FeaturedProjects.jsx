// src/components/home/FeaturedProjects.jsx
import projects from "../../data/projects";
import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";
// import bgImg from "../../assets/logos/bg.webp"
import bgImg from "../../assets/logos/937995_ODE08A0.jpg"
import { useNavigate } from "react-router-dom";


export default function FeaturedProjects() {
   const navigate = useNavigate();
  return (
    <section
  className="relative py-20 px-4 mx-auto overflow-hidden"
  style={{
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

      {/* Section title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-black relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured <span className="text-yellow-400">Projects</span>
        <span className="block w-28 h-1 bg-red-600 mx-auto mt-3 rounded-full"></span>
      </motion.h2>

      {/* Project cards with stagger animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.slice(0, 4).map((project) => (   // ✅ Only first 4 projects
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard
              title={project.title}
              location={project.location}
              img={project.img}
              onClick={() => navigate(`/projects/${project.slug}`)}
              label={project.label}
              area={project.area}
              type={project.type}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-6 relative z-10">
        <a
          href="/projects"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}
