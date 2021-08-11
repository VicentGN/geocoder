import { TestBed } from '@angular/core/testing';

import { CoordinatesToMapService } from './coordinates-to-map.service';

describe('CoordinatesToMapService', () => {
  let service: CoordinatesToMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinatesToMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
