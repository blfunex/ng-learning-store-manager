import { Component } from '@angular/core';
import { StoreDataService } from '../store-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(readonly store: StoreDataService, private router: Router) {}

  onEditArticle(id: string) {}

  onDeleteArticle(id: string) {}

  onAddArticle() {
    this.router.navigate(['article/new']);
  }
}
