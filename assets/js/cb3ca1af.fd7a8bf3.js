"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),k=l(n),m=a,d=k["".concat(u,".").concat(m)]||k[m]||b[m]||o;return n?r.createElement(d,s(s({ref:t},i),{},{components:n})):r.createElement(d,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"gr\xf8nnknappID",sidebar_position:2,title:"Gr\xf8nne knapper (prim\xe6rsett)",description:"Gr\xf8nne knapper (prim\xe6rsett)"},s=void 0,p={unversionedId:"designsystems/Komponenter/Knapper/gr\xf8nnknappID",id:"designsystems/Komponenter/Knapper/gr\xf8nnknappID",title:"Gr\xf8nne knapper (prim\xe6rsett)",description:"Gr\xf8nne knapper (prim\xe6rsett)",source:"@site/docs/designsystems/Komponenter/Knapper/greenButtons.mdx",sourceDirName:"designsystems/Komponenter/Knapper",slug:"/designsystems/Komponenter/Knapper/gr\xf8nnknappID",permalink:"/kvib/designsystems/Komponenter/Knapper/gr\xf8nnknappID",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"gr\xf8nnknappID",sidebar_position:2,title:"Gr\xf8nne knapper (prim\xe6rsett)",description:"Gr\xf8nne knapper (prim\xe6rsett)"},sidebar:"designsystemSidebar",previous:{title:"Radioknapp",permalink:"/kvib/designsystem/komponenter/radiobutton"},next:{title:"Bl\xe5 knapper (sekund\xe6rsett)",permalink:"/kvib/designsystems/Komponenter/Knapper/bl\xe5knappID"}},u={},l=[{value:"Prim\xe6rknapp",id:"prim\xe6rknapp",level:2},{value:"Sekund\xe6rknapp",id:"sekund\xe6rknapp",level:2},{value:"Terti\xe6rknapp",id:"terti\xe6rknapp",level:2}],i={toc:l};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gr\xf8nne knapper (prim\xe6rsettet) brukes p\xe5 artikkelsider, innsendingstjenester, apper (med untak av apper i egen drakt) og generelt i tjenester som skal v\xe6re i Kartverkets drakt (men ikke i kartl\xf8sninger).\nPrim\xe6rsettet best\xe5r av prim\xe6rknapp, sekund\xe6rknapp og terti\xe6rknapp."),(0,a.kt)("p",null,"B\xe5de prim\xe6r-, sekund\xe6r- og terti\xe6r-knappene har tre ulike st\xf8rrelser; ",(0,a.kt)("em",{parentName:"p"},"extra small"),", ",(0,a.kt)("em",{parentName:"p"},"small/medium")," og ",(0,a.kt)("em",{parentName:"p"},"large"),".\nGenerelt brukes large p\xe5 desktop, small/medium for mobil og tablets, og extra small for apper og kartl\xf8sninger. "),(0,a.kt)("h2",{id:"prim\xe6rknapp"},"Prim\xe6rknapp"),(0,a.kt)("p",null,"Prim\xe6rknappen er gr\xf8nn og brukes for \xe5 avslutte en handling (f. eks send inn skjema). Handlingen skal skje umiddelbart etter at knappen er trykket p\xe5."),(0,a.kt)("div",null,(0,a.kt)("button",{class:"button button__green--primary button--xs"},"Extra small"),(0,a.kt)("button",{class:"button button__green--primary button--sm"},"Small/Medium"),(0,a.kt)("button",{class:"button button__green--primary button--l"},"Large")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<html>\n    <body>\n        <button class="button button__green--primary button--xs">Extra small</button>\n        <button class="button button__green--primary button--sm">Small/Medium</button>\n        <button class="button button__green--primary button--l">Large</button>\n    </body>\n</html>\n')),(0,a.kt)("h2",{id:"sekund\xe6rknapp"},"Sekund\xe6rknapp"),(0,a.kt)("p",null,'Sekund\xe6rknapper brukes til handlinger som er sekund\xe6re til hovedhensikten med siden, men fremdeles er viktige for brukerflyten p\xe5 siden. Dette kan for eksempel v\xe6re s\xf8keknapper eller "neste steg".'),(0,a.kt)("button",{class:"button button__green--secondary button--xs"},"Extra small"),(0,a.kt)("button",{class:"button button__green--secondary button--sm"},"Small/Medium"),(0,a.kt)("button",{class:"button button__green--secondary button--l"},"Large"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<html>\n    <body>\n        <button class="button button__green--secondary button--xs">Extra small</button>\n        <button class="button button__green--secondary button--sm"></button>\n        <button class="button button__green--secondary button--l">Large</button>\n    </body>\n</html>\n')),(0,a.kt)("h2",{id:"terti\xe6rknapp"},"Terti\xe6rknapp"),(0,a.kt)("p",null,"Brukes der brukeren har behov for en trykkbar lenke som ikke st\xe5r i en tekst.\nKan brukes ved siden av en prim\xe6r og sekund\xe6rknapp, men skal ikke st\xe5 alene."),(0,a.kt)("button",{class:"button button__green--tertiary button--xs"},"Extra small"),(0,a.kt)("button",{class:"button button__green--tertiary button--sm"},"Small/Medium"),(0,a.kt)("button",{class:"button button__green--tertiary button--l"},"Large"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markup"},'<html>\n    <body>\n        <button class="button button__green--tertiary button--xs">Extra small</button>\n        <button class="button button__green--tertiary button--sm">Small/Medium</button>\n        <button class="button button__green--tertiary button--l">Large</button>\n    </body>\n</html>\n')))}b.isMDXComponent=!0}}]);