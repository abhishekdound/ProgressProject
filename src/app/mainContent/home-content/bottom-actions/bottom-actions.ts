import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { AddTaskModal } from './add-task-modal/add-task-modal';
import { Ui } from '../../../ui-service/ui.service';

@Component({
  selector: 'app-bottom-actions',
  imports: [AddTaskModal],
  templateUrl: './bottom-actions.html',
  styleUrl: './bottom-actions.scss',
})
export class BottomActions {
  constructor(public ui: Ui) {}

  handleAddTask(task: any) {
    console.log(task);
    // push into today list (signal / service)
  }
}
