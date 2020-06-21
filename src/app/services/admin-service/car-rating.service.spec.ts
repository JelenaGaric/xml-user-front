import { TestBed } from '@angular/core/testing';

import { CarRatingService } from './car-rating.service';

describe('CarRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarRatingService = TestBed.get(CarRatingService);
    expect(service).toBeTruthy();
  });
});
