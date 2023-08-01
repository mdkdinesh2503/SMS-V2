/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NotuploadedComponent } from './notuploaded.component';

describe('NotuploadedComponent', () => {
  let component: NotuploadedComponent;
  let fixture: ComponentFixture<NotuploadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotuploadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotuploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
