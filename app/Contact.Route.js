"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactRoute = (function () {
    function ContactRoute() {
        this.UserDetails = [
            { firstname: 'John', lastname: 'Joseph', mail: 'Joseph@gmail.com', number: 9148792732 },
            { firstname: 'Alex', lastname: 'Hales', mail: 'Alex@gmail.com', number: 9148792732 },
            { firstname: 'Sachin', lastname: 'Tendulkar', mail: 'Sachin@gmail.com', number: 9148792732 }
        ];
        this.refFirst = '';
        this.refLast = '';
        this.refMail = '';
        this.makeInputenable = false;
        this.makeInputenable1 = true;
        this.makeedithidden = false;
        this.makedonehidden = true;
    }
    ContactRoute.prototype.addData = function () {
        this.UserDetails.push({ firstname: this.refFirst,
            lastname: this.refLast,
            mail: this.refMail,
            number: this.refNumber });
        this.refFirst = '';
        this.refLast = '';
        this.refMail = '';
        this.refNumber = '';
        //console.log(this.refname.value);                    
    };
    ContactRoute.prototype.onclickevent = function (event) {
        console.log(event);
    };
    ContactRoute.prototype.editData = function () {
        this.makeInputenable = !this.makeInputenable;
        this.makeInputenable1 = !this.makeInputenable1;
        this.makeedithidden = !this.makeedithidden;
        this.makedonehidden = !this.makedonehidden;
    };
    ContactRoute.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    ContactRoute.prototype.onSubmit = function (value) {
        alert('hello');
        console.log(value);
    };
    return ContactRoute;
}());
ContactRoute = __decorate([
    core_1.Component({
        selector: 'contact',
        templateUrl: 'app/Add.list.html',
        styles: ["input.ng-invalid,\n          h2{\n          color:blue  \n          }\n        input.ng-invalid{\n          border-left:5px solid red\n        } \n        input.ng-valid{\n          border-left:5px solid green\n        }\n       "]
    })
], ContactRoute);
exports.ContactRoute = ContactRoute;
//# sourceMappingURL=Contact.Route.js.map