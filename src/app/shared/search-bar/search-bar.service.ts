import { PaginationService } from './../pagination/pagination.service';
import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject, finalize,  takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  constructor(
    private http: HttpClient,
    public paginationService: PaginationService,
    public router: Router
  ) {
    this.limit = 50;
  }
  //base url
  public openLibraryURL = `https://openlibrary.org`;
  //url created sooner
  apiUrl = '';
  //input
  textParam!: string | null;
  selectParam!: string | null;
  langParam!: string | null;
  //form
  @ViewChild('searchForm', { static: false }) searchForm!: NgForm;
  textInput = new FormControl('');
  selectedOption = new FormControl('');
  languageInput = new FormControl('');

  limit = 50;
  offset = 0;
  //array
  responseArray!: any[];
  searchvar = false;
  private isRequestInProgress = false;
   cancelSignal$ = new Subject<void>();

  cancelRequests() {
    this.cancelSignal$.next();
  }
  //taking input value
  search() {
    this.cancelRequests();

    this.textParam = this.textInput.value;
    this.selectParam = this.selectedOption.value;
    this.langParam = this.languageInput.value;
    this.URLmaker(
      this.selectParam,
      this.textParam,
      this.limit,
      this.offset,
      this.langParam
    );

    return this.textParam, this.selectParam;
  }

  URLmaker(
    text: any,
    param: string | null,
    limit: number,
    offset: number,
    language: string | null
  ) {
    text = this.textParam;
    param = this.selectParam;
    language = this.langParam;
    // Creazione dell'URL basato sulla selezione e l'input di testo
    if (param === 'subject') {
      text = text.trim().toLowerCase();
      this.apiUrl = `${this.openLibraryURL}/subjects/${text}.json?q=language:${language}&limit=${limit}&offset=${offset}`;
    } else if (param === 'title') {
      this.apiUrl = `${this.openLibraryURL}/search.json?title=${text}&q=language:${language}&limit=${limit}&offset=${offset}`;
    } else if (param === 'author') {
      this.apiUrl = `${this.openLibraryURL}/search.json?author=${text}&q=language:${language}&limit=${limit}&offset=${offset}`;
    }
  }
  //simple function to get the num to iterate for pagination
  fetchThingsfromAPI(apiURL: string): Observable<any> {
    apiURL = this.apiUrl;
    const url = `home/search/${this.languageInput.value}∼/${
      this.selectedOption.value
    }/${this.textInput.value}/${this.paginationService.currentPage + 1}`;
    this.router.navigate([url]);
    return this.http.get<any>(`${apiURL}`)
    .pipe(takeUntil(this.cancelSignal$),
      finalize(() => {
        this.isRequestInProgress = false;
      })
    );
  }

  fetchResultsWithOffset(
    text: any,
    limit: number,
    offset: number
  ): Observable<any> {
    const url = `home/search/${this.languageInput.value}∼/${
      this.selectedOption.value
    }/${this.textInput.value}/${this.paginationService.currentPage + 1}`;
    this.router.navigate([url]);

    return this.http.get(this.apiUrl).pipe(
      takeUntil(this.cancelSignal$),
      finalize(() => {
        this.isRequestInProgress = false;
      })
    );
  }

  setArrayToShow(array: any) {
    this.responseArray = array;
  }
  getResponseArr() {
    return this.responseArray;
  }
  onParamselect(selectedOption: any):any {
  return  selectedOption = this.selectedOption.value;
  }
}
