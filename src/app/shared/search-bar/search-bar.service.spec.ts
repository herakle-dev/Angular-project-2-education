import { SearchBarService } from './search-bar.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { takeUntil } from 'rxjs/operators';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('SearchBarService', () => {
  let service: SearchBarService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppRoutingModule],
      providers: [SearchBarService],
    });
    service = TestBed.inject(SearchBarService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create the correct API URL for subject', () => {
    service.textInput.setValue('test');
    service.selectedOption.setValue('subject');
    service.languageInput.setValue('ita');

    service.search();

    expect(service.apiUrl).toBe(
      'https://openlibrary.org/subjects/test.json?q=language:ita&limit=50&offset=0'
    );
  });

  it('should create the correct API URL for title', () => {
    service.textInput.setValue('test');
    service.selectedOption.setValue('title');
    service.languageInput.setValue('ita');

    service.search();

    expect(service.apiUrl).toBe(
      'https://openlibrary.org/search.json?title=test&q=language:ita&limit=50&offset=0'
    );
  });

  it('should create the correct API URL for author', () => {
    service.textInput.setValue('test');
    service.selectedOption.setValue('author');
    service.languageInput.setValue('ita');

    service.search();

    expect(service.apiUrl).toBe(
      'https://openlibrary.org/search.json?author=test&q=language:ita&limit=50&offset=0'
    );
  });
  it('should make an HTTP GET request to fetchThingsfromAPI()', () => {
    service.textInput.setValue('test');
    service.selectedOption.setValue('title');
    service.languageInput.setValue('ita');
    service.search();
    const apiUrl = service.apiUrl;
    console.log(apiUrl);
    const mockResponse = { data: 'test response' };

    service.fetchThingsfromAPI(apiUrl).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should make an HTTP GET request with the correct URL', () => {
    const mockResponse = { data: 'test response' };

    const text = 'test_title';
    const limit = 50;
    const offset = 0;

    service.textInput.setValue(text);
    service.selectedOption.setValue('title');
    service.languageInput.setValue('ita');

    const apiUrl = service.apiUrl;

    service
      .fetchResultsWithOffset(text, limit, offset)
      .subscribe((response) => {
        expect(response).toEqual(mockResponse);
      });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
  it('should navigate to the correct URL before making the HTTP GET request', fakeAsync(() => {
    const text = 'test';
    const limit = 50;
    const offset = 0;

    service.textInput.setValue(text);
    service.selectedOption.setValue('title');
    service.languageInput.setValue('ita');
    service.search();

    // Get the expected URL using the URLmaker method
    const currentPage = service.paginationService.getCurrentPage();
    service.URLmaker(
      service.textInput.value,
      service.selectedOption.value,
      limit,
      offset,
      service.languageInput.value
    );
    const expectedUrl = service.apiUrl;

    spyOn(service.router, 'navigate');

    service.fetchResultsWithOffset(text, limit, offset).subscribe(() => {
      expect(service.router.navigate).toHaveBeenCalledWith([
        `home/search/${service.languageInput.value}∼/${service.selectedOption.value}/${text}/1`,
      ]);
    });

    tick();
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');

    req.flush({});
  }));
});
