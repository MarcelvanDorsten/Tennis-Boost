import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Tenniscannon } from '../shared/tenniskanon';
import { TenniskanonService } from '../services/tenniskanon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

tenniscannon: Tenniscannon;

  constructor(private tenniscannonservice: TenniskanonService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.tenniscannonservice.getTenniscannon(id)
    .subscribe(tenniscannon => this.tenniscannon = tenniscannon);
  }

  goBack(): void {
    this.location.back();
  }
}
