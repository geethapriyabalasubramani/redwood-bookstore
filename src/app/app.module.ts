import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { BooksEffects } from './store/books.effects';
import { StoreModule, provideStore } from '@ngrx/store';
import { appEffects, appStore } from './store/books.store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule
  ],
  providers: [
    provideStore(appStore),
    provideEffects(appEffects),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
