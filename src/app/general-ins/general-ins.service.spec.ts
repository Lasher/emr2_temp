import { TestBed, inject } from '@angular/core/testing';

import { GeneralInsService } from './general-ins.service';

describe('GeneralInsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralInsService]
    });
  });

  it('should be created', inject([GeneralInsService], (service: GeneralInsService) => {
    expect(service).toBeTruthy();
  }));
});
