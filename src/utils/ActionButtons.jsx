import { useState, useEffect } from "react";
import { FaComments, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-close after 5 seconds
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Toggle open/close
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close on button click
  const handleClick = () => setIsOpen(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Expandable Buttons */}
      <div
        className={`flex flex-col items-end space-y-3 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <div className="relative group flex items-center">
          <span className="absolute right-14 bg-gray-900 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            WhatsApp
          </span>
          <a
            href="https://wa.me/919000000000" // Replace number
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp size={26} />
          </a>
        </div>

        {/* Call */}
        <div className="relative group flex items-center">
          <span className="realative right-16 bg-gray-900 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition">
            Call Us
          </span>
          <a
            href="tel:+919000000000" // Replace number
            onClick={handleClick}
            className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
          >
            <FaPhoneAlt size={26} />
          </a>
        </div>
      </div>

      {/* Main Floating Button */}
      <div className="relative group flex items-center">
        <span className="relative right-1 bg-gray-900 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition">
          Chat with Us
        </span>
        <button
          onClick={toggleMenu}
          className="w-14 h-14 flex items-center justify-center bg-red-500 text-white rounded-full shadow-xl hover:bg-red-600 transition"
        >
          <FaComments size={26} />
        </button>
      </div>
    </div>
  );
}
