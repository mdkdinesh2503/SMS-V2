/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentReportsComponent } from './StudentReports.component';
import { HttpClientModule } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { DatePipe } from '@angular/common';
import { StudentNavbarComponent } from '../StudentNavbar/StudentNavbar.component';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive, RouterOutlet } from '@angular/router';

describe('StudentReportsComponent', () => {
  let component: StudentReportsComponent;
  let fixture: ComponentFixture<StudentReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReportsComponent, StudentNavbarComponent ],
      imports:[HttpClientModule, FormsModule, RouterOutlet, RouterLinkActive]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [StudentReportsComponent],
    providers: [
      {
        provide: NGXLogger,
        useValue: {
          // Create a mock of NGXLogger if needed
        },
      },DatePipe
    ],
  }).compileComponents();
});
