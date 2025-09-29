import { Award } from "lucide-react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cursos y Certificaciones
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-600 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <Award className="text-blue-600" size={20} />
                <span className="text-gray-700 dark:text-gray-200 font-medium">
                  {cert}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}