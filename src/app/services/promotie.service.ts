import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotie';
import { PROMOTIONS } from '../shared/promoties';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotieService {

  constructor() { }

getPromotions(): Observable<Promotion[]> {
  return of (PROMOTIONS).pipe(delay(2000));
  }

getPromotion(id: string): Observable<Promotion> {
  return of (PROMOTIONS.filter((promo) => (promo.id === id))[0])
  .pipe(delay(2000));
}

getFeaturedPromotion(): Observable<Promotion> {
  return of (PROMOTIONS.filter((promotion) => promotion.aanbevolen)[0])
  .pipe(delay(2000));
    }
  }