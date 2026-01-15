import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';

type Lang = 'es' | 'en';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.html',
})
export class HomeComponent {
  lang: Lang = 'es';

  avatarUrl = 'assets/avatar.png';

  // Datos base
  links = {
  github: 'https://github.com/emaigoa',
  repo: 'https://github.com/emaigoa/Trabajo-Integrador-Arquitectura-Web',
  demo: 'https://miniecommercearqweb.netlify.app/',
  linkedin: 'https://www.linkedin.com/in/emanuel-miguel-igoa-b07234379/',
  mail: 'mailto:emanueligoa@hotmail.com',
};


  // Textos por idioma
  content = {
    es: {
      fullName: 'Emanuel Miguel Igoa',
      role: 'Data Engineer Jr (objetivo) · Estudiante Ing. en Sistemas',
      location: 'Mar del Plata, Buenos Aires',
      heroTitle: 'Data Engineer Jr en formación',
      heroText:
        'Soy estudiante avanzado de Ingeniería en Sistemas. Estoy enfocándome en Data Engineering (ETL, modelado, SQL) y como segundo paso ML Engineering.',
      cta1: 'Ver demo',
      cta2: 'Ver código',
      skillsTitle: 'Skills',
      skillsNote: 'orientadas a Data / Backend / Data Pipelines',
      projectTitle: 'Proyecto destacado',
      projectName: 'MiniMarket (Mini E-Commerce)',
      projectDesc:
        'Proyecto integrador hecho 100% por mí. Incluye catálogo, carrito, login simulado y deploy en Netlify. Me sirve para mostrar estructura, manejo de estado y diseño de UI.',
      highlightsTitle: 'Qué muestra',
      highlights: ['Catálogo', 'Carrito', 'Login simulado', 'Deploy (Netlify)'],
      contactTitle: 'Contacto',
      contactText: 'Si te interesa mi perfil para Data Engineer Jr, escribime.',
      contactBtn: 'Enviar email',
    },
    en: {
      fullName: 'Emanuel Miguel Igoa',
      role: 'Aspiring Junior Data Engineer · Systems Engineering student',
      location: 'Mar del Plata, Buenos Aires',
      heroTitle: 'Junior Data Engineer (in training)',
      heroText:
        'I’m an advanced Systems Engineering student focused on Data Engineering (ETL, data modeling, SQL) and later on ML Engineering.',
      cta1: 'View demo',
      cta2: 'View code',
      skillsTitle: 'Skills',
      skillsNote: 'focused on Data / Backend / Data Pipelines',
      projectTitle: 'Featured project',
      projectName: 'MiniMarket (Mini E-Commerce)',
      projectDesc:
        'Capstone project built entirely by me. Includes catalog, cart, simulated login and Netlify deployment. It showcases structure, state handling and UI design.',
      highlightsTitle: 'Highlights',
      highlights: ['Catalog', 'Cart', 'Simulated login', 'Deployment (Netlify)'],
      contactTitle: 'Contact',
      contactText: 'If you’re hiring a Junior Data Engineer, feel free to reach out.',
      contactBtn: 'Email me',
    },
  };
  roleByLang = {
  es: 'Data Engineer Jr (en formación)',
  en: 'Aspiring Junior Data Engineer',
};

bioByLang = {
  es: 'Estudiante avanzado de Ingeniería en Sistemas, enfocado en Data Engineering (ETL, modelado, SQL) y con proyección a ML Engineering. Aprendiendo Airflow, AWS y Power BI.',
  en: 'Advanced Systems Engineering student focused on Data Engineering (ETL, data modeling, SQL) with a long-term path toward ML Engineering. Currently learning Airflow, AWS, and Power BI.',
};

  copy = {
    es: {
      title: 'Data Engineer Jr en formación',
      subtitle:
        'Estudiante avanzado de Ingeniería en Sistemas. Estoy construyendo proyectos orientados a datos (scraping + pipelines) y aprendiendo Airflow, AWS y Power BI. Busco mi primer empleo IT como Data Engineer Jr, con proyección a ML Engineer.',
      ctaDemo: 'Ver demo',
      ctaCode: 'Ver código',
    },
    en: {
      title: 'Aspiring Junior Data Engineer',
      subtitle:
        'Advanced Systems Engineering student building data-focused projects (scraping + pipelines) and learning Airflow, AWS, and Power BI. Seeking my first IT role as a Junior Data Engineer, with a long-term path toward ML Engineering.',
      ctaDemo: 'View demo',
      ctaCode: 'View code',
    },
  };
  fullName = 'Emanuel Miguel Igoa';
  location = {
    es: 'Mar del Plata, Buenos Aires',
    en: 'Mar del Plata, Buenos Aires',
  };
  skills = ['Python', 'SQL', 'Git', 'Angular', 'TypeScript', 'Docker (básico)', 'ETL (en progreso)'];
  learning = [
  { title: 'Scraping de reseñas', desc: 'Recolección + limpieza + dataset para análisis y ML (en progreso).' },
  { title: 'Airflow', desc: 'Orquestación de pipelines (en progreso).' },
  { title: 'AWS', desc: 'Servicios base para datos (en progreso).' },
  { title: 'Power BI', desc: 'Dashboards y reporting (en progreso).' },
];



  // escucha el evento del header
  @HostListener('window:lang-change', ['$event'])
  onLangChange(e: any) {
    this.lang = e.detail as Lang;
  }
}
