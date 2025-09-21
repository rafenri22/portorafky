"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";
import { SKILLS_CATEGORY } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const SkillSection = () => {
  const { isDarkMode } = useTheme();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const themeClasses = {
    bg: isDarkMode ? "bg-gray-950" : "bg-gray-50",
    cardBg: isDarkMode ? "bg-gray-900" : "bg-white",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-400" : "text-gray-600",
    border: isDarkMode ? "border-gray-800" : "border-gray-200",
    iconColor: isDarkMode ? "text-blue-400" : "text-blue-600",
    progressBarBg: isDarkMode ? "bg-gray-700" : "bg-gray-200",
  };

  // Get translated skills category
  const getTranslatedSkills = () => {
    return SKILLS_CATEGORY.map((category, index) => ({
      ...category,
      tittle:
        currentLanguage === "id"
          ? index === 0
            ? t.frontend
            : index === 1
            ? t.backend
            : index === 2
            ? t.database
            : t.devops
          : category.tittle,
      description:
        currentLanguage === "id"
          ? index === 0
            ? t.frontendDesc
            : index === 1
            ? t.backendDesc
            : index === 2
            ? t.databaseDesc
            : t.devopsDesc
          : category.description,
    }));
  };

  return (
    <section
      id="skills"
      className={`py-10 md:py-16 px-4 transition-all duration-500 ${themeClasses.bg} ${themeClasses.text}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12"
        >
          {t.mySkills.split(" ")[0]}{" "}
          <span className="text-blue-500">{t.mySkills.split(" ")[1]}</span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {getTranslatedSkills().map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 rounded-xl shadow-lg ${themeClasses.cardBg} ${themeClasses.border} border`}
            >
              <div className="flex items-center mb-4">
                <category.icon
                  size={32}
                  className={`${themeClasses.iconColor} mr-3`}
                />
                <h3 className="text-xl font-semibold">{category.tittle}</h3>
              </div>
              <p className={`text-sm ${themeClasses.textSecondary} mb-6`}>
                {category.description}
              </p>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span
                        className={`text-xs font-semibold ${themeClasses.textSecondary}`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full ${themeClasses.progressBarBg} rounded-full h-2`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 * skillIndex }}
                        className={`${skill.color} h-2 rounded-full`}
                        style={{ width: isInView ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
