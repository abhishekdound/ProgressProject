import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Ui {
  showHeaderSearch = signal(false);
  showAddTask = signal(false);

  openHeaderSearch() {
    this.showHeaderSearch.set(true);
  }

  closeHeaderSearch() {
    this.showHeaderSearch.set(false);
  }

  openAddTask() {
    this.showAddTask.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeAddTask() {
    this.showAddTask.set(false);
    document.body.style.overflow = '';
  }

  handleEscape() {
    if (this.showHeaderSearch()) {
      this.closeHeaderSearch();
      return;
    }

    if (this.showAddTask()) {
      this.closeAddTask();
      return;
    }
  }
}
