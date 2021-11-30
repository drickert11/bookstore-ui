import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Book } from './models/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL + '/book');
  }

  getBookByID(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiURL + '/book' + id);
  }

  createBook(book: Book){
    return this.http.post<Book>(this.apiURL + '/newBook', JSON.stringify(book), this.httpOptions);
  }

  updateBook(book: Book){
    return this.http.put<Book>(this.apiURL + '/book', JSON.stringify(book), this.httpOptions);
  }

  deleteBook(id: number){ 
    return this.http.delete<Book>(this.apiURL + '/deleteBook/' + id, this.httpOptions);
  }

}
