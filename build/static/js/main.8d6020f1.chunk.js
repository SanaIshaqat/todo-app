(this["webpackJsonpclass-32-solution-todo"]=this["webpackJsonpclass-32-solution-todo"]||[]).push([[0],{138:function(e,t,c){},139:function(e,t,c){"use strict";c.r(t);var n=c(20),s=c(21),i=c(25),a=c(24),r=c(0),j=c.n(r),l=c(8),b=c.n(l),o=c(53),u=c(10),d=c(23),O=c(32),h=function(e){var t=Object(r.useState)({}),c=Object(u.a)(t,2),n=c[0],s=c[1];return{handleChange:function(e){e.persist(),s((function(t){return Object(O.a)(Object(O.a)({},t),{},Object(d.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(n),t.target.reset()},values:n}},m=c(1),x=j.a.createContext(),p=function(e){Object(i.a)(c,e);var t=Object(a.a)(c);function c(e){var s;return Object(n.a)(this,c),(s=t.call(this,e)).state={itemsPerPage:2,sort:"Ascending",show:!0},s}return Object(s.a)(c,[{key:"render",value:function(){return Object(m.jsx)(x.Provider,{value:this.state,children:this.props.children})}}]),c}(r.Component),f=c(143),g=c(11);function v(e){var t=Object(r.useContext)(x),c=Object(r.useState)(1),n=Object(u.a)(c,2),s=n[0],i=n[1],a=Object(r.useState)((t.show?e.list:e.incomplete).slice(0,t.itemsPerPage)),j=Object(u.a)(a,2),l=j[0],b=j[1],o=Object(r.useState)(Math.ceil(e.list.length/t.itemsPerPage)),d=Object(u.a)(o,2),O=d[0],h=d[1];Object(r.useEffect)((function(){b((t.show?e.list:e.incomplete).slice(0,t.itemsPerPage)),h(Math.ceil((t.show?e.list:e.incomplete).length/t.itemsPerPage))}),[e.list,e.incomplete]),Object(r.useEffect)((function(){var c=(s-1)*t.itemsPerPage,n=c+t.itemsPerPage;b((t.show?e.list:e.incomplete).slice(c,n))}),[s,t.itemsPerPage]);var p=function(e){e!==s&&i(e)},v=function(){var e=[];s>1&&e.push(Object(m.jsx)(f.a,{class:"@ns-button",type:"button",onClick:function(){p(s-1)},children:"previous"}));for(var t=function(t){e.push(Object(m.jsx)(f.a,{class:"@ns-button",type:"button",onClick:function(){p(t)},children:t},t))},c=1;c<=O;c++)t(c);return s<=O&&e.push(Object(m.jsx)(f.a,{class:".bp3-active",type:"button",onClick:function(){p(s+1)},children:"next"})),Object(m.jsxs)("div",{className:"pages",children:[" ",e," "]})};return Object(m.jsxs)("div",{children:[Object(m.jsxs)(f.b,{className:"mainItem2",children:[Object(m.jsx)("h3",{className:"list",children:"Items List"}),l.map((function(t){return Object(m.jsxs)(f.b,{className:"listCard",interactive:!0,elevation:g.a.THREE,children:[Object(m.jsx)("h3",{children:Object(m.jsxs)("b",{children:[t.text," "]})}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Assigned to"})," : ",t.assignee]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("b",{children:"Difficulty"})," : ",t.difficulty]}),Object(m.jsxs)(f.a,{class:"@ns-button",type:"button",className:t.complete?"bp3-intent-success":"bp3-intent-danger",onClick:function(){return e.toggleComplete(t.id)},children:["Complete : ",t.complete.toString()]})]},t.id)}))]}),Object(m.jsx)(v,{})]})}var C=c(144);function P(e){var t=e.handleSubmit,c=e.handleChange;return Object(m.jsxs)(f.b,{className:"mainItem",interactive:!0,children:[Object(m.jsx)("h3",{class:"list",children:"Add A Task To Your List "}),Object(m.jsx)("br",{}),Object(m.jsx)("form",{onSubmit:t,children:Object(m.jsxs)(f.c,{labelFor:"text-input",labelInfo:"(required)",children:[Object(m.jsx)("label",{children:Object(m.jsx)("b",{children:"To Do Item"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(f.d,{onChange:c,name:"text",id:"text-input",placeholder:"Item Details"}),Object(m.jsx)("br",{}),Object(m.jsx)("label",{children:Object(m.jsx)("b",{children:"Assigned To"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(f.d,{onChange:c,name:"assignee",id:"text-input",placeholder:"Assignee Name"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"diff",children:[Object(m.jsx)("lable",{children:Object(m.jsx)("b",{children:"Difficulty"})}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{onChange:c,defaultValue:2,type:"range",min:1,max:5,name:"difficulty"})]}),Object(m.jsx)("div",{children:Object(m.jsx)(f.a,{className:"button",type:"submit",children:"Add Item"})})]})})]})}var y=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(r.useState)([]),i=Object(u.a)(s,2),a=i[0],j=i[1],l=h((function(e){e.id=Object(C.a)(),e.complete=!1,n([].concat(Object(o.a)(c),[e]))})),b=l.handleChange,d=l.handleSubmit;return Object(r.useEffect)((function(){var e=c.filter((function(e){return!e.complete}));j(e),document.title="To Do List: ".concat(a.length)}),[c]),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("h3",{id:"h2",children:["To Do List Manager (",a.length,")"]}),Object(m.jsxs)("div",{className:"mainCards",children:[Object(m.jsx)(P,{handleChange:b,handleSubmit:d}),Object(m.jsx)(v,{incomplete:a,list:c,toggleComplete:function(e){var t=c.map((function(t){return t.id==e&&(t.complete=!t.complete),t}));n(t)}})]})]})};c(137);function N(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(f.e,{className:"header",children:[Object(m.jsx)("br",{}),Object(m.jsxs)(f.e.Group,{"top-margin":10,children:[Object(m.jsx)(f.e.Heading,{children:Object(m.jsx)("h2",{children:"To-Do List App"})}),Object(m.jsx)(f.e.Divider,{}),Object(m.jsx)(f.a,{className:"bp4-minimal",icon:"list",text:"Home"})]})]})})}var S=function(){return Object(m.jsx)("footer",{children:"\xa9 SanaIshaqat-2021"})};c(138);var k=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(p,{children:[Object(m.jsx)(N,{}),Object(m.jsx)(y,{})]}),Object(m.jsx)(S,{})]})},D=function(e){Object(i.a)(c,e);var t=Object(a.a)(c);function c(){return Object(n.a)(this,c),t.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(m.jsx)(k,{})}}]),c}(j.a.Component),I=document.getElementById("root");b.a.render(Object(m.jsx)(D,{}),I)}},[[139,1,2]]]);
//# sourceMappingURL=main.8d6020f1.chunk.js.map