import { Component, Input, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { ItemDetailsService } from '../item-details/item-details.service';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { MainPageService } from './main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit{
  constructor(
    public searchBarService: SearchBarService,
    public itemDetailService: ItemDetailsService,
    public paginationService: PaginationService,
    public mainPageService: MainPageService
  ) {}
   selectedOption = this.searchBarService.selectedOption;
  paginatedResults: any[] = [];

ngOnInit(): string | null {
  console.log(this.searchBarService.selectedOption.value)
return this.searchBarService.selectedOption.value
}



}
