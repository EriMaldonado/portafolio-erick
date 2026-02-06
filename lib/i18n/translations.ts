export type Language = "en" | "es";

export interface Translations {
  nav: {
    home: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role1: string;
    role2: string;
    description: string;
    resumeButton: string;
    resumeLanguage: {
      es: string;
      en: string;
    };
  };
  skills: {
    title: string;
    skillsTab: string;
    educationTab: string;
    technicalSkills: string;
    softSkills: string;
    languages: string;
    degree: string;
    university: string;
    period: string;
    certification: string;
    certificationTitle: string;
    certificationOrg: string;
  };
  projects: {
    title: string;
    all: string;
    web: string;
    mobile: string;
    backend: string;
    viewProject: string;
    viewCode: string;
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      subjectRequired: string;
      messageRequired: string;
    };
  };
  footer: {
    rights: string;
    madeWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm Erick 👋",
      role1: "IT Engineer",
      role2: "Software Developer",
      description:
        "IT Engineer and Software Developer. Passionate about continuous learning and focused on building innovative, efficient solutions.",
      resumeButton: "Resume",
      resumeLanguage: {
        es: "Spanish",
        en: "English",
      },
    },
    skills: {
      title: "Skills & Education",
      skillsTab: "Skills",
      educationTab: "Education",
      technicalSkills: "Technical Skills",
      softSkills: "Soft Skills",
      languages: "Languages",
      degree: "B.S. in Information Technology Engineering",
      university: "Technological University of Panama",
      period: "2019 - 2024",
      certification: "Certifications",
      certificationTitle: "Professional Certifications",
      certificationOrg: "Verified Organizations",
    },
    projects: {
      title: "My Projects",
      all: "All",
      web: "Web",
      mobile: "Mobile",
      backend: "Backend",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    contact: {
      title: "Let's Connect",
      subtitle:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your Message",
      sendButton: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent!",
      successMessage:
        "Thank you for reaching out. I will get back to you shortly!",
      errorTitle: "Error",
      errorMessage: "Something went wrong. Please try again later.",
      validation: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        subjectRequired: "Subject is required",
        messageRequired: "Message is required",
      },
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy Erick 👋",
      role1: "Ingeniero en TI",
      role2: "Desarrollador de Software",
      description:
        "Ingeniero en Tecnologías de la Información y Desarrollador de Software. Apasionado por el aprendizaje continuo, enfocado en crear soluciones innovadoras y eficientes.",
      resumeButton: "Currículum",
      resumeLanguage: {
        es: "Español",
        en: "Inglés",
      },
    },
    skills: {
      title: "Habilidades y Educación",
      skillsTab: "Habilidades",
      educationTab: "Educación",
      technicalSkills: "Habilidades Técnicas",
      softSkills: "Habilidades Blandas",
      languages: "Idiomas",
      degree: "Ingeniería en Tecnologías de la Información",
      university: "Universidad Tecnológica de Panamá",
      period: "2019 - 2024",
      certification: "Certificaciones",
      certificationTitle: "Certificaciones Profesionales",
      certificationOrg: "Varias Organizaciones",
    },
    projects: {
      title: "Mis Proyectos",
      all: "Todos",
      web: "Web",
      mobile: "Móvil",
      backend: "Backend",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
    },
    contact: {
      title: "Contacto",
      subtitle:
        "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Email",
      subjectPlaceholder: "Asunto",
      messagePlaceholder: "Tu Mensaje",
      sendButton: "Enviar Mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje Enviado!",
      successMessage: "Gracias por contactarme. ¡Te responderé pronto!",
      errorTitle: "Error",
      errorMessage: "Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
      validation: {
        nameRequired: "El nombre es requerido",
        emailRequired: "El email es requerido",
        emailInvalid: "Por favor ingresa un email válido",
        subjectRequired: "El asunto es requerido",
        messageRequired: "El mensaje es requerido",
      },
    },
    footer: {
      rights: "Todos los derechos reservados",
      madeWith: "Hecho con",
    },
  },
};
