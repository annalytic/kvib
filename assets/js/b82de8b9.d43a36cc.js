"use strict";(self.webpackChunkkvib=self.webpackChunkkvib||[]).push([[8910],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,a=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),k=l,c=m["".concat(a,".").concat(k)]||m[k]||u[k]||s;return r?n.createElement(c,i(i({ref:t},d),{},{components:r})):n.createElement(c,i({ref:t},d))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=r(7462),l=(r(7294),r(3905));const s={id:"sliderButtonID",title:"Sliderknapp",description:"Sliderknapp",slug:"/designsystem/komponenter/sliderbutton",displayed_sidebar:"designsystemSidebar",sidebar_position:2},i=void 0,o={unversionedId:"designsystems/Komponenter/sliderButtonID",id:"designsystems/Komponenter/sliderButtonID",title:"Sliderknapp",description:"Sliderknapp",source:"@site/docs/designsystems/Komponenter/sliderbutton.mdx",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/sliderbutton",permalink:"/kvib/designsystem/komponenter/sliderbutton",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"sliderButtonID",title:"Sliderknapp",description:"Sliderknapp",slug:"/designsystem/komponenter/sliderbutton",displayed_sidebar:"designsystemSidebar",sidebar_position:2},sidebar:"designsystemSidebar",previous:{title:"Avmerkningsbokser",permalink:"/kvib/designsystem/komponenter/checkbox"},next:{title:"Radioknapp",permalink:"/kvib/designsystem/komponenter/radiobutton"}},a={},p=[{value:"Extra small",id:"extra-small",level:2},{value:"Eksempelbruk",id:"eksempelbruk",level:3},{value:"Small, medium og large",id:"small-medium-og-large",level:2},{value:"Eksempelbruk",id:"eksempelbruk-1",level:3}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Sliderknapp har som funksjon \xe5 skifte mellom tilstandene aktivert og deaktivert, og virker p\xe5 samme m\xe5te som en sjekkboks. "),(0,l.kt)("p",null,"Kartverket bruker to st\xf8rrelser p\xe5 sliderknappene; extra small og small/medium/large. Eksempelbruk viser hvordan bruke css-klassene n\xe5r man skal lage en slik knapp.    "),(0,l.kt)("h2",{id:"extra-small"},"Extra small"),(0,l.kt)("p",null,"CSS-klasse: ",(0,l.kt)("em",{parentName:"p"},"sliderbutton sliderbutton--xs")),(0,l.kt)("html",null,(0,l.kt)("div",{class:"sliderbutton sliderbutton--xs"},(0,l.kt)("input",{type:"checkbox",id:"sliderbutton_1"}),(0,l.kt)("label",{for:"sliderbutton_1"}))),(0,l.kt)("h3",{id:"eksempelbruk"},"Eksempelbruk"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markup",metastring:'title="/.html"',title:'"/.html"'},'<html>\n    <div class="sliderbutton sliderbutton--xs">\n        <input type="checkbox" id="sliderbutton_1"/>\n        <label for="sliderbutton_1"></label>\n    </div>\n</html>\n')),(0,l.kt)("h2",{id:"small-medium-og-large"},"Small, medium og large"),(0,l.kt)("p",null,"CSS-klasse: ",(0,l.kt)("em",{parentName:"p"},"sliderbutton")),(0,l.kt)("html",null,(0,l.kt)("div",{class:"sliderbutton"},(0,l.kt)("input",{type:"checkbox",id:"sliderbutton_2"}),(0,l.kt)("label",{for:"sliderbutton_2"}))),(0,l.kt)("h3",{id:"eksempelbruk-1"},"Eksempelbruk"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markup",metastring:'title="/.html"',title:'"/.html"'},'<html>\n    <div class="sliderbutton">\n        <input type="checkbox" id="sliderbutton_2"/>\n        <label for="sliderbutton_2"></label>\n    </div>\n</html>\n')))}u.isMDXComponent=!0}}]);