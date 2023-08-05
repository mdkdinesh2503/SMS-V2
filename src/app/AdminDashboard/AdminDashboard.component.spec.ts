/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminDashboardComponent } from './AdminDashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AdminNavbarComponent } from '../AdminNavbar/AdminNavbar.component';
import { RouterLinkActive, RouterOutlet } from '@angular/router';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardComponent, AdminNavbarComponent],
      providers:[DatePipe],
      imports:[HttpClientModule, RouterOutlet, RouterLinkActive],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
