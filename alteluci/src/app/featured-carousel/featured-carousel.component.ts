import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.css']
})
export class FeaturedCarouselComponent {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;

  currentSlide: number = 1;
  slider: KeenSliderInstance = null!;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(
        this.sliderRef.nativeElement,
        {
          breakpoints: {
            '(max-width: 1800px)': {
              slides: {
                origin: "center",
                spacing: 20,
                perView: 2,
              },
            },
            '(max-width: 1305px)': {
              slides: {
                origin: 'center',
                spacing: 1,
                perView: 1,
              }
            },
            '(max-width: 1000px)': {
              slides: {
                origin: 'center',
                spacing: 10,
                perView: 2,
              }
            },
          },
          defaultAnimation: {
            duration: 2000
          },
          slides: {
            origin: "center",
            perView: 2,
            spacing: 30,
          },
          loop: true,
          initial: this.currentSlide,
          slideChanged: (s) => {
            this.currentSlide = s.track.details.rel;
          }
        }
      )
    })
  }

  


}
