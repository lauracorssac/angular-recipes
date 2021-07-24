import { Component, OnInit, Input } from '@angular/core';
import { RecipeClass } from '../recipe-class';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig]
})
export class NgbdCarouselConfig {
  images: string[];
  //@Input() recipe: RecipeClass

  constructor(config: NgbCarouselConfig) {
    //this.recipe = recipe;
    this.images = [
      'https://drive.google.com/uc?export=view&id=1O0_9f22pzCERmVd8sH_wTHt9gae79_EV',
      'https://drive.google.com/uc?export=view&id=16BRAsjS4P1-YN7hRnQb_j6yiIxfJzPLF'
    ];
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}
