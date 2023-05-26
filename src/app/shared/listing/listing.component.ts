import { Component, EventEmitter, Input, Output } from '@angular/core';
import capitalize from 'lodash/capitalize';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent<
  T extends { id?: number | string } = { id: number }
> {
  @Input() items: T[] = [];
  @Input() keys: (keyof T)[] = [];
  @Output() edit = new EventEmitter<T['id']>();
  @Output() delete = new EventEmitter<T['id']>();
  @Output() add = new EventEmitter<void>();

  getValues(item: T) {
    return this.keys.map((key) => item[key]);
  }

  getNames() {
    return this.keys.map(capitalizeKey);
  }
}

function capitalizeKey<K extends keyof any>(key: K) {
  return capitalize(key.toString());
}
