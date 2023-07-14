import { SearchBarService } from './search-bar.service';
import { Component,  Input,   } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent   {

  constructor(private searchBarService: SearchBarService) {}

  textInput = this.searchBarService.textInput
  selectedOption = this.searchBarService.selectedOption
  @Input() responseArray:any

  search() {
    this.searchBarService.search();
  return  this.responseArray= this.searchBarService.responseArray

     }


/*
costruire url in base ai param inseriti dall utente ==> che porta alla lista dopo aver cercato
dalla lista al singolo => url /nomecoso per mostrare tutti i risultati


router dinamico in base ai param
corretta visualizzazione
scoprire se è possibile aggiungere parametri di ricerca in modo da impaginare i risultati

*/
    //debug
select(selectedOption:any){
  selectedOption= this.searchBarService.selectedOption.value
  console.log(this.searchBarService.selectedOption.value)
}

}
