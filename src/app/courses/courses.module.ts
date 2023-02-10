import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DCAComponent } from './dca/dca.component';
import { AdcaComponent } from './adca/adca.component';
import { TypingComponent } from './typing/typing.component';
import { BccComponent } from './bcc/bcc.component'; 
import { WebDesignComponent } from './web-design/web-design.component';



@NgModule({
  declarations: [
    DCAComponent,
    AdcaComponent,
    TypingComponent,
    BccComponent, 
    WebDesignComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DCAComponent,
    AdcaComponent,
    TypingComponent,
    BccComponent, 
    WebDesignComponent
  ]
})
export class CoursesModule { }
