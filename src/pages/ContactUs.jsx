import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="w-full px-6 lg:px-20 py-12 bg-white">
      {/* Top Section - Info + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

          {/* Address */}
          <div className="flex items-start gap-4 p-5 shadow-md rounded-lg bg-gray-50">
            <FaMapMarkerAlt className="text-orange-500 text-3xl " />
            <div>
              <h3 className="font-semibold">Our Address</h3>
              <p className="text-gray-600">
                Plot No-421/3677, Sheshadri Nagar, In Front of Indian Oil Petrol Pump,
                Lingipur, Sisupalgarh, Bhubaneswar, Pin-751002, Odisha, India
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 p-5 shadow-md rounded-lg bg-gray-50">
            <FaPhoneAlt className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-semibold">Contact Number</h3>
              <p className="text-gray-600">+91 9439179111</p>
              <p className="text-gray-600">+91 9556795111</p>
              <p className="text-gray-600">+91 9090908111</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-5 shadow-md rounded-lg bg-gray-50">
            <FaEnvelope className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">info@skylook.com</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start gap-4 p-5 shadow-md rounded-lg bg-gray-50">
            <FaClock className="text-orange-500 text-2xl" />
            <div>
              <h3 className="font-semibold">Working Hours</h3>
              <p className="text-gray-600">Mon - Sat: 9:30 am - 7:30 pm</p>
              <p className="text-red-500 font-medium">Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117487.36189979948!2d85.7480396!3d20.2322266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909f83c2e09d7%3A0x7ff8b46b395a7a4a!2sDUDOS%20ENGINEERING%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1690814469942!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Form */}
        <div className="space-y-6">
          <h3 className="uppercase text-orange-500 font-semibold tracking-wider">
            Get in Touch
          </h3>
          <h2 className="text-3xl font-bold mb-6">
            Have An Upcoming Project? <br /> Let’s Talk Now!
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>Select Subjects</option>
                <option>Property Consultation</option>
                <option>Legal Assistance</option>
                <option>Loan Assistance</option>
                <option>Property Management</option>
                <option>Interior Designing</option>
                <option>Other</option>
              </select>
            </div>

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message →
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/jwpm6Xj/engineer.png"
            alt="Contact"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
