import { Component, OnInit } from '@angular/core';
import { EmployeeObservableService } from '../EmployeeObervable.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public getEmployeeFinalData = [];
  public yellow="string";
  constructor(private getObservableService: EmployeeObservableService) { }
  ngOnInit() {
    this.getObservableService.getEmployee123().subscribe(demo => this.getEmployeeFinalData = demo);
  }
  status:string='error';
getBackgroundColor(){
  return this.yellow;
}
}
