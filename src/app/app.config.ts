import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import DevExpress from 'devextreme';
import { licenseKey } from '../devextreme-key';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: 'AppTitle', useValue: 'My App' } 
  ]
};


// DevExpress.config({licenseKey: licenseKey})