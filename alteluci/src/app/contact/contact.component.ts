import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formData!: FormGroup;
  deets: string = "SPILL THE DEETS. WHAT ARE YOU IN TO? HOBBIES? FOOD? MUSIC?\nWHAT MAKES YOUR HEART BEAT FASTER?";

  constructor(private builder: FormBuilder, private email: EmailService) {}

  ngOnInit(): void {
    this.formData = this.builder.group({
      Name: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl(''),
      Date: new FormControl('', Validators.required),
      About: new FormControl('', Validators.required),
    })
  }

  public onSubmit() {
    this.submitClicked = true;
    if (this.formData.valid) {
      console.log(this.formData.value);
      this.email.SendEmail(this.formData.value)
        .subscribe(response => {
          console.log(response);
        })
    } else {
      // console.log("not valid");
    }
  }

  // this little baby is a formdata handle for the html
  get f() { return this.formData.controls; }

  public submitClicked = false;

}
