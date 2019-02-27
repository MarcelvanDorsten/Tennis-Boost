import { Component, OnInit } from '@angular/core';

import { TENNISCANNONS } from '../shared/tenniskanondetails';
import { Tenniscannon } from '../shared/tenniskanon';



@Component({
  selector: 'app-verhuur',
  templateUrl: './verhuur.component.html',
  styleUrls: ['./verhuur.component.scss']
})
export class VerhuurComponent implements OnInit {

  tenniscannons: Tenniscannon[] = TENNISCANNONS;
  selectedTenniscannon: Tenniscannon;

  constructor() { }

  ngOnInit() {
  }

onSelect(tenniscannon: Tenniscannon) {
  this.selectedTenniscannon = tenniscannon;
}

}
