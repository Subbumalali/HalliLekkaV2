import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeSummaryComponent } from './components/employee-summary/employee-summary.component';
import {MaterialModule} from './material/material/material.module';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { AddnewemployeeComponent } from './components/addnewemployee/addnewemployee.component';
import { EmployeelistcardComponent } from './components/employeelistcard/employeelistcard.component';
import { AddDailyActivitiesComponent } from './components/add-daily-activities/add-daily-activities.component'
import { MatNativeDateModule } from '@angular/material';
import { AddNewPaymentComponent } from './components/add-new-payment/add-new-payment.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeSummaryComponent,
    EmployeedetailsComponent,
    AddnewemployeeComponent,
    EmployeelistcardComponent,
    AddDailyActivitiesComponent,
    AddNewPaymentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
