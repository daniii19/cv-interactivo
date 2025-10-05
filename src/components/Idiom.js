import React from "react";
import esFlag from "../assets/img/bandera-españa.png";
import enFlag from "../assets/img/bandera-inglesa.png";

function Idiom({ language, setLanguage }) {
  return (
    <div className="flex items-center gap-3">
      {/* Español */}
      <button
        onClick={() => setLanguage("es")}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-250 ${
          language === "es"
            ? "border-blue-500 scale-110 shadow-lg"
            : "border-transparent hover:scale-105 opacity-80"
        }`}
        title="Español"
      >
        <img
          src={esFlag}
          alt="Español"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Inglés */}
      <button
        onClick={() => setLanguage("en")}
        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all duration-250 ${
          language === "en"
            ? "border-blue-500 scale-110 shadow-lg"
            : "border-transparent hover:scale-105 opacity-80"
        }`}
        title="English"
      >
        <img
          src={enFlag}
          alt="English"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  );
}

export default Idiom;