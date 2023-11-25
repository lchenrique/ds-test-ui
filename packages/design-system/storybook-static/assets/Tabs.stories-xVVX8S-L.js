import{a as b,j as n}from"./index-ecq6vdbC.js";import{T as a}from"./index-UgY8T-rR.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-tvtfaFq4.js";import"./extends-dGVwEr9R.js";import"./useSize-AW8DBSvq.js";import"./index-im-bjvvC.js";import"./isNativeReflectConstruct-eFpeDW0O.js";import"./colors-eCm2DHWj.js";import"./CloseOutlined-G_V1CTYn.js";import"./AntdIcon-yRTjINCa.js";import"./EllipsisOutlined-nTiS1Ox0.js";const v={title:"Components/Navigation/Tabs",component:a,argTypes:{fill:{control:{type:"color"},defaultValue:"#000000"}}},e=c=>{const o=i=>{console.log(i)},t=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1",icon:"dog"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2",badge:5,icon:"dog"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"},{key:"4",label:"Tab 4",children:"Content of Tab Pane 4",badge:1}];return b("div",{className:"flex gap-3 w-full flex-wrap flex-col",children:[n(a,{defaultActiveKey:"1",tabs:t,onChange:o}),n("br",{}),n(a,{defaultActiveKey:"1",tabs:t,onChange:o,hasBorderBottom:!0})]})};var r,s,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: ITabsProps) => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items: TabItemsProps[] = [{
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
    icon: "dog"
  }, {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
    badge: 5,
    icon: "dog"
  }, {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3"
  }, {
    key: "4",
    label: "Tab 4",
    children: "Content of Tab Pane 4",
    badge: 1
  }];
  return <div className="flex gap-3 w-full flex-wrap flex-col">\r
      <Tabs defaultActiveKey="1" tabs={items} onChange={onChange} />\r
      <br />\r
      <Tabs defaultActiveKey="1" tabs={items} onChange={onChange} hasBorderBottom />\r
    </div>;
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const w=["Types"];export{e as Types,w as __namedExportsOrder,v as default};
//# sourceMappingURL=Tabs.stories-xVVX8S-L.js.map
