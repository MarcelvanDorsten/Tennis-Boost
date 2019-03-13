import { Injectable } from '@angular/core';
import { Gallery } from '../shared/galerij';
import { GALLERIES } from '../shared/galerijen';

@Injectable({
  providedIn: 'root'
})
export class GalerijService {

  constructor() { }

  getGalleries(): Promise<Gallery[]> {
    return Promise.resolve(GALLERIES);
  }

  getGallery(id: string): Promise<Gallery> {
    return Promise.resolve(GALLERIES.filter((gallery) => (gallery.id === id))[0]);
  }
  
  getFeaturedGallery(): Promise<Gallery> {
    return Promise.resolve(GALLERIES.filter((gallery) => gallery.aanbevolen)[0]);
  }
}

