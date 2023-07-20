import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  constructor(
    private paginationService: PaginationService,
    private searchBarService: SearchBarService
  ) {}
  @Output() pageChange: EventEmitter<any[]> = new EventEmitter<any[]>();
  responseArray: any[] = [];
  @Input()searchvar!:boolean

  paginationResultsWithParams(offset: number) {
    this.searchBarService.offset = offset;
    this.searchBarService.URLmaker(
      this.searchBarService.selectParam,
      this.searchBarService.textParam,
      this.searchBarService.limit,
      this.searchBarService.offset,
      this.searchBarService.langParam

    )
   this.searchBarService.fetchResultsWithOffset(
    this.searchBarService.textParam,
    this.searchBarService.limit,
    this.searchBarService.offset
   )
      .subscribe((results) => {
        this.responseArray = results.works || results.docs ;
        this.searchBarService.setArrayToShow(this.responseArray)
        this.searchBarService.getResponseArr()
      });
  }



  goToFirstPage() {
    this.paginationService.goToFirstPage();
    this.paginationResultsWithParams(this.paginationService.getCurrentPage() );
  }

  goToPreviousPage() {
    this.paginationService.goToPreviousPage();
    this.paginationResultsWithParams(this.paginationService.getCurrentPage() );
  }

  goToPage(page: number) {
    this.paginationService.goToPage(page);
    this.paginationResultsWithParams(page );
  }

  goToNextPage() {
    this.paginationService.goToNextPage();
    this.paginationResultsWithParams(this.paginationService.getCurrentPage() );
  }

  goToLastPage() {
    this.paginationService.goToLastPage();
    this.paginationResultsWithParams(this.paginationService.getCurrentPage() );
  }

  isFirstPage(): boolean {
    return this.paginationService.isFirstPage();
  }

  isLastPage(): boolean {
    return this.paginationService.isLastPage();
  }

  isCurrentPage(page: number): boolean {
    return this.paginationService.getCurrentPage() === page;
  }

 getPageNumbers(): number[] {
  const currentPage = this.paginationService.getCurrentPage();
  const totalPages = this.paginationService.getTotalPages();

  const visiblePages = [currentPage]; // Inizia con la pagina corrente

  const maxVisiblePages = 5; // Numero massimo di pulsanti visibili

  let previousPage = currentPage - 1;
  let nextPage = currentPage + 1;

  // Aggiungi le pagine precedenti alla pagina corrente
  while (previousPage > 0 && visiblePages.length < maxVisiblePages) {
    visiblePages.unshift(previousPage);
    previousPage--;
  }

  // Aggiungi le pagine successive alla pagina corrente
  while (nextPage <= totalPages && visiblePages.length < maxVisiblePages) {
    visiblePages.push(nextPage);
    nextPage++;
  }

  return visiblePages;
}

}
