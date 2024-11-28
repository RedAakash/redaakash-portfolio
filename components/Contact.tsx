"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-black text-white relative"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-6xl font-extrabold">
            <span className="relative text-white-400">
              Contact Us
              <span className="absolute left-0 bottom-1 w-full h-3 bg-green-500 opacity-50 rounded-lg -z-10"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            Let’s build something amazing together. Get in touch!
          </p>
        </motion.div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="p-8 rounded-xl shadow-2xl bg-black bg-opacity-40 backdrop-blur-lg border border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <form action="#" method="POST" className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  placeholder="Your email address"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-medium text-black bg-gradient-to-r from-green-500 via-green-400 to-green-300 rounded-lg shadow-md transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="p-8 rounded-xl shadow-2xl bg-black bg-opacity-40 backdrop-blur-lg border border-gray-800 flex flex-col justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Contact Details */}
              <div>
                <h3 className="text-3xl font-bold text-green-400 mb-3">
                  Get in Touch
                </h3>
                <p className="text-lg text-gray-300">
                  Feel free to reach out via email or phone for any queries or
                  collaborations.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <span className="text-green-400 text-2xl">📧</span>
                  <a
                    href="mailto:contact@aakashsharma.com"
                    className="text-lg text-gray-300 hover:underline"
                  >
                    aakash@oneggy.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <span className="text-green-400 text-2xl">📞</span>
                  <a
                    href="tel:+123456789"
                    className="text-lg text-gray-300 hover:underline"
                  >
                    +91 9811 133 005
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-3">
                  <span className="text-green-400 text-2xl">📍</span>
                  <p className="text-lg text-gray-300">
                    M Block Shakurpur New Delhi 110034
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
