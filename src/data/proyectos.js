// "image": "quai" muestra el logo de Quai; si no hay imagen se usa el icono indicado en "icon" ("car" | "chart").
// "link" es opcional: si lo rellenas con la URL del repositorio o de la demo, aparece el botón "Ver proyecto".
export const proyectos = [
  {
    title: "My Own Mechanic",
    title_en: "My Own Mechanic",

    description:
      "Proyecto personal en desarrollo: aplicación web para gestionar los vehículos personales de los usuarios. Permite registrar y consultar el historial de mantenimientos, modificaciones y averías, programar recordatorios y gestionar una galería de imágenes del vehículo.",
    description_en:
      "Personal project in development: a web application to manage users' personal vehicles. It allows registering and reviewing the history of maintenance, modifications and breakdowns, scheduling reminders and managing an image gallery of the vehicle.",

    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Docker",
    ],

    icon: "car",
  },

  {
    title: "Quai - Gestión de tareas empresarial",
    title_en: "Quai - Company Task Management",

    description:
      "Aplicación web desarrollada durante las prácticas en Tragsatec para gestionar las tareas internas de la empresa, con autenticación mediante token y control de acceso por roles.",
    description_en:
      "Web application developed during the internship at Tragsatec to manage the company's internal tasks, with token-based authentication and role-based access control.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "Spring Security",
      "MariaDB",
      "Docker",
    ],

    image: "quai",
  },

  {
    title: "Predictor de precios de Airbnb en Barcelona",
    title_en: "Airbnb Price Predictor for Barcelona",

    description:
      "Modelo de machine learning que estima el precio de un alojamiento de Airbnb en Barcelona a partir de sus características: tipo de alojamiento, capacidad, habitaciones, distancia al centro y al metro, valoraciones y datos del anfitrión. Se compararon una regresión lineal y un Random Forest, y el modelo se despliega en una aplicación interactiva con Streamlit que incluye un mapa filtrable por precio.",
    description_en:
      "Machine learning model that estimates the price of an Airbnb listing in Barcelona from its characteristics: listing type, capacity, bedrooms, distance to the city centre and metro, ratings and host data. A linear regression and a Random Forest were compared, and the model is deployed as an interactive Streamlit app with a price-filterable map.",

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "Streamlit",
    ],

    icon: "chart",
  },
];
