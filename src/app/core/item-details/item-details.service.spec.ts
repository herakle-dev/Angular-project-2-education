import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemDetailsService } from './item-details.service';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { ItemDetailsComponent } from './item-details.component';

describe('ItemDetailsService', () => {
  let service: ItemDetailsService;
  let httpMock: HttpTestingController;
  let component: ItemDetailsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ItemDetailsService, SearchBarService]
    });

    service = TestBed.inject(ItemDetailsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get item key correctly', () => {
    const key = 'test_key';
    service.setKey(key);
    expect(service.getKey()).toEqual(key);
  });

  it('should make HTTP request to get item details', () => {
    const mockItemInfo = { title: 'Book 1', description: 'Description of Book 1', covers: ['cover1', 'cover2'] };
    const key = 'test_key';

    service.setKey(key);
    service.getItemDetails().subscribe((response) => {
      expect(response).toEqual(mockItemInfo);
    });

    const req = httpMock.expectOne(`${service.url}${key}.json`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItemInfo);
  });

  it('should navigate to details page correctly', () => {
    const mockTitle = 'Book Title';
    const mockKey = 'test_key';
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    service.goDetails(mockTitle, mockKey);

    const expectedUrl = `home/details/${mockTitle.replace(/\s/g, '_')}`;
    expect(navigateSpy).toHaveBeenCalledWith([expectedUrl]);
    expect(service.getKey()).toEqual(mockKey);
  });
  it('should navigate to details page correctly for title array', () => {
    const mockTitles = ['Book Title 1', 'Book Title 2'];
    const mockKey = 'test_key';
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');

    service.goDetails(mockTitles[0], mockKey);

    const expectedUrl = `home/details/${mockTitles[0].replace(/\s/g, '_')}`;
    expect(navigateSpy).toHaveBeenCalledWith([expectedUrl]);
    expect(service.getKey()).toEqual(mockKey);
  });
  it('should navigate to the correct URL with a single title', () => {
    const title = 'Test Title';
    const key = 'test_key';

    spyOn(service, 'setKey');
    spyOn(service.router, 'navigate');

    service.goDetails(title, key);

    expect(service.setKey).toHaveBeenCalledWith(key);
    expect(service.router.navigate).toHaveBeenCalledWith(['home/details/Test_Title']);
  });

});
