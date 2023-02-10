import { Component } from '@angular/core';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent {

  details = [
    {name:'Chandan kumar',Specialization:' L.F cum Centre Manager' , Phone:'+91 ----------' , images:'Chandan kumar L.F cum Centre Manager'},
    {name:'Rupesh Nirvikar',Specialization:' Director cum L.F' , Phone:'+91 7903013821', images:'Rupesh Nirvikar Director cum L.F.'},
    {name:'Raushan ranjan',Specialization:'L.F cum Coordinator' , Phone:'+91 ----------', images:'Raushan ranjan L.F cum Coordinator'},
    {name:'Pinky Somya',Specialization:'L.F Cum Convenor' , Phone:'+91 ----------', images:'Pinky Somya L.F Cum Convenor'},
    {name:'Sonu kumar',Specialization:'L.F cum Branch Manager' , Phone:'+91 ----------', images:'Sonu kumar L.F cum Branch Manager (2)'},
  ]

   ngOnInit() {

  }

}
