import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email JS para gestionar el formulario de contacto
    emailjs
      .sendForm(
        "service_1v9spya", // ID de tu servicio
        "template_mlhufs1", // ID de tu template
        e.currentTarget,
        "tZfACEO9ICIsyMNqF" // tu public key
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="name"
        placeholder="Tu Nombre"
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-colors duration-200"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Tu Email"
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-colors duration-200"
        required
      />

      <input
        type="text"
        name="subject"
        placeholder="Asunto"
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-colors duration-200"
        required
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Tu Mensaje"
        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-colors duration-200 resize-none"
        required
      ></textarea>

<button
  type="submit"
  className="w-full bg-white text-blue-900 dark:bg-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-200 dark:hover:bg-gray-800 transition-colors duration-200"
>
  Enviar Mensaje
</button>

      {/* Mensaje de estado */}
      {status === "success" && (
        <p className="text-green-400 mt-2">✅ ¡Mensaje enviado con éxito!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 mt-2">
          ❌ Ocurrió un error al enviar el mensaje. Inténtalo más tarde.
        </p>
      )}
    </form>
  );
}