import { Injectable } from '@angular/core';
import { StoreArticle } from './store-article';
import { Firestore } from '@angular/fire/firestore';
import {
  CollectionReference,
  collection,
  onSnapshot,
  addDoc,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class StoreDataService {
  constructor(private db: Firestore) {
    this.articleCollection = collection(
      this.db,
      'articles'
    ) as CollectionReference<Omit<StoreArticle, 'id'>>;
    this.initializeData();
  }

  private articleCollection: CollectionReference<Omit<StoreArticle, 'id'>>;

  private async initializeData() {
    onSnapshot(this.articleCollection, (snapshot) => {
      this.articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  }

  public articles: StoreArticle[] = [];

  add(article: Omit<StoreArticle, 'id'>) {
    addDoc(this.articleCollection, article);
  }
}
