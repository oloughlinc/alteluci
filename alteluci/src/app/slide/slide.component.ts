import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

//animation imports
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
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
    ),
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
export class SlideComponent {

  showMenu = false;
  isScrolling = false;

  currSection = 1;

  formData!: FormGroup;

  deets: String = "SPILL THE DEETS. WHAT ARE YOU IN TO? HOBBIES? FOOD? MUSIC?\nWHAT MAKES YOUR HEART BEAT FASTER?";

  constructor(
    private builder: FormBuilder,
  ) {}

  ngOnInit() {
    this.formData = this.builder.group({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl(''),
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

  @HostListener('document:scroll', ['$event'])
  onScroll(event: any) {
    console.log(document.documentElement.scrollTop);
    this.isScrolling = true;

    if (document.documentElement.scrollTop < 500) {
      this.currSection = 1;
    }
    else if (document.documentElement.scrollTop < 1000) {
      this.currSection = 2;
    }
    else {
      this.currSection = 3;
    }

    setTimeout(() => {
      this.isScrolling = false;
    })
  }

}
