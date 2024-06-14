import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
// import { Router } from 'express';
import { Router } from "@angular/router";
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm! : FormGroup;
  // router: any;
  constructor(private authservice: AuthService,private router:Router) {}
  ngOnInit() : void {
    this.signupForm = this.createFormGroup(); 
  }
  createFormGroup() : FormGroup {
    return new FormGroup({
      name : new FormControl("", [Validators.required, Validators.minLength(2)]),
      email : new FormControl("", [Validators.required, Validators.email]),
      password : new FormControl("", [Validators.required, Validators.minLength(7)])
    });
  }
  signup(): void {
    console.log(this.signupForm.value);
    // this.router.navigateByUrl('/login');
    this.authservice.signup(this.signupForm.value).subscribe((msg) => console.log(msg));
  //   var mesg = "hello";
  //   console.log(mesg);

   }
  // var msg = "done";
  // signup(): void {
  //   this.authservice.signup(this.signupForm.value).subscribe((msg) => {
  //     console.log(msg);
  //     // this.router.navigate(["login"]);
  //   });
  // }
}

// src/app/components/signup/signup.component.ts
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { AuthService } from '../../services/auth.service';
// import { Router } from "@angular/router";
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, HttpClientModule],
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.scss']
// })
// export class SignupComponent implements OnInit {
//   signupForm!: FormGroup;

//   constructor(private authservice: AuthService, private router: Router) {}

//   ngOnInit(): void {
//     this.signupForm = this.createFormGroup();
//   }

//   createFormGroup(): FormGroup {
//     return new FormGroup({
//       name: new FormControl("", [Validators.required, Validators.minLength(2)]),
//       email: new FormControl("", [Validators.required, Validators.email]),
//       password: new FormControl("", [Validators.required, Validators.minLength(7)])
//     });
//   }

//   signup(): void {
//     if (this.signupForm.valid) {
//       this.authservice.signup(this.signupForm.value).subscribe({
//         next: (msg) => {
//           console.log('Success:', msg);
//           // Uncomment the line below to navigate after successful signup
//           // this.router.navigate(["/login"]);
//         },
//         error: (error) => {
//           console.error('Error:', error);
//         }
//       });
//     }
//   }
// }

