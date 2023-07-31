import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

//material stuff
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SlideComponent } from './slide/slide.component';
import { FadeComponent } from './fade/fade.component';
import { HoneyHoneyComponent } from './honey-honey/honey-honey.component';
import { HeroComponent } from './hero/hero.component';
import { ProcessComponent } from './process/process.component';
import { FeaturedComponent } from './featured/featured.component';
import { VideoWrapperComponent } from './video-wrapper/video-wrapper.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './menu/menu.component';
import { EntryComponent } from './entry/entry.component';
import { HeroVidComponent } from './hero-vid/hero-vid.component';
import { FeaturedBannerComponent } from './featured-banner/featured-banner.component';
import { FeaturedWorksContainerComponent } from './featured-works-container/featured-works-container.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FeaturedCarouselComponent } from './featured-carousel/featured-carousel.component';
import { SuperEightComponent } from './super-eight/super-eight.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideComponent,
    FadeComponent,
    HoneyHoneyComponent,
    HeroComponent,
    ProcessComponent,
    FeaturedComponent,
    VideoWrapperComponent,
    ContactComponent,
    MenuComponent,
    EntryComponent,
    HeroVidComponent,
    FeaturedBannerComponent,
    FeaturedWorksContainerComponent,
    FeaturedCarouselComponent,
    SuperEightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressBarModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
