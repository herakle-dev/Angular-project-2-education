import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService   {
  constructor(private http: HttpClient) {}
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

  //array
  responseArray! : any[];

  //taking input value
  search() {
    this.textParam = this.textInput.value;
    this.selectParam = this.selectedOption.value;
    this.URLmaker(this.selectParam, this.textParam);
    return this.textParam, this.selectParam;
  }
  URLmaker(text: any, param: string | null) {
    text = this.textParam;
    param = this.selectParam;
    //creating url based on select & text input
    if (param === 'subject') {
      text = text.trim().toLowerCase();
      this.apiUrl = `${this.openLibraryURL}/subjects/${text}.json?limit=50`;
    } else if (param === 'title') {
      this.apiUrl = `${this.openLibraryURL}/search.json?title=${text}&limit=50`;
    } else if (param === 'author') {
      this.apiUrl = `${this.openLibraryURL}/search.json?author=${text}&limit=50`;
    }
    this.fetchThingsfromAPI(this.apiUrl);
  }

  fetchThingsfromAPI(apiURL: string) {
    apiURL = this.apiUrl;
    this.http.get<any>(`${apiURL}.json`).subscribe((response) => {
      if (response.works) {
        console.log(response.works.length)
        this.responseArray = response.works;
      } else if (response.docs) {
        this.responseArray = response.docs;
      } else {
        this.responseArray = [];
      }
      console.log( this.responseArray);

    });
  }

}
// const authorResponse = [
//   'docs [{}]',
//   'numFound : number',
//   'numFoundExact : bool',
//   'offset null',
//   'q ""',
//   'start 0',
// ];
// const titleResponse = [
//   'docs [{}]',
//   'numFound : number',
//   'numFoundExact : bool',
//   'offset null',
//   'q ""',
//   'start 0',
// ];
// const subjectResponse = [
//   'Key: /subjects/fantasy',
//   'Name: fantasy',
//   ' Subject Type: subject',
//   ' Work Count: 13133',
// ];
