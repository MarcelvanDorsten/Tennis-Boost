import { Component, OnInit, Inject } from '@angular/core';
import { Tenniscannon } from '../shared/tenniskanon';
import { TenniskanonService } from '../services/tenniskanon.service';
import { Promotion } from '../shared/promotie';
import { PromotieService } from '../services/promotie.service';
import { Gallery } from '../shared/galerij';
import { GalerijService } from '../services/galerij.service'; 
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  tenniscannon: Tenniscannon;
  tenniscannonErrMess: string;
  promotion: Promotion;
  gallery: Gallery;

  constructor(private tenniscannonservice: TenniskanonService,
    private promotionservice: PromotieService,
    private galleryService: GalerijService,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.tenniscannonservice.getFeaturedTenniscannon()
    .subscribe(tenniscannon => this.tenniscannon = tenniscannon,
      errmess => this.tenniscannonErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion()
    .subscribe(promotion => this.promotion = promotion);
    this.galleryService.getFeaturedGallery()
    .subscribe(gallery => this.gallery = gallery);
  }

}
