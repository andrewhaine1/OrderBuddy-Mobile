(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{TBd7:function(l,n,u){"use strict";u.r(n);var r=u("CcnG"),e=u("gIcY"),o=u("4Z1R"),t=u("s+bP"),s=u("ruEz"),i=function(){function l(l,n,u,r){this.fb=l,this.ordWebService=n,this.userStorage=u,this.router=r,this.isCreatingAccount=!1}return l.prototype.ngOnInit=function(){this.userForm=this.fb.group({mobileNumber:["",[e.l.required,e.l.minLength(10),e.l.maxLength(10),e.l.pattern("[0-9]*")]],password:["",[e.l.required,e.l.minLength(6),e.l.maxLength(15)]],confirmPassword:[null,[e.l.required,b]],fullName:["",[e.l.required,e.l.minLength(5),e.l.maxLength(50)]]})},l.prototype.createAccount=function(){var l=this;this.isCreatingAccount=!0;var n=new t.d;n.Username=this.userForm.get("mobileNumber").value,n.Password=this.userForm.get("password").value,this.clearErrors(),this.ordWebService.createAccount(n).subscribe((function(u){var r=t.b.getIdpAccountFromObj(u.account),e=t.a.getAuthTokenFromObj(u.token);l.userStorage.saveAccount(r).catch((function(n){return l.setStorageError(n)})),l.userStorage.saveToken(e).catch((function(n){return l.setStorageError(n)}));var o=new t.c;o.OauthId=r.Id,o.FullName=l.userForm.get("fullName").value,o.MobileNumber=n.Username,l.ordWebService.createUser(o,e.AccessToken).subscribe((function(n){var u=t.c.getOrdUserFromObj(n);l.userStorage.saveOrdUser(u).catch((function(n){return l.setStorageError(n)})),l.isCreatingAccount=!1,null==l.httpError&&null==l.storageError&&l.router.navigate(["/account"],{queryParams:{signedIn:!0}})}),(function(n){return l.setHttpError(n)}))}),(function(n){l.isCreatingAccount=!1,l.setHttpError(n)}))},l.prototype.setHttpError=function(l){"TimeoutError"==l.ErrorName&&(this.httpError="Server unavailable"),400!=l.ErrorStatus&&500!=l.ErrorStatus||(this.httpError=null==l.ErrorMessage?"An error occurred.":l.ErrorMessage),409==l.ErrorStatus&&(this.httpConflictError=l.ErrorMessage)},l.prototype.setStorageError=function(l){this.storageError=l},l.prototype.clearErrors=function(){this.httpError=null,this.storageError=null},l}();function b(l){var n=null!==l.root.get("password")?l.root.get("password").value:"",u=l.value;return null!==n&&null!==u&&u!==n?{passwordMismatch:!0}:null}var a=function(){return function(){}}(),c=u("pMnS"),g=u("oBZk"),d=u("ZZ/e"),m=u("Ip0R"),h=u("ZYCi"),f=r.rb({encapsulation:0,styles:[[""]],data:{}});function p(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,7,"ion-card",[["class","bg-white"]],null,null,null,g.R,g.e)),r.sb(1,49152,null,0,d.m,[r.h,r.k,r.z],null,null),(l()(),r.tb(2,0,null,0,5,"ion-card-content",[],null,null,null,g.N,g.f)),r.sb(3,49152,null,0,d.n,[r.h,r.k,r.z],null,null),(l()(),r.tb(4,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,g.pb,g.G)),r.sb(5,49152,null,0,d.xb,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.tb(6,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),r.Mb(7,null,["",""]))],(function(l,n){l(n,5,0,"danger")}),(function(l,n){l(n,7,0,n.component.httpError)}))}function E(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,7,"ion-card",[["class","bg-white"]],null,null,null,g.R,g.e)),r.sb(1,49152,null,0,d.m,[r.h,r.k,r.z],null,null),(l()(),r.tb(2,0,null,0,5,"ion-card-content",[],null,null,null,g.N,g.f)),r.sb(3,49152,null,0,d.n,[r.h,r.k,r.z],null,null),(l()(),r.tb(4,0,null,0,3,"ion-text",[["color","danger"]],null,null,null,g.pb,g.G)),r.sb(5,49152,null,0,d.xb,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.tb(6,0,null,0,1,"h5",[],null,null,null,null,null)),(l()(),r.Mb(7,null,["",""]))],(function(l,n){l(n,5,0,"danger")}),(function(l,n){l(n,7,0,n.component.storageError)}))}function C(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-card-subtitle",[["color","danger"]],null,null,null,g.P,g.h)),r.sb(1,49152,null,0,d.p,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(2,0,["",""]))],(function(l,n){l(n,1,0,"danger")}),(function(l,n){l(n,2,0,n.component.httpConflictError)}))}function v(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,g.cb,g.t)),r.sb(1,49152,null,0,d.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" Enter a valid mobile number. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function k(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,g.cb,g.t)),r.sb(1,49152,null,0,d.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" A mobile number should be 10 digits long. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function N(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,g.cb,g.t)),r.sb(1,49152,null,0,d.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" Enter a password. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function w(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,g.cb,g.t)),r.sb(1,49152,null,0,d.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" A password should be at least 6 charachters long. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function F(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,g.cb,g.t)),r.sb(1,49152,null,0,d.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" Please confim password. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function y(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,g.cb,g.t)),r.sb(1,49152,null,0,d.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" Passwords should match. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function I(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,g.cb,g.t)),r.sb(1,49152,null,0,d.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" A name is required. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function z(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,g.cb,g.t)),r.sb(1,49152,null,0,d.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" Please enter your full name. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function O(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-button",[["expand","full"],["style","margin:30px 0 0 0;height: 45px;"],["type","submit"]],[[8,"title",0]],null,null,g.L,g.c)),r.sb(1,49152,null,0,d.k,[r.h,r.k,r.z],{disabled:[0,"disabled"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),r.Mb(-1,0,[" Create Account "]))],(function(l,n){l(n,1,0,!n.component.userForm.valid,"full","submit")}),(function(l,n){l(n,0,0,n.component.userForm.valid?"Save your entered data":"Disabled until the form data is valid")}))}function P(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,3,"ion-button",[["disabled",""],["expand","full"],["style","margin:30px 0 0 0;height: 45px;"]],null,null,null,g.L,g.c)),r.sb(1,49152,null,0,d.k,[r.h,r.k,r.z],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),r.tb(2,0,null,0,1,"ion-spinner",[],null,null,null,g.nb,g.E)),r.sb(3,49152,null,0,d.sb,[r.h,r.k,r.z],null,null)],(function(l,n){l(n,1,0,"","full")}),null)}function x(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,9,"ion-header",[],null,null,null,g.V,g.m)),r.sb(1,49152,null,0,d.B,[r.h,r.k,r.z],null,null),(l()(),r.tb(2,0,null,0,7,"ion-toolbar",[],null,null,null,g.rb,g.I)),r.sb(3,49152,null,0,d.Cb,[r.h,r.k,r.z],null,null),(l()(),r.tb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,g.M,g.d)),r.sb(5,49152,null,0,d.l,[r.h,r.k,r.z],null,null),(l()(),r.tb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==r.Eb(l,8).onClick(u)&&e),e}),g.K,g.b)),r.sb(7,49152,null,0,d.g,[r.h,r.k,r.z],{disabled:[0,"disabled"]},null),r.sb(8,16384,null,0,d.h,[[2,d.ib],d.Hb],null,null),(l()(),r.Mb(-1,0,[" Create Account "])),(l()(),r.tb(10,0,null,null,106,"ion-content",[["class","background"]],null,null,null,g.T,g.k)),r.sb(11,49152,null,0,d.u,[r.h,r.k,r.z],null,null),(l()(),r.ib(16777216,null,0,1,null,p)),r.sb(13,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,E)),r.sb(15,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.tb(16,0,null,0,100,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==r.Eb(l,18).onSubmit(u)&&e),"reset"===n&&(e=!1!==r.Eb(l,18).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.createAccount()&&e),e}),null,null)),r.sb(17,16384,null,0,e.p,[],null,null),r.sb(18,540672,null,0,e.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),r.Jb(2048,null,e.a,null,[e.d]),r.sb(20,16384,null,0,e.i,[[4,e.a]],null,null),(l()(),r.tb(21,0,null,null,61,"ion-card",[["class","bg-white"]],null,null,null,g.R,g.e)),r.sb(22,49152,null,0,d.m,[r.h,r.k,r.z],null,null),(l()(),r.tb(23,0,null,0,7,"ion-card-header",[],null,null,null,g.O,g.g)),r.sb(24,49152,null,0,d.o,[r.h,r.k,r.z],null,null),(l()(),r.tb(25,0,null,0,5,"ion-item",[["lines","full"],["no-padding",""]],null,null,null,g.bb,g.s)),r.sb(26,49152,null,0,d.H,[r.h,r.k,r.z],{lines:[0,"lines"]},null),r.sb(27,16384,null,0,d.d,[r.k],null,null),(l()(),r.tb(28,0,null,0,2,"ion-card-title",[],null,null,null,g.Q,g.i)),r.sb(29,49152,null,0,d.q,[r.h,r.k,r.z],null,null),(l()(),r.Mb(-1,0,["User Account"])),(l()(),r.tb(31,0,null,0,51,"ion-card-content",[],null,null,null,g.N,g.f)),r.sb(32,49152,null,0,d.n,[r.h,r.k,r.z],null,null),(l()(),r.tb(33,0,null,0,11,"ion-item",[["color","light"],["lines","none"],["style","border: 1px solid rgb(219, 219, 219);"]],null,null,null,g.bb,g.s)),r.sb(34,49152,null,0,d.H,[r.h,r.k,r.z],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),r.tb(35,0,null,0,9,"ion-input",[["formControlName","mobileNumber"],["id","mobileNumberId"],["placeholder","Mobile Number (e.g. 0780123456)"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==r.Eb(l,39)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==r.Eb(l,39)._handleInputEvent(u.target)&&e),e}),g.ab,g.r)),r.Jb(512,null,m.t,m.u,[r.s,r.t,r.k,r.D]),r.sb(37,278528,null,0,m.j,[m.t],{ngClass:[0,"ngClass"]},null),r.Hb(38,{"is-invalid":0}),r.sb(39,16384,null,0,d.Nb,[r.k],null,null),r.Jb(1024,null,e.f,(function(l){return[l]}),[d.Nb]),r.sb(41,671744,null,0,e.c,[[3,e.a],[8,null],[8,null],[6,e.f],[2,e.o]],{name:[0,"name"]},null),r.Jb(2048,null,e.g,null,[e.c]),r.sb(43,16384,null,0,e.h,[[4,e.g]],null,null),r.sb(44,49152,null,0,d.G,[r.h,r.k,r.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),r.ib(16777216,null,0,1,null,C)),r.sb(46,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,v)),r.sb(48,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,k)),r.sb(50,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.tb(51,0,null,0,11,"ion-item",[["color","light"],["lines","none"],["style","margin-top: 15px;border: 1px solid rgb(219, 219, 219);"]],null,null,null,g.bb,g.s)),r.sb(52,49152,null,0,d.H,[r.h,r.k,r.z],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),r.tb(53,0,null,0,9,"ion-input",[["formControlName","password"],["id","passwordId"],["placeholder","Password (minimum 6 char)"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==r.Eb(l,57)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==r.Eb(l,57)._handleInputEvent(u.target)&&e),e}),g.ab,g.r)),r.Jb(512,null,m.t,m.u,[r.s,r.t,r.k,r.D]),r.sb(55,278528,null,0,m.j,[m.t],{ngClass:[0,"ngClass"]},null),r.Hb(56,{"is-invalid":0}),r.sb(57,16384,null,0,d.Nb,[r.k],null,null),r.Jb(1024,null,e.f,(function(l){return[l]}),[d.Nb]),r.sb(59,671744,null,0,e.c,[[3,e.a],[8,null],[8,null],[6,e.f],[2,e.o]],{name:[0,"name"]},null),r.Jb(2048,null,e.g,null,[e.c]),r.sb(61,16384,null,0,e.h,[[4,e.g]],null,null),r.sb(62,49152,null,0,d.G,[r.h,r.k,r.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),r.ib(16777216,null,0,1,null,N)),r.sb(64,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,w)),r.sb(66,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.tb(67,0,null,0,11,"ion-item",[["color","light"],["lines","none"],["style","margin: 15px 0 15px 0;border: 1px solid rgb(219, 219, 219);"]],null,null,null,g.bb,g.s)),r.sb(68,49152,null,0,d.H,[r.h,r.k,r.z],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),r.tb(69,0,null,0,9,"ion-input",[["formControlName","confirmPassword"],["id","confirmPasswordId"],["placeholder","Confirm Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==r.Eb(l,73)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==r.Eb(l,73)._handleInputEvent(u.target)&&e),e}),g.ab,g.r)),r.Jb(512,null,m.t,m.u,[r.s,r.t,r.k,r.D]),r.sb(71,278528,null,0,m.j,[m.t],{ngClass:[0,"ngClass"]},null),r.Hb(72,{"is-invalid":0}),r.sb(73,16384,null,0,d.Nb,[r.k],null,null),r.Jb(1024,null,e.f,(function(l){return[l]}),[d.Nb]),r.sb(75,671744,null,0,e.c,[[3,e.a],[8,null],[8,null],[6,e.f],[2,e.o]],{name:[0,"name"]},null),r.Jb(2048,null,e.g,null,[e.c]),r.sb(77,16384,null,0,e.h,[[4,e.g]],null,null),r.sb(78,49152,null,0,d.G,[r.h,r.k,r.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),r.ib(16777216,null,0,1,null,F)),r.sb(80,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,y)),r.sb(82,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.tb(83,0,null,null,33,"ion-card",[["class","bg-white"]],null,null,null,g.R,g.e)),r.sb(84,49152,null,0,d.m,[r.h,r.k,r.z],null,null),(l()(),r.tb(85,0,null,0,7,"ion-card-header",[],null,null,null,g.O,g.g)),r.sb(86,49152,null,0,d.o,[r.h,r.k,r.z],null,null),(l()(),r.tb(87,0,null,0,5,"ion-item",[["lines","full"],["no-padding",""]],null,null,null,g.bb,g.s)),r.sb(88,49152,null,0,d.H,[r.h,r.k,r.z],{lines:[0,"lines"]},null),r.sb(89,16384,null,0,d.d,[r.k],null,null),(l()(),r.tb(90,0,null,0,2,"ion-card-title",[],null,null,null,g.Q,g.i)),r.sb(91,49152,null,0,d.q,[r.h,r.k,r.z],null,null),(l()(),r.Mb(-1,0,["User Details"])),(l()(),r.tb(93,0,null,0,23,"ion-card-content",[],null,null,null,g.N,g.f)),r.sb(94,49152,null,0,d.n,[r.h,r.k,r.z],null,null),(l()(),r.tb(95,0,null,0,11,"ion-item",[["color","light"],["lines","none"],["style","border: 1px solid rgb(219, 219, 219);"]],null,null,null,g.bb,g.s)),r.sb(96,49152,null,0,d.H,[r.h,r.k,r.z],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),r.tb(97,0,null,0,9,"ion-input",[["formControlName","fullName"],["id","fullNameId"],["placeholder","Full Name (e.g. John Woo)"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==r.Eb(l,101)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==r.Eb(l,101)._handleInputEvent(u.target)&&e),e}),g.ab,g.r)),r.Jb(512,null,m.t,m.u,[r.s,r.t,r.k,r.D]),r.sb(99,278528,null,0,m.j,[m.t],{ngClass:[0,"ngClass"]},null),r.Hb(100,{"is-invalid":0}),r.sb(101,16384,null,0,d.Nb,[r.k],null,null),r.Jb(1024,null,e.f,(function(l){return[l]}),[d.Nb]),r.sb(103,671744,null,0,e.c,[[3,e.a],[8,null],[8,null],[6,e.f],[2,e.o]],{name:[0,"name"]},null),r.Jb(2048,null,e.g,null,[e.c]),r.sb(105,16384,null,0,e.h,[[4,e.g]],null,null),r.sb(106,49152,null,0,d.G,[r.h,r.k,r.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),r.ib(16777216,null,0,1,null,I)),r.sb(108,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,z)),r.sb(110,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.tb(111,0,null,0,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),r.Mb(-1,null,["Entering your correct name would help in ensuring that you receive the right order."])),(l()(),r.ib(16777216,null,0,1,null,O)),r.sb(114,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,P)),r.sb(116,16384,null,0,m.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,u.isCreatingAccount),l(n,13,0,u.httpError),l(n,15,0,u.storageError),l(n,18,0,u.userForm),l(n,26,0,"full"),l(n,34,0,"light","none");var r=l(n,38,0,(u.userForm.get("mobileNumber").touched||u.userForm.get("mobileNumber").dirty)&&!u.userForm.get("mobileNumber").valid);l(n,37,0,r),l(n,41,0,"mobileNumber"),l(n,44,0,"Mobile Number (e.g. 0780123456)","text"),l(n,46,0,u.httpConflictError),l(n,48,0,u.userForm.get("mobileNumber").touched&&((null==u.userForm.get("mobileNumber").errors?null:u.userForm.get("mobileNumber").errors.required)||(null==u.userForm.get("mobileNumber").errors?null:u.userForm.get("mobileNumber").errors.pattern)||(null==u.userForm.get("mobileNumber").errors?null:u.userForm.get("mobileNumber").errors.maxlength))),l(n,50,0,u.userForm.get("mobileNumber").touched&&(null==u.userForm.get("mobileNumber").errors?null:u.userForm.get("mobileNumber").errors.minlength)),l(n,52,0,"light","none");var e=l(n,56,0,(u.userForm.get("password").touched||u.userForm.get("password").dirty)&&!u.userForm.get("password").valid);l(n,55,0,e),l(n,59,0,"password"),l(n,62,0,"Password (minimum 6 char)","password"),l(n,64,0,u.userForm.get("password").touched&&(null==u.userForm.get("password").errors?null:u.userForm.get("password").errors.required)),l(n,66,0,u.userForm.get("password").touched&&(null==u.userForm.get("password").errors?null:u.userForm.get("password").errors.minlength)),l(n,68,0,"light","none");var o=l(n,72,0,(u.userForm.get("confirmPassword").touched||u.userForm.get("confirmPassword").dirty)&&!u.userForm.get("confirmPassword").valid);l(n,71,0,o),l(n,75,0,"confirmPassword"),l(n,78,0,"Confirm Password","password"),l(n,80,0,u.userForm.get("confirmPassword").touched&&(null==u.userForm.get("confirmPassword").errors?null:u.userForm.get("confirmPassword").errors.required)),l(n,82,0,u.userForm.get("confirmPassword").touched&&(null==u.userForm.get("confirmPassword").errors?null:u.userForm.get("confirmPassword").errors.passwordMismatch)),l(n,88,0,"full"),l(n,96,0,"light","none");var t=l(n,100,0,(u.userForm.get("fullName").touched||u.userForm.get("fullName").dirty)&&!u.userForm.get("fullName").valid);l(n,99,0,t),l(n,103,0,"fullName"),l(n,106,0,"Full Name (e.g. John Woo)","text"),l(n,108,0,u.userForm.get("fullName").touched&&(null==u.userForm.get("fullName").errors?null:u.userForm.get("fullName").errors.required)),l(n,110,0,u.userForm.get("fullName").touched&&(null==u.userForm.get("fullName").errors?null:u.userForm.get("fullName").errors.minlength)),l(n,114,0,!u.isCreatingAccount),l(n,116,0,u.isCreatingAccount)}),(function(l,n){l(n,16,0,r.Eb(n,20).ngClassUntouched,r.Eb(n,20).ngClassTouched,r.Eb(n,20).ngClassPristine,r.Eb(n,20).ngClassDirty,r.Eb(n,20).ngClassValid,r.Eb(n,20).ngClassInvalid,r.Eb(n,20).ngClassPending),l(n,35,0,r.Eb(n,43).ngClassUntouched,r.Eb(n,43).ngClassTouched,r.Eb(n,43).ngClassPristine,r.Eb(n,43).ngClassDirty,r.Eb(n,43).ngClassValid,r.Eb(n,43).ngClassInvalid,r.Eb(n,43).ngClassPending),l(n,53,0,r.Eb(n,61).ngClassUntouched,r.Eb(n,61).ngClassTouched,r.Eb(n,61).ngClassPristine,r.Eb(n,61).ngClassDirty,r.Eb(n,61).ngClassValid,r.Eb(n,61).ngClassInvalid,r.Eb(n,61).ngClassPending),l(n,69,0,r.Eb(n,77).ngClassUntouched,r.Eb(n,77).ngClassTouched,r.Eb(n,77).ngClassPristine,r.Eb(n,77).ngClassDirty,r.Eb(n,77).ngClassValid,r.Eb(n,77).ngClassInvalid,r.Eb(n,77).ngClassPending),l(n,97,0,r.Eb(n,105).ngClassUntouched,r.Eb(n,105).ngClassTouched,r.Eb(n,105).ngClassPristine,r.Eb(n,105).ngClassDirty,r.Eb(n,105).ngClassValid,r.Eb(n,105).ngClassInvalid,r.Eb(n,105).ngClassPending)}))}function M(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,1,"app-create-account",[],null,null,null,x,f)),r.sb(1,114688,null,0,i,[e.b,o.a,s.a,h.m],null,null)],(function(l,n){l(n,1,0)}),null)}var A=r.pb("app-create-account",i,M,{},{},[]);u.d(n,"CreateAccountPageModuleNgFactory",(function(){return S}));var S=r.qb(a,[],(function(l){return r.Bb([r.Cb(512,r.j,r.bb,[[8,[c.a,A]],[3,r.j],r.x]),r.Cb(4608,m.n,m.m,[r.u,[2,m.w]]),r.Cb(4608,e.n,e.n,[]),r.Cb(4608,e.b,e.b,[]),r.Cb(4608,d.b,d.b,[r.z,r.g]),r.Cb(4608,d.Gb,d.Gb,[d.b,r.j,r.q]),r.Cb(4608,d.Kb,d.Kb,[d.b,r.j,r.q]),r.Cb(1073742336,m.b,m.b,[]),r.Cb(1073742336,e.m,e.m,[]),r.Cb(1073742336,e.e,e.e,[]),r.Cb(1073742336,e.k,e.k,[]),r.Cb(1073742336,d.Eb,d.Eb,[]),r.Cb(1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),r.Cb(1073742336,a,a,[]),r.Cb(1024,h.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);