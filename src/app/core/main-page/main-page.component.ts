import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchBarService } from 'src/app/shared/search-bar/search-bar.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  constructor(private searchBarService: SearchBarService,
    private route:ActivatedRoute) {

  }
  param1: any;
  param2: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.param1 = params['textInput.value'];
      this.param2 = params['selectedOption.value'];
      // Puoi fare altre operazioni con i parametri ricevuti
    });

  }
  @Input() responseArray!: any[];

}
