import{$ as Lu,A as GE,Bt as WD,C as FD,Ct as TE,Dn as eh,Dr as vi,E as Fp,Er as vE,Fn as gD,Hn as ii$1,In as gg,J as Ki,Jt as XE,Kr as zp,L as Hv,Ln as gv,Lt as Vn,M as Gp,Mn as fD,Mt as Uo,N as Ha,Nn as fg,Nt as Up,Ot as Tu,P as Hc,Pr as wu,Rt as Vp,Sr as uD,St as Sp,Wn as j,Wr as zE,Wt as Wp,Xn as lD,Xt as Xp,Y as Kl,Zt as Y,_n as c0,a as Ai$1,an as _D,at as Ng,br as tn$1,c as Be,cn as aD,cr as pD,dr as qE,er as mg,g as EE,gn as br,gr as rw,ht as Qp,ir as ny,jr as w,kr as vr,kt as UE,lt as Op,mr as r0,nt as Mg,q as Kh,qn as jp,s as Bc,sn as _g,t as $c,u as Ce,un as ar,ur as q,ut as PI,vr as sh,vt as S,xr as u0,yt as Se,zr as ye,zt as W}from"./chunk-CO2ZArI-.js";import{A as Nn,Ct as uo,Dt as yf,G as Xw,H as Vs,J as Yw,O as Mn,Q as _e,S as Ke$1,St as sw,T as Ln,Tt as vw,W as Xt,Z as Zs,_t as qr,at as hf,f as Ec,ft as nf,h as Hc$1,ht as oo,i as Bh,j as On,jt as zn,kt as z,n as $n,o as Bs,pt as ni$1,q as Yt,s as By,tt as co,vt as qs,x as Kc,yt as qt,z as Tc}from"./chunk-DP8KhUu3.js";import{n as P}from"./chunk-Ek1ttimT.js";import"./chunk-Bsl4F-h5.js";import{a as ur,d,f as u,i as ue,n as Tt,p as c,r as bo}from"./main-YNUOIIXP.js";import{n as yt,t as wt}from"./chunk-vfM1W1OJ.js";import{t as J}from"./chunk-CLNZvQn1.js";import{t as ht}from"./chunk-ftv-hSqI.js";var Rt=[`*`];var di=[`content`];var qe=[[[`mat-drawer`],[`mat-sidenav`]],[[`mat-drawer-content`],[`mat-sidenav-content`]],`*`];var Ze=[`mat-drawer, mat-sidenav`,`mat-drawer-content, mat-sidenav-content`,`*`];function hi(n,l){if(n&1){let t=XE();vi(0,`div`,1),Wp(`click`,function(){wu(t);return Tu(aD()._onBackdropClicked())}),Hc()}if(n&2)eh(`mat-drawer-shown`,aD()._isShowingBackdrop())}function pi(n,l){n&1&&(vi(0,`mat-drawer-content`),uD(1,2),Hc())}function ui(n,l){if(n&1){let t=XE();vi(0,`div`,1),Wp(`click`,function(){wu(t);return Tu(aD()._onBackdropClicked())}),Hc()}if(n&2)eh(`mat-drawer-shown`,aD()._isShowingBackdrop())}function _i(n,l){n&1&&(vi(0,`mat-sidenav-content`),uD(1,2),Hc())}var gi=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var fi=new S(`MAT_DRAWER_DEFAULT_AUTOSIZE`,{providedIn:`root`,factory:()=>!1});var ie=new S(`MAT_DRAWER_CONTAINER`);var bt=(()=>{class n extends hf{_platform=w(z);_changeDetectorRef=w(c0);_element=w(br);_ngZone=w(Se);_isInert=!1;_container=w(te);ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>this._changeDetectorRef.markForCheck())}_drawerToggled(t){t.opened?this._ngZone.runOutsideAngular(()=>{t._animationEnd.pipe(mg(50),tn$1(1)).subscribe(()=>this._updateInert())}):this._updateInert()}_drawerModeChanged(){this._updateInert()}_updateInert(){let t=this._container._isShowingBackdrop();if(t!==this._isInert){let e=this._element.nativeElement;this._isInert=t,t?e.setAttribute(`inert`,`true`):e.removeAttribute(`inert`)}}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!==`over`&&t.opened||e!=null&&e.mode!==`over`&&e.opened}static ɵfac=(()=>{let t;return function(i){return(t||(t=ny(n)))(i||n)}})();static ɵcmp=vE({type:n,selectors:[[`mat-drawer-content`]],hostAttrs:[1,`mat-drawer-content`],hostVars:6,hostBindings:function(e,i){e&2&&(Xp(`margin-left`,i._container._contentMargins.left,`px`)(`margin-right`,i._container._contentMargins.right,`px`),eh(`mat-drawer-content-hidden`,i._shouldBeHidden()))},features:[WD([{provide:hf,useExisting:n}]),Sp],ngContentSelectors:Rt,decls:1,vars:0,template:function(e,i){e&1&&(lD(),uD(0))},encapsulation:2})}return n})();var Jt=(()=>{class n{_elementRef=w(br);_focusTrapFactory=w(Bh);_focusMonitor=w(Bs);_platform=w(z);_ngZone=w(Se);_renderer=w(Ha);_interactivityChecker=w(Tc);_doc=w(ar);_isAnimating=!1;_container=w(ie,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t===`end`?`end`:`start`,t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position=`start`;get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next(),this._getContent()?._drawerModeChanged()}_mode=`over`;get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=sw(t)}_disableClose=!1;get autoFocus(){return this._autoFocus??(this.mode===`side`?`dialog`:`first-tabbable`)}set autoFocus(t){(t===`true`||t===`false`||t==null)&&(t=sw(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(sw(t))}_opened=Uo(!1);_openedVia=null;_animationStarted=new Y;_animationEnd=new Y;openedChange=new Be(!0);_openedStream=this.openedChange.pipe(Vn(t=>t),Ce(()=>{}));openedStart=this._animationStarted.pipe(Vn(()=>this.opened),Ki(void 0));_closedStream=this.openedChange.pipe(Vn(t=>!t),Ce(()=>{}));closedStart=this._animationStarted.pipe(Vn(()=>!this.opened),Ki(void 0));_destroyed=new Y;onPositionChanged=new Be;_content;_modeChanged=new Y;_injector=w(ye);_changeDetectorRef=w(c0);constructor(){this.openedChange.pipe(Ng(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||`program`)}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,`keydown`,i=>{i.keyCode===27&&!this.disableClose&&!ni$1(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),t.listen(e,`transitionend`,this._handleTransitionEvent),t.listen(e,`transitioncancel`,this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&(this._interactivityChecker.isFocusable(i)||(i.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let a=()=>{r(),I(),i.removeAttribute(`tabindex`)},r=this._renderer.listen(i,`blur`,a),I=this._renderer.listen(i,`mousedown`,a)})),i.focus(e))}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case`dialog`:return;case!0:case`first-tabbable`:gv(()=>{let e=this._isAnimating?{preventScroll:!0}:void 0;!this._focusTrap.focusInitialElement(e)&&typeof t.focus==`function`&&t.focus(e)},{injector:this._injector});break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`);break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!==`dialog`&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position===`end`&&this._updatePositionInParent(`end`),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,`mouse`)}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||`program`);return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?`open`:`close`):(this._opened.set(t),this._getContent()?._drawerToggled(this),this._container?._transitionsEnabled?this._isAnimating?(this._setIsAnimating(!1),this._simulateAnimation()):(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):this._simulateAnimation(),this._elementRef.nativeElement.classList.toggle(`mat-drawer-opened`,t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(tn$1(1)).subscribe(r=>a(r?`open`:`close`))}))}_getContent(){return this._container?._content||this._container?._userContent}_setIsAnimating(t){t!==this._isAnimating&&(this._isAnimating=t,this._elementRef.nativeElement.classList.toggle(`mat-drawer-animating`,t))}_simulateAnimation(){setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()})}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t===`end`?(this._anchor||(this._anchor=this._doc.createComment(`mat-drawer-anchor`),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type===`transitionend`&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static ɵfac=function(e){return new(e||n)};static ɵcmp=vE({type:n,selectors:[[`mat-drawer`]],viewQuery:function(e,i){if(e&1&&Qp(di,5),e&2){let a;fD(a=pD())&&(i._content=a.first)}},hostAttrs:[1,`mat-drawer`],hostVars:12,hostBindings:function(e,i){e&2&&(Fp(`align`,null)(`tabIndex`,i.mode!==`side`?`-1`:null),Xp(`visibility`,!i._container&&!i.opened?`hidden`:null),eh(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`))},inputs:{position:`position`,mode:`mode`,disableClose:`disableClose`,autoFocus:`autoFocus`,opened:`opened`},outputs:{openedChange:`openedChange`,_openedStream:`opened`,openedStart:`openedStart`,_closedStream:`closed`,closedStart:`closedStart`,onPositionChanged:`positionChanged`},exportAs:[`matDrawer`],ngContentSelectors:Rt,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(e,i){e&1&&(lD(),vi(0,`div`,1,0),uD(2),Hc())},dependencies:[hf],encapsulation:2})}return n})();var te=(()=>{class n{_dir=w(Yt,{optional:!0});_element=w(br);_ngZone=w(Se);_changeDetectorRef=w(c0);_animationDisabled=qt();_transitionsEnabled=!1;_allDrawers;_drawers=new ii$1;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=sw(t)}_autosize=w(fi);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:sw(t)}_backdropOverride=null;backdropClick=new Be;_start=null;_end=null;_left=null;_right=null;_destroyed=new Y;_doCheckSubject=new Y;_contentMargins={left:null,right:null};_contentMarginChanges=new Y;get scrollable(){return this._userContent||this._content}_injector=w(ye);constructor(){let t=w(z),e=w(Xt);this._dir?.change.pipe(Ng(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(Ng(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add(`mat-drawer-transition`),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(_g(this._allDrawers),Ng(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(_g(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(gg(10),Ng(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode==`side`)t+=this._left._getWidth();else if(this._left.mode==`push`){let i=this._left._getWidth();t+=i,e-=i}}if(this._right&&this._right.opened){if(this._right.mode==`side`)e+=this._right._getWidth();else if(this._right.mode==`push`){let i=this._right._getWidth();e+=i,t-=i}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(Ng(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!==`side`&&t.openedChange.pipe(Ng(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(Ng(this._drawers.changes)).subscribe(()=>{gv({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(Ng(fg(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,i=`mat-drawer-container-has-open`;t?e.add(i):e.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position==`end`?(this._end,this._end=t):(this._start,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value===`rtl`?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!=`over`||this._isDrawerOpen(this._end)&&this._end.mode!=`over`}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!==`side`:this._backdropOverride}static ɵfac=function(e){return new(e||n)};static ɵcmp=vE({type:n,selectors:[[`mat-drawer-container`]],contentQueries:function(e,i,a){if(e&1&&zp(a,bt,5)(a,Jt,5),e&2){let r;fD(r=pD())&&(i._content=r.first),fD(r=pD())&&(i._allDrawers=r)}},viewQuery:function(e,i){if(e&1&&Qp(bt,5),e&2){let a;fD(a=pD())&&(i._userContent=a.first)}},hostAttrs:[1,`mat-drawer-container`],hostVars:2,hostBindings:function(e,i){e&2&&eh(`mat-drawer-container-explicit-backdrop`,i._backdropOverride)},inputs:{autosize:`autosize`,hasBackdrop:`hasBackdrop`},outputs:{backdropClick:`backdropClick`},exportAs:[`matDrawerContainer`],features:[WD([{provide:ie,useExisting:n}])],ngContentSelectors:Ze,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(e,i){e&1&&(lD(qe),UE(0,hi,1,2,`div`,0),uD(1),uD(2,1),UE(3,pi,2,0,`mat-drawer-content`)),e&2&&(qE(i.hasBackdrop?0:-1),Hv(3),qE(i._content?-1:3))},dependencies:[bt],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--%NS%mat-sidenav-content-text-color, var(--%NS%mat-sys-on-background));
  background-color: var(--%NS%mat-sidenav-content-background-color, var(--%NS%mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--%NS%mat-sidenav-scrim-color, color-mix(in srgb, var(--%NS%mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--%NS%mat-sidenav-container-text-color, var(--%NS%mat-sys-on-surface-variant));
  box-shadow: var(--%NS%mat-sidenav-container-elevation-shadow, none);
  background-color: var(--%NS%mat-sidenav-container-background-color, var(--%NS%mat-sys-surface));
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  width: var(--%NS%mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-left-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-bottom-right-radius: var(--%NS%mat-sidenav-container-shape, var(--%NS%mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--%NS%mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2})}return n})();var Ot=(()=>{class n extends bt{static ɵfac=(()=>{let t;return function(i){return(t||(t=ny(n)))(i||n)}})();static ɵcmp=vE({type:n,selectors:[[`mat-sidenav-content`]],hostAttrs:[1,`mat-drawer-content`,`mat-sidenav-content`],features:[WD([{provide:hf,useExisting:n},{provide:bt,useExisting:n}]),Sp],ngContentSelectors:Rt,decls:1,vars:0,template:function(e,i){e&1&&(lD(),uD(0))},encapsulation:2})}return n})();var ne=(()=>{class n extends Jt{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=sw(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=qr(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=qr(t)}_fixedBottomGap=0;static ɵfac=(()=>{let t;return function(i){return(t||(t=ny(n)))(i||n)}})();static ɵcmp=vE({type:n,selectors:[[`mat-sidenav`]],hostAttrs:[1,`mat-drawer`,`mat-sidenav`],hostVars:16,hostBindings:function(e,i){e&2&&(Fp(`tabIndex`,i.mode!==`side`?`-1`:null)(`align`,null),Xp(`top`,i.fixedInViewport?i.fixedTopGap:null,`px`)(`bottom`,i.fixedInViewport?i.fixedBottomGap:null,`px`),eh(`mat-drawer-end`,i.position===`end`)(`mat-drawer-over`,i.mode===`over`)(`mat-drawer-push`,i.mode===`push`)(`mat-drawer-side`,i.mode===`side`)(`mat-sidenav-fixed`,i.fixedInViewport))},inputs:{fixedInViewport:`fixedInViewport`,fixedTopGap:`fixedTopGap`,fixedBottomGap:`fixedBottomGap`},exportAs:[`matSidenav`],features:[WD([{provide:Jt,useExisting:n}]),Sp],ngContentSelectors:Rt,decls:3,vars:0,consts:[[`content`,``],[`cdkScrollable`,``,1,`mat-drawer-inner-container`]],template:function(e,i){e&1&&(lD(),vi(0,`div`,1,0),uD(2),Hc())},dependencies:[hf],encapsulation:2})}return n})();var Ke=(()=>{class n extends te{_allDrawers=void 0;_content=void 0;static ɵfac=(()=>{let t;return function(i){return(t||(t=ny(n)))(i||n)}})();static ɵcmp=vE({type:n,selectors:[[`mat-sidenav-container`]],contentQueries:function(e,i,a){if(e&1&&zp(a,Ot,5)(a,ne,5),e&2){let r;fD(r=pD())&&(i._content=r.first),fD(r=pD())&&(i._allDrawers=r)}},hostAttrs:[1,`mat-drawer-container`,`mat-sidenav-container`],hostVars:2,hostBindings:function(e,i){e&2&&eh(`mat-drawer-container-explicit-backdrop`,i._backdropOverride)},exportAs:[`matSidenavContainer`],features:[WD([{provide:ie,useExisting:n},{provide:te,useExisting:n}]),Sp],ngContentSelectors:Ze,decls:4,vars:2,consts:[[1,`mat-drawer-backdrop`,3,`mat-drawer-shown`],[1,`mat-drawer-backdrop`,3,`click`]],template:function(e,i){e&1&&(lD(qe),UE(0,ui,1,2,`div`,0),uD(1),uD(2,1),UE(3,_i,2,0,`mat-sidenav-content`)),e&2&&(qE(i.hasBackdrop?0:-1),Hv(3),qE(i._content?-1:3))},dependencies:[Ot],styles:[gi],encapsulation:2})}return n})();var $e=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=EE({type:n});static ɵinj=Kl({imports:[Zs,Ke$1,Zs]})}return n})();var ki=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`];var Si=[`mat-icon, [matMenuItemIcon]`,`*`];function Mi(n,l){n&1&&(Lu(),vi(0,`svg`,2),Vp(1,`polygon`,3),Hc())}var Ni=[`*`];function Ci(n,l){if(n&1){let t=XE();Bc(0,`div`,0),Gp(`click`,function(){wu(t);return Tu(aD().closed.emit(`click`))})(`animationstart`,function(i){wu(t);return Tu(aD()._onAnimationStart(i.animationName))})(`animationend`,function(i){wu(t);return Tu(aD()._onAnimationDone(i.animationName))})(`animationcancel`,function(i){wu(t);return Tu(aD()._onAnimationDone(i.animationName))}),Bc(1,`div`,1),uD(2),$c()()}if(n&2){let t=aD();_D(t._classList),eh(`mat-menu-panel-animations-disabled`,t._animationsDisabled)(`mat-menu-panel-exit-animation`,t._panelAnimationState===`void`)(`mat-menu-panel-animating`,t._isAnimating()),Up(`id`,t.panelId),Fp(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,t.ariaLabelledby||null)(`aria-describedby`,t.ariaDescribedby||null)}}var oe=new S(`MAT_MENU_PANEL`);var it=(()=>{class n{_elementRef=w(br);_document=w(ar);_focusMonitor=w(Bs);_parentMenu=w(oe,{optional:!0});_changeDetectorRef=w(c0);role=`menuitem`;disabled=!1;disableRipple=!1;_hovered=new Y;_focused=new Y;_highlighted=!1;_triggersSubmenu=!1;constructor(){w(_e).load(Hc$1),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?`-1`:`0`}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll(`mat-icon, .material-icons`);for(let i=0;i<e.length;i++)e[i].remove();return t.textContent?.trim()||``}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(e){return new(e||n)};static ɵcmp=vE({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:8,hostBindings:function(e,i){e&1&&Wp(`click`,function(r){return i._checkDisabled(r)})(`mouseenter`,function(){return i._handleMouseEnter()}),e&2&&(Fp(`role`,i.role)(`tabindex`,i._getTabIndex())(`aria-disabled`,i.disabled)(`disabled`,i.disabled||null),eh(`mat-mdc-menu-item-highlighted`,i._highlighted)(`mat-mdc-menu-item-submenu-trigger`,i._triggersSubmenu))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,u0],disableRipple:[2,`disableRipple`,`disableRipple`,u0]},exportAs:[`matMenuItem`],ngContentSelectors:Si,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(e,i){e&1&&(lD(ki),uD(0),vi(1,`span`,0),uD(2,1),Hc(),Vp(3,`div`,1),UE(4,Mi,2,0,`:svg:svg`,2)),e&2&&(Hv(3),jp(`matRippleDisabled`,i.disableRipple||i.disabled)(`matRippleTrigger`,i._getHostElement()),Hv(),qE(i._triggersSubmenu?4:-1))},dependencies:[vw],encapsulation:2})}return n})();var Di=new S(`MatMenuContent`);var Ti=new S(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var ae=`_mat-menu-enter`;var Pt=`_mat-menu-exit`;var Z=(()=>{class n{_elementRef=w(br);_changeDetectorRef=w(c0);_injector=w(ye);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=qt();_allItems;_directDescendantItems=new ii$1;_classList={};_panelAnimationState=`void`;_animationDone=new Y;_isAnimating=Uo(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(t){let e=this._previousPanelClass,i=q({},this._classList);e&&e.length&&e.split(` `).forEach(a=>{i[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(` `).forEach(a=>{i[a]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new Be;close=this.closed;panelId=w(Mn).getId(`mat-menu-panel-`);constructor(){let t=w(Ti);this.overlayPanelClass=t.overlayPanelClass||``,this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Vs(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(_g(this._directDescendantItems),Mg(t=>fg(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState===`enter`&&e.activeItem?._hasFocus()){let i=t.toArray(),a=Math.max(0,Math.min(i.length-1,e.activeItemIndex||0));i[a]&&!i[a].disabled?e.setActiveItem(a):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(_g(this._directDescendantItems),Mg(e=>fg(...e.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,i=this._keyManager;switch(e){case 27:ni$1(t)||(t.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(e===38||e===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(t);return}}focusFirstItem(t=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=gv(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=W(q({},this._classList),{"mat-menu-before":t===`before`,"mat-menu-after":t===`after`,"mat-menu-above":e===`above`,"mat-menu-below":e===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Pt;(e||t===ae)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(t){(t===ae||t===Pt)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?`enter`:`void`,t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Pt),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?ae:Pt)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(_g(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),t}static ɵfac=function(e){return new(e||n)};static ɵcmp=vE({type:n,selectors:[[`mat-menu`]],contentQueries:function(e,i,a){if(e&1&&zp(a,Di,5)(a,it,5)(a,it,4),e&2){let r;fD(r=pD())&&(i.lazyContent=r.first),fD(r=pD())&&(i._allItems=r),fD(r=pD())&&(i.items=r)}},viewQuery:function(e,i){if(e&1&&Qp(vr,5),e&2){let a;fD(a=pD())&&(i.templateRef=a.first)}},hostVars:3,hostBindings:function(e,i){e&2&&Fp(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,u0],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,t=>t==null?null:u0(t)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[WD([{provide:oe,useExisting:n}])],ngContentSelectors:Ni,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(e,i){e&1&&(lD(),Op(0,Ci,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})}return n})();var Ii=new S(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=w(ye);return()=>oo(n)}});var lt=new WeakMap;var Ei=(()=>{class n{_canHaveBackdrop;_element=w(br);_viewContainerRef=w(Ai$1);_menuItemInstance=w(it,{optional:!0,self:!0});_dir=w(Yt,{optional:!0});_focusMonitor=w(Bs);_ngZone=w(Se);_injector=w(ye);_scrollStrategy=w(Ii);_changeDetectorRef=w(c0);_animationsDisabled=qt();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=j.EMPTY;_menuCloseSubscription=j.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t?(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e===`click`||e===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=w(oe,{optional:!0});this._parentMaterialMenu=e instanceof Z?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&lt.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let i=lt.get(e);lt.set(e,this),i&&i!==this&&i._closeMenu();let a=this._createOverlay(e),r=a.getConfig(),I=r.positionStrategy;this._setPosition(e,I),this._canHaveBackdrop?r.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:r.hasBackdrop=e.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),e instanceof Z&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Ng(e.close)).subscribe(()=>{I.withLockedPosition(!1).reapplyLastPosition(),I.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,i=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof Z&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(tn$1(1)).subscribe(()=>{e.detach(),lt.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(e.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&lt.delete(i),this.restoreFocus&&(t===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=uo(this._injector,e),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof Z&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new zn({positionStrategy:co(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:t.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let a=i.connectionPair.overlayX===`start`?`after`:`before`,r=i.connectionPair.overlayY===`top`?`below`:`above`;t.setPositionClasses(a,r)})})}_setPosition(t,e){let[i,a]=t.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[r,I]=t.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[Vt,Ht]=[r,I],[Qt,Wt]=[i,a],mt=0;if(this._triggersSubmenu()){if(Wt=i=t.xPosition===`before`?`start`:`end`,a=Qt=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let me=this._parentMaterialMenu.items.first;this._parentInnerPadding=me?me._getHostElement().offsetTop:0}mt=r===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(Vt=r===`top`?`bottom`:`top`,Ht=I===`top`?`bottom`:`top`);e.withPositions([{originX:i,originY:Vt,overlayX:Qt,overlayY:r,offsetY:mt},{originX:a,originY:Vt,overlayX:Wt,overlayY:r,offsetY:mt},{originX:i,originY:Ht,overlayX:Qt,overlayY:I,offsetY:-mt},{originX:a,originY:Ht,overlayX:Wt,overlayY:I,offsetY:-mt}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments();return fg(t,this._parentMaterialMenu?this._parentMaterialMenu.closed:Kh(),this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Vn(r=>this._menuOpen&&r!==this._menuItemInstance)):Kh(),e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new $n(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return lt.get(t)===this}_triggerIsAriaDisabled(){return u0(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(e){PI()};static ɵdir=TE({type:n})}return n})();var Ft=(()=>{class n extends Ei{_cleanupTouchstart;_hoverSubscription=j.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new Be;onMenuOpen=this.menuOpened;menuClosed=new Be;onMenuClose=this.menuClosed;constructor(){super(!0);let t=w(Ha);this._cleanupTouchstart=t.listen(this._element.nativeElement,`touchstart`,e=>{Nn(e)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){On(t)||(this._openedBy=t.button===0?`mouse`:void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(e===39&&this.dir===`ltr`||e===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(e){return new(e||n)};static ɵdir=TE({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(e,i){e&1&&Wp(`click`,function(r){return i._handleClick(r)})(`mousedown`,function(r){return i._handleMousedown(r)})(`keydown`,function(r){return i._handleKeydown(r)}),e&2&&Fp(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Sp]})}return n})();var Lt=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=EE({type:n});static ɵinj=Kl({imports:[Kc,yf,Ke$1,Zs]})}return n})();var Ai=[`*`,[[`mat-toolbar-row`]]];var Oi=[`*`,`mat-toolbar-row`];var Ri=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=TE({type:n,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return n})();var ii=(()=>{class n{_elementRef=w(br);_platform=w(z);_document=w(ar);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(e){return new(e||n)};static ɵcmp=vE({type:n,selectors:[[`mat-toolbar`]],contentQueries:function(e,i,a){if(e&1&&zp(a,Ri,5),e&2){let r;fD(r=pD())&&(i._toolbarRows=r)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(e,i){e&2&&(_D(i.color?`mat-`+i.color:``),eh(`mat-toolbar-multiple-rows`,i._toolbarRows.length>0)(`mat-toolbar-single-row`,i._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:Oi,decls:2,vars:0,template:function(e,i){e&1&&(lD(Ai),uD(0),uD(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})}return n})();var ni=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=EE({type:n});static ɵinj=Kl({imports:[Ke$1]})}return n})();var Li=(n,l)=>l.tenantId;function Bi(n,l){if(n&1){let t=XE();vi(0,`button`,6),Wp(`click`,function(){let i=wu(t).$implicit;return Tu(aD().switchTo(i))}),vi(1,`mat-icon`),FD(2),Hc(),vi(3,`span`),FD(4),Hc()()}if(n&2){let t=l.$implicit,e=aD();jp(`disabled`,e.switching()),Hv(2),sh(t.tenantId===e.activeTenantId()?`radio_button_checked`:`radio_button_unchecked`),Hv(2),sh(t.tenantName)}}var Bt=class n{tenantService=w(u);notification=w(ht);tenants=this.tenantService.tenants;activeTenantId=this.tenantService.activeTenantId;activeTenantName=this.tenantService.activeTenantName;switching=Uo(!1);async ngOnInit(){this.tenants().length===0&&await this.tenantService.loadTenants()}async switchTo(l){if(!(l.tenantId===this.activeTenantId()||this.switching())){this.switching.set(!0);try{await this.tenantService.selectTenant(l.tenantId)}catch{this.notification.error(`החלפת משרד נכשלה`)}finally{this.switching.set(!1)}}}static ɵfac=function(t){return new(t||n)};static ɵcmp=vE({type:n,selectors:[[`app-tenant-switcher`]],decls:11,vars:2,consts:[[`tenantMenu`,`matMenu`],[`mat-button`,``,1,`tenant-switcher__trigger`,3,`matMenuTriggerFor`],[1,`tenant-switcher__name`],[1,`tenant-switcher__caret`],[`xPosition`,`before`],[`mat-menu-item`,``,3,`disabled`],[`mat-menu-item`,``,3,`click`,`disabled`]],template:function(t,e){if(t&1&&(vi(0,`button`,1)(1,`mat-icon`),FD(2,`domain`),Hc(),vi(3,`span`,2),FD(4),Hc(),vi(5,`mat-icon`,3),FD(6,`expand_more`),Hc()(),vi(7,`mat-menu`,4,0),GE(9,Bi,5,3,`button`,5,Li),Hc()),t&2)jp(`matMenuTriggerFor`,gD(8)),Hv(4),sh(e.activeTenantName()??`בחרו משרד`),Hv(5),zE(e.tenants())},dependencies:[Lt,Z,it,Ft,Xw,Yw,yt,wt,J],styles:[`.tenant-switcher__trigger[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px}.tenant-switcher__name[_ngcontent-%COMP%]{max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tenant-switcher__caret[_ngcontent-%COMP%]{font-size:18px;width:18px;height:18px}`]})};var zt=class n{appState=w(d);authService=w(c);router=w(ue);userEmail=rw(()=>this.appState.currentUser()?.email??``);menuToggle=r0();async logout(){await this.authService.logout(),await this.router.navigateByUrl(`/login`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=vE({type:n,selectors:[[`app-header`]],outputs:{menuToggle:`menuToggle`},decls:23,vars:2,consts:[[`userMenu`,`matMenu`],[1,`app-header`],[`mat-icon-button`,``,`aria-label`,`פתיחת תפריט ניווט`,1,`app-header__menu-btn`,3,`click`],[1,`app-header__brand`],[1,`app-header__logo`],[1,`app-header__title`],[1,`app-header__tenant`],[1,`app-header__spacer`],[`mat-button`,``,1,`app-header__user`,3,`matMenuTriggerFor`],[1,`app-header__email`],[`xPosition`,`before`],[`mat-menu-item`,``,3,`click`]],template:function(t,e){if(t&1&&(vi(0,`mat-toolbar`,1)(1,`button`,2),Wp(`click`,function(){return e.menuToggle.emit()}),vi(2,`mat-icon`),FD(3,`menu`),Hc()(),vi(4,`div`,3)(5,`span`,4),FD(6,`A`),Hc(),vi(7,`span`,5),FD(8,`Actoari`),Hc()(),Vp(9,`app-tenant-switcher`,6)(10,`span`,7),vi(11,`button`,8)(12,`mat-icon`),FD(13,`account_circle`),Hc(),vi(14,`span`,9),FD(15),Hc()(),vi(16,`mat-menu`,10,0)(18,`button`,11),Wp(`click`,function(){return e.logout()}),vi(19,`mat-icon`),FD(20,`logout`),Hc(),vi(21,`span`),FD(22,`התנתקות`),Hc()()()()),t&2){let i=gD(17);Hv(11),jp(`matMenuTriggerFor`,i),Hv(4),sh(e.userEmail())}},dependencies:[ni,ii,Xw,Yw,nf,yt,wt,Lt,Z,it,Ft,Bt],styles:[`.app-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;background:var(--%NS%mat-sys-surface);color:var(--%NS%mat-sys-on-surface);border-bottom:1px solid var(--%NS%mat-sys-outline-variant);box-shadow:var(--%NS%mat-sys-level1);position:sticky;top:0;z-index:10}.app-header__menu-btn[_ngcontent-%COMP%]{display:none}@media(max-width:900px){.app-header__menu-btn[_ngcontent-%COMP%]{display:inline-flex}}.app-header__brand[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-weight:700;margin-inline-end:8px}.app-header__logo[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:8px;background:var(--%NS%mat-sys-primary);color:var(--%NS%mat-sys-on-primary);font-size:16px}.app-header__title[_ngcontent-%COMP%]{font-size:17px}@media(max-width:600px){.app-header__title[_ngcontent-%COMP%]{display:none}}.app-header__spacer[_ngcontent-%COMP%]{flex:1}.app-header__user[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:6px}.app-header__email[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media(max-width:600px){.app-header__email[_ngcontent-%COMP%]{display:none}}`]})};var oi=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=EE({type:n});static ɵinj=Kl({imports:[Ke$1]})}return n})();var zi=[`*`];var ji=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--%NS%mat-list-list-item-container-color, transparent);
  border-radius: var(--%NS%mat-list-list-item-container-shape, var(--%NS%mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--%NS%mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--%NS%mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--%NS%mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--%NS%mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--%NS%selected::before, .mdc-list-item.mdc-list-item--%NS%selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--%NS%with-leading-icon:hover .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  height: var(--%NS%mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--%NS%mat-list-list-item-trailing-supporting-text-font, var(--%NS%mat-sys-label-small-font));
  line-height: var(--%NS%mat-list-list-item-trailing-supporting-text-line-height, var(--%NS%mat-sys-label-small-line-height));
  font-size: var(--%NS%mat-list-list-item-trailing-supporting-text-size, var(--%NS%mat-sys-label-small-size));
  font-weight: var(--%NS%mat-list-list-item-trailing-supporting-text-weight, var(--%NS%mat-sys-label-small-weight));
  letter-spacing: var(--%NS%mat-list-list-item-trailing-supporting-text-tracking, var(--%NS%mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
  width: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
  height: var(--%NS%mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--%NS%with-trailing-icon:hover .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-trailing-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-selected-trailing-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--%NS%mat-list-list-item-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-list-list-item-label-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-list-list-item-label-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-list-list-item-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-list-list-item-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-list-list-item-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--%NS%mat-list-list-item-supporting-text-color, var(--%NS%mat-sys-on-surface-variant));
  font-family: var(--%NS%mat-list-list-item-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-list-list-item-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-list-list-item-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-list-list-item-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  letter-spacing: var(--%NS%mat-list-list-item-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--%NS%mat-list-list-item-disabled-leading-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--%NS%mat-list-list-item-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--%NS%mat-list-list-item-disabled-label-text-color, var(--%NS%mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--%NS%mat-list-list-item-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--%NS%disabled::before {
  background-color: var(--%NS%mat-list-list-item-disabled-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-disabled-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--%NS%mat-list-list-item-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
  opacity: var(--%NS%mat-list-list-item-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--%NS%mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--%NS%mat-list-list-item-leading-avatar-shape, var(--%NS%mat-sys-corner-full));
  background-color: var(--%NS%mat-list-list-item-leading-avatar-color, var(--%NS%mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--%NS%mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--%NS%activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--%NS%mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--%NS%mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-list-active-indicator-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--%NS%mat-list-active-indicator-color, var(--%NS%mat-sys-secondary-container));
}
`;var Vi=[`unscopedContent`];var Hi=[`text`];var Qi=[[[``,`matListItemAvatar`,``],[``,`matListItemIcon`,``]],[[``,`matListItemTitle`,``]],[[``,`matListItemLine`,``]],`*`,[[``,`matListItemMeta`,``]],[[`mat-divider`]]];var Wi=[`[matListItemAvatar],[matListItemIcon]`,`[matListItemTitle]`,`[matListItemLine]`,`*`,`[matListItemMeta]`,`mat-divider`];var Gi=new S(`ListOption`);var ce=(()=>{class n{_elementRef=w(br);static ɵfac=function(e){return new(e||n)};static ɵdir=TE({type:n,selectors:[[``,`matListItemTitle`,``]],hostAttrs:[1,`mat-mdc-list-item-title`,`mdc-list-item__primary-text`]})}return n})();var Ui=(()=>{class n{_elementRef=w(br);static ɵfac=function(e){return new(e||n)};static ɵdir=TE({type:n,selectors:[[``,`matListItemLine`,``]],hostAttrs:[1,`mat-mdc-list-item-line`,`mdc-list-item__secondary-text`]})}return n})();var Yi=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵdir=TE({type:n,selectors:[[``,`matListItemMeta`,``]],hostAttrs:[1,`mat-mdc-list-item-meta`,`mdc-list-item__end`]})}return n})();var ri=(()=>{class n{_listOption=w(Gi,{optional:!0});_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()===`after`}static ɵfac=function(e){return new(e||n)};static ɵdir=TE({type:n,hostVars:4,hostBindings:function(e,i){e&2&&eh(`mdc-list-item__start`,i._isAlignedAtStart())(`mdc-list-item__end`,!i._isAlignedAtStart())}})}return n})();var Xi=(()=>{class n extends ri{static ɵfac=(()=>{let t;return function(i){return(t||(t=ny(n)))(i||n)}})();static ɵdir=TE({type:n,selectors:[[``,`matListItemAvatar`,``]],hostAttrs:[1,`mat-mdc-list-item-avatar`],features:[Sp]})}return n})();var le=(()=>{class n extends ri{static ɵfac=(()=>{let t;return function(i){return(t||(t=ny(n)))(i||n)}})();static ɵdir=TE({type:n,selectors:[[``,`matListItemIcon`,``]],hostAttrs:[1,`mat-mdc-list-item-icon`],features:[Sp]})}return n})();var qi=new S(`MAT_LIST_CONFIG`);var se=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=sw(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(sw(t))}_disabled=Uo(!1);_defaultOptions=w(qi,{optional:!0});static ɵfac=function(e){return new(e||n)};static ɵdir=TE({type:n,hostVars:1,hostBindings:function(e,i){e&2&&Fp(`aria-disabled`,i.disabled)},inputs:{disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var Zi=(()=>{class n{_elementRef=w(br);_ngZone=w(Se);_listBase=w(se,{optional:!0});_platform=w(z);_hostElement;_isButtonElement;_noopAnimations=qt();_avatars;_icons;set lines(t){this._explicitLines=qr(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=sw(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(sw(t))}_disabled=Uo(!1);_subscriptions=new j;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){w(_e).load(Hc$1);let t=w(qs,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()===`button`,this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute(`type`)&&this._hostElement.setAttribute(`type`,`button`)}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add(`mat-mdc-list-item-interactive`),this._rippleRenderer=new Ln(this,this._ngZone,this._hostElement,this._platform,w(ye)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(fg(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle(`mat-mdc-list-item-single-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-one-line`,e<=1),this._hostElement.classList.toggle(`mdc-list-item--with-two-lines`,e===2),this._hostElement.classList.toggle(`mdc-list-item--with-three-lines`,e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;i.classList.toggle(`mdc-list-item__primary-text`,a),i.classList.toggle(`mdc-list-item__secondary-text`,!a)}else i.classList.remove(`mdc-list-item__primary-text`),i.classList.remove(`mdc-list-item__secondary-text`)}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static ɵfac=function(e){return new(e||n)};static ɵdir=TE({type:n,contentQueries:function(e,i,a){if(e&1&&zp(a,Xi,4)(a,le,4),e&2){let r;fD(r=pD())&&(i._avatars=r),fD(r=pD())&&(i._icons=r)}},hostVars:4,hostBindings:function(e,i){e&2&&(Fp(`aria-disabled`,i.disabled)(`disabled`,i._isButtonElement&&i.disabled||null),eh(`mdc-list-item--disabled`,i.disabled))},inputs:{lines:`lines`,disableRipple:`disableRipple`,disabled:`disabled`}})}return n})();var si=(()=>{class n extends Zi{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=sw(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName===`A`&&this._activated?`page`:null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static ɵfac=(()=>{let t;return function(i){return(t||(t=ny(n)))(i||n)}})();static ɵcmp=vE({type:n,selectors:[[`mat-list-item`],[`a`,`mat-list-item`,``],[`button`,`mat-list-item`,``]],contentQueries:function(e,i,a){if(e&1&&zp(a,Ui,5)(a,ce,5)(a,Yi,5),e&2){let r;fD(r=pD())&&(i._lines=r),fD(r=pD())&&(i._titles=r),fD(r=pD())&&(i._meta=r)}},viewQuery:function(e,i){if(e&1&&Qp(Vi,5)(Hi,5),e&2){let a;fD(a=pD())&&(i._unscopedContent=a.first),fD(a=pD())&&(i._itemText=a.first)}},hostAttrs:[1,`mat-mdc-list-item`,`mdc-list-item`],hostVars:13,hostBindings:function(e,i){e&2&&(Fp(`aria-current`,i._getAriaCurrent()),eh(`mdc-list-item--activated`,i.activated)(`mdc-list-item--with-leading-avatar`,i._avatars.length!==0)(`mdc-list-item--with-leading-icon`,i._icons.length!==0)(`mdc-list-item--with-trailing-meta`,i._meta.length!==0)(`mat-mdc-list-item-both-leading-and-trailing`,i._hasBothLeadingAndTrailing())(`_mat-animation-noopable`,i._noopAnimations))},inputs:{activated:`activated`},exportAs:[`matListItem`],features:[Sp],ngContentSelectors:Wi,decls:10,vars:0,consts:[[`unscopedContent`,``],[1,`mdc-list-item__content`],[1,`mat-mdc-list-item-unscoped-content`,3,`cdkObserveContent`],[1,`mat-focus-indicator`]],template:function(e,i){e&1&&(lD(Qi),uD(0),vi(1,`span`,1),uD(2,1),uD(3,2),vi(4,`span`,2,0),Wp(`cdkObserveContent`,function(){return i._updateItemLines(!0)}),uD(6,3),Hc()(),uD(7,4),uD(8,5),Vp(9,`div`,3))},dependencies:[By],encapsulation:2})}return n})();var ci=(()=>{class n extends se{_isNonInteractive=!1;static ɵfac=(()=>{let t;return function(i){return(t||(t=ny(n)))(i||n)}})();static ɵcmp=vE({type:n,selectors:[[`mat-nav-list`]],hostAttrs:[`role`,`navigation`,1,`mat-mdc-nav-list`,`mat-mdc-list-base`,`mdc-list`],exportAs:[`matNavList`],features:[WD([{provide:se,useExisting:n}]),Sp],ngContentSelectors:zi,decls:1,vars:0,template:function(e,i){e&1&&(lD(),uD(0))},styles:[ji],encapsulation:2})}return n})();var li=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=EE({type:n});static ɵinj=Kl({imports:[Ec,Kc,P,Ke$1,oi]})}return n})();var $i=(n,l)=>l.route;function Ji(n,l){if(n&1&&(vi(0,`a`,1)(1,`mat-icon`,2),FD(2),Hc(),vi(3,`span`,3),FD(4),Hc()()),n&2){let t=l.$implicit;jp(`routerLink`,t.route),Hv(2),sh(t.icon),Hv(2),sh(t.label)}}var tn=[{label:`דשבורד ראשי`,icon:`dashboard`,route:`/dashboard`},{label:`חברות`,icon:`business`,route:`/companies`},{label:`מעקב הרצות`,icon:`history`,route:`/calculation-runs`},{label:`ייצוא`,icon:`download`,route:`/exports`},{label:`קטלוג סוגי חישוב`,icon:`category`,route:`/calc-types`,adminOnly:!0},{label:`מודלים`,icon:`model_training`,route:`/models`,adminOnly:!0},{label:`סטי לוחות אקטואריים`,icon:`table_chart`,route:`/table-sets`,adminOnly:!0},{label:`ניהול משתמשי משרד`,icon:`group`,route:`/tenant/users`,adminOnly:!0}];var jt=class n{appState=w(d);items=rw(()=>tn.filter(l=>!l.adminOnly||this.appState.activeTenantRole()===`admin`));static ɵfac=function(t){return new(t||n)};static ɵcmp=vE({type:n,selectors:[[`app-sidenav`]],decls:3,vars:0,consts:[[1,`sidenav-list`],[`mat-list-item`,``,`routerLinkActive`,`sidenav-list__item--active`,1,`sidenav-list__item`,3,`routerLink`],[`matListItemIcon`,``],[`matListItemTitle`,``]],template:function(t,e){t&1&&(vi(0,`mat-nav-list`,0),GE(1,Ji,5,3,`a`,1,$i),Hc()),t&2&&(Hv(),zE(e.items()))},dependencies:[li,ci,si,le,ce,yt,wt,Tt,bo],styles:[`.sidenav-list[_ngcontent-%COMP%]{padding-top:8px}.sidenav-list__item[_ngcontent-%COMP%]{margin:2px 8px;border-radius:10px;width:calc(100% - 16px)}.sidenav-list__item--active[_ngcontent-%COMP%]{background:var(--%NS%mat-sys-secondary-container);color:var(--%NS%mat-sys-on-secondary-container)}.sidenav-list__item--active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--%NS%mat-sys-on-secondary-container)}`]})};var mi=class n{sidenavOpened=Uo(!0);toggleSidenav(){this.sidenavOpened.set(!this.sidenavOpened())}static ɵfac=function(t){return new(t||n)};static ɵcmp=vE({type:n,selectors:[[`app-shell`]],decls:8,vars:3,consts:[[`sidenav`,``],[1,`app-shell`],[`mode`,`side`,1,`app-shell__sidenav`,3,`opened`,`fixedInViewport`,`fixedTopGap`],[1,`app-shell__content`],[3,`menuToggle`],[1,`app-shell__main`]],template:function(t,e){t&1&&(vi(0,`mat-sidenav-container`,1)(1,`mat-sidenav`,2,0),Vp(3,`app-sidenav`),Hc(),vi(4,`mat-sidenav-content`,3)(5,`app-header`,4),Wp(`menuToggle`,function(){return e.toggleSidenav()}),Hc(),vi(6,`main`,5),Vp(7,`router-outlet`),Hc()()()),t&2&&(Hv(),jp(`opened`,e.sidenavOpened())(`fixedInViewport`,!0)(`fixedTopGap`,64))},dependencies:[$e,ne,Ke,Ot,ur,zt,jt],styles:[`.app-shell[_ngcontent-%COMP%]{height:100dvh}.app-shell__sidenav[_ngcontent-%COMP%]{width:260px;border-inline-end:1px solid var(--%NS%mat-sys-outline-variant);border-inline-start:none}.app-shell__main[_ngcontent-%COMP%]{padding:24px;max-width:1200px;margin:0 auto}@media(max-width:900px){.app-shell__main[_ngcontent-%COMP%]{padding:16px}}`]})};export{mi as AppShellComponent};