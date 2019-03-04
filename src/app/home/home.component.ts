import { Component, OnInit } from '@angular/core';
import { Tenniscannon } from '../shared/tenniskanon';
import { TenniskanonService } from '../services/tenniskanon.service';
import { Promotion } from '../shared/promotie';
import { PromotieService } from '../services/promotie.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tenniscannon: Tenniscannon;
  promotion: Promotion;

  constructor(private tenniscannonservice: TenniskanonService,
    private promotionservice: PromotieService) { }

  ngOnInit() {
    this.tenniscannon = this.tenniscannonservice.getFeaturedTenniscannon();
    this.promotion = this.promotionservice.getFeaturedPromotion();
  }

}
