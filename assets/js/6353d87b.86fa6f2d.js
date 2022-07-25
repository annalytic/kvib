"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[1915],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>v});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),k=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=k(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=k(r),v=i,u=d["".concat(s,".").concat(v)]||d[v]||p[v]||o;return r?t.createElement(u,l(l({ref:n},m),{},{components:r})):t.createElement(u,l({ref:n},m))}));function v(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var k=2;k<o;k++)l[k]=r[k];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2006:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>k});var t=r(7462),i=(r(7294),r(3905));const o={id:"infoKvibID",title:"Om KVIB",description:"Om KVIB",slug:"/",displayed_sidebar:"OmKvibSidebar",sidebar_position:1},l=void 0,a={unversionedId:"omKvib/infoKvibID",id:"omKvib/infoKvibID",title:"Om KVIB",description:"Om KVIB",source:"@site/docs/omKvib/infoKvib.mdx",sourceDirName:"omKvib",slug:"/",permalink:"/kvib/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"infoKvibID",title:"Om KVIB",description:"Om KVIB",slug:"/",displayed_sidebar:"OmKvibSidebar",sidebar_position:1},sidebar:"OmKvibSidebar",next:{title:"Ta i bruk Kvib",permalink:"/kvib/omKvib/installation"}},s={},k=[{value:"Krav til KVIB",id:"krav-til-kvib",level:2},{value:"Konvensjoner for CSS-klassenavn",id:"konvensjoner-for-css-klassenavn",level:2}],m={toc:k};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"KVIB best\xe5r av npm-biblioteket KVIB-CSS, som inneholder felles CSS for Kartkverkets applikasjoner. Denne nettsiden inneholder dokumentasjon av de felles designprinsippene og bruken av stilene i KVIB-CSS."),(0,i.kt)("h2",{id:"krav-til-kvib"},"Krav til KVIB"),(0,i.kt)("p",null,"Designbiblioteket skal:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Alltid v\xe6re vedlikeholdt"),(0,i.kt)("li",{parentName:"ul"},"V\xe6re enkelt \xe5 ta i bruk"),(0,i.kt)("li",{parentName:"ul"},"Kun inneholde UU-godkjente elementer og stiler"),(0,i.kt)("li",{parentName:"ul"},"Alltid ha oppdatert dokumentasjon"),(0,i.kt)("li",{parentName:"ul"},"Inneholde oppdatert dokumentasjon av alle komponenter, med eksempler p\xe5 bruk og UU"),(0,i.kt)("li",{parentName:"ul"},"Inneholde responsive komponenter"),(0,i.kt)("li",{parentName:"ul"},"Ha en endringslogg med beskrivelse av hva som er nytt i hver versjon"),(0,i.kt)("li",{parentName:"ul"},"Ha tydelige retningslinjer for nye designere og prosjekter"),(0,i.kt)("li",{parentName:"ul"},"Utformes p\xe5 en slik m\xe5te at det er minimalt behov for overrides i de enkelte prosjektene"),(0,i.kt)("li",{parentName:"ul"},"F\xf8lge KVIB sine navngivningskonvensjoner for CSS-klasser, som er forst\xe5elige b\xe5de for utviklere og designere")),(0,i.kt)("h2",{id:"konvensjoner-for-css-klassenavn"},"Konvensjoner for CSS-klassenavn"),(0,i.kt)("p",null,"Ved \xe5 bruke en felles struktur p\xe5 navngivning av CSS-klasser blir koden enklere \xe5 lese og forst\xe5, samt \xe5 vedlikeholde. Det er derfor viktig at kode som implementeres i KVIB f\xf8lger samme konvensjoner."),(0,i.kt)("p",null,"KVIB bruker navngivningskonvensjoner fra BEM (Block Element Modifier), som baseres p\xe5 \xe5 dele CSS-klasser inn i tre typer; ",(0,i.kt)("em",{parentName:"p"},"blokk, element")," og ",(0,i.kt)("em",{parentName:"p"},"modifier"),". En blokk brukes om entiter som kan st\xe5 alene og fremdeles gi mening.\nBlokker kan n\xf8stes og samhandle med andre blokker, men alle er semantiske like.\nEt element er en del av en blokk, og gir ikke mening alene, og er dermed semantisk knyttet til blokken. En modifier fungerer som flagg til en blokk eller et element, og brukes til \xe5 endre utseende, oppf\xf8rsel eller state.\nLes ",(0,i.kt)("a",{href:"http://getbem.com/naming/",class:"underline"}," BEM sine navngivningskonvensjoner")," for en mer detaljert beskrivelse om bruk av konvensjonene, i tillegg til eksempler. F\xf8lg disse ved implementasjon av CSS-klasser."))}p.isMDXComponent=!0}}]);