import { Component, OnInit } from '@angular/core';
import { RecipeClass } from '../recipe-class';
import { recipes } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: RecipeClass | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
    this.recipe = recipes[id];
  }
}
