import React, { useState } from "react";
import logo from "../assets/logos/Skylook.avif";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [mapVisible, setMapVisible] = useState(false);

  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1 - Logo & Social Media */}
        <div>
          <img
            src={logo}
            alt="Skylook Logo"
            className="h-12 w-auto mb-4"
            loading="lazy"
          />
          <p className="text-sm mb-4">
            Building modern web experiences with style and performance.
          </p>
          <div className="flex space-x-3">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1877F2] text-white"
              aria-label="Facebook"
            >
              <FaFacebookF size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#E4405F] text-white"
              aria-label="Instagram"
            >
              <FaInstagram size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#0077B5] text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#FF0000] text-white"
              aria-label="YouTube"
            >
              <FaYoutube size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#1DA1F2] text-white"
              aria-label="Twitter"
            >
              <FaTwitter size={16} />
            </motion.a>
          </div>
        </div>

        {/* Section 2 - Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 - Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm">
            Anandi Bhawan, Plot No: 1181/3134, <br />
            Near Sai Temple, Siula, Gudia Pokhari, <br />
            Bhubaneswar, Odisha, 752104
          </p>
          <p className="text-sm mt-2">
            📞{" "}
            <a
              href="tel:+917325900244"
              className="hover:underline text-blue-600"
            >
              +91 73259 00244
            </a>
            ,{" "}
            <a
              href="tel:+919438515293"
              className="hover:underline text-blue-600"
            >
              +91 94385 15293
            </a>
          </p>

          <p className="text-sm">
            📧{" "}
            <a
              href="mailto:property.skylook@gmail.com"
              className="hover:underline text-blue-600"
            >
              property.skylook@gmail.com
            </a>
          </p>
        </div>

        {/* Section 4 - Map */}
        <div>
          <h4 className="font-semibold mb-4">Find Us</h4>

          {!mapVisible ? (
            <button
              onClick={() => setMapVisible(true)}
              className="w-full h-[150px] bg-gray-800 text-sm text-gray-400 flex items-center justify-center rounded-md hover:bg-gray-700 transition"
            >
              📍 Click to Load Map
            </button>
          ) : (
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.2666779302212!2d85.855021!3d20.164619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a3e051e0681f%3A0xfc7e507be5734ecf!2sSkylook%20Property!5e0!3m2!1sen!2sin!4v1756566612808!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-md"
              aria-label="Location of Skylook Property on Google Maps"
            ></iframe>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-center py-4 mt-8 text-sm">
        © {new Date().getFullYear()} Skylook. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
