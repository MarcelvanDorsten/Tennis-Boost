import { Component, OnInit } from '@angular/core';
import { Gallery } from '../shared/galerij';
import { GalerijService } from '../services/galerij.service';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})

export class AboutComponent implements OnInit {

  galleries: Gallery[];

  constructor(private galleryService: GalerijService) { }


  ngOnInit() {
    this.galleryService.getGalleries()
    .subscribe(galleries => this.galleries = galleries);
  }

}

