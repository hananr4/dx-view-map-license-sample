import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import config from 'devextreme/core/config';
import { licenseKey } from '../devextreme-key';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), { provide: 'AppTitle', useValue: 'My App' } 
  ]
};



config({ licenseKey });
