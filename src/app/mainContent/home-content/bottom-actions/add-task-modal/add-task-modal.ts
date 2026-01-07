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

  title = signal('');
  category = signal('Marketing');
  time = signal('');

  submit() {
    if (!this.title()) return;

    this.add.emit({
      title: this.title(),
      category: this.category(),
      time: this.time(),
    });

    this.close.emit();
  }

}
