import {Component, DestroyRef, inject, Input} from '@angular/core';
import {PlanesTableComponent} from '../../common/components/planes-table/planes-table.component';
import {PlaneFrame} from '../../models/plane-frame.model';
import {PlanesHistoryService} from '../../services/planes-history.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {first} from 'rxjs';

@Component({
  selector: 'app-planes-tab-mph',
  imports: [
    PlanesTableComponent
  ],
  templateUrl: './planes-tab-mph.component.html',
  styleUrl: './planes-tab-mph.component.scss'
})
export class PlanesTabMphComponent {
  @Input() planeFrames: PlaneFrame[] = [];
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
