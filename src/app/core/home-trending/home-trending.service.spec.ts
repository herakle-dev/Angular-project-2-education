import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeTrendingService } from './home-trending.service';

describe('HomeTrendingService', () => {
  let service: HomeTrendingService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeTrendingService]
    });

    service = TestBed.inject(HomeTrendingService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch trending items', () => {
    const time = 'now';
    const mockResponse = { works: [{ title: 'Book 1' }, { title: 'Book 2' }] };

    service.fetchTrending(time).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${service.url}/trending/${time}.json?q=language:ita&place=italy&limit=50`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should cancel requests', () => {
    service.cancelRequests();

    expect(service['ngUnsubscribe'].pipe).toBeTruthy();
  });
});
