import { Component, OnInit } from '@angular/core';

import { Tenniscannon } from '../shared/tenniskanon';
import { TenniskanonService } from '../services/tenniskanon.service';


@Component({
  selector: 'app-verhuur',
  templateUrl: './verhuur.component.html',
  styleUrls: ['./verhuur.component.scss']
})
export class VerhuurComponent implements OnInit {

  tenniscannons: Tenniscannon[];
  selectedTenniscannon: Tenniscannon;

  constructor (private tenniscannonService: TenniskanonService) { }

  ngOnInit() {
    this.tenniscannons = this.tenniscannonService.getTenniscannons();
  }

onSelect(tenniscannon: Tenniscannon) {
  this.selectedTenniscannon = tenniscannon;
}

}
