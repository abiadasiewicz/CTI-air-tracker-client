import {Component} from '@angular/core';
import {PlanesTrackerComponent} from './components/planes-tracker/planes-tracker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    PlanesTrackerComponent
  ],
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
