import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch())
  ]
};
