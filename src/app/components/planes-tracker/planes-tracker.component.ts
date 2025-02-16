import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {PlanesTabKphComponent} from '../planes-tab-kph/planes-tab-kph.component';
import {PlanesTabMphComponent} from '../planes-tab-mph/planes-tab-mph.component';
import {PlanesMapComponent} from '../planes-map/planes-map.component';
import {AlternativePlanesTabComponent} from '../alternative-planes-tab/alternative-planes-tab.component';
import {PlaneFrame} from '../../models/plane-frame.model';
import {PlanesFrameGeneratorService} from '../../services/planes-frame-generator.service';
import {PlanesHistoryService} from '../../services/planes-history.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-planes-tracker',
  imports: [
    PlanesTabKphComponent,
    PlanesTabMphComponent,
    PlanesMapComponent,
    AlternativePlanesTabComponent
  ],
  templateUrl: './planes-tracker.component.html',
  styleUrl: './planes-tracker.component.scss'
})
export class PlanesTrackerComponent implements OnInit {
  planeFrames!: PlaneFrame[];
  destroyRef = inject(DestroyRef)

  constructor(private generator: PlanesFrameGeneratorService,
              private planesHistoryService: PlanesHistoryService) {
  }

  ngOnInit(): void {
    this.planesHistoryService.generateHistoryFrames()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();

    this.generator.getPlaneFrames()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(planeFrame => {
        this.planeFrames = planeFrame
      });
  }
}
