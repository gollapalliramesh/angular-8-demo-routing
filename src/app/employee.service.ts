import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
getEmployeeAlert(){
  alert("This is Employee Service");
};
employeeTestData=[
  {
    SNo:1,
    name:"ramesh",
    Place:"KA",
    Service:"test service"
  },
  {
    SNo:2,
    name:"basha",
    Place:"TS",
    Service:"demo service"
  },
  {
    SNo:3,
    name:"sai",
    Place:"AP",
    Service:"text service"
  },
  {
    SNo:4,
    name:"bachu",
    Place:"TN",
    Service:"test service"
  }

]
  constructor() { }
}
