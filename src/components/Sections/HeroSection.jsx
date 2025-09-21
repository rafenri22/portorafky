"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FiGithub, FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";
import PROFILE_PIC from "../../assets/images/ProfilePic.png";
import { containerVariants, itemVariants } from "../../utils/helper";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  // Theme classes
  const themeClasses = {
    bg: isDarkMode ? "bg-gray-950" : "bg-gray-50",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-400" : "text-gray-600",
    textTertiary: isDarkMode ? "text-gray-500" : "text-gray-600",
    border: isDarkMode ? "border-gray-800" : "border-gray-300",
    borderSecondary: isDarkMode ? "border-gray-700" : "border-gray-400",
    socialIcon: isDarkMode
      ? "text-gray-400 hover:text-white hover:bg-gray-800"
      : "text-gray-600 hover:text-gray-900 hover:bg-gray-200",
    accentBlob: isDarkMode ? "bg-blue-500" : "bg-blue-400",
    accentBlobSecondary: isDarkMode ? "bg-purple-500" : "bg-purple-400",
    buttonSecondary: isDarkMode
      ? "border-gray-700 hover:border-gray-600 text-gray-300"
      : "border-gray-400 hover:border-gray-400 text-gray-700",
    techText: isDarkMode ? "text-gray-600" : "text-gray-500",
    divider: isDarkMode ? "text-gray-700" : "text-gray-400",
    scrollIndicator: isDarkMode ? "text-gray-600" : "text-gray-400",
    buttonHover: isDarkMode ? "hover:bg-blue-600" : "hover:bg-blue-500",
  };

  return (
    <section
      id="home"
      style={{ y: heroY }}
      className={`min-h-screen flex items-center justify-center relative px-4 pt-25 transition-all duration-500 ${themeClasses.bg} ${themeClasses.text}`}
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-10 ${themeClasses.accentBlob}`}
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${themeClasses.accentBlobSecondary}`}
        />
      </div>
      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            {/* Profile Image - Mobile */}
            <motion.div
              variants={imageVariants}
              className="mb-8 flex justify-center items-center"
            >
              <div className="w-32 h-32 flex justify-center items-center relative transform">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`w-full h-full rounded-2xl overflow-hidden border-4 ${themeClasses.border} shadow-2xl`}
                >
                  <img
                    src={PROFILE_PIC || "/placeholder.svg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Decorative Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                />
              </div>
            </motion.div>
            {/* Content Mobile */}
            <motion.div
              variants={textVariants}
              className={`text-sm uppercase tracking-widest ${themeClasses.textTertiary} mb-4`}
            >
              {t.fullStackDeveloper}
              {/* Tech Stack */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap pt-2"
              >
                <span className={themeClasses.techText}>React</span>
                <span className={themeClasses.divider}>•</span>
                <span className={themeClasses.techText}>Flutter</span>
                <span className={themeClasses.divider}>•</span>
                <span className={themeClasses.techText}>Node.js</span>
              </motion.div>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl font-light mb-6 leading-tight"
            >
              <span className={themeClasses.text}>{t.buildingDigital} </span>
              <span className="text-blue-500 font-medium ml-2">
                {t.experiences}
              </span>
              <br />
              <span className={themeClasses.text}>{t.thatMatter}</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className={`text-base md:text-lg ${themeClasses.textSecondary} mb-8 max-w-xl mx-auto font-light leading-relaxed`}
            >
              {t.heroDescription}
            </motion.p>
            {/* CTA Buttons - Mobile */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5"
            >
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("work")}
                className={`bg-blue-500 ${themeClasses.buttonHover} text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
              >
                {t.curriculumVitae}
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")}
                className={`border ${themeClasses.buttonSecondary} px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
              >
                {t.getInTouch}
              </motion.button>
            </motion.div>
            {/* Social Links - Mobile */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6 mb-5"
            >
              {[
                {
                  icon: FiGithub,
                  href: "https://github.com/rafenri22",
                  label: "GitHub",
                },
                {
                  icon: FiInstagram,
                  href: "https://www.instagram.com/giffari.ferdian",
                  label: "Instagram",
                },
                {
                  icon: FiFacebook,
                  href: "https://web.facebook.com/profile.php?id=100074854245924",
                  label: "Facebook",
                },
                {
                  icon: FiLinkedin,
                  href: "https://www.linkedin.com/in/rafkyferdianalgiffari",
                  label: "LinkedIn",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`p-3 rounded-full transition-colors ${themeClasses.socialIcon}`}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${themeClasses.textTertiary} mb-4`}
              >
                {t.fullStackDeveloper}
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-6xl font-light mb-5 leading-tight"
              >
                <span className={themeClasses.text}>{t.buildingDigital} </span>
                <span className="text-blue-500 font-medium ml-3">
                  {t.experiences}
                </span>
                <br />
                <span className={themeClasses.text}>{t.thatMatter}</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className={`text-xl ${themeClasses.textSecondary} mb-5 max-w-2xl font-light leading-relaxed`}
              >
                {t.heroDescriptionLong}
              </motion.p>
              {/* CTA Buttons - Desktop */}
              <motion.div variants={itemVariants} className="flex gap-6 mb-5">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className={`bg-blue-500 ${themeClasses.buttonHover} text-white px-10 py-4 rounded-full text-base uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  {t.curriculumVitae}
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${themeClasses.buttonSecondary} px-10 py-4 rounded-full text-base uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  {t.getInTouch}
                </motion.button>
              </motion.div>
              {/* Social Links - Desktop */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mb-12"
              >
                {[
                  {
                    icon: FiGithub,
                    href: "https://github.com/rafenri22",
                    label: "GitHub",
                  },
                  {
                    icon: FiInstagram,
                    href: "https://www.instagram.com/giffari.ferdian",
                    label: "Instagram",
                  },
                  {
                    icon: FiFacebook,
                    href: "https://web.facebook.com/profile.php?id=100074854245924",
                    label: "Facebook",
                  },
                  {
                    icon: FiLinkedin,
                    href: "https://www.linkedin.com/in/rafkyferdianalgiffari",
                    label: "LinkedIn",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`p-3 rounded-full transition-colors flex items-center gap-2 ${themeClasses.socialIcon}`}
                  >
                    <social.icon size={24} />
                    <span className="text-sm font-light">{social.label}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
            {/* Right Column - Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center items-center relative">
              {/* Tech Stack - Desktop - Di atas foto profil */}
              <motion.div
                variants={itemVariants}
                className="absolute -top-16 left-0 right-0 flex justify-center items-center space-x-8 text-sm uppercase tracking-widest"
              >
                <span className={themeClasses.techText}>React</span>
                <span className={themeClasses.divider}>•</span>
                <span className={themeClasses.techText}>Flutter</span>
                <span className={themeClasses.divider}>•</span>
                <span className={themeClasses.techText}>Node.js</span>
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="flex justify-center items-center"
              >
                <div className="w-full max-w-lg flex justify-center items-center relative transform">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-100 h-100 rounded-[2rem] overflow-hidden border-4 ${themeClasses.border} shadow-2xl`}
                  >
                    <img
                      src={PROFILE_PIC || "/placeholder.svg"}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Decorative Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute -inset-4 rounded-[2.5rem] border border-blue-500/20"
                  />
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-6 -left-6 bg-blue-500 text-white text-xs font-medium py-2 px-4 rounded-full shadow-lg"
                  >
                    <span>2+ {t.yearsExperience}</span>
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute -top-6 -right-6 bg-blue-500 text-white text-xs font-medium py-2 px-4 rounded-full shadow-lg"
                  >
                    <span>10+ {t.projects}</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown size={20} className={themeClasses.scrollIndicator} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
