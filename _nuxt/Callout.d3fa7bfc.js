import{d as _,I as d,b as s,c,W as p,N as m,f as r,e as a,g as l,w as f,n as y,Y as C,l as v}from"./entry.1eec2914.js";import g from"./ContentSlot.7f009088.js";const h={class:"callout-content-wrapper content"},w={key:0,class:"callout-title"},k={class:"callout-content"},B=_({__name:"Callout",props:{type:{type:String,default:"neutral",validator(e){return["info","success","warning","danger","primary","secondary","neutral"].includes(e)}},icon:{type:[String,Boolean],default:!1}},setup(e){const t=e,u=d(()=>t.icon===!1?"":t.icon===!0?`type:${t.type}`:t.icon);return(n,N)=>{const i=C,o=g;return s(),c("div",{class:y(["callout",[e.type]])},[e.icon?(s(),p(i,{key:0,name:m(u),class:"callout-icon"},null,8,["name"])):r("",!0),a("div",h,[n.$slots.title?(s(),c("div",w,[a("h5",null,[l(o,{use:n.$slots.title,unwrap:"p"},null,8,["use"])])])):r("",!0),a("div",k,[l(o,{use:n.$slots.content,unwrap:"p"},{default:f(()=>[l(o,{use:n.$slots.default},null,8,["use"])]),_:1},8,["use"])])])],2)}}});const I=v(B,[["__scopeId","data-v-c43555a8"]]);export{I as default};
