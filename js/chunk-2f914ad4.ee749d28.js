(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f914ad4"],{7496:function(e,n,t){"use strict";t("df86");var a=t("7560"),r=t("58df");n["a"]=Object(r["a"])(a["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(e){const n=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[n])}})},cd59:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("dashboard-core-app-bar",{model:{value:e.expandOnHover,callback:function(n){e.expandOnHover=n},expression:"expandOnHover"}}),t("dashboard-core-drawer",{attrs:{"expand-on-hover":e.expandOnHover},on:{"update:expandOnHover":function(n){e.expandOnHover=n},"update:expand-on-hover":function(n){e.expandOnHover=n}}}),t("dashboard-core-view"),t("dashboard-core-settings",{model:{value:e.expandOnHover,callback:function(n){e.expandOnHover=n},expression:"expandOnHover"}})],1)},r=[],o={name:"DashboardIndex",components:{DashboardCoreAppBar:function(){return Promise.all([t.e("chunk-53184230"),t.e("chunk-60ce562d")]).then(t.bind(null,"8e07"))},DashboardCoreDrawer:function(){return t.e("chunk-c3a0eb9a").then(t.bind(null,"09ae"))},DashboardCoreSettings:function(){return t.e("chunk-56300ff6").then(t.bind(null,"51c9"))},DashboardCoreView:function(){return t.e("chunk-ef8a64b2").then(t.bind(null,"2038"))}},data:function(){return{expandOnHover:!1}}},i=o,d=t("2877"),s=t("6544"),p=t.n(s),u=t("7496"),c=Object(d["a"])(i,a,r,!1,null,null,null);n["default"]=c.exports;p()(c,{VApp:u["a"]})},df86:function(e,n,t){}}]);
//# sourceMappingURL=chunk-2f914ad4.ee749d28.js.map