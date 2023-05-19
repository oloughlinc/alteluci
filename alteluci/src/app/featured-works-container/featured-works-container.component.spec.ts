import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedWorksContainerComponent } from './featured-works-container.component';

describe('FeaturedWorksContainerComponent', () => {
  let component: FeaturedWorksContainerComponent;
  let fixture: ComponentFixture<FeaturedWorksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedWorksContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedWorksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
