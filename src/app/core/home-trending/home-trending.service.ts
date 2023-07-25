import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';

@Injectable({
  providedIn: 'root'
})
export class HomeTrendingService implements OnDestroy  {
  private ngUnsubscribe = new Subject<void>();

  constructor(private searBarService:SearchBarService,private http:HttpClient) {


   }
url=this.searBarService.openLibraryURL


ngOnDestroy() {
  this.ngUnsubscribe.next();
  this.ngUnsubscribe.complete();
}
fetchTrending(time:string):Observable<any>{
return this.http.get(`${this.url}/trending/${time}.json?q=language:ita&place=italy&limit=50`)
 .pipe(takeUntil(this.ngUnsubscribe));
}
cancelRequests() {
  this.ngUnsubscribe.next();
}
}
