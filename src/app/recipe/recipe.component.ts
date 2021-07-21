import { Component, OnInit } from '@angular/core';
import { RecipeClass } from '../recipe-class';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {


  recipe: RecipeClass = {
    id: 0,
    name: "pacocas"
  };

  constructor() {}

  ngOnInit() {}
}
