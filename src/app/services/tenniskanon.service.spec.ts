import { TestBed } from '@angular/core/testing';

import { TenniskanonService } from './tenniskanon.service';

describe('TenniskanonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TenniskanonService = TestBed.get(TenniskanonService);
    expect(service).toBeTruthy();
  });
});
