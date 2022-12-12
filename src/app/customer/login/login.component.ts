import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private route: ActivatedRoute, private role: Router) { }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.email = params['email'];
      this.password = params['password'];
    });
  }
  email = '';
  password = '';
  erroremail = '';
  errorpassword = '';


  userCred = {
    id: "user@gmail.com",
    password: "User@123"
  }

  adminCred = {
    id: "admin@gmail.com",
    password: "Admin@123"
  }


  isEmailValid = true;
  isPasswordValid = true;

  getUseridValue(event: any) {
    this.email = event.target.value;
    var pattern = /\S+@\S+\.\S+/;

    if (this.email.length < 1) {
      this.erroremail = 'Email should not be empty';
      this.isEmailValid = false;
    } else if (!pattern.test(this.email)) {
      this.erroremail = 'Email should be like abc@gmail.com';
      this.isEmailValid = false;
    } else {
      this.erroremail = '';
      this.isEmailValid = true;
    }
  }
  getPasswordValue(event: any) {
    this.password = event.target.value;
    var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (this.password.length < 1) {
      this.errorpassword = 'Password should  not be empty';
      this.isPasswordValid = false;
    } else if (!pattern.test(this.password)) {
      this.errorpassword =
        'Password should  contain capital letter, small letter, special character';
      this.isPasswordValid = false;
    } else {
      this.errorpassword = '';
      this.isPasswordValid = true;
    }
  }

  login() {
    if (this.isEmailValid && this.isPasswordValid) {
      if (this.email == this.userCred.id && this.password == this.userCred.password) {
        this.role.navigate(['\menu']);
      } else if (this.email == this.adminCred.id && this.password == this.adminCred.password) {
        this.role.navigate(['\dashboard']);
      } else {
        alert("You don't have an Account")
      }
    }
  }

}
