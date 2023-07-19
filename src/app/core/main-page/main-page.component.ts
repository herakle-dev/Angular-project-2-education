import { Component, Input, OnInit, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  constructor(public searchBarService:SearchBarService,private router:Router) {}
@Input()  selectedOption:any
@Input() responseArray!: any[];
paginatedResults: any[] = [];

goDetails( title:string){
  title = title.replace(/\s/g, '_');
  // console.log(key)
  // key = key.replace(/\//g, '_');
  // console.log(key)

   this.router.navigate(['details',title])

 }

}
