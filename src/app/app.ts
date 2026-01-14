import { Component, HostListener, signal } from '@angular/core';
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";
import { RouterOutlet } from '@angular/router';
import { Ui } from './ui-service/ui.service';
import { AddTaskModal } from "./mainContent/home-content/bottom-actions/add-task-modal/add-task-modal";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, AddTaskModal],
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
