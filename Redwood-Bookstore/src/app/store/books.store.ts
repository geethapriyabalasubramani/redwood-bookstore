import { Action, ActionReducer } from "@ngrx/store";
import { BooksState, bookReducer } from "./books.reducers";
import { BooksEffects } from "./books.effects";

export interface AppState {
    books: BooksState
  }
  
  export interface AppStore {
    books: ActionReducer<BooksState, Action>;
  }
  
  export const appStore: AppStore = {
    books: bookReducer
  }
  
  export const appEffects = [BooksEffects];