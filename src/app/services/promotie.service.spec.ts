import { TestBed } from '@angular/core/testing';

import { PromotieService } from './promotie.service';

describe('PromotieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotieService = TestBed.get(PromotieService);
    expect(service).toBeTruthy();
  });
});
