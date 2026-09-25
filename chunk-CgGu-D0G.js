import{A as GE,C as FD,Dn as eh,Dr as vi,E as Fp,En as eg,Er as vE,Fr as xI,Gn as jh,I as Hp,Jt as XE,L as Hv,Mt as Uo,N as Ha,Ot as Tu,P as Hc,Pr as wu,Qn as le,Rt as Vp,Sn as d0,Wr as zE,Wt as Wp,Xt as Xp,Y as Kl,_n as c0,an as _D,c as Be$1,cn as aD,dr as qE,g as EE,gn as br,jr as w,kt as UE,or as oe,qn as jp,rt as NI,s as Bc,t as $c,vr as sh,vt as S,wt as Tf,yt as Se}from"./chunk-CO2ZArI-.js";import{C as Ku,G as Xw,J as Yw,S as Ke,g as Hn,lt as lc,m as Gh}from"./chunk-DP8KhUu3.js";import"./chunk-C2NGbtLs.js";import{r as U,t as Gt,u as ze$1}from"./chunk-CxOtwg3x.js";import"./chunk-Ek1ttimT.js";import{a as Jt,h as qt,l as Vn,n as Dn,o as Le$1,r as En,s as Mn,t as An}from"./chunk-Bsl4F-h5.js";import{c as Si,l as j,t as G,u as vi$1}from"./main-YNUOIIXP.js";import{t as w$1}from"./chunk-BHKEx5Ma.js";import{n as yt,t as wt}from"./chunk-vfM1W1OJ.js";import{n as Z,t as J}from"./chunk-CLNZvQn1.js";import{t as y}from"./chunk-DZoYubB6.js";import{t as ht}from"./chunk-ftv-hSqI.js";import{n as Pe,t as Be$2}from"./chunk-LqYGVnaH.js";import{t as u}from"./chunk-BfN0aDP5.js";function we(n,t){n&1&&Hp(0,`div`,2)}var Be=new S(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var Ae=(()=>{class n{_elementRef=w(br);_ngZone=w(Se);_changeDetectorRef=w(c0);_renderer=w(Ha);_cleanupTransitionEnd;constructor(){let e=Gh(),r=w(Be,{optional:!0});this._isNoopAnimation=e===`di-disabled`,e===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),r&&(r.color&&(this.color=this._defaultColor=r.color),this.mode=r.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;get value(){return this._value}set value(e){this._value=Te(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=Te(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Be$1;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(r){return new(r||n)};static ɵcmp=vE({type:n,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(r,s){r&2&&(Fp(`aria-valuenow`,s._isIndeterminate()?null:s.value)(`mode`,s.mode),_D(`mat-`+s.color),eh(`_mat-animation-noopable`,s._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!s._isNoopAnimation)(`mdc-linear-progress--indeterminate`,s._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,d0],bufferValue:[2,`bufferValue`,`bufferValue`,d0],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(r,s){r&1&&(Bc(0,`div`,0),Hp(1,`div`,1),UE(2,we,1,0,`div`,2),$c(),Bc(3,`div`,3),Hp(4,`span`,4),$c(),Bc(5,`div`,5),Hp(6,`span`,4),$c()),r&2&&(Hv(),Xp(`flex-basis`,s._getBufferBarFlexBasis()),Hv(),qE(s.mode===`buffer`?2:-1),Hv(),Xp(`transform`,s._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})}return n})();function Te(n,t=0,e=100){return Math.max(t,Math.min(e,n))}var Ie=(()=>{class n{static ɵfac=function(r){return new(r||n)};static ɵmod=EE({type:n});static ɵinj=Kl({imports:[Ke]})}return n})();var v=class n{supabase=w(Ku);http=w(lc);async triggerExport(t,e,r,s,x){return{jobId:(await eg(this.http.post(`${Hn.supabaseUrl}/functions/v1/export-actuarial-data`,{company_id:t,date_from:e,date_to:r,calculation_type_ids:s,format:x},{headers:this.supabase.functionHeaders()}))).job_id}}async getExportStatus(t){let e=await eg(this.http.post(`${Hn.supabaseUrl}/functions/v1/export-status`,{job_id:t},{headers:this.supabase.functionHeaders()}));return{status:e.status,fileUrl:e.signed_url??null,errorMessage:e.error_message??null}}static ɵfac=function(e){return new(e||n)};static ɵprov=oe({token:n,factory:n.ɵfac,providedIn:`root`})};var Re=(n,t)=>t.id;function Oe(n,t){n&1&&Vp(0,`mat-spinner`,2)}function Xe(n,t){if(n&1&&(vi(0,`mat-option`,6),FD(1),Hc()),n&2){let e=t.$implicit;jp(`value`,e.id),Hv(),sh(e.name)}}function Ve(n,t){if(n&1&&(vi(0,`mat-option`,6),FD(1),Hc()),n&2){let e=t.$implicit;jp(`value`,e.id),Hv(),sh(e.name)}}function ze(n,t){n&1&&(vi(0,`p`,14)(1,`mat-icon`),FD(2,`info`),Hc(),FD(3,` טווח התאריכים שנבחר גדול — מומלץ לייצא כ-CSV (מהיר יותר לנפחי נתונים גדולים) במקום Excel `),Hc())}function je(n,t){n&1&&Vp(0,`mat-spinner`,16)}function Ue(n,t){n&1&&(vi(0,`span`),FD(1,`ייצוא`),Hc())}function Le(n,t){n&1&&(vi(0,`p`),FD(1,`הקובץ נוצר…`),Hc(),Vp(2,`mat-progress-bar`,20))}function Ge(n,t){n&1&&(vi(0,`a`,18)(1,`mat-icon`),FD(2,`download`),Hc(),FD(3,` הורדת הקובץ `),Hc()),n&2&&jp(`href`,t,Tf)}function $e(n,t){n&1&&(vi(0,`p`,19),FD(1,`הייצוא נכשל`),Hc())}function He(n,t){if(n&1&&(vi(0,`section`,17),UE(1,Le,3,0)(2,Ge,4,1,`a`,18)(3,$e,2,0,`p`,19),Hc()),n&2){let e,r=t,s=aD(2);Hv(),qE(r===`pending`||r===`processing`?1:(e=r===`completed`&&s.fileUrl())?2:r===`failed`?3:-1,e)}}function Je(n,t){if(n&1){let e=XE();vi(0,`form`,3),Wp(`ngSubmit`,function(){wu(e);return Tu(aD().submit())}),vi(1,`mat-form-field`,4)(2,`mat-label`),FD(3,`חברה`),Hc(),vi(4,`mat-select`,5),GE(5,Xe,2,2,`mat-option`,6,Re),Hc(),NI(),Hc(),vi(7,`div`,7)(8,`mat-form-field`,4)(9,`mat-label`),FD(10,`מתאריך`),Hc(),Vp(11,`input`,8),NI(),Hc(),vi(12,`mat-form-field`,4)(13,`mat-label`),FD(14,`עד תאריך`),Hc(),Vp(15,`input`,9),NI(),Hc()(),vi(16,`mat-form-field`,4)(17,`mat-label`),FD(18,`סוגי חישוב (ברירת מחדל: הכל)`),Hc(),vi(19,`mat-select`,10),GE(20,Ve,2,2,`mat-option`,6,Re),Hc(),NI(),Hc(),vi(22,`mat-form-field`,4)(23,`mat-label`),FD(24,`פורמט`),Hc(),vi(25,`mat-select`,11)(26,`mat-option`,12),FD(27,`CSV`),Hc(),vi(28,`mat-option`,13),FD(29,`Excel (xlsx)`),Hc()(),NI(),Hc(),UE(30,ze,4,0,`p`,14),vi(31,`button`,15),UE(32,je,1,0,`mat-spinner`,16)(33,Ue,2,0,`span`),Hc()(),UE(34,He,4,1,`section`,17)}if(n&2){let e,r=aD();jp(`formGroup`,r.form),Hv(4),xI(),Hv(),zE(r.companies()),Hv(6),xI(),Hv(4),xI(),Hv(4),xI(),Hv(),zE(r.calculationTypes()),Hv(5),xI(),Hv(5),qE(r.showLargeRangeHint()?30:-1),Hv(),jp(`disabled`,r.submitting()),Hv(),qE(r.submitting()?32:33),Hv(2),qE((e=r.jobStatus())?34:-1,e)}}var Ze=5e3;var qe=90;function We(n){return n===`pending`||n===`processing`}function Ye(n,t){let e=new Date(n).getTime(),r=new Date(t).getTime();return Number.isNaN(e)||Number.isNaN(r)?0:Math.round((r-e)/(1e3*60*60*24))}var ke=class n{route=w(G);companyService=w(y);calculationTypesCatalogService=w(u);exportService=w(v);notification=w(ht);destroyRef=w(le);fb=w(Mn);pollSubscription=null;companies=Uo([]);calculationTypes=Uo([]);loading=Uo(!0);submitting=Uo(!1);jobStatus=Uo(null);fileUrl=Uo(null);form=this.fb.group({companyId:this.fb.control(null),dateFrom:this.fb.nonNullable.control(``),dateTo:this.fb.nonNullable.control(``),calculationTypeIds:this.fb.nonNullable.control([]),format:this.fb.nonNullable.control(`csv`)});ngOnInit(){this.route.queryParamMap.pipe(w$1(this.destroyRef)).subscribe(t=>{let e=t.get(`companyId`),r=t.get(`year`);e&&this.form.controls.companyId.setValue(e),r&&(this.form.controls.dateFrom.setValue(`${r}-01-01`),this.form.controls.dateTo.setValue(`${r}-12-31`))}),this.reload()}showLargeRangeHint(){let{dateFrom:t,dateTo:e,format:r}=this.form.value;return r!==`xlsx`||!t||!e?!1:Ye(t,e)>qe}submit(){let t=this.form.controls.companyId.value,e=this.form.controls.dateFrom.value,r=this.form.controls.dateTo.value,s=this.form.controls.calculationTypeIds.value,x=this.form.controls.format.value;!t||!e||!r||(this.submitting.set(!0),this.jobStatus.set(null),this.fileUrl.set(null),(async()=>{try{let{jobId:R}=await this.exportService.triggerExport(t,e,r,s,x);this.jobStatus.set(`pending`),this.notification.success(`הייצוא הופעל בהצלחה`),this.startPolling(R)}catch{this.notification.error(`הפעלת הייצוא נכשלה`)}finally{this.submitting.set(!1)}})())}async reload(){this.loading.set(!0);try{let[t,e]=await Promise.all([this.companyService.list(),this.calculationTypesCatalogService.list()]);this.companies.set(t),this.calculationTypes.set(e)}catch{this.notification.error(`טעינת רשימת החברות/סוגי החישוב נכשלה`)}finally{this.loading.set(!1)}}startPolling(t){this.stopPolling(),this.pollSubscription=jh(Ze).pipe(w$1(this.destroyRef)).subscribe(()=>{this.pollJob(t)})}stopPolling(){this.pollSubscription?.unsubscribe(),this.pollSubscription=null}async pollJob(t){try{let e=await this.exportService.getExportStatus(t);if(this.jobStatus.set(e.status),this.fileUrl.set(e.fileUrl),We(e.status))return;this.stopPolling(),e.status===`failed`&&this.notification.error(`הייצוא נכשל`)}catch{}}static ɵfac=function(e){return new(e||n)};static ɵcmp=vE({type:n,selectors:[[`app-export`]],decls:8,vars:1,consts:[[1,`export`],[1,`export__header`],[`diameter`,`24`],[1,`export__form`,3,`ngSubmit`,`formGroup`],[`appearance`,`outline`,1,`export__field`],[`formControlName`,`companyId`],[3,`value`],[1,`export__date-range`],[`matInput`,``,`type`,`date`,`formControlName`,`dateFrom`],[`matInput`,``,`type`,`date`,`formControlName`,`dateTo`],[`formControlName`,`calculationTypeIds`,`multiple`,``],[`formControlName`,`format`],[`value`,`csv`],[`value`,`xlsx`],[1,`export__hint`],[`mat-flat-button`,``,`color`,`primary`,`type`,`submit`,3,`disabled`],[`diameter`,`20`,1,`export__spinner`],[1,`export__result`],[`mat-flat-button`,``,`color`,`primary`,`download`,``,`target`,`_blank`,3,`href`],[1,`export__error`],[`mode`,`indeterminate`]],template:function(e,r){e&1&&(vi(0,`div`,0)(1,`header`,1)(2,`h2`),FD(3,`ייצוא נתוני חבות`),Hc(),vi(4,`p`),FD(5,`ייצוא נתוני חבות אקטוארית לקובץ להורדה, לפי חברה, טווח תאריכים וסוגי חישוב`),Hc()(),UE(6,Oe,1,0,`mat-spinner`,2)(7,Je,35,5),Hc()),e&2&&(Hv(6),qE(r.loading()?6:7))},dependencies:[En,An,Le$1,Vn,Dn,qt,Jt,Xw,Yw,Gt,ze$1,U,Be$2,Pe,Si,vi$1,j,yt,wt,Ie,Ae,J,Z],styles:[`.export[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.export__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 4px;font-size:18px;font-weight:700}.export__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:var(--%NS%mat-sys-on-surface-variant)}.export__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;max-width:480px}.export__field[_ngcontent-%COMP%]{width:100%}.export__date-range[_ngcontent-%COMP%]{display:flex;gap:8px}.export__date-range[_ngcontent-%COMP%]   .export__field[_ngcontent-%COMP%]{flex:1}.export__hint[_ngcontent-%COMP%]{display:flex;align-items:center;gap:4px;margin:0;color:var(--%NS%mat-sys-on-surface-variant);font-size:13px}.export__spinner[_ngcontent-%COMP%]{display:inline-block}.export__result[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;max-width:480px}.export__error[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-error)}`]})};export{ke as ExportComponent};