import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

const routes: Routes = [

  {path:':selectedOption.value/:textInput.value', component:MainPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
