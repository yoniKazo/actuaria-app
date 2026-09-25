import{$ as Lu,$t as Yp,A as GE,At as Uc,Bt as WD,C as FD,Ct as TE,Dn as eh,Dr as vi,E as Fp,Er as vE,Fn as gD,Ht as Wc,I as Hp,Jt as XE,Kt as Wu,L as Hv,Mn as fD,Mt as Uo,Nn as fg,Nt as Up,Ot as Tu,P as Hc,Pr as wu,Rn as hD,Rr as xr,Rt as Vp,Sn as d0,Sr as uD,T as Fm,Vn as i0,Vt as WE,Wr as zE,Wt as Wp,Xn as lD,Y as Kl,Zt as Y,_n as c0,an as _D,ar as o0,b as Eo,c as Be,cn as aD,cr as pD,dr as qE,dt as Pn,fr as qc,g as EE,gn as br,gr as rw,ht as Qp,jr as w,k as GD,kt as UE,mr as r0,o as Ap,pt as Pu,qn as jp,s as Bc,t as $c,v as Eh,vr as sh,vt as S,xr as u0,yt as Se}from"./chunk-CO2ZArI-.js";import{O as Mn,Q as _e,S as Ke,Tt as vw,h as Hc$1,o as Bs,w as L_,yt as qt}from"./chunk-DP8KhUu3.js";import{i as u}from"./chunk-Ek1ttimT.js";import{_ as w$1,u as X}from"./chunk-Bsl4F-h5.js";import{o as Ye,s as ne$1}from"./main-YNUOIIXP.js";import{a as ci,c as li,d as ri,f as si,i as ai,l as ni,n as V,o as ei,p as ti,r as Xe,s as ii,t as Jt,u as oi}from"./chunk-BnpF2RKd.js";import{n as p}from"./chunk-CLpHsCUZ.js";import{t as m}from"./chunk-BWB9aOms.js";import{n as yt$1,t as wt$1}from"./chunk-vfM1W1OJ.js";var it=[`input`];var rt=[`*`];var te={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var dt=new S(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>te});var l=(function(t){return t[t.Init=0]=`Init`,t[t.Checked=1]=`Checked`,t[t.Unchecked=2]=`Unchecked`,t[t.Indeterminate=3]=`Indeterminate`,t})(l||{});var ne=class{source;checked};var ae=(()=>{class t{_elementRef=w(br);_changeDetectorRef=w(c0);_ngZone=w(Se);_animationsDisabled=qt();_options=w(dt,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let a=new ne;return a.source=this,a.checked=e,a}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new Be;indeterminateChange=new Be;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=l.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){w(_e).load(Hc$1);let e=w(new Eh(`tabindex`),{optional:!0});this._options=this._options||te,this.color=this._options.color||te.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=w(Mn).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let a=e!=this._indeterminate();this._indeterminate.set(e),a&&(e?this._transitionCheckState(l.Indeterminate):this._transitionCheckState(this.checked?l.Checked:l.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Uo(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let a=this._currentCheckState,n=this._getAnimationTargetElement();if(!(a===e||!n)&&(this._currentAnimationClass&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(a,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);let o=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{n.classList.remove(o)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?l.Checked:l.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,a){if(this._animationsDisabled)return``;switch(e){case l.Init:if(a===l.Checked)return this._animationClasses.uncheckedToChecked;if(a==l.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case l.Unchecked:return a===l.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case l.Checked:return a===l.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case l.Indeterminate:return a===l.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let a=this._inputElement;a&&(a.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(a){return new(a||t)};static ɵcmp=vE({type:t,selectors:[[`mat-checkbox`]],viewQuery:function(a,n){if(a&1&&Qp(it,5),a&2){let o;fD(o=pD())&&(n._inputElement=o.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(a,n){a&2&&(Up(`id`,n.id),Fp(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),_D(n.color?`mat-`+n.color:`mat-accent`),eh(`_mat-animation-noopable`,n._animationsDisabled)(`mdc-checkbox--disabled`,n.disabled)(`mat-mdc-checkbox-disabled`,n.disabled)(`mat-mdc-checkbox-checked`,n.checked)(`mat-mdc-checkbox-disabled-interactive`,n.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,u0],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,u0],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,u0],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:d0(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,u0],checked:[2,`checked`,`checked`,u0],disabled:[2,`disabled`,`disabled`,u0],indeterminate:[2,`indeterminate`,`indeterminate`,u0]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[WD([{provide:X,useExisting:Eo(()=>t),multi:!0},{provide:w$1,useExisting:t,multi:!0}]),Fm],ngContentSelectors:rt,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(a,n){if(a&1&&(lD(),vi(0,`label`,3),Wp(`click`,function(C){return n._preventBubblingFromLabel(C)}),vi(1,`span`,4,0),Vp(3,`span`,5),vi(4,`input`,6,1),Wp(`blur`,function(){return n._onBlur()})(`click`,function(){return n._onInputClick()})(`change`,function(C){return n._onInteractionEvent(C)}),Hc(),Vp(6,`span`,7),vi(7,`span`,8),Lu(),vi(8,`svg`,9),Vp(9,`path`,10),Hc(),Pu(),Vp(10,`span`,11),Hc(),Vp(11,`span`,12),Hc(),vi(12,`span`,13,2),uD(14),Hc()()),a&2){let o=gD(2);jp(`labelPosition`,n.labelPosition)(`for`,n.inputId),Hv(4),eh(`mdc-checkbox--selected`,n.checked),jp(`checked`,n.checked)(`indeterminate`,n.indeterminate)(`disabled`,n.disabled&&!n.disabledInteractive)(`id`,n.inputId)(`required`,n.required)(`tabIndex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex),Fp(`aria-label`,n.ariaLabel||null)(`aria-labelledby`,n.ariaLabelledby)(`aria-describedby`,n.ariaDescribedby)(`aria-checked`,n.indeterminate?`mixed`:null)(`aria-controls`,n.ariaControls)(`aria-disabled`,n.disabled&&n.disabledInteractive?!0:null)(`aria-expanded`,n.ariaExpanded)(`aria-owns`,n.ariaOwns)(`name`,n.name)(`value`,n.value),Hv(7),jp(`matRippleTrigger`,o)(`matRippleDisabled`,n.disableRipple||n.disabled)(`matRippleCentered`,!0)}},dependencies:[vw,m],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return t})();var et=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=EE({type:t});static ɵinj=Kl({imports:[ae,Ke]})}return t})();var mt=[`*`,[[``,`matSortHeaderIcon`,``]]];var lt=[`*`,`[matSortHeaderIcon]`];function ht(t,c){t&1&&(Lu(),Bc(0,`svg`,3),Hp(1,`path`,4),$c())}function bt(t,c){t&1&&(Bc(0,`div`,2),uD(1,1,null,ht,2,0),$c())}var tt=new S(`MAT_SORT_DEFAULT_OPTIONS`);var y=(()=>{class t{_defaultOptions;_initializedStream=new Pn(1);sortables=new Map;_stateChanges=new Y;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new Be;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let a=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,n=kt(e.start||this.start,a),o=n.indexOf(this.direction)+1;return o>=n.length&&(o=0),n[o]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(a){return new(a||t)(xr(tt,8))};static ɵdir=TE({type:t,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,u0],disabled:[2,`matSortDisabled`,`disabled`,u0]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[Fm]})}return t})();function kt(t,c){let e=[`asc`,`desc`];return t==`desc`&&e.reverse(),c||e.push(``),e}var nt=(()=>{class t{_sort=w(y,{optional:!0});_columnDef=w(V,{optional:!0});_changeDetectorRef=w(c0);_focusMonitor=w(Bs);_elementRef=w(br);_ariaDescriber=w(L_,{optional:!0});_renderChanges;_animationsDisabled=qt();_recentlyCleared=Uo(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){w(_e).load(Hc$1);let e=w(tt,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=fg(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),a=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?a:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(a){return new(a||t)};static ɵcmp=vE({type:t,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(a,n){a&1&&Wp(`click`,function(){return n._toggleOnInteraction()})(`keydown`,function(C){return n._handleKeydown(C)})(`mouseleave`,function(){return n._recentlyCleared.set(null)}),a&2&&(Fp(`aria-sort`,n._getAriaSortAttribute()),eh(`mat-sort-header-disabled`,n._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,u0],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,u0]},exportAs:[`matSortHeader`],ngContentSelectors:lt,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(a,n){a&1&&(lD(mt),Bc(0,`div`,0)(1,`div`,1),uD(2),$c(),UE(3,bt,3,0,`div`,2),$c()),a&2&&(eh(`mat-sort-header-sorted`,n._isSorted())(`mat-sort-header-position-before`,n.arrowPosition===`before`)(`mat-sort-header-descending`,n._sort.direction===`desc`)(`mat-sort-header-ascending`,n._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,n._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,n._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,n._animationsDisabled),Fp(`tabindex`,n._isDisabled()?null:0)(`role`,n._isDisabled()?null:`button`),Hv(3),qE(n._renderArrow()?3:-1))},styles:[`.mat-sort-header {
  cursor: pointer;
}

.mat-sort-header-disabled {
  cursor: default;
}

.mat-sort-header-container {
  display: flex;
  align-items: center;
  letter-spacing: normal;
  outline: 0;
}
[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container, [mat-sort-header].cdk-program-focused .mat-sort-header-container {
  border-bottom: var(--%NS%mat-focus-indicator-fallback-border-style, solid) 1px currentColor;
}
.mat-sort-header-container::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 4px) * -1);
}

.mat-sort-header-content {
  display: flex;
  align-items: center;
}

.mat-sort-header-position-before {
  flex-direction: row-reverse;
}

@keyframes _mat-sort-header-recently-cleared-ascending {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-25%);
    opacity: 0;
  }
}
@keyframes _mat-sort-header-recently-cleared-descending {
  from {
    transform: translateY(0) rotate(180deg);
    opacity: 1;
  }
  to {
    transform: translateY(25%) rotate(180deg);
    opacity: 0;
  }
}
.mat-sort-header-arrow {
  height: 12px;
  width: 12px;
  position: relative;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1), opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  overflow: visible;
  color: var(--%NS%mat-sort-arrow-color, var(--%NS%mat-sys-on-surface));
}
.mat-sort-header.cdk-keyboard-focused .mat-sort-header-arrow, .mat-sort-header.cdk-program-focused .mat-sort-header-arrow, .mat-sort-header:hover .mat-sort-header-arrow {
  opacity: 0.54;
}
.mat-sort-header .mat-sort-header-sorted .mat-sort-header-arrow {
  opacity: 1;
}
.mat-sort-header-descending .mat-sort-header-arrow {
  transform: rotate(180deg);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transform: translateY(-25%);
}
.mat-sort-header-recently-cleared-ascending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-ascending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-recently-cleared-descending .mat-sort-header-arrow {
  transition: none;
  animation: _mat-sort-header-recently-cleared-descending 225ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.mat-sort-header-animations-disabled .mat-sort-header-arrow {
  transition-duration: 0ms;
  animation-duration: 0ms;
}
.mat-sort-header-arrow > svg, .mat-sort-header-arrow [matSortHeaderIcon] {
  width: 24px;
  height: 24px;
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  transform: translateZ(0);
}
.mat-sort-header-arrow, [dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow {
  margin: 0 0 0 6px;
}
.mat-sort-header-position-before .mat-sort-header-arrow, [dir=rtl] .mat-sort-header-arrow {
  margin: 0 6px 0 0;
}
`],encapsulation:2})}return t})();var at=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=EE({type:t});static ɵinj=Kl({imports:[Ke]})}return t})();var ut=()=>[5,10,25,50];var pt=(t,c)=>c.key;function xt(t,c){t&1&&Vp(0,`div`,3)}function ft(t,c){if(t&1&&(vi(0,`div`,1),GE(1,xt,1,0,`div`,3,WE),Hc()),t&2){let e=aD();Hv(),zE(e.skeletonRows)}}function gt(t,c){if(t&1&&(vi(0,`div`,2)(1,`mat-icon`,4),FD(2,`inbox`),Hc(),vi(3,`p`),FD(4),Hc()()),t&2){let e=aD();Hv(4),sh(e.emptyMessage())}}function vt(t,c){if(t&1){let e=XE();vi(0,`th`,12)(1,`mat-checkbox`,13),Wp(`change`,function(){wu(e);return Tu(aD(3).toggleAll())}),Hc()()}if(t&2){let e=aD(3);Hv(),jp(`checked`,e.isAllSelected())(`indeterminate`,e.hasSelection()&&!e.isAllSelected())}}function yt(t,c){if(t&1){let e=XE();vi(0,`td`,14),Wp(`click`,function(n){return n.stopPropagation()}),vi(1,`mat-checkbox`,15),Wp(`change`,function(){let n=wu(e).$implicit;return Tu(aD(3).toggleRow(n))}),Hc()()}if(t&2){let e=c.$implicit,a=aD(3);Hv(),jp(`checked`,a.isSelected(e))}}function Ct(t,c){if(t&1&&(Uc(0,6),Ap(1,vt,2,2,`th`,10)(2,yt,2,1,`td`,11),qc()),t&2)jp(`matColumnDef`,aD(2).selectColumnKey)}function St(t,c){if(t&1&&(vi(0,`th`,18),FD(1),Hc()),t&2){let e=aD().$implicit;jp(`disabled`,!e.sortable),Hv(),Wc(` `,e.header,` `)}}function Dt(t,c){if(t&1&&Vp(0,`app-status-badge`,20),t&2){let e=aD().$implicit,a=aD().$implicit;jp(`status`,a.cell(e))}}function wt(t,c){if(t&1&&FD(0),t&2){let e=aD().$implicit,a=aD().$implicit;Wc(` `,a.cell(e),` `)}}function Nt(t,c){if(t&1&&(vi(0,`td`,19),UE(1,Dt,1,1,`app-status-badge`,20)(2,wt,1,1),Hc()),t&2){let e=aD().$implicit;Hv(),qE(e.badge?1:2)}}function Mt(t,c){if(t&1&&(Uc(0,6),Ap(1,St,2,2,`th`,16)(2,Nt,3,1,`td`,17),qc()),t&2){let e=c.$implicit;jp(`matColumnDef`,e.key)}}function Tt(t,c){t&1&&Vp(0,`tr`,21)}function Et(t,c){if(t&1){let e=XE();vi(0,`tr`,22),Wp(`click`,function(){let n=wu(e).$implicit;return Tu(aD(2).rowClick.emit(n))}),Hc()}}function It(t,c){if(t&1&&(vi(0,`table`,5),UE(1,Ct,3,1,`ng-container`,6),GE(2,Mt,3,1,`ng-container`,6,pt),Ap(4,Tt,1,0,`tr`,7)(5,Et,1,0,`tr`,8),Hc(),Vp(6,`mat-paginator`,9)),t&2){let e=aD();jp(`dataSource`,e.dataSource),Hv(),qE(e.selectable()?1:-1),Hv(),zE(e.columns()),Hv(2),jp(`matHeaderRowDef`,e.displayedColumns()),Hv(),jp(`matRowDefColumns`,e.displayedColumns()),Hv(),jp(`pageSize`,e.pageSize())(`pageSizeOptions`,GD(6,ut))}}var ct=`__select`;var ot=class t{columns=o0.required();data=o0.required();loading=o0(!1);emptyMessage=o0(`אין נתונים להצגה`);pageSize=o0(10);selectable=o0(!1);rowClick=r0();selectionChange=r0();selectColumnKey=ct;sort=i0(y);paginator=i0(ne$1);dataSource=new Xe([]);skeletonRows=[0,1,2,3,4];selection=new u(!0,[]);displayedColumns=rw(()=>{let c=this.columns().map(e=>e.key);return this.selectable()?[ct,...c]:c});constructor(){Wu(()=>{this.dataSource.data=this.data(),this.selection.clear(),this.selectionChange.emit([])}),Wu(()=>{let c=this.sort();c&&(this.dataSource.sort=c)}),Wu(()=>{let c=this.paginator();c&&(this.dataSource.paginator=c)})}isSelected(c){return this.selection.isSelected(c)}toggleRow(c){this.selection.toggle(c),this.selectionChange.emit(this.selection.selected)}isAllSelected(){return this.dataSource.data.length>0&&this.selection.selected.length===this.dataSource.data.length}hasSelection(){return this.selection.selected.length>0}toggleAll(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data),this.selectionChange.emit(this.selection.selected)}static ɵfac=function(e){return new(e||t)};static ɵcmp=vE({type:t,selectors:[[`app-data-table`]],viewQuery:function(e,a){e&1&&Yp(a.sort,y,5)(a.paginator,ne$1,5),e&2&&hD(2)},inputs:{columns:[1,`columns`],data:[1,`data`],loading:[1,`loading`],emptyMessage:[1,`emptyMessage`],pageSize:[1,`pageSize`],selectable:[1,`selectable`]},outputs:{rowClick:`rowClick`,selectionChange:`selectionChange`},decls:4,vars:1,consts:[[1,`data-table`],[1,`data-table__skeleton`],[1,`data-table__empty`],[1,`skeleton-row`],[1,`data-table__empty-icon`],[`mat-table`,``,`matSort`,``,1,`data-table__table`,3,`dataSource`],[3,`matColumnDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,`class`,`data-table__row`,3,`click`,4,`matRowDef`,`matRowDefColumns`],[`showFirstLastButtons`,``,3,`pageSize`,`pageSizeOptions`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,3,`click`,4,`matCellDef`],[`mat-header-cell`,``],[`aria-label`,`בחירת כל השורות`,3,`change`,`checked`,`indeterminate`],[`mat-cell`,``,3,`click`],[`aria-label`,`בחירת שורה`,3,`change`,`checked`],[`mat-header-cell`,``,`mat-sort-header`,``,3,`disabled`,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`mat-header-cell`,``,`mat-sort-header`,``,3,`disabled`],[`mat-cell`,``],[3,`status`],[`mat-header-row`,``],[`mat-row`,``,1,`data-table__row`,3,`click`]],template:function(e,a){e&1&&(vi(0,`div`,0),UE(1,ft,3,0,`div`,1)(2,gt,5,1,`div`,2)(3,It,7,7),Hc()),e&2&&(Hv(),qE(a.loading()?1:a.data().length===0?2:3))},dependencies:[ci,Jt,ti,ri,ii,ei,si,oi,ni,ai,li,at,y,nt,Ye,ne$1,yt$1,wt$1,et,ae,p],styles:[`.data-table[_ngcontent-%COMP%], .data-table__table[_ngcontent-%COMP%]{width:100%}.data-table__row[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .1s ease}.data-table__row[_ngcontent-%COMP%]:hover{background-color:var(--%NS%mat-sys-surface-container-low)}.data-table__empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;padding:48px 16px;color:var(--%NS%mat-sys-on-surface-variant)}.data-table__empty-icon[_ngcontent-%COMP%]{font-size:40px;width:40px;height:40px;opacity:.6}.data-table__skeleton[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:16px 0}.skeleton-row[_ngcontent-%COMP%]{height:40px;border-radius:8px;background:linear-gradient(90deg,var(--%NS%mat-sys-surface-container-low) 25%,var(--%NS%mat-sys-surface-container) 37%,var(--%NS%mat-sys-surface-container-low) 63%);background-size:400% 100%;animation:_ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite}@keyframes _ngcontent-%COMP%_skeleton-shimmer{0%{background-position:100% 50%}to{background-position:0 50%}}`]})};export{ot as t};