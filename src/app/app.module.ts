import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingComponent } from './shared/listing/listing.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ArticleFormComponent, ListingComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
