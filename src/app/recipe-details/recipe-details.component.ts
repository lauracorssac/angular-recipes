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
  slideIndex = 1;
  numberSlides = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 0);
    this.recipe = recipes[id];
    this.numberSlides = recipes[id].imagesURL.length;

    this.showSlides(this.slideIndex);

    var nextBtn = document.getElementById('nextbutton');
    nextBtn?.addEventListener('click', (e: Event) => this.plusSlides(1));
    var prevBtn = document.getElementById('nextbutton');
    prevBtn?.addEventListener('click', (e: Event) => this.plusSlides(-1));
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex + n);
  }

  showSlides(n: number) {
    var i;

    var slides = document.getElementsByClassName('photoShown');
    
    //var dots = document.getElementsByClassName('dot');
    if (n > this.numberSlides || n < 1) {
      return;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].setAttribute('style', 'display:none;');
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(' active', '');
    // }
    slides[n].setAttribute('style', 'display:block;');
    this.slideIndex = n;
    //dots[slideIndex - 1].className += ' active';
  }
}
