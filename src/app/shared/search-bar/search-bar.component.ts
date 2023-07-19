import { PaginationService } from '../pagination/pagination.service';
import { SearchBarService } from './search-bar.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  constructor(
    private searchBarService: SearchBarService,
    private paginationService: PaginationService,
    private router: Router
  ) {}

  @Input() responseArray: any;
  @Input() paginatedArray!: any[];

  limit = this.searchBarService.limit;
  paginatedResults!: any[];
  selectedOption = this.searchBarService.selectedOption;
  textInput = this.searchBarService.textInput;
  selectedFlag=this.searchBarService.langParam

  @Input() searchvar = false;


  //FLAG SELECTION
  flags: any[] = [
    { name: 'Inglese', value: '', icon: 'fi fi-gb' },
    { name: 'Italiano', value: 'ita', icon: 'fi fi-it' },
    { name: 'Francese', value: 'fre', icon: 'fi fi-fr' },
    { name: 'Spagnolo', value: 'spa', icon: 'fi fi-es' },
    { name: 'Tedesco', value: 'ger', icon: 'fi fi-de' },
    { name: 'Russo', value: 'rus', icon: 'fi fi-ru' },

  ];

  onLanguageChange(value: string) {
    this.searchBarService.languageInput.patchValue(value);
  }

  onParamselect(selectedOption: any) {
    selectedOption = this.searchBarService.selectedOption.value;
  }
  //INIT
  ngOnInit(): void {
    this.searchBarService.offset = this.searchBarService.offset;
    this.paginationService.currentPage = this.paginationService.currentPage;

  }
//RESET
  reset() {
    this.textInput.reset();
    this.selectedOption.reset();
    this.limit = this.searchBarService.limit;
    this.paginatedResults = [];
    this.searchvar = false;
  }
  //method for pagination component to emit new results every page
  fetchPaginatedResults(results: any[]) {
    this.paginatedResults = results;
  }

  search() {
    // console.log(this.paginatedResults)
    if (this.searchvar) {
      this.searchBarService.offset = 0;
      this.paginationService.currentPage = 0;
    }
    // console.log(this.paginatedResults)
    // Ottieni i parametri di ricerca dal servizio
    const apiUrl = this.searchBarService.apiUrl;
    const searchParams = this.searchBarService.search();

    // Effettua la chiamata API con i parametri di ricerca
    this.searchBarService.fetchThingsfromAPI(apiUrl)
      .subscribe((response) => {
        if (response.works) {
          const workCount = response.work_count;
          this.paginationService.setTotalPages(workCount, this.limit);
          this.paginatedResults = response.works;

          // console.log(this.paginatedResults)

        } else if (response.docs) {
          const workCount = response.work_count || response.numFound;
          this.paginationService.setTotalPages(workCount, this.limit);
          this.paginatedResults = response.docs;

          // console.log(this.paginatedResults)

        }
        this.searchvar = true;
      });
  }





  getLimitValue(num: number): number {
    if (num > 1000) {
      num = 1000;
    }
    this.limit = num;
    return (this.searchBarService.limit = this.limit);
  }

  /*
-------costruire url in base ai param inseriti dall utente ==> che porta alla lista dopo aver cercato
 --+++------------difficile forse bisogna capire se e come fare le richieste quando già si è in un url di ricerca
----------dalla lista al singolo => url /nomecoso per mostrare tutti i risultati
--------------get ricorsiva per ottenere tutti i libri con quei parametri,
---------LIMITE PER GET ==> 1000
------------  parametro numerico per scegliere quanti risultati si vogliono per pagina



sfruttare le api al massimo riguardo le api search in modo da dare una ricerca ottima
si può usare il parametro ===> search?q=language%3Aita per dare la lingua dei libri da cercare
si possono mettere in chain con altri
===> /search?q=language%3Aita&place=italy&subject=travel

router dinamico in base ai param
------------corretta visualizzazione
DA FARE ALMENO LA LINGUA scoprire se è possibile aggiungere parametri di ricerca in modo da impaginare i risultati



PARAMETRI DI RICERCA
title:flammable will find any books with "flammable" in the title field

author:solnit will find authors with "solnit" in their name

subject:tennis rules will find any books about "tennis" AND "rules"

place:lisbon will find books about Lisbon

person:rosa parks will look for people with rosa AND parks in their name

language:spa will find any books with at least one edition in Spanish (most other language codes use the
   first three letters of the language except for Japanese which uses jpn There is also mul for multiple languages
 and und for undetermined)

publisher:harper will looks for any books published by a publisher with "harper" in their name. (Publisher has never
   been a controlled field in the library world, so you can see we have a ton of variants of this famous publisher in
   the search facets.)

  anno pubblicazione
  https://openlibrary.org/search?q=first_publish_year%3A[2022+TO+2023]&sort=new
  ricerca autore per anno di nascita
  authors?q=birth_date:1973

  sicuro da mettere on init nella home settare il limit a 308,
   impaginare i risultati in base al valore che imposta l'utente, base 100 per page
   mettere un sort per ordinare per alfabetico o prima pubblicazione
  tendenza
  /trending/now.json
  weekly   monthly yearly forever


*/
}
