import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVidComponent } from './hero-vid.component';

describe('HeroVidComponent', () => {
  let component: HeroVidComponent;
  let fixture: ComponentFixture<HeroVidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroVidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroVidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
