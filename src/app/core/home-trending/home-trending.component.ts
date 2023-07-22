import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeTrendingService } from './home-trending.service';
import { ItemDetailsService } from '../item-details/item-details.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-trending',
  templateUrl: './home-trending.component.html',
  styleUrls: ['./home-trending.component.css'],
})
export class HomeTrendingComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  constructor(
    private homeService: HomeTrendingService,
    public itemDetailsService: ItemDetailsService
  ) {}

  time: string = 'now';
  itemResponseByTime: any[] = [];

  ngOnInit(): void {
    this.trending();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  trending() {
    // Annulla le richieste correnti prima di fare una nuova richiesta
    this.homeService.cancelRequests();

    this.homeService.fetchTrending(this.time)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((response) => {
        this.itemResponseByTime = response.works;
        // console.log(response);
      });
  }

  onItemClick(value: string) {
    this.time = value;
    this.trending();
  }
}
