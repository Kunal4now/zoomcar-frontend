import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarSearchComponent } from './car-search/pages/car-search/car-search.component'
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { CarDetailsComponent } from './car-search/components/car-details/car-details.component';
import { AddCarComponent } from './car-search/components/add-car/add-car.component';

const routes: Routes = [
  {
    path: 'car-search',
    component: CarSearchComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'car/:id',
    component: CarDetailsComponent
  },
  {
    path: 'add-car',
    component: AddCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
