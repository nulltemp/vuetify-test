(function(){"use strict";var t={5189:function(t,r,e){e(6992),e(8674),e(9601),e(7727);var l=e(144),a=e(5464),n=e.n(a),o=function(){var t=this,r=t._self._c;return r("v-app",{attrs:{id:"app"}},[r("v-toolbar",{staticClass:"toolbar"},[r("v-toolbar-title",[t._v("Vuetify")]),r("v-spacer"),r("v-toolbar-items",t._l(t.items,(function(e,l){return r("v-btn",{key:l,attrs:{to:e.val,flat:""}},[t._v(" "+t._s(e.val)+" ")])})),1)],1),r("v-content",[r("router-view")],1),r("v-footer",{attrs:{dark:""}},[r("v-spacer"),r("privacy-policy")],1)],1)},v=[],s=function(){var t=this,r=t._self._c;return r("div",[r("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var l=e.on;return[r("v-btn",t._g({attrs:{text:""}},l),[t._v("Privacy Policy")])]}}]),model:{value:t.dialog,callback:function(r){t.dialog=r},expression:"dialog"}},[r("v-card",[r("v-card-title",[t._v("Privacy Policy")]),r("v-card-text",[r("h3",[t._v("当サイトが利用しているアクセス解析ツールについて")]),r("br"),r("p",[t._v(" 当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。 ")]),r("p",[t._v(" このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。 ")]),r("p",[t._v(" このトラフィックデータは匿名で収集されており、個人を特定するものではありません。 ")]),r("p",[t._v(" この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。 ")])]),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{on:{click:function(r){t.dialog=!1}}},[t._v(" 閉じる ")])],1)],1)],1)],1)},c=[],i={data:function(){return{dialog:!1}}},u=i,f=e(1001),d=(0,f.Z)(u,s,c,!1,null,null,null),_=d.exports,p={name:"App",components:{PrivacyPolicy:_},data:function(){return{items:[{val:"align"},{val:"alignContent"},{val:"dType"},{val:"fluid"},{val:"gridList"},{val:"justify"},{val:"rowcolumn"},{val:"wrap"}]}}},x=p,b=(0,f.Z)(x,o,v,!1,null,null,null),y=b.exports,g=e(8345),h=function(){var t=this,r=t._self._c;return r("div",{staticClass:"hello"},[r("h1",[t._v(t._s(t.msg))])])},m=[],w={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},k=w,C=(0,f.Z)(k,h,m,!1,null,"361f3abc",null),j=C.exports,O=function(){var t=this,r=t._self._c;return r("div",t._l(t.items,(function(e){return r("v-container",{key:e.val},[r("v-layout",{class:e.val},[r("v-flex",[r("v-card",[t._v(" "+t._s(e.val)+" ")])],1),r("v-flex",[r("v-card",{attrs:{color:"red"}},[t._v(" red ")])],1),r("v-flex",[r("v-card",{staticClass:"blue",attrs:{color:"blue"}},[t._v(" blue ")])],1)],1)],1)})),1)},Z=[],P={data:function(){return{items:[{val:"align-baseline"},{val:"align-start"},{val:"align-center"},{val:"align-end"}]}}},T=P,S=(0,f.Z)(T,O,Z,!1,null,"28abb7b0",null),G=S.exports,M=function(){var t=this,r=t._self._c;return r("div",t._l(t.items,(function(e){return r("v-container",{key:e.val},[r("v-layout",{staticClass:"background",class:e.val,attrs:{wrap:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-card",{attrs:{color:"white"}},[t._v(" "+t._s(e.val)+" ")])],1),r("v-flex",{attrs:{xs5:""}},[r("v-card",{attrs:{color:"red"}},[t._v(" red ")])],1),r("v-flex",{attrs:{xs5:""}},[r("v-card",{attrs:{color:"blue"}},[t._v(" blue ")])],1),r("v-flex",{attrs:{xs5:""}},[r("v-card",{attrs:{color:"yellow"}},[t._v(" yellow ")])],1)],1)],1)})),1)},A=[],L={data:function(){return{items:[{val:"align-content-center"},{val:"align-content-start"},{val:"align-content-end"},{val:"align-content-space-around"},{val:"align-content-space-between"}]}}},V=L,W=(0,f.Z)(V,M,A,!1,null,"414fdc6e",null),E=W.exports,F=function(){var t=this,r=t._self._c;return r("div",t._l(t.items,(function(e){return r("v-container",{key:e.val},[r("v-layout",{class:e.val},[r("v-flex",[r("v-card",[t._v(" "+t._s(e.val)+" ")])],1),r("v-flex",[r("v-card",{attrs:{color:"red"}},[t._v(" red ")])],1),r("v-flex",[r("v-card",{attrs:{color:"blue"}},[t._v(" blue ")])],1)],1)],1)})),1)},H=[],Y={data:function(){return{items:[{val:"d-inline-flex"},{val:"d-flex"},{val:"d-inline-block"}]}}},$=Y,q=(0,f.Z)($,F,H,!1,null,null,null),z=q.exports,B=function(){var t=this,r=t._self._c;return r("div",[r("v-container",{staticClass:"background"},[r("v-layout",[r("v-flex",[r("v-card",{attrs:{color:"white"}},[t._v(" none ")])],1)],1)],1),r("v-container",{staticClass:"fluid-background",attrs:{fluid:""}},[r("v-layout",[r("v-flex",[r("v-card",{attrs:{color:"white"}},[t._v(" flued ")])],1)],1)],1)],1)},D=[],I={},J=(0,f.Z)(I,B,D,!1,null,"699731a2",null),K=J.exports,N=function(){var t=this,r=t._self._c;return r("div",t._l(t.items,(function(e){return r("v-container",{key:e.val,class:e.val},[r("v-layout",[r("v-flex",[r("v-card",[t._v(" "+t._s(e.val)+" ")])],1),r("v-flex",[r("v-card",{attrs:{color:"red"}},[t._v(" red ")])],1),r("v-flex",[r("v-card",{staticClass:"blue",attrs:{color:"blue"}},[t._v(" blue ")])],1)],1)],1)})),1)},Q=[],R={data:function(){return{items:[{val:"grid-list-xs"},{val:"grid-list-sm"},{val:"grid-list-md"},{val:"grid-list-lg"},{val:"grid-list-xl"}]}}},U=R,X=(0,f.Z)(U,N,Q,!1,null,"12cbe82c",null),tt=X.exports,rt=function(){var t=this,r=t._self._c;return r("div",t._l(t.items,(function(e){return r("v-container",{key:e.val,staticClass:"background"},[r("v-layout",{class:e.val},[r("v-flex",{attrs:{xs2:""}},[r("v-card",{attrs:{color:"white"}},[t._v(" "+t._s(e.val)+" ")])],1),r("v-flex",{attrs:{xs2:""}},[r("v-card",{attrs:{color:"red"}},[t._v(" red ")])],1),r("v-flex",{attrs:{xs2:""}},[r("v-card",{staticClass:"blue",attrs:{color:"blue"}},[t._v(" blue ")])],1)],1)],1)})),1)},et=[],lt={data:function(){return{items:[{val:"justify-start"},{val:"justify-center"},{val:"justify-end"},{val:"justify-space-around"},{val:"justify-space-between"}]}}},at=lt,nt=(0,f.Z)(at,rt,et,!1,null,"7378e7a4",null),ot=nt.exports,vt=function(){var t=this,r=t._self._c;return r("div",t._l(t.items,(function(e){return r("v-container",{key:e.val},[r("v-layout",{class:e.val},[r("v-flex",[r("v-card",[t._v(" "+t._s(e.val)+" ")])],1),r("v-flex",[r("v-card",{attrs:{color:"red"}},[t._v(" red ")])],1),r("v-flex",[r("v-card",{staticClass:"blue",attrs:{color:"blue"}},[t._v(" blue ")])],1)],1)],1)})),1)},st=[],ct={data:function(){return{items:[{val:"row"},{val:"row reverse"},{val:"column"},{val:"column reverse"}]}}},it=ct,ut=(0,f.Z)(it,vt,st,!1,null,"1007dfb4",null),ft=ut.exports,dt=function(){var t=this,r=t._self._c;return r("div",[r("v-container",[r("v-layout",{staticClass:"background"},[r("v-flex",{attrs:{xs2:""}},[r("v-card",{attrs:{color:"white"}},[t._v(" none ")])],1),r("v-flex",{attrs:{xs5:""}},[r("v-card",{attrs:{color:"red"}},[t._v(" red ")])],1),r("v-flex",{attrs:{xs5:""}},[r("v-card",{attrs:{color:"blue"}},[t._v(" blue ")])],1),r("v-flex",{attrs:{xs5:""}},[r("v-card",{attrs:{color:"yellow"}},[t._v(" yellow ")])],1)],1)],1),r("v-container",[r("v-layout",{staticClass:"background",attrs:{wrap:""}},[r("v-flex",{attrs:{xs2:""}},[r("v-card",{attrs:{color:"white"}},[t._v(" wrap ")])],1),r("v-flex",{attrs:{xs5:""}},[r("v-card",{attrs:{color:"red"}},[t._v(" red ")])],1),r("v-flex",{attrs:{xs5:""}},[r("v-card",{attrs:{color:"blue"}},[t._v(" blue ")])],1),r("v-flex",{attrs:{xs5:""}},[r("v-card",{attrs:{color:"yellow"}},[t._v(" yellow ")])],1)],1)],1)],1)},_t=[],pt={},xt=(0,f.Z)(pt,dt,_t,!1,null,"5295e076",null),bt=xt.exports;l["default"].use(g.Z);var yt=new g.Z({mode:"history",base:"/vuetify-test/",routes:[{path:"/",component:j},{path:"/align",component:G},{path:"/alignContent",component:E},{path:"/dType",component:z},{path:"/fluid",component:K},{path:"/gridList",component:tt},{path:"/justify",component:ot},{path:"/rowcolumn",component:ft},{path:"/wrap",component:bt}]});e(8556);l["default"].config.productionTip=!1,l["default"].use(n()),new l["default"]({router:yt,render:function(t){return t(y)}}).$mount("#app")}},r={};function e(l){var a=r[l];if(void 0!==a)return a.exports;var n=r[l]={exports:{}};return t[l].call(n.exports,n,n.exports,e),n.exports}e.m=t,function(){var t=[];e.O=function(r,l,a,n){if(!l){var o=1/0;for(i=0;i<t.length;i++){l=t[i][0],a=t[i][1],n=t[i][2];for(var v=!0,s=0;s<l.length;s++)(!1&n||o>=n)&&Object.keys(e.O).every((function(t){return e.O[t](l[s])}))?l.splice(s--,1):(v=!1,n<o&&(o=n));if(v){t.splice(i--,1);var c=a();void 0!==c&&(r=c)}}return r}n=n||0;for(var i=t.length;i>0&&t[i-1][2]>n;i--)t[i]=t[i-1];t[i]=[l,a,n]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var l in r)e.o(r,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,l){var a,n,o=l[0],v=l[1],s=l[2],c=0;if(o.some((function(r){return 0!==t[r]}))){for(a in v)e.o(v,a)&&(e.m[a]=v[a]);if(s)var i=s(e)}for(r&&r(l);c<o.length;c++)n=o[c],e.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return e.O(i)},l=self["webpackChunkvuetify_test"]=self["webpackChunkvuetify_test"]||[];l.forEach(r.bind(null,0)),l.push=r.bind(null,l.push.bind(l))}();var l=e.O(void 0,[998],(function(){return e(5189)}));l=e.O(l)})();
//# sourceMappingURL=app-legacy.7a1a51d7.js.map