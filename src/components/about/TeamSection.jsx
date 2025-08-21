// src/components/about/TeamSection.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import teamData from "../../data/teamData";

// Social platform styles
const socialStyles = {
  linkedin: "bg-[#0A66C2]",
  twitter: "bg-[#1DA1F2]",
  facebook: "bg-[#1877F2]",
  youtube: "bg-[#FF0000]",
  instagram:
    "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]",
};

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
        >
          Meet Our <span className="text-yellow-400">Leadership Team</span>
        </motion.h2>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              {/* Image with hover overlay */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />

                {/* Overlay with animated social icons */}
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {Object.entries(member.socials).map(([platform, link], i) => (
                    <motion.a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 flex items-center justify-center text-white text-xl ${socialStyles[platform]} transition transform hover:scale-110`}
                      style={{ borderRadius: "50px" }} // square but slightly rounded edges
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {platform === "linkedin" && <FaLinkedin />}
                      {platform === "twitter" && <FaTwitter />}
                      {platform === "facebook" && <FaFacebook />}
                      {platform === "instagram" && <FaInstagram />}
                      {platform === "youtube" && <FaYoutube />}
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Name & Role */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-yellow-600 font-medium">
                  {member.designation}
                </p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
