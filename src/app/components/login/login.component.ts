import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  onSubmit() {
    this.login();
  }

  login() : void {
    console.log("form" + this.loginForm.value);
    // http request
    // if success, route to home page
    // if failure, error message
    // console.log(this.email + ' ' + this.password);
    // this.clearForm();
  }

  // clearForm() : void {
  //   // this.password = "";
  // }

}
