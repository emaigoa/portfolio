import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header';

type Lang = 'es' | 'en';

type TechLogo = { name: string; icon: string };

type SkillGroup = {
  title: string;
  items: string[];
};

type Project = {
  key: string;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  stack: TechLogo[];
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.html',
})
export class HomeComponent {
  lang: Lang = 'es';

  // HERO
  fullName = 'Emanuel Miguel Igoa';
  avatarUrl = '/assets/avatar.png';

  roleByLang: Record<Lang, string> = {
    es: 'Data Engineer Jr (en formación)',
    en: 'Aspiring Junior Data Engineer',
  };

  bioByLang: Record<Lang, string> = {
    es: 'Estudiante avanzado de Ingeniería en Sistemas, enfocado en Data Engineering (ETL, modelado, SQL) y con proyección a ML Engineering. Actualmente aprendiendo Airflow, AWS y Power BI.',
    en: 'Advanced Systems Engineering student focused on Data Engineering (ETL, data modeling, SQL) with a long-term path toward ML Engineering. Currently learning Airflow, AWS, and Power BI.',
  };

  // LINKS GENERALES
  links = {
    githubProfile: 'https://github.com/emaigoa',
    linkedin: 'https://www.linkedin.com/in/emanuel-miguel-igoa-b07234379/',
    mail: 'mailto:emanueligoa@hotmail.com',
  };

  // TEXTOS GENERALES
  content: Record<Lang, any> = {
    es: {
      projectTitle: 'Proyectos',
      ctaDemo: 'Ver demo',
      ctaRepo: 'Ver código',
    },
    en: {
      projectTitle: 'Projects',
      ctaDemo: 'View demo',
      ctaRepo: 'View code',
    },
  };

  skillGroups: SkillGroup[] = [
    {
      title: 'Data & ML',
      items: ['Pandas', 'NumPy', 'Scikit-learn', 'EDA', 'Feature Engineering', 'Model Evaluation'],
    },
    {
      title: 'Backend & APIs',
      items: ['Python', 'Node.js (básico)', 'REST', 'JWT/OAuth (conceptos)', 'Scraping/ETL'],
    },
    {
      title: 'Frontend',
      items: ['Angular', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'UX básico'],
    },
    {
      title: 'Herramientas',
      items: ['Git/GitHub', 'Docker (básico)', 'SQL', 'Power BI (intro)', 'Linux (intro)'],
    },
  ];

  // PROJECTS (listo para crecer)
  projects: Project[] = [
    {
      key: 'minimarket',
      image: '/assets/projects/minimarket.png',
      demoUrl: 'https://miniecommercearqweb.netlify.app/',
      repoUrl: 'https://github.com/emaigoa/Trabajo-Integrador-Arquitectura-Web',
      stack: [
        { name: 'Angular', icon: '/assets/logos/angular.svg' },
        { name: 'TypeScript', icon: '/assets/logos/typescript.svg' },
        { name: 'Bootstrap', icon: '/assets/logos/bootstrap.svg' },
        { name: 'Netlify', icon: '/assets/logos/netlify.svg' },
      ],
    },
    {
      key: 'car-price-estimator',
      image: '/assets/projects/auto-price-estimator.png',
      demoUrl: '#',
      repoUrl: '#',
      stack: [
        { name: 'Python', icon: '/assets/logos/python.svg' },
        { name: 'Pandas', icon: '/assets/logos/pandas.svg' },
        { name: 'Scikit-learn', icon: '/assets/logos/scikitlearn.svg' },
      ],
    },
  ];

  // Textos por proyecto (ES/EN)
  projectText(key: string) {
    const dict: Record<string, Record<Lang, { name: string; desc: string }>> = {
      minimarket: {
        es: {
          name: 'MiniMarket (Mini E-Commerce)',
          desc: 'Proyecto integrador desarrollado por mí. Incluye catálogo, carrito, login simulado y deploy en Netlify. Enfocado en estructura, UI y flujo de usuario.',
        },
        en: {
          name: 'MiniMarket (Mini E-Commerce)',
          desc: 'Capstone project built by me. Includes catalog, cart, simulated login and Netlify deployment. Focused on structure, UI and user flow.',
        },
      },
      'car-price-estimator': {
        es: {
          name: 'Estimador de precios de autos',
          desc: 'Proyecto de ejemplo: modelo de ML que estima el precio de un auto según año, marca, km y versión. Pipeline de limpieza + entrenamiento + API para predicciones.',
        },
        en: {
          name: 'Car Price Estimator',
          desc: 'Example project: ML model that estimates a car price from year, brand, mileage and trim. Cleaning pipeline + training + prediction API.',
        },
      },
    };

    const fallback: Record<Lang, { name: string; desc: string }> = {
      es: { name: 'Proyecto', desc: 'Descripción pendiente.' },
      en: { name: 'Project', desc: 'Description pending.' },
    };

    return dict[key]?.[this.lang] ?? fallback[this.lang];
  }

  timeline = [
    {
      date: '2026',
      title: 'Objetivo: Primer rol IT en Datos/ML',
      description: 'Apuntando a Data Analyst / Data Engineer Jr (puerta de entrada) y luego ML.',
    },
    {
      date: '2025–2026',
      title: 'Proyectos de práctica + Portfolio',
      description: 'EDA, NLP, pipelines ETL, dashboards y deploys (Netlify).',
    },
    {
      date: 'CAECE',
      title: 'Ing. en Sistemas (4to año)',
      description: 'Base fuerte en ingeniería de software + bases de datos + redes + proyectos.',
    },
  ];

  // escucha el evento del header (ES/EN)
  @HostListener('window:lang-change', ['$event'])
  onLangChange(e: any) {
    this.lang = e.detail as Lang;
  }
}
