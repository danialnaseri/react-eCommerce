(this["webpackJsonpreact-shopware"]=this["webpackJsonpreact-shopware"]||[]).push([[0],{138:function(e,a,t){e.exports=t(284)},166:function(e,a,t){},170:function(e,a){},172:function(e,a){},186:function(e,a){},188:function(e,a){},216:function(e,a){},218:function(e,a){},219:function(e,a){},225:function(e,a){},227:function(e,a){},245:function(e,a){},248:function(e,a){},264:function(e,a){},267:function(e,a){},284:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(47),l=t.n(c),o=t(18),s=t(5),i=t(7),m=function(e){return{type:"ADD_TO_CART",product:e}},d=function(e){var a=e.product,t=Object(i.b)();return r.a.createElement("div",null,r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"p-2 d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("img",{style:{width:"90px"},src:a.image,alt:"/#",className:"img-fluid img-width"}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("strong",null,a.name)),r.a.createElement("div",null,r.a.createElement("small",null,a.quantity," x ",a.price," SEK")))),r.a.createElement("div",{className:"btn-group btn-group-sm",role:"group","aria-label":"quantity"},r.a.createElement("button",{onClick:function(){t({type:"REMOVE_FROM_CART",id:a._id})},type:"button",className:"btn btn-grey px-3 "},"-"),r.a.createElement("button",{onClick:function(){t(m(a))},type:"button",className:"btn btn-grey px-3"},"+")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-sm px-3",onClick:function(){t({type:"DELETE_PRODUCT_FROM_CART",id:a._id})}},r.a.createElement("i",{className:"fas fa-trash"})))),r.a.createElement("div",{className:"dropdown-divider"})))},u=function(e){var a=e.products,t=Object(i.c)((function(e){return e.cart.shoppingCart})),n=Object(i.c)((function(e){return e.cart.shoppingCartTotal})),c=Object(i.b)();return r.a.createElement("div",null,r.a.createElement("div",null,t.length>0?t.map((function(e){return r.a.createElement(d,{product:e,key:e._id})})):r.a.createElement("div",{className:"cart-item"},r.a.createElement("div",{className:"p-2 d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"d-flex align-items-center"},"Din kundvagn \xe4r tom.")),r.a.createElement("div",{className:"dropdown-divider"}))),r.a.createElement("div",{className:"p-2 d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"ml-2"},r.a.createElement("div",{className:"total-price"},"Totalt: ",r.a.createElement("span",{className:"ml-1"},n," SEK")),r.a.createElement("small",{className:"text-muted"},"inkl. moms")),r.a.createElement("button",{onClick:function(){c(function(e){return{type:"CLEAR_CART",products:e}}(a))},className:"btn btn-sm btn-danger"},"T\xf6m varukorgen"),r.a.createElement("button",{onClick:function(e){e.stopPropagation()},className:"btn btn-sm white-text unique-color"},"G\xe5 till Kassan")))},p=function(){var e=Object(i.c)((function(e){return e.cart.shoppingCartCountItem}));return r.a.createElement("nav",{className:"mb-1 navbar navbar-expand-lg navbar-dark unique-color-dark fixed-top scrolling-navbar"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{to:"/",className:"navbar-brand"},r.a.createElement("i",{className:"fas fa-atom"})," React Shop"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent-333","aria-controls":"navbarSupportedContent-333","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse text-right ",id:"navbarSupportedContent-333"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/products"},"Products"))),r.a.createElement("ul",{className:"navbar-nav ml-auto nav-flex-icons float-right"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{href:"/#",className:"nav-link mr-4",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},e," ",r.a.createElement("i",{className:"fas fa-shopping-cart"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right z-depth-2 shopping-cart"},r.a.createElement(u,null))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{href:"/#",className:"nav-link dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("i",{className:"fas fa-user"})),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right z-depth-2"}))))))},E=t(37),f=t.n(E),g=t(69),h=t(70),b=t.n(h),v=function(e){return{type:"SET_PRODUCTS",payload:e}},N=function(e){return{type:"SET_PRODUCT",payload:e}},x=function(e){var a=e.product;return r.a.createElement("div",{className:"col mb-4 text-center mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"view overlay"},r.a.createElement("img",{className:"card-img-top",src:a.image,alt:"#"}),r.a.createElement(o.b,{to:"/product/"+a._id},r.a.createElement("div",{className:"mask rgba-white-slight"}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},a.name),r.a.createElement("p",{className:"card-text"},a.desc),r.a.createElement(o.b,{to:"/product/"+a._id,className:"btn unique-color white-text btn-md"},"Visa Produkt"))))},C=function(){var e=Object(i.b)(),a=Object(i.c)((function(e){return e.products.products}));return Object(n.useEffect)((function(){e(function(){var e=Object(g.a)(f.a.mark((function e(a){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:9191/api/products/");case 2:null!==(t=e.sent)&&a(v(t.data));case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[e]),r.a.createElement("div",{className:"row row-cols-1 row-cols-md-3"},a.map((function(e){return r.a.createElement(x,{product:e,key:e._id})})))},y=function(){return r.a.createElement("div",null,r.a.createElement(C,null))},w=function(e){var a=e.match.params.id,t=Object(i.b)(),c=Object(i.c)((function(e){return e.product.product}));Object(n.useEffect)((function(){t(function(e){return function(){var a=Object(g.a)(f.a.mark((function a(t){var n;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.get("http://localhost:9191/api/products/"+e);case 2:null!==(n=a.sent)&&t(N(n.data));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(a))}),[t,a]);return r.a.createElement("div",null,r.a.createElement("div",{style:{marginTop:"8.5rem"},className:"container  py-5 z-depth-1"},r.a.createElement("section",{className:"text-center"},r.a.createElement("h3",{className:"font-weight-bold mb-5"},"Produktinformation"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{id:"carousel-thumb",className:"carousel slide carousel-fade carousel-thumbnails","data-ride":"carousel"},r.a.createElement("div",{className:"carousel-inner text-center text-md-left",role:"listbox"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{src:c.image,alt:"",className:"img-fluid"}))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carousel-thumb",role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carousel-thumb",role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next")))),r.a.createElement("div",{className:"col-lg-5 text-center text-md-left"},r.a.createElement("h2",{className:"h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4"},r.a.createElement("strong",null,c.name)),r.a.createElement("span",{className:"badge badge-danger product mb-4 ml-xl-0 ml-4"},"bestseller"),r.a.createElement("h3",{className:"h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4"},r.a.createElement("span",{className:"red-text font-weight-bold"},r.a.createElement("strong",null,c.price," SEK"))),r.a.createElement("div",{className:"accordion md-accordion",id:"accordionEx",role:"tablist","aria-multiselectable":"true"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",role:"tab",id:"headingOne1"},r.a.createElement("a",{"data-toggle":"collapse","data-parent":"#accordionEx",href:"#collapseOne1","aria-expanded":"true","aria-controls":"collapseOne1"},r.a.createElement("h5",{className:"mb-0"},"Beskrivning",r.a.createElement("i",{className:"fas fa-angle-down rotate-icon"})))),r.a.createElement("div",{id:"collapseOne1",className:"collapse show",role:"tabpanel","aria-labelledby":"headingOne1","data-parent":"#accordionEx"},r.a.createElement("div",{className:"card-body"}," ",c.desc))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",role:"tab",id:"headingTwo2"},r.a.createElement("a",{className:"collapsed","data-toggle":"collapse","data-parent":"#accordionEx",href:"#collapseTwo2","aria-expanded":"false","aria-controls":"collapseTwo2"},r.a.createElement("h5",{className:"mb-0"},"Details",r.a.createElement("i",{className:"fas fa-angle-down rotate-icon"})))),r.a.createElement("div",{id:"collapseTwo2",className:"collapse",role:"tabpanel","aria-labelledby":"headingTwo2","data-parent":"#accordionEx"},r.a.createElement("div",{className:"card-body"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et."))),r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header",role:"tab",id:"headingThree3"},r.a.createElement("a",{className:"collapsed","data-toggle":"collapse","data-parent":"#accordionEx",href:"#collapseThree3","aria-expanded":"false","aria-controls":"collapseThree3"},r.a.createElement("h5",{className:"mb-0"},"Shipping",r.a.createElement("i",{className:"fas fa-angle-down rotate-icon"})))),r.a.createElement("div",{id:"collapseThree3",className:"collapse",role:"tabpanel","aria-labelledby":"headingThree3","data-parent":"#accordionEx"},r.a.createElement("div",{className:"card-body"},"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.")))),r.a.createElement("section",{className:"color"},r.a.createElement("div",{className:"mt-5"},r.a.createElement("p",{className:"grey-text"}),r.a.createElement("div",{className:"row text-center text-md-left"},r.a.createElement("div",{className:"col-md-4 col-12"},r.a.createElement("div",{className:"form-group"})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"form-group"})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"form-group"}))),r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-md-12 text-center text-md-left text-md-right"},r.a.createElement("button",{onClick:function(){t(m(c))},className:"btn white-text unique-color btn-rounded"},r.a.createElement("i",{className:"fas fa-cart-plus mr-2","aria-hidden":"true"})," ","L\xe4gg till varukorgen"))))))))))},T=function(){return r.a.createElement("div",{style:{marginTop:"10rem"}},r.a.createElement("div",{className:"container my-5 z-depth-1"},r.a.createElement("section",{className:"dark-grey-text p-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5 mb-4 mb-md-0"},r.a.createElement("div",{className:"view"},r.a.createElement("img",{src:"https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg",className:"img-fluid",alt:"smaple"}))),r.a.createElement("div",{className:"col-md-7 mb-lg-0 mb-4"},r.a.createElement("form",{className:"",action:""},r.a.createElement("h3",{className:"font-weight-bold my-3"},"Missa inte v\xe5ra erbjudande!"),r.a.createElement("p",{className:"text-muted mb-4 pb-2"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae, fuga similique quos aperiam tenetur quo ut rerum debitis."),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"E-post adress","aria-label":"Enter your email address","aria-describedby":"button-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-md unique-color white-text rounded-right m-0 px-3 py-2 z-depth-0 waves-effect",type:"submit",id:"button-addon2"},"SUBSCRIBE"))),r.a.createElement("small",{className:"form-text black-text"},r.a.createElement("strong",null,"* Skriv din E-post adress f\xf6r fler sp\xe4nnande erbjudande."))))))))};var _=function(){return r.a.createElement(o.a,null,r.a.createElement(p,null),r.a.createElement("div",{className:"container mt-5"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:T}),r.a.createElement(s.a,{exact:!0,path:"/products",component:y}),r.a.createElement(s.a,{exact:!0,path:"/product/:id",component:w}))))},O=(t(166),t(21)),k=t(137),S=t(38),R=t.n(S),q="d8ba1c9c-1e08-442c-a185-ec15379e033c",j={shoppingCart:[],shoppingCartCountItem:0,shoppingCartTotal:0},D=function(e){var a=0;return e.forEach((function(e){a+=e.quantity})),a},I=function(e){var a=0;return e.forEach((function(e){a+=e.price*e.quantity})),a},A={products:[]},P={product:{}},U=Object(O.c)({cart:function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":try{(e=a.shoppingCart.findIndex((function(e){return e._id===t.product._id})))<0?a.shoppingCart=[].concat(Object(k.a)(a.shoppingCart),[t.product]):a.shoppingCart[e].quantity+=1,a.shoppingCartCountItem=D(a.shoppingCart),a.shoppingCartTotal=I(a.shoppingCart),localStorage.setItem("d8ba1c9c-1e08-442c-a185-ec15379e033c",R.a.sign(a,q))}catch(r){}return a;case"DELETE_PRODUCT_FROM_CART":return e=a.shoppingCart.findIndex((function(e){return e._id===t.id})),a.shoppingCart[e].quantity=1,a.shoppingCart=a.shoppingCart.filter((function(e){return e._id!==t.id})),a.shoppingCartCountItem=D(a.shoppingCart),a.shoppingCartTotal=I(a.shoppingCart),localStorage.setItem("d8ba1c9c-1e08-442c-a185-ec15379e033c",R.a.sign(a,q)),a;case"REMOVE_FROM_CART":try{e=a.shoppingCart.findIndex((function(e){return e._id===t.id})),1===a.shoppingCart[e].quantity?a.shoppingCart=a.shoppingCart.filter((function(e){return e._id!==t.id})):a.shoppingCart[e].quantity-=1,a.shoppingCartCountItem=D(a.shoppingCart),a.shoppingCartTotal=I(a.shoppingCart),localStorage.setItem("d8ba1c9c-1e08-442c-a185-ec15379e033c",R.a.sign(a,q))}catch(c){}return a;case"CLEAR_CART":try{a.shoppingCart.forEach((function(e){e.quantity=1})),a.shoppingCart=[],a.shoppingCartCountItem=0,a.shoppingCartTotal=0,localStorage.removeItem("d8ba1c9c-1e08-442c-a185-ec15379e033c")}catch(l){}return a;default:var n=R.a.decode(localStorage.getItem("d8ba1c9c-1e08-442c-a185-ec15379e033c"));return n&&(a=n),a}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PRODUCTS":return e.products=a.payload,e;default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PRODUCT":return e.product=a.payload,e;default:return e}}}),L=t(136),M=Object(O.e)(U,Object(O.d)(Object(O.a)(L.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));l.a.render(r.a.createElement(i.a,{store:M},r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null))),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.57de051a.chunk.js.map