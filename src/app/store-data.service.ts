import { Injectable } from '@angular/core';
import { DocData, StoreArticle } from './store-article';
import {
  Firestore,
  CollectionReference,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { DocumentReference, doc, documentId } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class StoreDataService {
  constructor(private db: Firestore) {
    this.initializeData();
  }

  private articleCollection = collection(
    this.db,
    'articles'
  ) as CollectionReference<DocData<StoreArticle>>;
  private articleRefs: Record<
    string,
    DocumentReference<DocData<StoreArticle>>
  > = {};

  private initializeData() {
    onSnapshot(this.articleCollection, (snapshot) => {
      this.articles = snapshot.docs.map((doc) => {
        const article = { ...doc.data(), id: doc.id };
        this.articleRefs[doc.id] = doc.ref;
        this.articlesMap[doc.id] = article;
        return article;
      });
    });
  }

  public onSnapshot(callback: () => void) {
    return onSnapshot(this.articleCollection, callback);
  }

  public articles: StoreArticle[] = [];
  private articlesMap: Record<string, StoreArticle> = {};

  async add(article: Omit<StoreArticle, 'id'>) {
    await addDoc(this.articleCollection, article);
  }

  async delete(id: string) {
    await deleteDoc(this.articleRefs[id]);
  }

  getLocal(id: string) {
    return this.articlesMap[id];
  }

  async update(id: string, article: Omit<StoreArticle, 'id'>) {
    await updateDoc(this.articleRefs[id], article);
  }
}
