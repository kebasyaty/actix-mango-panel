(function(e){function t(t){for(var i,a,r=t[0],c=t[1],l=t[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var r=n[a];0!==s[r]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},a={app:0},s={app:0},o=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-54b2b4a8":"94884510","chunk-c552551c":"cf8ccf23","chunk-207d5f71":"e812fb0a","chunk-85a819ce":"13aa50dd","chunk-b6ef9416":"c6530988"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-c552551c":1,"chunk-207d5f71":1,"chunk-85a819ce":1,"chunk-b6ef9416":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-54b2b4a8":"31d6cfe0","chunk-c552551c":"eb111a12","chunk-207d5f71":"9deb4d24","chunk-85a819ce":"0e954629","chunk-b6ef9416":"b7e762e7"}[e]+".css",s=c.p+i,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===i||u===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var i=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete a[e],m.parentNode.removeChild(m),n(o)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var i=s[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,n){i=s[e]=[t,n]}));t.push(i[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var n=s[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,n[1](d)}s[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/admin-contrib/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.isAuthenticated?[n("NavigationBar"),n("AppBar")]:e._e(),n("v-main",[n("router-view")],1)],2)},s=[],o=n("2f62"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"pa-1",attrs:{app:"",width:e.updatePanelWidthServiceList},model:{value:e.updateOpenPanelServiceList,callback:function(t){e.updateOpenPanelServiceList=t},expression:"updateOpenPanelServiceList"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[e._v("Сompany Name")]),n("v-list-item-subtitle",[e._v("Brief description of the company.")])],1)],1),n("v-list-item",{staticClass:"panel-width-service-list pl-1"},[n("v-list-item-content",[n("v-slider",{staticClass:"panel-width-service-list__slider",attrs:{dense:"","hide-details":"","prepend-icon":"mdi-arrow-split-vertical",min:"256",max:"600"},model:{value:e.updatePanelWidthServiceList,callback:function(t){e.updatePanelWidthServiceList=t},expression:"updatePanelWidthServiceList"}})],1)],1),n("v-expansion-panels",{staticClass:"service-list"},e._l(e.serviceList,(function(t,i){return n("v-expansion-panel",{key:t.service.title},[n("v-expansion-panel-header",{staticClass:"text-subtitle-1 font-weight-medium pl-0"},[n("div",{staticClass:"pl-1 service-list__icon"},[n("v-icon",{staticClass:"pos-relative pos-top-n2",domProps:{textContent:e._s("mdi-"+t.service.icon)}})],1),n("span",{},[e._v(e._s(t.service.title))])]),n("v-expansion-panel-content",{staticClass:"service-list__content"},[n("v-list",{attrs:{shaped:"",dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedService[i],callback:function(t){e.$set(e.selectedService,i,t)},expression:"selectedService[indexService]"}},e._l(t.collections,(function(a,s){return n("v-list-item",{key:a.model_key,staticClass:"px-1",attrs:{to:e.createUrlDocumentList(t.service.title,a.title,i,s)},on:{click:function(t){return e.resetPreActivatedService(i)}}},[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",[e._v("mdi-circle-medium")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-subtitle-1 font-weight-regular",domProps:{textContent:e._s(a.title)}})],1)],1)})),1)],1)],1)],1)})),1)],1)},c=[],l=n("d3bd"),u=n.n(l),d={name:"NavigationBar",computed:{...Object(o["c"])(["openPanelServiceList","panelWidthServiceList","selectedService","serviceList"]),updateOpenPanelServiceList:{get:function(){return this.openPanelServiceList},set:function(e){this.setOpenPanelServiceList(e)}},updatePanelWidthServiceList:{get:function(){return this.panelWidthServiceList},set:function(e){this.setPanelWidthServiceList(e)}}},methods:{...Object(o["b"])(["setOpenPanelServiceList","setPanelWidthServiceList","setSelectedService"]),resetPreActivatedService:function(e){this.setSelectedService(this.selectedService.map((function(t,n){return n!==e&&(t=void 0),t})))},createUrlDocumentList:function(e,t,n,i){const a=this.$i18n.locale,s=u()(e,{locale:a}),o=u()(t,{locale:a});return`/${s}/${n}/${o}/${i}/document-list`}}},m=d,p=n("2877"),v=n("6544"),h=n.n(v),f=n("cd55"),b=n("49e2"),g=n("c865"),S=n("0393"),_=n("132d"),k=n("8860"),y=n("da13"),L=n("5d23"),P=n("1baa"),x=n("34c3"),C=n("f774"),w=n("ba0d"),O=Object(p["a"])(m,r,c,!1,null,null,null),A=O.exports;h()(O,{VExpansionPanel:f["a"],VExpansionPanelContent:b["a"],VExpansionPanelHeader:g["a"],VExpansionPanels:S["a"],VIcon:_["a"],VList:k["a"],VListItem:y["a"],VListItemContent:L["a"],VListItemGroup:P["a"],VListItemIcon:x["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VNavigationDrawer:C["a"],VSlider:w["a"]});var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",dense:"",fixed:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){return e.setOpenPanelServiceList(!e.openPanelServiceList)}}}),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",href:e.homeUrl}},"v-btn",a,!1),i),[n("v-icon",[e._v("mdi-reload")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.0")))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},"v-btn",a,!1),i),[n("v-icon",[e._v("mdi-brightness-4")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.1")))])]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.logout}},"v-btn",a,!1),i),[n("v-icon",[e._v("mdi-logout")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.2")))])])],1)},$=[],j={name:"AppBar",data:()=>({homeUrl:"/admin",panelServiceList:null}),computed:{...Object(o["c"])(["openPanelServiceList"])},methods:{...Object(o["b"])(["setUsername","setIsAuthenticated","setOpenPanelServiceList"]),logout(){this.axios.post("/admin/logout",{}).then(e=>{this.setUsername(".."),this.setIsAuthenticated(!1)}).catch(e=>{console.log(e)})}}},I=j,E=n("40dc"),B=n("5bc1"),N=n("8336"),T=n("2fa4"),U=n("3a2f"),W=Object(p["a"])(I,V,$,!1,null,null,null),D=W.exports;h()(W,{VAppBar:E["a"],VAppBarNavIcon:B["a"],VBtn:N["a"],VIcon:_["a"],VSpacer:T["a"],VTooltip:U["a"]});var q={name:"App",components:{NavigationBar:A,AppBar:D},computed:{...Object(o["c"])(["isStart","username","isAuthenticated"])},watch:{isAuthenticated:function(e){this.isStart?this.setIsStart(!1):e?(this.$session.start(),this.$session.set("username",this.username),this.$router.push({name:"home"})):(this.$session.destroy(),this.$router.push("/sign-in"))}},methods:{...Object(o["b"])(["setIsStart","setUsername","setIsAuthenticated"])},created(){this.$session.exists()?(this.setUsername(this.$session.get("username")),this.setIsAuthenticated(!0)):(this.setIsStart(!1),this.setUsername(".."))}},R=q,M=(n("034f"),n("7496")),H=n("f6c4"),F=Object(p["a"])(R,a,s,!1,null,null,null),G=F.exports;h()(F,{VApp:M["a"],VMain:H["a"]});var J=n("a925"),K=n("8c4f"),z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-row",{staticClass:"text-center"},[i("v-col",{staticClass:"mt-16 mb-5",attrs:{cols:"12"}},[i("v-img",{attrs:{src:n("9b19"),contain:"",height:"140"}})],1),i("v-col",{attrs:{cols:"12"}},[i("h1",{staticClass:"text-h4 font-weight-bold mb-3",domProps:{textContent:e._s(e.$t("message.11")+", "+e.username+".")}}),i("p",{staticClass:"text-h5 font-weight-regular orange--text",domProps:{textContent:e._s(e.$t("message.12"))}})])],1)],1)},Q=[],X={name:"Home",computed:{...Object(o["c"])(["username"])}},Y=X,Z=n("62ad"),ee=n("a523"),te=n("adda"),ne=n("0fd9"),ie=Object(p["a"])(Y,z,Q,!1,null,null,null),ae=ie.exports;h()(ie,{VCol:Z["a"],VContainer:ee["a"],VImg:te["a"],VRow:ne["a"]}),i["a"].use(K["a"]);const se=[{path:"/",name:"home",component:ae,meta:{authRequired:!0}},{path:"/sign-in",name:"signin",component:()=>Promise.all([n.e("chunk-c552551c"),n.e("chunk-207d5f71")]).then(n.bind(null,"4a33"))},{path:"/:service/:indexService/:collection/:indexCollection/document-list",name:"documentList",component:()=>Promise.all([n.e("chunk-c552551c"),n.e("chunk-85a819ce")]).then(n.bind(null,"898f")),meta:{authRequired:!0}},{path:"/:service/:indexService/:collection/:indexCollection/document/:indexDoc",name:"documenForm",component:()=>Promise.all([n.e("chunk-c552551c"),n.e("chunk-b6ef9416")]).then(n.bind(null,"ab20")),meta:{authRequired:!0}},{path:"*",name:"notFound",component:()=>n.e("chunk-54b2b4a8").then(n.bind(null,"9703")),meta:{authRequired:!0}}],oe=new K["a"]({mode:"history",base:"/admin/",routes:se});oe.beforeEach((e,t,n)=>{e.matched.some(e=>e.meta.authRequired)?i["a"].prototype.$session.exists()?n():n({path:"/sign-in"}):n()});var re=oe,ce={setIsStart(e,t){e.isStart=t},setIsAuthenticated(e,t){e.isAuthenticated=t},setUsername(e,t){e.username=t},setOpenPanelServiceList(e,t){e.openPanelServiceList=t},setPanelWidthServiceList(e,t){e.panelWidthServiceList=t},setSelectedService(e,t){e.selectedService=t},setServiceList(e,t){e.serviceList=t}},le={},ue={namespaced:!0,state:{headers:[{title:"Title"},{nickname:"Nickname"}],documents:[{hash:"h1",title:"Название документа 1",nickname:"rust"},{hash:"h2",title:"Document name 2",nickname:"rust2"},{hash:"h3",title:"Document name 3",nickname:"rust3"}]},getters:{},mutations:{setHeaders(e,t){e.headers=t},setDocuments(e,t){e.documents=t}},actions:{}};i["a"].use(o["a"]);var de=new o["a"].Store({state:{isStart:!0,isAuthenticated:!1,username:"..",openPanelServiceList:null,panelWidthServiceList:360,selectedService:[void 0,void 0,void 0],serviceList:[{service:{title:"Название сервиса 1",icon:"laptop"},collections:[{title:"Название коллекции 1.1",model_key:"1"},{title:"Collection name 1.2",model_key:"2"},{title:"Collection name 1.3",model_key:"3"}]},{service:{title:"Service name 2",icon:"cellphone"},collections:[{title:"Collection name 2.1",model_key:"4"},{title:"Collection name 2.2",model_key:"5"},{title:"Collection name 2.3",model_key:"6"}]},{service:{title:"Service name 3",icon:"wifi"},collections:[{title:"Collection name 3.1",model_key:"7"},{title:"Collection name 3.2",model_key:"8"},{title:"Collection name 3.3",model_key:"9"}]}]},mutations:ce,actions:le,modules:{documentList:ue}}),me={message:{0:"Reload panel",1:"Light or Dark theme",2:"Logout",3:"Search",4:"Is delete selected documents ?",5:"Username",6:"Password",7:"Username is required.",8:"Password is required.",9:"Sign in",10:"Clear",11:"Welcome",12:"Good luck on your business !",13:"Delete document",14:"Save and create a new document",15:"Save and continue editing the document",16:"Save document",17:"Time",18:"Close",19:"Save",20:"Remove irrelevant items",21:"Delete",22:"Add new list item",23:"Title",24:"Value",25:"Create a new document",26:"New document",27:"Access denied",28:"Access allowed"}},pe={message:{0:"Перезагрузить панель",1:"Светлая или темная тема",2:"Выйти",3:"Поиск",4:"Удалить выбранные документы ?",5:"Имя пользователя",6:"Пароль",7:"Требуется имя пользователя.",8:"Требуется пароль.",9:"Войти",10:"Очистить",11:"Добро пожаловать",12:"Успеха Вам, в ваших делах !",13:"Удалить документ",14:"Сохранить и создать новый документ",15:"Сохранить и продолжить редактировать документ",16:"Сохранить документ",17:"Время",18:"Закрыть",19:"Сохранить",20:"Удалите ненужные элементы",21:"Удалить",22:"Добавить новый элемент списка",23:"Название",24:"Значение",25:"Создать новый документ",26:"Новый документ",27:"В доступе отказано",28:"Доступ разрешен"}},ve={en:me,ru:pe},he=n("f309");i["a"].use(he["a"]);const fe={icons:{iconfont:"mdi"}};var be=new he["a"](fe),ge=(n("744d"),n("bc3a")),Se=n.n(ge),_e=n("2106"),ke=n.n(_e),ye=n("0628"),Le=n.n(ye);i["a"].config.productionTip=!1,i["a"].config.devtools=!1,i["a"].config.debug=!1,i["a"].config.silent=!0,i["a"].use(J["a"]),i["a"].use(ke.a,Se.a),i["a"].use(Le.a,{persist:!0});const Pe=new J["a"]({locale:"en",fallbackLocale:"en",messages:ve});new i["a"]({router:re,store:de,i18n:Pe,vuetify:be,render:e=>e(G)}).$mount("#app")},"744d":function(e,t,n){},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.ffa5eefe.svg"}});
//# sourceMappingURL=app.73796940.js.map