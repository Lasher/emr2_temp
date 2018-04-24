import { TestBed, inject } from '@angular/core/testing';

import { DrugInsService } from './drug-ins.service';

describe('DrugInsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrugInsService]
    });
  });

  it('should be created', inject([DrugInsService], (service: DrugInsService) => {
    expect(service).toBeTruthy();
  }));
});
