import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let validEmail = "test@gmail.com";
  let validPassword = "user";

  let authService: AuthenticationService;
  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        MatCardModule,
        FormsModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        RouterModule,
        MatInputModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientTestingModule        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    authService = TestBed.get(AuthenticationService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should clear form', () => {
  //   component.email = validEmail;
  //   component.password = validPassword;
  //   component.login();
  //   expect(component.email).toEqual("");
  //   expect(component.password).toEqual("");
  // });

  it('returned Observable should match the right data', () => {
    let mockUser = new User();
    mockUser.email = validEmail;
    mockUser.firstName = 'test';
    mockUser.lastName = 'user';
    
    authService.login(validEmail, validPassword)
      .subscribe(user => {
        expect(user.firstName).toEqual('test');
        expect(user.lastName).toEqual('user');
      });

    const req = httpTestingController.expectOne('http://localhost:8081/login');

    expect(req.request.method).toEqual('POST');

    req.flush(mockUser);
  });

  it('empty form should be invalid', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    let form = component.loginForm;
    form.controls.email.setValue(validEmail);
    form.controls.password.setValue(validPassword);

    expect(form.valid).toBeTruthy();
  });

  it('form should not be valid', () => {
    let form = component.loginForm;
    form.controls.email.setValue(validEmail);
    expect(form.valid).toBeFalsy();
  });
});
