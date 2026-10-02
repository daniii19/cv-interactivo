import { Globe } from "lucide-react";
import { softSkills } from "../data/softSkills";

export default function PerfilProfesional({ language }) {
  const es = language === "es";

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {es ? "Perfil Profesional" : "Professional Profile"}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {es
                ? "Desarrollador Full Stack con perfil en IA y datos"
                : "Full Stack Developer with an AI and data profile"}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {es
                ? "Técnico Superior en Desarrollo de Aplicaciones Web con especialización en Inteligencia Artificial y Big Data. Responsable, con buena capacidad de trabajo en equipo y ganas de afrontar nuevos retos."
                : "Higher Technician in Web Application Development with a specialization in Artificial Intelligence and Big Data. Responsible, a good team player and eager to take on new challenges."}
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {es
                ? "Experiencia full stack con React, Java y Spring Boot, adquirida en las prácticas en Tragsatec y en proyectos personales. Con Python y Scikit-learn he desarrollado un modelo de predicción de precios desplegado con Streamlit, y me estoy iniciando en la automatización de procesos con n8n."
                : "Full stack experience with React, Java and Spring Boot, gained during the internship at Tragsatec and in personal projects. With Python and Scikit-learn I built a price prediction model deployed with Streamlit, and I am getting started with process automation using n8n."}
            </p>
          </div>

          {/* Información adicional */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Información adicional */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {es ? "Información Adicional" : "Additional Information"}
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 shrink-0 bg-blue-600 rounded-full"></span>
                  {es
                    ? "Carné de conducir (B, A2) y vehículo propio"
                    : "Driver’s license (B, A2) and own vehicle"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 shrink-0 bg-blue-600 rounded-full"></span>
                  {es
                    ? "Disponibilidad horaria amplia"
                    : "Flexible schedule availability"}
                </li>
              </ul>
            </div>

            {/* Idiomas */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                {es ? "Idiomas" : "Languages"}
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <Globe size={16} className="shrink-0 text-blue-600" aria-hidden="true" />
                  {es ? "Español: Nativo" : "Spanish: Native"}
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="shrink-0 text-blue-600" aria-hidden="true" />
                  {es ? "Inglés: Intermedio" : "English: Intermediate"}
                </li>
              </ul>
            </div>

            {/* Soft Skills (ocupa las dos columnas desde sm) */}
            <div className="sm:col-span-2 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                  >
                    {es ? skill.es : skill.en}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



// import { Globe } from "lucide-react";
// import { softSkills } from "../data/softSkills";

// export default function PerfilProfesional({ language }) {
//   return (
//     <section
//       id="about"
//       className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             {language === "es" ? "Perfil Profesional" : "Professional Profile"}
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//         </div>

//         {/* Contenido principal */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
//               {language === "es"
//                 ? "Desarrollador Full Stack con perfil en IA y datos"
//                 : "Full Stack Developer with an AI and data profile"}
//             </h3>

//             <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
//               {language === "es"
//                 ? "Técnico Superior en Desarrollo de Aplicaciones Web con especialización en Inteligencia Artificial y Big Data. Responsable, con buena capacidad de trabajo en equipo y ganas de afrontar nuevos retos."
//                 : "Higher Technician in Web Application Development with a specialization in Artificial Intelligence and Big Data. Responsible, a good team player and eager to take on new challenges."}
//             </p>

//             <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
//               {language === "es"
//                 ? "Experiencia full stack con React, Java y Spring Boot, adquirida en las prácticas en Tragsatec y en proyectos personales. Con Python y Scikit-learn he desarrollado un modelo de predicción de precios desplegado con Streamlit, y me estoy iniciando en la automatización de procesos con n8n."
//                 : "Full stack experience with React, Java and Spring Boot, gained during the internship at Tragsatec and in personal projects. With Python and Scikit-learn I built a price prediction model deployed with Streamlit, and I am getting started with process automation using n8n."}
//             </p>

//             <div className="flex flex-wrap gap-3">
//               {softSkills.map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
//               <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
//               <div className="text-gray-600 dark:text-gray-300">
//                 {language === "es" ? "Años de Formación" : "Years of Training"}
//               </div>
//             </div>

//             <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
//               <div className="text-3xl font-bold text-green-600 mb-2">7+</div>
//               <div className="text-gray-600 dark:text-gray-300">
//                 {language === "es" ? "Certificaciones" : "Certifications"}
//               </div>
//             </div>

//             <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
//               <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
//               <div className="text-gray-600 dark:text-gray-300">
//                 {language === "es" ? "Tecnologías" : "Technologies"}
//               </div>
//             </div>

//             <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
//               <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
//               <div className="text-gray-600 dark:text-gray-300">
//                 {language === "es" ? "Dedicación" : "Dedication"}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Información adicional */}
//         <div className="mt-16 grid md:grid-cols-3 gap-8">
//           {/* Columna 1: Información adicional */}
//           <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//             <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//               {language === "es"
//                 ? "Información Adicional"
//                 : "Additional Information"}
//             </h4>
//             <ul className="space-y-2 text-gray-600 dark:text-gray-300">
//               <li className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//                 {language === "es"
//                   ? "Carné de conducir (B, A2)"
//                   : "Driver’s license (B, A2)"}
//               </li>
//               <li className="flex items-center gap-2">
//                 <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
//                 {language === "es"
//                   ? "Disponibilidad horaria amplia"
//                   : "Flexible schedule availability"}
//               </li>
//             </ul>
//           </div>

//           {/* Columna 2: Idiomas */}
//           <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//             <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//               {language === "es" ? "Idiomas" : "Languages"}
//             </h4>
//             <ul className="space-y-2 text-gray-600 dark:text-gray-300">
//               <li className="flex items-center gap-2">
//                 <Globe size={16} className="text-blue-600" />
//                 {language === "es" ? "Español: Nativo" : "Spanish: Native"}
//               </li>
//               <li className="flex items-center gap-2">
//                 <Globe size={16} className="text-blue-600" />
//                 {language === "es" ? "Inglés: Intermedio" : "English: Intermediate"}
//               </li>
//             </ul>
//           </div>

//           {/* Columna 3: Soft Skills */}
//           <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//             <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
//               Soft Skills
//             </h4>
//             <div className="flex flex-wrap gap-2">
//               {softSkills.slice(0, 3).map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
