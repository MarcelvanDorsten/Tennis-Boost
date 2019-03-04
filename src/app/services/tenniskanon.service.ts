import { Injectable } from '@angular/core';

import { Tenniscannon } from '../shared/tenniskanon';
import { TENNISCANNONS } from '../shared/tenniskanondetails'

@Injectable({
  providedIn: 'root'
})
export class TenniskanonService {

  constructor() { }

getTenniscannons(): Tenniscannon[] {
  return TENNISCANNONS;
}
getTenniscannon(id: string): Tenniscannon {
  return TENNISCANNONS.filter((tenniscannon) => (tenniscannon.id === id))[0];
}
getFeaturedTenniscannon(): Tenniscannon {
  return TENNISCANNONS.filter((tenniscannon) => tenniscannon.aanbevolen)[0];
}
}
