import { Component } from '@angular/core';
import { Category } from "../home-content/category/category";
import { List } from '../home-content/list/list';
import { BottomActions } from "../home-content/bottom-actions/bottom-actions";

@Component({
  selector: 'app-home',
  imports: [Category, List, BottomActions],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
