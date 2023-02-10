import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component'; 
import { ContactComponent } from './contact/contact.component';
import { HomeModule } from './home/home.module';
import { CourseDropdownMenuComponent } from './course-dropdown-menu/course-dropdown-menu.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { CoursesModule } from './courses/courses.module'; 
import { AdminBoardModule } from './admin-board/admin-board.module';
// import { HashLocationStrategy , LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent, 
    ContactComponent,
    CourseDropdownMenuComponent,
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoursesModule,
    AdminBoardModule,
  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


