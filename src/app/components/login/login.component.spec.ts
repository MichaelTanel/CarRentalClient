import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
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
        MatInputModule
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

  it('should clear form', () => {
    component.email = validEmail;
    component.password = validPassword;
    component.login();
    expect(component.email).toEqual("");
    expect(component.password).toEqual("");
  });

  // TODO: modify form so that it can be tested.
  // it('form should be valid', () => {
  //   component.email = validEmail;
  //   component.password = validPassword;
  //   expect(component.ngForm.valid).toBeTruthy();
  // });

  // it('form should not be valid', () => {
  //   component.email = validEmail;
  //   // component.password = null;
  //   component.ngForm.controls['email'].setValue('bademail.');
  //   expect(component.ngForm.valid).toBeFalsy();
  // });
});
