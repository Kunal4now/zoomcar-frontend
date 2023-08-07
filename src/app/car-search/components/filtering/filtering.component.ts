import { Component } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent {
  carTypes: string[] = ['Sedan', 'SUV', 'Hatchback', 'Convertible', 'Luxury'];
  selectedCarType: string = '';
  carBrands: string[] = ['Toyota', 'Honda', 'Ford', 'BMW', 'Audi'];
  selectedCarBrand: string = '';
  carModels: string[] = ['Corolla', 'Civic', 'Focus', 'X5', 'A4'];
  selectedCarModel: string = '';
  minPrice!: any;
  maxPrice!: any;

  cardData: any[] = [
    {
      brand: 'Honda',
      model: 'Civic',
      type: 'Sedan',
      description: 'El Honda Civic es un automóvil del segmento C fabricado por la empresa japonesa Honda. Tras haber pasado por varias modificaciones de generación (actualmente van por la décima), el Civic ha crecido en tamaño, colocándose entre el Honda Fit y el Honda Accord.',
      year: 2019,
      price: 20000,
      image: 'https://imgur.com/2Gekr2z.jpg'
    },
    {
      brand: 'Toyota',
      model: 'Corolla',
      type: 'Sedan',
      year: 2019,
      price: 20000,
      image: 'https://imgur.com/SebWhtk.jpg'
    },
    {
      brand: 'Nissan',
      model: 'Sentra',
      type: 'Sedan',
      year: 2019,
      price: 20000,
      image: 'https://imgur.com/O6EkIYM.jpg'
    },
    {
      brand: 'Volkswagen',
      model: 'Jetta',
      type: 'Sedan',
      year: 2019,
      price: 20000,
      image: 'https://imgur.com/egK4F3Z.jpg'
    },
    {
      brand: 'Nissan',
      model: 'Sentra',
      type: 'Sedan',
      year: 2019,
      price: 20000,
      image: 'https://imgur.com/O6EkIYM.jpg'
    },
    {
      brand: 'Nissan',
      model: 'Sentra',
      type: 'Sedan',
      year: 2019,
      price: 20000,
      image: 'https://imgur.com/O6EkIYM.jpg'
    },
  ]

  applyFilters() {
    // Implement filtering logic here based on selectedCarType, selectedCarBrand, selectedCarModel, minPrice, maxPrice, etc.
    // You can emit an event or call a function in the parent component to apply filters.
    console.log('Applying filters...');
  }

  clearFilters() {
    this.selectedCarType = '';
    this.selectedCarBrand = '';
    this.selectedCarModel = '';
    this.minPrice = null;
    this.maxPrice = null;
    // Clear other filter variables if needed
  }
}
