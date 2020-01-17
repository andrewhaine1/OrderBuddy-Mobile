(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{OEZZ:function(l,n,u){"use strict";u.r(n);var r=u("CcnG"),o=u("gIcY"),e=u("4Z1R"),t=u("s+bP"),i=u("ruEz"),s=function(){function l(l,n,u,r,o){this.fb=l,this.ordWebService=n,this.userStorage=u,this.router=r,this.route=o,this.isSigningIn=!1,this.httpErrors=new Array,this.storageErrors=new Array}return l.prototype.ngOnInit=function(){var l=this;this.loginForm=this.fb.group({mobileNumber:["",[o.l.required,o.l.minLength(10),o.l.maxLength(10),o.l.pattern("[0-9]*")]],password:["",[o.l.required,o.l.minLength(6),o.l.maxLength(15)]]}),this.route.queryParams.subscribe((function(n){n.afterSignInRedirectTo&&(l.afterSignInRedirectTo=n.afterSignInRedirectTo)}))},l.prototype.login=function(){var l=this;if(this.loginForm.valid){this.isSigningIn=!0;var n=this.loginForm.get("mobileNumber").value,u=this.loginForm.get("password").value,r=new t.d;r.Username=n,r.Password=u,this.httpErrors=new Array,this.storageErrors=new Array,this.ordWebService.Login(r).subscribe((function(n){var u=t.b.getIdpAccountFromObj(n.account),r=t.a.getAuthTokenFromObj(n.token);l.ordWebService.getUserByOauthId(u.Id,r.AccessToken).subscribe((function(n){var o=t.c.getOrdUserFromObj(n);l.ordWebService.getRestaurantsForUser(o.Id).subscribe((function(n){null!==n&&n.length>0?l.userStorage.setUserInfo(!0).then():l.userStorage.setUserInfo().then()}),(function(n){return l.storageErrors.push(n)})),l.userStorage.saveAccount(u).catch((function(n){l.storageErrors.push(n)})),l.userStorage.saveToken(r).catch((function(n){l.storageErrors.push(n)})),l.userStorage.saveOrdUser(o).catch((function(n){l.storageErrors.push(n)})),l.isSigningIn=!1,0===l.httpErrors.length&&0===l.storageErrors.length&&l.router.navigate(["/account"],{queryParams:{signedIn:!0,afterSignInRedirectTo:l.afterSignInRedirectTo}})}),(function(n){l.isSigningIn=!1,l.httpErrors.push(n)}))}),(function(n){l.isSigningIn=!1,l.httpErrors.push(n)}))}},l}(),b=function(){return function(){}}(),g=u("pMnS"),a=u("oBZk"),c=u("ZZ/e"),d=u("Ip0R"),h=u("ZYCi"),m=r.rb({encapsulation:0,styles:[[""]],data:{}});function p(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),r.tb(1,0,null,null,2,"ion-card-subtitle",[["color","danger"]],null,null,null,a.P,a.h)),r.sb(2,49152,null,0,c.p,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(3,0,["",""]))],(function(l,n){l(n,2,0,"danger")}),(function(l,n){l(n,3,0,n.context.$implicit)}))}function f(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-card-subtitle",[["color","danger"]],null,null,null,a.P,a.h)),r.sb(1,49152,null,0,c.p,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(2,0,["",""]))],(function(l,n){l(n,1,0,"danger")}),(function(l,n){l(n,2,0,n.parent.context.$implicit.ErrorMessage)}))}function E(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),r.ib(16777216,null,null,1,null,f)),r.sb(2,16384,null,0,d.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.context.$implicit.ErrorStatus>400)}),null)}function I(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,a.cb,a.t)),r.sb(1,49152,null,0,c.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" Enter a valid mobile number. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function C(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,a.cb,a.t)),r.sb(1,49152,null,0,c.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" A mobile number should be 10 digits long. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function k(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,a.cb,a.t)),r.sb(1,49152,null,0,c.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" Enter a password. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function v(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,a.cb,a.t)),r.sb(1,49152,null,0,c.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(-1,0,[" A password should be at least 6 charachters long. "]))],(function(l,n){l(n,1,0,"danger")}),null)}function O(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-label",[["color","danger"]],null,null,null,a.cb,a.t)),r.sb(1,49152,null,0,c.N,[r.h,r.k,r.z],{color:[0,"color"]},null),(l()(),r.Mb(2,0,["",""]))],(function(l,n){l(n,1,0,"danger")}),(function(l,n){l(n,2,0,n.parent.context.$implicit.ErrorMessage)}))}function F(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"div",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),r.ib(16777216,null,null,1,null,O)),r.sb(2,16384,null,0,d.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,400==n.context.$implicit.ErrorStatus)}),null)}function y(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,2,"ion-button",[["expand","full"],["style","margin:20px 0 0 0;height:45px;"],["type","submit"]],null,null,null,a.L,a.c)),r.sb(1,49152,null,0,c.k,[r.h,r.k,r.z],{expand:[0,"expand"],type:[1,"type"]},null),(l()(),r.Mb(-1,0,[" Sign In "]))],(function(l,n){l(n,1,0,"full","submit")}),null)}function S(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,3,"ion-button",[["disabled",""],["expand","full"],["style","margin:20px 0 0 0;height:45px;"]],null,null,null,a.L,a.c)),r.sb(1,49152,null,0,c.k,[r.h,r.k,r.z],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),r.tb(2,0,null,0,1,"ion-spinner",[],null,null,null,a.nb,a.E)),r.sb(3,49152,null,0,c.sb,[r.h,r.k,r.z],null,null)],(function(l,n){l(n,1,0,"","full")}),null)}function w(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,9,"ion-header",[],null,null,null,a.V,a.m)),r.sb(1,49152,null,0,c.B,[r.h,r.k,r.z],null,null),(l()(),r.tb(2,0,null,0,7,"ion-toolbar",[],null,null,null,a.rb,a.I)),r.sb(3,49152,null,0,c.Cb,[r.h,r.k,r.z],null,null),(l()(),r.tb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,a.M,a.d)),r.sb(5,49152,null,0,c.l,[r.h,r.k,r.z],null,null),(l()(),r.tb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==r.Eb(l,8).onClick(u)&&o),o}),a.K,a.b)),r.sb(7,49152,null,0,c.g,[r.h,r.k,r.z],{disabled:[0,"disabled"]},null),r.sb(8,16384,null,0,c.h,[[2,c.ib],c.Hb],null,null),(l()(),r.Mb(-1,0,[" Sign In "])),(l()(),r.tb(10,0,null,null,57,"ion-content",[["class","background"]],null,null,null,a.T,a.k)),r.sb(11,49152,null,0,c.u,[r.h,r.k,r.z],null,null),(l()(),r.tb(12,0,null,0,55,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,e=l.component;return"submit"===n&&(o=!1!==r.Eb(l,14).onSubmit(u)&&o),"reset"===n&&(o=!1!==r.Eb(l,14).onReset()&&o),"ngSubmit"===n&&(o=!1!==e.login()&&o),o}),null,null)),r.sb(13,16384,null,0,o.p,[],null,null),r.sb(14,540672,null,0,o.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),r.Jb(2048,null,o.a,null,[o.d]),r.sb(16,16384,null,0,o.i,[[4,o.a]],null,null),(l()(),r.tb(17,0,null,null,50,"ion-card",[["class","bg-white"]],null,null,null,a.R,a.e)),r.sb(18,49152,null,0,c.m,[r.h,r.k,r.z],null,null),(l()(),r.tb(19,0,null,0,8,"ion-card-header",[],null,null,null,a.O,a.g)),r.sb(20,49152,null,0,c.o,[r.h,r.k,r.z],null,null),(l()(),r.ib(16777216,null,0,1,null,p)),r.sb(22,278528,null,0,d.k,[r.O,r.L,r.s],{ngForOf:[0,"ngForOf"]},null),(l()(),r.ib(16777216,null,0,1,null,E)),r.sb(24,278528,null,0,d.k,[r.O,r.L,r.s],{ngForOf:[0,"ngForOf"]},null),(l()(),r.tb(25,0,null,0,2,"ion-card-title",[],null,null,null,a.Q,a.i)),r.sb(26,49152,null,0,c.q,[r.h,r.k,r.z],null,null),(l()(),r.Mb(-1,0,["Sign In"])),(l()(),r.tb(28,0,null,0,39,"ion-card-content",[],null,null,null,a.N,a.f)),r.sb(29,49152,null,0,c.n,[r.h,r.k,r.z],null,null),(l()(),r.tb(30,0,null,0,11,"ion-item",[["color","light"],["lines","none"],["style","border: 1px solid rgb(219, 219, 219);"]],null,null,null,a.bb,a.s)),r.sb(31,49152,null,0,c.H,[r.h,r.k,r.z],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),r.tb(32,0,null,0,9,"ion-input",[["formControlName","mobileNumber"],["id","mobileNumberId"],["placeholder","Mobile Number"],["style","font-size:20px;"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==r.Eb(l,36)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==r.Eb(l,36)._handleInputEvent(u.target)&&o),o}),a.ab,a.r)),r.Jb(512,null,d.t,d.u,[r.s,r.t,r.k,r.D]),r.sb(34,278528,null,0,d.j,[d.t],{ngClass:[0,"ngClass"]},null),r.Hb(35,{"is-invalid":0}),r.sb(36,16384,null,0,c.Nb,[r.k],null,null),r.Jb(1024,null,o.f,(function(l){return[l]}),[c.Nb]),r.sb(38,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),r.Jb(2048,null,o.g,null,[o.c]),r.sb(40,16384,null,0,o.h,[[4,o.g]],null,null),r.sb(41,49152,null,0,c.G,[r.h,r.k,r.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),r.ib(16777216,null,0,1,null,I)),r.sb(43,16384,null,0,d.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,C)),r.sb(45,16384,null,0,d.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.tb(46,0,null,0,11,"ion-item",[["color","light"],["lines","none"],["style","margin-top: 15px;border: 1px solid rgb(219, 219, 219);"]],null,null,null,a.bb,a.s)),r.sb(47,49152,null,0,c.H,[r.h,r.k,r.z],{color:[0,"color"],lines:[1,"lines"]},null),(l()(),r.tb(48,0,null,0,9,"ion-input",[["formControlName","password"],["id","passwordId"],["placeholder","Password"],["style","font-size:20px;"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==r.Eb(l,52)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==r.Eb(l,52)._handleInputEvent(u.target)&&o),o}),a.ab,a.r)),r.Jb(512,null,d.t,d.u,[r.s,r.t,r.k,r.D]),r.sb(50,278528,null,0,d.j,[d.t],{ngClass:[0,"ngClass"]},null),r.Hb(51,{"is-invalid":0}),r.sb(52,16384,null,0,c.Nb,[r.k],null,null),r.Jb(1024,null,o.f,(function(l){return[l]}),[c.Nb]),r.sb(54,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),r.Jb(2048,null,o.g,null,[o.c]),r.sb(56,16384,null,0,o.h,[[4,o.g]],null,null),r.sb(57,49152,null,0,c.G,[r.h,r.k,r.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),r.ib(16777216,null,0,1,null,k)),r.sb(59,16384,null,0,d.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,v)),r.sb(61,16384,null,0,d.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,F)),r.sb(63,278528,null,0,d.k,[r.O,r.L,r.s],{ngForOf:[0,"ngForOf"]},null),(l()(),r.ib(16777216,null,0,1,null,y)),r.sb(65,16384,null,0,d.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null),(l()(),r.ib(16777216,null,0,1,null,S)),r.sb(67,16384,null,0,d.l,[r.O,r.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,u.isSigningIn),l(n,14,0,u.loginForm),l(n,22,0,u.storageErrors),l(n,24,0,u.httpErrors),l(n,31,0,"light","none");var r=l(n,35,0,(u.loginForm.get("mobileNumber").touched||u.loginForm.get("mobileNumber").dirty)&&!u.loginForm.get("mobileNumber").valid);l(n,34,0,r),l(n,38,0,"mobileNumber"),l(n,41,0,"Mobile Number","text"),l(n,43,0,u.loginForm.get("mobileNumber").touched&&((null==u.loginForm.get("mobileNumber").errors?null:u.loginForm.get("mobileNumber").errors.required)||(null==u.loginForm.get("mobileNumber").errors?null:u.loginForm.get("mobileNumber").errors.pattern)||(null==u.loginForm.get("mobileNumber").errors?null:u.loginForm.get("mobileNumber").errors.maxlength))),l(n,45,0,u.loginForm.get("mobileNumber").touched&&(null==u.loginForm.get("mobileNumber").errors?null:u.loginForm.get("mobileNumber").errors.minlength)),l(n,47,0,"light","none");var o=l(n,51,0,(u.loginForm.get("password").touched||u.loginForm.get("password").dirty)&&!u.loginForm.get("password").valid);l(n,50,0,o),l(n,54,0,"password"),l(n,57,0,"Password","password"),l(n,59,0,u.loginForm.get("password").touched&&(null==u.loginForm.get("password").errors?null:u.loginForm.get("password").errors.required)),l(n,61,0,u.loginForm.get("password").touched&&(null==u.loginForm.get("password").errors?null:u.loginForm.get("password").errors.minlength)),l(n,63,0,u.httpErrors),l(n,65,0,!u.isSigningIn),l(n,67,0,u.isSigningIn)}),(function(l,n){l(n,12,0,r.Eb(n,16).ngClassUntouched,r.Eb(n,16).ngClassTouched,r.Eb(n,16).ngClassPristine,r.Eb(n,16).ngClassDirty,r.Eb(n,16).ngClassValid,r.Eb(n,16).ngClassInvalid,r.Eb(n,16).ngClassPending),l(n,32,0,r.Eb(n,40).ngClassUntouched,r.Eb(n,40).ngClassTouched,r.Eb(n,40).ngClassPristine,r.Eb(n,40).ngClassDirty,r.Eb(n,40).ngClassValid,r.Eb(n,40).ngClassInvalid,r.Eb(n,40).ngClassPending),l(n,48,0,r.Eb(n,56).ngClassUntouched,r.Eb(n,56).ngClassTouched,r.Eb(n,56).ngClassPristine,r.Eb(n,56).ngClassDirty,r.Eb(n,56).ngClassValid,r.Eb(n,56).ngClassInvalid,r.Eb(n,56).ngClassPending)}))}function N(l){return r.Ob(0,[(l()(),r.tb(0,0,null,null,1,"app-sign-in",[],null,null,null,w,m)),r.sb(1,114688,null,0,s,[o.b,e.a,i.a,h.m,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=r.pb("app-sign-in",s,N,{},{},[]);u.d(n,"SignInPageModuleNgFactory",(function(){return z}));var z=r.qb(b,[],(function(l){return r.Bb([r.Cb(512,r.j,r.bb,[[8,[g.a,x]],[3,r.j],r.x]),r.Cb(4608,d.n,d.m,[r.u,[2,d.w]]),r.Cb(4608,o.n,o.n,[]),r.Cb(4608,c.b,c.b,[r.z,r.g]),r.Cb(4608,c.Gb,c.Gb,[c.b,r.j,r.q]),r.Cb(4608,c.Kb,c.Kb,[c.b,r.j,r.q]),r.Cb(4608,o.b,o.b,[]),r.Cb(1073742336,d.b,d.b,[]),r.Cb(1073742336,o.m,o.m,[]),r.Cb(1073742336,o.e,o.e,[]),r.Cb(1073742336,c.Eb,c.Eb,[]),r.Cb(1073742336,o.k,o.k,[]),r.Cb(1073742336,h.p,h.p,[[2,h.u],[2,h.m]]),r.Cb(1073742336,b,b,[]),r.Cb(1024,h.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);