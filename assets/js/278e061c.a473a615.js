"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[1887],{3905:(e,l,t)=>{t.d(l,{Zo:()=>p,kt:()=>m});var s=t(7294);function a(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function n(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);l&&(s=s.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?n(Object(t),!0).forEach((function(l){a(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function r(e,l){if(null==e)return{};var t,s,a=function(e,l){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=s.createContext({}),c=function(e){var l=s.useContext(d),t=l;return e&&(t="function"==typeof e?e(l):i(i({},l),e)),t},p=function(e){var l=c(e.components);return s.createElement(d.Provider,{value:l},e.children)},o={inlineCode:"code",wrapper:function(e){var l=e.children;return s.createElement(s.Fragment,{},l)}},k=s.forwardRef((function(e,l){var t=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),k=c(t),m=a,b=k["".concat(d,".").concat(m)]||k[m]||o[m]||n;return t?s.createElement(b,i(i({ref:l},p),{},{components:t})):s.createElement(b,i({ref:l},p))}));function m(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=k;var r={};for(var d in l)hasOwnProperty.call(l,d)&&(r[d]=l[d]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var c=2;c<n;c++)i[c]=t[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6268:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var s=t(7462),a=(t(7294),t(3905));const n={id:"navID",title:"Navigasjon",description:"Navigasjon",slug:"/designsystem/komponenter/navigasjon",displayed_sidebar:"designsystemSidebar"},i=void 0,r={unversionedId:"designsystems/Komponenter/navID",id:"designsystems/Komponenter/navID",title:"Navigasjon",description:"Navigasjon",source:"@site/docs/designsystems/Komponenter/navigation.md",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/navigasjon",permalink:"/kvib/designsystem/komponenter/navigasjon",draft:!1,tags:[],version:"current",frontMatter:{id:"navID",title:"Navigasjon",description:"Navigasjon",slug:"/designsystem/komponenter/navigasjon",displayed_sidebar:"designsystemSidebar"},sidebar:"designsystemSidebar",previous:{title:"Sideelementer",permalink:"/kvib/designsystem/komponenter/sideelementer"},next:{title:"(!)Listevisning",permalink:"/kvib/designsystem/komponenter/table"}},d={},c=[{value:"Header",id:"header",level:2},{value:"Header med ikon",id:"header-med-ikon",level:3},{value:"Header uten ikon",id:"header-uten-ikon",level:3},{value:"Ankermeny",id:"ankermeny",level:2},{value:"Eksempelbruk",id:"eksempelbruk",level:3},{value:"Tabs",id:"tabs",level:2},{value:"Stegvise prosesser",id:"stegvise-prosesser",level:2},{value:"Visning p\xe5 liten skjerm (Extra small/small)",id:"visning-p\xe5-liten-skjerm-extra-smallsmall",level:3},{value:"Visning p\xe5 stor skjerm (medium/large)",id:"visning-p\xe5-stor-skjerm-mediumlarge",level:3}],p={toc:c};function o(e){let{components:l,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,t,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"header"},"Header"),(0,a.kt)("p",null,"Navigasjonsbar-elementet tilpasser seg til skjermst\xf8rrelsen siden er \xe5pnet i.\nHvis det er n\xf8dvendig med spesifikk st\xf8rrelse p\xe5 navigasjonsbaren, m\xe5 elementet bli plassert i en ",(0,a.kt)("code",null,"<div",">")," med \xf8nsket width."),(0,a.kt)("h3",{id:"header-med-ikon"},"Header med ikon"),(0,a.kt)("nav",{class:"nav__header"},(0,a.kt)("img",{src:"../../img/logo/KV_M.svg",alt:"Kartverket Logo"}),(0,a.kt)("span",{class:"material-symbols-outlined"},"person")),(0,a.kt)("h3",{id:"header-uten-ikon"},"Header uten ikon"),(0,a.kt)("nav",{class:"nav__header"},(0,a.kt)("img",{src:"../../img/logo/KV_M.svg",alt:"Kartverket Logo"})),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'<nav class="nav__header">\n<img src="../../img/logo/KV_M.svg" alt="Kartverket Logo"/>\n<span class="material-symbols-outlined">person</span>\n</nav>\n\n<nav class="nav__header">\n<img src="../../img/logo/KV_M.svg" alt="Kartverket Logo"/>\n</nav>\n')),(0,a.kt)("h2",{id:"ankermeny"},"Ankermeny"),(0,a.kt)("p",null,"Ankermeny kan brukes p\xe5 sider med mye innhold. Ved \xe5 trykke p\xe5 menyen scroller man ned til overskriften."),(0,a.kt)("div",{class:"display__nav"},(0,a.kt)("div",{class:"display__nav__item"},(0,a.kt)("div",{class:"display__nav__container"},(0,a.kt)("div",{class:"anker--xs"},(0,a.kt)("span",{class:"material-symbols-outlined material-symbols-outlined--xs"},"arrow_downward"),(0,a.kt)("a",{href:"#id",class:"heading heading__h3--xs"},"Input"))),(0,a.kt)("div",{class:"display__nav__desc"},"anker--xs")),(0,a.kt)("div",{class:"display__nav__item"},(0,a.kt)("div",{class:"display__nav__container"},(0,a.kt)("div",{class:"anker--s"},(0,a.kt)("span",{class:"material-symbols-outlined"},"arrow_downward"),(0,a.kt)("a",{href:"#id",class:"heading heading__h3--sm"},"Input"))),(0,a.kt)("div",{class:"display__nav__desc"},"anker--s")),(0,a.kt)("div",{class:"display__nav__item"},(0,a.kt)("div",{class:"display__nav__container"},(0,a.kt)("div",{class:"anker--m"},(0,a.kt)("span",{class:"material-symbols-outlined"},"arrow_downward"),(0,a.kt)("a",{href:"#id",class:"heading heading__h3--sm"},"Input"))),(0,a.kt)("div",{class:"display__nav__desc"},"anker--m")),(0,a.kt)("div",{class:"display__nav__item"},(0,a.kt)("div",{class:"display__nav__container"},(0,a.kt)("div",{class:"anker--l"},(0,a.kt)("span",{class:"material-symbols-outlined"},"arrow_downward"),(0,a.kt)("a",{href:"#id",class:"heading heading__h3--l"},"Input"))),(0,a.kt)("div",{class:"display__nav__desc"},"anker--l"))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"eksempelbruk"},"Eksempelbruk"),(0,a.kt)("p",null,"St\xf8rrelsen endres ved \xe5 bytte klassen ",(0,a.kt)("code",null,"anker--xs")," til ",(0,a.kt)("code",null,"anker--m"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="anker--xs">\n<span class="material-symbols-outlined">arrow_downward</span>\n<a href="#id">Input</a>\n</div>\n')),(0,a.kt)("h2",{id:"tabs"},"Tabs"),(0,a.kt)("p",null,"F\xf8lgende element bruker ",(0,a.kt)("code",null,"active__link--demo"),"-klasse for \xe5 demonstrere et valgt eller aktivt side. Dette m\xe5 justeres i hvert prosjekt."),(0,a.kt)("div",{class:"tab"},(0,a.kt)("button",{class:"tab__links active__link--demo",onclick:"#function()"},"En"),(0,a.kt)("button",{class:"tab__links",onclick:"#function()"},"To"),(0,a.kt)("button",{class:"tab__links",onclick:"#function()"},"Tre")),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="tab">\n  <button class="tab__links" onclick="#function()">En</button>\n  <button class="tab__links" onclick="#function()">To</button>\n  <button class="tab__links" onclick="#function()">Tre</button>\n</div>\n')),(0,a.kt)("h2",{id:"stegvise-prosesser"},"Stegvise prosesser"),(0,a.kt)("h3",{id:"visning-p\xe5-liten-skjerm-extra-smallsmall"},"Visning p\xe5 liten skjerm (Extra small/small)"),(0,a.kt)("p",null,"Stegvise prosesser visning p\xe5 liten skjerm bruker ",(0,a.kt)("code",null,"--s"),"-klasse. ",(0,a.kt)("code",null,'aria-current="step"')," settes p\xe5 ",(0,a.kt)("code",null,"<li",">"),"-elementet eller n\xe5v\xe6rende steg der bruker er p\xe5. Ved fullf\xf8rt steg, settes ",(0,a.kt)("code",null,'data-status="complete"')," p\xe5 ",(0,a.kt)("code",null,"<li",">"),"-elementet."),(0,a.kt)("div",{class:"stepper--s"},(0,a.kt)("ol",{role:"list","aria-label":"Stegnavn"},(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"label label--sml"},"Input Tekst")),(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"label label--sml"},"Input Tekst")),(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",{"aria-current":"step"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",null,(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",null,(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")))),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="stepper--s">\n    <ol role="list" aria-label="Stegnavn">\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="label label--sml">Input Tekst</label>\n        </li>\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="label label--sml">Input Tekst</label>\n        </li>\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li aria-current="step">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li>\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li>\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n    </ol>\n</div>\n')),(0,a.kt)("h3",{id:"visning-p\xe5-stor-skjerm-mediumlarge"},"Visning p\xe5 stor skjerm (medium/large)"),(0,a.kt)("p",null,"Stegvise prosesser visning p\xe5 stor skjerm bruker ",(0,a.kt)("code",null,"stepper--l"),"-klasse. ",(0,a.kt)("code",null,'aria-current="step"')," settes p\xe5 ",(0,a.kt)("code",null,"<li",">"),"-elementet eller n\xe5v\xe6rende steg der bruker er p\xe5. Ved fullf\xf8rt steg, settes ",(0,a.kt)("code",null,'data-status="complete"')," p\xe5 ",(0,a.kt)("code",null,"<li",">"),"-elementet."),(0,a.kt)("div",{class:"stepper--l"},(0,a.kt)("ol",{role:"list","aria-label":"Stegnavn"},(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"label label--sml"},"Input Tekst")),(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"label label--sml"},"Input Tekst")),(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",{"data-status":"complete"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",{"aria-current":"step"},(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",null,(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")),(0,a.kt)("li",null,(0,a.kt)("div",{class:"stepper__circle label label--sml"}),(0,a.kt)("label",{class:"detail detail--sml"},"Input Tekst")))),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'<div class="stepper--l">\n    <ol role="list" aria-label="Stegnavn">\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="label label--sml">Input Tekst</label>\n        </li>\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="label label--sml">Input Tekst</label>\n        </li>\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li data-status="complete">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li aria-current="step">\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li>\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n        <li>\n            <div class="stepper__circle label label--sml"></div>\n            <label class="detail detail--sml">Input Tekst</label>\n        </li>\n    </ol>\n</div>\n')))}o.isMDXComponent=!0}}]);