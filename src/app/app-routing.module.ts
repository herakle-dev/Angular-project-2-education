import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { ItemDetailsComponent } from './core/item-details/item-details.component';

const routes: Routes = [
  { path: 'search/:param/:text/:page', component: MainPageComponent },
{path:'details/:key/:title', component:ItemDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
