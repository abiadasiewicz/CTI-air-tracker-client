import {Injectable} from '@angular/core';
import {generatePlaneCodes} from '../common/utils/icao-number-generator';
import {PlaneFrame} from '../models/plane-frame.model';
import dayjs from 'dayjs';
import {interval, map, Observable, shareReplay, startWith} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanesFrameGeneratorService {
  private planeFrames$: Observable<PlaneFrame[]>;
  planeCodes: string[] = [];

  constructor() {
    this.planeCodes = Array.from({length: 5}, () => generatePlaneCodes());

    this.planeFrames$ = interval(1000).pipe(
      startWith(0),
      map(() => this.planeCodes.map(icao => this.generateFrame(icao))),
      shareReplay(1)
    );
  }

  getPlaneFrames(): Observable<PlaneFrame[]> {
    return this.planeFrames$;
  }

  private generateFrame(icao: string): PlaneFrame {
    return {
      icao,
      speed: parseFloat((Math.random() * 1000).toFixed(2)),
      lat: parseFloat((Math.random() * 180 - 90).toFixed(4)),
      lon: parseFloat((Math.random() * 360 - 180).toFixed(4)),
      alt: Math.floor(Math.random() * 12000),
      timestamp: dayjs().format('YYYY-MM-DD-hh-mm'),
    };
  }
}
