"use client"

import { motion } from "framer-motion"
import { useTheme } from "../context/ThemeContext"
import { SOCIAL_LINK } from "../utils/data"
import { Code2 } from "lucide-react"

const Footer = () => {
  const { isDarkMode } = useTheme()

  const themeClasses = {
    bg: isDarkMode ? "bg-gray-950" : "bg-gray-50",
    text: isDarkMode ? "text-gray-400" : "text-gray-600",
    linkHover: isDarkMode ? "hover:text-white" : "hover:text-gray-900",
    iconHover: isDarkMode ? "hover:text-white hover:bg-gray-800" : "hover:text-gray-900 hover:bg-gray-200",
    border: isDarkMode ? "border-gray-800" : "border-gray-200",
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`py-6 px-4 border-t ${themeClasses.border} ${themeClasses.bg} text-center transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 mb-4">
          <Code2 size={24} className="text-blue-500" />{" "}
          <span className={`text-lg ml-1 ${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>
            Rafky Ferdian Algiffari
          </span>
        </motion.div>

        <p className={`text-sm ${themeClasses.text} mb-6`}>
          &copy; {new Date().getFullYear()} Rafky Ferdian Algiffari. All rights reserved.
        </p>

        <div className="flex space-x-6">
          {SOCIAL_LINK.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              className={`p-3 rounded-full transition-colors ${themeClasses.iconHover}`}
              aria-label={`Link to ${social.name}`}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
