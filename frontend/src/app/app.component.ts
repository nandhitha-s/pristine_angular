<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
=======
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
>>>>>>> 7658a4b34e2d8eabeef2058478e2fc2657761faf
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';

//import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
//import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    DataDisplayComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeComponent,
    PostComponent,
    HttpClientModule,
    NgFor,
    NgIf,
<<<<<<< HEAD
    SignupComponent
=======
    SignupComponent,
    RouterModule,
    RouterLink,
>>>>>>> 7658a4b34e2d8eabeef2058478e2fc2657761faf
  ],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("route",this.router.config);
  }
}
