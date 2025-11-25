import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import bgImg2 from "../../assets/logos/gradient.png"
import { Insta1 , Fb1 } from "../../assets";
import { useEffect, useState } from "react";

const highlights = [
  {
    id: 1,
    platform: "Instagram",
    icon: <FaInstagram className="text-pink-500 text-2xl" />,
    image: Insta1,  // manual thumb
    url: "https://www.instagram.com/p/DN0TOgCQBAK/",
    title: "Best Property for Sale"
  },
  {
    id: 2,
    platform: "Facebook",
    icon: <FaFacebook className="text-blue-600 text-2xl" />,
    image: Fb1, // manual thumb
    url: "https://www.facebook.com/yourpage/",
    title: "Client Success Story"
  },
  {
    id: 3,
    platform: "YouTube",
    icon: <FaYoutube className="text-red-600 text-2xl" />,
    image: null, // AUTO thumb
    url: "https://www.youtube.com/watch?v=JLqC4Mz1Lvg",
    title: "Walkthrough Video"
  },
];

export default function SocialHighlights() {

  const [thumbs, setThumbs] = useState({});

  useEffect(() => {
    const result = {};

    highlights.forEach((item) => {
      if (item.platform === "YouTube") {
        const videoId = item.url.split("v=")[1];
        result[item.id] = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      } else {
        // keep your manual thumbnails for Instagram & Facebook
        result[item.id] = item.image;
      }
    });

    setThumbs(result);
  }, []);

  return (
    <section
      className="py-20 px-6 lg:px-16 bg-white"
      style={{
        backgroundImage: `url(${bgImg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-10 text-center"
        >
          Social Media <span className="text-yellow-400">Highlights</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="group block bg-gray-50 shadow-md rounded-xl overflow-hidden border"
            >
              <div className="relative">
                <img
                  src={thumbs[item.id]}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white p-2 rounded-full shadow">
                  {item.icon}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.platform}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
