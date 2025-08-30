import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingActionMenu() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* WhatsApp */}
      <div className="relative group flex items-center">
        <span className="absolute right-14 bg-gray-900 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition">
          WhatsApp
        </span>
        <a
          href="https://wa.me/919000000000" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp size={26} />
        </a>
      </div>

      {/* Call */}
      <div className="relative group flex items-center">
        <span className="absolute right-14 bg-gray-900 text-white text-sm rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition">
          Call Us
        </span>
        <a
          href="tel:+919000000000" // Replace with your number
          className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaPhoneAlt size={26} />
        </a>
      </div>
    </div>
  );
}
