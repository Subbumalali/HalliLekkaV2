import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee, NewPayment } from 'src/app/shared/employee.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-payment',
  templateUrl: './add-new-payment.component.html',
  styleUrls: ['./add-new-payment.component.css']
})
export class AddNewPaymentComponent implements OnInit {
  EmployeeData:Employee[];
  emp_id:number;
  hasDisplay:boolean=false;
  addNewPaymentControl = new FormControl('', Validators.required);
  public newPayment:NewPayment={amount_payed:0,payment_description:"Payed For daily work",date_of_payment:new Date()}
  constructor(private employeeService:EmployeeService,private route:Router) { }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe((empDataResponse)=>this.EmployeeData=empDataResponse);

  }
  AddNewPayment(newPayment)
  {
    this.newPayment.emp_id=this.emp_id;



    this.employeeService.AddNewPayment(newPayment).subscribe((data:NewPayment)=>{
      console.log("The data is"+data);
      this.route.navigate(["/employeesummary"]);
      //this.AddActivityForm.reset();
    },(error:any)=>{
      console.log(error);
    });
  }
  DisplayAddWindow()
  {

    if(this.emp_id>0)
    {
      this.hasDisplay=true;
    }
    else{
      this.hasDisplay =false;
    }
  }
  resetForm(Form)
  {
    Form.reset();
  }

}
