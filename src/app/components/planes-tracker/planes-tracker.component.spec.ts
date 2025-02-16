import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesTrackerComponent } from './planes-tracker.component';

describe('PlanesTrackerComponent', () => {
  let component: PlanesTrackerComponent;
  let fixture: ComponentFixture<PlanesTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
