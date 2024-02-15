import { TestBed } from '@angular/core/testing';

import { LignepanierserviceService } from './lignepanierservice.service';

describe('LignepanierserviceService', () => {
  let service: LignepanierserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignepanierserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
