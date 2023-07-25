import { TestBed } from '@angular/core/testing';
import { MainPageService } from './main-page.service';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MainPageService', () => {
  let service: MainPageService;
  let searchBarService: SearchBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainPageService, SearchBarService],
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(MainPageService);
    searchBarService = TestBed.inject(SearchBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize paginatedResults as an empty array', () => {
    expect(service.paginatedResults).toEqual([]);
  });
  it('should update the limit property', () => {
    const newLimit = 20;
    service.limit = newLimit;

    expect(service.limit).toBe(newLimit);
  });
});
