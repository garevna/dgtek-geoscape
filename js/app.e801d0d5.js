(function(e){function t(t){for(var n,i,o=t[0],l=t[1],d=t[2],c=0,p=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4f5bae19"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(c);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dgtek-geoscape/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},3772:function(e,t,a){"use strict";var n=a("6c69"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"DGtek Logo",contain:"",src:a("cf05"),transition:"scale-transition",width:"50"}})],1),n("v-spacer"),n("v-btn",{attrs:{href:"https://dgtek.net",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[e._v("DGtek")]),n("v-icon",[e._v("mdi-open-in-new")])],1)],1),n("v-main",[n("router-view")],1)],1)},s=[],i=(a("69d7"),{name:"App",components:{},data:function(){return{}}}),o=i,l=(a("034f"),a("2877")),d=a("6544"),c=a.n(d),u=a("7496"),p=a("40dc"),f=a("8336"),m=a("132d"),h=a("adda"),g=a("f6c4"),v=a("2fa4"),b=Object(l["a"])(o,r,s,!1,null,null,null),x=b.exports;c()(b,{VApp:u["a"],VAppBar:p["a"],VBtn:f["a"],VIcon:m["a"],VImg:h["a"],VMain:g["a"],VSpacer:v["a"]});var y=a("9483");Object(y["a"])("".concat("/dgtek-geoscape/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var C=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"homefone"},[a("SplitAddressInput",{attrs:{id:e.addressId,value:e.address},on:{"update:id":function(t){e.addressId=t},"update:value":function(t){e.address=t}}}),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[e.addressId?a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",[e._v(" Address details ")]),a("v-expansion-panel-content",[e.addressId?a("AddressDetails",{attrs:{addressId:e.addressId,relatedBuildingIds:e.relatedBuildingIds},on:{"update:relatedBuildingIds":function(t){e.relatedBuildingIds=t},"update:related-building-ids":function(t){e.relatedBuildingIds=t}}}):e._e()],1)],1)],1):e._e()],1),a("v-col",{attrs:{cols:"12",md:"6"}},[e.relatedBuildingIds.length>0?a("v-expansion-panels",e._l(e.relatedBuildingIds,(function(t,n){return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",[e._v(" "+e._s(t)+" ")]),a("v-expansion-panel-content",[a("ShowBuilding",{attrs:{buildingId:t}})],1)],1)})),1):e._e()],1)],1)],1)},w=[],D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"my-5",attrs:{cols:"12"}},[a("h2",{staticClass:"mb-3"},[e._v("Check address")]),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[a("v-select",{staticClass:"mx-4",attrs:{items:e.states,"item-text":"stateName","item-value":"shortStateName",hint:e.selectState.stateName+", "+e.selectState.shortStateName,label:"State",color:"inputColor",flat:"",width:"320"},model:{value:e.selectState,callback:function(t){e.selectState=t},expression:"selectState"}}),a("v-text-field",{staticClass:"mx-4",attrs:{label:"City name",color:"inputColor",flat:"",width:"320"},model:{value:e.cityName,callback:function(t){e.cityName=t},expression:"cityName"}}),a("v-text-field",{staticClass:"mx-4",attrs:{label:"Name of street, avenue, road, parade ...",color:"inputColor",flat:"",width:"320"},model:{value:e.nameOfStreet,callback:function(t){e.nameOfStreet=t},expression:"nameOfStreet"}}),a("v-text-field",{staticClass:"mx-4",attrs:{label:"Building number",color:"inputColor",flat:"",width:"320"},model:{value:e.buildingNumber,callback:function(t){e.buildingNumber=t},expression:"buildingNumber"}}),a("v-btn",{staticClass:"buttons my-8",attrs:{ligth:"",tile:"",color:"primary",disabled:!e.buildingNumber||e.nameOfStreet.length<e.minimumLengthOfAStreetName},on:{click:e.searchHandler}},[e._v("Search")]),e.loading?a("div",{staticClass:"mt-16"},[a("v-progress-circular",{attrs:{size:80,width:7,color:"inputColor",indeterminate:""}})],1):e._e(),!e.loading&&e.variants.length>0&&null===e.selectedAddressIndex?a("div",[a("v-list",{attrs:{flat:""}},[a("v-subheader",{staticClass:"justify-center"},[a("span",[e._v("Choose the option that suits you or change your request.")])]),a("v-list-item-group",{attrs:{color:"primary",height:"500px"},model:{value:e.selectedAddressIndex,callback:function(t){e.selectedAddressIndex=t},expression:"selectedAddressIndex"}},[a("v-virtual-scroll",{attrs:{bench:e.benched,items:e.variants,height:"300","item-height":"48"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[a("v-list-item",{key:n.id},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(n.address)}})],1)],1),a("v-divider")]}}],null,!1,2496627038)})],1)],1)],1):e._e(),null!==e.selectedAddressIndex?a("div",[a("h3",[e._v("Selected address:")]),a("p",[e._v(e._s(e.variants[e.selectedAddressIndex].address))])]):e._e()],1)],1),e.google||e.formula?a("v-row",{attrs:{justify:"center"}},[a("v-card",{staticClass:"transparent mx-auto",attrs:{flat:""}},[a("h6",[e._v("Distance from: [-37.87013628, 144.963058]")]),a("h6",[e._v(" Google: "),a("span",[e._v(e._s(e.google))])]),a("h6",[e._v(" Formula: "),a("span",[e._v(e._s(e.formula))])])])],1):e._e()],1)],1)},I=[],S=(a("99af"),a("96cf"),a("1da1")),A={name:"SplitAddressInput",props:["id","value"],data:function(){return{buildingNumber:"",nameOfStreet:"",minimumLengthOfAStreetName:4,cityName:"Melbourne",variants:[],loading:!1,selectedAddressIndex:null,google:"",formula:"",selectState:{stateName:"Victoria",shortStateName:"VIC"},states:[{stateName:"Victoria",shortStateName:"VIC"},{stateName:"Queensland",shortStateName:"QLD"},{stateName:"South Australia",shortStateName:"SA"},{stateName:"Western Australia",shortStateName:"WA"},{stateName:"Tasmania",shortStateName:"TAS"},{stateName:"Northern Territory",shortStateName:"NT"},{stateName:"Australian Capital Territory",shortStateName:"ACT"}]}},computed:{},watch:{buildingNumber:function(){this.clear()},nameOfStreet:function(){this.clear()},selectedAddressIndex:function(e){var t=this;null!==e&&(this.$emit("update:id",this.variants[e].id),this.$emit("update:value",this.variants[e].address),this.getCoordinates(this.variants[e].id).then((function(e){var a={lat:-37.87013628,lng:144.963058};t.google=Math.round(t.getDistance(new t.LatLng(e.lat,e.lng),new t.LatLng(a.lat,a.lng))),t.formula=t.calcDistance(e,a)})))}},methods:{clear:function(){this.variants=[],this.selectedAddressIndex=null,this.google="",this.formula="",this.$emit("update:id",""),this.$emit("update:value","")},searchHandler:function(){this.getVariants("".concat(this.buildingNumber," ").concat(this.nameOfStreet,", ").concat(this.cityName))},getCoordinates:function(e){return Object(S["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.psma.com.au/v1/addresses/".concat(e,"/geo"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JQj5hS4OFWNvp0JQ58DDDKzKLCAoqpA0"}});case 2:return t.next=4,t.sent.json();case 4:return a=t.sent,n=a.geo.geometry.coordinates,t.abrupt("return",{lat:n[1],lng:n[0]});case 7:case"end":return t.stop()}}),t)})))()},getVariants:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(e.length<4)){a.next=2;break}return a.abrupt("return");case 2:return t.loading=!0,a.next=5,fetch("https://api.psma.com.au/v1/predictive/address?maxNumberOfResults=20&query=".concat(encodeURIComponent(e),"&stateTerritory=").concat(t.selectState.shortStateName),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JQj5hS4OFWNvp0JQ58DDDKzKLCAoqpA0"}});case 5:return a.next=7,a.sent.json();case 7:t.variants=a.sent.suggest,t.loading=!1;case 9:case"end":return a.stop()}}),a)})))()}}},k=A,V=(a("3772"),a("b0af")),N=a("62ad"),j=a("ce7e"),O=a("8860"),F=a("da13"),E=a("5d23"),T=a("1baa"),B=a("490a"),L=a("0fd9"),P=a("b974"),R=a("e0c7"),M=a("8654"),z=a("0de5"),$=Object(l["a"])(k,D,I,!1,null,"0298aec0",null),q=$.exports;c()($,{VBtn:f["a"],VCard:V["a"],VCol:N["a"],VDivider:j["a"],VList:O["a"],VListItem:F["a"],VListItemContent:E["a"],VListItemGroup:T["a"],VListItemTitle:E["b"],VProgressCircular:B["a"],VRow:L["a"],VSelect:P["a"],VSubheader:R["a"],VTextField:M["a"],VVirtualScroll:z["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("tbody",[e.coordinates?a("tr",[a("td",{staticClass:"text-left"},[e._v("Coordinates")]),a("td",{staticClass:"text-left"},[e._v(e._s(e.coordinates))])]):e._e()])]},proxy:!0}])})],1),a("v-row",{attrs:{justify:"center"}},[a("v-simple-table",{attrs:{dark:""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v(" Property ")]),a("th",{staticClass:"text-left"},[e._v(" Value ")])])]),a("tbody",e._l(e.properties,(function(t){return a("tr",{key:t},[e.addressDetails[t]?a("td",{staticClass:"text-left"},[e._v(e._s(t))]):e._e(),e.addressDetails[t]?a("td",{staticClass:"text-left"},[e._v(e._s(e.addressDetails[t]))]):e._e()])})),0)]},proxy:!0}])})],1)],1)},Q=[],G=(a("b64b"),{name:"",props:["addressId","relatedBuildingIds"],data:function(){return{properties:[],addressDetails:null,geoDatumCode:"",geoFeature:"",coordinates:[],geometryType:"",buildingIds:[]}},watch:{addressId:function(e){e&&this.getAddressDetails()}},methods:{getAddressDetails:function(){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.psma.com.au/v1/addresses/".concat(e.addressId,"?include=geo,addressDetails"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JQj5hS4OFWNvp0JQ58DDDKzKLCAoqpA0"}});case 2:return t.next=4,t.sent.json();case 4:a=t.sent,e.addressDetails=a.addressDetails,e.geoDatumCode=a.geo.geoDatumCode,e.geoFeature=a.geo.geoFeature,e.coordinates=a.geo.geometry.coordinates,e.geometryType=a.geo.geometry.type,e.buildingIds=a.relatedBuildingIds,e.$emit("update:relatedBuildingIds",e.buildingIds),e.properties=Object.keys(e.addressDetails);case 13:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.addressId&&this.getAddressDetails()}}),K=G,H=a("1f4f"),W=Object(l["a"])(K,J,Q,!1,null,null,null),U=W.exports;c()(W,{VCard:V["a"],VRow:L["a"],VSimpleTable:H["a"]});var X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"transparent",attrs:{flat:""}},[a("v-row",{attrs:{justify:"center"}},[a("v-simple-table",{attrs:{dark:""},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v(" Property ")]),a("th",{staticClass:"text-left"},[e._v(" Value ")])])]),a("tbody",[e._l(e.properties,(function(t){return a("tr",{key:t},[e.buildingData[t]?a("td",{staticClass:"text-left"},[e._v(e._s(t))]):e._e(),e.buildingData[t]?a("td",{staticClass:"text-left"},[e._v(e._s(e.buildingData[t]))]):e._e()])})),a("tr",[a("td",{staticClass:"text-left"},[e._v("Footprint 2d")]),a("td",{staticClass:"text-left"},[a("v-expansion-panels",[a("v-expansion-panel",[a("v-expansion-panel-header",[e._v(" Coordinates ")]),e._l(e.footprint2dCoordinates,(function(t,n){return a("v-expansion-panel-content",{key:n},[e._v(" "+e._s(t)+" ")])}))],2)],1)],1)])],2)]},proxy:!0}])})],1)],1)},Y=[],Z={name:"",props:["buildingId"],data:function(){return{buildingData:{},links:{},footprint2dCoordinates:[]}},computed:{properties:function(){return Object.keys(this.buildingData)}},watch:{buildingId:function(e){e&&this.getBuildingDataById(e)}},methods:{getBuildingDataById:function(e){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.psma.com.au/v1/buildings/".concat(t.buildingId,"?include=centroid,footprint2d,elevation,area,zonings,estimatedLevels"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JQj5hS4OFWNvp0JQ58DDDKzKLCAoqpA0"}});case 2:return e.next=4,e.sent.json();case 4:t.buildingData=e.sent,t.buildingData.centroidCoordinates=t.buildingData.centroid.point.coordinates,delete t.buildingData.centroid,t.buildingData.zonings=t.buildingData.zonings[0],t.footprint2dCoordinates=t.buildingData.footprint2d.coordinates[0][0],delete t.buildingData.footprint2d,t.links=t.buildingData.links,delete t.buildingData.links,delete t.buildingData.messages,delete t.buildingData.buildingId,delete t.buildingData.relatedAddressIds;case 15:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.buildingId&&this.getBuildingDataById(this.buildingId)}},ee=Z,te=a("cd55"),ae=a("49e2"),ne=a("c865"),re=a("0393"),se=Object(l["a"])(ee,X,Y,!1,null,null,null),ie=se.exports;c()(se,{VCard:V["a"],VExpansionPanel:te["a"],VExpansionPanelContent:ae["a"],VExpansionPanelHeader:ne["a"],VExpansionPanels:re["a"],VRow:L["a"],VSimpleTable:H["a"]});var oe={name:"Home",components:{SplitAddressInput:q,AddressDetails:U,ShowBuilding:ie},data:function(){return{addressId:null,address:"",relatedBuildingIds:[]}},watch:{addressId:function(e){e||(this.relatedBuildingIds=[])},relatedBuildingIds:{deep:!0,immediate:!0,handler:function(e){}}},methods:{}},le=oe,de=a("a523"),ce=Object(l["a"])(le,_,w,!1,null,null,null),ue=ce.exports;c()(ce,{VCol:N["a"],VContainer:de["a"],VExpansionPanel:te["a"],VExpansionPanelContent:ae["a"],VExpansionPanelHeader:ne["a"],VExpansionPanels:re["a"],VRow:L["a"]}),n["a"].use(C["a"]);var pe=[{path:"/",name:"Home",component:ue},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],fe=new C["a"]({mode:"history",base:"/dgtek-geoscape/",routes:pe}),me=fe,he=a("2f62");n["a"].use(he["a"]);var ge=new he["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ve=a("f309");n["a"].use(ve["a"]);var be=new ve["a"]({icons:{iconfont:"mdi",values:{expand:"mdi-chevron-down",valid:"mdi-check-bold",invalid:"mdi-alert-outline"}},theme:{themes:{light:{primary:"#58120E",secondary:"#E15240",buttons:"#881F1A",homefone:"#FBFBFB",inputs:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00",activText:"#",textColor:"#fff",inputColor:"#881F1A"},dark:{primary:"#FF0E00",secondary:"#E82F37",buttons:"#F54436",homefone:"#FEFEFE",fields:"#EFEFEF",activefield:"#D9D9D9",warning:"#FAFF00"}}}});a("4d86"),a("cb36");n["a"].config.productionTip=!1,n["a"].prototype.earthRadius=6378137,n["a"].prototype.convertDegToRad=function(e){return e*(Math.PI/180)},n["a"].prototype.calcDistance=function(e,t){var a={lat:this.convertDegToRad(t.lat-e.lat),lng:this.convertDegToRad(t.lng-e.lng)},n=Math.pow(Math.sin(a.lat/2),2)+Math.cos(this.convertDegToRad(e.lat)/2)*Math.cos(this.convertDegToRad(t.lat)/2)*Math.pow(Math.sin(a.lng/2),2),r=2*Math.atan2(Math.sqrt(n),Math.sqrt(1-n));return Math.round(this.earthRadius*r)},n["a"].prototype.getDistance=window.google.maps.geometry.spherical.computeDistanceBetween,n["a"].prototype.LatLng=window.google.maps.LatLng,new n["a"]({router:me,store:ge,vuetify:be,render:function(e){return e(x)}}).$mount("#app")},"6c69":function(e,t,a){},"85ec":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.484e8bd1.png"}});