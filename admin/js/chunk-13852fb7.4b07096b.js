(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13852fb7"],{1219:function(t,e,n){},"17b3":function(t,e,n){},"28a0":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},3022:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},i=/%[sdj%]/g;e.format=function(t){if(!$(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,o=r.length,s=String(t).replace(i,(function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}})),c=r[n];n<o;c=r[++n])y(c)||!_(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(n,r){if("undefined"!==typeof t&&!0===t.noDeprecation)return n;if("undefined"===typeof t)return function(){return e.deprecate(n,r).apply(this,arguments)};var i=!1;function o(){if(!i){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}return o};var o,s={};function a(t,n){var r={seen:[],stylize:l};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),v(n)?r.showHidden=n:n&&e._extend(r,n),P(r.showHidden)&&(r.showHidden=!1),P(r.depth)&&(r.depth=2),P(r.colors)&&(r.colors=!1),P(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),h(r,t,r.depth)}function c(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function l(t,e){return t}function u(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}function h(t,n,r){if(t.customInspect&&n&&k(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return $(i)||(i=h(t,i,r)),i}var o=p(t,n);if(o)return o;var s=Object.keys(n),a=u(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),j(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(n);if(0===s.length){if(k(n)){var c=n.name?": "+n.name:"";return t.stylize("[Function"+c+"]","special")}if(D(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return t.stylize(Date.prototype.toString.call(n),"date");if(j(n))return d(n)}var l,v="",y=!1,w=["{","}"];if(b(n)&&(y=!0,w=["[","]"]),k(n)){var x=n.name?": "+n.name:"";v=" [Function"+x+"]"}return D(n)&&(v=" "+RegExp.prototype.toString.call(n)),O(n)&&(v=" "+Date.prototype.toUTCString.call(n)),j(n)&&(v=" "+d(n)),0!==s.length||y&&0!=n.length?r<0?D(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),l=y?g(t,n,r,a,s):s.map((function(e){return f(t,n,r,a,e,y)})),t.seen.pop(),m(l,v,w)):w[0]+v+w[1]}function p(t,e){if(P(e))return t.stylize("undefined","undefined");if($(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return x(e)?t.stylize(""+e,"number"):v(e)?t.stylize(""+e,"boolean"):y(e)?t.stylize("null","null"):void 0}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function g(t,e,n,r,i){for(var o=[],s=0,a=e.length;s<a;++s)A(e,String(s))?o.push(f(t,e,n,r,String(s),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(f(t,e,n,r,i,!0))})),o}function f(t,e,n,r,i,o){var s,a,c;if(c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},c.get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),A(r,i)||(s="["+i+"]"),a||(t.seen.indexOf(c.value)<0?(a=y(n)?h(t,c.value,null):h(t,c.value,n-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n"))):a=t.stylize("[Circular]","special")),P(s)){if(o&&i.match(/^\d+$/))return a;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function m(t,e,n){var r=t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return r>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function b(t){return Array.isArray(t)}function v(t){return"boolean"===typeof t}function y(t){return null===t}function w(t){return null==t}function x(t){return"number"===typeof t}function $(t){return"string"===typeof t}function S(t){return"symbol"===typeof t}function P(t){return void 0===t}function D(t){return _(t)&&"[object RegExp]"===L(t)}function _(t){return"object"===typeof t&&null!==t}function O(t){return _(t)&&"[object Date]"===L(t)}function j(t){return _(t)&&("[object Error]"===L(t)||t instanceof Error)}function k(t){return"function"===typeof t}function C(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function L(t){return Object.prototype.toString.call(t)}function N(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(P(o)&&(o=Object({NODE_ENV:"production",BASE_URL:"/admin/contrib/"}).NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var r=t.pid;s[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else s[n]=function(){};return s[n]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=b,e.isBoolean=v,e.isNull=y,e.isNullOrUndefined=w,e.isNumber=x,e.isString=$,e.isSymbol=S,e.isUndefined=P,e.isRegExp=D,e.isObject=_,e.isDate=O,e.isError=j,e.isFunction=k,e.isPrimitive=C,e.isBuffer=n("d60a");var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function M(){var t=new Date,e=[N(t.getHours()),N(t.getMinutes()),N(t.getSeconds())].join(":");return[t.getDate(),T[t.getMonth()],e].join(" ")}function A(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",M(),e.format.apply(e,arguments))},e.inherits=n("28a0"),e._extend=function(t,e){if(!e||!_(e))return t;var n=Object.keys(e),r=n.length;while(r--)t[n[r]]=e[n[r]];return t};var E="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function I(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}function B(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var i=n.pop();if("function"!==typeof i)throw new TypeError("The last argument must be of type Function");var o=this,s=function(){return i.apply(o,arguments)};e.apply(this,n).then((function(e){t.nextTick(s,null,e)}),(function(e){t.nextTick(I,e,s)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(E&&t[E]){var e=t[E];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,E,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,i)}catch(s){n(s)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),E&&Object.defineProperty(e,E,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=E,e.callbackify=B}).call(this,n("4362"))},"898f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.serviceList.length>0?n("v-container",{attrs:{fluid:""}},[n("v-card",{staticClass:"mt-1"},[n("v-toolbar",{attrs:{dense:"",flat:""}},[n("v-btn",{attrs:{icon:""},on:{click:t.goBack}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1),n("v-card-title",{staticClass:"pt-0"},[t._v(t._s(t.collectionTitle))]),n("v-card-subtitle",[t._v(t._s(t.breadcrumbs))]),n("v-card-text",{staticClass:"pt-4"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{dense:"",clearable:"","hide-details":"",placeholder:t.$t("message.3"),"append-icon":"mdi-magnify"},on:{input:function(e){return t.documentSearch()}},model:{value:t.updateSearchQuery,callback:function(e){t.updateSearchQuery=e},expression:"updateSearchQuery"}})],1),n("v-col",{staticClass:"text-md-right",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{text:"",color:"green",to:t.docUrlNoIndex+"/new"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-file-plus-outline")]),t._v(" "+t._s(t.$t("message.25"))+" ")],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[t.docsToBeDeleted.length>0?n("v-btn",{attrs:{dark:"",color:"red darken-3"},on:{click:function(e){return t.deleteDocs()}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-close-thick")]),t._v(" "+t._s(t.$t("message.4"))+" ")],1):t._e()],1)],1),n("v-simple-table",{staticClass:"mt-4",attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("№")]),n("th",[n("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{"hide-details":"",color:"red darken-3",disabled:0===t.documents.length},on:{change:function(e){return t.markAllDocsForDeletion()}},model:{value:t.deleteAllDocsFlag,callback:function(e){t.deleteAllDocsFlag=e},expression:"deleteAllDocsFlag"}})],1),n("th",[t._v(t._s(t.serviceList[t.$route.params.indexService].collections[t.$route.params.indexCollection].doc_name.title))]),n("th",[t._v(t._s(t.$t("message.29")))]),n("th",[t._v(t._s(t.$t("message.30")))])])]),n("tbody",t._l(t.documents,(function(e,r){return n("tr",{key:r},[n("td",{staticClass:"pr-0",attrs:{width:"76"}},[t._v(t._s(r+t.progressionStep))]),n("td",{staticClass:"pr-0",attrs:{width:"76"}},[n("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{"hide-details":"",value:r,color:"red darken-3"},on:{change:function(e){return t.checkStatusListSelectedDocsDeleted()}},model:{value:t.docsToBeDeleted,callback:function(e){t.docsToBeDeleted=e},expression:"docsToBeDeleted"}})],1),n("td",[n("router-link",{attrs:{to:t.createDocumentUrl(r)}},[t._v(t._s(e.title))])],1),n("td",{attrs:{width:"160"},domProps:{innerHTML:t._s(t.formattingDate(e.created_at))}}),n("td",{attrs:{width:"160"},domProps:{innerHTML:t._s(t.formattingDate(e.updated_at))}})])})),0)]},proxy:!0}],null,!1,3070289125)})],1),n("v-card-actions",[n("v-row",[n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("div",{staticClass:"w-80 block-center"},[n("v-select",{attrs:{items:t.countPerPage,"hide-details":"",dense:""},on:{change:function(e){return t.changeDocsPerPage()}},model:{value:t.updateDocsPerPage,callback:function(e){t.updateDocsPerPage=e},expression:"updateDocsPerPage"}})],1)]),n("v-col",{attrs:{cols:"12 pb-4"}},[t.blockPagination?t._e():n("v-pagination",{attrs:{length:t.pageCount,"total-visible":5},on:{input:function(e){return t.getDocumentList()}},model:{value:t.updateCurrentPageNumber,callback:function(e){t.updateCurrentPageNumber=e},expression:"updateCurrentPageNumber"}})],1)],1)],1)],1)],1):t._e()},i=[],o=(n("5319"),n("2f62")),s=n("d3bd"),a=n.n(s),c=n("d444"),l=n.n(c),u={name:"DocumentList",data:()=>({deleteAllDocsFlag:!1,docsToBeDeleted:[],progressionStep:1,countPerPage:[10,20,30,40,50,60,70,80,90,100,500,1e3]}),computed:{...Object(o["d"])(["serviceList"]),...Object(o["d"])("documentList",["documents","currentPageNumber","pageCount","docsPerPage","searchQuery","blockPagination","blockLoadDocs"]),updateCurrentPageNumber:{get:function(){return this.currentPageNumber},set:function(t){this.deleteAllDocsFlag=!1,this.docsToBeDeleted=[],this.setCurrentPageNumber(t)}},updateSearchQuery:{get:function(){return this.searchQuery},set:function(t){this.setSearchQuery(t)}},updateDocsPerPage:{get:function(){return this.docsPerPage},set:function(t){this.setDocsPerPage(t)}},collectionTitle:function(){const t=this.$route.params.indexService,e=this.$route.params.indexCollection;return this.serviceList[t].collections[e].title},breadcrumbs:function(){const t=this.$route.params.indexService,e=this.serviceList[t].service.title;return`${e} > ${this.collectionTitle}`},docUrlNoIndex:function(){const t=this.$i18n.locale,e=this.$route.params.indexService,n=this.$route.params.indexCollection,r=this.serviceList[e],i=a()(r.service.title,{locale:t}),o=a()(this.collectionTitle,{locale:t});return`/${i}/${e}/${o}/${n}/document`}},watch:{blockLoadDocs:function(t){t||(this.deleteAllDocsFlag=!1,this.docsToBeDeleted=[])},currentPageNumber:function(t){this.progressionStep=this.docsPerPage*(t-1)+1,this.$route.query.page=t;const e=`${window.location.protocol}//${window.location.host}/admin${this.$route.path}?per=${this.docsPerPage}&page=${t}`;history.replaceState(null,null,e)}},methods:{...Object(o["c"])("documentList",["setCurrentPageNumber","setDocsPerPage","setSearchQuery"]),...Object(o["c"])("popUpMsgs",["setShowMsg"]),...Object(o["b"])("documentList",["ajaxGetDocumentList","resetPageNumberDefault"]),...Object(o["b"])("popUpMsgs",["runShowMsg"]),...Object(o["b"])("overlays",["runShowOverlayPageLockout"]),goBack(){this.setShowMsg(!1),this.$router.replace({name:"home"})},changeDocsPerPage(){const t=`${window.location.protocol}//${window.location.host}/admin${this.$route.path}?per=${this.docsPerPage}&page=${this.currentPageNumber}`;document.location.replace(t)},getDocumentList:function(){this.setShowMsg(!1),this.runShowOverlayPageLockout(!0),this.docsToBeDeleted.length>0&&(this.deleteAllDocsFlag=!1,this.docsToBeDeleted=[]),this.ajaxGetDocumentList().catch(t=>{window.console.log(t)}).then(()=>this.runShowOverlayPageLockout(!1))},documentSearch:function(){this.resetPageNumberDefault(),this.getDocumentList()},createDocumentUrl:function(t){return`${this.docUrlNoIndex}/${t}`},formattingDate:function(t){const e=new Date(t+"Z"),n=e.toLocaleDateString([this.$i18n.locale,"en"]),r=e.toLocaleTimeString().slice(0,5);return`<span class="cyan--text text--darken-2">${n}</span> <span class="orange--text text--darken-2">${r}</span>`},markAllDocsForDeletion:function(){this.docsToBeDeleted=this.deleteAllDocsFlag?l()(0,this.documents.length-1):[]},checkStatusListSelectedDocsDeleted:function(){this.deleteAllDocsFlag=this.docsToBeDeleted.length===this.documents.length},deleteDocs:function(){this.setShowMsg(!1),this.runShowOverlayPageLockout(!0);const t=this.$route.params.indexService,e=this.$route.params.indexCollection,n=this.serviceList[t],r=[];this.docsToBeDeleted.forEach(t=>{r.push(this.documents[t].hash)});const i={model_key:n.collections[e].model_key,doc_hash_list:r};this.axios.post("/admin/delete-many-doc",i).then(t=>{const e=t.data;e.is_authenticated?0===e.msg_err.length?(this.setShowMsg(!1),this.resetPageNumberDefault(),this.getDocumentList()):(console.log(e.msg_err),this.runShowMsg({text:e.msg_err,status:"error"})):this.setIsAuthenticated(!1)}).catch(t=>{console.log(t),this.runShowMsg({text:t,status:"error"})}).then(()=>this.runShowOverlayPageLockout(!1))},getPerPage(){let t=this.$route.query.page;t=void 0!==t?parseInt(t):1,Number.isNaN(t)&&this.runShowMsg({text:this.$t("message.36"),status:"error"});let e=this.$route.query.per;return e=void 0!==e?parseInt(e):this.docsPerPage,Number.isNaN(e)&&this.runShowMsg({text:this.$t("message.38"),status:"error"}),{numPage:t,numPer:e}}},created(){this.resetPageNumberDefault(this.getPerPage()),this.getDocumentList()}},h=u,p=(n("ab7d"),n("2877")),d=n("6544"),g=n.n(d),f=n("8336"),m=n("b0af"),b=n("99d9"),v=n("ac7c"),y=n("62ad"),w=n("a523"),x=n("132d"),$=(n("17b3"),n("9d26")),S=n("dc22"),P=n("a9ad"),D=n("de2c"),_=n("7560"),O=n("58df"),j=Object(O["a"])(P["a"],Object(D["a"])({onVisible:["init"]}),_["a"]).extend({name:"v-pagination",directives:{Resize:S["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const n=e%2===0?1:0,r=Math.floor(e/2),i=this.length-r+1+n;if(this.value>r&&this.value<i){const t=this.value-r+2,e=this.value+r-2-n;return[1,"...",...this.range(t,e),"...",this.length]}if(this.value===r){const t=this.value+r-1-n;return[...this.range(1,t),"...",this.length]}if(this.value===i){const t=this.value-r+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,r),"...",...this.range(i,this.length)]}},watch:{value(){this.init()}},mounted(){this.init()},methods:{init(){this.selected=null,this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const n=[];t=t>0?t:1;for(let r=t;r<=e;r++)n.push(r);return n},genIcon(t,e,n,r,i){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":i},on:n?{}:{click:r}},[t($["a"],[e])])])},genItem(t,e){const n=e===this.value&&(this.color||"primary"),r=e===this.value,i=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(i,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map((e,n)=>t("li",{key:n},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)]))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),k=n("0fd9"),C=n("b974"),L=(n("8b37"),n("80d2")),N=Object(O["a"])(_["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(L["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),T=n("8654"),M=n("71d9"),A=Object(p["a"])(h,r,i,!1,null,null,null);e["default"]=A.exports;g()(A,{VBtn:f["a"],VCard:m["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VCheckbox:v["a"],VCol:y["a"],VContainer:w["a"],VIcon:x["a"],VPagination:j,VRow:k["a"],VSelect:C["a"],VSimpleTable:N,VTextField:T["a"],VToolbar:M["a"]})},"8b37":function(t,e,n){},ab7d:function(t,e,n){"use strict";n("1219")},d444:function(t,e,n){"use strict";
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */const r=n("3022"),i=n("fd8e"),o=t=>null!==t&&"object"===typeof t&&!Array.isArray(t),s=t=>e=>!0===t?Number(e):String(e),a=t=>"number"===typeof t||"string"===typeof t&&""!==t,c=t=>Number.isInteger(+t),l=t=>{let e=""+t,n=-1;if("-"===e[0]&&(e=e.slice(1)),"0"===e)return!1;while("0"===e[++n]);return n>0},u=(t,e,n)=>"string"===typeof t||"string"===typeof e||!0===n.stringify,h=(t,e,n)=>{if(e>0){let n="-"===t[0]?"-":"";n&&(t=t.slice(1)),t=n+t.padStart(n?e-1:e,"0")}return!1===n?String(t):t},p=(t,e)=>{let n="-"===t[0]?"-":"";n&&(t=t.slice(1),e--);while(t.length<e)t="0"+t;return n?"-"+t:t},d=(t,e)=>{t.negatives.sort((t,e)=>t<e?-1:t>e?1:0),t.positives.sort((t,e)=>t<e?-1:t>e?1:0);let n,r=e.capture?"":"?:",i="",o="";return t.positives.length&&(i=t.positives.join("|")),t.negatives.length&&(o=`-(${r}${t.negatives.join("|")})`),n=i&&o?`${i}|${o}`:i||o,e.wrap?`(${r}${n})`:n},g=(t,e,n,r)=>{if(n)return i(t,e,{wrap:!1,...r});let o=String.fromCharCode(t);if(t===e)return o;let s=String.fromCharCode(e);return`[${o}-${s}]`},f=(t,e,n)=>{if(Array.isArray(t)){let e=!0===n.wrap,r=n.capture?"":"?:";return e?`(${r}${t.join("|")})`:t.join("|")}return i(t,e,n)},m=(...t)=>new RangeError("Invalid range arguments: "+r.inspect(...t)),b=(t,e,n)=>{if(!0===n.strictRanges)throw m([t,e]);return[]},v=(t,e)=>{if(!0===e.strictRanges)throw new TypeError(`Expected step "${t}" to be a number`);return[]},y=(t,e,n=1,r={})=>{let i=Number(t),o=Number(e);if(!Number.isInteger(i)||!Number.isInteger(o)){if(!0===r.strictRanges)throw m([t,e]);return[]}0===i&&(i=0),0===o&&(o=0);let a=i>o,c=String(t),b=String(e),v=String(n);n=Math.max(Math.abs(n),1);let y=l(c)||l(b)||l(v),w=y?Math.max(c.length,b.length,v.length):0,x=!1===y&&!1===u(t,e,r),$=r.transform||s(x);if(r.toRegex&&1===n)return g(p(t,w),p(e,w),!0,r);let S={negatives:[],positives:[]},P=t=>S[t<0?"negatives":"positives"].push(Math.abs(t)),D=[],_=0;while(a?i>=o:i<=o)!0===r.toRegex&&n>1?P(i):D.push(h($(i,_),w,x)),i=a?i-n:i+n,_++;return!0===r.toRegex?n>1?d(S,r):f(D,null,{wrap:!1,...r}):D},w=(t,e,n=1,r={})=>{if(!c(t)&&t.length>1||!c(e)&&e.length>1)return b(t,e,r);let i=r.transform||(t=>String.fromCharCode(t)),o=(""+t).charCodeAt(0),s=(""+e).charCodeAt(0),a=o>s,l=Math.min(o,s),u=Math.max(o,s);if(r.toRegex&&1===n)return g(l,u,!1,r);let h=[],p=0;while(a?o>=s:o<=s)h.push(i(o,p)),o=a?o-n:o+n,p++;return!0===r.toRegex?f(h,null,{wrap:!1,options:r}):h},x=(t,e,n,r={})=>{if(null==e&&a(t))return[t];if(!a(t)||!a(e))return b(t,e,r);if("function"===typeof n)return x(t,e,1,{transform:n});if(o(n))return x(t,e,0,n);let i={...r};return!0===i.capture&&(i.wrap=!0),n=n||i.step||1,c(n)?c(t)&&c(e)?y(t,e,n,i):w(t,e,Math.max(Math.abs(n),1),i):null==n||o(n)?x(t,e,1,n):v(n,i)};t.exports=x},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},eb9e:function(t,e,n){"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */t.exports=function(t){return"number"===typeof t?t-t===0:"string"===typeof t&&""!==t.trim()&&(Number.isFinite?Number.isFinite(+t):isFinite(+t))}},fd8e:function(t,e,n){"use strict";
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */const r=n("eb9e"),i=(t,e,n)=>{if(!1===r(t))throw new TypeError("toRegexRange: expected the first argument to be a number");if(void 0===e||t===e)return String(t);if(!1===r(e))throw new TypeError("toRegexRange: expected the second argument to be a number.");let s={relaxZeros:!0,...n};"boolean"===typeof s.strictZeros&&(s.relaxZeros=!1===s.strictZeros);let a=String(s.relaxZeros),l=String(s.shorthand),u=String(s.capture),h=String(s.wrap),p=t+":"+e+"="+a+l+u+h;if(i.cache.hasOwnProperty(p))return i.cache[p].result;let d=Math.min(t,e),g=Math.max(t,e);if(1===Math.abs(d-g)){let n=t+"|"+e;return s.capture?`(${n})`:!1===s.wrap?n:`(?:${n})`}let f=b(t)||b(e),m={min:t,max:e,a:d,b:g},v=[],y=[];if(f&&(m.isPadded=f,m.maxLen=String(m.max).length),d<0){let t=g<0?Math.abs(g):1;y=c(t,Math.abs(d),m,s),d=m.a=0}return g>=0&&(v=c(d,g,m,s)),m.negatives=y,m.positives=v,m.result=o(y,v,s),!0===s.capture?m.result=`(${m.result})`:!1!==s.wrap&&v.length+y.length>1&&(m.result=`(?:${m.result})`),i.cache[p]=m,m.result};function o(t,e,n){let r=l(t,e,"-",!1,n)||[],i=l(e,t,"",!1,n)||[],o=l(t,e,"-?",!0,n)||[],s=r.concat(o).concat(i);return s.join("|")}function s(t,e){let n=1,r=1,i=d(t,n),o=new Set([e]);while(t<=i&&i<=e)o.add(i),n+=1,i=d(t,n);i=g(e+1,r)-1;while(t<i&&i<=e)o.add(i),r+=1,i=g(e+1,r)-1;return o=[...o],o.sort(h),o}function a(t,e,n){if(t===e)return{pattern:t,count:[],digits:0};let r=u(t,e),i=r.length,o="",s=0;for(let a=0;a<i;a++){let[t,e]=r[a];t===e?o+=t:"0"!==t||"9"!==e?o+=m(t,e,n):s++}return s&&(o+=!0===n.shorthand?"\\d":"[0-9]"),{pattern:o,count:[s],digits:i}}function c(t,e,n,r){let i,o=s(t,e),c=[],l=t;for(let s=0;s<o.length;s++){let t=o[s],e=a(String(l),String(t),r),u="";n.isPadded||!i||i.pattern!==e.pattern?(n.isPadded&&(u=v(t,n,r)),e.string=u+e.pattern+f(e.count),c.push(e),l=t+1,i=e):(i.count.length>1&&i.count.pop(),i.count.push(e.count[0]),i.string=i.pattern+f(i.count),l=t+1)}return c}function l(t,e,n,r,i){let o=[];for(let s of t){let{string:t}=s;r||p(e,"string",t)||o.push(n+t),r&&p(e,"string",t)&&o.push(n+t)}return o}function u(t,e){let n=[];for(let r=0;r<t.length;r++)n.push([t[r],e[r]]);return n}function h(t,e){return t>e?1:e>t?-1:0}function p(t,e,n){return t.some(t=>t[e]===n)}function d(t,e){return Number(String(t).slice(0,-e)+"9".repeat(e))}function g(t,e){return t-t%Math.pow(10,e)}function f(t){let[e=0,n=""]=t;return n||e>1?`{${e+(n?","+n:"")}}`:""}function m(t,e,n){return`[${t}${e-t===1?"":"-"}${e}]`}function b(t){return/^-?(0+)\d/.test(t)}function v(t,e,n){if(!e.isPadded)return t;let r=Math.abs(e.maxLen-String(t).length),i=!1!==n.relaxZeros;switch(r){case 0:return"";case 1:return i?"0?":"0";case 2:return i?"0{0,2}":"00";default:return i?`0{0,${r}}`:`0{${r}}`}}i.cache={},i.clearCache=()=>i.cache={},t.exports=i}}]);
//# sourceMappingURL=chunk-13852fb7.4b07096b.js.map