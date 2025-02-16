import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesTabMphComponent } from './planes-tab-mph.component';

describe('PlanesTabMphComponent', () => {
  let component: PlanesTabMphComponent;
  let fixture: ComponentFixture<PlanesTabMphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesTabMphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesTabMphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
