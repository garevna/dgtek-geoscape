(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8be8"],{"55d6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-toolbar",{staticClass:"transparent",staticStyle:{"box-shadow":"none"}},[a("v-toolbar-title",[a("h6",[e._v("Search address")])]),a("v-autocomplete",{staticClass:"mx-4",attrs:{loading:e.loading,items:e.addresses,"search-input":e.search,"cache-items":"",flat:"","hide-no-data":"","hide-details":"",placeholder:"Enter the address",outlined:""},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t}},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}}),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$emit("update:value",e.address)}}},[e._v("SUBMIT")])],1)],1)},r=[],s=(a("d81d"),a("d3b7"),a("96cf"),a("1da1")),o={name:"GeoscapeAutocomplete",props:["value"],data:function(){return{address:"",variants:[],loading:!1,search:null,google:"",formula:""}},computed:{addresses:function(){return this.variants.map((function(e){return e.address}))}},watch:{search:function(e){e&&e!==this.select&&this.getVariants(e)}},methods:{getVariants:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!(e.length<4)){a.next=2;break}return a.abrupt("return");case 2:return t.loading=!0,a.next=5,fetch("https://api.psma.com.au/v1/predictive/address?maxNumberOfResults=20&query=".concat(encodeURIComponent(e)),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"JQj5hS4OFWNvp0JQ58DDDKzKLCAoqpA0"}});case 5:return a.next=7,a.sent.json();case 7:t.variants=a.sent.suggest,t.loading=!1;case 9:case"end":return a.stop()}}),a)})))()}}},c=o,i=a("2877"),u=a("6544"),d=a.n(u),l=a("c6a6"),p=a("8336"),h=a("0fd9"),f=a("71d9"),m=a("2a7f"),v=Object(i["a"])(c,n,r,!1,null,null,null);t["default"]=v.exports;d()(v,{VAutocomplete:l["a"],VBtn:p["a"],VRow:h["a"],VToolbar:f["a"],VToolbarTitle:m["a"]})}}]);