(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{mGWX:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),r=e("mrSG"),t=e("a3Cf"),o=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return Object(r.__extends)(n,l),n.prototype.getAppName=function(){return Object(t.cordova)(this,"getAppName",{},arguments)},n.prototype.getPackageName=function(){return Object(t.cordova)(this,"getPackageName",{},arguments)},n.prototype.getVersionCode=function(){return Object(t.cordova)(this,"getVersionCode",{},arguments)},n.prototype.getVersionNumber=function(){return Object(t.cordova)(this,"getVersionNumber",{},arguments)},n.pluginName="AppVersion",n.plugin="cordova-plugin-app-version",n.pluginRef="cordova.getAppVersion",n.repo="https://github.com/whiteoctober/cordova-plugin-app-version",n.platforms=["Android","iOS","Windows"],n}(t.IonicNativePlugin),a=e("ZZ/e");class i{constructor(l,n){this.platform=l,this.appVersion=n,this.showTermsAndConditions=!0,this.showPrivacyPolicy=!0}ngOnInit(){this.platform.ready().then(()=>{this.appVersion.getAppName().then(l=>this.appName=l),this.appVersion.getPackageName().then(l=>this.packageName=l),this.appVersion.getVersionCode().then(l=>this.versionCode=l),this.appVersion.getVersionNumber().then(l=>this.versionNumber=l)})}toggleTermsAndConditions(){this.showTermsAndConditions=0==this.showTermsAndConditions}togglePrivacyPolicy(){this.showPrivacyPolicy=0==this.showPrivacyPolicy}}class s{}var d=e("pMnS"),b=e("oBZk"),c=e("SVse"),p=u.pb({encapsulation:0,styles:[[""]],data:{}});function h(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,b.P,b.h)),u.qb(1,49152,null,0,a.p,[u.h,u.k,u.x],null,null),(l()(),u.Kb(2,0,["App Version: ",""]))],null,(function(l,n){l(n,2,0,n.component.versionNumber)}))}function m(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,b.P,b.h)),u.qb(1,49152,null,0,a.p,[u.h,u.k,u.x],null,null),(l()(),u.Kb(2,0,["Version Code: ",""]))],null,(function(l,n){l(n,2,0,n.component.versionCode)}))}function g(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,b.P,b.h)),u.qb(1,49152,null,0,a.p,[u.h,u.k,u.x],null,null),(l()(),u.Kb(-1,0,["App Version: Not available"]))],null,null)}function y(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,2,"ion-card-subtitle",[],null,null,null,b.P,b.h)),u.qb(1,49152,null,0,a.p,[u.h,u.k,u.x],null,null),(l()(),u.Kb(-1,0,["Version Code: Not available"]))],null,null)}function f(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,58,"ion-card-content",[],null,null,null,b.N,b.f)),u.qb(1,49152,null,0,a.n,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,56,"div",[],null,null,null,null,null)),(l()(),u.rb(3,0,null,null,1,"h2",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Disclaimer"])),(l()(),u.rb(5,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Order Buddy or its owner will not be held responsible for any financial loss incurred by restaurant owners or customers regarding the incorrect pricing of menu items. Restaurant owners are expected to make sure that the prices of menu items, as well as the total amount of orders are accurate before accepting any orders. Owners will need to contact Order Buddy for adjustments to menu items until menu\u2019s can be edited or updated within the app. "])),(l()(),u.rb(7,0,null,null,1,"h2",[["style","text-decoration: underline;margin:20px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Overview"])),(l()(),u.rb(9,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Order Buddy is a food ordering app that allows you to order food from restaurants in your local suburb or in your city. The areas in which restaurants are listed or available are referred to as \u201cService Areas\u201d and the only available service area at this moment is Ennerdale, in Johannesburg. Other service areas will be added at a later stage. "])),(l()(),u.rb(11,0,null,null,1,"h2",[["style","text-decoration: underline;margin:20px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["1. Usage"])),(l()(),u.rb(13,0,null,null,1,"h3",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["1.1 Sign up"])),(l()(),u.rb(15,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" You are required to sign up for an account, and to be logged in if you wish to interact with restaurants (as a customer), or with customers (as a restaurant owner). Fraudulent information is strictly prohibited. This app is intended to make communication easier between customers and restaurant owners and fraudulent information could make it difficult for restaurants to communicate with customers, as well as have a negative financial impact on restaurants. "])),(l()(),u.rb(17,0,null,null,1,"h3",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["1.2 Account Restrictions"])),(l()(),u.rb(19,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Your account can be blocked or restricted from placing orders if it is determined that you have provided fraudulent information, or, placed any orders maliciously. If your account Is blocked, you will have to contact support and provide sufficient reasons as to why your account should be unblocked. "])),(l()(),u.rb(21,0,null,null,1,"h2",[["style","text-decoration: underline;margin:20px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["2. Notifications"])),(l()(),u.rb(23,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Restaurant owners are notified as soon as a customer has placed and order. Customers are notified when their order has been accepted by the restaurant and when their order is ready for collection. Notifications are provided by an external platform and are not guaranteed to be delivered. Please check the order status section for the recommended procedure regarding communications between restaurants and customers pertaining to statuses, or, progress of orders. The app will periodically check for order status updates when you are on the \u201cview order\u201d page (users), or, when you are on the \u201cview restaurant orders\u201d page (owners), but this is based on internet connectivity. "])),(l()(),u.rb(25,0,null,null,1,"h2",[["style","text-decoration: underline;margin:20px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["3. Order Statuses"])),(l()(),u.rb(27,0,null,null,1,"h3",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["3.1 Placed"])),(l()(),u.rb(29,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Once your order has been successfully received by our servers, it goes into a status of \u2018Placed\u2019. This means that your order can be viewed by the restaurant, provided that their system is online, but not that any preparations have begun yet. "])),(l()(),u.rb(31,0,null,null,1,"h3",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["3.2 Accepted"])),(l()(),u.rb(33,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" This means that the restaurant is aware of your order and has accepted it. If your order has not been accepted in 15 minutes, please feel free to contact the restaurant using the contact information provided on the restaurant details page to enquire about the acceptance of your order. "])),(l()(),u.rb(35,0,null,null,1,"h3",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["3.3 Ready"])),(l()(),u.rb(37,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" This means that your order is ready for collection. This usually requires patients as food takes time to prepare. If your order has been in an accepted state for longer than 45 minutes, please feel free to contact the restaurant using the contact information provided on the restaurant details page to enquire about the progress of your order. "])),(l()(),u.rb(39,0,null,null,1,"h3",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["3.4 Completed"])),(l()(),u.rb(41,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" This means that your order has been collected by or delivered to you (when delivery is available). "])),(l()(),u.rb(43,0,null,null,1,"h3",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["3.5 Cancelled"])),(l()(),u.rb(45,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" This means that your order has been cancelled by the restaurant, whether requested by you, or, by their discretion. "])),(l()(),u.rb(47,0,null,null,1,"h3",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["3.6 Rejected"])),(l()(),u.rb(49,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" This means that your order has been rejected by the restaurant. This is by the discretion of the restaurant. "])),(l()(),u.rb(51,0,null,null,1,"h3",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["3.7 General contact rules"])),(l()(),u.rb(53,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Please feel free to contact the restaurant or owner by using the details provided, once sufficient time has passed, and no feedback or response has been received regarding the status or collection of an order. Do not contact restaurants or customers for any reasons other than to discuss the progress of incomplete orders. "])),(l()(),u.rb(55,0,null,null,1,"h2",[["style","text-decoration: underline;margin:20px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["4. Support"])),(l()(),u.rb(57,0,null,null,1,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" An official support feature has not been added to the app yet but you can request help via WhatsApp Business (0780796607), or, via email (support@orderbuddy.co.za), or, phone call (0780796607). "]))],null,null)}function v(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,9,"ion-card-content",[],null,null,null,b.N,b.f)),u.qb(1,49152,null,0,a.n,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,7,"div",[],null,null,null,null,null)),(l()(),u.rb(3,0,null,null,1,"h2",[["style","text-decoration: underline;margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,["Your information"])),(l()(),u.rb(5,0,null,null,4,"p",[["style","margin:10px 0 0 0;"]],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" Your full name and verified phone number are required to use the app, whether you\u2019re a restaurant owner, or, a customer. This is to try and ensure that interaction between owners and customers remains non-fraudulent. Customers do not have access to each other\u2019s information. Restaurants only have access to customer\u2019s information when an order has been placed. Email address are optional but not required. Customer email addresses and mobile numbers may be used at a later stage for marketing purposes by Order Buddy restaurant owners, but an option \u201copt out\u201d will be provided. "])),(l()(),u.rb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.rb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.Kb(-1,null,[" User's information (both customer's and owner's) are not given to, or, available to anybody outside of the application. "]))],null,null)}function x(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,10,"ion-header",[],null,null,null,b.V,b.m)),u.qb(1,49152,null,0,a.B,[u.h,u.k,u.x],null,null),(l()(),u.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,b.rb,b.I)),u.qb(3,49152,null,0,a.Cb,[u.h,u.k,u.x],null,null),(l()(),u.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.M,b.d)),u.qb(5,49152,null,0,a.l,[u.h,u.k,u.x],null,null),(l()(),u.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,b.eb,b.w)),u.qb(7,49152,null,0,a.R,[u.h,u.k,u.x],null,null),(l()(),u.rb(8,0,null,0,2,"ion-title",[],null,null,null,b.qb,b.H)),u.qb(9,49152,null,0,a.Ab,[u.h,u.k,u.x],null,null),(l()(),u.Kb(-1,0,["About"])),(l()(),u.rb(11,0,null,null,35,"ion-content",[["class","background"]],null,null,null,b.T,b.k)),u.qb(12,49152,null,0,a.u,[u.h,u.k,u.x],null,null),(l()(),u.rb(13,0,null,0,33,"div",[["style","padding: 0 5px 5px 5px;"]],null,null,null,null,null)),(l()(),u.rb(14,0,null,null,14,"ion-card",[["class","bg-white"]],null,null,null,b.R,b.e)),u.qb(15,49152,null,0,a.m,[u.h,u.k,u.x],null,null),(l()(),u.rb(16,0,null,0,12,"ion-card-header",[],null,null,null,b.O,b.g)),u.qb(17,49152,null,0,a.o,[u.h,u.k,u.x],null,null),(l()(),u.rb(18,0,null,0,2,"ion-card-title",[],null,null,null,b.Q,b.i)),u.qb(19,49152,null,0,a.q,[u.h,u.k,u.x],null,null),(l()(),u.Kb(-1,0,["App Name: Order Buddy"])),(l()(),u.gb(16777216,null,0,1,null,h)),u.qb(22,16384,null,0,c.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,m)),u.qb(24,16384,null,0,c.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,g)),u.qb(26,16384,null,0,c.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,y)),u.qb(28,16384,null,0,c.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(29,0,null,null,8,"ion-card",[["class","bg-white"],["style","margin-top: 10px;"]],null,null,null,b.R,b.e)),u.qb(30,49152,null,0,a.m,[u.h,u.k,u.x],null,null),(l()(),u.rb(31,0,null,0,4,"ion-card-header",[],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.toggleTermsAndConditions()&&u),u}),b.O,b.g)),u.qb(32,49152,null,0,a.o,[u.h,u.k,u.x],null,null),(l()(),u.rb(33,0,null,0,2,"ion-card-title",[],null,null,null,b.Q,b.i)),u.qb(34,49152,null,0,a.q,[u.h,u.k,u.x],null,null),(l()(),u.Kb(-1,0,["Terms And Conditions"])),(l()(),u.gb(16777216,null,0,1,null,f)),u.qb(37,16384,null,0,c.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.rb(38,0,null,null,8,"ion-card",[["class","bg-white"],["style","margin-top: 10px;"]],null,null,null,b.R,b.e)),u.qb(39,49152,null,0,a.m,[u.h,u.k,u.x],null,null),(l()(),u.rb(40,0,null,0,4,"ion-card-header",[],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.togglePrivacyPolicy()&&u),u}),b.O,b.g)),u.qb(41,49152,null,0,a.o,[u.h,u.k,u.x],null,null),(l()(),u.rb(42,0,null,0,2,"ion-card-title",[],null,null,null,b.Q,b.i)),u.qb(43,49152,null,0,a.q,[u.h,u.k,u.x],null,null),(l()(),u.Kb(-1,0,["Privacy Policy"])),(l()(),u.gb(16777216,null,0,1,null,v)),u.qb(46,16384,null,0,c.l,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,22,0,e.versionNumber),l(n,24,0,e.versionCode),l(n,26,0,!e.versionNumber),l(n,28,0,!e.versionCode),l(n,37,0,e.showTermsAndConditions),l(n,46,0,e.showPrivacyPolicy)}),null)}function w(l){return u.Mb(0,[(l()(),u.rb(0,0,null,null,1,"app-about",[],null,null,null,x,p)),u.qb(1,114688,null,0,i,[a.Jb,o],null,null)],(function(l,n){l(n,1,0)}),null)}var k=u.nb("app-about",i,w,{},{},[]),K=e("s7LF"),q=e("iInd");e.d(n,"AboutPageModuleNgFactory",(function(){return A}));var A=u.ob(s,[],(function(l){return u.zb([u.Ab(512,u.j,u.Z,[[8,[d.a,k]],[3,u.j],u.v]),u.Ab(4608,c.n,c.m,[u.s,[2,c.w]]),u.Ab(4608,K.n,K.n,[]),u.Ab(4608,a.b,a.b,[u.x,u.g]),u.Ab(4608,a.Gb,a.Gb,[a.b,u.j,u.p]),u.Ab(4608,a.Kb,a.Kb,[a.b,u.j,u.p]),u.Ab(4608,o,o,[]),u.Ab(1073742336,c.b,c.b,[]),u.Ab(1073742336,K.m,K.m,[]),u.Ab(1073742336,K.e,K.e,[]),u.Ab(1073742336,a.Eb,a.Eb,[]),u.Ab(1073742336,q.p,q.p,[[2,q.u],[2,q.m]]),u.Ab(1073742336,s,s,[]),u.Ab(1024,q.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);