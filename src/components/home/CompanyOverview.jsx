import React from "react";
import { FaBuilding, FaHandshake, FaKey, FaSmile } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import bgImage from "../../assets/images/photo-test.avif";

export default function CompanyOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="py-20 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        // backgroundAttachment:"fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="pl-6 md:pl-12">
            {" "}
            {/* Added padding-left */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Company <span className="text-yellow-400">Overview</span>
              </h2>
              <p className="text-lg text-blue-200">
                Building Dreams, Delivering Excellence
              </p>
            </div>
            <p className="text-gray-200 max-w-lg mb-6 leading-relaxed">
              We are a trusted real estate brand committed to delivering premium
              residential and commercial projects. With a focus on quality,
              transparency, and timely delivery, we create spaces that inspire
              better living and ensure valuable investments. Over the years, our
              dedication has earned us the trust of hundreds of families and
              businesses.
            </p>
            {/* CTA Button */}
            <a
            href="/about"
            className="bg-transparent border border-white hover:bg-white text-white hover:text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            More About Us
          </a>
          </div>

          {/* Right Service Cards */}
          <div className="grid sm:grid-cols-2 gap-6" ref={ref}>
            {/* Residential */}
            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-lg shadow hover:shadow-lg transition">
              <FaBuilding className="text-4xl text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-1">
                Residential Projects
              </h3>
              <p className="text-gray-600 text-sm">
                Premium homes designed for comfort and style.
              </p>
            </div>

            {/* Trusted Partnerships */}
            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-lg shadow hover:shadow-lg transition">
              <FaHandshake className="text-4xl text-green-600 mb-3" />
              <h3 className="font-semibold text-lg mb-1">
                Trusted Partnerships
              </h3>
              <p className="text-gray-600 text-sm">
                Strong network with industry-leading partners.
              </p>
            </div>

            {/* Commercial Spaces */}
            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-lg shadow hover:shadow-lg transition">
              <FaKey className="text-4xl text-yellow-500 mb-3" />
              <h3 className="font-semibold text-lg mb-1">Commercial Spaces</h3>
              <p className="text-gray-600 text-sm">
                Modern, functional workspaces for growing businesses.
              </p>
            </div>

            {/* Happy Customers */}
            <div className="flex flex-col items-center text-center bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaSmile className="text-4xl text-white mb-3" />
              <h3 className="font-semibold text-lg text-white mb-1">
                Happy Customers
              </h3>
              <span className="text-3xl font-bold text-white">
                {inView ? <CountUp start={0} end={500} duration={3} /> : 0}+
              </span>
              <p className="text-blue-100 text-sm">
                Proudly serving satisfied families & businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
