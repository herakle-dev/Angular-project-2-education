import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';

@Injectable({
  providedIn: 'root'
})
export class HomeTrendingService implements OnInit  {

  constructor(private searBarService:SearchBarService,private http:HttpClient) {


   }
url=this.searBarService.openLibraryURL


ngOnInit(): void {
}
fetchTrending(time:string):Observable<any>{
return this.http.get(`${this.url}/trending/${time}.json?q=language:ita&place=italy&limit=50`)
}

}
