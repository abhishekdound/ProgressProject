import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Ui {
  showAddTask = signal(false);

  openAddTask() {
    this.showAddTask.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeAddTask() {
    this.showAddTask.set(false);
    document.body.style.overflow = '';
  }

  addTask(task: any) {
    console.log(task);
  }
}
