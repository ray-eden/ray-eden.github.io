(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f7d987e"],{"0e51":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{id:"wizard",tag:"section"}},[s("base-material-wizard",{staticClass:"mx-auto",attrs:{"available-steps":t.availableSteps,items:t.tabs},on:{"click:next":t.next,"click:prev":function(e){t.tab--}},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[s("v-tab-item",{staticClass:"pb-12"},[s("form",{attrs:{action:"","data-vv-scope":"about"}},[s("div",{staticClass:"text-center display-1 font-weight-light mb-6"},[t._v("\n          Let's start with basic information (with validation)\n        ")]),s("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"500px"},attrs:{justify:"space-around"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"auto"}},[s("input",{ref:"file",staticClass:"d-none",attrs:{type:"file"},on:{change:t.onChange}}),s("v-card",{staticClass:"mx-auto mt-0 d-inline-flex v-card--account",class:t.image?"success--text":"grey--text",attrs:{outlined:"",height:"106",width:"106"},on:{click:function(e){return t.$refs.file.click()}}},[t.image?s("v-img",{attrs:{src:t.image,height:"100%",width:"100%"}}):s("v-icon",{staticClass:"mx-auto",attrs:{size:"96"}},[t._v("\n                mdi-account\n              ")])],1),s("div",{staticClass:"font-weight-bold grey--text"},[t._v("\n              CHOOSE PICTURE\n            ")])],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("about.first"),color:"secondary","data-vv-name":"first",label:"First Name*","prepend-icon":"mdi-face","validate-on-blur":""},model:{value:t.first,callback:function(e){t.first=e},expression:"first"}}),s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("about.last"),color:"secondary","data-vv-name":"last",label:"Last Name*","prepend-icon":"mdi-account","validate-on-blur":""},model:{value:t.last,callback:function(e){t.last=e},expression:"last"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("about.email"),color:"secondary","data-vv-name":"email",label:"Email*","prepend-icon":"mdi-email","validate-on-blur":""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1)]),s("v-tab-item",{staticClass:"pb-12"},[s("form",{attrs:{action:"","data-vv-scope":"account"}},[s("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[s("div",{staticClass:"text-center display-1 grey--text font-weight-light mb-6"},[t._v("\n            What are you doing? (checkboxes)\n          ")]),s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"hidden","data-vv-name":"type"},domProps:{value:t.stringAccount}}),s("v-item-group",{staticClass:"row",attrs:{multiple:""},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}},t._l(t.accounts,(function(e,a){return s("v-item",{key:a,scopedSlots:t._u([{key:"default",fn:function(a){var i=a.active,n=a.toggle;return[s("v-col",{staticClass:"text-center",attrs:{cols:"4"}},[s("v-card",{staticClass:"mb-6 mx-auto pa-10 d-inline-block v-card--account",class:i?"success--text":"grey--text",attrs:{outlined:""},on:{click:n}},[s("v-icon",{attrs:{large:""},domProps:{textContent:t._s(e.icon)}})],1),s("div",{staticClass:"text-uppercase subtitle-2 text--primary",domProps:{textContent:t._s(e.type)}})],1)]}}],null,!0)})})),1)],1)],1)]),s("v-tab-item",{staticClass:"pb-12"},[s("div",{staticClass:"text-center display-1 grey--text font-weight-light mb-6"},[t._v("\n        Are you living in a nice area?\n      ")]),s("form",{attrs:{action:"","data-vv-scope":"address"}},[s("v-row",{staticClass:"mx-auto",staticStyle:{"max-width":"500px"},attrs:{justify:"space-around"}},[s("v-col",{attrs:{cols:"12",md:"8"}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("address.address"),color:"secondary","data-vv-name":"address",label:"Street Name*","validate-on-blur":""},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("address.street"),color:"secondary","data-vv-name":"street",label:"Street Number*","validate-on-blur":""},model:{value:t.street,callback:function(e){t.street=e},expression:"street"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("address.city"),color:"secondary","data-vv-name":"city",label:"City*","validate-on-blur":""},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}})],1),s("v-col",{attrs:{cols:"12",md:"6"}},[s("v-autocomplete",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{autocomplete:Date.now(),"error-messages":t.errors.collect("address.state"),items:t.states,color:"secondary","data-vv-name":"state",label:"State*","validate-on-blur":""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1)],1)],1)])],1)],1)},i=[],n=(s("6762"),{name:"DashboardFormsWizard",data:function(){return{account:[],accounts:[{icon:"mdi-pencil",type:"design"},{icon:"mdi-code-tags",type:"code"},{icon:"mdi-laptop",type:"develop"}],address:"",city:"",email:"",first:"",image:null,last:"",state:"",states:["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],street:"",tab:0,tabs:["About","Account","Address"]}},computed:{stringAccount:function(){return this.account.join(",")},scope:function(){return 0===this.tab?"about":2===this.tab?"address":"account"},availableSteps:function(){var t=[0];return this.first&&this.last&&this.email&&t.push(1),this.stringAccount&&t.includes(1)&&t.push(2),this.address&&this.street&&this.city&&this.state&&t.includes(2)&&t.push(3),t}},methods:{next:function(){var t=this;this.validateForm(this.scope).then((function(e){e&&(t.tab===t.tabs.length-1?alert("Form finished"):t.tab++)}))},onChange:function(t){var e=t.target.files[0];if(!e)return this.image=null;this.image=URL.createObjectURL(e)},validateForm:function(t){return this.$validator.validateAll(t)}}}),r=n,o=(s("4d2a"),s("2877")),l=s("6544"),c=s.n(l),d=s("c6a6"),u=s("b0af"),h=s("62ad"),m=s("a523"),p=s("132d"),v=s("adda"),f=s("d903"),g=s("604c"),b=s("6b53"),x=s("0fd9"),y=s("c671"),w=s("8654"),I=Object(o["a"])(r,a,i,!1,null,null,null);e["default"]=I.exports;c()(I,{VAutocomplete:d["a"],VCard:u["a"],VCol:h["a"],VContainer:m["a"],VIcon:p["a"],VImg:v["a"],VItem:f["a"],VItemGroup:g["b"],VResponsive:b["a"],VRow:x["a"],VTabItem:y["a"],VTextField:w["a"]})},"0fd9":function(t,e,s){"use strict";s("4b85");var a=s("2b0e"),i=s("d9f7"),n=s("80d2");const r=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return r.reduce((s,a)=>{return s[t+Object(n["E"])(a)]=e(),s},{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:u})),m=t=>[...o,"space-between","space-around","stretch"].includes(t),p=l("alignContent",()=>({type:String,default:null,validator:m})),v={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(p)},f={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,s){let a=f[t];if(null!=s){if(e){const s=e.replace(t,"");a+=`-${s}`}return a+=`-${s}`,a.toLowerCase()}}const b=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:m},...p},render(t,{props:e,data:s,children:a}){let n="";for(const i in e)n+=String(e[i]);let r=b.get(n);if(!r){let t;for(t in r=[],v)v[t].forEach(s=>{const a=e[s],i=g(t,s,a);i&&r.push(i)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(n,r)}return t(e.tag,Object(i["a"])(s,{staticClass:"row",class:r}),a)}})},"2bfd":function(t,e,s){},"4d2a":function(t,e,s){"use strict";var a=s("b51a"),i=s.n(a);i.a},b51a:function(t,e,s){},c671:function(t,e,s){"use strict";var a=s("9d65"),i=s("4e82"),n=s("c3f0"),r=s("80d2"),o=s("58df");const l=Object(o["a"])(a["a"],Object(i["a"])("windowGroup","v-window-item","v-window"));var c=l.extend().extend().extend({name:"v-window-item",directives:{Touch:n["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.showLazyContent(this.genDefaultSlot()))},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(r["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(r["f"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},[this.genWindowItem()])}});e["a"]=c.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=c.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}})},c6a6:function(t,e,s){"use strict";s("2bfd");var a=s("b974"),i=s("8654"),n=s("80d2");const r={...a["b"],offsetY:!0,offsetOverflow:!0,transition:!1};e["a"]=a["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>{return s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:a["a"].options.props.menuProps.type,default:()=>r},noFilter:Boolean,searchInput:{type:String,default:void 0}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(t=>this.getValue(t))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(t=>!this.hasItem(t)):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter(t=>this.filter(t,String(this.internalSearch),String(this.getText(t))))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=a["a"].options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...r,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find(t=>{return this.valueComparator(this.getValue(t),this.getValue(this.internalValue))})},listData(){const t=a["a"].options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},methods:{onFilteredItemsChanged(t,e){t!==e&&(this.setMenuIndex(-1),this.$nextTick(()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.setMenuIndex(0))}))},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){if(this.searchIsDirty)return;if(![n["x"].backspace,n["x"].left,n["x"].right,n["x"].delete].includes(t))return;const e=this.selectedItems.length-1;if(t===n["x"].left)-1===this.selectedIndex?this.selectedIndex=e:this.selectedIndex--;else if(t===n["x"].right)this.selectedIndex>=e?this.selectedIndex=-1:this.selectedIndex++;else if(-1===this.selectedIndex)return void(this.selectedIndex=e);const s=this.selectedItems[this.selectedIndex];if([n["x"].backspace,n["x"].delete].includes(t)&&!this.getDisabled(s)){const t=this.selectedIndex===e?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===t?this.setValue(this.multiple?[]:void 0):this.selectItem(s),this.selectedIndex=t}},clearableCallback(){this.internalSearch=void 0,a["a"].options.methods.clearableCallback.call(this)},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data=t.data||{},t.data.attrs=t.data.attrs||{},t.data.attrs.autocomplete=t.data.attrs.autocomplete||"disabled",t.data.domProps=t.data.domProps||{},t.data.domProps.value=this.internalSearch,t},genInputSlot(){const t=a["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?a["a"].options.methods.genSelections.call(this):[]},onClick(){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;a["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){a["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(){this.activateMenu()},selectItem(t){a["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){a["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){if(-1===this.selectedIndex)return;const e=this.selectedItems[this.selectedIndex],s=this.getText(e);t.clipboardData.setData("text/plain",s),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",s),t.preventDefault()}}})},d903:function(t,e,s){"use strict";var a=s("4e82"),i=s("58df"),n=s("d9bd"),r=s("2b0e");const o=r["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(n["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(n["c"])("v-item should only contain a single element",this),t)}});e["a"]=Object(i["a"])(o,Object(a["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"})}}]);
//# sourceMappingURL=chunk-5f7d987e.48665697.js.map