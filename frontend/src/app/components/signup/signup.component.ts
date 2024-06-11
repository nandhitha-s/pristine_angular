import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
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
  }
}