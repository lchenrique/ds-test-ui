import{a as y,F as z,j as a,I as s}from"./index-ecq6vdbC.js";import{i as x}from"./index-bexlhJFp.js";import{r as d}from"./index-4g5l5LRQ.js";import{B as l}from"./index-mbmo2BpH.js";const b=Object.keys(x).sort((e,n)=>{if(e<n)return-1;if(e>n)return 1}).map(e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),N={title:"Components/General/Button",component:l,args:{iconName:"dog",type:"secondary",text:"Label",size:"default",shape:"default",showIcon:!0,iconSide:"left"},argTypes:{iconName:{options:b,control:{type:"select"},defaultValue:"dog"},type:{options:["primary","secondary","link","tertiary"],control:"inline-radio",defaultValue:"secondary",table:{defaultValue:{summary:"default"}}},size:{options:["default","small","large"],control:"inline-radio",defaultValue:"default",table:{defaultValue:{summary:"default"}}},shape:{options:["default","round","circle"],control:"inline-radio",defaultValue:"default",table:{defaultValue:{summary:"default"}}},loading:{control:"boolean",defaultValue:!1,table:{defaultValue:{summary:!1}}},disabled:{control:"boolean",defaultValue:!1,table:{defaultValue:{summary:!1}}},showIcon:{control:"boolean",if:{arg:"size",neq:"icon"},defaultValue:!1,table:{defaultValue:{summary:!1}}},iconSide:{options:["left","right"],control:"inline-radio",defaultValue:"left",if:{arg:"showIcon"},table:{leftValue:{summary:"left"}}}}},o=e=>{const{showIcon:n,type:i,iconName:t,...r}=e,[c,p]=d.useState("default");d.useEffect(()=>(p(e.size),()=>{}),[e.size]);const g=n===void 0?a(s,{name:t,size:"padding-s"}):n&&a(s,{name:t,size:"padding-s"});return console.log("iconName",t),y(z,{children:[a("div",{className:"flex gap-3 flex-wrap p-3",children:a(l,{size:c,loading:e.loading,icon:g,type:i,...r,children:e==null?void 0:e.text})}),a("div",{className:"flex gap-3 flex-wrap p-3",children:a(l,{size:c,loading:e.loading,icon:a(s,{name:t,size:"padding-s"}),type:i,...r})})]})};var u,f,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`(args: IButtonProps & {
  showIcon: boolean;
  iconName: any;
  text?: string;
}) => {
  const {
    showIcon,
    type,
    iconName,
    ...rest
  } = args;
  const [size, setSize] = useState<any>("default");
  useEffect(() => {
    setSize(args.size);
    return () => {};
  }, [args.size]);
  const icon: any = showIcon === undefined ? <Icon name={iconName} size="padding-s" /> : showIcon && <Icon name={iconName} size="padding-s" />;
  console.log("iconName", iconName);
  return <>\r
      <div className="flex gap-3 flex-wrap p-3">\r
        <Button size={size} loading={args.loading} icon={icon} type={type} {...rest}>\r
          {args?.text}\r
        </Button>\r
      </div>\r
      <div className="flex gap-3 flex-wrap p-3">\r
        <Button size={size} loading={args.loading} icon={<Icon name={iconName} size="padding-s" />} type={type} {...rest} />\r
      </div>\r
    </>;
}`,...(m=(f=o.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const h=["ButtonStory"],B=Object.freeze(Object.defineProperty({__proto__:null,ButtonStory:o,__namedExportsOrder:h,default:N},Symbol.toStringTag,{value:"Module"}));export{B,o as a};
//# sourceMappingURL=Button.stories-zgLlZMXI.js.map
