import { Component, OnInit } from '@angular/core';
import {Employee,EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employeelistcard',
  templateUrl: './employeelistcard.component.html',
  styleUrls: ['./employeelistcard.component.css']
})
export class EmployeelistcardComponent implements OnInit {
  EmployeeData:Employee[];
  photopath="../../assets/images/employeeImage.jpg"
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe((empDataResponse)=>this.EmployeeData=empDataResponse);

  }

}
