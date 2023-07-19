import { TestBed } from '@angular/core/testing';

import { HomeTrendingService } from './home-trending.service';

describe('HomeTrendingService', () => {
  let service: HomeTrendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeTrendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
