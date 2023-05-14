import { Component, OnInit, HostListener } from '@angular/core';

//animation imports
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  animations: [
    trigger('heroAnimation',
    [
    transition(':enter',
    [
      style({opacity: 0}),
      animate('3.5s 250ms ease-in', style({opacity: 0.9}))
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
  ],
  

})
export class HomeComponent implements OnInit {

  showMenu = false;
  animationStart: boolean = false;
  isScrolling = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.animationStart = true;
    }, 1500);
  }

  public toggleMenu(menu: boolean){
    this.showMenu = menu;
  }

  @HostListener('document:scroll', ['$event'])
  onScroll(event: any) {
    console.log('Scrolling...');
    console.log(event);
    this.isScrolling = true;

    setTimeout(() => {
      this.isScrolling = false;
    })
  }

}
