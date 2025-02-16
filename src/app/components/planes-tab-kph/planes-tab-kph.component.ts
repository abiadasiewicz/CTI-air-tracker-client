import {Component, DestroyRef, inject, Input} from '@angular/core';
import {PlaneFrame} from '../../models/plane-frame.model';
import {PlanesTableComponent} from '../../common/components/planes-table/planes-table.component';
import {PlanesHistoryService} from '../../services/planes-history.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {first} from 'rxjs';

@Component({
  selector: 'app-planes-tab-kph',
  imports: [
    PlanesTableComponent
  ],
  templateUrl: './planes-tab-kph.component.html',
  styleUrl: './planes-tab-kph.component.scss'
})
export class PlanesTabKphComponent {
  @Input() planeFrames!: PlaneFrame[];
  destroyRef = inject(DestroyRef)

  constructor(private planesHistoryService: PlanesHistoryService) {
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
