import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSearchComponent } from './car-search/pages/car-search/car-search.component'
import { HomePageComponent } from './components/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'car-search',
    component: CarSearchComponent
  },
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
