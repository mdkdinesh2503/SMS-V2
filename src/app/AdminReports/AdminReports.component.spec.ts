/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminReportsComponent } from '../AdminReports/adminReports.component';
import { HttpClientModule } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { AdminNavbarComponent } from '../AdminNavbar/adminNavbar.component';
import { SearchComponent } from '../Search/search.component';
import { OrderModule } from 'ngx-order-pipe';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, NgControl, NgModel, ReactiveFormsModule } from '@angular/forms';

describe('AdminReportsComponent', () => {
  let component: AdminReportsComponent;
  let fixture: ComponentFixture<AdminReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReportsComponent, AdminNavbarComponent, SearchComponent, NgModel ],
      providers:[],
      imports:[HttpClientModule, OrderModule, RouterOutlet, RouterLinkActive, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [AdminReportsComponent],
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
