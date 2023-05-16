import { Component, Input, Output, EventEmitter } from '@angular/core';

//animation imports
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-hero-vid',
  templateUrl: './hero-vid.component.html',
  styleUrls: ['./hero-vid.component.css'],

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
export class HeroVidComponent {

  @Input() animations: boolean = false;

  ngOnInit(): void {
    /*
    console.log(this.underlay);
    this.underlay.forEach((item, i) => {
      if (item === ' ') this.underlay[i] = '&nbsp';
    })
    console.log(this.underlay);
    */
  }

  @Output() onMenuClicked: EventEmitter<boolean> = new EventEmitter();
  public onMenuButton() {
    this.onMenuClicked.emit(true);
  }


  //private text = "LOS ANGELES, USA";
  private text = "Wedding Filmography"
  public underlay = this.text.split("");

}
