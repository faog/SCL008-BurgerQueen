(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{238:function(e,t,n){e.exports=n.p+"static/media/burger-queen.539b4462.png"},248:function(e,t,n){e.exports=n(530)},253:function(e,t,n){},254:function(e,t,n){},273:function(e,t){},285:function(e,t){},287:function(e,t){},468:function(e,t){},506:function(e,t,n){},507:function(e){e.exports={lunch:[{categoryName:"Hamburguesas",items:[{product:"Hamburguesa",types:["Pollo","Vacuno","Vegetariana"],size:[{product:"Simple",price:1500},{product:"Doble",price:3500}],toppings:[{product:"Huevo",price:500},{product:"queso",price:500}]}]},{categoryName:"Acompa\xf1amientos",items:[{product:"Papas Fritas",price:500},{product:"Onion Rings",price:500}]},{categoryName:"Bebestibles",items:[{product:"Agua",size:[{product:"500ml",price:500},{product:"750ml",price:800}]},{product:"Gaseosa",size:[{product:"500ml",price:700},{product:"750ml",price:1e3}]}]}],breakfast:[{product:"Caf\xe9 americano",price:500},{product:"Caf\xe9 con leche",price:700},{product:"Sandwich de jam\xf3n y queso",price:1e3},{product:"Jugo natural",price:700}]}},529:function(e,t,n){},530:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(253),n(9)),u=n(10),s=n(12),l=n(11),d=n(13),p=n(238),m=n.n(p),h=(n(254),function(){return r.a.createElement("nav",null,r.a.createElement("img",{src:m.a,alt:"Logo"}))}),b=n(127),f=n(239),y=n.n(f),v=n(2),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(){this.props.buttonOnClick()}},{key:"render",value:function(){return r.a.createElement("button",{type:"button",className:"btn btn-primary mb-2 ".concat(this.props.className),onClick:this.handleClick},this.props.name)}}]),t}(a.Component),k=(n(506),n(507)),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).addProduct=n.addProduct.bind(Object(v.a)(n)),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"addProduct",value:function(e){this.props.onAddProduct(e)}},{key:"breakfast",value:function(){var e=this;return k.breakfast.map(function(t){return r.a.createElement(g,{name:t.product,buttonOnClick:function(n){e.addProduct(t,n)},className:"breakfast",key:t.product})})}},{key:"lunch",value:function(){var e=this;return k.lunch.map(function(t){return r.a.createElement("div",{key:t.categoryName},t.categoryName,t.items.map(function(t,n){return t.size?r.a.createElement("div",{key:t.product},t.product,t.size.map(function(a,c){return r.a.createElement(g,{key:n+"_"+c,name:a.product,className:"lunch",buttonOnClick:function(n){e.addProduct([t,a],n)}})})):r.a.createElement(g,{key:n,name:t.product,className:"lunch",buttonOnClick:function(n){e.addProduct(t,n)}})}))})}},{key:"render",value:function(){return r.a.createElement("div",null,"Desayuno"===this.props.menuname?this.breakfast():"","Resto del d\xeda"===this.props.menuname?this.lunch():"")}}]),t}(a.Component),E=n(531),j=n(532),C=n(245),w=n(246),P=function(e){function t(e,n){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e,n))).handleShow=a.handleShow.bind(Object(v.a)(a)),a.handleClose=a.handleClose.bind(Object(v.a)(a)),a.handleAdd=a.handleAdd.bind(Object(v.a)(a)),a.setBurgerTopping=a.setBurgerTopping.bind(Object(v.a)(a)),a.setBurgerType=a.setBurgerType.bind(Object(v.a)(a)),a.state={show:!1,product:{}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0,product:{}})}},{key:"handleAdd",value:function(){this.setState({show:!1}),console.log(this.state.product),this.state.product.product&&this.props.onAddToBill(this.state.product)}},{key:"setBurgerType",value:function(e){this.setState({product:{product:this.props.product,size:this.props.subproduct,topping:this.state.product.topping,type:e,price:this.props.price}})}},{key:"setBurgerTopping",value:function(e,t){this.setState({product:{product:this.props.product,size:this.props.subproduct,topping:e,type:this.state.product.type,price:this.props.price+t}})}},{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(E.a.Header,{closeButton:!0},r.a.createElement(E.a.Title,null,this.props.product," ",this.props.subproduct)),r.a.createElement(E.a.Body,null,r.a.createElement("div",{className:"row"},"Tipos de ",this.props.product),r.a.createElement(j.a,{className:"row mt-3",name:"typesgroup"},this.props.types.map(function(t){return r.a.createElement(C.a,{type:"radio",name:"typesradio",className:"m-1",variant:"primary",value:t,key:t,onClick:function(n){return e.setBurgerType(t,n)}},t)})),r.a.createElement("div",{className:"row"},"Agregados"),r.a.createElement("div",{className:"row m-1"},r.a.createElement(j.a,{className:"row mt-3",name:"toppingsgroup"},r.a.createElement(C.a,{type:"radio",name:"toppingsradio",className:"m-1",variant:"primary",value:"",key:"notopping",defaultChecked:!0,onClick:function(t){return e.setBurgerTopping("",0,t)}},"Ninguno"),this.props.toppings.map(function(t){return r.a.createElement(C.a,{type:"radio",name:"toppingsradio",className:"m-1",variant:"primary",value:t.product,key:e.props.product+"_"+t.product,onClick:function(n){return e.setBurgerTopping(t.product,t.price,n)}},t.product)})))),r.a.createElement(E.a.Footer,null,r.a.createElement(w.a,{variant:"secondary",onClick:this.handleClose},"Cancelar"),r.a.createElement(w.a,{variant:"primary",onClick:this.handleAdd},"Agregar")))}}]),t}(a.Component),B=function(e){function t(e,n){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(l.a)(t).call(this,e,n))).deleteProduct=a.deleteProduct.bind(Object(v.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"deleteProduct",value:function(e){this.props.onDeleteProduct(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.products.map(function(t,n){return r.a.createElement("div",{className:"row border",key:n},r.a.createElement("div",{className:"col-md-11 align-middle"},t.product," ",t.size," ",t.type,t.topping&&""!==t.topping?"con "+t.topping:"","$",t.price,r.a.createElement(w.a,{className:"col-md-1 align-middle",variant:"outline-danger",size:"sm",key:"btn"+n,onClick:function(t){return e.deleteProduct(n,t)}},"X")))}))}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).showMenu=n.showMenu.bind(Object(v.a)(n)),n.addProduct=n.addProduct.bind(Object(v.a)(n)),n.addProductToBill=n.addProductToBill.bind(Object(v.a)(n)),n.deleteProductFromBill=n.deleteProductFromBill.bind(Object(v.a)(n)),n.modalRef=r.a.createRef(),n.state={products:[]},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"addProduct",value:function(e){Array.isArray(e)&&e[0].types?(o.a.render(r.a.createElement(P,{types:e[0].types,toppings:e[0].toppings,product:e[0].product,subproduct:e[1].product,price:e[1].price,onAddToBill:this.addProductToBill,ref:this.modalRef}),document.getElementById("modaldiv")),this.modalRef.current.handleShow()):this.addProductToBill(e)}},{key:"showMenu",value:function(e){o.a.render(r.a.createElement(O,{menuname:e,onAddProduct:this.addProduct}),document.getElementById("menuoptions"))}},{key:"addProductToBill",value:function(e){var t=this.state.products;if(Array.isArray(e)){var n={product:e[0].product,size:e[1].product,price:e[1].price};t.push(n)}else t.push(e);this.setState({products:t})}},{key:"deleteProductFromBill",value:function(e){var t=this.state.products;t.splice(e,1),this.setState({products:t})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm"},r.a.createElement("h5",null,"Ingrese la orden"),r.a.createElement(g,{name:"Desayuno",buttonOnClick:function(t){return e.showMenu("Desayuno",t)}}),r.a.createElement(g,{name:"Resto del d\xeda",buttonOnClick:function(t){return e.showMenu("Resto del d\xeda",t)}}),r.a.createElement("div",{id:"menuoptions"})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("h5",null,"Resumen Pedido"),r.a.createElement(B,{products:this.state.products,onDeleteProduct:this.deleteProductFromBill}))))}}]),t}(a.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Hola Cocina")}}]),t}(a.Component);Object(b.configure)({adapter:new y.a});var A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"containerWaiter",value:function(){o.a.render(r.a.createElement(N,null),document.getElementById("containerrole"))}},{key:"containerKitchen",value:function(){o.a.render(r.a.createElement(T,null),document.getElementById("containerrole"))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{name:"Mesero",buttonOnClick:this.containerWaiter}),r.a.createElement(g,{name:"Cocina",buttonOnClick:this.containerKitchen}),r.a.createElement("div",{id:"containerrole"}))}}]),t}(a.Component),S=(n(529),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(A,null),r.a.createElement("div",{id:"modaldiv"}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[248,1,2]]]);
//# sourceMappingURL=main.30d1f4d9.chunk.js.map