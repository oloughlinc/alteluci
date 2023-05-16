import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//animation imports
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-featured-banner',
  templateUrl: './featured-banner.component.html',
  styleUrls: ['./featured-banner.component.css'],

  animations: [
    trigger('heroAnimation',
      [
        state('true', style({ opacity: 0.25})),
        state('false', style({ opacity: 0 })),
        transition('false => true', animate('4.0s 250ms ease-in'))
      ]
    ),
    trigger('heroAnimation2',
    [
      transition(':enter',
      [
        query('.hero-text-anim',
        [
          style({opacity: 0}),
          stagger(125, 
            [
              animate('2.0s 250ms ease-in', style({opacity: 1.0}))
            ]
            )
        ]
        )
      ]
      )
    ]
    )
    ],
})
export class FeaturedBannerComponent implements OnInit{

  @Input() animations: boolean = true;
  @Input() splashText: string = "";
  @Input() splashUnder: string = "";
  @Input() bgImg: any = null;
  public underlay: string[] = [];

  ngOnInit(): void {
    /*
    console.log(this.underlay);
    this.underlay.forEach((item, i) => {
      if (item === ' ') this.underlay[i] = '&nbsp';
    })
    console.log(this.underlay);
    */
   this.underlay = this.splashUnder.split("");
  }

  @Output() onMenuClicked: EventEmitter<boolean> = new EventEmitter();
  public onMenuButton() {
    this.onMenuClicked.emit(true);
  }

}
