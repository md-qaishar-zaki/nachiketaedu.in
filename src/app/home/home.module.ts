import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { AwesomeFeatureComponent } from './awesome-feature/awesome-feature.component';
import { RegisterNowComponent } from './register-now/register-now.component';
import { TrainersComponent } from './trainers/trainers.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HomepageComponent } from './homepage/homepage.component'; 



@NgModule({
  declarations: [
    HeroBannerComponent,
    AwesomeFeatureComponent,
    RegisterNowComponent,
    TrainersComponent,
    TestimonialComponent,
    StudentFeedbackComponent,
    HomepageComponent, 
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  exports: [
    AwesomeFeatureComponent,
    HeroBannerComponent,
    RegisterNowComponent,
    StudentFeedbackComponent,
    TestimonialComponent,
    TrainersComponent
  ]
})
export class HomeModule { }
