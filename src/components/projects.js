import logo from "../assets/img/logo.png";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={logo} alt="Logo QUAI" className="w-20" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

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

                {/* Botón para ver proyecto (si decides activarlo) */}
                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium transition-colors duration-200"
                >
                  Ver Proyecto
                  <ExternalLink size={16} />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// import logo from '../assets/img/logo.png';
// import { projects } from "../data/projects";
// import Card from './Card';

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-white">
//       <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
//             Proyectos Destacados
//           </h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//         </div>

//         <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 justify-items-center">
//           {projects.map((project, index) => (
//             <Card
//               key={index}
//               title={project.title}
//               description={project.description}
//               technologies={project.technologies}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }