import { motion } from "framer-motion";
import faqData from "../data/faqData";

export default function FAQ({ category }) {
  const filteredFaqs = faqData.filter((faq) => faq.category === category);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
