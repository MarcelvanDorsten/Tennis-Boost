import { Injectable } from '@angular/core';
import { Gallery } from '../shared/galerij';
import { GALLERIES } from '../shared/galerijen';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalerijService {

  constructor() { }

  getGalleries(): Observable<Gallery[]> {
    return of (GALLERIES).pipe(delay(2000));
  }

  getGallery(id: string): Observable<Gallery> {
    return of (GALLERIES.filter((gallery) => (gallery.id === id))[0])
    .pipe(delay(2000));
    }
  
  getFeaturedGallery(): Observable<Gallery> {
    return of (GALLERIES.filter((gallery) => gallery.aanbevolen)[0])
    .pipe(delay(2000));
    }
}

