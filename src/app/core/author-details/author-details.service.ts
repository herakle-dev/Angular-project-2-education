import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ItemDetailsService } from '../item-details/item-details.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorDetailsService {

  constructor(public itemDetailsService:ItemDetailsService,
    private router:Router) { }
  goDetails(title: string | string[], key: string) {
    if (typeof title === 'string') {
      title = title.replace(/\s/g, '_');
    } else if (Array.isArray(title)) {
      // console.log(title, 'premap')

      title = title .map((item) => item.replace(/\s/g, '_'));
      // console.log(title,'postmap')
    }

    this.itemDetailsService.setKey(key);
    const url =`home/details/author/${title}`
    this.router.navigate([url]);
// console.log(url)

  }
}
