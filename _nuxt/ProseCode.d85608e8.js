import{d as y,r as l,x as B,b as s,c as p,e as m,g as C,w,W as _,N as f,T as k,n as v,Y as x,p as S,j as $,l as h,t as I,f as P,a0 as N}from"./entry.1eec2914.js";import{c as z,o as T}from"./index.d23dcc7d.js";const V=e=>(S("data-v-d7b610ba"),e=e(),$(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=z();T(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=B(),o=l("init"),g=b=>{t(n.content).then(()=>{o.value="copied"}).catch(r=>{console.warn("Couldn't copy to clipboard!",r)})};return(b,r)=>{const d=x;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:v([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[C(k,{name:"fade"},{default:w(()=>{var u,i;return[o.value==="copied"?(s(),_(d,{key:0,name:(u=f(c).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(d,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const j=h(R,[["__scopeId","data-v-d7b610ba"]]),D={key:0,class:"filename"},E=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=j;return s(),p("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",D,I(e.filename),1)):P("",!0),N(a.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const Y=h(E,[["__scopeId","data-v-a25253b4"]]);export{Y as default};
