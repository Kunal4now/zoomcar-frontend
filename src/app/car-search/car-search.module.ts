import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilteringComponent } from './components/filtering/filtering.component';
import { CarSearchComponent } from './pages/car-search/car-search.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    FilteringComponent,
    CarSearchComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    //material mat-label
    // MatGridListModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class CarSearchModule { }
