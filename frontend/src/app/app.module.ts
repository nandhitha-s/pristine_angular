import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { routes } from './app.routes'
import { HttpClientModule } from "@angular/common/http" 

//import { AppRoutingModule } from './app-routing.module'; 
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
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { PostsComponent } from "./components/post/post.component";
import { PostService } from "./services/post.service";
@NgModule({
    declarations: [
        AppComponent, NavigationComponent, SignupComponent, LoginComponent, HomeComponent,PostsComponent
    ],
    imports: [
      BrowserModule,
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
        HttpClientModule,
        RouterLink,RouterOutlet,RouterLinkActive,PostsComponent,MatCardModule,MatIconModule,MatButtonModule,MatToolbarModule
    ],
    providers: [
        {
            provide: HttpClient,
            useFactory: withFetch 
          },
          PostService,
    ],
    bootstrap: [AppComponent]
})


export class AppModule { }

