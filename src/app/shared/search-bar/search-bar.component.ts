import { Attribute } from '@angular/compiler';
import { PaginationService } from '../pagination/pagination.service';
import { SearchBarService } from './search-bar.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainPageService } from 'src/app/core/main-page/main-page.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(
    private searchBarService: SearchBarService,
    private paginationService: PaginationService
  ) {}

  @Input() responseArray: any;
  // var used to show/hide things
  @Input() searchvar = this.searchBarService.searchvar;

  limit = this.searchBarService.limit;
  selectedOption = this.searchBarService.selectedOption;
  textInput = this.searchBarService.textInput;
  selectedFlag = this.searchBarService.langParam;
  paginatedResults!: any[];


  //INIT
  ngOnInit(): void {
   this.reset()
  }
  //RESET
  reset() {
    this.searchBarService.offset = this.searchBarService.offset;
    this.paginationService.currentPage = this.paginationService.currentPage;
    this.paginatedResults = [];
    this.searchvar = false;
  }
  //method for pagination component to emit new results every page
  fetchPaginatedResults(results: any[]) {
    this.paginatedResults = results;
  }

  search() {
    this.searchBarService.offset = this.searchBarService.offset;
    this.paginationService.currentPage = this.paginationService.currentPage;
    if (this.searchvar) {
      this.searchBarService.offset = 0;
      this.paginationService.currentPage = 0;
    }
    // Ottieni i parametri di ricerca dal servizio
    const apiUrl = this.searchBarService.apiUrl;
    const searchParams = this.searchBarService.search();

    // Effettua la chiamata API con i parametri di ricerca
    this.searchBarService.fetchThingsfromAPI(apiUrl).subscribe((response) => {
      if (response.works) {
        const workCount = response.work_count;
        this.paginationService.setTotalPages(workCount, this.limit);
        this.paginatedResults = response.works;

      } else if (response.docs) {
        const workCount = response.work_count || response.numFound;
        this.paginationService.setTotalPages(workCount, this.limit);
        this.paginatedResults = response.docs;
      }
      console.log(this.paginatedResults);
      this.searchBarService.setArrayToShow(this.paginatedResults);
      this.searchvar = true;
    });
  }

  //input field
  getLimitValue(num: number): number {
    if (num > 1000) {
      num = 1000;
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
