import { Injectable } from '@angular/core';
import { StoreArticle } from './store-article';

@Injectable({
  providedIn: 'root',
})
export class StoreDataService {
  readonly articles: StoreArticle[] = [];

  private articleIdCounter = 0;

  add(article: Omit<StoreArticle, 'id'>) {
    this.articles.push({
      ...article,
      id: this.articleIdCounter++,
    });
  }
}
