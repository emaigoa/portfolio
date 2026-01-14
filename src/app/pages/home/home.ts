import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

type SkillGroup = {
  title: string;
  items: string[];
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
};

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
})
export class HomeComponent {
  name = 'Ema';
  role = 'Data / ML • Software Engineering Student';
  location = 'Mar del Plata, Buenos Aires (AR)';

  headline =
    'Construyo proyectos de datos y machine learning con foco en impacto real: pipelines, análisis, modelos y apps web para mostrarlos.';
  subheadline =
    'Estudiante de Ingeniería en Sistemas (CAECE). Busco mi primer rol IT orientado a Datos / ML.';

  primaryCta = { label: 'Ver proyectos', href: '/projects' };
  secondaryCta = { label: 'Contactarme', href: '/contact' };

  links = [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'CV (PDF)', href: '#' },
  ];

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

  featuredProjects: Project[] = [
    {
      title: 'Sentiment Analyzer de Reseñas (NLP)',
      description:
        'Pipeline para recolectar reseñas, limpiarlas y entrenar un modelo que clasifica positivas/negativas. Dashboard para ver métricas.',
      tags: ['Python', 'NLP', 'Scikit-learn', 'EDA'],
      links: [
        { label: 'Repo', href: 'https://github.com/' },
        { label: 'Demo', href: '#' },
      ],
    },
    {
      title: 'ETL + Data Quality para Comercios',
      description:
        'ETL desde múltiples fuentes (CSV/JSON) con validaciones, normalización y reporte de calidad. Exportación lista para BI.',
      tags: ['Python', 'ETL', 'SQL', 'Data Quality'],
      links: [{ label: 'Repo', href: 'https://github.com/' }],
    },
    {
      title: 'Portfolio Angular + Chatbot (RAG básico)',
      description:
        'Portfolio web donde un mini chatbot responde preguntas sobre mí, mis skills y proyectos, usando un dataset propio.',
      tags: ['Angular', 'Tailwind', 'IA', 'RAG'],
      links: [{ label: 'Repo', href: 'https://github.com/' }],
    },
  ];

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

  // Helpers (opcional)
  get initials(): string {
    return this.name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join('');
  }
}
