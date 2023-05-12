import { Component, OnInit } from '@angular/core';

//animation imports
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('menuAnimation',
    [
      transition(':enter',
        [
          style({opacity: 0}),
          animate('0.5s', style({opacity: 0.5}))
        ]
      ),
      transition(':leave',
        [
          style({opacity: 0.5}),
          animate('0.5s', style({opacity: 0}))
        ]
      ),
    ]
    ),
    trigger('heroAnimation',
    [
    transition(':enter',
    [
      style({opacity: 0}),
      animate('4.0s 250ms ease-in', style({opacity: 0.9}))
    ]
  ),
  transition(':leave',
    [
      style({opacity: 0.9}),
      animate('0.5s', style({opacity: 0}))
    ]
    ),
  ]
  ),
  trigger('heroAnimation2',
  [
    transition(':enter',
    [
      query('.hero-text-anim',
      [
        style({opacity: 0}),
        stagger(100, 
          [
            animate('2.0s 250ms ease-in', style({opacity: 0.9}))
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
export class HeroComponent implements OnInit {


  ngOnInit(): void {
    /*
    console.log(this.underlay);
    this.underlay.forEach((item, i) => {
      if (item === ' ') this.underlay[i] = '&nbsp';
    })
    console.log(this.underlay);
    */
  }

  showMenu: boolean = false;

  private text = "LOS ANGELES, USA";
  public underlay = this.text.split("");

}
