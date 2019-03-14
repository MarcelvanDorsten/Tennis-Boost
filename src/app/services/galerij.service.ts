import { Injectable } from '@angular/core';
import { Gallery } from '../shared/galerij';
import { GALLERIES } from '../shared/galerijen';

@Injectable({
  providedIn: 'root'
})
export class GalerijService {

  constructor() { }

  getGalleries(): Promise<Gallery[]> {
    return new Promise(resolve => {
      //Simuleer server vertraging met 2 seconden
      setTimeout(() => resolve(GALLERIES), 2000);
    });
  }

  getGallery(id: string): Promise<Gallery> {
    return new Promise(resolve => {
      //Simuleer server vertraging met 2 seconden
      setTimeout(() => resolve(GALLERIES.filter((gallery) => (gallery.id === id))[0]),
      2000);
    });
  }
  
  getFeaturedGallery(): Promise<Gallery> {
    return new Promise(resolve => {
      //Simuleer server vertraging met 2 seconden
      setTimeout(() => resolve(GALLERIES.filter((gallery) => gallery.aanbevolen)[0]),
      2000);
    });
  }
}

