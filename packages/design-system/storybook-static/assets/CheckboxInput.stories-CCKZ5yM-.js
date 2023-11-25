import{j as e,a as r,d as h,I as c}from"./index-ecq6vdbC.js";import{r as p}from"./index-4g5l5LRQ.js";import{F as y}from"./index-KXlh4_wB.js";import{C as I}from"./index-PbVgAgQh.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./useSize-AW8DBSvq.js";import"./index-im-bjvvC.js";import"./isNativeReflectConstruct-eFpeDW0O.js";import"./colors-eCm2DHWj.js";import"./index-BEDH2LNG.js";import"./AntdIcon-yRTjINCa.js";import"./index-hT9d0Ulg.js";import"./Compact-Yx2cKuB_.js";import"./collapse-aS6vX33V.js";import"./index-2cMJUYxm.js";function u({children:l,withFormItem:n,...o}){const t=n?y.Item:p.Fragment;return e(t,{...n||{},children:e(I.Group,{...o,children:l})})}function V({withFormItem:l,...n}){const[o,t]=p.useState(n.value);return p.useEffect(()=>{t(n.value)},[n.value]),r(h,{className:"flex-col items-start gap-2",children:[r(h,{className:"gap-2",children:[n.prefix,e(I,{...n,checked:o,onChange:d=>{n.indeterminate||(t(d.target.checked),n.onChange&&n.onChange(d.target.checked))}}),n.suffix]}),r(h,{className:"gap-2 text-@text-light",children:[n.prefix&&e("div",{style:{visibility:"hidden"},children:n.prefix}),n.message]})]})}function a({withFormItem:l,...n}){const o=l?y.Item:p.Fragment;return e(o,{...l||{},children:e(V,{...n})})}const J={title:"Components/Form/CheckboxInput",component:a,argTypes:{}},s={argTypes:{autoFocus:{control:"boolean",defaultValue:!1,table:{category:"CheckboxInput",defaultValue:{summary:!1}}},indeterminate:{control:"boolean",defaultValue:!1,table:{category:"CheckboxInput",defaultValue:{summary:!1}}},defaultChecked:{control:"boolean",defaultValue:!1,table:{category:"CheckboxInput",defaultValue:{summary:!1}}},disabled:{control:"boolean",defaultValue:!1,table:{category:"CheckboxInput",defaultValue:{summary:!1}}}},render:l=>r("div",{className:"flex gap-3 w-full flex-wrap items-center",children:[e(a,{...l,children:"Checkbox"}),e(a,{autoFocus:!0,children:"AutoFocus"}),e(a,{disabled:!0,children:"Disabled"}),e(a,{disabled:!0,checked:!0,defaultChecked:!0,children:"Disabled"}),e(a,{indeterminate:!0,children:"Indeterminate "}),e(a,{defaultChecked:!0,children:"DefaultChecked "}),e(a,{suffix:e(c,{name:["far","circle-info"],fill:"icon-primary",size:"spacing-s"}),prefix:e(c,{name:["far","dog"],fill:"icon-primary",size:"spacing-s"}),children:"Checkbox"}),e(a,{message:e("span",{style:{fontSize:14,lineHeight:"100%"},children:"Mark if necessary"}),suffix:e(c,{name:["far","circle-info"],fill:"icon-primary",size:"spacing-s"}),prefix:e(c,{name:["far","dog"],fill:"icon-primary",size:"spacing-s"}),children:"Checkbox"}),e(a,{message:e("span",{style:{fontSize:14,lineHeight:"100%"},children:"Mark if necessary"}),prefix:e(c,{name:["far","dog"],fill:"icon-primary",size:"spacing-s"}),children:"Checkbox"}),e(a,{message:e("span",{style:{fontSize:14,lineHeight:"100%"},children:"Mark if necessary"}),children:"Checkbox"})]})},i=l=>{console.log("checked = ",l)},v=["Apple","Pear","Orange"],F=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}],G=[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange",disabled:!1}],f={argTypes:{autoFocus:{control:"boolean",defaultValue:!1,table:{category:"CheckboxGroup",defaultValue:{summary:!1}}},indeterminate:{control:"boolean",defaultValue:!1,table:{category:"CheckboxGroup",defaultValue:{summary:!1}}},defaultChecked:{control:"boolean",defaultValue:!1,table:{category:"CheckboxGroup",defaultValue:{summary:!1}}},disabled:{control:"boolean",defaultValue:!1,table:{category:"CheckboxGroup",defaultValue:{summary:!1}}}},render:l=>r("div",{className:"flex gap-3 w-full flex-col",children:[e(u,{options:v,defaultValue:["Apple"],onChange:i}),e("br",{}),e(u,{options:F,defaultValue:["Pear"],onChange:i}),e("br",{}),e(u,{options:G,disabled:!0,defaultValue:["Apple"],onChange:i}),e("br",{}),r(u,{style:{width:"100%"},onChange:i,children:[e(a,{value:"A",children:"A"}),e(a,{value:"B",children:"B"}),e(a,{value:"C",children:"C"}),e(a,{value:"D",children:"D"}),e(a,{value:"E",children:"E"})]})]})};var b,m,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  argTypes: {
    autoFocus: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxInput",
        defaultValue: {
          summary: false
        }
      }
    },
    indeterminate: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxInput",
        defaultValue: {
          summary: false
        }
      }
    },
    defaultChecked: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxInput",
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxInput",
        defaultValue: {
          summary: false
        }
      }
    }
  },
  render: (args: ICheckboxInputProps) => {
    return <div className="flex gap-3 w-full flex-wrap items-center">\r
        <CheckboxInput {...args}>Checkbox</CheckboxInput>\r
        <CheckboxInput autoFocus>AutoFocus</CheckboxInput>\r
        <CheckboxInput disabled={true}>Disabled</CheckboxInput>\r
        <CheckboxInput disabled={true} checked={true} defaultChecked>\r
          Disabled\r
        </CheckboxInput>\r
        <CheckboxInput indeterminate>Indeterminate </CheckboxInput>\r
        <CheckboxInput defaultChecked>DefaultChecked </CheckboxInput>\r
\r
        <CheckboxInput suffix={<Icon name={["far", "circle-info"]} fill={"icon-primary"} size="spacing-s" />} prefix={<Icon name={["far", "dog"]} fill={"icon-primary"} size="spacing-s" />}>\r
          Checkbox\r
        </CheckboxInput>\r
\r
        <CheckboxInput message={<span style={{
        fontSize: 14,
        lineHeight: "100%"
      }}>\r
              Mark if necessary\r
            </span>} suffix={<Icon name={["far", "circle-info"]} fill={"icon-primary"} size="spacing-s" />} prefix={<Icon name={["far", "dog"]} fill={"icon-primary"} size="spacing-s" />}>\r
          Checkbox\r
        </CheckboxInput>\r
\r
        <CheckboxInput message={<span style={{
        fontSize: 14,
        lineHeight: "100%"
      }}>\r
              Mark if necessary\r
            </span>} prefix={<Icon name={["far", "dog"]} fill={"icon-primary"} size="spacing-s" />}>\r
          Checkbox\r
        </CheckboxInput>\r
\r
        <CheckboxInput message={<span style={{
        fontSize: 14,
        lineHeight: "100%"
      }}>\r
              Mark if necessary\r
            </span>}>\r
          Checkbox\r
        </CheckboxInput>\r
      </div>;
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var C,k,g;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  argTypes: {
    autoFocus: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxGroup",
        defaultValue: {
          summary: false
        }
      }
    },
    indeterminate: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxGroup",
        defaultValue: {
          summary: false
        }
      }
    },
    defaultChecked: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxGroup",
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "CheckboxGroup",
        defaultValue: {
          summary: false
        }
      }
    }
  },
  render: (args: ICheckboxInputProps) => {
    return <div className="flex gap-3 w-full flex-col">\r
        <CheckboxGroup options={plainOptions} defaultValue={["Apple"]} onChange={onChange} />\r
        <br />\r
        <CheckboxGroup options={options} defaultValue={["Pear"]} onChange={onChange} />\r
        <br />\r
\r
        <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={["Apple"]} onChange={onChange} />\r
        <br />\r
        <CheckboxGroup style={{
        width: "100%"
      }} onChange={onChange}>\r
          <CheckboxInput value="A">A</CheckboxInput>\r
          <CheckboxInput value="B">B</CheckboxInput>\r
          <CheckboxInput value="C">C</CheckboxInput>\r
          <CheckboxInput value="D">D</CheckboxInput>\r
          <CheckboxInput value="E">E</CheckboxInput>\r
        </CheckboxGroup>\r
      </div>;
  }
}`,...(g=(k=f.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const K=["CheckboxInputStory","CheckboxGroupStory"];export{f as CheckboxGroupStory,s as CheckboxInputStory,K as __namedExportsOrder,J as default};
//# sourceMappingURL=CheckboxInput.stories-CCKZ5yM-.js.map
