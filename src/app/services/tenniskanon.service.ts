import { Injectable } from '@angular/core';
import { Tenniscannon } from '../shared/tenniskanon';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPmsgService } from './process-httpmsg-service.service'; 


@Injectable({
  providedIn: 'root'
})
export class TenniskanonService {


  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPmsgService) { }

getTenniscannons(): Observable<Tenniscannon[]> {
  return this.http.get<Tenniscannon[]>(baseURL + 'tenniscannons')
  .pipe(catchError(this.processHTTPMsgService.handleError));
  }

getTenniscannon(id: string): Observable<Tenniscannon> {
  return this.http.get<Tenniscannon>(baseURL + 'tenniscannons/' + id)
  .pipe(catchError(this.processHTTPMsgService.handleError));
  }

getFeaturedTenniscannon(): Observable<Tenniscannon> {
  return this.http.get<Tenniscannon[]>(baseURL + 'tenniscannons?aanbevolen=true')
  .pipe(map(tenniscannons => tenniscannons[0]))
  .pipe(catchError(this.processHTTPMsgService.handleError));
  }

 getTenniscannonIds(): Observable<number[] | any> {
   return this.getTenniscannons().pipe(map(tenniscannons => tenniscannons.map(tenniscannon => tenniscannon.id)))
   .pipe(catchError(error => error));
 }  

putTenniscannon(tenniscannon: Tenniscannon): Observable<Tenniscannon> {
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
return this.http.put<Tenniscannon>(baseURL + 'tenniscannons/' + tenniscannon.id, tenniscannon, httpOptions)
.pipe(catchError(this.processHTTPMsgService.handleError));
}
}

