import { TestBed } from '@angular/core/testing';

import { AddPatService } from './add-pat.service';

describe('AddPatService', () => {
  let service: AddPatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
