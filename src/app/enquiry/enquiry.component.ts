import { Component } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
