import { TestBed } from '@angular/core/testing';

import { CarSearchServiceService } from './car-search-service.service';

describe('CarSearchServiceService', () => {
  let service: CarSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
