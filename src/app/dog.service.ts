import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Image } from './image';


const httpHeaders =  new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': environment.apiKey
  });

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private http: HttpClient) { }

  getImages(limit?: number, breed?: number): Observable<Image[]>{
    const httpParams = new HttpParams()
      .set('limit', limit?.toString())
      .set('breed', breed?.toString());

    return this.http.get<Image[]>(environment.apiUrl + '/images/search', {headers: httpHeaders, params: httpParams})
      .pipe(
        catchError(this.handleError<Image[]>('getImages', null))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
