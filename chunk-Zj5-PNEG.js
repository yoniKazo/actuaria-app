import{$n as mD,Cr as u0,E as EE,En as fD,Et as Uc,Gn as jp,Gr as zE,I as GE,Ir as wu,It as Wo,Jt as ZE,Kt as Yp,L as Gc,Lt as Wp,Mr as w,N as Fn,Nr as wE,Nt as WE,O as Ei,P as Fp,Pt as Wc,Tn as f0,Tt as Tu,U as Hp,Ut as Y,Wn as jm,Xn as lD,Y as Kl,Z as Lu,_r as sh,c as Ar,cr as pg,d as Bc,dt as QE,h as CE,hn as dD,hr as s0,ht as S,jt as Vp,kt as VD,lr as qc,m as Bv,n as $c,nn as a0,qt as ZD,r as $e$1,s as Ap,vr as sw,xn as eh,y as Cr,yr as tD,zn as i0,zt as Wu}from"./chunk-RG-nqyzU.js";import{G as Xw,Q as _e,S as Ke$1,bt as qt,h as Hc,o as Bs,pt as nf,w as L_}from"./chunk-DQrwQ4LK.js";import{t as m}from"./chunk-DGsVQ0tv.js";import{l as Ye$1,u as ne}from"./main-SXJQ4EIE.js";import{n as pe,t as ce}from"./chunk-Cbvz-dnv.js";import{n as p}from"./chunk-DceioAxS.js";import{a as ci,c as li,d as ri,f as si,i as ai,l as ni,n as V,o as ei,p as ti,r as Xe$1,s as ii,t as Jt,u as oi}from"./chunk-CcCtOngg.js";import{n as yt,t as wt}from"./chunk-D1hR63hj.js";var Le=[`*`,[[``,`matSortHeaderIcon`,``]]];var Ke=[`*`,`[matSortHeaderIcon]`];function Ye(t,n){t&1&&(Lu(),$c(0,`svg`,3),Hp(1,`path`,4),Uc())}function qe(t,n){t&1&&($c(0,`div`,2),fD(1,1,null,Ye,2,0),Uc())}var Re=new S(`MAT_SORT_DEFAULT_OPTIONS`);var b=(()=>{class t{_defaultOptions;_initializedStream=new Fn(1);sortables=new Map;_stateChanges=new Y;active;start=`asc`;get direction(){return this._direction}set direction(e){this._direction=e}_direction=``;disableClear;disabled=!1;sortChange=new $e$1;initialized=this._initializedStream;constructor(e){this._defaultOptions=e}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return``;let a=e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear,i=Ue(e.start||this.start,a),l=i.indexOf(this.direction)+1;return l>=i.length&&(l=0),i[l]}ngOnInit(){this._initializedStream.next()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete(),this._initializedStream.complete()}static ɵfac=function(a){return new(a||t)(Ar(Re,8))};static ɵdir=CE({type:t,selectors:[[``,`matSort`,``]],hostAttrs:[1,`mat-sort`],inputs:{active:[0,`matSortActive`,`active`],start:[0,`matSortStart`,`start`],direction:[0,`matSortDirection`,`direction`],disableClear:[2,`matSortDisableClear`,`disableClear`,f0],disabled:[2,`matSortDisabled`,`disabled`,f0]},outputs:{sortChange:`matSortChange`},exportAs:[`matSort`],features:[jm]})}return t})();function Ue(t,n){let e=[`asc`,`desc`];return t==`desc`&&e.reverse(),n||e.push(``),e}var Be=(()=>{class t{_sort=w(b,{optional:!0});_columnDef=w(V,{optional:!0});_changeDetectorRef=w(u0);_focusMonitor=w(Bs);_elementRef=w(Cr);_ariaDescriber=w(L_,{optional:!0});_renderChanges;_animationsDisabled=qt();_recentlyCleared=Wo(null);_sortButton;id;arrowPosition=`after`;start;disabled=!1;get sortActionDescription(){return this._sortActionDescription}set sortActionDescription(e){this._updateSortActionDescription(e)}_sortActionDescription=`Sort`;disableClear;constructor(){w(_e).load(Hc);let e=w(Re,{optional:!0});this._sort,e?.arrowPosition&&(this.arrowPosition=e?.arrowPosition)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._sort.register(this),this._renderChanges=pg(this._sort._stateChanges,this._sort.sortChange).subscribe(()=>this._changeDetectorRef.markForCheck()),this._sortButton=this._elementRef.nativeElement.querySelector(`.mat-sort-header-container`),this._updateSortActionDescription(this._sortActionDescription)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(()=>{Promise.resolve().then(()=>this._recentlyCleared.set(null))})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._renderChanges?.unsubscribe(),this._sortButton&&this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription)}_toggleOnInteraction(){if(!this._isDisabled()){let e=this._isSorted(),a=this._sort.direction;this._sort.sort(this),this._recentlyCleared.set(e&&!this._isSorted()?a:null)}}_handleKeydown(e){(e.keyCode===32||e.keyCode===13)&&(e.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&(this._sort.direction===`asc`||this._sort.direction===`desc`)}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?this._sort.direction==`asc`?`ascending`:`descending`:`none`}_renderArrow(){return!this._isDisabled()||this._isSorted()}_updateSortActionDescription(e){this._sortButton&&(this._ariaDescriber?.removeDescription(this._sortButton,this._sortActionDescription),this._ariaDescriber?.describe(this._sortButton,e)),this._sortActionDescription=e}static ɵfac=function(a){return new(a||t)};static ɵcmp=EE({type:t,selectors:[[``,`mat-sort-header`,``]],hostAttrs:[1,`mat-sort-header`],hostVars:3,hostBindings:function(a,i){a&1&&Wp(`click`,function(){return i._toggleOnInteraction()})(`keydown`,function(H){return i._handleKeydown(H)})(`mouseleave`,function(){return i._recentlyCleared.set(null)}),a&2&&(Fp(`aria-sort`,i._getAriaSortAttribute()),eh(`mat-sort-header-disabled`,i._isDisabled()))},inputs:{id:[0,`mat-sort-header`,`id`],arrowPosition:`arrowPosition`,start:`start`,disabled:[2,`disabled`,`disabled`,f0],sortActionDescription:`sortActionDescription`,disableClear:[2,`disableClear`,`disableClear`,f0]},exportAs:[`matSortHeader`],ngContentSelectors:Ke,decls:4,vars:17,consts:[[1,`mat-sort-header-container`,`mat-focus-indicator`],[1,`mat-sort-header-content`],[1,`mat-sort-header-arrow`],[`viewBox`,`0 -960 960 960`,`focusable`,`false`,`aria-hidden`,`true`],[`d`,`M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368h-80Z`]],template:function(a,i){a&1&&(dD(Le),$c(0,`div`,0)(1,`div`,1),fD(2),Uc(),WE(3,qe,3,0,`div`,2),Uc()),a&2&&(eh(`mat-sort-header-sorted`,i._isSorted())(`mat-sort-header-position-before`,i.arrowPosition===`before`)(`mat-sort-header-descending`,i._sort.direction===`desc`)(`mat-sort-header-ascending`,i._sort.direction===`asc`)(`mat-sort-header-recently-cleared-ascending`,i._recentlyCleared()===`asc`)(`mat-sort-header-recently-cleared-descending`,i._recentlyCleared()===`desc`)(`mat-sort-header-animations-disabled`,i._animationsDisabled),Fp(`tabindex`,i._isDisabled()?null:0)(`role`,i._isDisabled()?null:`button`),Bv(3),GE(i._renderArrow()?3:-1))},styles:[`.mat-sort-header {
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
`],encapsulation:2})}return t})();var ze=(()=>{class t{static ɵfac=function(a){return new(a||t)};static ɵmod=wE({type:t});static ɵinj=Kl({imports:[Ke$1]})}return t})();var We=()=>[5,10,25,50];var Ze=(t,n)=>n.key;function Ge(t,n){t&1&&Vp(0,`div`,3)}function Je(t,n){if(t&1&&(Ei(0,`div`,1),QE(1,Ge,1,0,`div`,3,zE),Bc()),t&2){let e=lD();Bv(),ZE(e.skeletonRows)}}function Xe(t,n){if(t&1&&(Ei(0,`div`,2)(1,`mat-icon`,4),VD(2,`inbox`),Bc(),Ei(3,`p`),VD(4),Bc()()),t&2){let e=lD();Bv(4),sh(e.emptyMessage())}}function et(t,n){if(t&1){let e=tD();Ei(0,`th`,12)(1,`mat-checkbox`,13),Wp(`change`,function(){wu(e);return Tu(lD(3).toggleAll())}),Bc()()}if(t&2){let e=lD(3);Bv(),jp(`checked`,e.isAllSelected())(`indeterminate`,e.hasSelection()&&!e.isAllSelected())}}function tt(t,n){if(t&1){let e=tD();Ei(0,`td`,14),Wp(`click`,function(i){return i.stopPropagation()}),Ei(1,`mat-checkbox`,15),Wp(`change`,function(){let i=wu(e).$implicit;return Tu(lD(3).toggleRow(i))}),Bc()()}if(t&2){let e=n.$implicit,a=lD(3);Bv(),jp(`checked`,a.isSelected(e))}}function nt(t,n){if(t&1&&(qc(0,6),Ap(1,et,2,2,`th`,10)(2,tt,2,1,`td`,11),Wc()),t&2)jp(`matColumnDef`,lD(2).selectColumnKey)}function at(t,n){if(t&1&&(Ei(0,`th`,18),VD(1),Bc()),t&2){let e=lD().$implicit;jp(`disabled`,!e.sortable),Bv(),Gc(` `,e.header,` `)}}function it(t,n){if(t&1&&Vp(0,`app-status-badge`,20),t&2){let e=lD().$implicit,a=lD().$implicit;jp(`status`,a.cell(e))}}function ot(t,n){if(t&1&&VD(0),t&2){let e=lD().$implicit,a=lD().$implicit;Gc(` `,a.cell(e),` `)}}function rt(t,n){if(t&1&&(Ei(0,`td`,19),WE(1,it,1,1,`app-status-badge`,20)(2,ot,1,1),Bc()),t&2){let e=lD().$implicit;Bv(),GE(e.badge?1:2)}}function st(t,n){if(t&1&&(qc(0,6),Ap(1,at,2,2,`th`,16)(2,rt,3,1,`td`,17),Wc()),t&2){let e=n.$implicit;jp(`matColumnDef`,e.key)}}function lt(t,n){t&1&&Vp(0,`th`,12)}function dt(t,n){if(t&1){let e=tD();Ei(0,`td`,19)(1,`button`,21),Wp(`click`,function(i){let l=wu(e).$implicit,H=lD(3);return i.stopPropagation(),Tu(H.editClick.emit(l))}),Ei(2,`mat-icon`),VD(3,`edit`),Bc()()()}}function ct(t,n){if(t&1&&(qc(0,6),Ap(1,lt,1,0,`th`,10)(2,dt,4,0,`td`,17),Wc()),t&2)jp(`matColumnDef`,lD(2).editColumnKey)}function mt(t,n){t&1&&Vp(0,`tr`,22)}function _t(t,n){if(t&1){let e=tD();Ei(0,`tr`,23),Wp(`click`,function(){let i=wu(e).$implicit;return Tu(lD(2).rowClick.emit(i))}),Bc()}}function ut(t,n){if(t&1&&(Ei(0,`table`,5),WE(1,nt,3,1,`ng-container`,6),QE(2,st,3,1,`ng-container`,6,Ze),WE(4,ct,3,1,`ng-container`,6),Ap(5,mt,1,0,`tr`,7)(6,_t,1,0,`tr`,8),Bc(),Vp(7,`mat-paginator`,9)),t&2){let e=lD();jp(`dataSource`,e.dataSource),Bv(),GE(e.selectable()?1:-1),Bv(),ZE(e.columns()),Bv(2),GE(e.editable()?4:-1),Bv(),jp(`matHeaderRowDef`,e.displayedColumns()),Bv(),jp(`matRowDefColumns`,e.displayedColumns()),Bv(),jp(`pageSize`,e.pageSize())(`pageSizeOptions`,ZD(7,We))}}var Fe=`__select`;var Ve=`__edit`;var $e=class t{columns=s0.required();data=s0.required();loading=s0(!1);emptyMessage=s0(`אין נתונים להצגה`);pageSize=s0(10);selectable=s0(!1);editable=s0(!1);rowClick=i0();editClick=i0();selectionChange=i0();selectColumnKey=Fe;editColumnKey=Ve;sort=a0(b);paginator=a0(ne);dataSource=new Xe$1([]);skeletonRows=[0,1,2,3,4];selection=new m(!0,[]);displayedColumns=sw(()=>{let n=this.columns().map(e=>e.key);return[...this.selectable()?[Fe]:[],...n,...this.editable()?[Ve]:[]]});constructor(){Wu(()=>{this.dataSource.data=this.data(),this.selection.clear(),this.selectionChange.emit([])}),Wu(()=>{let n=this.sort();n&&(this.dataSource.sort=n)}),Wu(()=>{let n=this.paginator();n&&(this.dataSource.paginator=n)})}isSelected(n){return this.selection.isSelected(n)}toggleRow(n){this.selection.toggle(n),this.selectionChange.emit(this.selection.selected)}isAllSelected(){return this.dataSource.data.length>0&&this.selection.selected.length===this.dataSource.data.length}hasSelection(){return this.selection.selected.length>0}toggleAll(){this.isAllSelected()?this.selection.clear():this.selection.select(...this.dataSource.data),this.selectionChange.emit(this.selection.selected)}static ɵfac=function(e){return new(e||t)};static ɵcmp=EE({type:t,selectors:[[`app-data-table`]],viewQuery:function(e,a){e&1&&Yp(a.sort,b,5)(a.paginator,ne,5),e&2&&mD(2)},inputs:{columns:[1,`columns`],data:[1,`data`],loading:[1,`loading`],emptyMessage:[1,`emptyMessage`],pageSize:[1,`pageSize`],selectable:[1,`selectable`],editable:[1,`editable`]},outputs:{rowClick:`rowClick`,editClick:`editClick`,selectionChange:`selectionChange`},decls:4,vars:1,consts:[[1,`data-table`],[1,`data-table__skeleton`],[1,`data-table__empty`],[1,`skeleton-row`],[1,`data-table__empty-icon`],[`mat-table`,``,`matSort`,``,1,`data-table__table`,3,`dataSource`],[3,`matColumnDef`],[`mat-header-row`,``,4,`matHeaderRowDef`],[`mat-row`,``,`class`,`data-table__row`,3,`click`,4,`matRowDef`,`matRowDefColumns`],[`showFirstLastButtons`,``,3,`pageSize`,`pageSizeOptions`],[`mat-header-cell`,``,4,`matHeaderCellDef`],[`mat-cell`,``,3,`click`,4,`matCellDef`],[`mat-header-cell`,``],[`aria-label`,`בחירת כל השורות`,3,`change`,`checked`,`indeterminate`],[`mat-cell`,``,3,`click`],[`aria-label`,`בחירת שורה`,3,`change`,`checked`],[`mat-header-cell`,``,`mat-sort-header`,``,3,`disabled`,4,`matHeaderCellDef`],[`mat-cell`,``,4,`matCellDef`],[`mat-header-cell`,``,`mat-sort-header`,``,3,`disabled`],[`mat-cell`,``],[3,`status`],[`mat-icon-button`,``,`type`,`button`,`aria-label`,`עריכה`,`title`,`עריכה`,1,`data-table__edit`,3,`click`],[`mat-header-row`,``],[`mat-row`,``,1,`data-table__row`,3,`click`]],template:function(e,a){e&1&&(Ei(0,`div`,0),WE(1,Je,3,0,`div`,1)(2,Xe,5,1,`div`,2)(3,ut,8,8),Bc()),e&2&&(Bv(),GE(a.loading()?1:a.data().length===0?2:3))},dependencies:[ci,Jt,ti,ri,ii,ei,si,oi,ni,ai,li,ze,b,Be,Ye$1,ne,yt,wt,Xw,nf,pe,ce,p],styles:[`.data-table[_ngcontent-%COMP%], .data-table__table[_ngcontent-%COMP%]{width:100%}.data-table__row[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .1s ease}.data-table__row[_ngcontent-%COMP%]:hover{background-color:var(--%NS%mat-sys-surface-container-low)}.data-table__empty[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:8px;padding:48px 16px;color:var(--%NS%mat-sys-on-surface-variant)}.data-table__empty-icon[_ngcontent-%COMP%]{font-size:40px;width:40px;height:40px;opacity:.6}.data-table__skeleton[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;padding:16px 0}.skeleton-row[_ngcontent-%COMP%]{height:40px;border-radius:8px;background:linear-gradient(90deg,var(--%NS%mat-sys-surface-container-low) 25%,var(--%NS%mat-sys-surface-container) 37%,var(--%NS%mat-sys-surface-container-low) 63%);background-size:400% 100%;animation:_ngcontent-%COMP%_skeleton-shimmer 1.4s ease infinite}@keyframes _ngcontent-%COMP%_skeleton-shimmer{0%{background-position:100% 50%}to{background-position:0 50%}}`]})};export{$e as t};