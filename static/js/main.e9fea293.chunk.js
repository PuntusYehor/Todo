(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=(a(31),a(5)),m=a(3),i={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"},s=function(e){return{type:"ADD_TODO",payload:e}},u=function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}};var d=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(m.b)(),i=new Intl.DateTimeFormat("en-Us",{day:"2-digit",month:"short",year:"numeric"}).format(new Date);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex flex-row align-items-center"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",id:"exampleFormControlInput1",placeholder:"Add new...",onChange:function(e){return l(e.target.value)},value:a}),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){!function(e){if(e){var t={id:Date.now(),completed:!1,description:e,date:i};c(s(t))}}(a),l("")}},"Add"))))},E=a(22),p=a(15),f=function(e){var t=e.todo,a=Object(m.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-group list-group-horizontal rounded-0 bg-transparent"},r.a.createElement("li",{className:"list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{className:"form-check-input me-0",type:"checkbox",value:"","aria-label":"...",onChange:function(){return e=t.id,void a(function(e){return{type:"TOGGLE_TODO",payload:e}}(e));var e},checked:!!t.completed}))),r.a.createElement("li",{className:"list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent"},r.a.createElement("p",{className:"lead fw-normal mb-0",style:{textDecoration:t.completed?"line-through":"none"}},t.description)),r.a.createElement("li",{className:"list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent"},r.a.createElement("div",{className:"d-flex flex-row justify-content-end mb-1"},r.a.createElement("a",{href:"#!",className:"text-danger","data-mdb-toggle":"tooltip",title:"Delete todo",onClick:function(){return e=t.id,void a(function(e){return{type:"DELETE_TODO",payload:e}}(e));var e}},r.a.createElement(E.a,{icon:p.a}))),r.a.createElement("div",{className:"text-end text-muted"},r.a.createElement("a",{href:"#!",className:"text-muted","data-mdb-toggle":"tooltip",title:"Created date"},r.a.createElement("p",{className:"small mb-0"},r.a.createElement("span",{className:"fa fa-info-circle me-2"}),t.date))))))},v=function(){var e=Object(m.c)(function(e){return e.visibility}),t=Object(m.c)(function(e){return e.todos});if(0===t.length)return r.a.createElement("div",null);var a=t.map(function(e){return e?r.a.createElement("div",{key:e.id},r.a.createElement(f,{todo:e})):r.a.createElement("div",null)}),n=t.map(function(e){return e&&e.completed?r.a.createElement("div",{key:e.id},r.a.createElement(f,{todo:e})):r.a.createElement("div",null)}),l=t.map(function(e){return e&&!e.completed?r.a.createElement("div",{key:e.id},r.a.createElement(f,{todo:e})):r.a.createElement("div",null)});switch(e){case i.SHOW_ALL:return r.a.createElement(r.a.Fragment,null,a);case i.SHOW_ACTIVE:return r.a.createElement(r.a.Fragment,null,l);case i.SHOW_COMPLETED:return r.a.createElement(r.a.Fragment,null,n);default:return r.a.createElement(r.a.Fragment,null,a)}};var b=function(){var e=Object(m.b)(),t=function(){e(u(i.SHOW_ALL))},a=function(a){switch(a){case"showAll":t();break;case"showCompleted":e(u(i.SHOW_COMPLETED));break;case"showActive":e(u(i.SHOW_ACTIVE));break;default:t()}};return r.a.createElement("div",{className:"d-flex justify-content-end align-items-center mb-4 pt-2 pb-3"},r.a.createElement("p",{className:"small mb-0 me-2 text-muted"},"Filter"),r.a.createElement("select",{className:"select",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:"showAll"},"All"),r.a.createElement("option",{value:"showCompleted"},"Completed"),r.a.createElement("option",{value:"showActive"},"Active")))};var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"h1 text-center mt-3 mb-4 pb-3 text-primary"},r.a.createElement("span",{className:"fa fa-check-square me-1"}),r.a.createElement("u",null,"My Todo-s")),r.a.createElement("div",{className:"pb-2"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement(d,null)))),r.a.createElement(b,null),r.a.createElement("hr",{className:"my-4"}),r.a.createElement(v,null))},g=function(){return r.a.createElement("section",{className:"vh-100"},r.a.createElement("div",{className:"container py-5 h-100"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center h-100"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card",id:"list1"},r.a.createElement("div",{className:"card-body py-4 px-4 px-md-5"},r.a.createElement(O,null)))))))};a(39),a(11),a(40);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null))},y=a(4),N=i.SHOW_ALL,T=a(16),w=a(21),x=a(6),_=a(17),D=a(18),L=a.n(D),A=a(20),S=Object(y.combineReducers)({todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_TODO":return[].concat(Object(x.a)(e),[n]);case"TOGGLE_TODO":return e.map(function(e){return e.id===n?Object(w.a)({},e,{completed:!e.completed}):e});case"DELETE_TODO":return e.filter(function(e){return e.id!==n});default:return e}},visibility:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.filter;switch(a){case"SET_VISIBILITY_FILTER":return n;default:return e}}}),C={key:"root",storage:L.a},j=Object(A.a)(C,S),I=Object(y.legacy_createStore)(j,Object(T.composeWithDevTools)()),k=Object(_.a)(I),W=I,H=a(19);c.a.createRoot(document.getElementById("root")).render(r.a.createElement(m.a,{store:W},r.a.createElement(H.a,{loading:null,persistor:k},r.a.createElement(h,null))))}},[[23,1,2]]]);
//# sourceMappingURL=main.e9fea293.chunk.js.map