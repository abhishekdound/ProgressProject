import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { AddTaskModal } from './add-task-modal/add-task-modal';

@Component({
  selector: 'app-bottom-actions',
  imports: [AddTaskModal],
  templateUrl: './bottom-actions.html',
  styleUrl: './bottom-actions.scss',
})
export class BottomActions {
  showAddTask = signal(false);

  handleAddTask(task: any) {
    console.log(task);
    // push into today list (signal / service)
  }
}
