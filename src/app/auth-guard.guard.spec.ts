import { TestBed, async, inject } from '@angular/core/testing';

import { GuardGuard } from './auth-guard.guard';

describe('AuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardGuard]
    });
  });

  it('should ...', inject([GuardGuard], (guard: GuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
