import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CarSearchServiceService } from '../../car-search-service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {
  addCarForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private carSearchService: CarSearchServiceService) {
    this.addCarForm = this.fb.group({
      brand: '',
      model: '',
      type: '',
      year: '',
      price: '',
      availability: '',
      capacity: '',
      rating: '',
      location: ''
    });
  }

  onSubmit() {
    console.log("Submitting Form")
    const newCar = this.addCarForm.value;
    console.log("newCar: ", newCar)

    this.carSearchService.addCar(newCar).subscribe((response) => {
      console.log("response: ", response)
    })
  }
}
