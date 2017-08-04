webpackJsonp([3],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center pull-down\">\n  <h1>\n    <img width=\"60\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\" />\n    <span class=\"img-center\">{{title}}</span>\n  </h1>\n  <h4>{{subTitle}}</h4>\n</div>\n<div role=\"form\" aria-labelledby=\"giaa\" aria-describedby=\"info\" class=\"center pull-down\">\n    <giaa></giaa>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: #676363; }\n\nh4 {\n  color: #676363;\n  font-size: 1.25em;\n  margin: 0 0.5em 0 0.5em; }\n\n.center {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.img-center {\n  vertical-align: middle; }\n\n.pull-down {\n  margin-top: 1.0em;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Lock it up';
        this.subTitle = 'An interface for input confirmation';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_module__ = __webpack_require__("../../../../../src/app/authentication/authentication.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* Feature Modules */

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_module__["a" /* AuthenticationModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_component__ = __webpack_require__("../../../../../src/app/authentication/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hover_class_directive__ = __webpack_require__("../../../../../src/app/hover-class.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* ReactiveFormsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_component__["a" /* AuthenticationComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_component__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_4__hover_class_directive__["a" /* HoverClassDirective */]
        ]
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form novalidate (ngSubmit)=\"login()\" [formGroup]=\"authForm\">\n          <div class=\"row\">\n            <div class=\"col-md-offset-3 col-md-9 flex-center\">\n              <div class=\"giaa-controls form-group\" [ngClass]=\"{'has-danger-cue': authForm.errors}\">\n                <div class=\"input-group\">\n                  <input #password [type]=\"isShowPasswordActive ? 'text' : 'password'\" class=\"float-label form-control\" id=\"password\" name=\"password\" formControlName=\"password\" (focus)=\"focus('_passwordFocused')\"\n                    (focusout)=\"focusOut('_passwordFocused', password.value)\" tabindex=\"1\">\n                  <button class=\"input-group-addon\" [ngClass]=\"{ 'hover-active': isShowPasswordActive }\" (click)=\"show('password')\"><span class=\"fa fa-eye\" type=\"button\"></span></button>\n                  <button class=\"input-group-addon\" [ngClass]=\"{ 'hover-active': isClearPasswordActive }\" (click)=\"clear('password')\" (tap)=\"clear('password')\" (touchstart)=\"clearState('password', true)\" (touchend)=\"clearState('password', false)\" type=\"button\"><span class=\"fa fa-times-circle-o\"></span></button>\n                </div>\n                <!-- \n                Why are the hoverClass \"attributes directives\" surrounded by brackets?  \n                Template binding works with properties and events, not attributes.\n                Attributes are defined by HTML. Properties are defined by the DOM (Document Object Model).\n                The brackets tell Angular to evaluate the template expression. If you omit the brackets, \n                Angular treats the string as a constant and initializes the target property with that string. \n                It does not evaluate the string!  This is, however, exactly what we want.  We want to \n                initialize directive property 'hoverClass' with a value of 'active'. \n              -->\n                <label for=\"password\" hoverClass=\"active\" [ngClass]=\"{'active': passwordFocused }\">Password</label>         \n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-offset-3 col-md-9 flex-center\">\n              <div class=\"giaa-controls form-group\" [ngClass]=\"{'has-danger-cue': authForm.errors}\">\n                <div class=\"input-group\">\n                  <input #confirmPassword [type]=\"isShowConfirmPasswordActive ? 'text' : 'password'\" class=\"float-label form-control\" id=\"confirmPassword\" name=\"confirmPassword\" type=\"password\" formControlName=\"confirmPassword\" (focus)=\"focus('_confirmPasswordFocused')\"\n                  (focusout)=\"focusOut('_confirmPasswordFocused', confirmPassword.value)\" tabindex=\"2\">\n                  <button class=\"input-group-addon\" [ngClass]=\"{ 'hover-active': isShowConfirmPasswordActive }\" (click)=\"show('confirmPassword')\"><span class=\"fa fa-eye\" type=\"button\"></span></button>\n                  <button class=\"input-group-addon\" [ngClass]=\"{ 'hover-active': isClearConfirmPasswordActive }\" (click)=\"clear('confirmPassword')\" (tap)=\"clear('confirmPassword')\" (touchstart)=\"clearState('confirmPassword', true)\" (touchend)=\"clearState('confirmPassword', false)\" type=\"button\"><span class=\"fa fa-times-circle-o\"></span></button>\n                </div>\n                <label for=\"confirmPassword\" hoverClass=\"active\" [ngClass]=\"{'active': confirmPasswordFocused }\">Confirm Password</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-offset-3 col-md-3 flex-center\">\n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n                viewBox=\"0 0 58 58\" xml:space=\"preserve\" class=\"lock\">\n                <path #unlockedArm id=\"unlockedArm\" style=\"fill:none;stroke:#D8A852;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;\" d=\"\n                  M38,22.866V11.219C38,6.149,33.5,2,28,2s-10,4.149-10,9.219\"/>\n                <path #lockedArm id=\"lockedArm\" style=\"fill:none;stroke:#D8A852;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;display:none;\" d=\"\n                  M39,22.866V11.219C39,6.149,34.5,2,29,2s-10,4.149-10,9.219v11.647\"/>\n                <circle style=\"fill:#E7ECED;\" cx=\"29\" cy=\"39\" r=\"19\"/>\n                <path style=\"fill:#C7CAC7;\" d=\"M48,39c0-10.493-8.507-19-19-19v38C39.493,58,48,49.493,48,39z\"/>     \n              </svg>\n              <img #dial src=\"../../assets/combination-dial.svg\" class=\"sync-cue dial\" />\n              <div class=\"message-neighbor\">\n                <div class=\"help-block\" *ngIf=\"confirmPasswordMessage\">\n                  {{ confirmPasswordMessage }}\n                </div>\n                <div class=\"help-block\" *ngIf=\"passwordMessage\">\n                  {{ passwordMessage }}\n                </div>\n            </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authentication/authentication/authentication.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-center {\n  margin: auto;\n  padding-bottom: 1em; }\n  .flex-center > svg {\n    vertical-align: middle; }\n  .flex-center .message-neighbor {\n    height: 8em;\n    float: right;\n    margin-top: 2em; }\n\n.hide {\n  display: none; }\n\n.sync-cue {\n  width: 50px; }\n\n.lock {\n  width: 120px; }\n\n.dial {\n  position: absolute;\n  left: 37.5px;\n  top: 43px;\n  width: 76px;\n  opacity: 0.50; }\n\n.giaa-controls {\n  text-align: left;\n  position: relative; }\n  .giaa-controls label {\n    position: absolute;\n    left: 5px;\n    top: 5px;\n    color: #999;\n    font-size: 14px;\n    display: inline-block;\n    padding: 4px 10px;\n    margin-bottom: 0;\n    font-weight: 400;\n    background-color: rgba(255, 255, 255, 0);\n    transition: color 0.3s, top 0.3s, background-color 0.8s;\n    z-index: 1000; }\n  .giaa-controls label.active {\n    top: -17px;\n    color: #555;\n    background-color: white; }\n  .giaa-controls .input-group {\n    margin: 0.5em 0 0.5em 0;\n    /*button > span:hover {\n\t\t\tcolor: green;\n\t\t}*/ }\n    .giaa-controls .input-group span {\n      color: #615a5a; }\n    .giaa-controls .input-group button {\n      outline: none; }\n    .giaa-controls .input-group button.hover-active {\n      background-color: #67596b; }\n      .giaa-controls .input-group button.hover-active > .fa {\n        color: white; }\n    .giaa-controls .input-group button.default {\n      background-color: #eceeef; }\n  .giaa-controls.has-danger-cue input {\n    border-left: red solid 4px; }\n\n@media (min-width: 320px) {\n  .message-neighbor {\n    width: 18em;\n    font-size: 0.70em; } }\n\n@media (min-width: 425px) {\n  .message-neighbor {\n    width: 20em;\n    font-size: 0.75em; } }\n\n@media (min-width: 768px) {\n  .col-md-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 80%;\n            flex: 0 1 80%;\n    width: 20em;\n    max-width: 100%; }\n  .message-neighbor {\n    width: 30em;\n    font-size: 0.75em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_inputConfirmationValidator__ = __webpack_require__("../../../../../src/app/shared/inputConfirmationValidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_randomNumberGenerators__ = __webpack_require__("../../../../../src/app/shared/randomNumberGenerators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_last__ = __webpack_require__("../../../../rxjs/add/operator/last.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_last__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__ = __webpack_require__("../../../../rxjs/add/operator/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_throttleTime__ = __webpack_require__("../../../../rxjs/add/operator/throttleTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_throttleTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthenticationComponent = (function () {
    function AuthenticationComponent(fb) {
        this.fb = fb;
        /*
        * @property validationMessages
        * Input validation messages where the key is a validation rule name, and value is the message we want to display.
        */
        this.validationMessages = {
            required: 'Please enter your password.',
            match: 'The confirmation password must match the password above.'
        };
    }
    Object.defineProperty(AuthenticationComponent.prototype, "passwordFocused", {
        get: function () {
            return this._passwordFocused;
        },
        set: function (focused) {
            this._passwordFocused = focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationComponent.prototype, "confirmPasswordFocused", {
        get: function () {
            return this._confirmPasswordFocused;
        },
        set: function (focused) {
            this._confirmPasswordFocused = focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationComponent.prototype, "passwordControl", {
        get: function () {
            return this.authForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationComponent.prototype, "confirmPasswordControl", {
        get: function () {
            return this.authForm.get('confirmPassword');
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rotateBy = 300;
        this.confirmationValidator = new __WEBPACK_IMPORTED_MODULE_2__shared_inputConfirmationValidator__["a" /* InputConfirmationValidator */]();
        this.authForm = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].maxLength(50)]],
            confirmPassword: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* Validators */].required],
        }, { validator: this.confirmationValidator.passwordMatcher });
        var passwordControl = this.authForm.get('password');
        var confirmPasswordControl = this.authForm.get('confirmPassword');
        var random = new __WEBPACK_IMPORTED_MODULE_3__shared_randomNumberGenerators__["a" /* Random */]();
        passwordControl.valueChanges
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(function (value) {
            _this.setPasswordMessage(passwordControl);
            if (confirmPasswordControl.value.length > 0) {
                _this.lockTransition();
            }
        });
        confirmPasswordControl.valueChanges
            .merge(confirmPasswordControl.valueChanges.throttleTime(1000), confirmPasswordControl.valueChanges.debounceTime(1000))
            .subscribe(function (value) {
            _this.rotateBy = -_this.rotateBy;
            TweenMax.to(_this.dialRef.nativeElement, 1, { transformOrigin: "center", rotation: (_this.rotateBy + random.getRandomInt(1, 100)), ease: Back.easeOut.config(3) });
            _this.setConfirmPasswordMessage(confirmPasswordControl);
            _this.lockTransition();
        });
    };
    AuthenticationComponent.prototype.ngAfterViewInit = function () {
    };
    AuthenticationComponent.prototype.login = function () {
    };
    AuthenticationComponent.prototype.focus = function (property) {
        this[property] = true;
    };
    AuthenticationComponent.prototype.focusOut = function (property, value) {
        if (!value) {
            this[property] = false;
        }
    };
    AuthenticationComponent.prototype.show = function (formControlName) {
        if (formControlName === 'password') {
            this.isShowPasswordActive = !this.isShowPasswordActive;
        }
        else {
            this.isShowConfirmPasswordActive = !this.isShowConfirmPasswordActive;
        }
    };
    AuthenticationComponent.prototype.clear = function (formControlName) {
        if (formControlName === 'password') {
            this.authForm.patchValue({
                password: ""
            });
        }
        else {
            this.authForm.patchValue({
                confirmPassword: ""
            });
        }
    };
    AuthenticationComponent.prototype.clearState = function (formControlName, down) {
        if (formControlName === 'password') {
            this.isClearPasswordActive = down;
        }
        else {
            this.isClearConfirmPasswordActive = down;
        }
    };
    /*
  * @method setPasswordMessage
  * Display a validation message if the input element is touched or dirty, and has errors.
  * The errors collection uses the validation rule name as the key.  Our data structure above
  * does too.
  * @param {AbstractControl} c
  */
    AuthenticationComponent.prototype.setPasswordMessage = function (c) {
        this.passwordMessage = '';
        this.passwordMessage = this.getErrorMessage(c);
    };
    AuthenticationComponent.prototype.setConfirmPasswordMessage = function (c) {
        this.confirmPasswordMessage = '';
        this.confirmPasswordMessage = this.getErrorMessage(c.parent);
    };
    /*
    * @method lockTransition
    * Performs the GSAP MorphSVG transition from the unlocked arm to the locked arm and vice versa,
    * depending on the state of the input match.
    */
    AuthenticationComponent.prototype.lockTransition = function () {
        if ((this.confirmPasswordControl.value.length > 0 && this.passwordControl.value.length > 0) &&
            (this.confirmPasswordControl.value === this.passwordControl.value)) {
            TweenMax.to(this.unlockedArmRef.nativeElement, 1, { morphSVG: { shape: '#lockedArm' } });
            this.locked = true;
        }
        else if (this.locked) {
            TweenMax.to(this.unlockedArmRef.nativeElement, 1, { morphSVG: { shape: '#unlockedArm' } });
        }
    };
    /*
    * @method getErrorMessage
    * Fetch the error message from the messages object using the key from the
    * errors collection of the AbstractControl object.
    */
    AuthenticationComponent.prototype.getErrorMessage = function (c) {
        var _this = this;
        var msg = '';
        if ((c.touched || c.dirty) && c.errors) {
            msg = Object.keys(c.errors).map(function (key) { return _this.validationMessages[key]; }).join(' ');
        }
        return msg;
    };
    return AuthenticationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('dial'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], AuthenticationComponent.prototype, "dialRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('unlockedArm'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object)
], AuthenticationComponent.prototype, "unlockedArmRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* ViewChild */])('lockedArm'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _c || Object)
], AuthenticationComponent.prototype, "lockedArmRef", void 0);
AuthenticationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Component */])({
        selector: 'giaa',
        template: __webpack_require__("../../../../../src/app/authentication/authentication/authentication.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/authentication/authentication.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _d || Object])
], AuthenticationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=authentication.component.js.map

/***/ }),

/***/ "../../../../../src/app/hover-class.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoverClassDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HoverClassDirective = (function () {
    function HoverClassDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    HoverClassDirective.prototype.mouseover = function () {
        this.renderer.setElementClass(this.elementRef.nativeElement, this.hoverClass, true);
    };
    return HoverClassDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", String)
], HoverClassDirective.prototype, "hoverClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])('mouseover'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HoverClassDirective.prototype, "mouseover", null);
HoverClassDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: '[hoverClass]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Renderer */]) === "function" && _b || Object])
], HoverClassDirective);

var _a, _b;
//# sourceMappingURL=hover-class.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/inputConfirmationValidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputConfirmationValidator; });
/*
* @class InputConfirmationValidator
* Input confirmation validator for Reactive forms.
*/
var InputConfirmationValidator = (function () {
    function InputConfirmationValidator() {
    }
    InputConfirmationValidator.prototype.passwordMatcher = function (c) {
        var passwordControl = c.get('password');
        var confirmPasswordControl = c.get('confirmPassword');
        if (passwordControl.pristine || confirmPasswordControl.pristine) {
            return null;
        }
        return (passwordControl.value === confirmPasswordControl.value) ?
            null :
            { 'match': true }; // adds the rule to the errors collection for the *form group*, in this case.  
    };
    return InputConfirmationValidator;
}());

//# sourceMappingURL=inputConfirmationValidator.js.map

/***/ }),

/***/ "../../../../../src/app/shared/randomNumberGenerators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Random; });
var Random = (function () {
    function Random() {
    }
    Random.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Random;
}());

//# sourceMappingURL=randomNumberGenerators.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map