import { Component, OnInit } from '@angular/core';

import { Tenniscannon } from '../shared/tenniskanon';

@Component({
  selector: 'app-verhuur',
  templateUrl: './verhuur.component.html',
  styleUrls: ['./verhuur.component.scss']
})
export class VerhuurComponent implements OnInit {

  tenniscannons: Tenniscannon[] = [
    {
      id: '0',
      naam: 'Tennis Twist',
      foto: '/assets/twist.jpg',
      omschrijving: 'Tennis Twist® is speciaal ontworpen voor beginnende tennisspelers. Het compacte formaat en de eenvoudige bediening maken het een ideale eerste balmachine voor kinderen die net beginnen met tennissen. Als een kind een racket kan slingeren, kan hij of zij met Tennis Twist spelen.'
    },
    {
      id: '1',
      naam: 'Tennis Cube',
      foto: '/assets/cube.jpg',
      omschrijving: 'De lichtste, meest compacte tennismachine die beschikbaar is voor beginnende en gevorderde spelers.'
    }
    ];

  constructor() { }

  ngOnInit() {
  }

}
