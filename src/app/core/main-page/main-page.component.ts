import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { ItemDetailsService } from '../item-details/item-details.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { MainPageService } from './main-page.service';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnDestroy{
  constructor(
    public searchBarService: SearchBarService,
    public itemDetailService: ItemDetailsService,
    public paginationService: PaginationService,
    public mainPageService: MainPageService
  ) {}



   paginatedResults: any[] = [];
  //  selectedOption = this.searchBarService.selectedOption;
  private unsubscribe$: Subject<void> = new Subject();
  private cancelSignal$ = new Subject<void>();
  private stopSignal$ = new Subject<void>();

  cancelRequests() {
    this.cancelSignal$.next();
  }

ngOnDestroy() {
  // Chiudi i segnali quando il componente viene distrutto
  this.cancelSignal$.next();
  this.cancelSignal$.complete();
  this.stopSignal$.next();
  this.stopSignal$.complete();
}
getAuthorName(authorName: any): string {
  if (Array.isArray(authorName)) {
    return authorName[0]; // Restituisce il primo elemento dell'array se authorName è un array
  } else {
    return authorName; // Restituisce la forma primaria se authorName non è un array
  }
}
}
