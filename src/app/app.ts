import { Component, HostListener, signal } from '@angular/core';
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";
import { RouterOutlet } from '@angular/router';
import { Ui } from './ui-service/ui.service';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TodoApp');
  constructor(public ui: Ui) {}

   @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    // CTRL + K → Open modal
    if (event.ctrlKey && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      this.ui.openHeaderSearch();
    }

    // ESC → Close modal
     if (event.key === 'Escape') {
      this.ui.closeAnyOpen();
    }
  }

  
  @HostListener('document:click')
  handleDocumentClick() {
    this.ui.closeAnyOpen();
  }
}
