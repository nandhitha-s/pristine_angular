import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { Routes } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatToolbarModule,RouterLink,RouterModule,RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  constructor(private router: Router){}
  signup(){
    console.log("signup");
    // this.router.navigate(['/signup']);
  }
}
