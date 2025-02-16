import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {PlanesTableComponent} from '../../common/components/planes-table/planes-table.component';
import {PlaneFrame} from '../../models/plane-frame.model';
import {PlanesFrameGeneratorService} from '../../services/planes-frame-generator.service';
import {PlanesHistoryService} from '../../services/planes-history.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {first} from 'rxjs';

@Component({
  selector: 'app-alternative-planes-tab',
  imports: [
    PlanesTableComponent
  ],
  providers: [PlanesFrameGeneratorService, PlanesHistoryService],
  templateUrl: './alternative-planes-tab.component.html',
  styleUrl: './alternative-planes-tab.component.scss'
})
export class AlternativePlanesTabComponent implements OnInit {
  planeFrames!: PlaneFrame[];
  destroyRef = inject(DestroyRef)

  constructor(private generator: PlanesFrameGeneratorService, private planesHistoryService: PlanesHistoryService) {
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

  showHistory(icao: string): void {
    this.planesHistoryService.getHistoryByICAO(icao).pipe(
      takeUntilDestroyed(this.destroyRef),
      first())
      .subscribe(history => {
        console.info(history);
      });
  }
}
