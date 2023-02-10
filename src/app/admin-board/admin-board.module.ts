import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBoardRoutingModule } from './admin-board-routing.module';
import { SiderMenuComponent } from './sider-menu/sider-menu.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { AdminBoardComponent } from './admin-board.component';


@NgModule({
  declarations: [
    SiderMenuComponent,
    MainDashboardComponent,
    AdminBoardComponent
  ],
  imports: [
    CommonModule,
    AdminBoardRoutingModule
  ]
})
export class AdminBoardModule { }
