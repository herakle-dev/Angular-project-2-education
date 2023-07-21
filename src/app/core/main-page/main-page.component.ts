import { Component, Input } from '@angular/core';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { ItemDetailsService } from '../item-details/item-details.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { MainPageService } from './main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(
    public searchBarService: SearchBarService,
    public itemDetailService: ItemDetailsService,
    public paginationService: PaginationService,
    public mainPageService: MainPageService
  ) {}
  @Input() selectedOption = this.searchBarService.selectedOption;
  paginatedResults: any[] = [];

  fetchPaginatedResults(results: any[]) {
    this.paginatedResults = results;
    // console.log(results);
  }

}
