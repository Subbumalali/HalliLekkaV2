import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError}  from'rxjs/operators';


export interface Employee{
  emp_id ?:number;
  emp_name :string;
  contact_number:number;
  total_salary:number;
  amount_due:number;
  date_of_join ?:Date;

}
export interface DailyActivities{
  voucher_no ? : number;
  emp_id ?:number;
  type_of_work ?:string;
  activities_description ?:string;
  day_salary ?:number;
  date_of_work ?:Date;
}
export interface NewPayment{
  payment_reference_no ? :number,
  emp_id ?:number,
  amount_payed ?:number,
  payment_description ?:string,
  date_of_payment ?:Date
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl="http://192.168.26.105:8087/dashboard/ApiEmployeeManagement2020/"


  constructor(private http:HttpClient) { }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
  getAllEmployee():Observable<Employee[]>
  {
      return this.http.get<Employee[]>(this.baseUrl+"ListAllEmployees.php");
  }
  AddNewEmployee(employee:Employee):Observable<Employee>
  {
    return this.http.post<Employee>(this.baseUrl+"AddNewEmployee.php",employee,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    .pipe(catchError(this.handleError));
  }
  AddDailyActivities(dailyactivity:DailyActivities):Observable<DailyActivities>
  {
      return this.http.post<DailyActivities>(this.baseUrl+"AddNewDailyActivity.php",dailyactivity,{
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      })
      .pipe(catchError(this.handleError));
  }
  AddNewPayment(NewPayment:NewPayment):Observable<NewPayment>
  {
    return this.http.post<DailyActivities>(this.baseUrl+"AddNewPayment.php",NewPayment,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    .pipe(catchError(this.handleError));
  }

}
