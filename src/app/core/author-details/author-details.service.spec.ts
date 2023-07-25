import { TestBed } from '@angular/core/testing';
import { AuthorDetailsService } from './author-details.service';
import { Router } from '@angular/router';
import { ItemDetailsService } from '../item-details/item-details.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthorDetailsService', () => {
  let service: AuthorDetailsService;
  let router: Router;
  let itemDetailsService: ItemDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorDetailsService, ItemDetailsService, { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }],
    imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AuthorDetailsService);
    router = TestBed.inject(Router);
    itemDetailsService = TestBed.inject(ItemDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should navigate to details page with single title', () => {
    const mockTitle = 'Sample Title';
    const mockKey = 'sample_key';
    spyOn(itemDetailsService, 'setKey');

    service.goDetails(mockTitle, mockKey);

    expect(itemDetailsService.setKey).toHaveBeenCalledWith(mockKey);
    expect(router.navigate).toHaveBeenCalledWith(['home/details/author/Sample_Title']);
  });

  it('should navigate to details page with multiple titles', () => {
    const mockTitles = ['Title 1'];
    const mockKey = 'sample_key';
    spyOn(itemDetailsService, 'setKey');

    service.goDetails(mockTitles, mockKey);
    expect(itemDetailsService.setKey).toHaveBeenCalledWith(mockKey);
    expect(router.navigate).toHaveBeenCalledWith(['home/details/author/Title_1']);

  });
});
