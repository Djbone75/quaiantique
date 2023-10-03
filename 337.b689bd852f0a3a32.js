"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[337],{6337:(B,p,a)=>{a.r(p),a.d(p,{RegisterModule:()=>N,routes:()=>v});var m=a(6814),y=a(553),r=a(5879),b=a(5438),l=a(2296),g=a(5195),u=a(2032),_=a(9157),n=a(6223),f=a(3680),d=a(2495);const k=["determinateSpinner"];function x(e,s){if(1&e&&(r.O4$(),r.TgZ(0,"svg",11),r._UZ(1,"circle",12),r.qZA()),2&e){const c=r.oxw();r.uIk("viewBox",c._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",c._strokeCircumference(),"px")("stroke-dashoffset",c._strokeCircumference()/2,"px")("stroke-width",c._circleStrokeWidth(),"%"),r.uIk("r",c._circleRadius())}}const w=(0,f.pj)(class{constructor(e){this._elementRef=e}},"primary"),T=new r.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function M(){return{diameter:h}}}),h=100;let C=(()=>{var e;class s extends w{constructor(i,t,o){super(i),this.mode="mat-spinner"===this._elementRef.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",this._value=0,this._diameter=h,this._noopAnimations="NoopAnimations"===t&&!!o&&!o._forceAnimations,o&&(o.color&&(this.color=this.defaultColor=o.color),o.diameter&&(this.diameter=o.diameter),o.strokeWidth&&(this.strokeWidth=o.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,(0,d.su)(i)))}get diameter(){return this._diameter}set diameter(i){this._diameter=(0,d.su)(i)}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(i){this._strokeWidth=(0,d.su)(i)}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const i=2*this._circleRadius()+this.strokeWidth;return`0 0 ${i} ${i}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}}return(e=s).\u0275fac=function(i){return new(i||e)(r.Y36(r.SBq),r.Y36(r.QbO,8),r.Y36(T))},e.\u0275cmp=r.Xpm({type:e,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,t){if(1&i&&r.Gf(k,5),2&i){let o;r.iGM(o=r.CRH())&&(t._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:16,hostBindings:function(i,t){2&i&&(r.uIk("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),r.Udp("width",t.diameter,"px")("height",t.diameter,"px")("--mdc-circular-progress-size",t.diameter+"px")("--mdc-circular-progress-active-indicator-width",t.diameter+"px"),r.ekj("_mat-animation-noopable",t._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===t.mode))},inputs:{color:"color",mode:"mode",value:"value",diameter:"diameter",strokeWidth:"strokeWidth"},exportAs:["matProgressSpinner"],features:[r.qOj],decls:14,vars:11,consts:[["circle",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["determinateSpinner",""],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,t){if(1&i&&(r.YNc(0,x,2,8,"ng-template",null,0,r.W1O),r.TgZ(2,"div",1,2),r.O4$(),r.TgZ(4,"svg",3),r._UZ(5,"circle",4),r.qZA()(),r.kcU(),r.TgZ(6,"div",5)(7,"div",6)(8,"div",7),r.GkF(9,8),r.qZA(),r.TgZ(10,"div",9),r.GkF(11,8),r.qZA(),r.TgZ(12,"div",10),r.GkF(13,8),r.qZA()()()),2&i){const o=r.MAs(1);r.xp6(4),r.uIk("viewBox",t._viewBox()),r.xp6(1),r.Udp("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeDashOffset(),"px")("stroke-width",t._circleStrokeWidth(),"%"),r.uIk("r",t._circleRadius()),r.xp6(4),r.Q6J("ngTemplateOutlet",o),r.xp6(2),r.Q6J("ngTemplateOutlet",o),r.xp6(2),r.Q6J("ngTemplateOutlet",o)}},dependencies:[m.tP],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{--mdc-circular-progress-active-indicator-width:4px;--mdc-circular-progress-size:48px}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0}),s})(),A=(()=>{var e;class s{}return(e=s).\u0275fac=function(i){return new(i||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[m.ez,f.BQ]}),s})();function Z(e,s){1&e&&r._UZ(0,"mat-spinner")}function R(e,s){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Please enter a valid email."),r.qZA())}function O(e,s){1&e&&(r.TgZ(0,"mat-error"),r._uU(1,"Please enter a valid password."),r.qZA())}function I(e,s){if(1&e&&(r.TgZ(0,"button",10),r._uU(1," Signup "),r.qZA()),2&e){r.oxw();const c=r.MAs(1);r.Q6J("disabled",!c.valid)}}function P(e,s){if(1&e){const c=r.EpF();r.TgZ(0,"form",2,3),r.NdJ("ngSubmit",function(){r.CHM(c);const t=r.MAs(1),o=r.oxw();return r.KtG(o.onSignup(t))}),r.TgZ(2,"mat-form-field"),r._UZ(3,"input",4,5),r.YNc(5,R,2,0,"mat-error",0),r.qZA(),r.TgZ(6,"mat-form-field"),r._UZ(7,"input",6,7),r.YNc(9,O,2,0,"mat-error",0),r.qZA(),r.TgZ(10,"div",8),r.YNc(11,I,2,1,"button",9),r.qZA()()}if(2&e){const c=r.MAs(4),i=r.MAs(8),t=r.oxw();r.xp6(5),r.Q6J("ngIf",c.invalid&&c.touched),r.xp6(4),r.Q6J("ngIf",i.invalid&&i.touched),r.xp6(2),r.Q6J("ngIf",!t.isLoading)}}let z=(()=>{var e;class s{constructor(i){this.authService=i,this.environment=y.N,this.isLoading=!1}onSignup(i){if(i.invalid)return;this.isLoading=!0;const{email:t,password:o}=i.value;this.authService.createUser(t,o)}}return(e=s).\u0275fac=function(i){return new(i||e)(r.Y36(b.e))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-register"]],decls:5,vars:2,consts:[[4,"ngIf"],[3,"ngSubmit",4,"ngIf"],[3,"ngSubmit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-Mail","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],[1,"button--centered"],["mat-raised-button","","color","accent","type","submit",3,"disabled",4,"ngIf"],["mat-raised-button","","color","accent","type","submit",3,"disabled"]],template:function(i,t){1&i&&(r.TgZ(0,"mat-card")(1,"p"),r._uU(2,"Enregistrement"),r.qZA(),r.YNc(3,Z,1,0,"mat-spinner",0),r.YNc(4,P,12,3,"form",1),r.qZA()),2&i&&(r.xp6(3),r.Q6J("ngIf",t.isLoading),r.xp6(1),r.Q6J("ngIf",!t.isLoading))},dependencies:[m.O5,l.lW,g.a8,u.Nt,_.KE,_.TO,n._Y,n.Fj,n.JJ,n.JL,n.Q7,n.on,n.On,n.F,C],styles:["mat-card[_ngcontent-%COMP%]{display:block;width:80%;margin:auto;margin:2rem auto;padding:1.5rem 0px}mat-form-field[_ngcontent-%COMP%]{display:block;margin:auto;width:100%;min-width:150px;max-width:500px}mat-spinner[_ngcontent-%COMP%]{margin:auto}.button--centered[_ngcontent-%COMP%]{display:block;margin:auto;width:100%;min-width:150px;max-width:500px;text-align:end}"]}),s})();var W=a(1896);const v=[{path:"",component:z}];let N=(()=>{var e;class s{}return(e=s).\u0275fac=function(i){return new(i||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[m.ez,W.Bz.forChild(v),l.ot,g.QW,u.c,n.u5,A]}),s})()}}]);