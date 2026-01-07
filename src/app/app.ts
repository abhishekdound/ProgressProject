import { Component, signal } from '@angular/core';
import { Header } from "./layouts/header/header";
import { Footer } from "./layouts/footer/footer";
import { RouterOutlet } from '@angular/router';
import { Ui } from './ui-service/ui.service';
import { AddTaskModal } from './mainContent/home-content/bottom-actions/add-task-modal/add-task-modal';

@Component({
  selector: 'app-root',
  imports: [Header, Footer,RouterOutlet,AddTaskModal],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('TodoApp');
  constructor(public ui: Ui) {}
}
