import { Component, Input, Output, EventEmitter } from '@angular/core';
//animation imports
import { trigger, state, style, animate, transition, query, stagger, group } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('menuAnimation',
    [
      transition(':enter',
        [
          style({opacity: 0}),
          animate('0.75s', style({opacity: 1.0}))
        ]
      ),
      transition(':leave',
        [
          style({opacity: 1.0, width: '100vw', 'max-width': '110%'}),
          animate('0.25s', style({opacity: 0}))
        ]
      ),
    ]
    ),
    trigger('menuItemAnimation',
    [
      transition(':enter', 
      [
        query('.menu-item-animate',
        [
          style({ opacity: 0, 'transform': 'translateX(100px)' }),
          stagger(100, 
            [
              group(
                [
                  animate('0.5s', style({opacity: 1.0})),
                  animate('0.25s', style({'transform': 'translateX(0px)'}))
                ]
              )
            ]
            )
        ]
        )
      ]
      ),
    ]
    ),
  ]
})
export class MenuComponent {

  @Input() showMenu: boolean = false;

  @Output() onBackClicked = new EventEmitter<boolean>;
  public onBackButton() {
    this.onBackClicked.emit(false);
  }

}
