import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StoreArticle } from '../store-article';
import { Location } from '@angular/common';
import { StoreDataService } from '../store-data.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit, OnDestroy {
  ngOnInit() {
    this.setFormEditValues();
  }

  ngOnDestroy() {
    this.unsubscribeSnapshot();
  }

  readonly form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private router: Router,
    private store: StoreDataService
  ) {
    this.form = this.fb.group({
      name: fb.control('', Validators.required),
      description: fb.control('', Validators.required),
      price: fb.control(0, Validators.required),
    });
    this.unsubscribeSnapshot = this.store.onSnapshot(() =>
      this.setFormEditValues()
    );
  }

  private setFormEditValues() {
    if (this.mode !== 'edit') return;
    const article = this.store.getLocal(this.id!);
    if (!article) return;
    this.form.reset(article);
  }

  private unsubscribeSnapshot: () => void = () => {};

  get mode() {
    return this.router.url.endsWith('new') ? 'new' : 'edit';
  }

  @Input() id: string | null = null;

  onSubmit(article: Omit<StoreArticle, 'id'>) {
    if (this.mode === 'new') {
      this.store.add(article);
    } else {
      this.store.update(this.id!, article);
    }
    this.location.back();
  }

  onCancel() {
    this.location.back();
  }
}
