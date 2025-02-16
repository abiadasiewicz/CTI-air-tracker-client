import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PlanesFrameGeneratorService} from './planes-frame-generator.service';
import {PlaneFrame} from '../models/plane-frame.model';
import {map, scan, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PlanesHistoryService {
  private readonly MAX_HISTORY_LENGTH = 20;
  private historySubject = new BehaviorSubject<PlaneFrame[]>([]);

  constructor(private generator: PlanesFrameGeneratorService) {
  }

  getHistoryByICAO(icao: string) {
    return this.historySubject.pipe(
      map(history => history.filter(frame => frame.icao === icao))
    );
  }

  generateHistoryFrames(): Observable<PlaneFrame[]> {
    return this.generator.getPlaneFrames().pipe(
      scan((history, frames) => this.updateHistory(frames, history), {} as Record<string, PlaneFrame[]>),
      map(history => Object.values(history).flat()),
      tap(history => this.historySubject.next(history)),
    )
  }

  private updateHistory(frames: PlaneFrame[], history: Record<string, PlaneFrame[]>): Record<string, PlaneFrame[]> {
    frames.forEach(frame => {
      const icaoHistory = history[frame.icao] ?? [];
      icaoHistory.push(frame);
      if (icaoHistory.length > this.MAX_HISTORY_LENGTH) {
        icaoHistory.shift();
      }
      history[frame.icao] = icaoHistory;
    });
    return history;
  }
}
