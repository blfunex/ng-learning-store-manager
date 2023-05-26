export interface StoreArticle {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type DocData<T extends { id: string }> = Omit<T, 'id'>;
