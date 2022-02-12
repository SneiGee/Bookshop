"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[332],{2332:(D,v,c)=>{c.r(v),c.d(v,{CheckoutModule:()=>B});var a=c(6019),i=c(9133),e=c(1514),g=c(4307),p=c(7187),l=c(176);function Z(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"li",4),e.TgZ(1,"button",5),e.NdJ("click",function(){const u=e.CHM(t).index;return e.oxw().onClick(u)}),e._uU(2),e.qZA(),e.qZA()}if(2&o){const t=n.$implicit,r=n.index,s=e.oxw();e.xp6(1),e.ekj("active",s.selectedIndex===r),e.Q6J("disabled",!0),e.xp6(1),e.hij(" ",t.label," ")}}let C=(()=>{class o extends l.B8{ngOnInit(){this.linear=this.linearModeSelected}onClick(t){this.selectedIndex=t}}return o.\u0275fac=function(){let n;return function(r){return(n||(n=e.n5z(o)))(r||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[e._Bn([{provide:l.B8,useExisting:o}]),e.qOj],decls:5,vars:2,consts:[[1,"container"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],[1,"nav-item"],[1,"nav-link","text-uppercase","font-weight-bold","btn-block",2,"padding","1.20em",3,"disabled","click"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"ul",1),e.YNc(2,Z,3,4,"li",2),e.qZA(),e.TgZ(3,"div"),e.GkF(4,3),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",r.steps),e.xp6(2),e.Q6J("ngTemplateOutlet",r.selected.content))},directives:[a.sg,a.tP],styles:["button.nav-link[_ngcontent-%COMP%]{background:#e9ecef;border-radius:0;border:none}button.nav-link[_ngcontent-%COMP%]:focus{outline:none}button.nav-link.active[_ngcontent-%COMP%]:hover{color:#fff}button.nav-link[_ngcontent-%COMP%]:active{outline:none}button.nav-link.active[_ngcontent-%COMP%]:focus{outline:none}button.nav-link.disabled[_ngcontent-%COMP%]:not(.active){color:#333}"]}),o})();var m=c(2387),k=c(4201),d=c(7923);let y=(()=>{class o{constructor(t,r){this.accountService=t,this.toastr=r}ngOnInit(){}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm.get("addressForm").value).subscribe(t=>{this.toastr.success("Address saved successfully"),this.checkoutForm.get("addressForm").reset(t)},t=>{this.toastr.error(t.message),console.log(t)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(g.B),e.Y36(m._W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:26,vars:9,consts:[[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-default","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["routerLink","/basket",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h4"),e._uU(3,"Shipping address"),e.qZA(),e.TgZ(4,"button",2),e.NdJ("click",function(){return r.saveUserAddress()}),e._uU(5," Save as default address "),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"div",4),e._UZ(8,"app-text-input",5),e.qZA(),e.TgZ(9,"div",4),e._UZ(10,"app-text-input",6),e.qZA(),e.TgZ(11,"div",4),e._UZ(12,"app-text-input",7),e.qZA(),e.TgZ(13,"div",4),e._UZ(14,"app-text-input",8),e.qZA(),e.TgZ(15,"div",4),e._UZ(16,"app-text-input",9),e.qZA(),e.TgZ(17,"div",4),e._UZ(18,"app-text-input",10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",11),e.TgZ(20,"button",12),e._UZ(21,"i",13),e._uU(22," Back to basket "),e.qZA(),e.TgZ(23,"button",14),e._uU(24," Go to delivery "),e._UZ(25,"i",15),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",r.checkoutForm),e.xp6(4),e.Q6J("disabled",!r.checkoutForm.get("addressForm").valid||!r.checkoutForm.get("addressForm").dirty),e.xp6(4),e.Q6J("label","First name"),e.xp6(2),e.Q6J("label","Last name"),e.xp6(2),e.Q6J("label","Street"),e.xp6(2),e.Q6J("label","City"),e.xp6(2),e.Q6J("label","State"),e.xp6(2),e.Q6J("label","Zip code"),e.xp6(5),e.Q6J("disabled",r.checkoutForm.get("addressForm").invalid))},directives:[i.JL,i.sg,i.x0,k.t,i.JJ,i.u,d.rH,l.st],styles:[""]}),o})();var T=c(4753),x=c(8260),A=c(4522);let b=(()=>{class o{constructor(t){this.http=t,this.baseApi=x.N.apiUrl}createOrder(t){return this.http.post(this.baseApi+"orders",t)}getDeliveryMethods(){return this.http.get(this.baseApi+"orders/deliveryMethods").pipe((0,T.U)(t=>t.sort((r,s)=>s.price-r.price)))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(A.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function _(o,n){if(1&o){const t=e.EpF();e.TgZ(0,"div",9),e.TgZ(1,"input",10),e.NdJ("click",function(){const u=e.CHM(t).$implicit;return e.oxw().setShippingPrice(u)}),e.qZA(),e.TgZ(2,"label",11),e.TgZ(3,"strong"),e._uU(4),e.ALo(5,"currency"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"span",12),e._uU(8),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=n.$implicit;e.xp6(1),e.s9C("id",t.id),e.s9C("value",t.id),e.xp6(1),e.s9C("for",t.id),e.xp6(2),e.AsE("",t.shortName," - ",e.lcZ(5,6,t.price),""),e.xp6(4),e.Oqu(t.description)}}let F=(()=>{class o{constructor(t,r){this.checkoutService=t,this.basketService=r,this.checkoutService.getDeliveryMethods().subscribe(s=>{this.deliveryMethods=s},s=>{console.log(s)})}ngOnInit(){}setShippingPrice(t){this.basketService.setShippingPrice(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b),e.Y36(p.v))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:12,vars:3,consts:[[1,"mt-4",3,"formGroup"],[1,"mb-3"],["formGroupName","deliveryForm",1,"row","ml-5"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn","btn-primary",3,"disabled"],[1,"fa","fa-angle-right"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"custom-control-input",3,"id","value","click"],[1,"custom-control-label","ml-2",3,"for"],[1,"label-description"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h5",1),e._uU(2,"Choose your delivery method"),e.qZA(),e.TgZ(3,"div",2),e.YNc(4,_,9,8,"div",3),e.qZA(),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"button",5),e._UZ(7,"i",6),e._uU(8," Back to address "),e.qZA(),e.TgZ(9,"button",7),e._uU(10," Go to review "),e._UZ(11,"i",8),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",r.checkoutForm),e.xp6(4),e.Q6J("ngForOf",r.deliveryMethods),e.xp6(5),e.Q6J("disabled",r.checkoutForm.get("deliveryForm").invalid))},directives:[i.JL,i.sg,i.x0,a.sg,l.po,l.st,i._,i.Fj,i.JJ,i.u],pipes:[a.H9],styles:[""]}),o})();var S=c(8383);let q=(()=>{class o{constructor(t,r){this.basketService=t,this.toastr=r}ngOnInit(){this.basket$=this.basketService.basket$}createPaymentIntent(){return this.basketService.createPaymentIntent().subscribe(t=>{this.appStepper.next()},t=>{console.log(t)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.v),e.Y36(m._W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-review"]],inputs:{appStepper:"appStepper"},decls:10,vars:4,consts:[[1,"mt-4"],[3,"isBasket","items"],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"click"],[1,"fa","fa-angle-right"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-basket-summary",1),e.ALo(2,"async"),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"button",3),e._UZ(5,"i",4),e._uU(6," Back to Delivery "),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return r.createPaymentIntent()}),e._uU(8," Go to Payment "),e._UZ(9,"i",6),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("isBasket",!1)("items",e.lcZ(2,2,r.basket$).items))},directives:[S.b,l.po],pipes:[a.Ov],styles:[""]}),o})();var h=c(8239);const U=["cardNumber"],J=["cardExpiry"],N=["cardCvc"];function O(o,n){if(1&o&&(e.ynx(0),e.TgZ(1,"span",17),e._uU(2),e.qZA(),e.BQk()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.cardErrors)}}function M(o,n){1&o&&e._UZ(0,"i",18)}let I=(()=>{class o{constructor(t,r,s,u){this.basketService=t,this.checkoutService=r,this.toastr=s,this.router=u,this.cardHandler=this.onChange.bind(this),this.loading=!1,this.cardNumberValid=!1,this.cardExpiryValid=!1,this.cardCvcValid=!1}ngAfterViewInit(){this.stripe=Stripe("pk_test_51JakjUDOaIufJqGM7Hl5z3fotMkdupaiO3r6ZbfcKAiqcL7R3T9kVYK8boEI1auCVSKQUs07E1eqOZKzFmYFbrVn00UVhP4eyD");const t=this.stripe.elements();this.cardNumber=t.create("cardNumber"),this.cardNumber.mount(this.cardNumberElement.nativeElement),this.cardNumber.addEventListener("change",this.cardHandler),this.cardExpiry=t.create("cardExpiry"),this.cardExpiry.mount(this.cardExpiryElement.nativeElement),this.cardExpiry.addEventListener("change",this.cardHandler),this.cardCvc=t.create("cardCvc"),this.cardCvc.mount(this.cardCvcElement.nativeElement),this.cardCvc.addEventListener("change",this.cardHandler)}ngOnDestroy(){this.cardNumber.destroy(),this.cardExpiry.destroy(),this.cardCvc.destroy()}onChange(t){switch(this.cardErrors=t.error?t.error.message:null,t.elementType){case"cardNumber":this.cardNumberValid=t.complete;break;case"cardExpiry":this.cardExpiryValid=t.complete;break;case"cardCvc":this.cardCvcValid=t.complete}}submitOrder(){var t=this;return(0,h.Z)(function*(){t.loading=!0;const r=t.basketService.getCurrentBasketValue();try{const s=yield t.createOrder(r),u=yield t.confirmPaymentWithStripe(r);u.paymentIntent?(t.basketService.deleteLocalBasket(r.id),t.router.navigate(["checkout/success"],{state:s})):t.toastr.error(u.error.message),t.loading=!1}catch(s){console.log(s),t.loading=!1}})()}confirmPaymentWithStripe(t){var r=this;return(0,h.Z)(function*(){return r.stripe.confirmCardPayment(t.clientSecret,{payment_method:{card:r.cardNumber,billing_details:{name:r.checkoutForm.get("paymentForm").get("nameOnCard").value}}})})()}createOrder(t){var r=this;return(0,h.Z)(function*(){const s=r.getOrderToCreate(t);return r.checkoutService.createOrder(s).toPromise()})()}getOrderToCreate(t){return{basketId:t.id,deliveryMethodId:+this.checkoutForm.get("deliveryForm").get("deliveryMethod").value,shipToAddress:this.checkoutForm.get("addressForm").value}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.v),e.Y36(b),e.Y36(m._W),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-payment"]],viewQuery:function(t,r){if(1&t&&(e.Gf(U,7),e.Gf(J,7),e.Gf(N,7)),2&t){let s;e.iGM(s=e.CRH())&&(r.cardNumberElement=s.first),e.iGM(s=e.CRH())&&(r.cardExpiryElement=s.first),e.iGM(s=e.CRH())&&(r.cardCvcElement=s.first)}},inputs:{checkoutForm:"checkoutForm"},decls:22,vars:5,consts:[[1,"mt-4",3,"formGroup"],[1,"row"],["formGroupName","paymentForm",1,"form-group","col-12"],["formControlName","nameOnCard",3,"label"],[1,"form-group","col-6"],[1,"form-control","py-3"],["cardNumber",""],[4,"ngIf"],[1,"form-group","col-3"],["cardExpiry",""],["cardCvc",""],[1,"float-none","d-flex","justify-content-between","flex-column","flex-lg-row","mb-5"],["cdkStepperPrevious","",1,"btn","btn-outline-primary"],[1,"fa","fa-angle-left"],[1,"btn","btn-primary",3,"disabled","click"],[1,"fa","fa-angle-right"],["class","fa fa-spinner fa-spin",4,"ngIf"],[1,"text-danger"],[1,"fa","fa-spinner","fa-spin"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"app-text-input",3),e.qZA(),e.TgZ(4,"div",4),e._UZ(5,"div",5,6),e.YNc(7,O,3,1,"ng-container",7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"div",5,9),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"div",5,10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(14,"div",11),e.TgZ(15,"button",12),e._UZ(16,"i",13),e._uU(17," Back to Review "),e.qZA(),e.TgZ(18,"button",14),e.NdJ("click",function(){return r.submitOrder()}),e._uU(19," Submit order "),e._UZ(20,"i",15),e.YNc(21,M,1,0,"i",16),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",r.checkoutForm),e.xp6(3),e.Q6J("label","Name on card"),e.xp6(4),e.Q6J("ngIf",r.cardErrors),e.xp6(11),e.Q6J("disabled",r.loading||r.checkoutForm.get("paymentForm").invalid||!r.cardNumberValid||!r.cardExpiryValid||!r.cardCvcValid),e.xp6(3),e.Q6J("ngIf",r.loading))},directives:[i.JL,i.sg,i.x0,k.t,i.JJ,i.u,a.O5,l.po],styles:[""]}),o})();var Q=c(9868);function E(o,n){if(1&o&&(e._UZ(0,"app-order-totals",10),e.ALo(1,"async"),e.ALo(2,"async"),e.ALo(3,"async")),2&o){const t=e.oxw();e.Q6J("shippingPrice",e.lcZ(1,3,t.basketTotals$).shipping)("subtotal",e.lcZ(2,5,t.basketTotals$).subtotal)("total",e.lcZ(3,7,t.basketTotals$).total)}}function w(o,n){if(1&o&&(e.TgZ(0,"button",5),e._uU(1,"View your order"),e.qZA()),2&o){const t=e.oxw();e.MGl("routerLink","/orders/",null==t.order?null:t.order.id,"")}}function Y(o,n){1&o&&(e.TgZ(0,"button",6),e._uU(1,"View your orders"),e.qZA())}const V=[{path:"",component:(()=>{class o{constructor(t,r,s){this.fb=t,this.accountService=r,this.basketService=s}ngOnInit(){this.createCheckoutForm(),this.getAddressFormValues(),this.getDeliveryMethodValue(),this.basketTotals$=this.basketService.basketTotal$}createCheckoutForm(){this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:[null,i.kI.required],lastName:[null,i.kI.required],street:[null,i.kI.required],city:[null,i.kI.required],state:[null,i.kI.required],zipCode:[null,i.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:[null,i.kI.required]}),paymentForm:this.fb.group({nameOnCard:[null,i.kI.required]})})}getAddressFormValues(){this.accountService.getUserAddress().subscribe(t=>{t&&this.checkoutForm.get("addressForm").patchValue(t)},t=>{console.log(t)})}getDeliveryMethodValue(){const t=this.basketService.getCurrentBasketValue();null!==t.deliveryMethodId&&this.checkoutForm.get("deliveryForm").get("deliveryMethod").patchValue(t.deliveryMethodId.toString())}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(i.qu),e.Y36(g.B),e.Y36(p.v))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout"]],decls:16,vars:12,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-8"],[3,"linearModeSelected"],["appStepper",""],[3,"label"],[3,"checkoutForm"],[3,"appStepper"],[1,"col-4"],[3,"shippingPrice","subtotal","total",4,"ngIf"],[3,"shippingPrice","subtotal","total"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"app-stepper",3,4),e.TgZ(5,"cdk-step",5),e._UZ(6,"app-checkout-address",6),e.qZA(),e.TgZ(7,"cdk-step",5),e._UZ(8,"app-checkout-delivery",6),e.qZA(),e.TgZ(9,"cdk-step",5),e._UZ(10,"app-checkout-review",7),e.qZA(),e.TgZ(11,"cdk-step",5),e._UZ(12,"app-checkout-payment",6),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",8),e.YNc(14,E,4,9,"app-order-totals",9),e.ALo(15,"async"),e.qZA(),e.qZA(),e.qZA()),2&t){const s=e.MAs(4);e.xp6(3),e.Q6J("linearModeSelected",!0),e.xp6(2),e.Q6J("label","Address"),e.xp6(1),e.Q6J("checkoutForm",r.checkoutForm),e.xp6(1),e.Q6J("label","Delivery"),e.xp6(1),e.Q6J("checkoutForm",r.checkoutForm),e.xp6(1),e.Q6J("label","Review"),e.xp6(1),e.Q6J("appStepper",s),e.xp6(1),e.Q6J("label","Payment"),e.xp6(1),e.Q6J("checkoutForm",r.checkoutForm),e.xp6(2),e.Q6J("ngIf",e.lcZ(15,10,r.basketTotals$))}},directives:[C,l.be,y,F,q,I,a.O5,Q.S],pipes:[a.Ov],styles:[""]}),o})()},{path:"success",component:(()=>{class o{constructor(t){this.router=t;const r=this.router.getCurrentNavigation(),s=r.extras&&r.extras.state;s&&(this.order=s)}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-success"]],decls:11,vars:2,consts:[[1,"container","mt-5"],[1,"fa","fa-check-circle","fa-5x",2,"color","green"],[1,"mb-4"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/orders","class","btn btn-outline-success",4,"ngIf"],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/orders",1,"btn","btn-outline-success"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e._UZ(2,"i",1),e.qZA(),e.TgZ(3,"h2"),e._uU(4,"Thank you. Your order is confirmed"),e.qZA(),e.TgZ(5,"p",2),e._uU(6,"Your order has not shipped yet, but this is to be expected as we are not a real store"),e.qZA(),e.YNc(7,w,2,1,"button",3),e.YNc(8,Y,2,0,"button",4),e._UZ(9,"br"),e._UZ(10,"br"),e.qZA()),2&t&&(e.xp6(7),e.Q6J("ngIf",r.order),e.xp6(1),e.Q6J("ngIf",!r.order))},directives:[a.O5,d.rH],styles:[""]}),o})()}];let G=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.Bz.forChild(V)],d.Bz]}),o})();var L=c(1884);let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[a.ez,G,L.m]]}),o})()}}]);