import { UiKitModule } from './ui-kit/ui-kit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from '../core/main-page/main-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SearchBarComponent,MainPageComponent],
  imports: [
    CommonModule,
    UiKitModule,
RouterModule
  ],
  exports:[SearchBarComponent,MainPageComponent]
})
export class SharedModule { }
