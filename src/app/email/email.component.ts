import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
public finalData=[];
  constructor(private employeeDataTs:EmployeeService) { }

  ngOnInit() {
    this.finalData=this.employeeDataTs.employeeTestData;
  }

}



