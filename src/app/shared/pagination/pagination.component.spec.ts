// Import relevant testing modules and classes
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PaginationComponent } from './pagination.component';
import { PaginationService } from './pagination.service';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let paginationService: PaginationService;
  let searchBarService: SearchBarService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PaginationComponent],
      providers: [PaginationService, SearchBarService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    paginationService = TestBed.inject(PaginationService);
    searchBarService = TestBed.inject(SearchBarService);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should call paginationResultsWithParams with the correct offset', () => {
    spyOn(searchBarService, 'cancelRequests');
    spyOn(searchBarService, 'URLmaker');
    spyOn(searchBarService, 'fetchResultsWithOffset').and.returnValue(of({ works: [], docs: [] }));

    component.paginationResultsWithParams(2);

    expect(searchBarService.cancelRequests).toHaveBeenCalled();
    expect(searchBarService.URLmaker).toHaveBeenCalledOnceWith(
      searchBarService.selectParam,
      searchBarService.textParam,
      searchBarService.limit,
      2 * searchBarService.limit,
      searchBarService.langParam
    );
    expect(searchBarService.fetchResultsWithOffset).toHaveBeenCalledOnceWith(
      searchBarService.textParam,
      searchBarService.limit,
      2 * searchBarService.limit * searchBarService.limit
    );
    // You can also check if the responseArray and other properties are updated as expected.
  });
  it('should call paginationService.goToFirstPage() and paginationResultsWithParams()', () => {
    spyOn(paginationService, 'goToFirstPage');
    spyOn(component, 'paginationResultsWithParams');

    component.goToFirstPage();

    expect(paginationService.goToFirstPage).toHaveBeenCalled();
    expect(component.paginationResultsWithParams).toHaveBeenCalledOnceWith(paginationService.getCurrentPage());
  });
  it('should call paginationService.goToPreviousPage() and paginationResultsWithParams()', () => {
    spyOn(paginationService, 'goToPreviousPage');
    spyOn(component, 'paginationResultsWithParams');

    component.goToPreviousPage();

    expect(paginationService.goToPreviousPage).toHaveBeenCalled();
    expect(component.paginationResultsWithParams).toHaveBeenCalledOnceWith(paginationService.getCurrentPage());
  });
  it('should call paginationService.goToPage() and paginationResultsWithParams()', () => {
    const page = 3;
    spyOn(paginationService, 'goToPage');
    spyOn(component, 'paginationResultsWithParams');

    component.goToPage(page);

    expect(paginationService.goToPage).toHaveBeenCalledOnceWith(page);
    expect(component.paginationResultsWithParams).toHaveBeenCalledOnceWith(page);
  });
  it('should call paginationService.goToNextPage() and paginationResultsWithParams()', () => {
    spyOn(paginationService, 'goToNextPage');
    spyOn(component, 'paginationResultsWithParams');

    component.goToNextPage();

    expect(paginationService.goToNextPage).toHaveBeenCalled();
    expect(component.paginationResultsWithParams).toHaveBeenCalledOnceWith(paginationService.getCurrentPage());
  });
  it('should call paginationService.goToLastPage() and paginationResultsWithParams()', () => {
    spyOn(paginationService, 'goToLastPage');
    spyOn(component, 'paginationResultsWithParams');

    component.goToLastPage();

    expect(paginationService.goToLastPage).toHaveBeenCalled();
    expect(component.paginationResultsWithParams).toHaveBeenCalledOnceWith(paginationService.getCurrentPage());
  });
  it('should return true if paginationService.isFirstPage() returns true', () => {
    spyOn(paginationService, 'isFirstPage').and.returnValue(true);

    const result = component.isFirstPage();

    expect(result).toBeTrue();
  });
  it('should return true if paginationService.isLastPage() returns true', () => {
    spyOn(paginationService, 'isLastPage').and.returnValue(true);

    const result = component.isLastPage();

    expect(result).toBeTrue();
  });
  it('should return true if the given page is equal to paginationService.getCurrentPage()', () => {
    const currentPage = 2;
    spyOn(paginationService, 'getCurrentPage').and.returnValue(currentPage);

    const result = component.isCurrentPage(currentPage);

    expect(result).toBeTrue();
  });

  it('should return false if the given page is not equal to paginationService.getCurrentPage()', () => {
    const currentPage = 2;
    const otherPage = 3;
    spyOn(paginationService, 'getCurrentPage').and.returnValue(currentPage);

    const result = component.isCurrentPage(otherPage);

    expect(result).toBeFalse();
  });
  it('should return an array of page numbers based on current and total pages', () => {
    const currentPage = 2;
    const totalPages = 10;
    const maxVisiblePages = 5;
    spyOn(paginationService, 'getCurrentPage').and.returnValue(currentPage);
    spyOn(paginationService, 'getTotalPages').and.returnValue(totalPages);

    const result = component.getPageNumbers();

    expect(result).toEqual([0, 1, 2, 3, 4]);
  });
  it('should return the correct page numbers when currentPage is near the start', () => {
    // Set currentPage, totalPages, and maxVisiblePages
    paginationService.getCurrentPage();
    paginationService.setTotalPages(100,10);

    const expectedPageNumbers = [0, 1, 2, 3, 4];

    const pageNumbers = component.getPageNumbers();

    expect(pageNumbers).toEqual(expectedPageNumbers);
  });

  it('should return the correct page numbers when currentPage is near the end', () => {
    // Set currentPage, totalPages, and maxVisiblePages
    paginationService.setTotalPages(10,10);
    paginationService.currentPage=1;

    const expectedPageNumbers = [0];

    const pageNumbers = component.getPageNumbers();

    expect(pageNumbers).toEqual(expectedPageNumbers);
  });

  it('should return the correct page numbers when currentPage is in the middle', () => {
    paginationService.currentPage=5;
    paginationService.setTotalPages(100,10);

    const expectedPageNumbers = [3, 4, 5, 6, 7];

    const pageNumbers = component.getPageNumbers();

    expect(pageNumbers).toEqual(expectedPageNumbers);
  });});
