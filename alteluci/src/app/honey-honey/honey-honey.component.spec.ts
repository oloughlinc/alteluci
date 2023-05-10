import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyHoneyComponent } from './honey-honey.component';

describe('HoneyHoneyComponent', () => {
  let component: HoneyHoneyComponent;
  let fixture: ComponentFixture<HoneyHoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyHoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyHoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
