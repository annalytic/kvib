"use strict";(self.webpackChunkkvib_docusaurus=self.webpackChunkkvib_docusaurus||[]).push([[3308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),d=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=d(n),f=i,c=k["".concat(a,".").concat(f)]||k[f]||u[f]||l;return n?r.createElement(c,o(o({ref:t},p),{},{components:n})):r.createElement(c,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=k;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const l={id:"inputfeltID",title:"Inputfelt",description:"Inputfelt",slug:"/designsystem/komponenter/inputfelt",displayed_sidebar:"designsystemSidebar",sidebar_position:4},o=void 0,s={unversionedId:"designsystems/Komponenter/inputfeltID",id:"designsystems/Komponenter/inputfeltID",title:"Inputfelt",description:"Inputfelt",source:"@site/docs/designsystems/Komponenter/inputfield.mdx",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/inputfelt",permalink:"/kvib/designsystem/komponenter/inputfelt",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"inputfeltID",title:"Inputfelt",description:"Inputfelt",slug:"/designsystem/komponenter/inputfelt",displayed_sidebar:"designsystemSidebar",sidebar_position:4},sidebar:"designsystemSidebar",previous:{title:"Radioknapp",permalink:"/kvib/designsystem/komponenter/radiobutton"},next:{title:"Logo",permalink:"/kvib/designsystem/komponenter/logo"}},a={},d=[{value:"Aktivt tekstfelt",id:"aktivt-tekstfelt",level:2},{value:"Deaktivert tekstfelt",id:"deaktivert-tekstfelt",level:2},{value:"Nedtrekksmeny",id:"nedtrekksmeny",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"aktivt-tekstfelt"},"Aktivt tekstfelt"),(0,i.kt)("p",null,"Her er et eksempel p\xe5 et aktivt tekstfelt, med feilmelding"),(0,i.kt)("label",{for:"textField"},"Aktivt tekstfelt: "),(0,i.kt)("br",null),(0,i.kt)("input",{type:"text",id:"textField",placeholder:"Aktivt tekstfelt"}),(0,i.kt)("h2",{id:"deaktivert-tekstfelt"},"Deaktivert tekstfelt"),(0,i.kt)("p",null,"Her er et eksempel p\xe5 et deaktivert tekstfelt"),(0,i.kt)("label",{for:"disabledTextField"},"Deaktivert tekstfelt "),(0,i.kt)("br",null),(0,i.kt)("input",{type:"text",id:"disabledTextField",disabled:!0}),(0,i.kt)("br",null),(0,i.kt)("label",{for:"disabledTextField"},"Deaktivert med hjelpetekst "),(0,i.kt)("br",null),(0,i.kt)("input",{type:"text",id:"disabledTextField",disabled:!0,placeholder:"Jeg er deaktivert"}),(0,i.kt)("h2",{id:"nedtrekksmeny"},"Nedtrekksmeny"),(0,i.kt)("label",{for:"dropdown"},"Overskrift "),(0,i.kt)("br",null),(0,i.kt)("select",{name:"dropdown",id:"dropdown"},(0,i.kt)("option",{value:"",disabled:!0,selected:!0},"Hjelpetekst"),(0,i.kt)("option",{value:"eiendom"},"Eiendom"),(0,i.kt)("option",{value:"til lands"},"Til lands"),(0,i.kt)("option",{value:"til sj\xf8s"},"Til sj\xf8s")))}u.isMDXComponent=!0}}]);