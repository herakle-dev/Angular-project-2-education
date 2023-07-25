import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';

@Injectable({
  providedIn: 'root',
})
export class ItemDetailsService{
  constructor(
    private searchBarService: SearchBarService,
    private http: HttpClient,
    public router: Router
  ) {}
  itemKey!: string;
  url = this.searchBarService.openLibraryURL;



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

      title = title .map((item) => item.replace(/\s/g, '_'));
    }

    this.setKey(key);
    const url =`home/details/${title}`
    this.router.navigate([url]);

  }
}
