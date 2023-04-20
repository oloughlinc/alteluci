import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
export class HomeComponent implements OnInit {

  showMenu = false;

  formData!: FormGroup;

  deets: String = "SPILL THE DEETS. WHAT ARE YOU IN TO? HOBBIES? FOOD? MUSIC?\nWHAT MAKES YOUR HEART BEAT FASTER?";

  constructor(
    private builder: FormBuilder,
  ) {}

  ngOnInit() {
    this.formData = this.builder.group({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [Validators.required, Validators.pattern('^(1-)?\d{3}-\d{3}-\d{4}$')]),
      Date: new FormControl('', Validators.required),
      About: new FormControl('', Validators.required),
    })
  }

  public onSubmit(formData: FormData) {
    //pass
  }

  public toggleMenu(){
    this.showMenu = !this.showMenu;
  }

}
