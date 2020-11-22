import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeSummaryComponent } from './components/employee-summary/employee-summary.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { AddnewemployeeComponent } from './components/addnewemployee/addnewemployee.component';
import { EmployeelistcardComponent } from './components/employeelistcard/employeelistcard.component';
import { AddDailyActivitiesComponent } from './components/add-daily-activities/add-daily-activities.component';
import { AddNewPaymentComponent } from './components/add-new-payment/add-new-payment.component';

const routes: Routes = [
  {path:'employeesummary',component:EmployeeSummaryComponent},
  {path:'employeedetails',component:EmployeedetailsComponent},
  {path:'addnewemployee',component:AddnewemployeeComponent},
  {path:'employeeListCard',component:EmployeelistcardComponent},
  {path:'adddailyactivity',component:AddDailyActivitiesComponent},
  {path:'addpayment',component:AddNewPaymentComponent},
  {path:'',redirectTo:'/employeeListCard',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
