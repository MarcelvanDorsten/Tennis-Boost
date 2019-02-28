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

}
