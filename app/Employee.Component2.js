"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Employee_component_1 = require("./Employee.component");
var EmployeeComponent2 = (function () {
    function EmployeeComponent2(_employeeService) {
        this._employeeService = _employeeService;
        this.Employees = [];
    }
    EmployeeComponent2.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployee().
            subscribe(function (resEmpdata) { return _this.Employees = resEmpdata; }, function (resEmpError) { return _this.errormsg = resEmpError; });
    };
    return EmployeeComponent2;
}());
EmployeeComponent2 = __decorate([
    core_1.Component({
        selector: 'my-employee2',
        template: "<p>{{errormsg}}</p>\n             <ul>\n             <li *ngFor=\"let employee of Employees\">{{employee.name}} {{employee.age}}  {{employee.id}}</li>\n             </ul>"
    }),
    __metadata("design:paramtypes", [Employee_component_1.EmployeService1])
], EmployeeComponent2);
exports.EmployeeComponent2 = EmployeeComponent2;
//# sourceMappingURL=Employee.Component2.js.map