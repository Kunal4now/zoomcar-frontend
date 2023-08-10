import { Component } from '@angular/core';
import { Car } from 'src/app/types';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent {
  carDetails: Car =     {
    id: 1,
    brand: 'Honda',
    model: 'Civic',
    type: 'Sedan',
    year: 2019,
    price: 20000,
    image: 'https://imgur.com/2Gekr2z.jpg'
  };
}
