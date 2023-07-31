import { Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
//animation imports
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-featured-carousel',
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.css'],
  animations: [
    trigger('featTextAnim',
    [
      transition(':enter',
      [
        query('.feat-text-anim',
        [
          style({opacity: 0}),
          stagger(200, 
            [
              animate('1.0s 250ms ease-in', style({opacity: 1.0}))
            ]
            )
        ]
        )
      ]
      )
    ]
    )
  ]
})
export class FeaturedCarouselComponent {

  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>;
  @ViewChild("featuredText") featuredText!: ElementRef;

  showText: boolean = false;
  stopVid: boolean = false;

  currentSlide: number = 1;
  slider: KeenSliderInstance = null!;

  ngAfterViewInit() {
    const threshold = 0.3;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => {
            if (entry.isIntersecting) {
              this.showText = true;
              observer.disconnect();
            }
          }
        );
      }, { threshold }
    );
    observer.observe(this.featuredText.nativeElement);

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
            '(max-width: 700px)': {
              slides: {
                origin: 'center',
                spacing: 2,
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
            this.stopVid = true; // stops all playing video wrapper
            setTimeout(
              () => { this.stopVid = false; }, 50 // allows play any again after 50ms
            );
          }
        }
      )
    })
  }

  


}
