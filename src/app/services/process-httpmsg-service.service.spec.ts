import { TestBed } from '@angular/core/testing';

import { ProcessHTTPmsgServiceService } from './process-httpmsg-service.service';

describe('ProcessHTTPmsgServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProcessHTTPmsgServiceService = TestBed.get(ProcessHTTPmsgServiceService);
    expect(service).toBeTruthy();
  });
});
