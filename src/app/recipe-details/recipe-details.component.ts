import { Component, OnInit } from '@angular/core';
import { RecipeClass } from '../recipe-class';
import { recipes } from '../products';
import { ActivatedRoute } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  providers: [NgbCarouselConfig]
})
export class RecipeDetailsComponent implements OnInit {
  
  recipe: RecipeClass | undefined;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1, 2, 3, 4].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  );

  constructor(config: NgbCarouselConfig,
    private route: ActivatedRoute) {
    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
    this.recipe = recipes[id];
  }
}
