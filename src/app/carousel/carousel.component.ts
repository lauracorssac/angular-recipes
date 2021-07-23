import { Component, OnInit } from '@angular/core';
import { RecipeClass } from '../recipe-class';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel',
  templateUrl: './carousel.html',
  providers: [NgbCarouselConfig]
})
export class NgbdCarouselBasic {
  images: string[];

  constructor(recipe: RecipeClass, config: NgbCarouselConfig) {
    this.images = recipe.imagesURL;
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
