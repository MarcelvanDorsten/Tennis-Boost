import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotie';
import { PROMOTIONS } from '../shared/promoties';

@Injectable({
  providedIn: 'root'
})
export class PromotieService {

  constructor() { }

getPromotions(): Promise<Promotion[]> {
  return new Promise(resolve => {
    //Simuleer server vertraging met 2 seconden
    setTimeout(() => resolve(PROMOTIONS), 2000);
  });
}
getPromotion(id: string): Promise<Promotion> {
  return new Promise(resolve => {
    //Simuleer server vertraging met 2 seconden
    setTimeout(() => resolve(PROMOTIONS.filter((promo) => (promo.id === id))[0]),
    2000);
  });
}
getFeaturedPromotion(): Promise<Promotion> {
  return new Promise(resolve => {
    //Simuleer server vertraging met 2 seconden
    setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.aanbevolen)[0]),
    2000);
  });
}
}