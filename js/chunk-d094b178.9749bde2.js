(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d094b178"],{7496:function(t,e,i){"use strict";i("df86");var a=i("7560"),n=i("58df");e["a"]=Object(n["a"])(a["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},a6dd:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("pages-core-app-bar"),i("pages-core-view"),i("pages-core-footer")],1)},n=[],r={name:"PagesIndex",components:{PagesCoreAppBar:function(){return i.e("chunk-13f4c726").then(i.bind(null,"75b9"))},PagesCoreFooter:function(){return i.e("chunk-2ad98a39").then(i.bind(null,"1574"))},PagesCoreView:function(){return i.e("chunk-755602a0").then(i.bind(null,"e402"))}},created:function(){this.$vuetify.theme.dark=!0},beforeDestroy:function(){this.$vuetify.theme.dark=!1}},s=r,o=i("2877"),p=i("6544"),u=i.n(p),c=i("7496"),d=Object(o["a"])(s,a,n,!1,null,null,null);e["default"]=d.exports;u()(d,{VApp:c["a"]})},df86:function(t,e,i){}}]);
//# sourceMappingURL=chunk-d094b178.9749bde2.js.map