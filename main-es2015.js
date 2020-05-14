(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page3_page3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page3/page3.component */ "./src/app/page3/page3.component.ts");
/* harmony import */ var _page4_page4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page4/page4.component */ "./src/app/page4/page4.component.ts");
/* harmony import */ var _form_editor_form_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-editor/form-editor.component */ "./src/app/form-editor/form-editor.component.ts");
/* harmony import */ var _form_editor2_form_editor2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-editor2/form-editor2.component */ "./src/app/form-editor2/form-editor2.component.ts");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'page2', component: _page2_page2_component__WEBPACK_IMPORTED_MODULE_2__["Page2Component"] },
    { path: 'page3', component: _page3_page3_component__WEBPACK_IMPORTED_MODULE_4__["Page3Component"] },
    { path: 'page4', component: _page4_page4_component__WEBPACK_IMPORTED_MODULE_5__["Page4Component"] },
    { path: 'page5', component: _form_editor_form_editor_component__WEBPACK_IMPORTED_MODULE_6__["FormEditorComponent"] },
    { path: 'page6', component: _form_editor2_form_editor2_component__WEBPACK_IMPORTED_MODULE_7__["FormEditor2Component"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'Test';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 24, vars: 0, consts: [["fixed", ""], ["nbButton", "", "status", "primary", "size", "medium", "routerLink", "/"], ["nbButton", "", "status", "primary", "size", "medium", "routerLink", "/page2"], ["nbButton", "", "status", "primary", "size", "medium", "routerLink", "/page3"], ["nbButton", "", "status", "primary", "size", "medium", "routerLink", "/page4"], ["nbButton", "", "status", "primary", "size", "medium", "routerLink", "/page5"], ["nbButton", "", "status", "primary", "size", "medium", "routerLink", "/page6"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Page 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Page 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Page 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Form2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "nb-layout-footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutFooterComponent"]], styles: ["li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  display: inline-block;\n  padding: 10px;\n}\n\n.table-sticky[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-sticky[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background: #009688;\n  color: #fff;\n  top: 0px;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.table-sticky[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-sticky[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  background: #009688;\n  color: #fff;\n  bottom: 0px;\n  position: -webkit-sticky;\n  position: sticky;\n}\n\n.table-height[_ngcontent-%COMP%] {\n  height: 150px;\n  display: block;\n  overflow: scroll;\n  width: 100%;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFuZ3VsYXJcXE9mZmljZVxcVGVzdFxcVGVzdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJBO0VBQ0MscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUMzQkQ7O0FEOEJBOztFQUVDLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDM0JEOztBRDZCQTs7RUFFQyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQzFCRDs7QUQ0QkE7RUFDQyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3pCRDs7QUQ0QkE7RUFDQyx5QkFBQTtFQUNBLGlCQUFBO0FDekJEOztBRDRCQTs7OztFQUlDLHNCQUFBO0FDekJEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyB0Ym9keSB7XHJcbi8vICAgICBkaXNwbGF5OmJsb2NrO1xyXG4vLyAgICAgaGVpZ2h0OjIwMHB4O1xyXG4vLyAgICAgb3ZlcmZsb3c6YXV0bztcclxuLy8gfVxyXG4vLyB0aGVhZCwgdGJvZHkgdHIge1xyXG4vLyAgICAgZGlzcGxheTp0YWJsZTtcclxuLy8gICAgIHdpZHRoOjEwMCU7XHJcbi8vICAgICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8gdGJvZHkge1xyXG4vLyAgICAgZGlzcGxheTpibG9jaztcclxuLy8gICAgIGhlaWdodDoxMDBweDtcclxuLy8gICAgIG92ZXJmbG93OmF1dG87XHJcbiAgICBcclxuICAgIFxyXG4vLyB9XHJcbi8vIHRmb290LHRoZWFkLCB0Ym9keSB0ciB7XHJcbi8vICAgICBkaXNwbGF5OnRhYmxlO1xyXG4vLyAgICAgd2lkdGg6MTAwJTtcclxuLy8gICAgIHRhYmxlLWxheW91dDphdXRvO1xyXG4vLyB9XHJcblxyXG5saXtcclxuXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi50YWJsZS1zdGlja3k+dGhlYWQ+dHI+dGgsXHJcbi50YWJsZS1zdGlja3k+dGhlYWQ+dHI+dGQge1xyXG5cdGJhY2tncm91bmQ6ICMwMDk2ODg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dG9wOiAwcHg7XHJcblx0cG9zaXRpb246IHN0aWNreTtcclxufVxyXG4udGFibGUtc3RpY2t5PnRmb290PnRyPnRoLFxyXG4udGFibGUtc3RpY2t5PnRmb290PnRyPnRkIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDA5Njg4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvdHRvbTogMHB4O1xyXG5cdHBvc2l0aW9uOiBzdGlja3k7XHJcbn1cclxuLnRhYmxlLWhlaWdodCB7XHJcblx0aGVpZ2h0OiAxNTBweDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRvdmVyZmxvdzogc2Nyb2xsO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlcmVkPnRoZWFkPnRyPnRoLFxyXG4udGFibGUtYm9yZGVyZWQ+dGJvZHk+dHI+dGgsXHJcbi50YWJsZS1ib3JkZXJlZD50aGVhZD50cj50ZCxcclxuLnRhYmxlLWJvcmRlcmVkPnRib2R5PnRyPnRkIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59IiwibGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnRhYmxlLXN0aWNreSA+IHRoZWFkID4gdHIgPiB0aCxcbi50YWJsZS1zdGlja3kgPiB0aGVhZCA+IHRyID4gdGQge1xuICBiYWNrZ3JvdW5kOiAjMDA5Njg4O1xuICBjb2xvcjogI2ZmZjtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG59XG5cbi50YWJsZS1zdGlja3kgPiB0Zm9vdCA+IHRyID4gdGgsXG4udGFibGUtc3RpY2t5ID4gdGZvb3QgPiB0ciA+IHRkIHtcbiAgYmFja2dyb3VuZDogIzAwOTY4ODtcbiAgY29sb3I6ICNmZmY7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuXG4udGFibGUtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGgsXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGgsXG4udGFibGUtYm9yZGVyZWQgPiB0aGVhZCA+IHRyID4gdGQsXG4udGFibGUtYm9yZGVyZWQgPiB0Ym9keSA+IHRyID4gdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dailog_message_dailog_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dailog-message/dailog-message.component */ "./src/app/dailog-message/dailog-message.component.ts");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _page3_page3_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page3/page3.component */ "./src/app/page3/page3.component.ts");
/* harmony import */ var _page4_page4_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page4/page4.component */ "./src/app/page4/page4.component.ts");
/* harmony import */ var _form_editor_form_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-editor/form-editor.component */ "./src/app/form-editor/form-editor.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _form_editor2_form_editor2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form-editor2/form-editor2.component */ "./src/app/form-editor2/form-editor2.component.ts");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({ name: 'cosmic' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _dailog_message_dailog_message_component__WEBPACK_IMPORTED_MODULE_7__["DailogMessageComponent"],
        _page2_page2_component__WEBPACK_IMPORTED_MODULE_8__["Page2Component"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _page3_page3_component__WEBPACK_IMPORTED_MODULE_11__["Page3Component"],
        _page4_page4_component__WEBPACK_IMPORTED_MODULE_12__["Page4Component"],
        _form_editor_form_editor_component__WEBPACK_IMPORTED_MODULE_13__["FormEditorComponent"],
        _form_editor2_form_editor2_component__WEBPACK_IMPORTED_MODULE_15__["FormEditor2Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _dailog_message_dailog_message_component__WEBPACK_IMPORTED_MODULE_7__["DailogMessageComponent"],
                    _page2_page2_component__WEBPACK_IMPORTED_MODULE_8__["Page2Component"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _page3_page3_component__WEBPACK_IMPORTED_MODULE_11__["Page3Component"],
                    _page4_page4_component__WEBPACK_IMPORTED_MODULE_12__["Page4Component"],
                    _form_editor_form_editor_component__WEBPACK_IMPORTED_MODULE_13__["FormEditorComponent"],
                    _form_editor2_form_editor2_component__WEBPACK_IMPORTED_MODULE_15__["FormEditor2Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbThemeModule"].forRoot({ name: 'cosmic' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_5__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTreeGridModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                entryComponents: [_dailog_message_dailog_message_component__WEBPACK_IMPORTED_MODULE_7__["DailogMessageComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dailog-message/dailog-message.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dailog-message/dailog-message.component.ts ***!
  \************************************************************/
/*! exports provided: DailogMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailogMessageComponent", function() { return DailogMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");



class DailogMessageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DailogMessageComponent.ɵfac = function DailogMessageComponent_Factory(t) { return new (t || DailogMessageComponent)(); };
DailogMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DailogMessageComponent, selectors: [["app-dailog-message"]], inputs: { title: "title" }, decls: 38, vars: 1, consts: [[1, "container-fluid"], ["border", "1px"]], template: function DailogMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "FLOORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BOOKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "UNBOOKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "HOLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "POSSESSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "AGREEMENT NOT DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "AGREEMENT DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "LEASED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SOLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "VACANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "CANCELLED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "SHOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"]], styles: ["nb-card[_ngcontent-%COMP%] {\n  max-width: 600px;\n  max-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFpbG9nLW1lc3NhZ2UvRDpcXEFuZ3VsYXJcXE9mZmljZVxcVGVzdFxcVGVzdC9zcmNcXGFwcFxcZGFpbG9nLW1lc3NhZ2VcXGRhaWxvZy1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYWlsb2ctbWVzc2FnZS9kYWlsb2ctbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2RhaWxvZy1tZXNzYWdlL2RhaWxvZy1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm5iLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICAiLCJuYi1jYXJkIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DailogMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dailog-message',
                templateUrl: './dailog-message.component.html',
                styleUrls: ['./dailog-message.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/form-editor/form-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/form-editor/form-editor.component.ts ***!
  \******************************************************/
/*! exports provided: FormEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEditorComponent", function() { return FormEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class FormEditorComponent {
    constructor() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    ngOnInit() {
        setTimeout(() => {
            this.name.setValue('Clyde');
        }, 2000);
    }
}
FormEditorComponent.ɵfac = function FormEditorComponent_Factory(t) { return new (t || FormEditorComponent)(); };
FormEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormEditorComponent, selectors: [["app-form-editor"]], decls: 5, vars: 2, consts: [["type", "text", 3, "formControl"]], template: function FormEditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZWRpdG9yL2Zvcm0tZWRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormEditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-editor',
                templateUrl: './form-editor.component.html',
                styleUrls: ['./form-editor.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/form-editor2/form-editor2.component.ts":
/*!********************************************************!*\
  !*** ./src/app/form-editor2/form-editor2.component.ts ***!
  \********************************************************/
/*! exports provided: FormEditor2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEditor2Component", function() { return FormEditor2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class FormEditor2Component {
    constructor() {
        this.detailsForms = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.data = "TestData";
    }
    ngOnInit() {
        setTimeout(() => {
            this.detailsForms.patchValue({
                firstName: 'Clyde',
                lastName: 'Correa'
            });
        }, 5000);
    }
    onSubmit() {
        console.warn(this.detailsForms.value);
    }
}
FormEditor2Component.ɵfac = function FormEditor2Component_Factory(t) { return new (t || FormEditor2Component)(); };
FormEditor2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormEditor2Component, selectors: [["app-form-editor2"]], decls: 9, vars: 2, consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "formControlName", "firstName"], ["type", "text", "formControlName", "lastName"], ["type", "submit", 3, "disabled"]], template: function FormEditor2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormEditor2Component_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " FirstName: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " LastName: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.detailsForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.detailsForms.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0tZWRpdG9yMi9mb3JtLWVkaXRvcjIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormEditor2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form-editor2',
                templateUrl: './form-editor2.component.html',
                styleUrls: ['./form-editor2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dailog_message_dailog_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dailog-message/dailog-message.component */ "./src/app/dailog-message/dailog-message.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HomeComponent_ng_container_51_tr_21_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r17.CHECK_NUMBER);
} }
function HomeComponent_ng_container_51_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_51_tr_21_td_1_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r17 = ctx.$implicit;
    const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r17.DL_NO === data_r12.DL_NO);
} }
function HomeComponent_ng_container_51_tr_23_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r21.CHECK_DATE);
} }
function HomeComponent_ng_container_51_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_51_tr_23_td_1_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r21 = ctx.$implicit;
    const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r21.DL_NO === data_r12.DL_NO);
} }
function HomeComponent_ng_container_51_tr_25_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r25.DAY_DELAYED);
} }
function HomeComponent_ng_container_51_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_51_tr_25_td_1_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r25 = ctx.$implicit;
    const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r25.DL_NO === data_r12.DL_NO);
} }
function HomeComponent_ng_container_51_tr_27_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r29.PAY_RECIVED);
} }
function HomeComponent_ng_container_51_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_51_tr_27_td_1_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r29 = ctx.$implicit;
    const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", d_r29.DL_NO === data_r12.DL_NO);
} }
function HomeComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_ng_container_51_tr_21_Template, 2, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_ng_container_51_tr_23_Template, 2, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_ng_container_51_tr_25_Template, 2, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_ng_container_51_tr_27_Template, 2, 1, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.DL_NO, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.DL_DATE, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.TASK_NAME, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.TOTAL_DL_AMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.WC_AMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.DL_AMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.SER_TAX_AMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.TOTAL_DL_AMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.OTHER_AMT, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.checkData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.checkData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.checkData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.checkData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.DL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.Service_tax, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r12.other, " ");
} }
class HomeComponent {
    constructor(dialogService, router) {
        this.dialogService = dialogService;
        this.router = router;
        this.bookedColspan = 4;
        this.dataFiltered = [];
        this.checkData = [];
        this.ObjTitle = [];
        this.UniqueObj = {};
        this.finalArrayObj = [];
        this.data = [
            {
                "ROW_NUM": 1,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "4240449",
                "DL_AMT": "4088835",
                "SER_TAX_AMT": "151614",
                "OTHER_AMT": null,
                "DUE_DATE": null,
                "DOC_NO": "041308",
                "DOC_DATE": "01/04/2014",
                "PAY_RECIVED": "400000",
                "CHECK_NUMBER": "041308",
                "CHECK_DATE": "01/04/2014",
                "BANK_NAME": "CITI BANK",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": null,
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 2,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "RTGS-1",
                "DOC_DATE": "01/05/2014",
                "PAY_RECIVED": "100000",
                "CHECK_NUMBER": "RTGS-1",
                "CHECK_DATE": "01/05/2014",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 3,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "RTGS-2",
                "DOC_DATE": "24/04/2014",
                "PAY_RECIVED": "50000",
                "CHECK_NUMBER": "RTGS-2",
                "CHECK_DATE": "24/04/2014",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 4,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "RTGS-3",
                "DOC_DATE": "30/04/2014",
                "PAY_RECIVED": "450000",
                "CHECK_NUMBER": "RTGS-3",
                "CHECK_DATE": "30/04/2014",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 5,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "RTGS-4",
                "DOC_DATE": "28/05/2014",
                "PAY_RECIVED": "995000",
                "CHECK_NUMBER": "RTGS-4",
                "CHECK_DATE": "28/05/2014",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 6,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "NEFT",
                "DOC_DATE": "04/07/2014",
                "PAY_RECIVED": "800000",
                "CHECK_NUMBER": "NEFT",
                "CHECK_DATE": "04/07/2014",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 7,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "NEFT-1",
                "DOC_DATE": "04/07/2014",
                "PAY_RECIVED": "200000",
                "CHECK_NUMBER": "NEFT-1",
                "CHECK_DATE": "04/07/2014",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 8,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "RTGS",
                "DOC_DATE": "16/05/2014",
                "PAY_RECIVED": "5000",
                "CHECK_NUMBER": "RTGS",
                "CHECK_DATE": "16/05/2014",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 9,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "900170",
                "DOC_DATE": "14/07/2014",
                "PAY_RECIVED": "700000",
                "CHECK_NUMBER": "900170",
                "CHECK_DATE": "14/07/2014",
                "BANK_NAME": "CITI BANK",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 10,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "000154",
                "DOC_DATE": "14/07/2014",
                "PAY_RECIVED": "288835",
                "CHECK_NUMBER": "000154",
                "CHECK_DATE": "14/07/2014",
                "BANK_NAME": "BANK OF INDIA",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 11,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "157322",
                "DOC_DATE": "14/07/2014",
                "PAY_RECIVED": "100000",
                "CHECK_NUMBER": "157322",
                "CHECK_DATE": "14/07/2014",
                "BANK_NAME": "ICICI BANK",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 12,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10087",
                "DL_DATE": "01/02/2015",
                "TASK_NAME": "Advance received",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "NEFT-2",
                "DOC_DATE": "08/12/2014",
                "PAY_RECIVED": "151614",
                "CHECK_NUMBER": "NEFT-2",
                "CHECK_DATE": "08/12/2014",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 13,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10545",
                "DL_DATE": "28/04/2015",
                "TASK_NAME": "manual invoice",
                "TOTAL_DL_AMT": "1007610",
                "DL_AMT": "971584",
                "SER_TAX_AMT": "36026",
                "OTHER_AMT": null,
                "DUE_DATE": null,
                "DOC_NO": "NEFT-3",
                "DOC_DATE": "28/04/2015",
                "PAY_RECIVED": "500000",
                "CHECK_NUMBER": "NEFT-3",
                "CHECK_DATE": "28/04/2015",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": null,
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 14,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10545",
                "DL_DATE": "28/04/2015",
                "TASK_NAME": "manual invoice",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "NEFT-4",
                "DOC_DATE": "28/04/2015",
                "PAY_RECIVED": "471584",
                "CHECK_NUMBER": "NEFT-4",
                "CHECK_DATE": "28/04/2015",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 15,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "10545",
                "DL_DATE": "28/04/2015",
                "TASK_NAME": "manual invoice",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "NEFT-5",
                "DOC_DATE": "28/04/2015",
                "PAY_RECIVED": "36026",
                "CHECK_NUMBER": "NEFT-5",
                "CHECK_DATE": "28/04/2015",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 16,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "11821",
                "DL_DATE": "01/04/2016",
                "TASK_NAME": "IOD (Demand already send on 01-April-2015)\r Credit Note Inv- 10880|",
                "TOTAL_DL_AMT": "55153",
                "DL_AMT": "53181",
                "SER_TAX_AMT": "1972",
                "OTHER_AMT": null,
                "DUE_DATE": null,
                "DOC_NO": "NEFT-5",
                "DOC_DATE": "28/04/2015",
                "PAY_RECIVED": "1972",
                "CHECK_NUMBER": "NEFT-5",
                "CHECK_DATE": "28/04/2015",
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": null,
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 17,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "11821",
                "DL_DATE": "01/04/2016",
                "TASK_NAME": "IOD (Demand already send on 01-April-2015)\r Credit Note Inv- 10880|",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "10880",
                "DOC_DATE": "07/02/2018",
                "PAY_RECIVED": "53181",
                "CHECK_NUMBER": "10880",
                "CHECK_DATE": "07/02/2018",
                "BANK_NAME": "Credit Note Line- 53181,Tax- 0",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 18,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "1944547",
                "DL_NO": "AP-1611801229",
                "DL_DATE": "07/02/2018",
                "TASK_NAME": "Flat Cancellation Refund-Being the refund of Principal amount payable to Niranjan Khardenavis on cncellation of Flat no. C -1001.",
                "TOTAL_DL_AMT": "-5250031",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "1611900051",
                "DOC_DATE": "20/04/2018",
                "PAY_RECIVED": "-500000",
                "CHECK_NUMBER": "690160",
                "CHECK_DATE": "20/04/2018",
                "BANK_NAME": "Canara Bank - 0111201004923",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": "0",
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": null,
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "AP",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": null,
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 19,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "1944547",
                "DL_NO": "AP-1611801229",
                "DL_DATE": "07/02/2018",
                "TASK_NAME": "Flat Cancellation Refund-Being the refund of Principal amount payable to Niranjan Khardenavis on cncellation of Flat no. C -1001.",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "1611900085",
                "DOC_DATE": "19/05/2018",
                "PAY_RECIVED": "-1100000",
                "CHECK_NUMBER": "690158",
                "CHECK_DATE": "19/05/2018",
                "BANK_NAME": "Canara Bank - 0111201004923",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": "0",
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": null,
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "AP",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 20,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "1944547",
                "DL_NO": "AP-1611801229",
                "DL_DATE": "07/02/2018",
                "TASK_NAME": "Flat Cancellation Refund-Being the refund of Principal amount payable to Niranjan Khardenavis on cncellation of Flat no. C -1001.",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "1611900170",
                "DOC_DATE": "19/06/2018",
                "PAY_RECIVED": "-177581",
                "CHECK_NUMBER": "690157",
                "CHECK_DATE": "19/06/2018",
                "BANK_NAME": "Canara Bank - 0111201004923",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": "0",
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": null,
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "AP",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 21,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "1944547",
                "DL_NO": "AP-1611801229",
                "DL_DATE": "07/02/2018",
                "TASK_NAME": "Flat Cancellation Refund-Being the refund of Principal amount payable to Niranjan Khardenavis on cncellation of Flat no. C -1001.",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "1611900172",
                "DOC_DATE": "19/06/2018",
                "PAY_RECIVED": "-800000",
                "CHECK_NUMBER": "690164",
                "CHECK_DATE": "19/06/2018",
                "BANK_NAME": "Canara Bank - 0111201004923",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": "0",
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": null,
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "AP",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 22,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "1944547",
                "DL_NO": "AP-1611801229",
                "DL_DATE": "07/02/2018",
                "TASK_NAME": "Flat Cancellation Refund-Being the refund of Principal amount payable to Niranjan Khardenavis on cncellation of Flat no. C -1001.",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "1611900284",
                "DOC_DATE": "21/08/2018",
                "PAY_RECIVED": "-971584",
                "CHECK_NUMBER": "690155",
                "CHECK_DATE": "21/08/2018",
                "BANK_NAME": "Canara Bank - 0111201004923",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": "0",
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": null,
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "AP",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 23,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "1944547",
                "DL_NO": "AP-1611801229",
                "DL_DATE": "07/02/2018",
                "TASK_NAME": "Flat Cancellation Refund-Being the refund of Principal amount payable to Niranjan Khardenavis on cncellation of Flat no. C -1001.",
                "TOTAL_DL_AMT": "0",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "0",
                "DUE_DATE": null,
                "DOC_NO": "1612000283",
                "DOC_DATE": "30/09/2019",
                "PAY_RECIVED": "-1700866",
                "CHECK_NUMBER": "105",
                "CHECK_DATE": "30/09/2019",
                "BANK_NAME": "161 Netting  Bank Account",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": "0",
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": null,
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "AP",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": "0",
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 24,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "14368",
                "DL_DATE": "31/03/2018",
                "TASK_NAME": "Towards Flat",
                "TOTAL_DL_AMT": "5250031",
                "DL_AMT": "5250031",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": null,
                "DUE_DATE": null,
                "DOC_NO": "13188",
                "DOC_DATE": "03/02/2018",
                "PAY_RECIVED": "5250031",
                "CHECK_NUMBER": "13188",
                "CHECK_DATE": "03/02/2018",
                "BANK_NAME": "Credit Note Line- 5250031,Tax- 0",
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "0",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": null,
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            },
            {
                "ROW_NUM": 25,
                "PARA_USER": null,
                "SR": "1",
                "COMPANY_NAME": "JOYNEST PREMISES PRIVATE LIMITED",
                "COMP_ID": "2727",
                "PROJECT_NAME": "HUBTOWN SEASONS",
                "PROJ_ID": "430",
                "BUILDING": "HUBTOWN SEASONS-C WING",
                "BUILD_ID": "21451",
                "FLOOR": "FLOOR-10",
                "FLAT_NO": "1001",
                "FLAT_ID": "21852",
                "FLAT_COST": "0",
                "CUST_NAME": "MR.NIRANJAN KHARDENAVIS",
                "CUST_ID": "7047229",
                "DL_NO": "15954",
                "DL_DATE": "01/12/2018",
                "TASK_NAME": "vat",
                "TOTAL_DL_AMT": "51136",
                "DL_AMT": "0",
                "SER_TAX_AMT": "0",
                "OTHER_AMT": "51136",
                "DUE_DATE": null,
                "DOC_NO": null,
                "DOC_DATE": null,
                "PAY_RECIVED": "0",
                "CHECK_NUMBER": null,
                "CHECK_DATE": null,
                "BANK_NAME": null,
                "DAY_DELAYED": null,
                "INTREST_PERC": null,
                "INTERST_AMT": null,
                "IL_AMT_RECEV": null,
                "DEFAULTED_AMT": null,
                "CBF_NO": "488220(T)",
                "SCHED_PER": null,
                "BOOKING_DATE": "31/03/2014",
                "LEASE_ID": "488220",
                "SALEABLE_AREA": "108.08",
                "CARPET_AREA": "62.64",
                "ADD_CARPET_AREA": "2.86",
                "MARKET_VALUE": null,
                "AGRREMENT_DATE": null,
                "REGISTRATION_DATE": null,
                "REGISTRATION_NUMBER": null,
                "CAR_PARK": null,
                "TOTAL_DL_AMOUNT": "0",
                "SCHD_PER": null,
                "ATTRIBUTE1": "0",
                "ATTRIBUTE2": "DL",
                "ATTRIBUTE3": "0",
                "ATTRIBUTE4": "0",
                "ATTRIBUTE5": "51136",
                "NOC_DATE": null,
                "BROKER_NAME": null,
                "BROKERAGE_PER": null,
                "POSSESSION_DATE": null,
                "LOAN_BANK_NAME": null,
                "WC_AMT": null,
                "ATTRIBUTE6": "0",
                "ATTRIBUTE7": null,
                "ATTRIBUTE8": null,
                "ATTRIBUTE9": null,
                "ATTRIBUTE10": null,
                "FITOUT_DATE": null
            }
        ];
    }
    ngOnInit() {
        //$('#newTable').append("<table ><thead><tr><th colspan="+this.bookedColspan+"></th></tr></thead> <table>");
        // for(var a=0;a<this.data.length-10;a++){
        //   $(".detailedTable").append("<tr class='firstRow'><td rowspan='4'> "+this.data[a].DL_NO+
        //   " </td><td rowspan='4'> "+this.data[a].DL_DATE  +
        //   " </td> <td rowspan='4'>  "+this.data[a].TASK_NAME+
        //   " </td><td rowspan='4'> "+this.data[a].TOTAL_DL_AMT+
        //   "</td><td rowspan='4'>"+this.data[a].WC_AMT+
        //   "</td><td rowspan='4'> "+this.data[a].DL_AMT+
        //   "</td><td rowspan='4'>  "+this.data[a].SER_TAX_AMT+
        //   "</td><td rowspan='4'> "+this.data[a].TOTAL_DL_AMOUNT+
        //   "</td><td rowspan='4'>"+this.data[a].OTHER_AMT+
        //   "</td><td >"+this.data[a].CHECK_NUMBER+
        //   "</td><td > "+this.data[a].CHECK_DATE+
        //   " </td><td >"+this.data[a].DAY_DELAYED+
        //   "</td><td >"+this.data[a].PAY_RECIVED+
        //   "</td><td >"+this.data[a].BANK_NAME+
        //   "</td><td rowspan='4'>"+this.data[a].DL_DATE+
        //   "</td><td rowspan='4'> "+this.data[a].DL_DATE+
        //   " </td><td rowspan='4'>"+this.data[a].DL_DATE+"</td></tr>"
        //   // +this.getHtmlTags(this.data[a].DL_NO)+""
        //   );
        // }
        this.dataTable();
    }
    dataTable() {
        // let previous;
        // this.data.forEach(x=>{ this.dataFiltered.push(x.DL_NO)});
        // this.dataFiltered.sort();
        for (let i in this.data) {
            this.ObjTitle = this.data[i]['DL_NO'];
            this.UniqueObj[this.ObjTitle] = this.data[i];
        }
        // console.log(this.dataFiltered);
        for (var e = 0; e < this.data.length; e++) {
            // let previous = this.data[e];
            // if(previous === )
            // if(previous.DL_NO === this.data[e].DL_NO){
            this.checkData.push({
                DL_NO: this.data[e].DL_NO,
                CHECK_NUMBER: this.data[e].CHECK_NUMBER,
                CHECK_DATE: this.data[e].CHECK_DATE,
                CHECK_DELAYED: this.data[e].DAY_DELAYED,
                PAY_RECIVED: this.data[e].PAY_RECIVED
            });
            //}
        }
        // for(var e=0;e<this.data.length;e++){
        //   for(var s=0;s<this.dataFiltered.length;s++){
        //       // let previous = this.dataFiltered[s-1];
        //       // if(previous === )
        //       if(this.dataFiltered[s] === this.data[e].DL_NO){
        //         this.checkData.push({
        //              CHECK_NUMBER:this.data[e].CHECK_NUMBER,
        //              CHECK_DATE:this.data[e].CHECK_DATE,
        //              CHECK_DELAYED:this.data[e].DAY_DELAYED,
        //              PAY_RECIVED:this.data[e].PAY_RECIVED
        //         })
        //       }
        //   }
        // }
        console.log(this.checkData);
        console.log(this.UniqueObj);
        for (let i in this.UniqueObj) {
            this.finalArrayObj.push(this.UniqueObj[i]);
        }
        // for(var b=0;b<this.dataFiltered.length;b++){
        //       let previous = this.dataFiltered[b-1];
        //    // console.log(previous);
        //     // if(typeof previous !== 'undefined'){
        //     //   // console.log(previous.DL_NO);
        //     // }
        //     if(previous !== this.dataFiltered[b]){
        //       //console.log(this.dataFiltered[b]);
        //      //this.DL_Numbers_filtered.push(this.dataFiltered[b])
        //       }else{
        //         console.log(this.dataFiltered[b]);
        //       }
        //   }
    }
    // @HostListener('window:beforeunload') goToPage() {
    //   this.navigate()
    //   // this.router.navigate(['/google']);
    //   // window.location.href = "https://www.w3schools.com"; 
    // }
    //   @HostListener('window:unload', ['$event'])
    //   unloadHandler(event) {
    //     this.navigate();
    // }
    // @HostListener('window:beforeunload', ['$event'])
    // beforeUnloadHander(event) {
    //     return false;
    // }
    // @HostListener('window:beforeunload', ['$event'])
    // doSomething($event) {
    //   if(true) $event.returnValue='Your data will be lost!';
    //   this.router.navigate(['/google']);
    // }
    // navigate(){
    //   alert(6);
    //   this.router.navigate(['/google']);
    // }
    open(param) {
        this.dialogService.open(_dailog_message_dailog_message_component__WEBPACK_IMPORTED_MODULE_1__["DailogMessageComponent"], {
            context: {
                title: param,
            }
        });
    }
    ngOnDestroy() {
        // this.navigate()
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 103, vars: 1, consts: [[1, "container-fluid"], [1, "pull-right"], ["href", "javascript:void(0)", "router-link", "/page2", "target", "_blank"], ["nbButton", "", 3, "click"], ["border", "5px", 1, "scrollable"], [1, "fixedHeader"], [1, "scrollContent"], [4, "ngFor", "ngForOf"], [1, "firstRow"], ["colspan", "3", 2, "text-align", "right"], ["colspan", "3"], ["colspan", "2"], ["colspan", "7"], [4, "ngIf"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Test ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_6_listener() { return ctx.open("Passed data"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Open ModAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "thead", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " DL/IL No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " DL/IL Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Task Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Total Invoice Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " WC%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " DL Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Service Tax Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " TDS Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Other Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Chq No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Chq Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Chq Clearing Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Payment Recv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Bank Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " DL Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Ser Tax Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Other Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tbody", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, HomeComponent_ng_container_51_Template, 34, 16, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Total:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "@ Total Invoice Amt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " NaN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " @ DL Amt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " @ Service Tax Amt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "@ TDS Amt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "NaN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " @ Payment Recv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " @ DL Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "@ Ser Tax Balance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " @ Other Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Total Outstanding Amount :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " @76566.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "nb-card-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.finalArrayObj);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDialogService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page2/page2.component.ts":
/*!******************************************!*\
  !*** ./src/app/page2/page2.component.ts ***!
  \******************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function Page2Component_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function Page2Component_td_26_nb_tree_grid_row_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 16);
} if (rf & 2) {
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", row_r4.expanded);
} }
function Page2Component_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Page2Component_td_26_nb_tree_grid_row_toggle_1_Template, 1, 1, "nb-tree-grid-row-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r4.data.kind === "dir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r4.data.name, " ");
} }
function Page2Component_ng_container_27_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r9.data[column_r7]);
} }
function Page2Component_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Page2Component_ng_container_27_td_1_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r7);
} }
class Page2Component {
    constructor() {
        this.customColumn = 'name';
        this.defaultColumns = ['size', 'kind', 'items'];
        this.allColumns = [this.customColumn, ...this.defaultColumns];
        this.data = [
            {
                data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
                children: [
                    { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
                    { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
                    {
                        data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
                        children: [
                            { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
                            { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
                            { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
                        ],
                    },
                    { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
                ],
            },
            {
                data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
                children: [
                    {
                        data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
                        children: [
                            { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
                        ],
                    },
                    {
                        data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
                        children: [
                            { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
                            { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
                        ],
                    },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
            {
                data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
                children: [
                    { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
                    { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
                ],
            },
        ];
        this.APIData = [
            {
                "FLOOR": "FLOOR 1-FLOOR 5",
                "C_BOOKED": 8,
                "C_UNBOOKED": 11,
                "BOOKED": 2,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 9,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 18,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-1', 'FLOOR-1', 'FLOOR-1', 'FLOOR-2', 'FLOOR-2', 'FLOOR-2', 'FLOOR-2', 'FLOOR-3', 'FLOOR-3', 'FLOOR-3', 'FLOOR-3', 'FLOOR-4', 'FLOOR-4', 'FLOOR-4', 'FLOOR-4', 'FLOOR-5', 'FLOOR-5', 'FLOOR-5', 'FLOOR-5'"
            },
            {
                "FLOOR": "FLOOR 6-FLOOR 10",
                "C_BOOKED": 8,
                "C_UNBOOKED": 13,
                "BOOKED": 1,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 9,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 18,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-10', 'FLOOR-10', 'FLOOR-10', 'FLOOR-10', 'FLOOR-10', 'FLOOR-6', 'FLOOR-6', 'FLOOR-6', 'FLOOR-6', 'FLOOR-7', 'FLOOR-7', 'FLOOR-7', 'FLOOR-7', 'FLOOR-8', 'FLOOR-8', 'FLOOR-8', 'FLOOR-8', 'FLOOR-9', 'FLOOR-9', 'FLOOR-9', 'FLOOR-9', 'FLOOR-9'"
            },
            {
                "FLOOR": "FLOOR 11+",
                "C_BOOKED": 0,
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 0,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 27,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            }
        ];
    }
    ngOnInit() {
        //this.data.push();
    }
}
Page2Component.ɵfac = function Page2Component_Factory(t) { return new (t || Page2Component)(); };
Page2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page2Component, selectors: [["app-page2"]], decls: 28, vars: 4, consts: [[1, "contianer-fluid", "p-0"], ["border", "1px", 2, "text-align", "center"], ["rowspan", "2", 2, "vertical-align", "middle"], ["colspan", "3"], [2, "top", "29px", "max-width", "70px"], [2, "top", "29px"], [2, "max-width", "145px", "top", "29px"], ["fixed", "", 1, "p-0", 2, "max-height", "200px !important"], ["equalColumnsWidth", "", 3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", 4, "ngFor", "ngForOf"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", 4, "ngIf"], [3, "expanded"]], template: function Page2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FLOORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BOOKING PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "UNBOOKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BOOKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "POSSESSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "AGREEMENT DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-card-body", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, Page2Component_tr_24_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, Page2Component_td_26_Template, 3, 2, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Page2Component_ng_container_27_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridRowDefDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridColumnDefDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridRowComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridRowToggleComponent"]], styles: ["th[_ngcontent-%COMP%] {\n  width: 10%;\n  max-width: 10% !important;\n}\n\nbutton[nbTreeGridRowToggle][_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n\n.search-label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.nb-column-name[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media screen and (min-width: 400px) {\n  .nb-column-name[_ngcontent-%COMP%], .nb-column-size[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .nb-column-name[_ngcontent-%COMP%], .nb-column-size[_ngcontent-%COMP%], .nb-column-kind[_ngcontent-%COMP%] {\n    width: 33.333%;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .nb-column-name[_ngcontent-%COMP%] {\n    width: 31%;\n  }\n\n  .nb-column-size[_ngcontent-%COMP%], .nb-column-kind[_ngcontent-%COMP%], .nb-column-items[_ngcontent-%COMP%] {\n    width: 23%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTIvRDpcXEFuZ3VsYXJcXE9mZmljZVxcVGVzdFxcVGVzdC9zcmNcXGFwcFxccGFnZTJcXHBhZ2UyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlMi9wYWdlMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtBQ0FKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFOztJQUVFLFVBQUE7RUNDSjtBQUNGOztBREVFO0VBQ0U7OztJQUdFLGNBQUE7RUNBSjtBQUNGOztBREdFO0VBQ0U7SUFDRSxVQUFBO0VDREo7O0VER0U7OztJQUdFLFVBQUE7RUNBSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZTIvcGFnZTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudGh7XHJcbiAgd2lkdGg6MTAlO1xyXG4gIG1heC13aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbltuYlRyZWVHcmlkUm93VG9nZ2xlXSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLm5iLWNvbHVtbi1uYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgLm5iLWNvbHVtbi1uYW1lLFxyXG4gICAgLm5iLWNvbHVtbi1zaXplIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgIC5uYi1jb2x1bW4tbmFtZSxcclxuICAgIC5uYi1jb2x1bW4tc2l6ZSxcclxuICAgIC5uYi1jb2x1bW4ta2luZCB7XHJcbiAgICAgIHdpZHRoOiAzMy4zMzMlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm5iLWNvbHVtbi1uYW1lIHtcclxuICAgICAgd2lkdGg6IDMxJTtcclxuICAgIH1cclxuICAgIC5uYi1jb2x1bW4tc2l6ZSxcclxuICAgIC5uYi1jb2x1bW4ta2luZCxcclxuICAgIC5uYi1jb2x1bW4taXRlbXMge1xyXG4gICAgICB3aWR0aDogMjMlO1xyXG4gICAgfVxyXG4gIH0iLCJ0aCB7XG4gIHdpZHRoOiAxMCU7XG4gIG1heC13aWR0aDogMTAlICFpbXBvcnRhbnQ7XG59XG5cbmJ1dHRvbltuYlRyZWVHcmlkUm93VG9nZ2xlXSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zZWFyY2gtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5uYi1jb2x1bW4tbmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xuICAubmItY29sdW1uLW5hbWUsXG4ubmItY29sdW1uLXNpemUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5uYi1jb2x1bW4tbmFtZSxcbi5uYi1jb2x1bW4tc2l6ZSxcbi5uYi1jb2x1bW4ta2luZCB7XG4gICAgd2lkdGg6IDMzLjMzMyU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5uYi1jb2x1bW4tbmFtZSB7XG4gICAgd2lkdGg6IDMxJTtcbiAgfVxuXG4gIC5uYi1jb2x1bW4tc2l6ZSxcbi5uYi1jb2x1bW4ta2luZCxcbi5uYi1jb2x1bW4taXRlbXMge1xuICAgIHdpZHRoOiAyMyU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page2',
                templateUrl: './page2.component.html',
                styleUrls: ['./page2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page3/page3.component.ts":
/*!******************************************!*\
  !*** ./src/app/page3/page3.component.ts ***!
  \******************************************/
/*! exports provided: Page3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3Component", function() { return Page3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function Page3Component_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
function Page3Component_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", row_r38.data.FLOORS_LIST);
} }
function Page3Component_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSortHeader", ctx_r35.getDirection(ctx_r35.customColumn));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r35.customColumn, " ");
} }
function Page3Component_td_26_nb_tree_grid_row_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 18);
} if (rf & 2) {
    const row_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", row_r39.expanded);
} }
function Page3Component_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page3Component_td_26_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.ClickEvent($event.srcElement.parentNode.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Page3Component_td_26_nb_tree_grid_row_toggle_1_Template, 1, 1, "nb-tree-grid-row-toggle", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r39.data.expandable === "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r39.data.FLOORS, " ");
} }
function Page3Component_ng_container_27_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbSortHeader", ctx_r45.getDirection(column_r44));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r44, " ");
} }
function Page3Component_ng_container_27_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page3Component_ng_container_27_td_2_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.ClickEvent($event.srcElement.parentNode.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    const column_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r48.data[column_r44]);
} }
function Page3Component_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Page3Component_ng_container_27_th_1_Template, 2, 2, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Page3Component_ng_container_27_td_2_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r44);
} }
class Page3Component {
    constructor(dataSourceBuilder) {
        this.dataSourceBuilder = dataSourceBuilder;
        // customColumn = 'Name';
        // defaultColumns = [ 'size', 'kind', 'items' ];
        // allColumns = [ this.customColumn, ...this.defaultColumns ];
        // dataSource: NbTreeGridDataSource<any>;
        // sortColumn: string = '';
        // sortDirection: NbSortDirection = NbSortDirection.NONE;
        this.customColumn = 'FLOORS';
        this.defaultColumns = ['BOOKED', 'UNBOOKED', 'HOLD'];
        this.allColumns = [this.customColumn, ...this.defaultColumns];
        this.sortColumn = '';
        this.sortDirection = _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSortDirection"].NONE;
        this.APIData = [
            {
                "FLOOR": "FLOOR 1-FLOOR 5",
                "C_BOOKED": 8,
                "C_UNBOOKED": 11,
                "BOOKED": 2,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 9,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 18,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-1', 'FLOOR-1', 'FLOOR-1', 'FLOOR-2', 'FLOOR-2', 'FLOOR-2', 'FLOOR-2', 'FLOOR-3', 'FLOOR-3', 'FLOOR-3', 'FLOOR-3', 'FLOOR-4', 'FLOOR-4', 'FLOOR-4', 'FLOOR-4', 'FLOOR-5', 'FLOOR-5', 'FLOOR-5', 'FLOOR-5'"
            },
            {
                "FLOOR": "FLOOR 6-FLOOR 10",
                "C_BOOKED": 8,
                "C_UNBOOKED": 13,
                "BOOKED": 1,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 9,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 18,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-10', 'FLOOR-10', 'FLOOR-10', 'FLOOR-10', 'FLOOR-10', 'FLOOR-6', 'FLOOR-6', 'FLOOR-6', 'FLOOR-6', 'FLOOR-7', 'FLOOR-7', 'FLOOR-7', 'FLOOR-7', 'FLOOR-8', 'FLOOR-8', 'FLOOR-8', 'FLOOR-8', 'FLOOR-9', 'FLOOR-9', 'FLOOR-9', 'FLOOR-9', 'FLOOR-9'"
            },
            {
                "FLOOR": "FLOOR 11+",
                "C_BOOKED": 0,
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 0,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 27,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            }
        ];
        this.dataAPi = [{
                data: { FLOORS_LIST: "'FLOOR-1','FLOOR-3','FLOOR-4',", FLOORS: this.APIData[0].FLOOR, BOOKED: this.APIData[0].BOOKED, UNBOOKED: this.APIData[0].UNBOOKED, HOLD: this.APIData[0].SHOP, expandable: 'true' },
                children: [
                    { data: { FLOORS_LIST: 'FLOOR-10', FLOORS: 'FLOOR-1', BOOKED: 'd', UNBOOKED: 'dd', HOLD: 'dd' } }
                ],
            }];
        this.dataSource = this.dataSourceBuilder.create(this.dataAPi);
    }
    ngOnInit() {
    }
    changeSort(sortRequest) {
        this.dataSource.sort(sortRequest);
        this.sortColumn = sortRequest.column;
        this.sortDirection = sortRequest.direction;
    }
    getDirection(column) {
        if (column === this.sortColumn) {
            return this.sortDirection;
        }
        return _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSortDirection"].NONE;
    }
    // private data: TreeNode<FSEntry>[] = [
    //   {
    //     data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
    //     children: [
    //       { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
    //       { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
    //       {
    //         data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
    //         children: [
    //           { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
    //           { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
    //           { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
    //         ],
    //       },
    //       { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
    //     ],
    //   },
    // ];
    // private data: TreeNode<FSEntry>[] = [
    //   {
    //     data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
    //     children: [
    //       { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
    //       { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
    //       {
    //         data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
    //         children: [
    //           { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
    //           { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
    //           { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
    //         ],
    //       },
    //       { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
    //     ],
    //   },
    //   {
    //     data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
    //     children: [
    //       {
    //         data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
    //         children: [
    //           { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
    //         ],
    //       },
    //       {
    //         data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
    //         children: [
    //           { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
    //           { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
    //         ],
    //       },
    //     ],
    //   },
    //   {
    //     data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
    //     children: [
    //       { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
    //       { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
    //     ],
    //   },
    // ];
    ClickEvent(param) {
        console.log(param);
    }
}
Page3Component.ɵfac = function Page3Component_Factory(t) { return new (t || Page3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"])); };
Page3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page3Component, selectors: [["app-page3"]], decls: 28, vars: 5, consts: [[1, "p-0"], ["nbSort", "", "equalColumnsWidth", "", 3, "nbTreeGrid", "sort"], ["rowspan", "2", 2, "vertical-align", "middle"], ["colspan", "3"], [2, "top", "29px", "max-width", "70px"], [2, "top", "29px"], [2, "max-width", "145px", "top", "29px"], ["nbTreeGridHeaderRow", "", 4, "nbTreeGridHeaderRowDef"], ["nbTreeGridRow", "", 3, "id", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader", 4, "nbTreeGridHeaderCellDef"], ["nbTreeGridCell", "", 3, "click", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", 4, "ngFor", "ngForOf"], ["nbTreeGridHeaderRow", ""], ["nbTreeGridRow", "", 3, "id"], ["nbTreeGridHeaderCell", "", 3, "nbSortHeader"], ["nbTreeGridCell", "", 3, "click"], [3, "expanded", 4, "ngIf"], [3, "expanded"]], template: function Page3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function Page3Component_Template_table_sort_2_listener($event) { return ctx.changeSort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FLOORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BOOKING PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "UNBOOKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BOOKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "POSSESSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "AGREEMENT DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, Page3Component_tr_22_Template, 1, 0, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, Page3Component_tr_23_Template, 1, 1, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, Page3Component_th_25_Template, 2, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, Page3Component_td_26_Template, 3, 2, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Page3Component_ng_container_27_Template, 3, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridHeaderRowDef", ctx.allColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSortDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridHeaderRowDefDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridRowDefDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridColumnDefDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridHeaderCellDefDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridHeaderRowComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridRowComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridHeaderCellDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSortHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridRowToggleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UzL3BhZ2UzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page3',
                templateUrl: './page3.component.html',
                styleUrls: ['./page3.component.scss']
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridDataSourceBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page4/page4.component.ts":
/*!******************************************!*\
  !*** ./src/app/page4/page4.component.ts ***!
  \******************************************/
/*! exports provided: Page4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page4Component", function() { return Page4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function Page4Component_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function Page4Component_td_26_nb_tree_grid_row_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nb-tree-grid-row-toggle", 20);
} if (rf & 2) {
    const row_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", row_r56.expanded);
} }
function Page4Component_td_26_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Page4Component_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Page4Component_td_26_nb_tree_grid_row_toggle_1_Template, 1, 1, "nb-tree-grid-row-toggle", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Page4Component_td_26_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r56.data.expandable === "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r56.data.expandable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r56.data.FLOORS, " ");
} }
function Page4Component_ng_container_27_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    const column_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r62.data[column_r60]);
} }
function Page4Component_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Page4Component_ng_container_27_td_1_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", column_r60);
} }
class Page4Component {
    constructor() {
        this.customColumn = 'FLOORS';
        this.defaultColumns = ['BOOKED', 'POSSESSION', 'AGREEMENT_DONE', 'UNBOOKED', 'HOLD', 'TOTAL'];
        this.allColumns = [this.customColumn, ...this.defaultColumns];
        this.data = [];
        this.APIData = [
            {
                "FLOOR": "FLOOR 1-FLOOR 5",
                "C_BOOKED": 8,
                "C_UNBOOKED": 11,
                "BOOKED": 2,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 9,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 18,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-1', 'FLOOR-1', 'FLOOR-1', 'FLOOR-2', 'FLOOR-2', 'FLOOR-2', 'FLOOR-2', 'FLOOR-3', 'FLOOR-3', 'FLOOR-3', 'FLOOR-3', 'FLOOR-4', 'FLOOR-4', 'FLOOR-4', 'FLOOR-4', 'FLOOR-5', 'FLOOR-5', 'FLOOR-5', 'FLOOR-5'"
            },
            {
                "FLOOR": "FLOOR 6-FLOOR 10",
                "C_BOOKED": 8,
                "C_UNBOOKED": 13,
                "BOOKED": 1,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 9,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 18,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-10', 'FLOOR-10', 'FLOOR-10', 'FLOOR-10', 'FLOOR-10', 'FLOOR-6', 'FLOOR-6', 'FLOOR-6', 'FLOOR-6', 'FLOOR-7', 'FLOOR-7', 'FLOOR-7', 'FLOOR-7', 'FLOOR-8', 'FLOOR-8', 'FLOOR-8', 'FLOOR-8', 'FLOOR-9', 'FLOOR-9', 'FLOOR-9', 'FLOOR-9', 'FLOOR-9'"
            },
            {
                "FLOOR": "FLOOR 11+",
                "C_BOOKED": 0,
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 0,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 27,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            },
            {
                "FLOOR": "FLOOR 11+",
                "C_BOOKED": 0,
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 0,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 27,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            },
            {
                "FLOOR": "FLOOR 11+",
                "C_BOOKED": 0,
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_NOT_DONE": 0,
                "AGREEMENT_DONE": 0,
                "LEASED": 0,
                "SOLD": 0,
                "VACANT": 0,
                "UNBOOKED": 27,
                "CANCELLED": 0,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            }
        ];
        this.SeocndAPiData = [
            {
                "FLOOR": "FLOOR-1",
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_DONE": 0,
                "UNBOOKED": 27,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            },
            {
                "FLOOR": "FLOOR-2",
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_DONE": 0,
                "UNBOOKED": 27,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            },
            {
                "FLOOR": "FLOOR-3",
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_DONE": 0,
                "UNBOOKED": 27,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            },
            {
                "FLOOR": "FLOOR-4",
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_DONE": 0,
                "UNBOOKED": 27,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            },
            {
                "FLOOR": "FLOOR-5",
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_DONE": 0,
                "UNBOOKED": 27,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            },
            {
                "FLOOR": "FLOOR-6",
                "C_UNBOOKED": 16,
                "BOOKED": 0,
                "C_HOLD": 0,
                "POSSESSION": 0,
                "AGREEMENT_DONE": 0,
                "UNBOOKED": 27,
                "SHOP": 0,
                "FLOOR_LIST": "'FLOOR-11', 'FLOOR-11', 'FLOOR-11', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-12', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-13', 'FLOOR-14', 'FLOOR-14', 'FLOOR-14', 'GROUND FLOOR', 'GROUND FLOOR'"
            }
        ];
        this.tableData();
    }
    ngOnInit() {
    }
    tableData() {
        this.data = [];
        for (var s = 0; s < this.APIData.length; s++) {
            this.data.push({
                data: { FLOORS: this.APIData[s].FLOOR, BOOKED: this.APIData[s].BOOKED, POSSESSION: this.APIData[s].POSSESSION, AGREEMENT_DONE: this.APIData[s].AGREEMENT_DONE, UNBOOKED: this.APIData[s].UNBOOKED, HOLD: this.APIData[s].SHOP, TOTAL: '4', expandable: 'true' },
            });
            var floorFrom = this.data[s].data.FLOORS.split("-")[0];
            var floorTo = CheckFloors(this.data[s].data.FLOORS.split("-")[1]) ? this.data[s].data.FLOORS.split("-")[1] : '';
            function CheckFloors(floorRange) {
                if (floorRange) {
                    return true;
                }
                else {
                    return false;
                }
            }
            console.log(floorFrom, floorTo);
            this.data[s].children = [];
            for (var a = 0; a < this.SeocndAPiData.length; a++) {
                // console.log(this.SeocndAPiData[a].FLOOR.split("-") );        
                if (Number(this.SeocndAPiData[a].FLOOR.split("-")[1]) >= Number(floorFrom.split(" ")[1]) && Number(this.SeocndAPiData[a].FLOOR.split("-")[1]) <= Number(floorTo.split(" ")[1])) {
                    //  this.data[s].children.push({data:{FLOORS:this.SeocndAPiData[a].FLOOR,BOOKED:this.SeocndAPiData[a].BOOKED,POSSESSION:this.SeocndAPiData[a].POSSESSION,AGREEMENT_DONE:this.SeocndAPiData[a].AGREEMENT_DONE,UNBOOKED:this.SeocndAPiData[a].UNBOOKED,HOLD:this.SeocndAPiData[a].SHOP,TOTAL:'5'}});
                    // console.log(this.SeocndAPiData[a].FLOOR, this.APIData[s].FLOOR);
                    var mainArray = this.data[s].data.FLOORS.split("-")[1];
                    console.log(mainArray.split(" ")[1], this.SeocndAPiData[a].FLOOR.split("-")[1]);
                    this.data[s].children.push({ data: { FLOORS: this.SeocndAPiData[a].FLOOR, BOOKED: this.SeocndAPiData[a].BOOKED, POSSESSION: this.SeocndAPiData[a].POSSESSION, AGREEMENT_DONE: this.SeocndAPiData[a].AGREEMENT_DONE, UNBOOKED: this.SeocndAPiData[a].UNBOOKED, HOLD: this.SeocndAPiData[a].SHOP, TOTAL: '5' } });
                    console.log(this.data[s].children);
                    // if(Number(mainArray.split(" ")[1]) < Number(this.SeocndAPiData[a].FLOOR.split("-")[1])){
                    //   if(typeof this.data[s].children != 'undefined'){ 
                    //   this.data[s].children.push({data:{FLOORS:this.SeocndAPiData[a].FLOOR,BOOKED:this.SeocndAPiData[a].BOOKED,POSSESSION:this.SeocndAPiData[a].POSSESSION,AGREEMENT_DONE:this.SeocndAPiData[a].AGREEMENT_DONE,UNBOOKED:this.SeocndAPiData[a].UNBOOKED,HOLD:this.SeocndAPiData[a].SHOP,TOTAL:'5'}});
                    //   }
                    // }
                }
            }
            //  console.log(this.data[s].data.FLOORS.split("-")[0]);
            //  if(this.data[s].data.FLOORS.split("-")[1] )
            console.log(this.data);
        }
    }
}
Page4Component.ɵfac = function Page4Component_Factory(t) { return new (t || Page4Component)(); };
Page4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page4Component, selectors: [["app-page4"]], decls: 47, vars: 4, consts: [[1, "Outer_Card"], [1, "contianer-fluid", "p-0"], [2, "text-align", "center"], ["rowspan", "2", 2, "vertical-align", "middle"], ["colspan", "3"], [2, "top", "29px", "max-width", "70px"], [2, "top", "29px"], [2, "max-width", "145px", "top", "29px"], ["fixed", "", 1, "p-0", 2, "max-height", "200px !important"], ["equalColumnsWidth", "", 3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["style", "white-space: nowrap;", "nbTreeGridCell", "", 4, "nbTreeGridCellDef"], [3, "nbTreeGridColumnDef", 4, "ngFor", "ngForOf"], [1, "p-0"], [1, "contianer-fluid"], ["nbTreeGridRow", ""], ["nbTreeGridCell", "", 2, "white-space", "nowrap"], [3, "expanded", 4, "ngIf"], ["class", "pl-2", 4, "ngIf"], [3, "expanded"], [1, "pl-2"], ["style", "text-align: center;", "nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridCell", "", 2, "text-align", "center"]], template: function Page4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "FLOORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "BOOKING PROGRESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "UNBOOKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "HOLD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BOOKED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "POSSESSION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "AGREEMENT DONE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-card-body", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, Page4Component_tr_24_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, Page4Component_td_26_Template, 4, 3, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, Page4Component_ng_container_27_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nb-card-footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGrid", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridRowDefColumns", ctx.allColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nbTreeGridColumnDef", ctx.customColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.defaultColumns);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridRowDefDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridColumnDefDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridCellDefDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridRowComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridCellDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbTreeGridRowToggleComponent"]], styles: [".Outer_Card[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow-y: auto !important;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  width: 10%;\n  max-width: 15% !important;\n  border: 1px solid #252547;\n  text-align: center;\n}\n\n.nb-tree-grid-cell[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.nb-cell[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nbutton[nbTreeGridRowToggle][_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n}\n\n.search-label[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.nb-column-FLOORS[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  width: 10%;\n}\n\n.nb-column-BOOKED[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n@media screen and (min-width: 400px) {\n  .nb-column-FLOORS[_ngcontent-%COMP%], .nb-column-BOOKED[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media screen and (min-width: 500px) {\n  .nb-column-FLOORS[_ngcontent-%COMP%], .nb-column-BOOKED[_ngcontent-%COMP%], .nb-column-POSSESSION[_ngcontent-%COMP%], .nb-column-AGREEMENT_DONE[_ngcontent-%COMP%], .nb-column-UNBOOKED[_ngcontent-%COMP%], .nb-column-HOLD[_ngcontent-%COMP%] {\n    width: 33.333%;\n  }\n}\n\n@media screen and (min-width: 600px) {\n  .nb-column-name[_ngcontent-%COMP%] {\n    width: 31%;\n  }\n\n  .nb-column-size[_ngcontent-%COMP%], .nb-column-kind[_ngcontent-%COMP%], .nb-column-items[_ngcontent-%COMP%] {\n    width: 23%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZTQvRDpcXEFuZ3VsYXJcXE9mZmljZVxcVGVzdFxcVGVzdC9zcmNcXGFwcFxccGFnZTRcXHBhZ2U0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlNC9wYWdlNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURLQTtFQUNJLFdBQUE7QUNGSjs7QURJQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURRRTtFQUNJLFVBQUE7QUNMTjs7QURPRTtFQUNJLGtCQUFBO0FDSk47O0FET0E7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSko7O0FET0U7RUFDRSxjQUFBO0FDSko7O0FETUU7RUFDRSxtQkFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDSEo7O0FES0U7RUFDRSxVQUFBO0FDRko7O0FES0U7RUFDRTs7SUFFRSxVQUFBO0VDRko7QUFDRjs7QURLRTtFQUNFOzs7Ozs7SUFNRSxjQUFBO0VDSEo7QUFDRjs7QURNRTtFQUNFO0lBQ0UsVUFBQTtFQ0pKOztFRE1FOzs7SUFHRSxVQUFBO0VDSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2U0L3BhZ2U0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhlYWR7XHJcbi8vICAgICBib3JkZXI6MXB4IHNvbGlkICMyNTI1NDc7XHJcbi8vIH1cclxuLk91dGVyX0NhcmR7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcbnRoe1xyXG4gICAgd2lkdGg6MTAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgIzI1MjU0NzsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5uYi10cmVlLWdyaWQtY2VsbHtcclxuICAgICAgcGFkZGluZzowO1xyXG4gIH1cclxuICAubmItY2VsbHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuYnV0dG9uW25iVHJlZUdyaWRSb3dUb2dnbGVdIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAubmItY29sdW1uLUZMT09SUyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICB3aWR0aDoxMCU7XHJcbiAgfVxyXG4gIC5uYi1jb2x1bW4tQk9PS0VEe1xyXG4gICAgd2lkdGg6MTAlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgLm5iLWNvbHVtbi1GTE9PUlMsXHJcbiAgICAubmItY29sdW1uLUJPT0tFRCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAubmItY29sdW1uLUZMT09SUyxcclxuICAgIC5uYi1jb2x1bW4tQk9PS0VELFxyXG4gICAgLm5iLWNvbHVtbi1QT1NTRVNTSU9OLFxyXG4gICAgLm5iLWNvbHVtbi1BR1JFRU1FTlRfRE9ORSxcclxuICAgIC5uYi1jb2x1bW4tVU5CT09LRUQsXHJcbiAgICAubmItY29sdW1uLUhPTEQge1xyXG4gICAgICB3aWR0aDogMzMuMzMzJTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5uYi1jb2x1bW4tbmFtZSB7XHJcbiAgICAgIHdpZHRoOiAzMSU7XHJcbiAgICB9XHJcbiAgICAubmItY29sdW1uLXNpemUsXHJcbiAgICAubmItY29sdW1uLWtpbmQsXHJcbiAgICAubmItY29sdW1uLWl0ZW1zIHtcclxuICAgICAgd2lkdGg6IDIzJTtcclxuICAgIH1cclxuICB9IiwiLk91dGVyX0NhcmQge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCB7XG4gIHdpZHRoOiAxMCU7XG4gIG1heC13aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNTI1NDc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5iLXRyZWUtZ3JpZC1jZWxsIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5iLWNlbGwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmJ1dHRvbltuYlRyZWVHcmlkUm93VG9nZ2xlXSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zZWFyY2gtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5uYi1jb2x1bW4tRkxPT1JTIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB3aWR0aDogMTAlO1xufVxuXG4ubmItY29sdW1uLUJPT0tFRCB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gIC5uYi1jb2x1bW4tRkxPT1JTLFxuLm5iLWNvbHVtbi1CT09LRUQge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5uYi1jb2x1bW4tRkxPT1JTLFxuLm5iLWNvbHVtbi1CT09LRUQsXG4ubmItY29sdW1uLVBPU1NFU1NJT04sXG4ubmItY29sdW1uLUFHUkVFTUVOVF9ET05FLFxuLm5iLWNvbHVtbi1VTkJPT0tFRCxcbi5uYi1jb2x1bW4tSE9MRCB7XG4gICAgd2lkdGg6IDMzLjMzMyU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5uYi1jb2x1bW4tbmFtZSB7XG4gICAgd2lkdGg6IDMxJTtcbiAgfVxuXG4gIC5uYi1jb2x1bW4tc2l6ZSxcbi5uYi1jb2x1bW4ta2luZCxcbi5uYi1jb2x1bW4taXRlbXMge1xuICAgIHdpZHRoOiAyMyU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page4',
                templateUrl: './page4.component.html',
                styleUrls: ['./page4.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\Office\Test\Test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map