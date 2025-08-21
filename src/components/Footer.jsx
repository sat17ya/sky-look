import React from "react";
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
          <p className="text-sm">123 Skylook Street, City, Country</p>
          <p className="text-sm mt-2">📞 +91 9876543210</p>
          <p className="text-sm">📧 info@skylook.com</p>
        </div>

        {/* Section 4 - Map */}
        <div>
          <h4 className="font-semibold mb-4">Find Us</h4>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
