import { Injectable } from '@angular/core';

import { Tenniscannon } from '../shared/tenniskanon';
import { TENNISCANNONS } from '../shared/tenniskanondetails'

@Injectable({
  providedIn: 'root'
})
export class TenniskanonService {

  constructor() { }

getTenniscannons(): Promise<Tenniscannon[]> {
  return new Promise(resolve => {
    //Simuleer server vertraging met 2 seconden
    setTimeout(() => resolve(TENNISCANNONS), 2000);
  });
}
getTenniscannon(id: string): Promise<Tenniscannon> {
  return new Promise(resolve => {
    //Simuleer server vertraging met 2 seconden
    setTimeout(() => resolve(TENNISCANNONS.filter((tenniscannon) => (tenniscannon.id === id))[0]),
    2000);
  });
}
getFeaturedTenniscannon(): Promise<Tenniscannon> {
  return new Promise(resolve => {
    //Simuleer server vertraging met 2 seconden
    setTimeout(() => resolve(TENNISCANNONS.filter((tenniscannon) => tenniscannon.aanbevolen)[0]),
    2000);
  });   
}
}
