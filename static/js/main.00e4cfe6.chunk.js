(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),i=c(26),j=c.n(i),r=c(8),l=c(2),b=(c(35),c(36),c(37),function(){return Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsxs)("div",{className:"inner-nav",children:[Object(s.jsx)("div",{className:"left-side",children:Object(s.jsx)("h1",{children:Object(s.jsx)(r.b,{to:"/",children:Object(s.jsx)("span",{className:"icon-text",children:"Mohammad Hashemi"})})})}),Object(s.jsxs)("div",{className:"right-side",children:[Object(s.jsx)(r.b,{to:"/",children:"Home"}),Object(s.jsx)(r.b,{to:"/projects",children:"Projects"}),Object(s.jsx)(r.b,{to:"/about",children:"About"})]})]})})}),o=(c(43),function(){return Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("div",{className:"all-center",children:Object(s.jsx)("h1",{children:"My Portfolio Website"})})})}),d=(c(44),function(){return Object(s.jsxs)("div",{className:"section-one",children:[Object(s.jsx)("h2",{children:"Technologies I Used on This Website:"}),Object(s.jsxs)("section",{children:[Object(s.jsxs)("div",{className:"html5",children:[Object(s.jsx)("i",{className:"fab fa-html5 fa-10x"}),Object(s.jsx)("h3",{children:"HTML"})]}),Object(s.jsxs)("div",{className:"css3",children:[Object(s.jsx)("i",{className:"fab fa-css3-alt fa-10x"}),Object(s.jsx)("h3",{children:"CSS"})]}),Object(s.jsxs)("div",{className:"js",children:[Object(s.jsx)("i",{className:"fab fa-js fa-10x"}),Object(s.jsx)("h3",{children:"JS"})]}),Object(s.jsxs)("div",{className:"react",children:[Object(s.jsx)("i",{className:"fab fa-react fa-10x"}),Object(s.jsx)("h3",{children:"React"})]})]})]})}),h=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(d,{})]})},x=c(10),O=function(e){var t=Object(n.useState)("");return Object(s.jsx)("div",{className:"items",children:Object(s.jsx)("div",{className:"item item-1",children:Object(s.jsxs)("div",{className:t,children:[Object(s.jsx)("h2",{children:"UseState Hook"}),Object(s.jsx)("p",{children:"Clicking on each color below updates the state using UseState method."}),Object(s.jsx)("p",{children:"Click on One Color:"}),Object(s.jsx)("button",{className:"btn red",onClick:function(){return e.setState("red")},children:"I Make it Red"}),Object(s.jsx)("button",{className:"btn blue",onClick:function(){return e.setState("blue")},children:"I Make it Blue"}),Object(s.jsx)("button",{className:"btn green",onClick:function(){return e.setState("green")},children:"I Make it Green"}),Object(s.jsx)("button",{className:"btn",onClick:function(){return e.setState("")},children:"I Clear It!"})]})})})},u=c(16),m=c.n(u),f=c(28),p=c(29),v=c.n(p),N=function(){var e=Object(n.useState)(null),t=Object(x.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),j=Object(x.a)(i,2),r=j[0],l=j[1],b=Object(n.useState)(""),o=Object(x.a)(b,2),d=o[0],h=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){var t,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://randomuser.me/api/");case 2:t=e.sent,c=t.data,s=c.results[0],a(s.picture.thumbnail),l(s.name.first),h(s.name.last);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.jsxs)("div",{className:"user-container",children:[Object(s.jsx)("div",{className:"left",children:Object(s.jsx)("img",{src:c,alt:""})}),Object(s.jsxs)("div",{className:"right",children:[r,Object(s.jsx)("br",{}),d,Object(s.jsx)("br",{})]})]})},g=(c(64),function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),c=t[0],a=t[1];return Object(s.jsx)("div",{className:"projects-container + ".concat(c),children:Object(s.jsxs)("div",{className:"container p-20 text-center",children:[Object(s.jsx)("h1",{children:"Projects"}),Object(s.jsx)("p",{className:"p-10",children:"Well! In this page I'm going to prove my knowledge, Those things that I know about HTML, CSS, JS, React etc (Nothings is copied):"}),Object(s.jsx)("h2",{children:"React Router:"}),Object(s.jsx)("p",{children:"I should mention that I used ReactRouter for purpose of navigating through pages on this site."}),Object(s.jsx)(O,{setState:a}),Object(s.jsx)("h1",{children:"UseEffect Hook:"}),Object(s.jsx)("p",{children:"I used UseEffect and axios to fetch data asyncrinously from RandomUser API then rendered on to the screen."}),Object(s.jsxs)("div",{className:"main-container",children:[Object(s.jsx)(N,{}),Object(s.jsx)(N,{}),Object(s.jsx)(N,{}),Object(s.jsx)(N,{}),Object(s.jsx)(N,{}),Object(s.jsx)(N,{})]})]})})}),S=(c(65),function(){return Object(s.jsx)("div",{className:"about",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"img-section"}),Object(s.jsxs)("div",{className:"text-section",children:[Object(s.jsx)("h2",{children:"About:"}),Object(s.jsxs)("p",{children:["My Name is Mohammad Hashemi and I am working as a fron-end developer and this is my Website.",Object(s.jsx)("br",{}),"Right now I have nothing to say but I will complete this page as soon as possible."]})]})]})})});var k=function(){return Object(s.jsx)(r.a,{children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(b,{}),Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{exact:!0,path:"/",children:Object(s.jsx)(h,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/projects",children:Object(s.jsx)(g,{})}),Object(s.jsx)(l.a,{exact:!0,path:"/about",children:Object(s.jsx)(S,{})})]})]})})};j.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.00e4cfe6.chunk.js.map