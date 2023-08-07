import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent {
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
    }
  ]

  onCardDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cardData, event.previousIndex, event.currentIndex);
  }
}
