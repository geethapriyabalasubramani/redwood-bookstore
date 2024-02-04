import {  createSelector } from "@ngrx/store"
import { BooksState } from "./books.reducers";
import { AppState } from "./books.store";
 

const feature = (state: AppState) => state.books;

export const bookSelector = createSelector(
  feature,
  (state: BooksState) => state.books
);