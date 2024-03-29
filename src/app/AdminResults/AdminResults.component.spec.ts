/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminResultsComponent } from './adminResults.component';
import { HttpClientModule } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { AdminNavbarComponent } from '../AdminNavbar/adminNavbar.component';
import { SearchComponent } from '../Search/search.component';
import { OrderModule } from 'ngx-order-pipe';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

describe('AdminResultsComponent', () => {
  let component: AdminResultsComponent;
  let fixture: ComponentFixture<AdminResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResultsComponent, AdminNavbarComponent, SearchComponent, NgModel ],
      imports:[HttpClientModule, OrderModule, RouterOutlet, RouterLinkActive, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [AdminResultsComponent],
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

