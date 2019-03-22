import { Component, OnInit, Inject } from '@angular/core';

import { Tenniscannon } from '../shared/tenniskanon';
import { TenniskanonService } from '../services/tenniskanon.service';


@Component({
  selector: 'app-verhuur',
  templateUrl: './verhuur.component.html',
  styleUrls: ['./verhuur.component.scss']
})
export class VerhuurComponent implements OnInit {

  tenniscannons: Tenniscannon[];
  errMess: string;
  
  constructor (private tenniscannonService: TenniskanonService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.tenniscannonService.getTenniscannons()
    .subscribe(tenniscannons => this.tenniscannons = tenniscannons,
      errmess => this.errMess = <any>errmess);
  }

}
