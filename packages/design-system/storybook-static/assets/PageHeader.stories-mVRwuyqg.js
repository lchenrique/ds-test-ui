import{j as a,d as r,c as s,I as T,a as c,g}from"./index-ecq6vdbC.js";import{u as S,T as A}from"./index-_ZTrWaLD.js";import{B as x}from"./index-mbmo2BpH.js";import{D as C}from"./index-nwOhlyme.js";import{T as k}from"./index-hT9d0Ulg.js";import{A as N}from"./index-PF0Qypw1.js";function f({children:e,className:i,actions:t,maxActions:d,...m}){const{sm:H}=S();return!H&&t&&t.length>1||d&&t&&t.length>d?a(r,{className:s("justify-end  h-full gap-1  pl-padding-xs",i),...m,children:t&&a(C,{placement:"bottomRight",menu:{items:t==null?void 0:t.map((l,u)=>({key:u,className:s("flex  gap-1 items-center  text-center [&>.ado-dropdown-menu-title-content]:flex-none  ",l.className),icon:l==null?void 0:l.icon,disabled:l.isDisabled,onClick:()=>{l.action&&l.action(),l.url&&l.url()},label:a("span",{className:s("",l.className),children:l.label?typeof l.label=="function"?l.label():l.label||l.label:null})}))},children:a(x,{icon:a(T,{name:"ellipsis-v"})})})}):c(r,{className:s("justify-end h-full gap-1  pl-padding-xs",i),...m,children:[t==null?void 0:t.map((l,u)=>a(x,{type:l.type,children:a("span",{className:s("",l.className),children:l.label?typeof l.label=="function"?l.label():l.label||l.label:null})},u)),!t&&e]})}f.displayName="PageHeader.Actions";const b=({children:e,className:i,...t})=>a(A,{asChild:!0,className:s("leading-[130%] gap-1 whitespace-nowrap",i),...t,children:a("div",{style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e})});b.displayName="PageHeader.SubTitle";const h=({children:e,className:i,...t})=>a(A,{asChild:!0,className:s("font-semibold leading-[100%] gap-1 w-ful text-ellipsis",i),color:"text-plain",size:"xl",...t,children:a("div",{style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e})});h.displayName="PageHeader.Title";const n=e=>{const i=()=>g(e==null?void 0:e.children,"PageHeader.Title"),t=()=>g(e==null?void 0:e.children,"PageHeader.SubTitle"),d=()=>g(e==null?void 0:e.children,"PageHeader.Actions"),m=()=>{e.onBack&&e.onBack()};return c(r,{className:"w-full",align:t()||e.subTitle?"start":"center",children:[e.onBack&&a(r,{onClick:m,className:"flex items-center h-spacing-m cursor-pointer mr-spacing-xs ",children:a(T,{name:"chevron-left",size:"spacing-s",fill:"surface-primary",className:"leading-[100%]"})}),c("div",{className:"flex-1 overflow-hidden",children:[a(r,{className:"flex-1 overflow-hidden",children:i()||e.title&&a(h,{children:e.title})}),(t()||e.subTitle)&&a(r,{className:"flex-1 overflow- mt-2",children:t()||e.subTitle&&a(b,{children:e.subTitle})})]}),d()||e.actions&&a(f,{actions:Array.isArray(e==null?void 0:e.actions)?e==null?void 0:e.actions:void 0,children:!Array.isArray(e==null?void 0:e.actions)&&e.actions})]})};n.Title=h;n.SubTitle=b;n.Actions=f;n.displayName="PageHeader";const v={title:"Components/Navigation/PageHeader",component:n},o={render:e=>c(r,{vertical:!0,gap:"padding-xl",className:"w-full",children:[a(n,{title:"Adopt information",actions:[{label:"teste"}],onBack:()=>{}}),c(n,{title:"Adopt information",onBack:()=>{},children:[a(n.SubTitle,{className:"gap-3",children:a(k,{overlayClassName:"whitespace-nowrap",rootClassName:"max-w-none",title:"Payment collected by: Carlos Santos",children:c(r,{gap:"padding-xs",className:"flex-1 overflow-hidden w-min",children:[a("div",{className:"truncate",children:"Payment collected by: "}),a(N,{size:"xSmall",shape:"circle",children:a(N.Name,{className:"font-semibold text-sm absolute sm:static sm:visible invisible",children:"Carlos Santos"})})]})})}),a(n.Actions,{maxActions:2,actions:[{label:"option 1"},{label:"option 2"},{label:"option 2"}]})]})]})};var y,w,P;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    return <Flex vertical gap="padding-xl" className="w-full">\r
        <PageHeader title="Adopt information" actions={[{
        label: "teste"
      }]} onBack={() => {}} />\r
\r
        <PageHeader title="Adopt information" onBack={() => {}}>\r
          <PageHeader.SubTitle className="gap-3">\r
            <Tooltip overlayClassName="whitespace-nowrap" rootClassName="max-w-none" title="Payment collected by: Carlos Santos">\r
              <Flex gap="padding-xs" className="flex-1 overflow-hidden w-min">\r
                <div className="truncate">Payment collected by: </div>\r
                <Avatar size="xSmall" shape="circle">\r
                  <Avatar.Name className="font-semibold text-sm absolute sm:static sm:visible invisible">\r
                    Carlos Santos\r
                  </Avatar.Name>\r
                </Avatar>\r
              </Flex>\r
            </Tooltip>\r
          </PageHeader.SubTitle>\r
          <PageHeader.Actions maxActions={2} actions={[{
          label: "option 1"
        }, {
          label: "option 2"
        }, {
          label: "option 2"
        }]} />\r
        </PageHeader>\r
      </Flex>;
  }
}`,...(P=(w=o.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const B=["PageHeaderStory"],D=Object.freeze(Object.defineProperty({__proto__:null,PageHeaderStory:o,__namedExportsOrder:B,default:v},Symbol.toStringTag,{value:"Module"}));export{D as P,o as a};
//# sourceMappingURL=PageHeader.stories-mVRwuyqg.js.map
