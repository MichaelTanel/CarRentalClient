import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  email: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    // http request
    // if success, route to home page
    // if failure, error message
    console.log(this.email + ' ' + this.password);
  }

}
