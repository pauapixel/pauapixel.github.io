(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"10b1":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"page row justify-center"},[o("q-card",{staticClass:"card-layout page-card",attrs:{inline:""}},[o("q-card-section",{staticClass:"full-height"},[t.loading.retrieving?o("section",{staticClass:"row justify-center items-center full-height"},[o("div",{staticClass:"column"},[o("q-spinner-facebook",{attrs:{color:"primary",size:"5em"}}),o("div",[t._v("carregando..")])],1)]):o("section",[o("q-breadcrumbs",{staticClass:"row q-mb-md text-grey-7",attrs:{"active-color":"primary"},scopedSlots:t._u([{key:"separator",fn:function(){return[o("q-icon",{attrs:{name:"chevron_right",color:"primary"}})]},proxy:!0}],null,!1,2813167706)},[o("q-breadcrumbs-el",{attrs:{icon:"home",label:"Projetos",to:"/"}}),o("q-breadcrumbs-el",{attrs:{icon:"assignment",label:"Projeto",to:"/projects/project/"+t.$route.params.id}}),o("q-breadcrumbs-el",{attrs:{icon:"import_contacts",label:"Storyline",to:"/projects/project/storyline/"+t.$route.params.id}})],1),t.project.storyline?o("div",{staticClass:"column"},[o("div",{staticClass:"row justify-end q-mb-lg"},[o("q-btn",{staticClass:"btn-default q-mr-lg",attrs:{outline:"",size:"md",color:"secondary"},on:{click:function(e){return t.clean()}}},[t._v("\n              Limpar\n            ")]),o("q-btn",{staticClass:"btn-default text-white",attrs:{size:"md",color:"secondary",unelevated:"",loading:t.loading.saving},on:{click:function(e){return t.save()}},scopedSlots:t._u([{key:"loading.saving",fn:function(){return[t._v("Salvando...")]},proxy:!0}],null,!1,1674400051)},[t._v("\n              Salvar\n              ")])],1),o("div",{staticClass:"row fill-width q-mb-lg"},[o("q-input",{staticClass:"col-12",attrs:{label:"Nome",color:"secondary",counter:"",maxlength:"50"},model:{value:t.project.storyline.name,callback:function(e){t.$set(t.project.storyline,"name",e)},expression:"project.storyline.name"}})],1),o("div",{staticClass:"row fill-width"},[o("q-input",{staticClass:"col-12",attrs:{label:"Descrição",type:"textarea",color:"secondary",outlined:"",counter:"",maxlength:"450"},model:{value:t.project.storyline.description,callback:function(e){t.$set(t.project.storyline,"description",e)},expression:"project.storyline.description"}})],1)]):t._e()],1)])],1)],1)},a=[],i=(o("7f7f"),o("a85c")),r=o("8fdd"),c={name:"ProjectPage",data:function(){return{loading:{saving:!1,retrieving:!1},project:{}}},mounted:function(){this.init()},methods:{init:function(){this.$route.params.id?this.getProject(this.$route.params.id):this.$router.push({path:""})},clean:function(){this.project.storyline&&(this.project.storyline.name="",this.project.storyline.description="")},save:function(){var t=this;this.loading.saving||(this.loading.saving=!0,r["a"].save(this.project).then((function(e){t.loading.saving=!1,t.init()})).catch((function(e){t.loading.saving=!1})))},getProject:function(t){var e=this;this.loading.retrieving=!0,r["a"].getProjectBy(t).then((function(t){e.loading.retrieving=!1,t.data instanceof Object?(e.project=t.data,t.data.storyline||(e.project.storyline={name:"",description:""})):(i["a"].error("O usuário não tem acesso a este conteúdo."),e.$router.push({name:"projects"}))})).catch((function(){e.loading.retrieving=!1}))}},watch:{"$route.params.id":function(){this.init()}}},s=c,l=o("2877"),u=Object(l["a"])(s,n,a,!1,null,null,null);e["default"]=u.exports},"8fdd":function(t,e,o){"use strict";o("551c"),o("06db");var n=o("bc3a"),a=o.n(n),i=o("5206"),r=o("bd5e"),c=o("ba11"),s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"codProject,ASC";return new Promise((function(c,s){a.a.get("".concat(i["a"].api,"project/").concat(t||"","?page=").concat(e,"&size=").concat(o,"&sort=").concat(n)).then((function(t){c(t)})).catch((function(t){Object(r["a"])(t,"Não foi possível recuperar o projeto para esse usuário."),s(t)}))}))},l=function(t){return new Promise((function(e,o){a.a.get("".concat(i["a"].api,"project/findByCodProject/").concat(t)).then((function(t){e(t)})).catch((function(t){Object(r["a"])(t,"Não foi possível recuperar o projeto para esse usuário."),o(t)}))}))},u=function(t){return new Promise((function(e,o){a()({method:"post",url:"".concat(i["a"].api,"project/save"),data:t,headers:{"Content-Type":"application/json"}}).then((function(t){Object(c["a"])("Projeto salvo com sucesso."),e(t)})).catch((function(t){Object(r["a"])(t,"Não foi possível salvar o Projeto."),o(t)}))}))},d=function(t){return new Promise((function(e,o){a.a.get("".concat(i["a"].api,"project/remove/").concat(t)).then((function(t){e(t)})).catch((function(t){Object(r["a"])(t,"Não foi possível remover o projeto."),o(t)}))}))};e["a"]={findAll:s,getProjectBy:l,save:u,remove:d}},ba11:function(t,e,o){"use strict";var n=o("a85c"),a=function(t){n["a"].success(t)};e["a"]=a},bd5e:function(t,e,o){"use strict";var n=o("a85c"),a=function(t,e){t&&t.ERR_INTERNET_DISCONNECTED||t&&t.SESSION_EXPIRED||n["a"].error(e)};e["a"]=a}}]);