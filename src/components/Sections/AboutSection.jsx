"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useTheme } from "../../context/ThemeContext"
import { JOURNEY_STEPS, STATS, PASSION } from "../../utils/data"
import { containerVariants, itemVariants } from "../../utils/helper"

const AboutSection = () => {
  const { isDarkMode } = useTheme()
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const themeClasses = {
    bg: isDarkMode ? "bg-gray-950" : "bg-gray-50",
    cardBg: isDarkMode ? "bg-gray-900" : "bg-white",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-400" : "text-gray-600",
    border: isDarkMode ? "border-gray-800" : "border-gray-200",
    accentText: isDarkMode ? "text-blue-400" : "text-blue-600",
  }

  return (
    <section
      id="about"
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
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Journey/Timeline */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-center lg:text-left">My Journey</h3>
            <div className="relative pl-8 border-l-2 border-gray-700 dark:border-gray-200">
              {JOURNEY_STEPS.map((step, index) => (
                <motion.div key={index} variants={itemVariants} className="mb-8 last:mb-0">
                  <div
                    className="absolute -left-3 mt-1 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon size={16} className={isDarkMode ? "text-white" : "text-blue-500"} />
                  </div>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>{step.year}</p>
                  <h4 className="text-xl font-semibold">{step.title}</h4>
                  <p className={`text-md ${themeClasses.textSecondary}`}>{step.company}</p>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats and Passions */}
          <div>
            <h3 className="text-3xl font-semibold mb-8 text-center lg:text-left">My Stats & Passions</h3>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 rounded-xl shadow-lg ${themeClasses.cardBg} ${themeClasses.border} border text-center`}
                >
                  <h4 className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</h4>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="text-3xl font-semibold mb-8 text-center lg:text-left">What Drives Me</h3>
            <div className="space-y-6">
              {PASSION.map((passion, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-6 rounded-xl shadow-lg ${themeClasses.cardBg} ${themeClasses.border} border flex items-start`}
                >
                  <passion.icon size={28} className={`${themeClasses.accentText} mr-4 flex-shrink-0`} />
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{passion.title}</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>{passion.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
