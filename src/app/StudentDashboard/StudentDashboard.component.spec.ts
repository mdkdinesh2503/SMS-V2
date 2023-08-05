/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentDashboardComponent } from './StudentDashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { StudentNavbarComponent } from '../StudentNavbar/StudentNavbar.component';
import { RouterLinkActive, RouterOutlet } from '@angular/router';

describe('StudentDashboardComponent', () => {
  let component: StudentDashboardComponent;
  let fixture: ComponentFixture<StudentDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDashboardComponent, StudentNavbarComponent ],
      imports:[HttpClientModule, RouterOutlet, RouterLinkActive],
      providers:[DatePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
