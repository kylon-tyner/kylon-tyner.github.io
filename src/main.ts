import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


declare global {
  interface Window {
    dataLayer: any[];
  }
}

window.dataLayer = window.dataLayer || [];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
