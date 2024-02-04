import { Component } from '@angular/core';
import { BookstoreSearchResultService } from '../../services/bookstore-search-result.service';
import { Store } from '@ngrx/store';
import * as BooksActions from '../../store/books.actions';
import { AppState } from '../../store/books.store';
import { Observable, of } from 'rxjs';
import { bookSelector } from '../../store/books.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public bookStoreResult: any;
  public searchabook: string = '';
  public selectedLanguage:string = "selectLang"
  books$: Observable<any> = of([]);
  selectedInterest:string = 'select';
  randomTwoDigitNumber:number = 0;
  constructor(public dashboardService: BookstoreSearchResultService, private store: Store<AppState>) {

  }
  ngOnInit() {
    this.books$ = this.store.select(bookSelector);
    this.books$.subscribe(res => {
      if (res && res.items) {
        this.bookStoreResult = res.items;
      }
    })
    this.store.dispatch(BooksActions.loadBooks({}));
    this.randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10;
  }
  public onSelectInterest(event: any) {
    this.searchabook = "";
    this.selectedLanguage = "selectLang"
    const url = "https://www.googleapis.com/books/v1/volumes?q=subject:" + event.target.value;
    const item: any = { description: url };
    this.store.dispatch(BooksActions.loadBooks(item));
  }
  
  public onSelectLanguage(event: any) {
    this.searchabook = "";
    this.selectedInterest = 'select';
    const url = "https://www.googleapis.com/books/v1/volumes?q=flowers+langRestrict=" + event.target.value;
    const item: any = { description: url };
    this.store.dispatch(BooksActions.loadBooks(item));
  }
  public search() {
    this.selectedInterest = 'select';
    this.selectedLanguage = "selectLang"
    const url = "https://www.googleapis.com/books/v1/volumes?q=" + this.searchabook;
    const item: any = { description: url };
    this.store.dispatch(BooksActions.loadBooks(item));
  }
}
