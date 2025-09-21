"use client";

import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../utils/translations";
import { CONTACT_INFO, SOCIAL_LINK } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

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
    inputBg: isDarkMode
      ? "bg-gray-800 text-white border-gray-700"
      : "bg-gray-100 text-gray-900 border-gray-300",
    inputError: "border-red-500 focus:ring-red-500",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        currentLanguage === "id" ? "Nama harus diisi" : "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        currentLanguage === "id" ? "Email harus diisi" : "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email =
        currentLanguage === "id"
          ? "Format email tidak valid"
          : "Email format is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        currentLanguage === "id" ? "Pesan harus diisi" : "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Format message for WhatsApp
      const whatsappMessage = `Halo! Saya ${formData.name}%0A%0AEmail: ${formData.email}%0A%0APesan: ${formData.message}`;
      const whatsappUrl = `https://wa.me/6285759328890?text=${whatsappMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

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
          {t.getInTouchTitle.split(" ").map((word, index) => (
            <span key={index} className={index === 2 ? "text-blue-500" : ""}>
              {word}
              {index < 2 ? " " : ""}
            </span>
          ))}
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
          <div
            className={`p-8 rounded-xl shadow-lg ${themeClasses.cardBg} ${themeClasses.border} border`}
          >
            <h3 className="text-2xl font-semibold mb-6">{t.contactInfo}</h3>
            <div className="space-y-3">
              {CONTACT_INFO.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <item.icon
                    size={24}
                    className={`${themeClasses.iconColor} mr-4 flex-shrink-0`}
                  />
                  <div>
                    <p
                      className={`text-sm font-medium ${themeClasses.textSecondary}`}
                    >
                      {t[item.label.toLowerCase() + "Label"]}
                    </p>
                    <p className="text-lg font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mt-8 mb-4">
              {t.connectWithMe}
            </h3>
            <p className={`text-sm ${themeClasses.textSecondary} mb-3`}>
              {t.connectDesc}
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

          {/* Contact Form */}
          <div
            className={`p-8 rounded-xl shadow-lg ${themeClasses.cardBg} ${themeClasses.border} border`}
          >
            <h3 className="text-2xl font-semibold mb-6">{t.sendMessage}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${themeClasses.textSecondary}`}
                >
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    errors.name
                      ? themeClasses.inputError
                      : `${themeClasses.inputBg} border-gray-300`
                  }`}
                  placeholder={t.yourName}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${themeClasses.textSecondary}`}
                >
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    errors.email
                      ? themeClasses.inputError
                      : `${themeClasses.inputBg} border-gray-300`
                  }`}
                  placeholder={t.yourEmail}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${themeClasses.textSecondary}`}
                >
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                    errors.message
                      ? themeClasses.inputError
                      : `${themeClasses.inputBg} border-gray-300`
                  }`}
                  placeholder={t.yourMessage}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                {t.sendMessageBtn}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
