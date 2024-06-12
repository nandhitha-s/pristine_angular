import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';            
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [{ path: "", component: HomeComponent },
{ path: "posts", component: PostsComponent },
{ path: "login", component: LoginComponent },
{ path:"signup", component: SignupComponent },
{ path: "**", redirectTo: "" }];
export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(), provideAnimationsAsync(),
    provideHttpClient(), provideAnimationsAsync(),
    provideRouter(routes),
  ],
};
