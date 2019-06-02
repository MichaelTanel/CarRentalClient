import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit() {
  }

  // Called when login form submits
  onSubmit() {
    this.login();
  }

  login() : void {
    console.log("form" + this.loginForm.value);
    this.authenticationService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value)
      .subscribe(
        (res) => {
          console.log(res);
        }
      );
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
