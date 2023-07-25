import { TestBed } from '@angular/core/testing';
import { PaginationService } from './pagination.service';

describe('PaginationService', () => {
  let service: PaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set total pages correctly when total results are less than or equal to limit', () => {
    service.setTotalPages(10, 10); // Total results = 10, limit = 10, so it should have 1 page
    expect(service.getTotalPages()).toBe(1);

    service.setTotalPages(5, 10); // Total results = 5, limit = 10, so it should have 1 page
    expect(service.getTotalPages()).toBe(1);
  });

  it('should set total pages correctly when total results are greater than limit', () => {
    service.setTotalPages(15, 10); // Total results = 15, limit = 10, so it should have 2 pages
    expect(service.getTotalPages()).toBe(2);

    service.setTotalPages(27, 5); // Total results = 27, limit = 5, so it should have 6 pages
    expect(service.getTotalPages()).toBe(6);
  });

  it('should go to the specified page correctly', () => {
    service.setTotalPages(100, 10);
    service.goToPage(3);
    expect(service.getCurrentPage()).toBe(3);

    service.goToPage(1);
    expect(service.getCurrentPage()).toBe(1);

    service.goToPage(1); // Should not go below page 0
    expect(service.getCurrentPage()).toBe(1);

    service.goToPage(9); // Should not go beyond the last page (page 9)
    expect(service.getCurrentPage()).toBe(9);
  });

  it('should go to the next and previous pages correctly', () => {
    service.setTotalPages(100, 10);
    service.goToPage(3);
    service.goToNextPage();
    expect(service.getCurrentPage()).toBe(4);

    service.goToPreviousPage();
    expect(service.getCurrentPage()).toBe(3);

    service.goToPreviousPage(); // Should not go below page 0
    expect(service.getCurrentPage()).toBe(2);

    service.goToPage(9);
    service.goToNextPage(); // Should not go beyond the last page (page 9)
    expect(service.getCurrentPage()).toBe(9);
  });

  it('should go to the first and last pages correctly', () => {
    service.setTotalPages(25, 5);
    service.goToPage(3);
    service.goToFirstPage();
    expect(service.getCurrentPage()).toBe(0);

    service.goToLastPage();
    expect(service.getCurrentPage()).toBe(4);
  });

  it('should check if a page is the first, last, or current page correctly', () => {
    service.setTotalPages(100, 10);
    service.goToPage(5);
    expect(service.isFirstPage()).toBeFalse();
    expect(service.isLastPage()).toBeFalse();
    expect(service.isCurrentPage(0)).toBeFalse();
    expect(service.isCurrentPage(5)).toBeTrue();

    service.goToFirstPage();
    expect(service.isFirstPage()).toBeTrue();
    expect(service.isLastPage()).toBeFalse();
    expect(service.isCurrentPage(0)).toBeTrue();
    expect(service.isCurrentPage(1)).toBeFalse();

    service.goToLastPage();
    expect(service.isFirstPage()).toBeFalse();
    expect(service.isLastPage()).toBeTrue();
    expect(service.isCurrentPage(0)).toBeFalse();
    expect(service.isCurrentPage(9)).toBeTrue();
  });

  it('should get the page numbers correctly', () => {
    service.setTotalPages(20, 5);
    const pageNumbers = service.getPageNumbers();
    expect(pageNumbers).toEqual([0, 1, 2, 3]);
  });
});
