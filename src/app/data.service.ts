import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';

import { IItem, IResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private requestUrl: string = 'assets/response.json';
  private errorMessage: string = '';

  constructor(private http: HttpClient) {}

  public getItems(): Observable<IItem[]> {
    return this.http.get<IResponse>(this.requestUrl).pipe(
      map((response) => response.items),
      catchError((error) => {
        this.errorMessage = error.message;
        console.log('Error:', this.errorMessage);
        return [];
      }),
    );
  }
}
