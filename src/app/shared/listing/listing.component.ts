import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent<T extends { id: number } = { id: number }> {
  @Input() items: T[] = [];

  getValues(item: T) {
    return Object.entries(item).filter(([key]) => key !== 'id');
  }
}
