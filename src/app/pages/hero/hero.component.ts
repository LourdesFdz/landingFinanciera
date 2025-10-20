import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  images: string[] = [
    'assets/hero1.jpg',
    'assets/hero2.jpg',
    'assets/hero3.jpg'
  ];
  currentImageIndex = 0;
  currentImage = '';

  ngOnInit(): void {
    this.currentImage = this.images[0];
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentImageIndex];
    }, 1000); // cambia cada 5 segundos
  }
}