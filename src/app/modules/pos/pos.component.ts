import { Component } from '@angular/core';
import { AppState } from '../../store/books.store';
import { BookstoreSearchResultService } from '../../services/bookstore-search-result.service';
import * as BooksActions from '../../store/books.actions';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { bookSelector } from '../../store/books.selectors';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss'
})
export class PosComponent {
  books$: Observable<any> = of([]);
  bookStoreResult:any;
  showCheckout:boolean = false;
  constructor(public dashboardService: BookstoreSearchResultService, private store: Store<AppState>) {}
  ngOnInit() {   
    const url = "https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=3";
    const item: any = { description: url };
    this.store.dispatch(BooksActions.loadBooks(item));
    this.books$ = this.store.select(bookSelector);
    this.books$.subscribe(res => {
      if (res && res.items) {
        this.bookStoreResult = res.items;
      }
    })
  }
  public continueCheckout(){
    this.showCheckout = true;
  }
}

