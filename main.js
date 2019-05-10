(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-client/add-client.component */ "./src/app/components/add-client/add-client.component.ts");
/* harmony import */ var _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/edit-client/edit-client.component */ "./src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/client-details/client-details.component */ "./src/app/components/client-details/client-details.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_register_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/register.guard */ "./src/app/guards/register.guard.ts");














var routes = [
    { path: '', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], canActivate: [_guards_register_guard__WEBPACK_IMPORTED_MODULE_13__["RegisterGuard"]] },
    { path: 'clients', component: _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_5__["ClientsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'client/add', component: _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_6__["AddClientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'client/edit/:id', component: _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_7__["EditClientComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'client/:id', component: _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_8__["ClientDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: 'settings', component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes)
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _guards_register_guard__WEBPACK_IMPORTED_MODULE_13__["RegisterGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client-dashboard';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-client/add-client.component */ "./src/app/components/add-client/add-client.component.ts");
/* harmony import */ var _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/edit-client/edit-client.component */ "./src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/client-details/client-details.component */ "./src/app/components/client-details/client-details.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");

























// import {AngularFireModule} from 'angularfire2';
// import {AngularFirestoreModule} from 'angularfire2/firestore';
// import {AngularFireAuthModule} from 'angularfire2/auth';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_8__["ClientsComponent"],
                _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                _components_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_10__["AddClientComponent"],
                _components_edit_client_edit_client_component__WEBPACK_IMPORTED_MODULE_11__["EditClientComponent"],
                _components_client_details_client_details_component__WEBPACK_IMPORTED_MODULE_12__["ClientDetailsComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_22__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].firebase /*, 'client-dashboard'*/),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_23__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_24__["AngularFireAuthModule"]
            ],
            providers: [_services_client_service__WEBPACK_IMPORTED_MODULE_18__["ClientService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _services_settings_service__WEBPACK_IMPORTED_MODULE_20__["SettingsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-client/add-client.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNsaWVudC9hZGQtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/add-client/add-client.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 col-xs-12\">\n        <a routerLink=\"/\" class=\"btn btn-info\"><i class=\"fa fa-arrow-circle-o-left\"></i> Voltar</a>\n    </div>\n    <div class=\"col-md-6 col-xs-12\">\n\n    </div>\n</div>\n\n<div class=\"card mt-2\">\n    <div class=\"card-header\">\n        Adicionar Cliente\n    </div>\n    <div class=\"card-body\">\n        <form #clientForm=\"ngForm\" (ngSubmit)=\"onSubmit(clientForm)\">\n            <div class=\"form-group\">\n                <label for=\"name\">Nome</label>\n                <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\"\n                       #clientName=\"ngModel\"\n                       [ngClass]=\"{'is-invalid':clientName.errors && clientName.touched}\"\n                       [(ngModel)]=\"client.name\"\n                       minlength=\"4\"\n                       maxlength=\"100\"\n                       required>\n                <div [hidden]=\"!clientName.errors?.required\" class=\"invalid-feedback\">Nome obrigatório</div>\n                <div [hidden]=\"!clientName.errors?.minlength\" class=\"invalid-feedback\">\n                    Nome deve possuir mais de 4 caracteres\n                </div>\n                <div [hidden]=\"!clientName.errors?.maxlength\" class=\"invalid-feedback\">\n                    Nome deve possuir no máximo 100 caracteres\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"email\">E-mail</label>\n                <input type=\"text\" id=\"email\" name=\"email\" class=\"form-control\"\n                       #clientEmail=\"ngModel\"\n                       [ngClass]=\"{'is-invalid':clientEmail.errors && clientEmail.touched}\"\n                       [(ngModel)]=\"client.email\"\n                       pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n                       required>\n                <div [hidden]=\"!clientEmail.errors?.required\" class=\"invalid-feedback\">E-mail obrigatório</div>\n                <div [hidden]=\"!clientEmail.errors?.pattern\" class=\"invalid-feedback\">E-mail incorreto</div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"phone\">Telefone</label>\n                <input type=\"text\" id=\"phone\" name=\"phone\" class=\"form-control\"\n                       #clientPhone=\"ngModel\"\n                       [ngClass]=\"{'is-invalid':clientPhone.errors && clientPhone.touched}\"\n                       [(ngModel)]=\"client.phone\"\n                       minlength=\"10\"\n                       maxlength=\"11\"\n                       required>\n                <div [hidden]=\"!clientPhone.errors?.required\" class=\"invalid-feedback\">Telefone obrigatório</div>\n                <div [hidden]=\"!clientPhone.errors?.minlength && !clientPhone.errors?.maxlength\"\n                     class=\"invalid-feedback\">\n                    Telefone deve possuir no mínimo 10 a 11 números\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"balance\">Saldo</label>\n                <input type=\"number\" id=\"balance\" name=\"balance\" class=\"form-control\"\n                       #clientBalance=\"ngModel\"\n                       [(ngModel)]=\"client.balance\"\n                       [disabled]=\"disabledBalanceOnAdd\">\n            </div>\n\n            <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Adicionar\">\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-client/add-client.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-client/add-client.component.ts ***!
  \***************************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(flashMessage, clientService, router, settingsService) {
        this.flashMessage = flashMessage;
        this.clientService = clientService;
        this.router = router;
        this.settingsService = settingsService;
        this.client = {
            name: '',
            email: '',
            phone: '',
            balance: 0
        };
        this.disabledBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
    }
    AddClientComponent.prototype.ngOnInit = function () {
    };
    AddClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (this.disabledBalanceOnAdd) {
            value.balance = 0;
        }
        if (!valid) {
            this.flashMessage.show('Por favor verifique os campos!', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            this.clientService.newClient(value);
            this.flashMessage.show('Cliente criado com sucesso.', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.form.reset();
            this.router.navigate(['/']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clientForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddClientComponent.prototype, "form", void 0);
    AddClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/components/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.css */ "./src/app/components/add-client/add-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/components/client-details/client-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/client-details/client-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50LWRldGFpbHMvY2xpZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/client-details/client-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/client-details/client-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n        <a routerLink=\"/\" class=\"btn btn-info\">\r\n            <i class=\"fa fa-arrow-circle-o-left\"></i> Voltar</a>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <div class=\"btn-group pull-right\">\r\n            <a routerLink=\"/client/edit/{{id}}\" class=\"btn btn-primary\">\r\n                <i class=\"fa fa-pencil\"></i> Editar</a>\r\n            <button (click)=\"onDeleteClick()\" class=\"btn btn-danger\">\r\n                <i class=\"fa fa-remove\"></i> Remover\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<hr>\r\n<div *ngIf=\"client\" class=\"card\">\r\n    <h3 class=\"card-header\">{{client.name}}</h3>\r\n    <div class=\"card-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 col-sm-6 col-xs-6\">\r\n                <h4>ID: {{client.id}}</h4>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-6 col-xs-6\">\r\n                <h4 class=\"pull-right\">\r\n                    Saldo: <span [class.text-success]=\"hasBalance\"\r\n                                 [class.text-danger]=\"!hasBalance\">\r\n                        {{client.balance | currency:\"BRL\":\"symbol\"}}\r\n                        </span>\r\n                    <small *ngIf=\"disabledBalanceOnEdit\">\r\n                        <a (click)=\"showBalanceUpdateInput = !showBalanceUpdateInput\">\r\n                            <i class=\"fa fa-pencil\"></i></a>\r\n                    </small>\r\n                </h4>\r\n                <div class=\"clearfix\">\r\n                    <form *ngIf=\"showBalanceUpdateInput\" (submit)=\"updateBalance()\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" id=\"balance\" name=\"balance\" class=\"form-control\"\r\n                                   [(ngModel)]=\"client.balance\">\r\n                            <span class=\"input-group-btn\">\r\n                                <button type=\"submit\" class=\"btn btn-primary\">Atualizar</button>\r\n                            </span>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <hr>\r\n        <ul class=\"list-group\">\r\n            <li class=\"list-group-item\">E-mail: {{client.email}}</li>\r\n            <li class=\"list-group-item\">Telefone: {{client.phone}}</li>\r\n        </ul>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/client-details/client-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/client-details/client-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ClientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailsComponent", function() { return ClientDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent(clientService, router, route, flashMessage, settingsService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
        this.disabledBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.clientService.getClient(this.id).subscribe(function (client) {
            if (client != null) {
                _this.hasBalance = (client.balance > 0);
            }
            _this.client = client;
        });
    };
    ClientDetailsComponent.prototype.onDeleteClick = function () {
        if (confirm('Você tem certeza que deseja remover esse cliente?')) {
            this.clientService.deleteClient(this.client);
            this.flashMessage.show('Cliente removido com sucesso.', {
                cssClass: 'alert-success', timeout: 4000
            });
        }
        this.router.navigate(['/']);
    };
    ClientDetailsComponent.prototype.updateBalance = function () {
        this.clientService.updateClient(this.client);
        this.flashMessage.show('Saldo atualizado.', {
            cssClass: 'alert-success', timeout: 4000
        });
    };
    ClientDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-details',
            template: __webpack_require__(/*! ./client-details.component.html */ "./src/app/components/client-details/client-details.component.html"),
            styles: [__webpack_require__(/*! ./client-details.component.css */ "./src/app/components/client-details/client-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/clients/clients.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/clients/clients.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <h2><i class=\"fa fa-users\"></i> Clientes</h2>\n    </div>\n    <div class=\"col-md-6\">\n        <h5 class=\"text-right text-secondary\" *ngIf=\"total\">Total: {{total | currency:\"BRL\":\"symbol\"}}</h5>\n    </div>\n</div>\n\n<table class=\"table table-striped\" *ngIf=\"clients?.length > 0; else noClients\">\n    <thead class=\"thead-inverse\">\n    <tr>\n        <th>Nome</th>\n        <th>Email</th>\n        <th>Balance</th>\n        <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let client of clients\">\n        <td>{{client.name}}</td>\n        <td>{{client.email}}</td>\n        <td>{{client.balance | currency:\"BRL\":\"symbol\"}}</td>\n        <td><a routerLink=\"client/{{client.id}}\" class=\"btn btn-secondary btn-sm\">\n            <i class=\"fa fa-eye\"></i></a></td>\n    </tr>\n    </tbody>\n\n</table>\n\n<ng-template #noClients>\n    <hr>\n    <h5>Não foram encontrados clientes!</h5>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");



var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (clients) {
            _this.clients = clients;
            _this.getTotal();
        });
    };
    ClientsComponent.prototype.getTotal = function () {
        this.total = this.clients.reduce(function (total, client) {
            return total + parseFloat("" + client.balance);
        }, 0);
    };
    ClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/components/clients/clients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-10 col-xs-12\">\n        <app-clients></app-clients>\n    </div>\n    <div class=\"col-md-2 col-xs-12\">\n        <app-sidebar></app-sidebar>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1jbGllbnQvZWRpdC1jbGllbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 col-xs-12\">\n        <a routerLink=\"/client/{{id}}\" class=\"btn btn-info\"><i class=\"fa fa-arrow-circle-o-left\"></i> Voltar</a>\n    </div>\n    <div class=\"col-md-6 col-xs-12\">\n\n    </div>\n</div>\n\n<div class=\"card mt-2\">\n    <div class=\"card-header\">\n        Editar Cliente\n    </div>\n    <div class=\"card-body\">\n        <form #clientForm=\"ngForm\" (ngSubmit)=\"onSubmit(clientForm)\">\n            <div class=\"form-group\">\n                <label for=\"name\">Nome</label>\n                <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\"\n                       #clientName=\"ngModel\"\n                       [ngClass]=\"{'is-invalid':clientName.errors && clientName.touched}\"\n                       [(ngModel)]=\"client.name\"\n                       minlength=\"4\"\n                       maxlength=\"100\"\n                       required>\n                <div [hidden]=\"!clientName.errors?.required\" class=\"invalid-feedback\">Nome obrigatório</div>\n                <div [hidden]=\"!clientName.errors?.minlength\" class=\"invalid-feedback\">\n                    Nome deve possuir mais de 4 caracteres\n                </div>\n                <div [hidden]=\"!clientName.errors?.maxlength\" class=\"invalid-feedback\">\n                    Nome deve possuir no máximo 100 caracteres\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"email\">E-mail</label>\n                <input type=\"text\" id=\"email\" name=\"email\" class=\"form-control\"\n                       #clientEmail=\"ngModel\"\n                       [ngClass]=\"{'is-invalid':clientEmail.errors && clientEmail.touched}\"\n                       [(ngModel)]=\"client.email\"\n                       pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n                       required>\n                <div [hidden]=\"!clientEmail.errors?.required\" class=\"invalid-feedback\">E-mail obrigatório</div>\n                <div [hidden]=\"!clientEmail.errors?.pattern\" class=\"invalid-feedback\">E-mail incorreto</div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"phone\">Telefone</label>\n                <input type=\"text\" id=\"phone\" name=\"phone\" class=\"form-control\"\n                       #clientPhone=\"ngModel\"\n                       [ngClass]=\"{'is-invalid':clientPhone.errors && clientPhone.touched}\"\n                       [(ngModel)]=\"client.phone\"\n                       minlength=\"10\"\n                       maxlength=\"11\"\n                       required>\n                <div [hidden]=\"!clientPhone.errors?.required\" class=\"invalid-feedback\">Telefone obrigatório</div>\n                <div [hidden]=\"!clientPhone.errors?.minlength && !clientPhone.errors?.maxlength\"\n                     class=\"invalid-feedback\">\n                    Telefone deve possuir no mínimo 10 a 11 números\n                </div>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"balance\">Saldo</label>\n                <input type=\"number\" id=\"balance\" name=\"balance\" class=\"form-control\"\n                       #clientBalance=\"ngModel\"\n                       [(ngModel)]=\"client.balance\"\n                       [disabled]=\"disabledBalanceOnEdit\">\n            </div>\n\n            <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Salvar\">\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit-client/edit-client.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/edit-client/edit-client.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditClientComponent", function() { return EditClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var EditClientComponent = /** @class */ (function () {
    function EditClientComponent(clientService, router, route, flashMessage, settingsService) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
        this.client = {
            name: '',
            email: '',
            phone: '',
            balance: 0
        };
        this.disabledBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.clientService.getClient(this.id).subscribe(function (client) {
            _this.client = client;
        });
    };
    EditClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            this.flashMessage.show('Por favor verifique os campos!', {
                cssClass: 'alert-danger', timeout: 4000
            });
        }
        else {
            value.id = this.id;
            this.clientService.updateClient(value);
            this.flashMessage.show('Cliente salvo com sucesso.', {
                cssClass: 'alert-success', timeout: 4000
            });
            this.form.reset();
            this.router.navigate(["/client/" + this.id]);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('clientForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditClientComponent.prototype, "form", void 0);
    EditClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-client',
            template: __webpack_require__(/*! ./edit-client.component.html */ "./src/app/components/edit-client/edit-client.component.html"),
            styles: [__webpack_require__(/*! ./edit-client.component.css */ "./src/app/components/edit-client/edit-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], EditClientComponent);
    return EditClientComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 col-sm-12 mx-auto\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h1 class=\"text-center pb-4 pt-3\">\n                    <i class=\"fa fa-lock\"></i> Painel do Cliente\n                </h1>\n                <form (submit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"email\">E-mail</label>\n                        <input type=\"email\" id=\"email\" name=\"email\"\n                               class=\"form-control\" [(ngModel)]=\"email\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"password\">Senha</label>\n                        <input type=\"password\" id=\"password\" name=\"password\"\n                               class=\"form-control\" [(ngModel)]=\"password\" required>\n                    </div>\n\n                    <input type=\"submit\" value=\"Login\" class=\"btn btn-primary btn-block\">\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.email, this.password)
            .then(function (res) {
            _this.flashMessage.show('Login realizado com sucesso.', {
                cssClass: 'alert-success', timeout: 4000
            });
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.flashMessage.show('E-mail e/ou senha incorretos!', {
                cssClass: 'alert-danger', timeout: 4000
            });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary mb-4\">\r\n    <div class=\"container\">\r\n        <a routerLink=\"/\" class=\"navbar-brand\">Client Panel</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMain\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarMain\">\r\n            <ul class=\"navbar-nav mr-auto\" *ngIf=\"isLoggedIn\">\r\n                <li class=\"nav-item\">\r\n                    <a routerLink=\"/\" class=\"nav-link\">Dashboard</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\r\n                    <a routerLink=\"/register\" class=\"nav-link\">Register</a>\r\n                </li>\r\n                <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\r\n                    <a routerLink=\"/login\" class=\"nav-link\">Login</a>\r\n                </li>\r\n                <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\r\n                    <a href=\"#\" class=\"nav-link\">{{loggedInUser}}</a>\r\n                </li>\r\n                <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\r\n                    <a routerLink=\"/settings\" class=\"nav-link\">Configurações</a>\r\n                </li>\r\n                <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\r\n                    <a href=\"#\" (click)=\"logout()\" class=\"nav-link\">Logout</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage, settingsService) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
        this.isLoggedIn = false;
        this.showRegister = this.settingsService.getSettings().allowRegistration;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.isLoggedIn = true;
                _this.loggedInUser = auth.email;
            }
            else {
                _this.isLoggedIn = false;
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.flashMessage.show('Você foi deslogado do sistema com sucesso', {
            cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 col-sm-12 mx-auto\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <h1 class=\"text-center pb-4 pt-3\">\n                    <i class=\"fa fa-lock\"></i> Registre-se\n                </h1>\n                <form (submit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"email\">E-mail</label>\n                        <input type=\"email\" id=\"email\" name=\"email\"\n                               class=\"form-control\" [(ngModel)]=\"email\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"password\">Senha</label>\n                        <input type=\"password\" id=\"password\" name=\"password\"\n                               class=\"form-control\" [(ngModel)]=\"password\" required>\n                    </div>\n\n                    <input type=\"submit\" value=\"Login\" class=\"btn btn-primary btn-block\">\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuth().subscribe(function (auth) {
            if (auth) {
                _this.router.navigate(['/']);
            }
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.email, this.password)
            .then(function (res) {
            _this.flashMessage.show('Registro realizado com sucesso.', {
                cssClass: 'alert-success', timeout: 4000
            });
            _this.router.navigate(['/']);
        }).catch(function (err) {
            _this.flashMessage.show('Usuário não pode se registrar, verifique os campos e tente novamente!', {
                cssClass: 'alert-danger', timeout: 4000
            });
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n        <a routerLink=\"/\" class=\"btn btn-info\">\n            <i class=\"fa fa-arrow-circle-o-left\"></i> Voltar</a>\n    </div>\n    <div class=\"col-md-6\"></div>\n</div>\n\n<div class=\"card mt-2\">\n    <div class=\"card-header\">Editar Configurações</div>\n    <div class=\"card-body\">\n        <form (submit)=\"onSubmit()\">\n            <div class=\"form-group\">\n                <label for=\"allowRegistration\">Permitir Registro</label>&nbsp;\n                <input type=\"checkbox\"\n                       name=\"allowRegistration\" id=\"allowRegistration\"\n                       [checked]=\"settings.allowRegistration\"\n                       (change)=\"updateSetting('allowRegistration')\"/>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"disableBalanceOnAdd\">Desabilitar Saldo quando Salvar</label>&nbsp;\n                <input type=\"checkbox\"\n                       name=\"disableBalanceOnAdd\" id=\"disableBalanceOnAdd\"\n                       [checked]=\"settings.disableBalanceOnAdd\"\n                       (change)=\"updateSetting('disableBalanceOnAdd')\"/>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"disableBalanceOnEdit\">Desabilitar Saldo quando Atualizar</label> &nbsp;\n                <input type=\"checkbox\"\n                       name=\"disableBalanceOnEdit\" id=\"disableBalanceOnEdit\"\n                       [checked]=\"settings.disableBalanceOnEdit\"\n                       (change)=\"updateSetting('disableBalanceOnEdit')\"/>\n            </div>\n\n            <input type=\"submit\" value=\"Salvar\" class=\"btn btn-primary btn-block\">\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(router, flashMessage, settingsService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.settingsService = settingsService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.settings = this.settingsService.getSettings();
    };
    SettingsComponent.prototype.updateSetting = function (setting) {
        switch (setting) {
            case 'allowRegistration':
                this.settings.allowRegistration = !this.settings.allowRegistration;
                break;
            case 'disableBalanceOnAdd':
                this.settings.disableBalanceOnAdd = !this.settings.disableBalanceOnAdd;
                break;
            case 'disableBalanceOnEdit':
                this.settings.disableBalanceOnEdit = !this.settings.disableBalanceOnEdit;
                break;
            default:
                break;
        }
    };
    SettingsComponent.prototype.onSubmit = function () {
        this.settingsService.changeSettings(this.settings);
        this.flashMessage.show('Configurações salvas com sucesso.', {
            cssClass: 'alert-success', timeout: 4000
        });
        // this.router.navigate(['/']);
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/components/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/client/add\" class=\"btn btn-success btn-block\">\r\n    <i class=\"fa fa-plus\"></i> Adicionar\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) {
            if (!auth) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/register.guard.ts":
/*!******************************************!*\
  !*** ./src/app/guards/register.guard.ts ***!
  \******************************************/
/*! exports provided: RegisterGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterGuard", function() { return RegisterGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/settings.service */ "./src/app/services/settings.service.ts");




var RegisterGuard = /** @class */ (function () {
    function RegisterGuard(router, settingsService) {
        this.router = router;
        this.settingsService = settingsService;
    }
    RegisterGuard.prototype.canActivate = function () {
        if (!this.settingsService.getSettings().allowRegistration) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    RegisterGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]])
    ], RegisterGuard);
    return RegisterGuard;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.signInWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.getAuth = function () {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afAuth.auth.createUserWithEmailAndPassword(email, password)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ClientService = /** @class */ (function () {
    function ClientService(afs) {
        this.afs = afs;
        this.clientsCollection = this.afs.collection('clients', function (ref) { return ref.orderBy('name', 'asc'); });
        // this.clientsCollection = this.afs.collection<Client>('clients');
    }
    ClientService.prototype.getClients = function () {
        this.clients = this.clientsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.clients;
    };
    ClientService.prototype.getClient = function (id) {
        this.clientDoc = this.afs.doc("clients/" + id);
        this.client = this.clientDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.client;
    };
    ClientService.prototype.newClient = function (client) {
        this.clientsCollection.add(client);
    };
    ClientService.prototype.updateClient = function (client) {
        this.clientDoc = this.afs.doc("clients/" + client.id);
        this.clientDoc.update(client);
    };
    ClientService.prototype.deleteClient = function (client) {
        this.clientDoc = this.afs.doc("clients/" + client.id);
        this.clientDoc.delete();
    };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.settings = {
            allowRegistration: false,
            disableBalanceOnAdd: false,
            disableBalanceOnEdit: true
        };
        if (localStorage.getItem('settings') != null) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
    }
    SettingsService.prototype.getSettings = function () {
        return this.settings;
    };
    SettingsService.prototype.changeSettings = function (settings) {
        localStorage.setItem('settings', JSON.stringify(settings));
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBdoSCgjgqgeXi2wMP61ah9-ekMILidDPg",
        authDomain: "client-dashboard-9db96.firebaseapp.com",
        databaseURL: "https://client-dashboard-9db96.firebaseio.com",
        projectId: "client-dashboard-9db96",
        storageBucket: "client-dashboard-9db96.appspot.com",
        messagingSenderId: "612261451377",
        appId: "1:612261451377:web:1454f91a04955115"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\client-dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map