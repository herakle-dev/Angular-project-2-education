import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('details')
    this.route.params.subscribe(params => {
      const key = params['key'];
      let title = params['title'];
      // Utilizza i valori di 'key' e 'title' come desideri nel componente
    });
}
}
