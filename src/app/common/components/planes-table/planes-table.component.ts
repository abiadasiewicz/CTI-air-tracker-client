import {Component, Input, OnChanges, output, SimpleChanges} from '@angular/core';
import {PlaneFrame} from '../../../models/plane-frame.model';
import {KphToMphPipe} from '../../pipes/kph-to-mph.pipe';
import {FilterComponent} from '../filter/filter.component';

@Component({
  selector: 'app-planes-table',
  standalone: true,
  imports: [
    KphToMphPipe,
    FilterComponent,
  ],
  templateUrl: './planes-table.component.html',
  styleUrls: ['./planes-table.component.scss']
})
export class PlanesTableComponent implements OnChanges {
  @Input() planes: PlaneFrame[] = [];
  @Input() speedUnit: SpeedUnit = 'kmph';
  @Input() withFiltering: boolean = false;
  onSelectPlane = output<string>()

  visiblePlanesFrames: PlaneFrame[] = [];
  private activeFilter: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['planes']) {
      this.applyFilter();
    }
  }

  onFilterChange(value: string): void {
    this.activeFilter = value;
    this.applyFilter();
  }

  private applyFilter(): void {
    if (!this.activeFilter) {
      this.visiblePlanesFrames = this.planes;
    } else {
      this.visiblePlanesFrames = this.planes.filter(plane =>
        plane.icao.toLowerCase().includes(this.activeFilter.toLowerCase())
      );
    }
  }

  selectPlane(icao: string) {
    this.onSelectPlane.emit(icao);
  }
}

type SpeedUnit = 'kmph' | 'mph';
