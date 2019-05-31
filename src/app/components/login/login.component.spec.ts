import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let validEmail = "test@gmail.com";
  let validPassword = "user";

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
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
