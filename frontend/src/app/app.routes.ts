import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostsComponent } from './components/post/post.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: PostsComponent },
  { path: 'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path: 'cart', component: CartComponent},
 { path: '**', redirectTo: '' },
//  {
//   path: '',
//   redirectTo: 'posts',
//   pathMatch: 'full'
// },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
// }
