/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentTimetableComponent } from './StudentTimetable.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentNavbarComponent } from '../StudentNavbar/StudentNavbar.component';
import { RouterLinkActive, RouterOutlet } from '@angular/router';

describe('StudentTimetableComponent', () => {
  let component: StudentTimetableComponent;
  let fixture: ComponentFixture<StudentTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTimetableComponent, StudentNavbarComponent ],
      imports:[HttpClientModule, RouterOutlet, RouterLinkActive],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
