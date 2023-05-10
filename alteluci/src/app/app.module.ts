import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//material stuff
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { SlideComponent } from './slide/slide.component';
import { FadeComponent } from './fade/fade.component';
import { HoneyHoneyComponent } from './honey-honey/honey-honey.component';
import { HeroComponent } from './hero/hero.component';
import { ProcessComponent } from './process/process.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideComponent,
    FadeComponent,
    HoneyHoneyComponent,
    HeroComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
