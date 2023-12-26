import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
 slides=[
  {img:"src/assets/images/banner2.webp"},
  {img:"src/assets/images/banner3.webp"},
  {img:"src/assets/images/banner2.webp"},
  {img:"src/assets/images/banner3.webp"},
  {img:"src/assets/images/banner2.webp"},
  {img:"src/assets/images/banner3.webp"},
  {img:"src/assets/images/banner2.webp"},
  {img:"src/assets/images/banner3.webp"},
  {img:"src/assets/images/banner2.webp"},
  {img:"src/assets/images/banner3.webp"}
 ];
 slideConfig={
  "slidesToShow":4,
  "slidesToScroll":4,
  "autoplay":true,
  "autoplaySpeed":5000,
  "pauseOnHover":true,
  "infinite":true,
  "responsive":[
    {
      "breakpoint":992,
      "settings":{
        "arrows":true,
        "infinite":true,
        "slidesToShow":3,
        "slidesToScroll":3
      }
    },
    {
      "breakpoint":768,
      "settings":{
        "arrows":true,
        "infinite":true,
        "slidesToShow":1,
        "slidesToScroll":1
      }
    }
  ]
 };
}
