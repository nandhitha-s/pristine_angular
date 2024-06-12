import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostComponent } from './components/post/post.component';

export const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
 { path: '**', redirectTo: '' },
//  {
//   path: '',
//   redirectTo: 'home',
//   pathMatch: 'full'
// },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
// }
