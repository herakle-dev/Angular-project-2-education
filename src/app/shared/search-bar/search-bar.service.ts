import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  constructor(private http: HttpClient) {
    this.limit = 0;
  }
  //base url
  public openLibraryURL = `https://openlibrary.org`;
  //url created sooner
  apiUrl = '';
  //input
  textParam!: string | null;
  selectParam!: string | null;
  //form
  @ViewChild('searchForm', { static: false }) searchForm!: NgForm;
  textInput = new FormControl('');
  selectedOption = new FormControl('');
  limit: number = 50;
  offset: number = 0;
  //array
  responseArray!: any[];

  //taking input value
  search() {
    this.textParam = this.textInput.value;
    this.selectParam = this.selectedOption.value;
    this.URLmaker(this.selectParam, this.textParam, this.limit, this.offset);
    return this.textParam, this.selectParam;
  }

  URLmaker(text: any, param: string | null, limit: number, offset: number) {
    text = this.textParam;
    param = this.selectParam;
    // Creazione dell'URL basato sulla selezione e l'input di testo
    if (param === 'subject') {
      text = text.trim().toLowerCase();
      this.apiUrl = `${this.openLibraryURL}/subjects/${text}.json?limit=${limit}&offset=${offset}`;
    } else if (param === 'title') {
      this.apiUrl = `${this.openLibraryURL}/search.json?title=${text}&limit=${limit}&offset=${offset}`;
    } else if (param === 'author') {
      this.apiUrl = `${this.openLibraryURL}/search.json?author=${text}&limit=${limit}&offset=${offset}`;
    }
  }
//simple function to get the num to iterate for pagination
  fetchThingsfromAPI(apiURL: string): Observable<any> {
    apiURL = this.apiUrl;
    return this.http.get<any>(`${apiURL}`);
  }

  fetchResultsWithOffset(
    text: any,
    limit: number,
    offset: number
  ): Observable<any> {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl);
  }
}
