import { Component, ViewChild, ElementRef } from '@angular/core';

//animation imports
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-honey-honey',
  templateUrl: './honey-honey.component.html',
  styleUrls: ['./honey-honey.component.css'],
  animations: [
    trigger('honeyTextAnim',
    [
      transition(':enter',
      [
        query('.honey-text-anim',
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
export class HoneyHoneyComponent {

  showText: boolean = false;

  @ViewChild('honeyText') honeyText!: ElementRef;

  ngAfterViewInit() {
    const threshold = 0.9;
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
      }, {threshold}
    );
    observer.observe(this.honeyText.nativeElement);
  }

}
