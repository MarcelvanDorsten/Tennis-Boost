import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Tenniscannon } from '../shared/tenniskanon';
import { TenniskanonService } from '../services/tenniskanon.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

tenniscannon: Tenniscannon;
tenniscannonIds: string[];
prev: string;
next: string;

  constructor(private tenniscannonService: TenniskanonService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.tenniscannonService.getTenniscannonIds()
    .subscribe((tenniscannonIds) => this.tenniscannonIds = tenniscannonIds);
  this.route.params.pipe(switchMap((params: Params) => this.tenniscannonService.getTenniscannon(params['id'])))
        .subscribe(tenniscannon => { this.tenniscannon = tenniscannon; this.setPrevNext(tenniscannon.id); });
}

setPrevNext(tenniscannonId: string) {
  const index = this.tenniscannonIds.indexOf(tenniscannonId);
  this.prev = this.tenniscannonIds[(this.tenniscannonIds.length + index -1) % this.tenniscannonIds.length];
  this.next = this.tenniscannonIds[(this.tenniscannonIds.length + index +1) % this.tenniscannonIds.length];
}

  goBack(): void {
    this.location.back();
  }
}
