import { ItemDetailsService } from './item-details.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';
import { MainPageService } from '../main-page/main-page.service';
import { AuthorDetailsService } from '../author-details/author-details.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  constructor(private route: ActivatedRoute,
    private itemDetailsService:ItemDetailsService,
    public authorDetailsService:AuthorDetailsService,
    private searchBarService:SearchBarService,
    private mainPageService:MainPageService) {

    this.itemKey = this.itemDetailsService.getKey();

  }

 itemKey!: string;

// covers:any
// cover_edition:any
// description:any
// descriptionValue:any

// key:any
// title:any

itemInfo:any

  ngOnInit() {
    // console.log(this.itemKey)
this.itemDetailsService.getItemDetails().subscribe((response:any)=>{
  console.log(response)
  this.itemInfo=response
//   this.title=response.title
//   this.description=response.description

//  this.descriptionValue = response.description.value
// this.covers=response.covers


})


}
isObject(value: any): boolean {
  return value instanceof Object;
}

}
