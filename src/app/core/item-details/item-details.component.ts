import { ItemDetailsService } from './item-details.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { MainPageService } from '../main-page/main-page.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  constructor(private route: ActivatedRoute,
    private itemDetailsService:ItemDetailsService,
    private searchBarService:SearchBarService,
    private mainPageService:MainPageService) {

    this.itemKey = this.itemDetailsService.getKey();

  }
  @Input() searchvar = this.searchBarService.searchvar;

 itemKey!: string;
details:any

  ngOnInit() {
    // console.log(this.itemKey)
this.itemDetailsService.getItemDetails().subscribe((response:any)=>{
  console.log(response)
  this.details=response.description
  // console.log(this.details)

})
this.searchvar=!this.searchvar
console.log('init dettaglis')
}


}
