import { Component, OnInit } from '@angular/core';
import { Tenniscannon } from '../shared/tenniskanon';
import { TenniskanonService } from '../services/tenniskanon.service';
import { Promotion } from '../shared/promotie';
import { PromotieService } from '../services/promotie.service';
import { Gallery } from '../shared/galerij';
import { GalerijService } from '../services/galerij.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tenniscannon: Tenniscannon;
  promotion: Promotion;
  gallery: Gallery;

  constructor(private tenniscannonservice: TenniskanonService,
    private promotionservice: PromotieService,
    private galleryService: GalerijService) { }

  ngOnInit() {
    this.tenniscannonservice.getFeaturedTenniscannon()
    .then(tenniscannon => this.tenniscannon = tenniscannon);
    this.promotionservice.getFeaturedPromotion()
    .then(promotion => this.promotion = promotion);
    this.galleryService.getFeaturedGallery()
    .then(gallery => this.gallery = gallery);
  }

}
