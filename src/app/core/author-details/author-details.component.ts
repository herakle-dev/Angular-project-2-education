import { Component } from '@angular/core';
import { ItemDetailsService } from '../item-details/item-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent {
constructor(private itemDetailsService:ItemDetailsService){

}
authorInfo:any
ngOnInit() {
  // console.log(this.itemKey)
this.itemDetailsService.getItemDetails().subscribe((response:any)=>{
console.log(response)
this.authorInfo=response


})


}
isObject(value: any): boolean {
  return value instanceof Object;
}
}
