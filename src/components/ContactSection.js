import { Mail, Phone, MapPin, Linkedin as LinkedIn, Github } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection({ language }) {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {language === "es" ? "Contáctame" : "Contact Me"}
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            {language === "es"
              ? "¿Quieres saber más de mí? Siempre estoy dispuesto a recibir nuevas ofertas de trabajo y oportunidades."
              : "Want to know more about me? I’m always open to new job offers and opportunities."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">
              {language === "es"
                ? "Información de Contacto"
                : "Contact Information"}
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-blue-200">
                    {language === "es" ? "Email" : "Email"}
                  </p>
                  <p className="font-medium">danielgayolro@gmail.com</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-blue-200">
                    {language === "es" ? "Teléfono" : "Phone"}
                  </p>
                  <p className="font-medium">(+34) 617-748-386</p>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-blue-200">
                    {language === "es" ? "Ubicación" : "Location"}
                  </p>
                  <p className="font-medium">
                    {language === "es"
                      ? "Gijón, Asturias, España"
                      : "Gijón, Asturias, Spain"}
                  </p>
                  <p className="font-medium">
                    {language === "es"
                      ? "Navia, Asturias, España"
                      : "Navia, Asturias, Spain"}
                  </p>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://linkedin.com/in/daniel-gayol-rodríguez-4882a2347"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200"
              >
                <LinkedIn size={24} />
              </a>
              <a
                href="https://github.com/daniii19"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* Formulario */}
          <ContactForm language={language} />
        </div>
      </div>
    </section>
  );
}


// import { Mail, Phone, MapPin, Linkedin as LinkedIn, Github } from "lucide-react";
// import ContactForm from "./ContactForm";

// export default function ContactSection() {
//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contáctame</h2>
//           <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
//           <p className="text-xl text-blue-200 max-w-2xl mx-auto">
//             ¿Quieres saber más de mí? Siempre estoy dispuesto a recibir nuevas
//             ofertas de trabajo y oportunidades.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Información de contacto */}
//           <div>
//             <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <div className="bg-white/10 p-3 rounded-lg">
//                   <Mail className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <p className="text-blue-200">Email</p>
//                   <p className="font-medium">danielgayolro@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="bg-white/10 p-3 rounded-lg">
//                   <Phone className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <p className="text-blue-200">Teléfono</p>
//                   <p className="font-medium">(+34) 617-748-386</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="bg-white/10 p-3 rounded-lg">
//                   <MapPin className="text-white" size={24} />
//                 </div>
//                 <div>
//                   <p className="text-blue-200">Ubicación</p>
//                   <p className="font-medium">Gijón, Asturias, España</p>
//                   <p className="font-medium">Navia, Asturias, España</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex gap-4 mt-8">
//               <a
//                 href="https://linkedin.com/in/daniel-gayol-rodríguez-4882a2347"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200"
//               >
//                 <LinkedIn size={24} />
//               </a>
//               <a
//                 href="https://github.com/daniii19"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200"
//               >
//                 <Github size={24} />
//               </a>
//             </div>
//           </div>

//           {/* Formulario */}
//           <ContactForm />
//         </div>
//       </div>
//     </section>
//   );
// }