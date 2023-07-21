import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';

@Injectable({
  providedIn: 'root',
})
export class ItemDetailsService implements OnInit{
  constructor(
    private searchBarService: SearchBarService,
    private http: HttpClient,
    private router: Router
  ) {}

  itemKey!: string;
  url = this.searchBarService.openLibraryURL;

ngOnInit(): void {

}


  setKey(key: string) {
    this.itemKey = key;
  }
  getKey() {
    return this.itemKey;
  }
  getItemDetails(): Observable<any> {
    return this.http.get(`${this.url}${this.getKey()}.json`)
  }
  goDetails(title: string | string[], key: string) {
    if (typeof title === 'string') {
      title = title.replace(/\s/g, '_');
    } else if (Array.isArray(title)) {
      console.log(title, 'premap')

      title = title .map((item) => item.replace(/\s/g, '_'));
      console.log(title,'postmap')
    }

    this.setKey(key);
    const url =`home/details/${title}`
    this.router.navigate([url]);
// console.log(url)

  }
}
