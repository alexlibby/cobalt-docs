import"./jsx-runtime.38179261.js";import{c as l,M as J,C as S,S as _,A as X,a as j}from"./Props.b5143338.js";import"./iframe.d7eb40a6.js";import{S as P,i as U,s as q,q as y,w as m,a as d,x as u,p as M,d as f,C as E,u as I,e as K,v,z as C,r as x}from"./index.cc1fc965.js";const V=[{href:"/",text:"Dashboard"},{href:"/reports",text:"Annual reports"},{href:"/reports/2019",text:"2019"}];function N(s,e,o){const a=s.slice();return a[3]=e[o],a[5]=o,a}function z(s){let e,o,a=!s[2]&&B(s),t=s[2]&&A();return{c(){a&&a.c(),e=I(),t&&t.c(),o=K()},m(r,n){a&&a.m(r,n),d(r,e,n),t&&t.m(r,n),d(r,o,n)},p(r,n){r[2]?a&&(a.d(1),a=null):a?a.p(r,n):(a=B(r),a.c(),a.m(e.parentNode,e)),r[2]?t||(t=A(),t.c(),t.m(o.parentNode,o)):t&&(t.d(1),t=null)},d(r){a&&a.d(r),r&&f(e),t&&t.d(r),r&&f(o)}}}function B(s){let e,o;return{c(){e=y("span"),o=v(s[1]),m(e,"class","svelte-1ehil4r")},m(a,t){d(a,e,t),u(e,o)},p(a,t){t&2&&C(o,a[1])},d(a){a&&f(e)}}}function A(s){let e,o,a,t;return{c(){e=x("svg"),o=x("title"),a=v("Arrow Forward"),t=x("path"),m(t,"fill","none"),m(t,"stroke","currentColor"),m(t,"stroke-linecap","round"),m(t,"stroke-linejoin","round"),m(t,"stroke-width","48"),m(t,"d","M268 112l144 144-144 144M392 256H100"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"class","ionicon"),m(e,"viewBox","0 0 512 512")},m(r,n){d(r,e,n),u(e,o),u(o,a),u(e,t)},d(r){r&&f(e)}}}function F(s){let e,o=s[3].text+"",a,t;return{c(){e=y("a"),a=v(o),m(e,"href",t=s[3].href),m(e,"data-testid","breadcrumbLink"),m(e,"class","svelte-1ehil4r")},m(r,n){d(r,e,n),u(e,a)},p(r,n){n&1&&o!==(o=r[3].text+"")&&C(a,o),n&1&&t!==(t=r[3].href)&&m(e,"href",t)},d(r){r&&f(e)}}}function H(s){let e=s[3].text+"",o;return{c(){o=v(e)},m(a,t){d(a,o,t)},p(a,t){t&1&&e!==(e=a[3].text+"")&&C(o,e)},d(a){a&&f(o)}}}function O(s){let e,o,a,t=s[5]!==0&&z(s);function r(c,b){return c[5]===c[0].length-1?H:F}let n=r(s),i=n(s);return{c(){e=y("li"),t&&t.c(),o=I(),i.c(),a=I(),m(e,"class","svelte-1ehil4r")},m(c,b){d(c,e,b),t&&t.m(e,null),u(e,o),i.m(e,null),u(e,a)},p(c,b){c[5]!==0&&t.p(c,b),n===(n=r(c))&&i?i.p(c,b):(i.d(1),i=n(c),i&&(i.c(),i.m(e,a)))},d(c){c&&f(e),t&&t.d(),i.d()}}}function G(s){let e,o,a=s[0],t=[];for(let r=0;r<a.length;r+=1)t[r]=O(N(s,a,r));return{c(){e=y("div"),o=y("ul");for(let r=0;r<t.length;r+=1)t[r].c();m(o,"class","breadcrumb svelte-1ehil4r"),m(e,"class","cobalt svelte-1ehil4r")},m(r,n){d(r,e,n),u(e,o);for(let i=0;i<t.length;i+=1)t[i].m(o,null)},p(r,[n]){if(n&7){a=r[0];let i;for(i=0;i<a.length;i+=1){const c=N(r,a,i);t[i]?t[i].p(c,n):(t[i]=O(c),t[i].c(),t[i].m(o,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=a.length}},i:M,o:M,d(r){r&&f(e),E(t,r)}}}function Q(s,e,o){let{divider:a="/"}=e,{image:t=!1}=e,{breadcrumbItems:r=[]}=e;return r.length==0&&(r=V),s.$$set=n=>{"divider"in n&&o(1,a=n.divider),"image"in n&&o(2,t=n.image),"breadcrumbItems"in n&&o(0,r=n.breadcrumbItems)},[r,a,t]}class p extends P{constructor(e){super(),U(this,e,Q,G,q,{divider:1,image:2,breadcrumbItems:0})}}p.__docgen={version:3,name:"Breadcrumbs.svelte",data:[{keywords:[],visibility:"public",description:'import arrow from "./icons/arrow-forward-outline.svg";',name:"divider",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"/"},{visibility:"public",description:null,keywords:[],name:"image",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"breadcrumbItems",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function D(){return D=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(s[a]=o[a])}return s},D.apply(this,arguments)}const R={},W="wrapper";function g({components:s,...e}){return l(W,D({},R,e,{components:s,mdxType:"MDXLayout"}),l(J,{title:"Cobalt UI Library/Navigation Components/Breadcrumbs",component:p,mdxType:"Meta"}),l("h1",null,"Breadcrumbs"),l("p",null,"Breadcrumbs is the primary component. It has two possible states."),l("ul",null,l("li",{parentName:"ul"},l("a",{parentName:"li",href:"#default"},"Default")),l("li",{parentName:"ul"},l("a",{parentName:"li",href:"#customimage"},"Custom Image"))),l("a",{id:"default"}),l("h2",null,"Default"),l("p",null,"This is the default version of the Breadcrumbs component."),l(S,{mdxType:"Canvas"},l(_,{id:"cobalt-ui-library-navigation-components-breadcrumbs--default-story",mdxType:"Story"})),l("a",{id:"customimage"}),l("h2",null,"Custom Image"),l("p",null,"This variant disables the Breadcrumbs component."),l(S,{mdxType:"Canvas"},l(_,{id:"cobalt-ui-library-navigation-components-breadcrumbs--custom-image",mdxType:"Story"})),l("h2",null,"Properties of component"),l("p",null,"Below is a list of arguments available for this component:"),l(X,{of:p,mdxType:"ArgsTable"}))}g.isMDXComponent=!0;function k(){return k=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(s[a]=o[a])}return s},k.apply(this,arguments)}const Y=s=>({Component:p,props:s}),Z={Template:Y},$="wrapper";function L({components:s,...e}){return l($,k({},Z,e,{components:s,mdxType:"MDXLayout"}),l(J,{title:"Cobalt UI Library/Navigation Components/Breadcrumbs",component:p,parameters:{page:null},mdxType:"Meta"}),l(_,{name:"Default",args:{image:!1,breadcrumbItems:[{href:"/",text:"Dashboard"},{href:"/aerial",text:"Aerial photography"},{href:"/drones/DJI",text:"DJI"}]},parameters:{docs:{page:g}},mdxType:"Story"}),l(_,{name:"Custom Image",args:{image:!0,breadcrumbItems:[{href:"/",text:"Dashboard"},{href:"/aerial",text:"Aerial photography"},{href:"/drones/DJI",text:"DJI"}]},parameters:{docs:{page:g}},mdxType:"Story"}))}L.isMDXComponent=!0;const w={};w.storyName="Default";w.args={image:!1,breadcrumbItems:[{href:"/",text:"Dashboard"},{href:"/aerial",text:"Aerial photography"},{href:"/drones/DJI",text:"DJI"}]};w.parameters={storySource:{source:"{}"},docs:{page:g}};const T={};T.storyName="Custom Image";T.args={image:!0,breadcrumbItems:[{href:"/",text:"Dashboard"},{href:"/aerial",text:"Aerial photography"},{href:"/drones/DJI",text:"DJI"}]};T.parameters={storySource:{source:"{}"},docs:{page:g}};const h={title:"Cobalt UI Library/Navigation Components/Breadcrumbs",parameters:{page:null},component:p,includeStories:["defaultStory","customImage"]},ee={Default:"defaultStory","Custom Image":"customImage"};h.parameters=h.parameters||{};h.parameters.docs={...h.parameters.docs||{},page:()=>l(j,{mdxStoryNameToKey:ee,mdxComponentAnnotations:h},l(L,null))};const se=["Template","defaultStory","customImage"];export{Y as Template,se as __namedExportsOrder,T as customImage,h as default,w as defaultStory};
//# sourceMappingURL=Breadcrumbs.stories.7b6547b9.js.map
