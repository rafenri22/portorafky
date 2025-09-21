"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";
import { PROJECT } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import { Github, ExternalLink } from "lucide-react";

const WorkSection = () => {
  const { isDarkMode } = useTheme();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const themeClasses = {
    bg: isDarkMode ? "bg-gray-900" : "bg-gray-100",
    cardBg: isDarkMode ? "bg-gray-950" : "bg-white",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-400" : "text-gray-600",
    border: isDarkMode ? "border-gray-800" : "border-gray-200",
    tagBg: isDarkMode ? "bg-blue-900/30" : "bg-blue-100",
    tagText: isDarkMode ? "text-blue-300" : "text-blue-700",
    iconColor: isDarkMode
      ? "text-gray-400 hover:text-white"
      : "text-gray-600 hover:text-gray-900",
  };

  // Get translated projects
  const getTranslatedProjects = () => {
    return PROJECT.map((project) => ({
      ...project,
      title:
        currentLanguage === "id"
          ? project.id === 1
            ? t.inventoryTitle
            : project.id === 2
            ? t.hatTitle
            : project.id === 3
            ? t.busTitle
            : project.id === 4
            ? t.companyTitle
            : project.id === 5
            ? t.portfolioTitle
            : t.stockTitle
          : project.title,
      description:
        currentLanguage === "id"
          ? project.id === 1
            ? t.inventoryDesc
            : project.id === 2
            ? t.hatDesc
            : project.id === 3
            ? t.busDesc
            : project.id === 4
            ? t.companyDesc
            : project.id === 5
            ? t.portfolioDesc
            : t.stockDesc
          : project.description,
    }));
  };

  return (
    <section
      id="work"
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
          {t.myWork.split(" ")[0]}{" "}
          <span className="text-blue-500">{t.myWork.split(" ")[1]}</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {getTranslatedProjects().map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`p-6 rounded-xl shadow-lg ${themeClasses.cardBg} ${themeClasses.border} border flex flex-col`}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p
                className={`text-sm ${themeClasses.textSecondary} mb-4 flex-grow`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${themeClasses.tagBg} ${themeClasses.tagText}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-4 mt-auto">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-full transition-colors ${themeClasses.iconColor}`}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={20} />
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`p-2 rounded-full transition-colors ${themeClasses.iconColor}`}
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
