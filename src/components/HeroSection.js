import { Mail, Phone, MapPin, Linkedin as LinkedIn, Github, ChevronDown } from "lucide-react";
import foto from "../assets/img/Foto DNI.jpg";

export default function HeroSection({ scrollToSection }) {
  return (
    <section className="mt-10 pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Daniel Gayol Rodríguez
              </h1>
              <p className="text-xl lg:text-2xl text-blue-200 mb-6">
                Técnico Superior en Desarrollo de Aplicaciones Web
              </p>
              <p className="text-lg text-blue-100 max-w-2xl">
                Desarrollador de aplicaciones web con formación en frontend y backend, 
                apasionado por la tecnología y el aprendizaje continuo. Capaz de trabajar 
                en equipo, con buena gestión del tiempo.
              </p>
            </div>

            {/* Contacto rápido */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a
                href="mailto:danielgayolro@gmail.com"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Mail size={18} />
                danielgayolro@gmail.com
              </a>
              <a
                href="tel:+34617748386"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <Phone size={18} />
                (+34) 617-748-386
              </a>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <MapPin size={18} />
                Gijón, Asturias
              </div>
            </div>

            {/* Redes */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/daniel-gayol-rodríguez-4882a2347"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <LinkedIn size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/daniii19"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
            <img
              src={foto}
              alt="Foto de Daniel Gayol Rodríguez"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Flecha hacia abajo */}
      <div className="text-center mt-12">
        <ChevronDown
          size={32}
          className="mx-auto animate-bounce cursor-pointer hover:text-blue-200 transition-colors"
          onClick={() => scrollToSection("about")}
        />
      </div>
    </section>
  );
}