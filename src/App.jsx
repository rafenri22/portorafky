"use client";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillSection from "./components/Sections/SkillSection";
import WorkSection from "./components/Sections/WorkSection";
import AboutSection from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const AppContent = () => {
  const { isDarkMode } = useTheme();
  const themeBgClass = isDarkMode ? "bg-gray-950" : "bg-gray-50";
  const themeTextColorClass = isDarkMode ? "text-white" : "text-gray-900";

  return (
    <div
      className={`min-h-screen ${themeBgClass} ${themeTextColorClass} transition-colors duration-500`}
    >
      <Navbar />
      <HeroSection />
      <SkillSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
