import { Component, ViewChild, ElementRef } from '@angular/core';
//animation imports
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-super-eight',
  templateUrl: './super-eight.component.html',
  styleUrls: ['./super-eight.component.css'],
  animations: [
    trigger('superTextAnim',
    [
      transition(':enter',
      [
        query('.super-text-anim',
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
export class SuperEightComponent {

  @ViewChild('superText') superText!: ElementRef;

  showText: boolean = false;

  ngAfterViewInit() {

    const threshold = 0.1;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => {
            if (entry.isIntersecting) {
              this.showText = true;
              observer.disconnect();
            }
          }
        )
      }, { threshold }
    );
    observer.observe(this.superText.nativeElement);
  }

}
