import"./jsx-runtime.38179261.js";import{c as u,M as z,C as G,S as P,A as H,a as J}from"./Props.b5143338.js";import"./iframe.d7eb40a6.js";import{S as B,i as I,s as V,e as K,a as y,p as C,d as b,K as Q,q as f,r as D,w as r,L as X,F as U,x as d,y as T,u as h,b as k,t as L,c as R,h as W,m as Y,l as $,g as ee}from"./index.cc1fc965.js";function te(s){let e,t,o,l,a;return{c(){e=f("button"),t=D("svg"),o=D("path"),r(o,"fill","currentColor"),r(o,"d","M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"),r(t,"class","close"),r(t,"viewBox","0 0 24 24"),r(t,"aria-hidden","true"),X(t,"color",s[1],!1),r(e,"class",U(s[2])+" svelte-myhoof"),r(e,"aria-label","Close")},m(c,i){y(c,e,i),d(e,t),d(t,o),l||(a=T(e,"click",s[4]),l=!0)},p(c,i){i&2&&X(t,"color",c[1],!1)},d(c){c&&b(e),l=!1,a()}}}function oe(s){let e,t,o;return{c(){e=f("div"),t=D("svg"),o=D("path"),r(o,"fill","currentColor"),r(o,"d","M.439 21.44a1.5 1.5 0 0 0 2.122 2.121l9.262-9.261a.25.25 0 0 1 .354 0l9.262 9.263a1.5 1.5 0 1 0 2.122-2.121L14.3 12.177a.25.25 0 0 1 0-.354l9.263-9.262A1.5 1.5 0 0 0 21.439.44L12.177 9.7a.25.25 0 0 1-.354 0L2.561.44A1.5 1.5 0 0 0 .439 2.561L9.7 11.823a.25.25 0 0 1 0 .354Z"),r(t,"class","close"),r(t,"viewBox","0 0 24 24"),r(t,"aria-hidden","true"),r(e,"class",U(s[2])+" svelte-myhoof")},m(l,a){y(l,e,a),d(e,t),d(t,o)},p:C,d(l){l&&b(e)}}}function le(s){let e;function t(a,c){return a[0]?oe:te}let o=t(s),l=o(s);return{c(){l.c(),e=K()},m(a,c){l.m(a,c),y(a,e,c)},p(a,[c]){o===(o=t(a))&&l?l.p(a,c):(l.d(1),l=o(a),l&&(l.c(),l.m(e.parentNode,e)))},i:C,o:C,d(a){l.d(a),a&&b(e)}}}function se(s,e,t){let{size:o=""}=e,{isFaux:l=!1}=e,{color:a="inherit"}=e;const c=["close-button",o?`close-button-${o}`:""].filter(n=>n).join(" ");function i(n){Q.call(this,s,n)}return s.$$set=n=>{"size"in n&&t(3,o=n.size),"isFaux"in n&&t(0,l=n.isFaux),"color"in n&&t(1,a=n.color)},[l,a,c,o,i]}class q extends B{constructor(e){super(),I(this,e,se,le,V,{size:3,isFaux:0,color:1})}}q.__docgen={version:3,name:"Close.svelte",data:[{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""},{visibility:"public",description:null,keywords:[],name:"isFaux",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{visibility:"public",description:null,keywords:[],name:"color",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"inherit"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"click",parent:"button",modificators:[],locations:null}],slots:[],refs:[]};function F(s){let e,t,o,l,a,c,i,n,p,A,w,v,x,O;return p=new q({}),{c(){e=f("div"),t=f("div"),o=h(),l=f("div"),a=f("div"),c=f("h3"),c.textContent="Modal title",i=h(),n=f("button"),W(p.$$.fragment),A=h(),w=f("p"),w.textContent="Click on the X to close me",r(t,"id","background"),r(t,"class","svelte-18e6gsj"),r(n,"type","button"),r(n,"class","close svelte-18e6gsj"),r(a,"class","header svelte-18e6gsj"),r(l,"id","modal"),r(l,"role","dialog"),r(l,"class","svelte-18e6gsj"),r(e,"class","cobalt svelte-18e6gsj")},m(m,Z){y(m,e,Z),d(e,t),d(e,o),d(e,l),d(l,a),d(a,c),d(a,i),d(a,n),Y(p,n,null),d(l,A),d(l,w),v=!0,x||(O=T(n,"click",s[3]),x=!0)},p:C,i(m){v||(k(p.$$.fragment,m),v=!0)},o(m){L(p.$$.fragment,m),v=!1},d(m){m&&b(e),$(p),x=!1,O()}}}function ne(s){let e,t,o,l,a,c,i=s[0]&&F(s);return{c(){e=f("button"),e.textContent="Show dialog",t=h(),i&&i.c(),o=K(),r(e,"data-testid","buttonDialog")},m(n,p){y(n,e,p),y(n,t,p),i&&i.m(n,p),y(n,o,p),l=!0,a||(c=T(e,"click",s[2]),a=!0)},p(n,[p]){n[0]?i?(i.p(n,p),p&1&&k(i,1)):(i=F(n),i.c(),k(i,1),i.m(o.parentNode,o)):i&&(ee(),L(i,1,1,()=>{i=null}),R())},i(n){l||(k(i),l=!0)},o(n){L(i),l=!1},d(n){n&&b(e),n&&b(t),i&&i.d(n),n&&b(o),a=!1,c()}}}function ae(s,e,t){let{show:o="true"}=e,l=o=="true";const a=()=>t(0,l=!l),c=()=>t(0,l=!1);return s.$$set=i=>{"show"in i&&t(1,o=i.show)},[l,o,a,c]}class g extends B{constructor(e){super(),I(this,e,ae,ne,V,{show:1})}}g.__docgen={version:3,name:"Dialog.svelte",data:[{visibility:"public",description:null,keywords:[],name:"show",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"true"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};function M(){return M=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=t[o])}return s},M.apply(this,arguments)}const ie={},re="wrapper";function j({components:s,...e}){return u(re,M({},ie,e,{components:s,mdxType:"MDXLayout"}),u(z,{title:"Cobalt UI Library/Notification Components/Dialog",component:g,mdxType:"Meta"}),u("h1",null,"Dialog"),u("p",null,"Dialog is the primary component. It has one possible state."),u("ul",null,u("li",{parentName:"ul"},u("a",{parentName:"li",href:"#default"},"Default"))),u("a",{id:"default"}),u("h2",null,"Default"),u("p",null,"This is the default version of the Dialog component."),u(G,{mdxType:"Canvas"},u(P,{id:"cobalt-ui-library-notification-components-dialog--default-story",mdxType:"Story"})),u("h2",null,"Properties of component"),u("p",null,"Below is a list of arguments available for this component:"),u(H,{of:g,mdxType:"ArgsTable"}))}j.isMDXComponent=!0;function S(){return S=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(s[o]=t[o])}return s},S.apply(this,arguments)}const ce=s=>({Component:g,props:s}),ue={Template:ce},pe="wrapper";function E({components:s,...e}){return u(pe,S({},ue,e,{components:s,mdxType:"MDXLayout"}),u(z,{title:"Cobalt UI Library/Notification Components/Dialog",component:g,parameters:{page:null},mdxType:"Meta"}),u(P,{name:"Default",args:{showDialog:"false"},parameters:{docs:{page:j}},mdxType:"Story"}))}E.isMDXComponent=!0;const N={};N.storyName="Default";N.args={showDialog:"false"};N.parameters={storySource:{source:"{}"},docs:{page:j}};const _={title:"Cobalt UI Library/Notification Components/Dialog",parameters:{page:null},component:g,includeStories:["defaultStory"]},de={Default:"defaultStory"};_.parameters=_.parameters||{};_.parameters.docs={..._.parameters.docs||{},page:()=>u(J,{mdxStoryNameToKey:de,mdxComponentAnnotations:_},u(E,null))};const ge=["Template","defaultStory"];export{ce as Template,ge as __namedExportsOrder,_ as default,N as defaultStory};
//# sourceMappingURL=Dialog.stories.a53c4ff9.js.map
