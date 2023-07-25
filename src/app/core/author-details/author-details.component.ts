import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemDetailsService } from '../item-details/item-details.service';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css'],
})
export class AuthorDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private itemDetailsService: ItemDetailsService,
    public searchBarService: SearchBarService,
    private router:Router
  ) {}
  authorInfo: any;
  ngOnInit() {
    this.itemDetailsService.getItemDetails().subscribe((response: any) => {
      this.authorInfo = response;
    });
  }
  ngOnDestroy(): void {
    if (this.router.url === '/home') {
      this.searchBarService.searchvar = false;
    } else {
      this.searchBarService.searchvar = true;
    }
  }
  isObject(value: any): boolean {
    return value instanceof Object;
  }
}
