import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookstoreSearchResultService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=flowers';
  constructor(private http: HttpClient) { }  
  getBooks(url:any): Observable<any> {
    if(url && url.description){
    this.apiUrl = url.description;
    }
    return this.http.get<any>(this.apiUrl);
  }
}
