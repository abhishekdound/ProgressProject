import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-add-task-modal',
  imports: [],
  templateUrl: './add-task-modal.html',
  styleUrl: './add-task-modal.scss',
})
export class AddTaskModal {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<any>();

  taskName = signal('');
  category = signal('');
  time = signal('');
   date = signal(''); 

  submit() {
    if (!this.taskName()) return;

    this.add.emit({
      taskName: this.taskName(),
      category: this.category(),
      date: this.date(),
      time: this.time(),
    });

    this.close.emit();
  }
}
