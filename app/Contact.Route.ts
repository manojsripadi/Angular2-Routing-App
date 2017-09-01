import {Component} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
selector:'contact',
templateUrl:'app/Add.list.html',

 styles:[`input.ng-invalid,
          h2{
          color:blue  
          }
        input.ng-invalid{
          border-left:5px solid red
        } 
        input.ng-valid{
          border-left:5px solid green
        }
       `]
})
export class ContactRoute {
  userForm; 
  UserDetails=[
    {firstname:'John',lastname:'Joseph',mail:'Joseph@gmail.com',number:9148792732},
    {firstname:'Alex',lastname:'Hales',mail:'Alex@gmail.com',number:9148792732},
     {firstname:'Sachin',lastname:'Tendulkar',mail:'Sachin@gmail.com',number:9148792732}
  ];
  refFirst='';
  refLast='';
  refMail='';
  refNumber;
  refname;
UserData:any;
public makeResult;
public makeResult1;

addData(){
     this.UserDetails.push({firstname:this.refFirst,
                            lastname:this.refLast,
                             mail:this.refMail,
                            number:this.refNumber});

       this.refFirst='';
 this.refLast='';
 this.refMail='';
 this.refNumber=''; 

 //console.log(this.refname.value);                    
  }

  onclickevent(event){
    console.log(event);
  }
 makeInputenable=false;
 makeInputenable1=true;
 makeedithidden=false;
 makedonehidden=true;
editData(){
this.makeInputenable=!this.makeInputenable;
this.makeInputenable1=!this.makeInputenable1;
this.makeedithidden=!this.makeedithidden;
this.makedonehidden=!this.makedonehidden;

}
trackByIndex(index: number, obj: any): any {
  return index;
}
onSubmit(value){
  alert('hello');
console.log(value);
}
  
}