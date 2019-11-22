(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f629b64c"],{"0cbd":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"validation-forms",fluid:"",tag:"section"}},[a("base-v-component",{attrs:{heading:"Forms",link:"components/forms"}}),a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("base-material-card",{staticClass:"py-3 px-5",attrs:{color:"success",icon:"mdi-mail",title:"Register Form"}},[a("v-form",[a("v-text-field",{attrs:{color:"secondary",label:"Email Address*"}}),a("v-text-field",{attrs:{label:"Password*","append-icon":t.show?"mdi-eye":"mdi-eye-off",type:t.show?"text":"password",color:"secondary"},on:{"click:append":function(e){e.preventDefault(),t.show=!t.show}}}),a("v-text-field",{attrs:{label:"Confirm Password*","append-icon":t.show2?"mdi-eye":"mdi-eye-off",type:t.show2?"text":"password",color:"secondary"},on:{"click:append":function(e){e.preventDefault(),t.show2=!t.show2}}}),a("div",{staticClass:"body-2 font-weight-light"},[t._v("\n            * Required Fields\n          ")]),a("v-card-actions",{staticClass:"pa-0"},[a("v-checkbox",{attrs:{label:"Subscribe to newsletter"}}),a("v-spacer"),a("v-btn",{attrs:{default:"",color:"success"}},[t._v("\n              Register\n            ")])],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("base-material-card",{staticClass:"py-3 px-5",attrs:{color:"success",icon:"mdi-camera-account",title:"Login Form"}},[a("v-form",[a("v-text-field",{attrs:{color:"secondary",label:"Email Address*"}}),a("v-text-field",{attrs:{label:"Password*","append-icon":t.show3?"mdi-eye":"mdi-eye-off",type:t.show3?"text":"password",color:"secondary"},on:{"click:append":function(e){e.preventDefault(),t.show3=!t.show3}}}),a("v-card-actions",{staticClass:"pa-0"},[a("v-spacer"),a("v-btn",{attrs:{default:"",color:"success"}},[t._v("\n              Login\n            ")])],1)],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("form",{attrs:{action:"","data-vv-scope":"form-1"},on:{submit:function(e){return e.preventDefault(),t.validateForm("form-1")}}},[a("base-material-card",{staticClass:"px-5 py-3",attrs:{color:"success",inline:"",title:"Type Validation"}},[a("v-row",{attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Required Text\n            ")]),a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{"error-messages":t.errors.collect("form-1.required"),color:"secondary","data-vv-name":"required"},model:{value:t.required,callback:function(e){t.required=e},expression:"required"}})],1),a("v-col",[a("code",[t._v("required")])])],1),a("v-row",{attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Email\n            ")]),a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{"error-messages":t.errors.collect("form-1.email"),color:"secondary","data-vv-name":"email",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-col",[a("code",[t._v('type="email"')])])],1),a("v-row",{attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Number\n            ")]),a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"}],attrs:{"error-messages":t.errors.collect("form-1.number"),"data-vv-name":"number",color:"secondary",type:"number"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),a("v-col",[a("code",[t._v('type="number"')])])],1),a("v-row",{attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Url\n            ")]),a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|url",expression:"'required|url'"}],attrs:{color:"secondary","data-vv-name":"url",type:"url","error-messages":t.errors.collect("form-1.url")},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}})],1),a("v-col",[a("code",[t._v('type="url"')])])],1),a("div",{staticClass:"pa-3 text-center"},[a("v-btn",{attrs:{color:"success",default:"",type:"submit"}},[t._v("\n              Validate Inputs\n            ")])],1)],1)],1)]),a("v-col",{attrs:{cols:"12"}},[a("form",{attrs:{action:"","data-vv-scope":"form-2"},on:{submit:function(e){return e.preventDefault(),t.validateForm("form-2")}}},[a("base-material-card",{attrs:{color:"success",inline:"",title:"Range Validation"}},[a("v-row",{attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Min Length\n            ")]),a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|min:5",expression:"'required|min:5'"}],attrs:{"error-messages":t.errors.collect("form-2.min-length"),color:"secondary","data-vv-name":"min-length"},model:{value:t.min,callback:function(e){t.min=e},expression:"min"}})],1),a("v-col",[a("code",[t._v('minLength="5"')])])],1),a("v-row",{attrs:{align:"center",dense:""}},[a("v-col",{staticClass:"text-right body-1 grey--text",attrs:{cols:"2"}},[t._v("\n              Max Length\n            ")]),a("v-col",{attrs:{cols:"8"}},[a("v-text-field",{directives:[{name:"validate",rawName:"v-validate",value:"required|max:5",expression:"'required|max:5'"}],attrs:{"error-messages":t.errors.collect("form-2.max-length"),color:"secondary","data-vv-name":"max-length"},model:{value:t.max,callback:function(e){t.max=e},expression:"max"}})],1),a("v-col",[a("code",[t._v('maxLength="5"')])])],1),a("div",{staticClass:"pa-3 text-center"},[a("v-btn",{attrs:{color:"success",default:"",type:"submit"}},[t._v("\n              Validate Inputs\n            ")])],1)],1)],1)])],1)],1)},s=[],r={name:"DashboardFormsValidationForms",$_veeValidate:{validator:"new"},data:function(){return{email:"",max:"",min:"",number:null,url:"",required:"",show:!1,show2:!1,show3:!1}},methods:{validateForm:function(t){this.$validator.validateAll(t).then((function(t){t&&alert("Form Submitted!")}))}}},n=r,o=a("2877"),l=a("6544"),c=a.n(l),d=a("8336"),u=a("99d9"),h=a("ac7c"),v=a("62ad"),p=a("a523"),m=a("4bd4"),f=a("0fd9"),g=a("2fa4"),b=a("8654"),y=Object(o["a"])(n,i,s,!1,null,null,null);e["default"]=y.exports;c()(y,{VBtn:d["a"],VCardActions:u["a"],VCheckbox:h["a"],VCol:v["a"],VContainer:p["a"],VForm:m["a"],VRow:f["a"],VSpacer:g["a"],VTextField:b["a"]})},"0fd9":function(t,e,a){"use strict";a("4b85");var i=a("2b0e"),s=a("d9f7"),r=a("80d2");const n=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return n.reduce((a,i)=>{return a[t+Object(r["E"])(i)]=e(),a},{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),h=l("justify",()=>({type:String,default:null,validator:u})),v=t=>[...o,"space-between","space-around","stretch"].includes(t),p=l("alignContent",()=>({type:String,default:null,validator:v})),m={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(p)},f={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,a){let i=f[t];if(null!=a){if(e){const a=e.replace(t,"");i+=`-${a}`}return i+=`-${a}`,i.toLowerCase()}}const b=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...h,alignContent:{type:String,default:null,validator:v},...p},render(t,{props:e,data:a,children:i}){let r="";for(const s in e)r+=String(e[s]);let n=b.get(r);if(!n){let t;for(t in n=[],m)m[t].forEach(a=>{const i=e[a],s=g(t,a,i);s&&n.push(s)});n.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(r,n)}return t(e.tag,Object(s["a"])(a,{staticClass:"row",class:n}),i)}})},"4bd4":function(t,e,a){"use strict";var i=a("58df"),s=a("7e2b"),r=a("3206");e["a"]=Object(i["a"])(s["a"],Object(r["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>{return t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0})},a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},5311:function(t,e,a){"use strict";var i=a("5607"),s=a("2b0e");e["a"]=s["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}})},"6ca7":function(t,e,a){},8547:function(t,e,a){"use strict";var i=a("2b0e"),s=a("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["k"]}}})},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var i=a("2b0e");function s(t){return i["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=` ${t.join(" ")}`)}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,s)}})}var r=a("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:i}){let s;const{attrs:n}=a;return n&&(a.attrs={},s=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(r["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),i)}})},ac7c:function(t,e,a){"use strict";a("6ca7"),a("ec29");var i=a("9d26"),s=a("c37a"),r=a("fe09");e["a"]=r["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},ec29:function(t,e,a){},fe09:function(t,e,a){"use strict";var i=a("c37a"),s=a("5311"),r=a("8547"),n=a("58df");e["a"]=Object(n["a"])(i["a"],s["a"],r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const a=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===a&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-f629b64c.f5ded35a.js.map