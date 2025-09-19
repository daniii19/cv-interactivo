import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin as LinkedIn, Github, Download, User, Briefcase, GraduationCap, Code, Award, Calendar, ExternalLink, ChevronDown, Globe } from 'lucide-react';
import emailjs from 'emailjs-com';
import logo from './assets/img/logo.png';
import foto from './assets/img/Foto DNI.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'skills', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'React/Frontend', level: 80 },
    { name: 'Spring Boot', level: 75 },
    { name: 'Git & Version Control', level: 85 },
    { name: 'Apache Server', level: 70 },
    { name: 'Web Development', level: 90 },
    { name: 'Team Collaboration', level: 85 }
  ];

  const experiences = [
    {
      title: 'Prácticas de Desarrollo de Aplicaciones Web',
      company: 'Empresa de Desarrollo',
      period: 'Abril 2025 - Junio 2025 (3 meses)',
      description: 'Desarrollo de una aplicación web completa, integrando frontend, backend y bases de datos. Colaboración con el equipo de desarrollo en la resolución de incidencias y mejoras de código.',
      technologies: ['HTML5', 'CSS3', 'Git', 'Java', 'JavaScript', 'Spring Boot', 'Bootstrap', 'React', 'Node JS', 'MySQL', 'Postman']
    }
  ];

  const projects = [
    {
      title: 'Aplicación Web Completa',
      description: 'Desarrollo de una aplicación web full-stack con integración de frontend moderno, backend robusto y gestión de bases de datos.',
      technologies: ['React', 'Spring Boot', 'HTML5', 'CSS3', 'Java Script', 'Bootstrap'],
      link: '#'
    },
    // {
    //   title: 'Sistema de Gestión Web',
    //   description: 'Implementación de sistema web con funcionalidades avanzadas de gestión de usuarios y contenido dinámico.',
    //   technologies: ['JavaScript', 'Apache', 'Git', 'CSS3'],
    //   link: '#'
    // },
    // {
    //   title: 'Portal Web Responsivo',
    //   description: 'Diseño y desarrollo de portal web completamente responsivo con enfoque en experiencia de usuario.',
    //   technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
    //   link: '#'
    // }
  ];

  const softSkills = [
    'Buena gestión del tiempo',
    'Puntualidad',
    'Capacidad de aprendizaje rápido',
    'Planificación y organización',
    'Empatía'
  ];

  const certifications = [
    'HTML5 y CSS3 - OpenWebinars',
    'Git - OpenWebinars',
    'Apache - OpenWebinars',
    'Spring Boot - OpenWebinars',
    'Thymeleaf - OpenWebinars',
    'Prevención de Riesgos Laborales - Básico'
  ];

  function ContactForm() {
    const handleSubmit = (e) => {
      e.preventDefault();
      
      emailjs.sendForm(
        'service_1v9spya',
        'template_mlhufs1',
        e.currentTarget,
        'tZfACEO9ICIsyMNqF'
      )
      // .then((result) => {
      //   alert('Mensaje enviado!');
      // }, (error) => {
      //   alert('Error al enviar mensaje');
      // });

      e.currentTarget.reset();
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
          className="w-full bg-white text-blue-900 font-medium py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200"
        >
          Enviar Mensaje
        </button>
      </form>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-gray-900">Daniel Gayol Rodríguez</div>
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'skills', 'education', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section === 'about' ? 'Perfil' : 
                   section === 'experience' ? 'Experiencia' :
                   section === 'skills' ? 'Certificaciones' :
                   section === 'education' ? 'Formación' :
                   section === 'projects' ? 'Proyectos' :
                   'Contacto'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                  Daniel Gayol Rodríguez
                </h1>
                <p className="text-xl lg:text-2xl text-blue-200 mb-6">
                  Técnico Superior en Desarrollo de Aplicaciones Web
                </p>
                <p className="text-lg text-blue-100 max-w-2xl">
                  Desarrollador de aplicaciones web con formación en frontend y backend, 
                  apasionado por la tecnología y el aprendizaje continuo. Capaz de trabajar 
                  en equipo, con buena gestión del tiempo.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <a href="mailto:danielgayolro@gmail.com" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors duration-200">
                  <Mail size={18} />
                  danielgayolro@gmail.com
                </a>
                <a href="tel:+34617748386" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors duration-200">
                  <Phone size={18} />
                  (+34) 617-748-386
                </a>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <MapPin size={18} />
                  Gijón, Asturias
                </div>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                {/* <a href="#" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200">
                  <Download size={18} />
                  Descargar CV
                </a> */}
                <a href="https://linkedin.com/in/daniel-gayol-rodríguez-4882a2347" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200">
                  <LinkedIn size={18} />
                  LinkedIn
                </a>
                <a href="https://github.com/daniii19" target='_blank' className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-200">
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
            
            {/* <div className="flex-shrink-0">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center border-4 border-white/20">
                <User size={120} className="text-white/80" />
              </div>
            </div> */}
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
              <img 
                src={foto} 
                alt="Foto de Daniel Gayol Rodríguez" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <ChevronDown 
            size={32} 
            className="mx-auto animate-bounce cursor-pointer hover:text-blue-200 transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Perfil Profesional</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Desarrollador Web Apasionado</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desarrollador de aplicaciones web con formación en frontend y backend, 
                apasionado por la tecnología y el aprendizaje continuo. Capaz de trabajar 
                en equipo, con buena gestión del tiempo.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experiencia en el desarrollo de proyectos web completos, desde el diseño 
                hasta la implementación. Conocimientos sólidos en tecnologías modernas 
                y metodologías de desarrollo ágil.
              </p>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-gray-600">Años de Formación</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">6+</div>
                <div className="text-gray-600">Certificaciones</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-gray-600">Tecnologías</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-gray-600">Dedicación</div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Información Adicional</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Carnet de conducir (B, A2)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Disponibilidad horaria amplia
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Idiomas</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-600" />
                  Español: Nativo
                </li>
                <li className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-600" />
                  Inglés: Básico
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {softSkills.slice(0, 3).map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experiencia Laboral</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <Briefcase size={16} className="text-white" />
                </div>
                
                <div className={`ml-16 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-blue-600 mb-3">{exp.company}</h4>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
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

      {/* Skills Section */}
      {/* <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Habilidades Técnicas</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div> */}

          {/* Certifications */}
          {/* <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cursos y Certificaciones</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-center gap-3">
                    <Award className="text-blue-600" size={20} />
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Cursos y Certificaciones</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center gap-3">
                  <Award className="text-blue-600" size={20} />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Formación Académica</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web</h3>
                  <p className="text-blue-600 font-medium mb-2">CIFP de los Sectores Industriales y de Servicios, La Laboral, Gijón</p>
                  <p className="text-gray-500 text-sm mb-3">2023 - 2025</p>
                  <p className="text-gray-600">
                    Formación especializada en desarrollo web, incluyendo frontend, backend, 
                    bases de datos y metodologías de desarrollo ágil.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <GraduationCap className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bachillerato Tecnológico</h3>
                  <p className="text-green-600 font-medium mb-2">IES Galileo Galilei, Navia</p>
                  <p className="text-gray-500 text-sm mb-3">2021 - 2023</p>
                  <p className="text-gray-600">
                    Bachillerato con especialización en tecnología, proporcionando 
                    una base sólida en ciencias y matemáticas aplicadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Proyectos Destacados</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* <Code size={48} className="text-white/80" /> */}
                    <img src={logo} alt="Logo QUAI" className='w-20' />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* <a href={project.link} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                    Ver Proyecto
                    <ExternalLink size={16} />
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contáctame</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              ¿Quieres saber más de mi? Siempre estoy dispuesto a recibir 
              nuevas ofertas de trabajo y oportunidades.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200">Email</p>
                    <p className="font-medium">danielgayolro@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200">Teléfono</p>
                    <p className="font-medium">(+34) 617-748-386</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-blue-200">Ubicación</p>
                    <p className="font-medium">Gijón, Asturias, España</p>
                    <p className="font-medium">Navia, Asturias, España</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <a href="https://linkedin.com/in/daniel-gayol-rodríguez-4882a2347" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200">
                  <LinkedIn size={24} />
                </a>
                <a href="https://github.com/daniii19" target='_blank' className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200">
                  <Github size={24} />
                </a>
              </div>
            </div>
            
            {/* <div>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Tu Nombre"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="Tu Email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    placeholder="Asunto"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-colors duration-200"
                  />
                </div>
                
                <div>
                  <textarea 
                    rows={5}
                    placeholder="Tu Mensaje"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:border-white/40 transition-colors duration-200 resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-white text-blue-900 font-medium py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div> */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © Daniel Gayol Rodríguez - CV Interactivo
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;