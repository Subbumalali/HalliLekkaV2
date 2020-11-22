import { Component, OnInit, ViewChild } from '@angular/core';
import { DailyActivities, EmployeeService, Employee } from 'src/app/shared/employee.service';
import { FormControl, Validators,NgForm } from '@angular/forms';
import{Router} from '@angular/router'
import { empty } from 'rxjs';

@Component({
  selector: 'app-add-daily-activities',
  templateUrl: './add-daily-activities.component.html',
  styleUrls: ['./add-daily-activities.component.css']
})
export class AddDailyActivitiesComponent implements OnInit {
  @ViewChild('EmployeeForm') public AddActivityForm:NgForm
dailyActivityControl = new FormControl('', Validators.required);
public dailyActivity:DailyActivities={activities_description:"house cleaning",day_salary:0,type_of_work:"Full Day",date_of_work:new Date()}
emp_id:number;
typeOfWork=["Full Day","Evening"];
EmployeeData :Employee[];
hasDisplay:boolean=false;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  constructor(private employeeService:EmployeeService,private route:Router) { }

  ngOnInit() {
    this.employeeService.getAllEmployee().subscribe((empDataResponse)=>this.EmployeeData=empDataResponse);
    
  }
  AddDailyActivity(dailyActivity)
  {
    this.dailyActivity.emp_id=this.emp_id;

    console.log("the object is"+dailyActivity.date_of_work);

    this.employeeService.AddDailyActivities(dailyActivity).subscribe((data:DailyActivities)=>{
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
