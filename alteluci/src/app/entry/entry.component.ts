import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//animation imports
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
  animations: [
    trigger('entryAnim',
      [
        transition(':leave',
        [
          style({opacity: 1}),
          animate('0.5s', style({opacity:0}))
        ]
        )
      ]
    )
  ]
})
export class EntryComponent implements OnInit {

    @Input() shouldShow: boolean = true;
    @Output() entryComplete = new EventEmitter<boolean>();

    ngOnInit() {
      setTimeout(() => {
        this.shouldShow = false;
      }, 500);
      setTimeout(() => {
        this.entryComplete.emit(true);
      }, 1000); // shouldShow + animate (500 + 500)
      
    }
}
