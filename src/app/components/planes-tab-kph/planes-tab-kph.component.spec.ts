import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesTabKphComponent } from './planes-tab-kph.component';

describe('PlanesTabKphComponent', () => {
  let component: PlanesTabKphComponent;
  let fixture: ComponentFixture<PlanesTabKphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesTabKphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesTabKphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
