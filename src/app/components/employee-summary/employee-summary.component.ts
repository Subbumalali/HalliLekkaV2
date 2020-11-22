import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.css']
})
export class EmployeeSummaryComponent implements OnInit {
  EmployeeData:Employee[];
  
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe((empDataResponse)=>this.EmployeeData=empDataResponse);

  }

}
