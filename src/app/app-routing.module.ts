import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdcaComponent } from './courses/adca/adca.component';
import { BccComponent } from './courses/bcc/bcc.component';
import { DCAComponent } from './courses/dca/dca.component';
import { TypingComponent } from './courses/typing/typing.component';
import { WebDesignComponent } from './courses/web-design/web-design.component'; 
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AwesomeFeatureComponent } from './home/awesome-feature/awesome-feature.component';
import { HeroBannerComponent } from './home/hero-banner/hero-banner.component';
import { HomeModule } from './home/home.module';
import { HomepageComponent } from './home/homepage/homepage.component';
import { RegisterNowComponent } from './home/register-now/register-now.component';
import { StudentFeedbackComponent } from './home/student-feedback/student-feedback.component';
import { TestimonialComponent } from './home/testimonial/testimonial.component';
import { TrainersComponent } from './home/trainers/trainers.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'home', component: HomepageComponent
    //  ,children: [
    //   { path: 'AwesomeFeature', component: AwesomeFeatureComponent },
    //   { path: 'HeroBanner', component: HeroBannerComponent },
    //   { path: 'RegisterNow', component: RegisterNowComponent },
    //   { path: 'StudentFeedback', component: StudentFeedbackComponent },
    //   { path: 'Testimonial', component: TestimonialComponent },
    //   { path: 'Trainers', component: TrainersComponent },
    // ]
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'service', component: ServiceComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'enquiry', component: EnquiryComponent
  },
  {
    path: 'adca', component: AdcaComponent
  },
  {
    path: 'bcc', component: BccComponent
  },
  {
    path: 'dca', component: DCAComponent
  },
  {
    path: 'typing', component: TypingComponent
  },
  {
    path: 'web-desing', component: WebDesignComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // {useHash: true}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
