(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"555a":function(t,e,r){t.exports=r.p+"img/icon.dfc16040.png"},c930:function(t,e,r){"use strict";var o=r("f740"),n=r.n(o);n.a},dead:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{attrs:{view:"lHh Lpr lFf"}},[o("q-header",{staticClass:"bg-primary no-print",attrs:{elevated:""}},[o("q-toolbar",[o("img",{attrs:{width:"30",height:"30",src:r("555a")}}),o("q-space"),o("div",{staticClass:"col-auto q-mr-lg"},[t._v("\n        Bem vindo! "+t._s(t.getUser?t.getUser.name:"")+"\n      ")]),o("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Logout"},on:{click:t.logout}},[o("q-icon",{attrs:{name:"settings_power"}})],1)],1)],1),o("q-page-container",[o("q-page",[o("transition",{attrs:{"enter-active-class":"animated zoomIn"}},[o("router-view")],1),o("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":100,offset:[10,10]}},[o("q-btn",{attrs:{round:"",size:"sm",color:"primary",icon:"keyboard_arrow_up"}})],1)],1)],1)],1)},n=[],s=(r("456d"),r("8a81"),r("d25f"),r("9986"),r("8e6e"),r("d23f")),a=r.n(s),i=r("2f62");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u={name:"AppLayout",data:function(){return{scroll:{}}},methods:{scrollToTop:function(){this.$refs.scrollArea.setScrollPosition(0,500)},scrollHandler:function(t){this.scroll=t},logout:function(){var t=this;this.$q.dialog({title:"Atenção!",message:"Deseja realmente sair?",noBackdropDismiss:!0,noEscDismiss:!0,color:"tertiary",ok:"SIM",cancel:"NÃO"}).onOk((function(){t.$store.dispatch("auth/logout").then((function(){t.$store.dispatch("user/unregisterUser").then((function(){t.$router.push("/login")}))}))})).onCancel((function(){}))}},computed:l({},Object(i["b"])("user",["getUser","getRoles"]))},p=u,f=(r("c930"),r("2877")),g=Object(f["a"])(p,o,n,!1,null,null,null);e["default"]=g.exports},f740:function(t,e,r){}}]);