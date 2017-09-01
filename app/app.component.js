"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_component_1 = require("./Employee.component");
var dummy_data_1 = require("./dummy.data");
//import {FormGroup,FormBuilder,Validators} from '@angular/forms';
var AppComponent = (function () {
    function AppComponent() {
        this.UserDetails = [];
        this.refResult = true;
        this.refInput = false;
        this.selectedValue = "All";
    }
    AppComponent.prototype.addData = function (value1, value2, value3, value4) {
        this.UserDetails.push({ firstname: value1, lastname: value2, email: value3, number: value4 });
        this.refname = '';
        this.reflastname = '';
        this.refmail = '';
    };
    AppComponent.prototype.submit = function (e) {
        e.preventDefault();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: " <br/><label>Please Enter Your Name <b>Genius</b>: </label><input type=\"text\" [(ngModel)]=\"name\">\n      <h2> Welcome to <img src=\"https://user-images.githubusercontent.com/1560278/27637937-cb4b9b24-5c11-11e7-949b-15c1e4cdb53c.gif\" alt=\"Smiley face\" align=\"middle\" width=\"200\" height=\"200\"> SPA(Rouitng) <b>{{name}}</b></h2>\n               <nav>\n              <a routerLink=\"/Departments\" routerLinkActive=\"active\">Departments</a>\n              <a routerLink=\"/Employees\" routerLinkActive=\"active\">Employee</a>\n               <a routerLink=\"/AddList\" routerLinkActive=\"active\">Add Contacts</a>  \n            <a routerLink=\"/metricstream\" routerLinkActive=\"active\">MetricStream </a>\n              </nav>   \n              <router-outlet></router-outlet>\n              ",
        styles: [
            "span{\n                  color:blue\n                }\n                h2{\n          color:blue  \n          }"
        ]
        //templateUrl :'app/table.data.html'  ,      
        ,
        providers: [Employee_component_1.EmployeService1, dummy_data_1.DummyJson]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map