import { PaginationService } from '../pagination/pagination.service';
import { SearchBarService } from './search-bar.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil, Subject, finalize } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  constructor(
    public searchBarService: SearchBarService,
    public paginationService: PaginationService
  ) {}

  @Input() responseArray: any;
  @Input() searchvar = this.searchBarService.searchvar;
  limit = this.searchBarService.limit;
  selectedOption = this.searchBarService.selectedOption;
  textInput = this.searchBarService.textInput;
  selectedFlag = this.searchBarService.langParam;
  paginatedResults!: any[];
  private cancelSignal$ = new Subject<void>();
  private stopSignal$ = new Subject<void>();
  private isRequestInProgress = false;

  //INIT
  ngOnInit(): void {
    this.reset();
  }
  ngOnDestroy() {
    // Chiudi i segnali quando il componente viene distrutto
    this.cancelSignal$.next();
    this.cancelSignal$.complete();
    this.stopSignal$.next();
    this.stopSignal$.complete();
  }
  cancelRequests() {
    this.cancelSignal$.next();
  }

  //RESET
  reset() {
    this.searchBarService.offset = this.searchBarService.offset;
    this.paginationService.currentPage = this.paginationService.currentPage;
    this.paginatedResults = [];
    this.searchBarService.searchvar = false;
  }
  //method for pagination component to emit new results every page
  fetchPaginatedResults(results: any[]) {
    this.paginatedResults = results;
  }

  search() {
    this.cancelRequests();
    this.searchBarService.offset = this.searchBarService.offset;
    this.paginationService.currentPage = this.paginationService.currentPage;
    if (this.searchBarService.searchvar) {
      this.searchBarService.offset = 0;
      this.paginationService.currentPage = 0;
    }
    // Ottieni i parametri di ricerca dal servizio
    const apiUrl = this.searchBarService.apiUrl;
    this.searchBarService.search();

    // Effettua la chiamata API con i parametri di ricerca
    this.searchBarService
      .fetchThingsfromAPI(apiUrl)
      .pipe(
        takeUntil(this.stopSignal$),
        finalize(() => {
          this.isRequestInProgress = false;
        })
      )
      .subscribe((response) => {
        if (response.works) {
          const workCount = response.work_count;
          if (workCount <= this.limit) {
            this.paginationService.setTotalPages(workCount - 1, this.limit);
          } else {
            this.paginationService.setTotalPages(workCount, this.limit);
          }
          this.paginatedResults = response.works;
        } else if (response.docs) {
          const workCount = response.work_count || response.numFound;
          if (workCount <= this.limit) {
            this.paginationService.setTotalPages(workCount - 1, this.limit);
          } else {
            this.paginationService.setTotalPages(workCount, this.limit);
          }
          this.paginatedResults = response.docs;
        }
        this.searchBarService.setArrayToShow(this.paginatedResults);
        this.searchBarService.searchvar = true;
      });
  }

  //input field
  getLimitValue(num: number): number {
    if (num > 1000) {
      num = 1000;
    }
    else if(num<0){
       num=50
    }
    this.limit = num;
    return (this.searchBarService.limit = this.limit);
  }
  onLanguageChange(value: string) {
    this.searchBarService.languageInput.patchValue(value);
  }
  //param section
  onParamselect(selectedOption: any) {
    selectedOption = this.searchBarService.selectedOption.value;
  }

  //FLAG SELECTION
  flags: any[] = [
    { name: 'Inglese', value: '', icon: 'fi fi-gb' },
    { name: 'Italiano', value: 'ita', icon: 'fi fi-it' },
    { name: 'Francese', value: 'fre', icon: 'fi fi-fr' },
    { name: 'Spagnolo', value: 'spa', icon: 'fi fi-es' },
    { name: 'Tedesco', value: 'ger', icon: 'fi fi-de' },
    { name: 'Russo', value: 'rus', icon: 'fi fi-ru' },
  ];
}
