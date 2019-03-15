import { Injectable } from '@angular/core';
import { Tenniscannon } from '../shared/tenniskanon';
import { TENNISCANNONS } from '../shared/tenniskanondetails';
import { Observable, of } from 'rxjs';
import { delay } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TenniskanonService {

  constructor() { }

getTenniscannons(): Observable<Tenniscannon[]> {
  return of (TENNISCANNONS).pipe(delay(2000));
  }

getTenniscannon(id: string): Observable<Tenniscannon> {
  return of (TENNISCANNONS.filter((tenniscannon) => (tenniscannon.id === id))[0])
  .pipe(delay(2000));
  }

getFeaturedTenniscannon(): Observable<Tenniscannon> {
  return of (TENNISCANNONS.filter((tenniscannon) => tenniscannon.aanbevolen)[0])
  .pipe(delay(2000));
   }

 getTenniscannonIds(): Observable<string[] | any> {
   return of (TENNISCANNONS.map(tenniscannon => tenniscannon.id));
 }  
}
