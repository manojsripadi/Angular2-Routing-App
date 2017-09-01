import {Injectable} from '@angular/core'
import{Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class EmployeService1{
    private _url:string='apidata/employee.json';
    constructor(private _http:Http){}
    getEmployee(){
         return this._http.get(this._url).
        map((response:Response)=> response.json()).
        catch(this.errormsg);
    }

    errormsg(error:Response){
console.log(error);
return Observable.throw(error || "server Error")
    }
    
}