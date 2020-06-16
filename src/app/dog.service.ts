import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Image } from './image';
import { Breed } from './breed';


const httpHeaders =  new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': environment.apiKey
  });

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private http: HttpClient) { }

  getImages(limit: number, breed?: number): Observable<Image[]>{
    let httpParams = new HttpParams()
      .set('limit', limit?.toString());

    if (breed != null){
      httpParams = httpParams.set('breed_id', breed?.toString());
    }

    return this.http.get<Image[]>(
      environment.apiUrl + '/images/search',
      {headers: httpHeaders, params: httpParams}
      );
  }

  getBreed(breedId: number){
    return this.http.get<Breed>(
      `${environment.apiUrl}/breeds/${breedId}`,
      {headers: httpHeaders}
      );
  }

}
