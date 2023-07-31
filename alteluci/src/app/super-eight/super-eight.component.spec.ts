import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperEightComponent } from './super-eight.component';

describe('SuperEightComponent', () => {
  let component: SuperEightComponent;
  let fixture: ComponentFixture<SuperEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperEightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
