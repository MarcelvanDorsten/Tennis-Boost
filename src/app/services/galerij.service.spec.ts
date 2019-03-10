import { TestBed } from '@angular/core/testing';

import { GalerijService } from './galerij.service';

describe('GalerijService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalerijService = TestBed.get(GalerijService);
    expect(service).toBeTruthy();
  });
});
