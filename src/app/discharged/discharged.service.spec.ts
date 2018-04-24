import { TestBed, inject } from '@angular/core/testing';

import { DischargedService } from './discharged.service';

describe('DischargedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DischargedService]
    });
  });

  it('should be created', inject([DischargedService], (service: DischargedService) => {
    expect(service).toBeTruthy();
  }));
});
