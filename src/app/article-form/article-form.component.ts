import { Component, OnInit } from '@angular/core';
import { StoreArticle } from '../store-article';
import { Location } from '@angular/common';
import { StoreDataService } from '../store-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  ngOnInit() {}

  constructor(private location: Location, private store: StoreDataService) {}

  onSubmitNewArticleForm(form: NgForm, article: Omit<StoreArticle, 'id'>) {
    console.log(form);
    this.store.add(article);
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }
}
