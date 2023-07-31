import { Component, ViewChild, ElementRef } from '@angular/core';
//animation imports
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
  animations: [
    trigger('processTextAnim',
    [
      transition(':enter',
      [
        query('.process-text-anim',
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
export class ProcessComponent {

  @ViewChild('processText') processText!: ElementRef;

  showText: boolean = false;

  ngAfterViewInit() {

    const threshold = 0.3;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => {
            if (entry.isIntersecting) {
              this.showText = true;
            }
          }
        )
      }, { threshold }
    );
    observer.observe(this.processText.nativeElement);
  }



}
