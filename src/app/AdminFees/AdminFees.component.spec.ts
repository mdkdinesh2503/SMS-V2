/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminFeesComponent } from './AdminFees.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from '../AdminNavbar/AdminNavbar.component';
import { SearchComponent } from '../Search/Search.component';
import { OrderModule } from 'ngx-order-pipe';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';

describe('AdminFeesComponent', () => {
  let component: AdminFeesComponent;
  let fixture: ComponentFixture<AdminFeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFeesComponent, AdminNavbarComponent, SearchComponent, NgModel],
      imports:[HttpClientModule, OrderModule, RouterOutlet, RouterLinkActive, FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
