import { TestBed } from '@angular/core/testing';

import { JournauxserviceService } from './journauxservice.service';

describe('JournauxserviceService', () => {
  let service: JournauxserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournauxserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
