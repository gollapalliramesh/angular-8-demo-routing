import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private employeeDataTs:EmployeeService) { }
  getAlert():void{
    this.employeeDataTs.getEmployeeAlert();
  }


  ngOnInit() {
    
  }

}
