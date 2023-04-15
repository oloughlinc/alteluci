import { Component } from '@angular/core';

//animation imports
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  
  // this is menu animation and all of this belongs in a menu componennt
  animations: [
    trigger('menuAnimation',
    [
      transition(':enter',
        [
          style({opacity: 0}),
          animate('0.5s', style({opacity: 0.9}))
        ]
      ),
      transition(':leave',
        [
          style({opacity: 0.9}),
          animate('0.5s', style({opacity: 0}))
        ]
      ),
    ]
    )
  ],
  

})
export class HomeComponent {

  showMenu = false;

  public toggleMenu(){
    this.showMenu = !this.showMenu;
  }

}
