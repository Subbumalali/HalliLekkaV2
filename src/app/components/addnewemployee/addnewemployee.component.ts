import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import{ NgForm} from '@angular/forms';
import { Employee, EmployeeService } from 'src/app/shared/employee.service';
import{Router} from '@angular/router'


@Component({
  selector: 'app-addnewemployee',
  templateUrl: './addnewemployee.component.html',
  styleUrls: ['./addnewemployee.component.css']
})
export class AddnewemployeeComponent implements OnInit {
  @ViewChild('EmployeeForm') public EmployeeFormData:NgForm
public Employee:Employee={emp_name:'',contact_number:91,total_salary:0,amount_due:0};
AddNewEmployeeForm;
  constructor(private employeeService:EmployeeService,private route:Router) { }

  ngOnInit() {
  }

  AddNewEmployee(employee)
  {
      this.employeeService.AddNewEmployee(employee).subscribe((data:Employee)=>{
        console.log(data);
        this.route.navigate(["/employeesummary"]);
        this.EmployeeFormData.reset();
      },(error:any)=>{
        console.log(error);
      });



  }
  resetForm(Form)
  {
      Form.reset();
  }
}
