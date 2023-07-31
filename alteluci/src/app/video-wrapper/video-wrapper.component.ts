import { Component, Input, OnInit } from '@angular/core';
//animation imports
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-wrapper',
  templateUrl: './video-wrapper.component.html',
  styleUrls: ['./video-wrapper.component.css'],
  animations: [
    trigger('vid-fade-anim',
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
          animate('1.0s', style({opacity: 0}))
        ]
      ),
    ]
    ),
  ],
})
export class VideoWrapperComponent implements OnInit {

  public play = false;
  public playButton = "../../assets/images/butt-play.png";
  public urlLink!: SafeResourceUrl;
  public vidName!: string;

  @Input() name!: string;
  @Input() link!: string;
  @Input() image!: string;
  @Input() darkPlayButton!: boolean;

  @Input() stopVid: boolean = false;

  ngOnInit(): void {
    if (this.darkPlayButton) {
      this.playButton = "../../assets/images/butt-play-drk.png"
    }
    this.urlLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
    this.vidName = this.name;
  }

  constructor(private sanitizer: DomSanitizer) {
  }

  public onPlayClick() {
    this.play = true;
  }

  ngOnChanges() {
    if (this.stopVid) {
      this.play = false;
      this.stopVid = false;
    }
  }



}
