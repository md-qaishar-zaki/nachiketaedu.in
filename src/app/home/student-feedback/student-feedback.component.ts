import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.scss']
})
export class StudentFeedbackComponent {

  AllDetails = [
    { name: 'Anil', Email: 'anil@gmail.com', phone: '7633953813' },
    { name: 'Raju', Email: 'raju@gmail.com', phone: '9199219127' },
    { name: 'Mohan', Email: 'mohan@gmail.com', phone: '8409425081' },
    { name: 'Sohan', Email: 'Sohan@gmail.com', phone: '9930126710' },
    { name: 'satish', Email: 'satish@gmail.com', phone: '7633005312' },
  ]

  slides = [];
  slideConfig = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      } 
    ]
  }
  constructor() { }
  ngOnInit(): void { }
}
