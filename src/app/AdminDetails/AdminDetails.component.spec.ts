/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminDetailsComponent } from './adminDetails.component';
import { HttpClientModule } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { AdminNavbarComponent } from '../AdminNavbar/adminNavbar.component';
import { SearchComponent } from '../Search/search.component';
import { OrderModule } from 'ngx-order-pipe';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

describe('AdminDetailsComponent', () => {
  let component: AdminDetailsComponent;
  let fixture: ComponentFixture<AdminDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDetailsComponent, AdminNavbarComponent, SearchComponent, NgModel],
      imports:[HttpClientModule, OrderModule, RouterOutlet, RouterLinkActive, FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [AdminDetailsComponent],
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
