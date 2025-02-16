import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanesMapComponent} from './planes-map.component';

describe('PlanesMapComponent', () => {
  let component: PlanesMapComponent;
  let fixture: ComponentFixture<PlanesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesMapComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlanesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
