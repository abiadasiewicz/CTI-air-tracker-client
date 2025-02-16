import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {PlanesFrameGeneratorService} from './services/planes-frame-generator.service';
import {PlanesHistoryService} from './services/planes-history.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), PlanesFrameGeneratorService, PlanesHistoryService]
};
