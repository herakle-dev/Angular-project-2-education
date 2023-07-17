import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';

const routes: Routes = [
{path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:SearchBarComponent},
  { path: 'search/:param/:text/:page', component: SearchBarComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
