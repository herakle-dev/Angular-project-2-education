import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  @Input() responseArray!: any[];
  constructor(private searchService:SearchBarService) {}
@Input()  selectedOption:any
}
