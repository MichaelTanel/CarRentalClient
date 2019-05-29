import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  firstName: string;
  lastName: string;
  email: string;
  password: string;

  ngOnInit() {
  }

  register() : void {
    console.log(this.firstName + " " + this.lastName + " " + this.email + " " + this.password);
  }

}
