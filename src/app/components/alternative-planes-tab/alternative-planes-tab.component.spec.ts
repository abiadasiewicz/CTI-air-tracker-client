import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlternativePlanesTabComponent} from './alternative-planes-tab.component';

describe('AlternativePlanesTabComponent', () => {
  let component: AlternativePlanesTabComponent;
  let fixture: ComponentFixture<AlternativePlanesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlternativePlanesTabComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AlternativePlanesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
