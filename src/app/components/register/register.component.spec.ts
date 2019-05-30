import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear form', () => {
    component.email = "test@gmail.com";
    component.firstName = "test";
    component.lastName = "user";
    component.password = "H4lk2joi4";
    component.register();
    expect(component.email).toEqual("");
    expect(component.firstName).toEqual("");
    expect(component.lastName).toEqual("");
    expect(component.password).toEqual("");
  });
});
