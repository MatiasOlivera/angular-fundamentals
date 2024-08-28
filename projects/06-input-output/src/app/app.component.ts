import { Component } from '@angular/core';
import { Car } from './car';
import { ListingComponent } from './listing/listing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListingComponent],
  template: `
    <h1>Saved Cars {{ savedCarList.length }}</h1>

    <section class="container">
      @for (car of carList; track car.id) {
      <app-listing [car]="car" (carSaved)="addCarToSaved($event)" />
      } @empty {
      <p>No listings available</p>
      }
    </section>

    <article>
      <!-- saved cars -->
      @for (savedCarEntry of savedCarList; track savedCarEntry.id) {
      <p>{{ savedCarEntry.make }} {{ savedCarEntry.model }}</p>
      }
    </article>
  `,
  styles: [],
})
export class AppComponent {
  savedCarList: Car[] = [];
  carList: Car[] = [
    {
      id: 1,
      make: 'Foyoda',
      model: 'Famery',
      miles: 54354,
      price: 1000,
      year: 2022,
      transmission: 'Automatic',
    },
    {
      id: 2,
      make: 'Ronda',
      model: 'Disaccord',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      id: 3,
      make: 'Specific Motors',
      model: 'Spoke',
      miles: 100000,
      price: 230,
      year: 1991,
      transmission: 'Automatic',
    },
    {
      id: 4,
      make: 'Fjord',
      model: 'Pocus',
      miles: 1,
      price: 22330,
      year: 2023,
      transmission: 'Automatic',
    },
  ];

  addCarToSaved(car: Car) {
    this.savedCarList.push(car);
  }
}
