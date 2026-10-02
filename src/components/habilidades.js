import { habilidades } from "../data/habilidades";

export default function Habilidades({ language }) {
  const es = language === "es";

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Habilidades técnicas agrupadas por categoría */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {es ? "Habilidades Técnicas" : "Technical Skills"}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habilidades.map((group, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-600 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {es ? group.category : group.category_en || group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(es ? group.items : group.items_en || group.items).map(
                  (item, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
