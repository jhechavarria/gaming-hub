(function(e){function t(t){for(var n,i,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"621f13f7","chunk-3e813ae3":"e1787b4d"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var u=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/gaming-hub/dist/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("1356"),a=r.n(n);a.a},1356:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:""}},[r("v-app-bar",{attrs:{app:""}},[r("v-toolbar-title",{staticClass:"headline text-uppercase"},[r("span",[e._v("Vuetify")]),r("span",{staticClass:"font-weight-light"},[e._v("MATERIAL DESIGN")])]),r("v-spacer"),r("v-btn",{attrs:{text:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[r("span",{staticClass:"mr-2"},[e._v("Latest Release")])])],1),r("v-content",[r("router-view")],1)],1)},o=[],i={name:"App",data:()=>({})},s=i,l=(r("034f"),r("2877")),u=r("6544"),c=r.n(u),p=r("7496"),f=r("40dc"),d=r("8336"),g=r("a75b"),h=r("2fa4"),b=r("2a7f"),v=Object(l["a"])(s,a,o,!1,null,null,null),m=v.exports;c()(v,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VContent:g["a"],VSpacer:h["a"],VToolbarTitle:b["a"]});var y=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Home")]),r("v-btn",{attrs:{to:"/about"}},[e._v("About")]),r("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[e._v("Dilema")]),r("v-dialog",{attrs:{"full-width":""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{staticClass:"iframe-container"},[r("iframe",{attrs:{src:"https://jhechavarria.github.com/gaming-hub/games/dilema"}})])],1)],1)},_=[],j=r("bc3a"),k=r.n(j),O={data:()=>{return{dialog:!1,games:{}}},created(){k.a.get(this.$store.getters["games/base_url"]+"/gameslist.json").then(e=>{console.log(typeof e),console.log(e)}).catch(console.error)}},x=O,A=r("b0af"),P=r("169a"),V=Object(l["a"])(x,w,_,!1,null,null,null),C=V.exports;c()(V,{VBtn:d["a"],VCard:A["a"],VDialog:P["a"]}),n["a"].use(y["a"]);var S=new y["a"]({mode:"history",base:"/gaming-hub/dist/",routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:()=>r.e("about").then(r.bind(null,"f820"))}]}),E=r("2f62"),T={},M={base_url:e=>e.base_url},B={},L={base_url:"https://jhechavarria.github.com/gaming-hub"},N={namespaced:!0,actions:T,getters:M,mutations:B,state:L};n["a"].use(E["a"]);var $=new E["a"].Store({modules:{games:N}}),D=r("9483");Object(D["a"])("/gaming-hub/dist/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var q=r("f309");n["a"].use(q["a"]);var F=new q["a"]({icons:{iconfont:"mdi"}});r.e("chunk-3e813ae3").then(r.t.bind(null,"54ba",7)),n["a"].config.productionTip=!1,new n["a"]({router:S,store:$,vuetify:F,render:e=>e(m)}).$mount("#app")}});
//# sourceMappingURL=app.faf7449a.js.map