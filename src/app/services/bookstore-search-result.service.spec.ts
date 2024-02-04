import { TestBed } from '@angular/core/testing';

import { BookstoreSearchResultService } from './bookstore-search-result.service';

describe('BookstoreSearchResultService', () => {
  let service: BookstoreSearchResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookstoreSearchResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
