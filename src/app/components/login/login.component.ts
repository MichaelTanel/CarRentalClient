import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  @ViewChild(NgForm) ngForm: NgForm;

  email: string;
  password: string;

  ngOnInit() {
  }

  login() : void {
    // http request
    // if success, route to home page
    // if failure, error message
    console.log(this.email + ' ' + this.password);
    this.clearForm();
  }

  clearForm() : void {
    this.email = "";
    this.password = "";
  }

}
