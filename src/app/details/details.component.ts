import { Component, OnInit, Input } from '@angular/core';

import { Tenniscannon } from '../shared/tenniskanon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

@Input()
tenniscannon: Tenniscannon;

  constructor() { }

  ngOnInit() {
  }

}
