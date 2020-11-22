import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from 'src/app/shared/employee.service';
import{FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  employeeControl = new FormControl('', Validators.required);
  Employees:Employee[];
  showEmployeeDetails = false;
  selectedEmployee ="Subbu";
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe((empDataResponse)=>this.Employees=empDataResponse);

  }
SetShowDetails()
{
  this.showEmployeeDetails = true;
}

}
