/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateService } from './update.service';
import { HttpClientModule } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';

describe('Service: Update', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateService],
      imports:[HttpClientModule]
    });
  });

  it('should ...', inject([UpdateService], (service: UpdateService) => {
    expect(service).toBeTruthy();
  }));
});

beforeEach(async () => {
  await TestBed.configureTestingModule({
    providers: [
      {
        provide: NGXLogger,
        useValue: {
          // Create a mock of NGXLogger if needed
        },
      },UpdateService
    ],
  }).compileComponents();
});
