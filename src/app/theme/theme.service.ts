import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
   darkMode = signal<boolean>(false);

  constructor() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (saved === 'dark' || (!saved && prefersDark)) {
      this.enableDark();
    }
  }

  toggle() {
    this.darkMode() ? this.enableLight() : this.enableDark();
  }

  enableDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.darkMode.set(true);
  }

  enableLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.darkMode.set(false);
  }
  
}
