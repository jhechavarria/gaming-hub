(function(e){function t(t){for(var n,s,l=t[0],i=t[1],c=t[2],u=0,m=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);g&&g(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},o=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e1f26":"e9e7ac04","chunk-2d0e95df":"8a26c40d","chunk-2d20811b":"55e475d0","chunk-2d22d746":"5cc847a3","chunk-3e813ae3":"e1787b4d"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=s(e);var c=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}r[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/gaming-hub/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var g=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("1356"),r=a.n(n);r.a},1356:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"grey lighten-4"},[a("Navbar",{attrs:{gamesList:e.games}}),a("v-content",[a("router-view")],1),a("v-overlay",{model:{value:e.overlay,callback:function(t){e.overlay=t},expression:"overlay"}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{attrs:{app:"","collapse-on-scroll":"","elevate-on-scroll":""}},[a("v-toolbar-title",{staticClass:"text-uppercase grey-text"},[a("span",{staticClass:"font-weight-light"},[e._v("Gaming")]),a("span",[e._v("Hub")])]),a("div",{staticClass:"flex-grow-1"}),a("v-tabs",{attrs:{centered:""}},[a("v-tab",{attrs:{to:"/"}},[e._v("Home")]),a("v-tab",{attrs:{to:"/games"}},[e._v("Games")]),a("v-tab",{attrs:{to:"/about"}},[e._v("About")])],1),a("div",{staticClass:"flex-grow-1"}),e.search?a("v-autocomplete",{attrs:{loading:e.loading,items:e.games,clearable:"","hide-details":"",label:"Search for a game..."},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}):e._e(),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.search=!e.search}}},[a("v-icon",[e._v("mdi-magnify")])],1)],1)],1)},l=[],i={props:["gamesList"],data:()=>({search:!1,select:null,loading:!1,games:[]}),watch:{gamesList(e){for(let t in e)this.games.push({value:t,text:e[t].name})},select(e){this.$router.push({name:"game",params:{game:e}}),this.select=null,this.search=!1}}},c=i,u=a("2877"),g=a("6544"),m=a.n(g),p=a("40dc"),d=a("c6a6"),h=a("8336"),f=a("132d"),v=a("71a3"),b=a("fe57"),y=a("2a7f"),_=Object(u["a"])(c,s,l,!1,null,"2d6f7682",null),w=_.exports;m()(_,{VAppBar:p["a"],VAutocomplete:d["a"],VBtn:h["a"],VIcon:f["a"],VTab:v["a"],VTabs:b["a"],VToolbarTitle:y["a"]});var k={name:"App",components:{Navbar:w},data:()=>({overlay:!0,games:{}}),created(){this.$store.dispatch("games/load").then(e=>{this.games=this.$store.getters["games/games"],this.overlay=!1,console.log("LOADED")}).catch(console.error)}},j=k,E=(a("034f"),a("7496")),O=a("a75b"),x=a("a797"),P=a("490a"),A=Object(u["a"])(j,r,o,!1,null,null,null),T=A.exports;m()(A,{VApp:E["a"],VContent:O["a"],VOverlay:x["a"],VProgressCircular:P["a"]});var S=a("8c4f"),V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Home")])])}],G=a("bc3a"),$=a.n(G),M=a("2f62"),L={name:"Home",data:()=>{return{dialog:!1}},computed:{...Object(M["b"])({games:"games/games"})}},R=L,q=Object(u["a"])(R,V,C,!1,null,null,null),N=q.exports;n["a"].use(S["a"]);var H=new S["a"]({mode:"history",base:"/gaming-hub/",routes:[{path:"/",name:"home",component:N},{path:"/about",name:"about",component:()=>a.e("chunk-2d22d746").then(a.bind(null,"f820"))},{path:"/games",name:"games",component:()=>a.e("chunk-2d20811b").then(a.bind(null,"a2e9"))},{path:"/game/:game",name:"game",component:()=>a.e("chunk-2d0e1f26").then(a.bind(null,"7d36"))},{path:"*",name:"404",component:()=>a.e("chunk-2d0e95df").then(a.bind(null,"8cdb"))}]}),I={load(e){return new Promise((t,a)=>{var n=0;$.a.get(e.getters["base_url"]+"/gameslist.json").then(({data:r})=>{e.dispatch("_keepUnique",r.games);let o=r.games;for(let s in o){let r=o[s];$.a.get(e.getters["base_url"]+"/games/"+r+"/manifest.json").then(({data:a})=>{if("object"!==typeof a)return n+=1,void(n===o.length&&t(!0));e.commit("REGISTER_GAME",[r,a]),n+=1,n===o.length&&t(!0)}).catch(a)}}).catch(a)})},paginated:(e,{page:t,itemsPerPage:a}={page:1,itemsPerPage:10})=>{return console.log(t,a),new Promise((n,r)=>{var o=0;$.a.get(e.getters["base_url"]+"/gameslist.json").then(({data:s})=>{e.dispatch("_keepUnique",s.games);let l=s.games;l=l.splice(t*a-a,a);for(let t in l){let a=l[t];void 0===e.getters["games"][a]?$.a.get(e.getters["base_url"]+"/games/"+a+"/manifest.json").then(({data:t})=>{if("object"!==typeof t)return o+=1,void(o===l.length&&n(!0));e.commit("REGISTER_GAME",[a,t]),o+=1,o===l.length&&n(!0)}).catch(r):(o+=1,o===l.length&&n(!0))}}).catch(r)})},_keepUnique(e,t){for(let a in t)for(let e in t)t[e]===t[a]&&a!==e&&t.splice(e,1)}},B={base_url:e=>e.base_url,games:e=>e.games,page:e=>(t,a=10)=>{let n=e.games;return n.splice(t*a-a,a)},game:e=>t=>{return void 0!==e.games[t]?e.games[t]:null}},U={REGISTER_GAME:(e,t)=>{e.games[t[0]]=t[1]}},D={base_url:"https://raw.githubusercontent.io/jhechavarria/gaming-hub/master",games:{}},F={namespaced:!0,actions:I,getters:B,mutations:U,state:D};n["a"].use(M["a"]);var J=new M["a"].Store({modules:{games:F}}),z=a("9483");Object(z["a"])("/gaming-hub/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var K=a("f309");n["a"].use(K["a"]);var Q=new K["a"]({icons:{iconfont:"mdi"}});a.e("chunk-3e813ae3").then(a.t.bind(null,"54ba",7)),n["a"].config.productionTip=!1,new n["a"]({router:H,store:J,vuetify:Q,render:e=>e(T)}).$mount("#app")}});
//# sourceMappingURL=app.69865da2.js.map