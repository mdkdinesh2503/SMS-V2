import { TestBed } from '@angular/core/testing';

import { MaintanenceGuard } from './maintanence.guard';

describe('MaintanenceGuard', () => {
  let guard: MaintanenceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaintanenceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
