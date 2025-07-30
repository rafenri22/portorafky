"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useTheme } from "../../context/ThemeContext"
import { CONTACT_INFO, SOCIAL_LINK } from "../../utils/data"
import { containerVariants, itemVariants } from "../../utils/helper"

const ContactSection = () => {
  const { isDarkMode } = useTheme()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const themeClasses = {
    bg: isDarkMode ? "bg-gray-900" : "bg-gray-100",
    cardBg: isDarkMode ? "bg-gray-950" : "bg-white",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-400" : "text-gray-600",
    border: isDarkMode ? "border-gray-800" : "border-gray-200",
    iconColor: isDarkMode ? "text-blue-400" : "text-blue-600",
    socialIcon: isDarkMode
      ? "text-gray-400 hover:text-white hover:bg-gray-800"
      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200",
  }

  return (
    <section
      id="contact"
      className={`py-10 md:py-16 px-4 transition-all duration-500 ${themeClasses.bg} ${themeClasses.text}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Get in <span className="text-blue-500">Touch</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className={`p-8 rounded-xl shadow-lg ${themeClasses.cardBg} ${themeClasses.border} border`}>
            <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-3">
              {" "}
              {/* Reduced space-y here */}
              {CONTACT_INFO.map((item, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-center">
                  <item.icon size={24} className={`${themeClasses.iconColor} mr-4 flex-shrink-0`} />
                  <div>
                    <p className={`text-sm font-medium ${themeClasses.textSecondary}`}>{item.label}</p>
                    <p className="text-lg font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mt-8 mb-4">Connect with Me</h3>{" "}
            {/* mt-8 (was mt-10) */}
            <p className={`text-sm ${themeClasses.textSecondary} mb-3`}>
              {" "}
              {/* mb-3 (was mb-4) */}
              Feel free to reach out through my social channels or connect with me online.
            </p>
            <div className="flex space-x-6">
              {SOCIAL_LINK.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`p-3 rounded-full transition-colors ${themeClasses.socialIcon}`}
                  aria-label={`Link to ${social.name}`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form (Placeholder) */}
          <div className={`p-8 rounded-xl shadow-lg ${themeClasses.cardBg} ${themeClasses.border} border`}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${themeClasses.textSecondary}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full p-3 rounded-md ${isDarkMode ? "bg-gray-800 text-white border-gray-700" : "bg-gray-100 text-gray-900 border-gray-300"} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your Name"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${themeClasses.textSecondary}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-3 rounded-md ${isDarkMode ? "bg-gray-800 text-white border-gray-700" : "bg-gray-100 text-gray-900 border-gray-300"} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your Email"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${themeClasses.textSecondary}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4\" 
                  className={`w-full p-3 rounded-md ${isDarkMode ? "bg-gray-800 text-white border-gray-700" : "bg-gray-100 text-gray-900 border-gray-300"} border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Your Message"
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
