import { Component, OnInit } from '@angular/core';
// import { getMaxListeners } from 'cluster';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  animals:Array<string|number>=["cat", "dog",4];
  selfData:object={
    name:"ramesh",
    age:23

  }
  employeeDemo:Array<object>=[{
    name:"ramesh",
    age:23,
    place:"AP",
    email:"rameshgollpalli37@gmail.com"
  },
  {
    name:"basha",
    age:26,
    place:"tn",
    email:"basha@gmail.com" 
  },
  {
  name:"ramesh",
    age:25,
    place:"ka",
    email:"sai9497@email.com"
  },
  {
    name:"bachu",
      age:30,
      place:"ts",
      email:"bachu97@email.com"
    },
];
homeImage:string="../assets/images/01-homepage_v1-.jpg";
  
  constructor() { }

  ngOnInit() {
  }

}
