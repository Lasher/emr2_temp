import { TestBed, inject } from '@angular/core/testing';

import { CardexService } from './cardex.service';

describe('CardexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardexService]
    });
  });

  it('should be created', inject([CardexService], (service: CardexService) => {
    expect(service).toBeTruthy();
  }));
});
