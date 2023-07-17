import { UiKitModule } from './ui-kit/ui-kit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from '../core/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';



@NgModule({
  declarations: [SearchBarComponent,MainPageComponent, PaginationComponent],
  imports: [
    CommonModule,
    UiKitModule,
RouterModule
  ],
  exports:[SearchBarComponent,MainPageComponent]
})
export class SharedModule { }