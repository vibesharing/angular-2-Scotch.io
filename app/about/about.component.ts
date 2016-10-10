import { Component } from '@angular/core';
import {Slide} from './carousel/slide.component';
import {Carousel} from './carousel/carousel.component';


@Component({
  selector: 'about',
  templateUrl: '../../app/about/about.html',
})

export class AboutComponent  {
    //The time to show the next photo
    private NextPhotoInterval:number = 5000;
    //Looping or not
    private noLoopSlides:boolean = true;
    //Photos
    private slides:Array<any> = [];

    private isCarouselShown: boolean;

    constructor() {
      this.addNewSlide();
      this.isCarouselShown = false;

    }

    private addNewSlide() {
         this.slides.push(
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg',text:'BMW 1'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'}
        );
    }

    private removeLastSlide() {
        this.slides.pop();
    }

    private showCarousel(Index: number): void {
      this.isCarouselShown = true;
    }
}
