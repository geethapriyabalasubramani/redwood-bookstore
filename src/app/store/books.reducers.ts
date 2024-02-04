import { createReducer, on } from "@ngrx/store";
import { Books } from "./books.model";
import * as BooksActions from './books.actions';

export interface BooksState {
    books: any;
    error: string;
    }
    export const initialState: BooksState = {
    books: null,
    error: ''
    };
    export const bookReducer = createReducer(
    initialState,
    
    on(BooksActions.loadBooks, state => ({ ...state})),
    
    on(BooksActions.loadBooksSuccess, (state, { books }) =>({ ...state, books })),
    
    on(BooksActions.loadBooksFailure, (state, { error }) => ({ ...state, error})),

    on(BooksActions.filterByInterest, (state, { books }) =>({ ...state, books })),
    )
    