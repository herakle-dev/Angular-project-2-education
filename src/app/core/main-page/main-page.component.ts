import { Component,  OnDestroy, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { ItemDetailsService } from '../item-details/item-details.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { MainPageService } from './main-page.service';
import { Subject } from 'rxjs';
import { AuthorDetailsService } from '../author-details/author-details.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnDestroy{
  constructor(
    public searchBarService: SearchBarService,
    public itemDetailService: ItemDetailsService,
    public authorDetailsService:AuthorDetailsService,
    public paginationService: PaginationService,
    public mainPageService: MainPageService
  ) {}



   paginatedResults: any[] = [];
  //  selectedOption = this.searchBarService.selectedOption;
  private unsubscribe$: Subject<void> = new Subject();
  public cancelSignal$ = new Subject<void>();
  private stopSignal$ = new Subject<void>();

  cancelRequests() {
    this.cancelSignal$.next();
  }


ngOnDestroy() {
  this.searchBarService.searchvar=false
  // Chiudi i segnali quando il componente viene distrutto
  this.cancelSignal$.next();
  this.cancelSignal$.complete();
  this.stopSignal$.next();
  this.stopSignal$.complete();
}
getAuthorName(authorName: any): string {
  if (Array.isArray(authorName)) {
    return authorName[0];
  } else {
    return authorName;
  }
}
}
