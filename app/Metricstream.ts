import {Component,OnInit} from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {EventEmitter} from '@angular/core';
import {DummyJson} from './dummy.data';

@Component({
    selector:'my-metricstream',
    templateUrl:'app/metricstream.html'
    //template:`<p>The value is:{{childData}}</p>`  
})
export class Metricstream implements OnInit{
public childData;
public userData;
public reftype;
public refID;
public refname;
public refauditid;
constructor(private __service:DummyJson){}
ngOnInit(){
    this.__service.getDetails().
    subscribe(response => this.childData=response)
}
edit(value){
  console.log(value);
  alert('Audit Type ' + value.Atype +', '+ ' Factory Id ' +', '+ value.FID + ' Factory Name ' +', '+ value.Fname);
}

add(){
this.reftype='';
this.refID='';
this.refname='';
this.refauditid='';
}
}