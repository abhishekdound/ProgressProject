import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { AddTaskMode } from '../../../../ui-service/ui.service';

@Component({
  selector: 'app-add-task-modal',
  imports: [],
  templateUrl: './add-task-modal.html',
  styleUrl: './add-task-modal.scss',
  standalone: true,
})
export class AddTaskModal {
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<any>();
  @Input() mode: AddTaskMode = 'global';

  taskName = signal('');
  category = signal('');
  time = signal('');
   date = signal(''); 

  submit() {
    const payload = {
      task: this.taskName(),
      category: this.category(),
      time: this.time(),
      date: this.mode === 'global' ? this.date() : new Date().toISOString().slice(0, 10),
    };

    console.log('Add Task:', payload);
  }
}
