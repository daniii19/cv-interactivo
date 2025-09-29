import { Globe } from "lucide-react";
import { softSkills } from "../data/softSkills";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perfil Profesional
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Desarrollador Web Apasionado
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Desarrollador de aplicaciones web con formación en frontend y
              backend, apasionado por la tecnología y el aprendizaje continuo.
              Capaz de trabajar en equipo, con buena gestión del tiempo.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Experiencia en el desarrollo de proyectos web completos, desde el
              diseño hasta la implementación. Conocimientos sólidos en
              tecnologías modernas y metodologías de desarrollo ágil.
            </p>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-300">Años de Formación</div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300">Certificaciones</div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600 dark:text-gray-300">Tecnologías</div>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-300">Dedicación</div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Información Adicional
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Carnet de conducir (B, A2)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Disponibilidad horaria amplia
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Idiomas</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-blue-600" />
                Español: Nativo
              </li>
              <li className="flex items-center gap-2">
                <Globe size={16} className="text-blue-600" />
                Inglés: Básico
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {softSkills.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}