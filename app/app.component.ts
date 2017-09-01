import { Component } from '@angular/core';
import { EmployeeService } from './Employee_Service';
import {EmployeService1} from './Employee.component';
import {Metricstream} from './Metricstream';
import {DummyJson} from './dummy.data';
//import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
   template:` <br/><label>Please Enter Your Name <b>Genius</b>: </label><input type="text" [(ngModel)]="name">
      <h2> Welcome to <img src="https://user-images.githubusercontent.com/1560278/27637937-cb4b9b24-5c11-11e7-949b-15c1e4cdb53c.gif" alt="Smiley face" align="middle" width="200" height="200"> SPA(Rouitng) <b>{{name}}</b></h2>
               <nav>
              <a routerLink="/Departments" routerLinkActive="active">Departments</a>
              <a routerLink="/Employees" routerLinkActive="active">Employee</a>
               <a routerLink="/AddList" routerLinkActive="active">Add Contacts</a>  
            <a routerLink="/metricstream" routerLinkActive="active">MetricStream </a>
              </nav>   
              <router-outlet></router-outlet>
              `,
              styles:[
                `span{
                  color:blue
                }
                h2{
          color:blue  
          }`
              ]
      //templateUrl :'app/table.data.html'  ,      
      ,           
      providers:[EmployeService1,DummyJson]  
            })

export class AppComponent{
  public UserDetails=[];
  public refname;
  public reflastname;
  public refmail;
  public refnumber;
  public refResult=true;
  public refInput=false;
  public childData;
  public EmployeeDetails;

  selectedValue:string="All";

  

  addData(value1,value2,value3,value4){
this.UserDetails.push({firstname:value1,lastname:value2,email:value3,number:value4});
this.refname='';
this.reflastname='';
this.refmail='';
  }
submit(e){
e.preventDefault();
}



}

