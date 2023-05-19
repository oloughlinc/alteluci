import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-works-container',
  templateUrl: './featured-works-container.component.html',
  styleUrls: ['./featured-works-container.component.css']
})
export class FeaturedWorksContainerComponent implements OnInit {

  featNum = 0;
  private featMax = 3;

  ngOnInit(): void {
    
  }

  onFeatChangeLeftClick() {
    this.featNum--;
    if (this.featNum < 0) this.featNum = this.featMax;
  }

  onFeatChangeRightClick() {
    this.featNum++;
    if (this.featNum > this.featMax) this.featNum = 0;
  }

}
