import{_ as c,w as U,i as h,j as W,k as S,l as q,n as F,a as R,b as E,o as G,c as H,d as k}from"./useSize-AW8DBSvq.js";import{_ as J}from"./extends-dGVwEr9R.js";import{R as _,r as s}from"./index-4g5l5LRQ.js";function tn(n,o){var e=c({},n);return Array.isArray(o)&&o.forEach(function(r){delete e[r]}),e}function K(n){return n.replace(/-(.)/g,function(o,e){return e.toUpperCase()})}function M(n,o){U(n,"[@ant-design/icons] ".concat(o))}function I(n){return h(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(h(n.icon)==="object"||typeof n.icon=="function")}function N(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(o,e){var r=n[e];switch(e){case"class":o.className=r,delete o.class;break;default:delete o[e],o[K(e)]=r}return o},{})}function T(n,o,e){return e?_.createElement(n.tag,c(c({key:o},N(n.attrs)),e),(n.children||[]).map(function(r,a){return T(r,"".concat(o,"-").concat(n.tag,"-").concat(a))})):_.createElement(n.tag,c({key:o},N(n.attrs)),(n.children||[]).map(function(r,a){return T(r,"".concat(o,"-").concat(n.tag,"-").concat(a))}))}function A(n){return W(n)[0]}function z(n){return n?Array.isArray(n)?n:[n]:[]}var Q=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,V=function(o){var e=s.useContext(S),r=e.csp,a=e.prefixCls,l=Q;a&&(l=l.replace(/anticon/g,a)),s.useEffect(function(){var i=o.current,m=q(i);F(l,"@ant-design-icons",{prepend:!0,csp:r,attachTo:m})},[])},X=["icon","className","onClick","style","primaryColor","secondaryColor"],u={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Y(n){var o=n.primaryColor,e=n.secondaryColor;u.primaryColor=o,u.secondaryColor=e||A(o),u.calculated=!!e}function Z(){return c({},u)}var y=function(o){var e=o.icon,r=o.className,a=o.onClick,l=o.style,i=o.primaryColor,m=o.secondaryColor,d=R(o,X),C=s.useRef(),f=u;if(i&&(f={primaryColor:i,secondaryColor:m||A(i)}),V(C),M(I(e),"icon should be icon definiton, but got ".concat(e)),!I(e))return null;var t=e;return t&&typeof t.icon=="function"&&(t=c(c({},t),{},{icon:t.icon(f.primaryColor,f.secondaryColor)})),T(t.icon,"svg-".concat(t.name),c(c({className:r,onClick:a,style:l,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d),{},{ref:C}))};y.displayName="IconReact";y.getTwoToneColors=Z;y.setTwoToneColors=Y;const b=y;function j(n){var o=z(n),e=E(o,2),r=e[0],a=e[1];return b.setTwoToneColors({primaryColor:r,secondaryColor:a})}function nn(){var n=b.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var on=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];j(G.primary);var g=s.forwardRef(function(n,o){var e,r=n.className,a=n.icon,l=n.spin,i=n.rotate,m=n.tabIndex,d=n.onClick,C=n.twoToneColor,f=R(n,on),t=s.useContext(S),w=t.prefixCls,p=w===void 0?"anticon":w,$=t.rootClassName,P=H($,p,(e={},k(e,"".concat(p,"-").concat(a.name),!!a.name),k(e,"".concat(p,"-spin"),!!l||a.name==="loading"),e),r),v=m;v===void 0&&d&&(v=-1);var B=i?{msTransform:"rotate(".concat(i,"deg)"),transform:"rotate(".concat(i,"deg)")}:void 0,O=z(C),x=E(O,2),D=x[0],L=x[1];return s.createElement("span",J({role:"img","aria-label":a.name},f,{ref:o,tabIndex:v,onClick:d,className:P}),s.createElement(b,{icon:a,primaryColor:D,secondaryColor:L,style:B}))});g.displayName="AntdIcon";g.getTwoToneColor=nn;g.setTwoToneColor=j;const cn=g;export{cn as A,tn as o};
//# sourceMappingURL=AntdIcon-yRTjINCa.js.map
