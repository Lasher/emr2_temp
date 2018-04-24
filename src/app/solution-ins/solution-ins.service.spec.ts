import { TestBed, inject } from '@angular/core/testing';

import { SolutionInsService } from './solution-ins.service';

describe('SolutionInsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SolutionInsService]
    });
  });

  it('should be created', inject([SolutionInsService], (service: SolutionInsService) => {
    expect(service).toBeTruthy();
  }));
});
