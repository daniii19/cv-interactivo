import { Car, BarChart3, ExternalLink } from "lucide-react";
import logo from "../assets/img/logo.png";
import { proyectos } from "../data/proyectos";

const icons = { car: Car, chart: BarChart3 };

export default function Proyectos({ language }) {
  const es = language === "es";

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {es ? "Proyectos Destacados" : "Featured Projects"}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Lista de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((project, index) => {
            const Icon = icons[project.icon];
            const title = es ? project.title : project.title_en;

            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-blue-500/25 dark:hover:ring-1 dark:hover:ring-blue-500/40 transition-shadow duration-300 group"
              >
                {/* Cabecera: logo o icono */}
                <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.image === "quai" ? (
                      <img src={logo} alt="Logo Quai" className="w-20" />
                    ) : (
                      Icon && <Icon size={56} className="text-white" aria-hidden="true" />
                    )}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {es ? project.description : project.description_en}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Botón "Ver proyecto": solo aparece si el proyecto tiene enlace */}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-200"
                    >
                      {es ? "Ver proyecto" : "View project"}
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
