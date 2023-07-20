import { Component, OnInit } from '@angular/core';
import { HomeTrendingService } from './home-trending.service';
import { ItemDetailsService } from '../item-details/item-details.service';

@Component({
  selector: 'app-home-trending',
  templateUrl: './home-trending.component.html',
  styleUrls: ['./home-trending.component.css'],
})
export class HomeTrendingComponent implements OnInit {
  constructor(
    private homeService: HomeTrendingService,
    public itemDetailsService: ItemDetailsService
  ) {}
  time: string = 'now';
  itemResponseByTime: any[] = [];

  ngOnInit(): void {
    this.trending();
  }

  trending() {
    this.homeService.fetchTrending(this.time).subscribe((response) => {
      this.itemResponseByTime = response.works;
      // console.log(response);
    });
  }
  onItemClick(value: string) {
    this.time = value;
    this.trending();
  }
}
