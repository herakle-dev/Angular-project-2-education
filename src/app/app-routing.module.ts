import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { ItemDetailsComponent } from './core/item-details/item-details.component';
import { HomeTrendingComponent } from './core/home-trending/home-trending.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeTrendingComponent },
  { path: 'search/:lang/:param/:text/:page', component: MainPageComponent },
{path:'details/:title', component:ItemDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
