import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  router: any;
  constructor() {}
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
  onSubmit(): void {
    console.log(this.signupForm.value);
    // this.router.navigateByUrl('/login');
  }
}

