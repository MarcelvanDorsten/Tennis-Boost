import { Injectable } from '@angular/core';
import { Tenniscannon } from '../shared/tenniskanon';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TenniskanonService {


  constructor(private http: HttpClient) { }

getTenniscannons(): Observable<Tenniscannon[]> {
  return this.http.get<Tenniscannon[]>(baseURL + 'tenniscannons');
  }

getTenniscannon(id: string): Observable<Tenniscannon> {
  return this.http.get<Tenniscannon>(baseURL + 'tenniscannons/' + id);
  }

getFeaturedTenniscannon(): Observable<Tenniscannon> {
  return this.http.get<Tenniscannon[]>(baseURL + 'tenniscannons?aanbevolen=true')
  .pipe(map(tenniscannons => tenniscannons[0]));
  }

 getTenniscannonIds(): Observable<number[] | any> {
   return this.getTenniscannons().pipe(map(tenniscannons => tenniscannons.map(tenniscannon => tenniscannon.id)));
 }  
}

