import { Injectable } from '@angular/core';
import { Gallery } from '../shared/galerij';
import { GALLERIES } from '../shared/galerijen';

@Injectable({
  providedIn: 'root'
})
export class GalerijService {

  constructor() { }

  getGalleries(): Gallery[] {
    return GALLERIES;
  }

  getGallery(id: string): Gallery {
    return GALLERIES.filter((gallery) => (gallery.id === id))[0];
  }
  
  getFeaturedGallery(): Gallery {
    return GALLERIES.filter((gallery) => gallery.aanbevolen)[0];
  }
}

