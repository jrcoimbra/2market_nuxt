import{d as p,ay as m,x as d,I as o,b as f,c as x,a1 as S,l as I}from"./entry.1eec2914.js";const v=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){var c;const s=u;m(n=>({"4179f3e6":_.value}));const e=d();(c=e==null?void 0:e.nuxtIcon)!=null&&c.aliases;const l=o(()=>{var n;return(((n=e==null?void 0:e.nuxtIcon)==null?void 0:n.aliases)||{})[s.name]||s.name}),_=o(()=>`url('https://api.iconify.design/${l.value.replace(":","/")}.svg')`),a=o(()=>{var t,r,i;if(!s.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((r=e.nuxtIcon)!=null&&r.size))return;const n=s.size||((i=e.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(n))===n?`${n}px`:n});return(n,t)=>(f(),x("span",{style:S({width:a.value,height:a.value})},null,4))}});const z=I(v,[["__scopeId","data-v-f40ef149"]]);export{z as default};
