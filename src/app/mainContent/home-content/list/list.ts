import { Component } from '@angular/core';
import { Ui } from '../../../ui-service/ui.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  constructor(public ui: Ui) {}

}
