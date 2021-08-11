import { TestBed } from '@angular/core/testing';

import { GetFullDataService } from './get-full-data.service';

describe('GetFullDataService', () => {
  let service: GetFullDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFullDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
