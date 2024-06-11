import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataDisplayComponent } from './components/data-display/data-display.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
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
  ],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
}
