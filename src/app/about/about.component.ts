import { Component, OnInit } from '@angular/core';
import { Gallery } from '../shared/galerij';
import { GalerijService } from '../services/galerij.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  galleries: Gallery[];

  constructor(private galleryService: GalerijService) { }


  ngOnInit() {
    this.galleryService.getGalleries()
    .subscribe(galleries => this.galleries = galleries);
  }

}
