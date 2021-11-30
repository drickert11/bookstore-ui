import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.apiService.getBooks().subscribe(result => this.books = result)
  }



}
