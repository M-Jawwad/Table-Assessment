(self.webpackChunktest_assignment=self.webpackChunktest_assignment||[]).push([[528],{528:(t,e,n)=>{"use strict";n.r(e),n.d(e,{UserModule:()=>U});var a=n(1116),o=n(5366),r=n(7112),i=n(2797),s=n(7340),l=n(4369);function c(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div"),o.TgZ(1,"button",12),o.NdJ("click",function(){return o.CHM(t),o.oxw().onEdit()}),o._uU(2," Edit "),o.qZA(),o.qZA()}}function d(t,e){1&t&&(o.TgZ(0,"th",13),o._uU(1," Name "),o.qZA())}function u(t,e){if(1&t&&(o.TgZ(0,"td",14),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.name," ")}}function m(t,e){1&t&&(o.TgZ(0,"th",13),o._uU(1," Designation "),o.qZA())}function g(t,e){if(1&t&&(o.TgZ(0,"td",14),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" ",t.dg," ")}}function p(t,e){1&t&&(o.TgZ(0,"th",13),o._uU(1," Phone "),o.qZA())}function h(t,e){if(1&t&&(o.TgZ(0,"td",14),o._uU(1),o.qZA()),2&t){const t=e.$implicit;o.xp6(1),o.hij(" 0",t.phone," ")}}function f(t,e){1&t&&o._UZ(0,"tr",15)}function Z(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"tr",16),o.NdJ("click",function(){const e=o.CHM(t).$implicit;return o.oxw().onRowClick(e)}),o.qZA()}if(2&t){const t=e.$implicit,n=e.odd,a=o.oxw();o.ekj("odd-row",n)("selected-row",a.selectedRow===t)}}let w=(()=>{class t{constructor(){this.displayedColumns=["name","dg","phone"],this.dataSource=[],this.data=[],this.selectedRow=null,this.signal=new o.vpe}ngOnChanges(t){this.dataSource=t.data.currentValue,null!=this.selectedRow&&(this.selectedRow=null)}onRowClick(t){this.selectedRow=this.selectedRow===t?null:t}onEdit(){this.signal.emit({type:"onEdit",data:this.selectedRow,length:this.data.length})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-user-list"]],inputs:{dataSource:"dataSource",data:"data"},outputs:{signal:"signal"},features:[o.TTD],decls:18,vars:4,consts:[[1,"user"],[1,"header"],[4,"ngIf"],["mat-table","",1,"table",3,"dataSource"],["table",""],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","dg"],["matColumnDef","phone"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","data-row",3,"odd-row","selected-row","click",4,"matRowDef","matRowDefColumns"],["mat-raised-button","","color","primary",1,"btn",3,"click"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",1,"data-row",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h2"),o._uU(3,"Users"),o.qZA(),o.YNc(4,c,3,0,"div",2),o.qZA(),o.TgZ(5,"table",3,4),o.ynx(7,5),o.YNc(8,d,2,0,"th",6),o.YNc(9,u,2,1,"td",7),o.BQk(),o.ynx(10,8),o.YNc(11,m,2,0,"th",6),o.YNc(12,g,2,1,"td",7),o.BQk(),o.ynx(13,9),o.YNc(14,p,2,0,"th",6),o.YNc(15,h,2,1,"td",7),o.BQk(),o.YNc(16,f,1,0,"tr",10),o.YNc(17,Z,1,4,"tr",11),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.Q6J("ngIf",e.selectedRow),o.xp6(1),o.Q6J("dataSource",e.dataSource),o.xp6(11),o.Q6J("matHeaderRowDef",e.displayedColumns),o.xp6(1),o.Q6J("matRowDefColumns",e.displayedColumns))},directives:[a.O5,s.BZ,s.w1,s.fO,s.Dz,s.as,s.nj,l.lW,s.ge,s.ev,s.XQ,s.Gk],styles:[".user[_ngcontent-%COMP%]{flex-wrap:wrap}.user[_ngcontent-%COMP%], .user[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{display:flex;flex-direction:row;width:100%}.user[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{height:40px;align-items:center;justify-content:space-between;margin:0 0 16px}.user[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.user[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{width:100%}.user[_ngcontent-%COMP%]   .data-row[_ngcontent-%COMP%]{cursor:pointer}.user[_ngcontent-%COMP%]   .odd-row[_ngcontent-%COMP%]{background:#d4d4d4}.user[_ngcontent-%COMP%]   .selected-row[_ngcontent-%COMP%]{background:#c2c2c2}"]}),t})();var _=n(1041),x=n(3070),C=n(9550);function q(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," User name is required. "),o.qZA())}function T(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1," Designation is required. "),o.qZA())}function A(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Phone must be of atleast 11 digits."),o.qZA())}function O(t,e){1&t&&(o.TgZ(0,"mat-error"),o._uU(1,"Phone must be of less than 12 digits."),o.qZA())}let v=(()=>{class t{constructor(){this.data=null,this.userForm=new _.cw({id:new _.NI(null),name:new _.NI(null,[_.kI.required]),dg:new _.NI(null,[_.kI.required]),phone:new _.NI(null,[_.kI.minLength(11),_.kI.maxLength(12)])}),this.signal=new o.vpe}ngOnChanges(t){var e;(null===(e=t.userData)||void 0===e?void 0:e.currentValue)&&this.userForm.patchValue(t.userData.currentValue)}onSave(){const t=this.userForm.value,e=null!=t.id?"onEdit":"onAdd";t.id="onAdd"===e?this.data.length+1:t.id,this.signal.emit({type:e,data:t}),this.userForm.reset()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-user-form"]],inputs:{userData:"userData",data:"data"},outputs:{signal:"signal"},features:[o.TTD],decls:24,vars:8,consts:[[1,"form"],[1,"form-header"],[1,"form-content",3,"formGroup"],["appearance","outline",1,"w-100-p"],["type","text","matInput","","required","","placeholder","Enter user name","formControlName","name","autocomplete","off"],[4,"ngIf"],["type","text","matInput","","required","","placeholder","Enter user designation","formControlName","dg","autocomplete","off"],["type","tel","matInput","","placeholder","Enter user phone","formControlName","phone","autocomplete","off"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"h2"),o._uU(3),o.qZA(),o.qZA(),o.TgZ(4,"div",2),o.TgZ(5,"mat-form-field",3),o.TgZ(6,"mat-label"),o._uU(7,"Name"),o.qZA(),o._UZ(8,"input",4),o.YNc(9,q,2,0,"mat-error",5),o.qZA(),o.TgZ(10,"mat-form-field",3),o.TgZ(11,"mat-label"),o._uU(12,"Designation"),o.qZA(),o._UZ(13,"input",6),o.YNc(14,T,2,0,"mat-error",5),o.qZA(),o.TgZ(15,"mat-form-field",3),o.TgZ(16,"mat-label"),o._uU(17,"Phone"),o.qZA(),o._UZ(18,"input",7),o.YNc(19,A,2,0,"mat-error",5),o.YNc(20,O,2,0,"mat-error",5),o.qZA(),o.qZA(),o.TgZ(21,"div"),o.TgZ(22,"button",8),o.NdJ("click",function(){return e.onSave()}),o._uU(23),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(3),o.Oqu(null!=e.userData?"Edit User":"Add User"),o.xp6(1),o.Q6J("formGroup",e.userForm),o.xp6(5),o.Q6J("ngIf",e.userForm.controls.name.hasError("required")&&e.userForm.controls.name.touched),o.xp6(5),o.Q6J("ngIf",e.userForm.controls.dg.hasError("required")&&e.userForm.controls.dg.touched),o.xp6(5),o.Q6J("ngIf",e.userForm.controls.phone.hasError("minlength")&&e.userForm.controls.phone.touched),o.xp6(1),o.Q6J("ngIf",e.userForm.controls.phone.hasError("maxlength")&&e.userForm.controls.phone.touched),o.xp6(2),o.Q6J("disabled",!e.userForm.valid),o.xp6(1),o.Oqu(null!=e.userData?"Update":"Add"))},directives:[_.JL,_.sg,x.KE,x.hX,C.Nt,_.Fj,_.Q7,_.JJ,_.u,a.O5,l.lW,x.TO],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-start;justify-content:flex-end}.form[_ngcontent-%COMP%]   .form-header[_ngcontent-%COMP%]{width:100%;height:40px}.form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-end;justify-content:flex-start}.form[_ngcontent-%COMP%]   .form-content[_ngcontent-%COMP%]   .w-100-p[_ngcontent-%COMP%]{width:100%}"]}),t})(),M=(()=>{class t{constructor(){this.data=[{id:1,name:"M. Jawad",dg:"Angular Developer",phone:3418216828},{id:2,name:"Kashif Raza",dg:"Devops Engineer",phone:3011234567}],this.formData=null}onFormSignal(t){if("onEdit"===t.type){const e=this.data.findIndex(e=>e.id===t.data.id);this.data.splice(e,1,t.data),this.data=JSON.parse(JSON.stringify(this.data))}else this.data=[...this.data,t.data]}onTableSignal(t){"onEdit"===t.type&&(this.formData=t.data)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-user"]],decls:9,vars:3,consts:[["color","primary",1,"toolbar","mat-elevation-z4"],[1,"toolbar","content"],[1,"mat-elevation-z6","list"],[3,"data","signal"],[1,"mat-elevation-z6","form"],[3,"userData","data","signal"]],template:function(t,e){1&t&&(o.TgZ(0,"div"),o.TgZ(1,"mat-toolbar",0),o.TgZ(2,"h1"),o._uU(3,"User Managment"),o.qZA(),o.qZA(),o.TgZ(4,"div",1),o.TgZ(5,"mat-card",2),o.TgZ(6,"app-user-list",3),o.NdJ("signal",function(t){return e.onTableSignal(t)}),o.qZA(),o.qZA(),o.TgZ(7,"mat-card",4),o.TgZ(8,"app-user-form",5),o.NdJ("signal",function(t){return e.onFormSignal(t)}),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(6),o.Q6J("data",e.data),o.xp6(2),o.Q6J("userData",e.formData)("data",e.data))},directives:[r.Ye,i.a8,w,v],styles:["[_nghost-%COMP%]{height:100vh}.toolbar[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;justify-content:center}.content[_ngcontent-%COMP%]{align-items:flex-start;margin-top:8px;height:calc(100vh - 80px)}.content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{width:70%;margin:0 8px;height:calc(100vh - 112px)}.content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{flex:1;margin-right:8px;height:calc(100vh - 112px)}"]}),t})();var P=n(3337),y=n(6110);const N=[{path:"",redirectTo:"list"},{path:"list",component:M},{path:"add:/id",component:v}];let U=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.ez,_.UX,P.Bz.forChild(N),y.q]]}),t})()}}]);