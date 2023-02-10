import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  coursedropdownmenu: boolean = false;
  downarrow: boolean = false;
  navactive:boolean=false
  
  ngOnInit() {
    $(window).scroll(function () {
      if (window.pageYOffset > 10) {
        $(".header_area").addClass("navbar_fixed");
      }
      else {
        $(".header_area").removeClass("navbar_fixed");
      }
    })

    // $('.navbar-toggler').toggleClass('offcanvas-menu');

    $('.navbar-toggler').click(function () {
      $('body').toggleClass('offcanvas-menu');
    })

    $('.close').click(function () {
      $('body').removeClass('offcanvas-menu');
    })
 
    $('.nav-item').click(function () {
      $('body').removeClass('offcanvas-menu');
    })
    
  }

  showmenu() {
    this.coursedropdownmenu = !this.coursedropdownmenu;
    this.downarrow = !this.downarrow;
    this.navactive = !this.navactive;
  }


}
