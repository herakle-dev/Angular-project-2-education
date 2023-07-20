import { Injectable } from '@angular/core';

import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';


@Injectable({
  providedIn: 'root'
})
export class MainPageService {
  paginatedResults: any[] = [];
  limit = this.searchBarService.limit;

  constructor(
    private searchBarService: SearchBarService,
  ) { }




}
