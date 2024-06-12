import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
<<<<<<< HEAD
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module'; 
=======
import { routes } from './app.routes'

//import { AppRoutingModule } from './app-routing.module'; 
>>>>>>> 7658a4b34e2d8eabeef2058478e2fc2657761faf
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";
import { CommonModule } from "@angular/common";
<<<<<<< HEAD

=======
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { Routes } from "@angular/router";
>>>>>>> 7658a4b34e2d8eabeef2058478e2fc2657761faf
@NgModule({
    declarations: [
        AppComponent, NavigationComponent, SignupComponent, LoginComponent, HomeComponent
    ],
    imports: [
<<<<<<< HEAD
        BrowserModule,
=======
      BrowserModule,
      
        routes,
>>>>>>> 7658a4b34e2d8eabeef2058478e2fc2657761faf
        NoopAnimationsModule,
        // AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatToolbarModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: HttpClient,
            useFactory: withFetch 
          }
    ],
    bootstrap: [AppComponent]
})


export class AppModule { }

