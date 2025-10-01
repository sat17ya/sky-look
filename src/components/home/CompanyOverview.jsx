import { FaHome, FaSmile } from "react-icons/fa";
import { LuLandPlot } from "react-icons/lu";
import { IoDocument } from "react-icons/io5";
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
                Invest Smart, Build Strong
              </p>
            </div>
            <p className="text-gray-200 max-w-lg mb-6 leading-relaxed">
              At <span className="text-green-400">Skylook</span>, we specialize in providing secure and verified plots
              that help you take the first step towards your dream home or smart
              investment. With a commitment to transparency, trust, and
              hassle-free processes, we ensure every plot we deliver becomes a
              foundation for growth and happiness. Our dedication has made us a
              preferred choice for families and investors who seek not just
              land, but a future full of possibilities.
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
              <LuLandPlot className="text-4xl text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-1">
                Residential Plots
              </h3>
              <p className="text-gray-600 text-sm">
                Verified plots with clear titles, ready for your dream home.
              </p>
            </div>

            {/* Trusted Partnerships */}
            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-lg shadow hover:shadow-lg transition">
              <IoDocument className="text-4xl text-green-600 mb-3" />
              <h3 className="font-semibold text-lg mb-1">
                Trusted Documentation
              </h3>
              <p className="text-gray-600 text-sm">
                Transparent process with verified papers and quick Patta handover.
              </p>
            </div>

            {/* Commercial Spaces */}
            <div className="flex flex-col items-center text-center bg-white/90 p-6 rounded-lg shadow hover:shadow-lg transition">
              <FaHome className="text-4xl text-yellow-500 mb-3" />
              <h3 className="font-semibold text-lg mb-1">Ready-to-Build</h3>
              <p className="text-gray-600 text-sm">
                Plots with boundary, road, and electrification for immediate construction.
              </p>
            </div>

            {/* Happy Customers */}
            <div className="flex flex-col items-center text-center bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <FaSmile className="text-4xl text-white mb-3" />
              <h3 className="font-semibold text-lg text-white mb-1">
                Happy Customers
              </h3>
              <span className="text-3xl font-bold text-white">
                {inView ? <CountUp start={0} end={100} duration={3} /> : 0}+
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
