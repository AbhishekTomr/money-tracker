(this["webpackJsonpmoney-tracker"]=this["webpackJsonpmoney-tracker"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(7),s=a.n(c),l=(a(12),a(4)),r=a(2),i=(a(13),a(14),a(15),a(0));var d=function(e){var t=e.className;return Object(i.jsx)("div",{className:t,children:e.children})};a(17),a(18);var o=function(e){var t=new Date(e.date),a=t.toLocaleString("en-US",{month:"long"}),n=t.toLocaleString("en-US",{day:"2-digit"}),c=t.getFullYear();return Object(i.jsxs)("div",{className:"expense-datec",children:[Object(i.jsx)("div",{className:"d-month",children:a}),Object(i.jsx)("div",{className:"d-year",children:c}),Object(i.jsx)("div",{className:"d-date",children:n})]})};var j=function(e){var t=e.item,a=t.dates,n=t.names,c=t.costs,s=t.currency;return Object(i.jsxs)("div",{className:"expense-item",children:[Object(i.jsx)("div",{className:"expense-date",children:Object(i.jsx)(o,{date:a})}),Object(i.jsx)("div",{className:"expense-name",children:n}),Object(i.jsxs)("div",{className:"expense-cost",children:[c," ",s]}),Object(i.jsx)("div",{className:"delete-item",onClick:function(){e.deleteMe(t.id)},children:Object(i.jsx)("p",{role:"button",children:"\u274c"})})]})};a(19);var u=function(e){var t;t="year-filter "+e.className;var a=(new Date).getFullYear();return Object(i.jsxs)("select",{className:t,onChange:function(t){e.sendData(t.target.value)},value:e.yearVal,children:[Object(i.jsx)("option",{value:a-2,children:a-2}),Object(i.jsx)("option",{value:a-1,children:a-1}),Object(i.jsx)("option",{value:a,children:a}),Object(i.jsx)("option",{value:a+1,children:a+1}),Object(i.jsx)("option",{value:a+2,children:a+2})]})};var b=function(e){var t=e.data,a=Object(n.useState)("2021"),c=Object(r.a)(a,2),s=c[0],l=c[1],o=t.filter((function(e){return new Date(e.dates).getFullYear().toString()===s}));return Object(i.jsxs)(d,{className:"card",children:[Object(i.jsxs)("div",{className:"filter-section",children:[Object(i.jsx)("h3",{children:"Filter By Year"}),Object(i.jsx)(u,{sendData:function(e){l(e)},yearVal:s,className:"year-filter-card"})]}),Object(i.jsx)("div",{className:"expense-wrap",children:o.length?o.map((function(t){return Object(i.jsx)(j,{item:t,deleteMe:e.deleteMe},1e5*Math.random())})):Object(i.jsx)("h2",{className:"nodata",children:"No Expense Data"})})]})};a(20);var x=function(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(""),d=Object(r.a)(l,2),o=d[0],j=d[1],u=Object(n.useState)(""),b=Object(r.a)(u,2),x=b[0],h=b[1],O=Object(n.useState)(""),m=Object(r.a)(O,2),v=m[0],p=m[1],f=Object(n.useState)(!1),g=Object(r.a)(f,2),N=g[0],S=g[1];function y(){S(!N)}return!1===N?Object(i.jsx)("div",{className:"add-expense",children:Object(i.jsx)("button",{className:"addExpenseButton",onClick:y,children:"Add Expense"})}):Object(i.jsxs)("form",{className:"expense-form",onSubmit:function(t){if(t.preventDefault(),0===c.trim().length&&document.querySelector(".name-feild>input").classList.add("invalid"),0===o.trim().length&&document.querySelector(".cost-feild>input").classList.add("invalid"),0===x.trim().length&&document.querySelector(".date-feild>input").classList.add("invalid"),c.trim()&&o.trim().length&&x.trim().length){var a={id:1e5*Math.random(),names:c,costs:o,dates:new Date(x),currency:v};e.addExpense(a),s(""),j(""),h(""),p(""),y()}},children:[Object(i.jsxs)("div",{className:"expense-feild name-feild",children:[Object(i.jsx)("label",{children:"Expense Name :"}),Object(i.jsx)("input",{type:"text",onChange:function(e){e.target.value.trim().length&&e.target.classList.remove("invalid"),s(e.target.value)},value:c})]}),Object(i.jsxs)("div",{className:"expense-feild cost-feild",children:[Object(i.jsx)("label",{children:"Expense Cost :"}),Object(i.jsxs)("div",{className:"currency-feild",children:[Object(i.jsx)("input",{type:"number",step:"0.5",min:"0",onChange:function(e){e.target.value.trim().length&&e.target.classList.remove("invalid"),j(e.target.value)},value:o}),Object(i.jsxs)("select",{className:"currency",onChange:function(e){p(e.target.value)},children:[Object(i.jsx)("option",{value:"\u20b9",selected:!0,children:"\u20b9"}),Object(i.jsx)("option",{value:"$",children:"$"}),Object(i.jsx)("option",{value:"\xa3",children:"\xa3"}),Object(i.jsx)("option",{value:"\u20b1",children:"\u20b1"}),Object(i.jsx)("option",{value:"\u20b0",children:"\u20b0"})]})]})]}),Object(i.jsxs)("div",{className:"expense-feild date-feild",children:[Object(i.jsx)("label",{children:"Expense Date :"}),Object(i.jsx)("input",{type:"date",onChange:function(e){e.target.value.trim().length&&e.target.classList.remove("invalid"),h(e.target.value)},value:x})]}),Object(i.jsxs)("div",{className:"expense-feild btn",children:[Object(i.jsx)("button",{type:"submit",children:"Add Expense"}),Object(i.jsx)("button",{type:"button",onClick:y,children:"Cancel"})]})]})};a(21);var h=function(e){var t=e.data,a=e.Max;return Object(i.jsx)("div",{className:"BarChart",children:t.map((function(e,t){return Object(i.jsxs)("div",{className:"bar",children:[Object(i.jsx)("div",{className:"capsule",children:Object(i.jsx)("div",{className:"fillVal",style:{height:e.cost/a*100+"%"}})}),Object(i.jsx)("div",{className:"month",children:e.label}),Object(i.jsx)("div",{className:"short-month",children:t+1})]},1e5*Math.random())}))})};a(22);var O=function(e){var t,a=[{label:"Jan",cost:0},{label:"Feb",cost:0},{label:"Mar",cost:0},{label:"Apr",cost:0},{label:"May",cost:0},{label:"Jun",cost:0},{label:"Jul",cost:0},{label:"Aug",cost:0},{label:"Sep",cost:0},{label:"Oct",cost:0},{label:"Nov",cost:0},{label:"Dec",cost:0}];e.data.forEach((function(e){a[new Date(e.dates).getMonth()].cost+=Number(e.costs)}));var n=e.data.map((function(e){return e.costs}));return t=Math.max.apply(Math,Object(l.a)(n)),Object(i.jsx)("div",{className:"main-bar",children:Object(i.jsx)(h,{data:a,Max:t})})};a(23);var m=function(e){var t=Object(n.useState)("2021"),a=Object(r.a)(t,2),c=a[0],s=a[1],l=e.data.filter((function(e){return new Date(e.dates).getFullYear().toString()===c.toString()}));return Object(i.jsxs)("div",{className:"reports-status",children:[Object(i.jsx)("div",{className:"reports-filter",children:Object(i.jsx)(u,{yearVal:c,sendData:function(t){s(t),e.onFilterChangeHandler(t)}})}),Object(i.jsx)("div",{className:"reports",children:Object(i.jsx)(O,{data:l})})]})};var v=function(){localStorage.getItem("data")||localStorage.setItem("data",JSON.stringify([]));var e=Object(n.useState)(JSON.parse(localStorage.getItem("data"))),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),d=Object(r.a)(s,2),o=d[0],j=d[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{className:"head",children:[Object(i.jsx)("h1",{children:"Expense Manager"}),Object(i.jsx)("p",{children:"Your one stop to manage all your expense"})]}),Object(i.jsxs)("main",{children:[Object(i.jsx)(x,{addExpense:function(e){c((function(t){return[e].concat(Object(l.a)(t))}));var t=[e].concat(Object(l.a)(a));localStorage.setItem("data",JSON.stringify(t))}}),Object(i.jsx)(m,{className:"app-content",data:a,year:o,onFilterChangeHandler:function(e){j(e)}}),Object(i.jsx)(b,{data:a,year:o,deleteMe:function(e){var t=a.findIndex((function(t){return t.id===e})),n=JSON.parse(localStorage.getItem("data"));n.splice(t,1),localStorage.setItem("data",JSON.stringify(n)),c(n)}})]}),Object(i.jsx)("div",{className:"screen-warning",children:Object(i.jsx)("h2",{children:"Please increase your Screen Size"})})]})};s.a.render(Object(i.jsx)(v,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.afc774eb.chunk.js.map