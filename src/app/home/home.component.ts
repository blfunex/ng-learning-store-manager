import { Component } from '@angular/core';
import { StoreDataService } from '../store-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(readonly store: StoreDataService) {}
}
