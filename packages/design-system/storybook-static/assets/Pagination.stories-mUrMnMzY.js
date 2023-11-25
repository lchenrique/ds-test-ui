import{j as r,F as c}from"./index-ecq6vdbC.js";import{r as u}from"./index-4g5l5LRQ.js";import{P as s}from"./index-Cck_RH9g.js";const l={title:"Components/Navigation/Pagination",component:s,args:{pageSize:10,total:100}},e={render:a=>{const[g,p]=u.useState(a.current);return r(c,{children:r(s,{current:g,total:a.total,currentTotal:0,pageSize:a.pageSize,onChange:(t,S)=>{t&&p(t)}})})}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(args.current);
    return <>\r
        <Pagination current={page} total={args.total} currentTotal={0} pageSize={args.pageSize} onChange={(page, pageSize) => {
        if (page) {
          setPage(page);
        }
      }} />\r
      </>;
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const m=["PaginationStory"],z=Object.freeze(Object.defineProperty({__proto__:null,PaginationStory:e,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{z as P,e as a};
//# sourceMappingURL=Pagination.stories-mUrMnMzY.js.map
