import{a as b,j as a,I as A}from"./index-ecq6vdbC.js";import{r as u}from"./index-4g5l5LRQ.js";import{A as t}from"./index-PF0Qypw1.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";import"./useSize-AW8DBSvq.js";import"./index-im-bjvvC.js";import"./isNativeReflectConstruct-eFpeDW0O.js";import"./colors-eCm2DHWj.js";import"./index-hT9d0Ulg.js";import"./Compact-Yx2cKuB_.js";const j={title:"Components/DataDisplay/Avatar",component:t,args:{name:"Carlos",sub:"Front-end","tooltip.title":"Carlos"}},l={args:{showInfo:!0},argTypes:{showInfo:{control:"boolean",table:{category:"Avatar",defaultValue:{summary:"default"}}},name:{control:"text",table:{category:"Avatar",defaultValue:{summary:"default"}}},sub:{table:{category:"Avatar",defaultValue:{summary:"default"}}},showTooltip:{control:"boolean",table:{category:"Avatar",defaultValue:{summary:"default"}}},"tooltip.title":{control:"text",if:{arg:"showTooltip"},table:{category:"Avatar",defaultValue:{summary:"default"}}},size:{options:["default","xSmall","small","large","xLarge"],control:"inline-radio",defaultValue:"default",table:{category:"Avatar",defaultValue:{summary:"default"}}},shape:{options:["square","circle"],control:"inline-radio",defaultValue:"square",table:{category:"Avatar",defaultValue:{summary:"square"}}},loading:{control:"boolean",defaultValue:!1,table:{category:"Avatar",defaultValue:{summary:!1}}},disabled:{control:"boolean",defaultValue:!1,table:{category:"Avatar",defaultValue:{summary:!1}}},fallback:{control:"text",description:"AvatarFallback: A React component for handling missing user avatars.",table:{defaultValue:{summary:"default"},type:{},category:"Avatar"}}},render:r=>b("div",{className:"flex gap-3 w-full flex-wrap items-center",children:[a(t,{...r,tooltip:{title:r["tooltip.title"]}}),a(t,{name:"Home",fallback:a(A,{fill:"surface-primary",name:"home-user"}),children:a(t.Sub,{className:"text-@surface-primary",children:"sweet home"})})]})},o={args:{"number of avatars":10,maxCount:5},argTypes:{"number of avatars":{control:{type:"number",min:2,max:20},table:{category:"Avatar.Group"}},maxCount:{control:{type:"number"},table:{category:"Avatar.Group"}},"avatar size":{options:["default","xSmall","small","large","xLarge"],control:"inline-radio",defaultValue:"default",table:{category:"Avatar",defaultValue:{summary:"default"}}},"avatar shape":{options:["square","circle"],control:"inline-radio",defaultValue:"square",table:{category:"Avatar",defaultValue:{summary:"square"}}},loading:{control:"boolean",defaultValue:!1,table:{category:"Avatar",defaultValue:{summary:!1}}},disabled:{control:"boolean",defaultValue:!1,table:{category:"Avatar",defaultValue:{summary:!1}}}},render:({"number of avatars":r,maxCount:y,"tooltip.title":V,...n})=>{const[v,g]=u.useState([]);return u.useEffect(()=>{fetch(`https://dummyjson.com/users?limit=${r}`).then(e=>e.json()).then(e=>g(e.users))},[r]),a("div",{className:"flex gap-3 w-full flex-wrap items-center",children:a(t.Group,{maxCount:y,maxPopoverTrigger:"click",size:"large",children:v.map((e,s)=>a("a",{children:a(t,{...n,name:e.firstName,size:n["avatar size"],shape:n["avatar shape"],src:`https://i.pravatar.cc/600?img=${s+1}`,tooltip:{title:e.firstName}})},s))})})}};var m,i,c;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    showInfo: true
  },
  argTypes: {
    showInfo: {
      control: 'boolean',
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: 'default'
        }
      }
    },
    name: {
      control: 'text',
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: 'default'
        }
      }
    },
    sub: {
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: 'default'
        }
      }
    },
    showTooltip: {
      control: 'boolean',
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: 'default'
        }
      }
    },
    ['tooltip.title']: {
      control: 'text',
      if: {
        arg: 'showTooltip'
      },
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: 'default'
        }
      }
    },
    size: {
      options: ['default', 'xSmall', 'small', 'large', 'xLarge'],
      control: 'inline-radio',
      defaultValue: 'default',
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: 'default'
        }
      }
    },
    shape: {
      options: ['square', 'circle'],
      control: 'inline-radio',
      defaultValue: 'square',
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: 'square'
        }
      }
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: false
        }
      }
    },
    fallback: {
      control: 'text',
      description: 'AvatarFallback: A React component for handling missing user avatars.',
      table: {
        defaultValue: {
          summary: 'default'
        },
        type: {},
        category: 'Avatar'
      }
    }
  },
  render: (args: IAvatarProps & {
    ['tooltip.title']: string;
  }) => {
    return <div className="flex gap-3 w-full flex-wrap items-center">\r
                <Avatar {...args} tooltip={{
        title: args['tooltip.title']
      }} />\r
                <Avatar name="Home" fallback={<Icon fill="surface-primary" name={'home-user'} />}>\r
                    <Avatar.Sub className="text-@surface-primary">sweet home</Avatar.Sub>\r
                </Avatar>\r
            </div>;
  }
}`,...(c=(i=l.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var f,d,p;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ['number of avatars']: 10,
    maxCount: 5
  },
  argTypes: {
    ['number of avatars']: {
      control: {
        type: 'number',
        min: 2,
        max: 20
      },
      table: {
        category: 'Avatar.Group'
      }
    },
    maxCount: {
      control: {
        type: 'number'
      },
      table: {
        category: 'Avatar.Group'
      }
    },
    ['avatar size']: {
      options: ['default', 'xSmall', 'small', 'large', 'xLarge'],
      control: 'inline-radio',
      defaultValue: 'default',
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: 'default'
        }
      }
    },
    ['avatar shape']: {
      options: ['square', 'circle'],
      control: 'inline-radio',
      defaultValue: 'square',
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: 'square'
        }
      }
    },
    loading: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: false
        }
      }
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Avatar',
        defaultValue: {
          summary: false
        }
      }
    }
  },
  render: ({
    'number of avatars': noa,
    maxCount,
    'tooltip.title': tooltipTitle,
    ...args
  }: Parameters<typeof Avatar.Group>[0] & IAvatarProps & {
    ['number of avatars']: number;
    ['tooltip.title']: string;
    ['avatar size']: any;
    ['avatar shape']: any;
  }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch(\`https://dummyjson.com/users?limit=\${noa}\`).then(res => res.json()).then(e => setUsers(e.users));
    }, [noa]);
    return <div className="flex gap-3 w-full flex-wrap items-center">\r
                <Avatar.Group maxCount={maxCount} maxPopoverTrigger="click" size={'large'}>\r
                    {users.map((user: any, i) => {
          return <a key={i}>\r
                                <Avatar {...args} name={user.firstName} size={args['avatar size']} shape={args['avatar shape']} src={\`https://i.pravatar.cc/600?img=\${i + 1}\`} tooltip={{
              title: user.firstName
            }} />\r
                            </a>;
        })}\r
                </Avatar.Group>\r
            </div>;
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const P=["AvatarStory","AvatarGroupStory"];export{o as AvatarGroupStory,l as AvatarStory,P as __namedExportsOrder,j as default};
//# sourceMappingURL=Avatar.stories-gLq8ZOHP.js.map
