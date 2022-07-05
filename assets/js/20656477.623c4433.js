"use strict";(self.webpackChunkkvib=self.webpackChunkkvib||[]).push([[5743],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),l=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=l(t),m=o,c=k["".concat(d,".").concat(m)]||k[m]||u[m]||i;return t?n.createElement(c,a(a({ref:r},p),{},{components:t})):n.createElement(c,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=k;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9035:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const i={id:"radiobuttonID",title:"Radioknapp",description:"Radioknapp",slug:"/designsystem/komponenter/radiobutton",displayed_sidebar:"designsystemSidebar",sidebar_position:3},a=void 0,s={unversionedId:"designsystems/Komponenter/radiobuttonID",id:"designsystems/Komponenter/radiobuttonID",title:"Radioknapp",description:"Radioknapp",source:"@site/docs/designsystems/Komponenter/radiobuttons.mdx",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/radiobutton",permalink:"/kvib/designsystem/komponenter/radiobutton",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"radiobuttonID",title:"Radioknapp",description:"Radioknapp",slug:"/designsystem/komponenter/radiobutton",displayed_sidebar:"designsystemSidebar",sidebar_position:3},sidebar:"designsystemSidebar",previous:{title:"Sliderknapp",permalink:"/kvib/designsystem/komponenter/sliderbutton"},next:{title:"Inputfelt",permalink:"/kvib/designsystem/komponenter/inputfelt"}},d={},l=[{value:"Normal avkryssningsboks",id:"normal-avkryssningsboks",level:2},{value:"Eksempelbruk",id:"eksempelbruk",level:5},{value:"Feilmelding avkryssningsboks",id:"feilmelding-avkryssningsboks",level:2},{value:"Eksempelbruk",id:"eksempelbruk-1",level:5}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"normal-avkryssningsboks"},"Normal avkryssningsboks"),(0,o.kt)("div",{class:"radio"},(0,o.kt)("input",{type:"radio",id:"radioBtn_1",name:"radioGroup1"}),(0,o.kt)("label",{for:"radioBtn_1"},"Input tekst")),(0,o.kt)("br",null),(0,o.kt)("div",{class:"radio"},(0,o.kt)("input",{type:"radio",id:"radioBtn_2",name:"radioGroup1"}),(0,o.kt)("label",{for:"radioBtn_2"},"Input tekst")),(0,o.kt)("h5",{id:"eksempelbruk"},"Eksempelbruk"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="radio"',title:'"radio"'},'\n<div class="radio">\n    <input type="radio" id="radioBtn_1" name="radioGroup1"/>\n    <label for="radioBtn_1">Input tekst</label>\n</div>\n\n')),(0,o.kt)("h2",{id:"feilmelding-avkryssningsboks"},"Feilmelding avkryssningsboks"),(0,o.kt)("div",{class:"radio error"},(0,o.kt)("input",{type:"radio",id:"errorRadioBtn_1",name:"radioGroup2",required:!0}),(0,o.kt)("label",{for:"errorRadioBtn_1"},"Input tekst")),(0,o.kt)("br",null),(0,o.kt)("div",{class:"radio error"},(0,o.kt)("input",{type:"radio",id:"errorRadioBtn_2",name:"radioGroup2",required:!0}),(0,o.kt)("label",{for:"errorRadioBtn_2"},"Input tekst")),(0,o.kt)("h5",{id:"eksempelbruk-1"},"Eksempelbruk"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown",metastring:'title="radio error"',title:'"radio','error"':!0},'\n<div class="radio error">\n    <input type="radio" id="errorRadioBtn_1" name="radioGroup2"/>\n    <label for="errorRadioBtn_1">Input tekst</label>\n</div>\n\n')))}u.isMDXComponent=!0}}]);