import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolbarComponent } from './maintoolbar.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';

describe('MainToolbarComponent', () => {
  let component: MainToolbarComponent;
  let fixture: ComponentFixture<MainToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainToolbarComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
      ],
      imports: [
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        AppRoutingModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatProgressSpinnerModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
