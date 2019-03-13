import { Injectable } from '@angular/core';

import { Tenniscannon } from '../shared/tenniskanon';
import { TENNISCANNONS } from '../shared/tenniskanondetails'

@Injectable({
  providedIn: 'root'
})
export class TenniskanonService {

  constructor() { }

getTenniscannons(): Promise<Tenniscannon[]> {
  return Promise.resolve(TENNISCANNONS);
}
getTenniscannon(id: string): Promise<Tenniscannon> {
  return Promise.resolve(TENNISCANNONS.filter((tenniscannon) => (tenniscannon.id === id))[0]);
}
getFeaturedTenniscannon(): Promise<Tenniscannon> {
  return Promise.resolve(TENNISCANNONS.filter((tenniscannon) => tenniscannon.aanbevolen)[0]);
}
}
