"use strict";(self.webpackChunk_kartverket_kvib=self.webpackChunk_kartverket_kvib||[]).push([[3573],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>c});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,u=m["".concat(l,".").concat(c)]||m[c]||d[c]||s;return n?r.createElement(u,a(a({ref:t},k),{},{components:n})):r.createElement(u,a({ref:t},k))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const s={id:"dropDownID",title:"(!)Nedtrekksmeny",description:"Oversikt over nedtrekksmeny som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/nedtrekksmeny",displayed_sidebar:"designsystemSidebar"},a=void 0,i={unversionedId:"designsystems/Komponenter/dropDownID",id:"designsystems/Komponenter/dropDownID",title:"(!)Nedtrekksmeny",description:"Oversikt over nedtrekksmeny som blir brukt i Kartverket sine l\xf8sninger.",source:"@site/docs/designsystems/Komponenter/dropdown.mdx",sourceDirName:"designsystems/Komponenter",slug:"/designsystem/komponenter/nedtrekksmeny",permalink:"/kvib/designsystem/komponenter/nedtrekksmeny",draft:!1,tags:[],version:"current",frontMatter:{id:"dropDownID",title:"(!)Nedtrekksmeny",description:"Oversikt over nedtrekksmeny som blir brukt i Kartverket sine l\xf8sninger.",slug:"/designsystem/komponenter/nedtrekksmeny",displayed_sidebar:"designsystemSidebar"},sidebar:"designsystemSidebar",previous:{title:"Inputfelt",permalink:"/kvib/designsystem/komponenter/inputfelt"},next:{title:"(!)S\xf8kefelt",permalink:"/kvib/designsystem/komponenter/s\xf8kefelt"}},l={},p=[],k={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"OBS! Under kontruksjon:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Det er enda ikke st\xf8tte for \xe5 designe selve elementene i nedtrekksmenyen slik det st\xe5r dokumentert i Fimga KVIB. Dette styres av operativsystemet."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Fokus-og hoverfunskjoner er ikke tatt hensyn til enda."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Label er riktig."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Expand-ikonet ikke er fra KVIB sin ikon-samling, men fra W3school. Gjort for \xe5 kunne sette ikon-fargen til \xe5 v\xe6re lik fargen p\xe5 kanten."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("em",{parentName:"strong"},"Bredden til nedtrekksmenyen endres ikke ved \xe5 legge inn i et <div",">","-element med fastsatt bredde. M\xe5 tvinge st\xf8rrelsen ved \xe5 sette konkret tall for <select",">","-elementet.")))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Her er KVIB sin nedtrekksmeny.\nFor \xe5 style <label",">","-elementet, skal egne ",(0,o.kt)("a",{parentName:"p",href:"/kvib/designsystems/designtokens/typografi#label"},"CSS-klasser fra ",(0,o.kt)("em",{parentName:"a"},"Typografi")," benyttes.")),(0,o.kt)("label",{class:"label label--sml label--dropdown",for:"dropdown"},"Overskrift "),(0,o.kt)("select",{class:"dropdown ",id:"dropdown"},(0,o.kt)("option",{selected:!0},"Hjelpetekst"),(0,o.kt)("option",{value:"1"},"F\xf8rste alternativ"),(0,o.kt)("option",{value:"2"},"Andre alternativ"),(0,o.kt)("option",{value:"3"},"Tredje alternativ")),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markup"},'<label class="label label--sml label--dropdown" for="dropdown">Overskrift </label>\n<select class="dropdown "  id="dropdown">\n        <option selected>Hjelpetekst</option>\n        <option value="1">F\xf8rste alternativ</option>\n        <option value="2">Andre alternativ</option>\n        <option value="3">Tredje alternativ</option>\n</select>\n')))}d.isMDXComponent=!0}}]);