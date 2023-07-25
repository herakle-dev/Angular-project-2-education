import { ItemDetailsService } from './item-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { MainPageService } from '../main-page/main-page.service';
import { AuthorDetailsService } from '../author-details/author-details.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
})
export class ItemDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private itemDetailsService: ItemDetailsService,
    public authorDetailsService: AuthorDetailsService,
    private searchBarService: SearchBarService,
    private mainPageService: MainPageService
  ) {
    this.itemKey = this.itemDetailsService.getKey();
  }

  itemKey!: string;

  itemInfo: any;

  ngOnInit() {
    this.itemDetailsService.getItemDetails().subscribe((response: any) => {
      this.itemInfo = response;
    });
  }
  isObject(value: any): boolean {
    return value instanceof Object;
  }
}
