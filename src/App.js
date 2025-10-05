import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/aboutSection';
import Experience from "./components/experiences";
import Certifications from './components/certifications';
import Education from './components/education';
import Projects from './components/projects';
import ContactSection from './components/ContactSection';
import Switch from './components/Switch';
import Idiom from './components/Idiom';
// import ContactForm from "./components/ContactForm";
// import Skills from './components/skills';


function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Alternar entre modo claro y modo oscuro
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Traducciones
  const navLabels = {
    es: {
      about: 'Perfil',
      experience: 'Experiencia',
      skills: 'Certificaciones',
      education: 'Formación',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    en: {
      about: 'Profile',
      experience: 'Experience',
      skills: 'Certifications',
      education: 'Education',
      projects: 'Projects',
      contact: 'Contact',
    },
  };


  return (
   <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navegacion */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              Daniel Gayol Rodríguez
            </div>

            {/* Botón de menu desplegable */}
            <div className="md:hidden flex justify-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              {['about', 'experience', 'skills', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-600 dark:text-blue-400 font-medium' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {navLabels[language][section]}
                </button>
              ))}
              <Switch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              <Idiom language={language} setLanguage={setLanguage} />
            </div>
          </div>
        </div>

        {/* Menu desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {['about', 'experience', 'skills', 'education', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left capitalize py-2 px-4 rounded transition-colors duration-200 ${
                  activeSection === section 
                    ? 'text-blue-600 dark:text-blue-400 font-medium' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {navLabels[language][section]}
              </button>
            ))}
            <div className="flex items-center justify-between px-4 pt-3 border-t border-gray-200 dark:border-gray-700">
              <Switch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
              <Idiom language={language} setLanguage={setLanguage} />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <HeroSection scrollToSection={scrollToSection} language={language} />

      {/* About Section */}
      <AboutSection language={language} />

      {/* Experience Section */}
      <Experience language={language} />

      {/* Certifications */}
      <Certifications language={language} />

      {/* Education Section */}
      <Education language={language} />

      {/* Projects Section */}
      <Projects language={language} />

      {/* Contact Section */}
      <ContactSection language={language} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © Daniel Gayol Rodríguez - CV Interactivo
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;