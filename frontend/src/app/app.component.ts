import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { NgFor } from '@angular/common';
=======
import { SignupComponent } from './components/signup/signup.component';
>>>>>>> f8caa308780e02dbf969a0efcffd8a2d92f1d476
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
<<<<<<< HEAD
    NgFor,
=======
    SignupComponent
>>>>>>> f8caa308780e02dbf969a0efcffd8a2d92f1d476
  ],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
}
