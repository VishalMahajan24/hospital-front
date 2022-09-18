import { TestBed } from '@angular/core/testing';

import { GetPatService } from './get-pat.service';

describe('GetPatService', () => {
  let service: GetPatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
