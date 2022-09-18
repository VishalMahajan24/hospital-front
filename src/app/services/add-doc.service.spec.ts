import { TestBed } from '@angular/core/testing';

import { AddDocService } from './add-doc.service';

describe('AddDocService', () => {
  let service: AddDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
