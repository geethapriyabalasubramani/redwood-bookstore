import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import * as BooksActions from './books.actions';
import { BookstoreSearchResultService } from "../services/bookstore-search-result.service";

@Injectable()
export class BooksEffects {    
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      mergeMap((action) =>
        this.bookService.getBooks(action).pipe(
          map((res) => BooksActions.loadBooksSuccess({ books:res })),
          catchError((error) =>
            of(BooksActions.loadBooksFailure({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private bookService: BookstoreSearchResultService) {}
}
