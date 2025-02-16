import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesTableComponent } from './planes-table.component';

describe('PlanesTableComponent', () => {
  let component: PlanesTableComponent;
  let fixture: ComponentFixture<PlanesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
