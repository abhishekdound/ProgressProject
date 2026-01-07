import { Component } from '@angular/core';
import { Category } from "../home-content/category/category";
import { List } from '../home-content/list/list';

@Component({
  selector: 'app-home',
  imports: [Category,List],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
