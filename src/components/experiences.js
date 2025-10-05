import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "../data/experiences";

export default function Experience({ language }) {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "es" ? "Experiencia Laboral" : "Work Experience"}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Línea de tiempo */}
        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>

              <div
                className={`ml-16 lg:ml-0 lg:w-1/2 ${
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <Calendar size={16} />
                    {language === "es"
                      ? exp.period
                      : exp.period_en || exp.period}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {language === "es" ? exp.title : exp.title_en || exp.title}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-3">
                    {language === "es"
                      ? exp.company
                      : exp.company_en || exp.company}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {language === "es"
                      ? exp.description
                      : exp.description_en || exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}