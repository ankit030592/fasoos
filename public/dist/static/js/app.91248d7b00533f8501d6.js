webpackJsonp([1],{"+Gxq":function(t,e,n){"use strict";var r=n("fnDg").a;var a=n("VU/8")(r,null,!1,function(t){n("4veK")},null,null);e.a=a.exports},"+Uu2":function(t,e){},0:function(t,e){},"3w/C":function(t,e){},"4veK":function(t,e){},"9M+g":function(t,e){},"9oia":function(t,e){},"HUt/":function(t,e,n){"use strict";var r=n("qRo1").a;var a=n("VU/8")(r,null,!1,function(t){n("n9mN")},null,null);e.a=a.exports},JCpY:function(t,e,n){"use strict";var r=n("rKsW").a;var a=n("VU/8")(r,null,!1,function(t){n("xBwK")},null,null);e.a=a.exports},JDVb:function(t,e,n){"use strict";var r=n("9NuQ").a;var a=n("VU/8")(r,null,!1,function(t){n("Y9O/")},null,null);e.a=a.exports},Jmt5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("/ocq"),s={data:function(){return{title:"Sample Kitchen Display",kitchen_data:"",fail:!1,error_message:""}},methods:{greeting:function(){return"hey cowboy"},getKitchen:function(){this.$http.get("/orders").then(function(t){this.getPrediction(),console.log(t),this.kitchen_data=t.body}).catch(function(t){return console.log(t),t})},processOrder:function(t){var e={product_id:Number(this.$refs.product_id[t].innerText)};this.$http.put("orders/processOrder",e).then(function(t){console.log(t),this.getKitchen()}).catch(function(t){console.log(t),this.fail=!0,this.error_message=t.body.error})},getPrediction:function(){this.$http.get("orders/prediction")}},mounted:function(){this.getKitchen(),setInterval(function(){this.getKitchen()}.bind(this),3e4)},beforeMount:function(){this.getKitchen()}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"center"},[n("table",[t._m(0),t._v(" "),t._l(t.kitchen_data,function(e,r){return n("tr",{key:r,model:{value:t.product_id,callback:function(e){t.product_id=e},expression:"product_id"}},[n("td",{ref:"product_id",refInFor:!0,staticStyle:{display:"none"},attrs:{type:"hidden"}},[t._v(t._s(e.product_id))]),t._v(" "),n("td",[t._v(t._s(e.product.product_name))]),t._v(" "),n("td",[t._v(t._s(e.quantity))]),t._v(" "),n("td",[t._v(t._s(e.created_till_now))]),t._v(" "),n("td",[t._v(t._s(e.predicted))]),t._v(" "),n("td",[n("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){e.preventDefault(),t.processOrder(r)}}},[t._v("Done")])])])})],2)])]),t._v(" "),n("div",{staticClass:"alert-message"},[t.fail?n("p",{staticClass:"error-message"},[t._v("Error : "+t._s(t.error_message))]):t._e()]),t._v(" "),n("span",[t._v("Predication is for next one hour")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Quantity")]),t._v(" "),n("th",[t._v("Created-till-now")]),t._v(" "),n("th",[t._v("Predicted")]),t._v(" "),n("th",[t._v("Status")])])}]};var o=n("VU/8")(s,i,!1,function(t){n("m4lm")},"data-v-64967672",null).exports,c={data:function(){return{product_name:"",quantity:"",success:!1,fail:!1,error_message:""}},methods:{createProduct:function(){var t={quantity:this.quantity,product_name:this.product_name};this.$http.post("/orders/createProduct",t).then(function(t){console.log(t),this.quantity="",this.product_name="",this.success=!0}).catch(function(t){console.log(t),this.fail=!0,this.error_message=t.body.error})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Order")]),t._v(" "),n("h4",[t._v("Create New Product")]),t._v(" "),n("div",{staticClass:"container"},[n("form",{staticClass:"form-inline"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Product Name:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.product_name,expression:"product_name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter Product Name",name:"product_name"},domProps:{value:t.product_name},on:{input:function(e){e.target.composing||(t.product_name=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Quantity:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Enter quantity",name:"quantity"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-default",on:{click:function(e){e.preventDefault(),t.createProduct(e)}}},[t._v("Submit")])])]),t._v(" "),n("div",{staticClass:"alert-message"},[t.success?n("p",{staticClass:"success-message"},[t._v("New order placed successfully")]):t._e(),t._v(" "),t.fail?n("p",{staticClass:"error-message"},[t._v("Error : "+t._s(t.error_message))]):t._e()])])},staticRenderFns:[]};var l=n("VU/8")(c,u,!1,function(t){n("+Uu2")},"data-v-4cc36cdb",null).exports,d={data:function(){return{product_id:"",product_list:"",product_name:"",quantity:"",success:!1,fail:!1}},methods:{getProducts:function(){this.$http.get("/orders/products").then(function(t){console.log(t.body),this.product_list=t.body}).catch(function(t){return console.log(t),t})},createOrder:function(){var t={quantity:this.quantity,product_id:this.product_id};this.$http.post("/orders/create",t).then(function(t){console.log(t),this.quantity="",this.product_name="",this.success=!0}).catch(function(t){console.log(t),this.fail=!0})}},beforeMount:function(){this.getProducts()}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Order")]),t._v(" "),n("h4",[t._v("Place An Order")]),t._v(" "),n("div",{staticClass:"container"},[n("form",{staticClass:"form-inline"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.product_id,expression:"product_id"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.product_id=e.target.multiple?n:n[0]}}},[n("option"),t._v(" "),t._l(t.product_list,function(e){return n("option",{domProps:{value:e.id}},[t._v("\n                    "+t._s(e.product_name)+"\n                ")])})],2),t._v(" "),n("div",{staticClass:"form-group"},[n("label",[t._v("Quantity:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Enter quantity",name:"quantity"},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-default",on:{click:function(e){e.preventDefault(),t.createOrder(e)}}},[t._v("Submit")])])]),t._v(" "),n("div",{staticClass:"alert-message"},[t.success?n("p",{staticClass:"success-message"},[t._v("Order placed successfully")]):t._e(),t._v(" "),t.fail?n("p",{staticClass:"error-message"},[t._v("Failed to place order")]):t._e()])])},staticRenderFns:[]};var _=n("VU/8")(d,v,!1,function(t){n("9oia")},"data-v-65f959f6",null).exports,p=[{path:"/",component:o},{path:"/product",component:l},{path:"/order",component:_}],f={name:"App",router:new a.a({routes:p}),components:{KitchenDisplay:o,Product:l,Order:_}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("div",{staticClass:"container-fluid"},[n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("Kitchen")]),t._v(" "),n("ul",{staticClass:"nav navbar-nav"},[n("li",{staticClass:"active"},[n("a",{attrs:{href:"#/order"}},[t._v("Place Order")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#/product"}},[t._v("Create New Product")])])])])])}]};var h=n("VU/8")(f,m,!1,function(t){n("3w/C")},null,null).exports,g=n("8+8L"),y=n("e6fC");n("Jmt5"),n("9M+g");r.a.component("kitchen",o),r.a.use(g.a),r.a.use(a.a),r.a.use(y.a),r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:h},template:"<App/>"})},"Y9O/":function(t,e){},dW2o:function(t,e){},m4lm:function(t,e){},n9mN:function(t,e){},r15W:function(t,e,n){"use strict";var r=n("E9Zr").a;var a=n("VU/8")(r,null,!1,function(t){n("dW2o")},null,null);e.a=a.exports},xBwK:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.91248d7b00533f8501d6.js.map