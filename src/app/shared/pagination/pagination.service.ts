import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() {
     this.currentPage = 0;
    this.totalPages = 0;
   }
  public currentPage: number;
  public totalPages: number;


  setTotalPages(totalResults: number, limit: number) {
    if (totalResults <= limit) {
      this.totalPages = 1; // Crea solo una pagina se i risultati sono minori o uguali al limite
    } else {
      this.totalPages = Math.ceil(totalResults / limit);
    }
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  getTotalPages(): number {
    return this.totalPages;
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  goToFirstPage() {
    this.currentPage = 0;
  }

  goToLastPage() {
    this.currentPage = this.totalPages - 1;
  }

  isFirstPage(): boolean {
    return this.currentPage === 0;
  }

  isLastPage(): boolean {
    return this.currentPage === this.totalPages - 1;
  }

  isCurrentPage(page: number): boolean {
    return this.currentPage === page;
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }

}
