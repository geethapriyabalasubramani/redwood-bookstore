import { createAction, props } from "@ngrx/store";

export const loadBooks = createAction('[books] Load books', props<{ queryParam?: string }>());
export const loadBooksSuccess = createAction('[books] Load books Success', props<{ books: any }>());
export const loadBooksFailure = createAction('[books] Load books Failure', props<{ error: string }>());
export const filterByInterest = createAction('[books] Add books', props<{ books: any }>());