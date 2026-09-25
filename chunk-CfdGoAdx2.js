import{A as GE,C as FD,Ct as TE,Dn as eh,Dr as vi,E as Fp,Er as vE,Fn as gD,Ht as Wc,In as gg,Kr as zp,L as Hv,Ln as gv,Lt as Vn,Mn as fD,Mt as Uo,N as Ha,Nn as fg,P as Hc,Qn as le$1,Rt as Vp,Sn as d0,Sr as uD,St as Sp,V as It,Wr as zE,Wt as Wp,Xn as lD,Xt as Xp,Y as Kl,Z as Ln,Zt as Y$1,_n as c0,at as Ng,c as Be,cr as pD,d as Cg,dr as qE,g as EE,gn as br,gr as rw,ht as Qp,in as _,jr as w,kt as UE,nt as Mg,q as Kh,qn as jp,sn as _g,v as Eh,vr as sh,vt as S,x as Et,xr as u0,yt as Se,zr as ye}from"./chunk-CO2ZArI-.js";import{G as Xw,H as Vs,O as Mn,Q as _e$1,S as Ke,Tt as vw,W as Xt$1,ft as nf,h as Hc$1,kt as z,o as Bs,pt as ni,q as Yt,s as By,vt as qs,yt as qt}from"./chunk-DP8KhUu3.js";import{t as O}from"./chunk-C2NGbtLs.js";import{a as ur,n as Tt,r as bo,t as G$1}from"./main-YNUOIIXP.js";import{t as w$1}from"./chunk-BHKEx5Ma.js";import{n as p}from"./chunk-CLpHsCUZ.js";import{n as yt,t as wt}from"./chunk-vfM1W1OJ.js";import{n as Z$1,t as J}from"./chunk-CLNZvQn1.js";import{t as y}from"./chunk-DZoYubB6.js";import{t as ht}from"./chunk-ftv-hSqI.js";var Z=[`*`];var ee=[`tabListContainer`];var ne=[`tabList`];var ae=[`tabListInner`];var ie=[`nextPaginator`];var oe=[`previousPaginator`];var G=`mdc-tab-indicator--active`;var Zt=`mdc-tab-indicator--no-transition`;var q=class{_items;_currentItem;constructor(r){this._items=r}hide(){this._items.forEach(r=>r.deactivateInkBar()),this._currentItem=void 0}alignToElement(r){let t=this._items.find(n=>n.elementRef.nativeElement===r),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var re=(()=>{class a{_elementRef=w(br);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(G);return}let n=e.getBoundingClientRect(),i=t.width/n.width,s=t.left-n.left;e.classList.add(Zt),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${s}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Zt),e.classList.add(G),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(G)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=TE({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,u0]}})}return a})();var Kt={passive:!0};var se=650;var le=100;function de(a){let r=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(r)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(r)?r:``}var ce=(()=>{class a{_elementRef=w(br);_changeDetectorRef=w(c0);_viewportRuler=w(Xt$1);_dir=w(Yt,{optional:!0});_ngZone=w(Se);_platform=w(z);_sharedResizeObserver=w(O);_injector=w(ye);_renderer=w(Ha);_animationsDisabled=qt();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new Y$1;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new Y$1;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Be;indexFocused=new Be;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Kt),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Kt))}ngAfterContentInit(){let t=this._dir?this._dir.change:Kh(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(gg(32),Ng(this._destroyed)),n=this._viewportRuler.change(150).pipe(Ng(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Vs(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),gv(i,{injector:this._injector}),fg(t,n,e,this._items.changes,this._itemsResized()).pipe(Ng(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}_itemsResized(){return typeof ResizeObserver!=`function`?Et:this._items.changes.pipe(_g(this._items),Mg(t=>new _(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),Cg(1),Vn(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!ni(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:s}=e.elementRef.nativeElement,g,C;this._getLayoutDirection()==`ltr`?(g=i,C=g+s):(C=this._tabListInner.nativeElement.offsetWidth-i,g=C-s);let P=this.scrollDistance,U=this.scrollDistance+n;g<P?this.scrollDistance-=P-g:C>U&&(this.scrollDistance+=Math.min(C-U,g-P))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),It(se,le).pipe(Ng(fg(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=TE({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,u0],selectedIndex:[2,`selectedIndex`,`selectedIndex`,d0]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var me=new S(`MAT_TABS_CONFIG`);var K=(()=>{class a extends ce{_focusedItem=Uo(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(t){this._fitInkBarToContent.next(t),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new Ln(!1);stretchTabs=!0;animationDuration=``;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=Uo(!1);color=`primary`;tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let t=w(me,{optional:!0});super(),this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new q(this._items),this._items.changes.pipe(_g(null),Ng(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(_g(null),Ng(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active){this.selectedIndex=e,this.tabPanel&&(this.tabPanel._activeTabId=t[e].id),this._focusedItem.set(t[e]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?`tablist`:this._elementRef.nativeElement.getAttribute(`role`)}_hasFocus(t){return this._keyManager?.activeItem===t}static ɵfac=function(e){return new(e||a)};static ɵcmp=vE({type:a,selectors:[[``,`mat-tab-nav-bar`,``]],contentQueries:function(e,n,i){if(e&1&&zp(i,Y,5),e&2){let s;fD(s=pD())&&(n._items=s)}},viewQuery:function(e,n){if(e&1&&Qp(ee,7)(ne,7)(ae,7)(ie,5)(oe,5),e&2){let i;fD(i=pD())&&(n._tabListContainer=i.first),fD(i=pD())&&(n._tabList=i.first),fD(i=pD())&&(n._tabListInner=i.first),fD(i=pD())&&(n._nextPaginator=i.first),fD(i=pD())&&(n._previousPaginator=i.first)}},hostAttrs:[1,`mat-mdc-tab-nav-bar`,`mat-mdc-tab-header`],hostVars:17,hostBindings:function(e,n){e&2&&(Fp(`role`,n._getRole()),Xp(`--%NS%mat-tab-header-animation-duration`,n.animationDuration),eh(`mat-mdc-tab-header-pagination-controls-enabled`,n._showPaginationControls)(`mat-mdc-tab-header-rtl`,n._getLayoutDirection()==`rtl`)(`mat-mdc-tab-nav-bar-stretch-tabs`,n.stretchTabs)(`mat-primary`,n.color!==`warn`&&n.color!==`accent`)(`mat-accent`,n.color===`accent`)(`mat-warn`,n.color===`warn`)(`_mat-animation-noopable`,n._animationsDisabled))},inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,u0],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,u0],animationDuration:[2,`animationDuration`,`animationDuration`,de],backgroundColor:`backgroundColor`,disableRipple:[2,`disableRipple`,`disableRipple`,u0],color:`color`,tabPanel:`tabPanel`},exportAs:[`matTabNavBar`,`matTabNav`],features:[Sp],ngContentSelectors:Z,decls:13,vars:6,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-link-container`,3,`keydown`],[1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-links`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(e,n){e&1&&(lD(),vi(0,`div`,5,0),Wp(`click`,function(){return n._handlePaginatorClick(`before`)})(`mousedown`,function(s){return n._handlePaginatorPress(`before`,s)})(`touchend`,function(){return n._stopInterval()}),Vp(2,`div`,6),Hc(),vi(3,`div`,7,1),Wp(`keydown`,function(s){return n._handleKeydown(s)}),vi(5,`div`,8,2),Wp(`cdkObserveContent`,function(){return n._onContentChanges()}),vi(7,`div`,9,3),uD(9),Hc()()(),vi(10,`div`,10,4),Wp(`mousedown`,function(s){return n._handlePaginatorPress(`after`,s)})(`click`,function(){return n._handlePaginatorClick(`after`)})(`touchend`,function(){return n._stopInterval()}),Vp(12,`div`,6),Hc()),e&2&&(eh(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollBefore),jp(`matRippleDisabled`,n._disableScrollBefore||n.disableRipple),Hv(10),eh(`mat-mdc-tab-header-pagination-disabled`,n._disableScrollAfter),jp(`matRippleDisabled`,n._disableScrollAfter||n.disableRipple))},dependencies:[vw,By],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})}return a})();var Y=(()=>{class a extends re{_tabNavBar=w(K);elementRef=w(br);_focusMonitor=w(Bs);_destroyed=new Y$1;_isActive=!1;_tabIndex=rw(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=Uo(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=w(Mn).getId(`mat-tab-link-`);constructor(){super(),w(_e$1).load(Hc$1);let t=w(qs,{optional:!0}),e=w(new Eh(`tabindex`),{optional:!0});this.rippleConfig=t||{},this.tabIndex=e==null?0:parseInt(e)||0,qt()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(Ng(this._destroyed)).subscribe(n=>{this.fitInkBarToContent=n})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(this.disabled?t.preventDefault():this._tabNavBar.tabPanel&&(t.keyCode===32&&t.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute(`aria-controls`)}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?`true`:`false`:this.elementRef.nativeElement.getAttribute(`aria-selected`)}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?`page`:null}_getRole(){return this._tabNavBar.tabPanel?`tab`:this.elementRef.nativeElement.getAttribute(`role`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=vE({type:a,selectors:[[``,`mat-tab-link`,``],[``,`matTabLink`,``]],hostAttrs:[1,`mdc-tab`,`mat-mdc-tab-link`,`mat-focus-indicator`],hostVars:11,hostBindings:function(e,n){e&1&&Wp(`focus`,function(){return n._handleFocus()})(`keydown`,function(s){return n._handleKeydown(s)}),e&2&&(Fp(`aria-controls`,n._getAriaControls())(`aria-current`,n._getAriaCurrent())(`aria-disabled`,n.disabled)(`aria-selected`,n._getAriaSelected())(`id`,n.id)(`tabIndex`,n._tabIndex())(`role`,n._getRole()),eh(`mat-mdc-tab-disabled`,n.disabled)(`mdc-tab--active`,n.active))},inputs:{active:[2,`active`,`active`,u0],disabled:[2,`disabled`,`disabled`,u0],disableRipple:[2,`disableRipple`,`disableRipple`,u0],tabIndex:[2,`tabIndex`,`tabIndex`,t=>t==null?0:d0(t)],id:`id`},exportAs:[`matTabLink`],features:[Sp],ngContentSelectors:Z,decls:5,vars:2,consts:[[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`]],template:function(e,n){e&1&&(lD(),Vp(0,`span`,0)(1,`div`,1),vi(2,`span`,2)(3,`span`,3),uD(4),Hc()()),e&2&&(Hv(),jp(`matRippleTrigger`,n.elementRef.nativeElement)(`matRippleDisabled`,n.rippleDisabled))},dependencies:[vw],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})}return a})();var Ut=(()=>{class a{id=w(Mn).getId(`mat-tab-nav-panel-`);_activeTabId;static ɵfac=function(e){return new(e||a)};static ɵcmp=vE({type:a,selectors:[[`mat-tab-nav-panel`]],hostAttrs:[`role`,`tabpanel`,1,`mat-mdc-tab-nav-panel`],hostVars:2,hostBindings:function(e,n){e&2&&Fp(`aria-labelledby`,n._activeTabId)(`id`,n.id)},inputs:{id:`id`},exportAs:[`matTabNavPanel`],ngContentSelectors:Z,decls:1,vars:0,template:function(e,n){e&1&&(lD(),uD(0))},encapsulation:2})}return a})();var Xt=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=EE({type:a});static ɵinj=Kl({imports:[Ke]})}return a})();var pe=(a,r)=>r.path;function he(a,r){a&1&&Vp(0,`mat-spinner`,5)}function _e(a,r){if(a&1&&(vi(0,`h1`,9),FD(1),Hc(),Vp(2,`app-status-badge`,10)),a&2){let t=r;Hv(),sh(t.name),Hv(),jp(`status`,t.status)}}function ue(a,r){if(a&1&&(vi(0,`a`,7,1),FD(2),Hc()),a&2){let t=r.$implicit,e=gD(1);jp(`routerLink`,t.path)(`active`,e.isActive),Hv(2),Wc(` `,t.label,` `)}}var fe=[{label:`פרטים כלליים`,path:`general`},{label:`סוגי חישוב פעילים`,path:`calculation-types`},{label:`עובדים`,path:`employees`},{label:`השוואת שנים`,path:`year-comparison`},{label:`מודלים`,path:`models`},{label:`היסטוריית חישובים`,path:`calculation-history`},{label:`דשבורד חברה`,path:`dashboard`},{label:`דוח תנועה`,path:`movement-report`}];var Jt=class a{route=w(G$1);companyService=w(y);notification=w(ht);destroyRef=w(le$1);tabs=fe;company=Uo(null);loading=Uo(!0);ngOnInit(){this.route.paramMap.pipe(w$1(this.destroyRef)).subscribe(r=>{this.loadCompany(r.get(`companyId`)??``)})}async loadCompany(r){this.loading.set(!0);try{let t=await this.companyService.getById(r);this.company.set(t)}catch{this.notification.error(`טעינת פרטי החברה נכשלה`)}finally{this.loading.set(!1)}}static ɵfac=function(t){return new(t||a)};static ɵcmp=vE({type:a,selectors:[[`app-company-card`]],decls:13,vars:2,consts:[[`tabPanel`,``],[`rla`,`routerLinkActive`],[1,`company-card`],[1,`company-card__header`],[`mat-icon-button`,``,`routerLink`,`/companies`,`aria-label`,`חזרה לרשימת החברות`],[`diameter`,`24`],[`mat-tab-nav-bar`,``,1,`company-card__tabs`,3,`tabPanel`],[`mat-tab-link`,``,`routerLinkActive`,``,3,`routerLink`,`active`],[1,`company-card__panel`],[1,`company-card__title`],[3,`status`]],template:function(t,e){if(t&1&&(vi(0,`div`,2)(1,`header`,3)(2,`a`,4)(3,`mat-icon`),FD(4,`arrow_forward`),Hc()(),UE(5,he,1,0,`mat-spinner`,5)(6,_e,3,2),Hc(),vi(7,`nav`,6),GE(8,ue,3,3,`a`,7,pe),Hc(),vi(10,`mat-tab-nav-panel`,8,0),Vp(12,`router-outlet`),Hc()()),t&2){let n,i=gD(11);Hv(5),qE(e.loading()?5:(n=e.company())?6:-1,n),Hv(2),jp(`tabPanel`,i),Hv(),zE(e.tabs)}},dependencies:[Xt,K,Ut,Y,Xw,nf,yt,wt,J,Z$1,Tt,bo,ur,p],styles:[`.company-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.company-card__header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px}.company-card__title[_ngcontent-%COMP%]{margin:0;font-size:22px;font-weight:700}.company-card__tabs[_ngcontent-%COMP%]{border-bottom:1px solid var(--%NS%mat-sys-outline-variant)}.company-card__panel[_ngcontent-%COMP%]{padding-top:16px}`]})};export{Jt as CompanyCardComponent};