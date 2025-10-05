import { GraduationCap } from "lucide-react";
import { education } from "../data/education";
import clsx from "clsx";

export default function Education({ language }) {
  return (
    <section
      id="education"
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === "es" ? "Formación Académica" : "Academic Education"}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Lista de estudios */}
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start gap-4">
                <div
                  className={clsx("p-3 rounded-lg", {
                    "bg-blue-100 dark:bg-blue-900": item.color === "blue",
                    "bg-green-100 dark:bg-green-900": item.color === "green",
                    "bg-purple-100 dark:bg-purple-900": item.color === "purple",
                    "bg-orange-100 dark:bg-orange-900": item.color === "orange",
                    "bg-yellow-100 dark:bg-yellow-900": item.color === "yellow",
                    "bg-red-100 dark:bg-red-900": item.color === "red",
                    "bg-pink-100 dark:bg-pink-900": item.color === "pink",
                  })}
                >
                  <GraduationCap
                    size={24}
                    className={clsx({
                      "text-blue-600": item.color === "blue",
                      "text-green-600": item.color === "green",
                      "text-purple-600": item.color === "purple",
                      "text-orange-600": item.color === "orange",
                      "text-yellow-600": item.color === "yellow",
                      "text-red-600": item.color === "red",
                      "text-pink-600": item.color === "pink",
                    })}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {language === "es" ? item.title : item.title_en}
                  </h3>
                  <p
                    className={clsx("font-medium mb-2", {
                      "text-blue-600 dark:text-blue-400": item.color === "blue",
                      "text-green-600 dark:text-green-400": item.color === "green",
                      "text-purple-600 dark:text-purple-400": item.color === "purple",
                      "text-orange-600 dark:text-orange-400": item.color === "orange",
                      "text-yellow-600 dark:text-yellow-400": item.color === "yellow",
                      "text-red-600 dark:text-red-400": item.color === "red",
                      "text-pink-600 dark:text-pink-400": item.color === "pink",
                    })}
                  >
                    {language === "es" ? item.institution : item.institution_en}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {item.years}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {language === "es" ? item.description : item.description_en}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}