import{a as f,j as t,c as H,I as U}from"./index-ecq6vdbC.js";import{r as s}from"./index-4g5l5LRQ.js";import"./useFetch-k1bFGBlV.js";import{u as V,T as P}from"./index-_ZTrWaLD.js";import{B as g}from"./index-mbmo2BpH.js";import{F as N}from"./index-KXlh4_wB.js";import{S as $}from"./index-jFf0vS3g.js";import{v as G}from"./v4-yQnnJER4.js";function J(){const n=s.useRef(!0);return n.current?(n.current=!1,!0):n.current}function K(n,a){const c=J();s.useEffect(()=>{if(!c)return n()},a)}function Q({title:n,subTitle:a,content:c,onCancel:i,onOk:o,visible:r,drawerProps:h,okText:T,cancelText:b,hideCancelButton:e=!1,form:d=!0,ApiService:k}){const[p,u]=s.useState(!1),[y]=N.useForm(),{md:j}=V();s.useEffect(()=>(u(!1),()=>{u(!1)}),[]);const R=async F=>{var w;u(!0);const l=o&&await o(F);if(!l){(w=k.lastResults)!=null&&w.data&&Object.entries(k.lastResults.data).forEach(([M,B])=>{var I;if(Array.isArray(B)){const A=(I=B[0])==null?void 0:I.split('"');y.setFields([{name:M.split("."),errors:[`${A.join("")}`]}])}}),u(!1);return}if(l){m();return}u(!1)};s.useEffect(()=>()=>{y.resetFields(),u(!1)},[r]);const C=h,q=d?N:"div",z=d?{onFinish:R,form:y,layout:"vertical",className:"h-full px-padding-l py-padding-m ",name:"register",scrollToFirstError:!0,validateMessages:{required:"Required field"},onFieldsChange:F=>{F.forEach(l=>{var w;l.errors&&!l.name.includes("password_confirm")&&((w=l.value)==null?void 0:w.length)>0&&!l.warnings&&y.setFields([{name:l.name,errors:[]}])})}}:{className:"h-full px-padding-l py-padding-m "},[x,D]=s.useState("none"),[E,O]=s.useState(0),[L,S]=s.useState(),m=()=>{document.body.style.overflow="auto",x&&(document.body.style.overflow="hidden"),x==="none"?(D(""),setTimeout(()=>{O(1),S(!0)},1)):(O(0),S(!1),setTimeout(()=>{D("none"),i&&i()},300))};return s.useEffect(()=>{m()},[]),K(()=>{m()},[r]),f("div",{className:"flex",children:[t("div",{onClick:m,className:"ado-drawer-toggle",style:{display:x,opacity:E}}),f("div",{style:{display:x,width:j?(C==null?void 0:C.width)||392:"100%"},className:H("ado-drawer",L?"translate-x-0":""),children:[f("div",{className:"px-padding-l py-padding-m",children:[t(P,{as:"h1",size:"lg",color:"text-plain",className:"font-semibold",children:n}),a&&t(P,{as:"p",className:"pt-padding-xs m-0",children:a})]}),t(g,{size:"small",onClick:m,style:{display:x,opacity:E},shape:"circle",className:"ado-drawer-close-button",icon:t(U,{name:"close"})}),t("div",{className:"h-[calc(100%-6.25rem)]",children:f(q,{...z,children:[t("div",{className:"w-full h-[inherit] relative",children:c?s.cloneElement(c,{form:y}):null}),o&&t("div",{className:"ado-drawer-footer",children:f($,{className:"flex justify-end items-center px-5 py-2",children:[!e&&t(N.Item,{className:"p-0 m-0",children:t(g,{type:"secondary",onClick:m,disabled:p,children:b||"Cancel"})}),t(N.Item,{className:"p-0 m-0",children:t(g,{htmlType:"submit",loading:p,children:T||"Save"})})]})})]})})]})]})}const W=s.createContext({}),ae=({children:n,config:a,ApiService:c})=>{const[i,o]=s.useState([]),[r,h]=s.useState(null),T=async(e,d)=>{h({...r,[e]:!1}),r&&delete r[e];const k=i.filter(p=>p.key!==e);o(k),h({...r})},b=e=>{const d={key:(e==null?void 0:e.key)||G(),title:e.title,subTitle:e.subTitle,content:e==null?void 0:e.content,onCancel:e.onCancel,onOk:e.onOk,cancelText:e.cancelText,okText:e.okText,drawerProps:e.drawerProps,hideCancelButton:e.hideCancelButton,visible:!0,form:e.form};o([...i,d]),h({...r,[d.key]:!0})};return f(W.Provider,{value:{open:r,closeDrawer:T,openDrawer:b},children:[i.length>0&&i.map(e=>(e==null?void 0:e.content)&&t(Q,{ApiService:c,visible:r&&r[e.key],title:e==null?void 0:e.title,subTitle:e==null?void 0:e.subTitle,content:e==null?void 0:e.content,onCancel:()=>T(e.key),onOk:e==null?void 0:e.onOk,cancelText:e.cancelText||(a==null?void 0:a.cancelText),okText:e.okText||(a==null?void 0:a.okText),drawerProps:e.drawerProps,hideCancelButton:e.hideCancelButton,form:e==null?void 0:e.form},e.key)),n]})};export{ae as D,W as a,K as u};
//# sourceMappingURL=DrawerContext-aOy5CB2A.js.map