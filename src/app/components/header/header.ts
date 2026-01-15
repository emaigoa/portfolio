import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Lang = 'es' | 'en';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class HeaderComponent {
  @Input() lastName = 'Igoa';
  @Input() cvEsUrl = '/assets/cv-es.pdf';
  @Input() cvEnUrl = '/assets/cv-en.pdf';

  lang: Lang = 'es';

  t = {
    es: {
      home: 'Inicio',
      skills: 'Skills',
      projects: 'Proyecto',
      contact: 'Contacto',
      cv: 'Descargar CV',
      langLabel: 'Español',
      flag: '🇦🇷',
    },
    en: {
      home: 'Home',
      skills: 'Skills',
      projects: 'Project',
      contact: 'Contact',
      cv: 'Download CV',
      langLabel: 'English',
      flag: '🇺🇸',
    },
  };

  get navItems() {
    return [
      { label: this.t[this.lang].home, id: 'inicio' },
      { label: this.t[this.lang].skills, id: 'skills' },
      { label: this.t[this.lang].projects, id: 'projects' },
      { label: this.t[this.lang].contact, id: 'contacto' },
    ];
  }

  toggleLang() {
    this.lang = this.lang === 'es' ? 'en' : 'es';
    window.dispatchEvent(new CustomEvent('lang-change', { detail: this.lang }));
  }

  goTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  get cvUrl(): string {
    return this.lang === 'es' ? this.cvEsUrl : this.cvEnUrl;
  }

  get cvFileName(): string {
    return this.lang === 'es' ? 'CV_Emanuel_Igoa_ES.pdf' : 'CV_Emanuel_Igoa_EN.pdf';
  }
}
