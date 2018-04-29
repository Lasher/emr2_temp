import { TestBed, inject } from '@angular/core/testing';

import { InnerMenuService } from './inner-menu.service';

describe('InnerMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InnerMenuService]
    });
  });

  it('should be created', inject([InnerMenuService], (service: InnerMenuService) => {
    expect(service).toBeTruthy();
  }));
});
