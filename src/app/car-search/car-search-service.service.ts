import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarSearchServiceService {

  constructor(private http: HttpClient) { }

  addCar(car: any) {
    return this.http.post('http://localhost:8080/cars/car', car);
  }
}
