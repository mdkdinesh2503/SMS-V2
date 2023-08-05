/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentReviewComponent } from './StudentReview.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NGXLogger } from 'ngx-logger';
import { StudentNavbarComponent } from '../StudentNavbar/StudentNavbar.component';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive, RouterOutlet } from '@angular/router';

describe('AdminRegisterEditComponent', () => {
  let component: StudentReviewComponent;
  let fixture: ComponentFixture<StudentReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReviewComponent, StudentNavbarComponent ],
      providers:[DatePipe],
      imports:[HttpClientModule, FormsModule, RouterOutlet, RouterLinkActive]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [StudentReviewComponent],
    providers: [
      {
        provide: NGXLogger,
        useValue: {
          // Create a mock of NGXLogger if needed
        },
      },
    ],
  }).compileComponents();
});
