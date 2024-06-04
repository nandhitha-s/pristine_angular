import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';            
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes: AppRoutingModule.routes),
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
};
