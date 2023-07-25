import { Component, OnInit } from '@angular/core';
import { ItemDetailsService } from '../item-details/item-details.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit{
constructor(private itemDetailsService:ItemDetailsService){

}
authorInfo:any
ngOnInit() {
this.itemDetailsService.getItemDetails().subscribe((response:any)=>{
this.authorInfo=response

})

}
isObject(value: any): boolean {
  return value instanceof Object;
}
}
