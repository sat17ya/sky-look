import { motion } from "framer-motion";

const ImageModal = ({ images = [], index, onClose, onPrev, onNext }) => {
  if (index === null) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl w-full p-4"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* IMAGE */}
        <img
          src={images[index]}
          alt="Large Preview"
          className="w-full max-h-[80vh] object-contain rounded-xl"
        />

        {/* CLOSE BUTTON */}
        <button
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* PREV */}
        {index > 0 && (
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white px-3 py-2 rounded-full text-3xl"
            onClick={onPrev}
          >
            ‹
          </button>
        )}

        {/* NEXT */}
        {index < images.length - 1 && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white px-3 py-2 rounded-full text-3xl"
            onClick={onNext}
          >
            ›
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default ImageModal;
