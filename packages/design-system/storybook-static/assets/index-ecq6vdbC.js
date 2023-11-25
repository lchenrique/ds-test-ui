import{r as L,R as Yn}from"./index-4g5l5LRQ.js";import{P as M}from"./index-tvtfaFq4.js";import{_ as rn}from"./extends-dGVwEr9R.js";var Wn={exports:{}},ct={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=L,Ur=Symbol.for("react.element"),Yr=Symbol.for("react.fragment"),Wr=Object.prototype.hasOwnProperty,qr=Gr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vr={key:!0,ref:!0,__self:!0,__source:!0};function qn(e,t,n){var r,a={},c=null,i=null;n!==void 0&&(c=""+n),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)Wr.call(t,r)&&!Vr.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ur,type:e,key:c,ref:i,props:a,_owner:qr.current}}ct.Fragment=Yr;ct.jsx=qn;ct.jsxs=qn;Wn.exports=ct;var Ht=Wn.exports;const xs=Ht.Fragment,wt=Ht.jsx,ws=Ht.jsxs;function at(e){"@babel/helpers - typeof";return at=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at(e)}var Br=/^\s+/,Xr=/\s+$/;function k(e,t){if(e=e||"",t=t||{},e instanceof k)return e;if(!(this instanceof k))return new k(e,t);var n=Kr(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}k.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),n,r,a,c,i,o;return n=t.r/255,r=t.g/255,a=t.b/255,n<=.03928?c=n/12.92:c=Math.pow((n+.055)/1.055,2.4),r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),a<=.03928?o=a/12.92:o=Math.pow((a+.055)/1.055,2.4),.2126*c+.7152*i+.0722*o},setAlpha:function(t){return this._a=Vn(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=on(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=on(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),a=Math.round(t.v*100);return this._a==1?"hsv("+n+", "+r+"%, "+a+"%)":"hsva("+n+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=an(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=an(this._r,this._g,this._b),n=Math.round(t.h*360),r=Math.round(t.s*100),a=Math.round(t.l*100);return this._a==1?"hsl("+n+", "+r+"%, "+a+"%)":"hsla("+n+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return sn(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return ea(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(j(this._r,255)*100)+"%",g:Math.round(j(this._g,255)*100)+"%",b:Math.round(j(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(j(this._r,255)*100)+"%, "+Math.round(j(this._g,255)*100)+"%, "+Math.round(j(this._b,255)*100)+"%)":"rgba("+Math.round(j(this._r,255)*100)+"%, "+Math.round(j(this._g,255)*100)+"%, "+Math.round(j(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:da[sn(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var n="#"+ln(this._r,this._g,this._b,this._a),r=n,a=this._gradientType?"GradientType = 1, ":"";if(t){var c=k(t);r="#"+ln(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+n+",endColorstr="+r+")"},toString:function(t){var n=!!t;t=t||this._format;var r=!1,a=this._a<1&&this._a>=0,c=!n&&a&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return c?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return k(this.toString())},_applyModification:function(t,n){var r=t.apply(null,[this].concat([].slice.call(n)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(aa,arguments)},brighten:function(){return this._applyModification(ia,arguments)},darken:function(){return this._applyModification(oa,arguments)},desaturate:function(){return this._applyModification(ta,arguments)},saturate:function(){return this._applyModification(na,arguments)},greyscale:function(){return this._applyModification(ra,arguments)},spin:function(){return this._applyModification(sa,arguments)},_applyCombination:function(t,n){return t.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(fa,arguments)},complement:function(){return this._applyCombination(la,arguments)},monochromatic:function(){return this._applyCombination(ua,arguments)},splitcomplement:function(){return this._applyCombination(ca,arguments)},triad:function(){return this._applyCombination(cn,[3])},tetrad:function(){return this._applyCombination(cn,[4])}};k.fromRatio=function(e,t){if(at(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(r==="a"?n[r]=e[r]:n[r]=Ee(e[r]));e=n}return k(e,t)};function Kr(e){var t={r:0,g:0,b:0},n=1,r=null,a=null,c=null,i=!1,o=!1;return typeof e=="string"&&(e=ba(e)),at(e)=="object"&&(Z(e.r)&&Z(e.g)&&Z(e.b)?(t=Jr(e.r,e.g,e.b),i=!0,o=String(e.r).substr(-1)==="%"?"prgb":"rgb"):Z(e.h)&&Z(e.s)&&Z(e.v)?(r=Ee(e.s),a=Ee(e.v),t=Qr(e.h,r,a),i=!0,o="hsv"):Z(e.h)&&Z(e.s)&&Z(e.l)&&(r=Ee(e.s),c=Ee(e.l),t=Zr(e.h,r,c),i=!0,o="hsl"),e.hasOwnProperty("a")&&(n=e.a)),n=Vn(n),{ok:i,format:e.format||o,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}function Jr(e,t,n){return{r:j(e,255)*255,g:j(t,255)*255,b:j(n,255)*255}}function an(e,t,n){e=j(e,255),t=j(t,255),n=j(n,255);var r=Math.max(e,t,n),a=Math.min(e,t,n),c,i,o=(r+a)/2;if(r==a)c=i=0;else{var l=r-a;switch(i=o>.5?l/(2-r-a):l/(r+a),r){case e:c=(t-n)/l+(t<n?6:0);break;case t:c=(n-e)/l+2;break;case n:c=(e-t)/l+4;break}c/=6}return{h:c,s:i,l:o}}function Zr(e,t,n){var r,a,c;e=j(e,360),t=j(t,100),n=j(n,100);function i(f,s,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?f+(s-f)*6*u:u<1/2?s:u<2/3?f+(s-f)*(2/3-u)*6:f}if(t===0)r=a=c=n;else{var o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;r=i(l,o,e+1/3),a=i(l,o,e),c=i(l,o,e-1/3)}return{r:r*255,g:a*255,b:c*255}}function on(e,t,n){e=j(e,255),t=j(t,255),n=j(n,255);var r=Math.max(e,t,n),a=Math.min(e,t,n),c,i,o=r,l=r-a;if(i=r===0?0:l/r,r==a)c=0;else{switch(r){case e:c=(t-n)/l+(t<n?6:0);break;case t:c=(n-e)/l+2;break;case n:c=(e-t)/l+4;break}c/=6}return{h:c,s:i,v:o}}function Qr(e,t,n){e=j(e,360)*6,t=j(t,100),n=j(n,100);var r=Math.floor(e),a=e-r,c=n*(1-t),i=n*(1-a*t),o=n*(1-(1-a)*t),l=r%6,f=[n,i,c,c,o,n][l],s=[o,n,n,i,c,c][l],u=[c,c,o,n,n,i][l];return{r:f*255,g:s*255,b:u*255}}function sn(e,t,n,r){var a=[X(Math.round(e).toString(16)),X(Math.round(t).toString(16)),X(Math.round(n).toString(16))];return r&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function ea(e,t,n,r,a){var c=[X(Math.round(e).toString(16)),X(Math.round(t).toString(16)),X(Math.round(n).toString(16)),X(Bn(r))];return a&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)&&c[3].charAt(0)==c[3].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0)+c[3].charAt(0):c.join("")}function ln(e,t,n,r){var a=[X(Bn(r)),X(Math.round(e).toString(16)),X(Math.round(t).toString(16)),X(Math.round(n).toString(16))];return a.join("")}k.equals=function(e,t){return!e||!t?!1:k(e).toRgbString()==k(t).toRgbString()};k.random=function(){return k.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function ta(e,t){t=t===0?0:t||10;var n=k(e).toHsl();return n.s-=t/100,n.s=ft(n.s),k(n)}function na(e,t){t=t===0?0:t||10;var n=k(e).toHsl();return n.s+=t/100,n.s=ft(n.s),k(n)}function ra(e){return k(e).desaturate(100)}function aa(e,t){t=t===0?0:t||10;var n=k(e).toHsl();return n.l+=t/100,n.l=ft(n.l),k(n)}function ia(e,t){t=t===0?0:t||10;var n=k(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),k(n)}function oa(e,t){t=t===0?0:t||10;var n=k(e).toHsl();return n.l-=t/100,n.l=ft(n.l),k(n)}function sa(e,t){var n=k(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,k(n)}function la(e){var t=k(e).toHsl();return t.h=(t.h+180)%360,k(t)}function cn(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=k(e).toHsl(),r=[k(e)],a=360/t,c=1;c<t;c++)r.push(k({h:(n.h+c*a)%360,s:n.s,l:n.l}));return r}function ca(e){var t=k(e).toHsl(),n=t.h;return[k(e),k({h:(n+72)%360,s:t.s,l:t.l}),k({h:(n+216)%360,s:t.s,l:t.l})]}function fa(e,t,n){t=t||6,n=n||30;var r=k(e).toHsl(),a=360/n,c=[k(e)];for(r.h=(r.h-(a*t>>1)+720)%360;--t;)r.h=(r.h+a)%360,c.push(k(r));return c}function ua(e,t){t=t||6;for(var n=k(e).toHsv(),r=n.h,a=n.s,c=n.v,i=[],o=1/t;t--;)i.push(k({h:r,s:a,v:c})),c=(c+o)%1;return i}k.mix=function(e,t,n){n=n===0?0:n||50;var r=k(e).toRgb(),a=k(t).toRgb(),c=n/100,i={r:(a.r-r.r)*c+r.r,g:(a.g-r.g)*c+r.g,b:(a.b-r.b)*c+r.b,a:(a.a-r.a)*c+r.a};return k(i)};k.readability=function(e,t){var n=k(e),r=k(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)};k.isReadable=function(e,t,n){var r=k.readability(e,t),a,c;switch(c=!1,a=va(n),a.level+a.size){case"AAsmall":case"AAAlarge":c=r>=4.5;break;case"AAlarge":c=r>=3;break;case"AAAsmall":c=r>=7;break}return c};k.mostReadable=function(e,t,n){var r=null,a=0,c,i,o,l;n=n||{},i=n.includeFallbackColors,o=n.level,l=n.size;for(var f=0;f<t.length;f++)c=k.readability(e,t[f]),c>a&&(a=c,r=k(t[f]));return k.isReadable(e,r,{level:o,size:l})||!i?r:(n.includeFallbackColors=!1,k.mostReadable(e,["#fff","#000"],n))};var kt=k.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},da=k.hexNames=ma(kt);function ma(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}function Vn(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function j(e,t){ha(e)&&(e="100%");var n=ga(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function ft(e){return Math.min(1,Math.max(0,e))}function G(e){return parseInt(e,16)}function ha(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function ga(e){return typeof e=="string"&&e.indexOf("%")!=-1}function X(e){return e.length==1?"0"+e:""+e}function Ee(e){return e<=1&&(e=e*100+"%"),e}function Bn(e){return Math.round(parseFloat(e)*255).toString(16)}function fn(e){return G(e)/255}var B=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",n="(?:"+t+")|(?:"+e+")",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",a="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+a),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+a),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+a),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Z(e){return!!B.CSS_UNIT.exec(e)}function ba(e){e=e.replace(Br,"").replace(Xr,"").toLowerCase();var t=!1;if(kt[e])e=kt[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=B.rgb.exec(e))?{r:n[1],g:n[2],b:n[3]}:(n=B.rgba.exec(e))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=B.hsl.exec(e))?{h:n[1],s:n[2],l:n[3]}:(n=B.hsla.exec(e))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=B.hsv.exec(e))?{h:n[1],s:n[2],v:n[3]}:(n=B.hsva.exec(e))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=B.hex8.exec(e))?{r:G(n[1]),g:G(n[2]),b:G(n[3]),a:fn(n[4]),format:t?"name":"hex8"}:(n=B.hex6.exec(e))?{r:G(n[1]),g:G(n[2]),b:G(n[3]),format:t?"name":"hex"}:(n=B.hex4.exec(e))?{r:G(n[1]+""+n[1]),g:G(n[2]+""+n[2]),b:G(n[3]+""+n[3]),a:fn(n[4]+""+n[4]),format:t?"name":"hex8"}:(n=B.hex3.exec(e))?{r:G(n[1]+""+n[1]),g:G(n[2]+""+n[2]),b:G(n[3]+""+n[3]),format:t?"name":"hex"}:!1}function va(e){var t,n;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),n=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:t,size:n}}var pa=Object.create,Xn=Object.defineProperty,ya=Object.getOwnPropertyDescriptor,Kn=Object.getOwnPropertyNames,xa=Object.getPrototypeOf,wa=Object.prototype.hasOwnProperty,U=(e,t)=>function(){return t||(0,e[Kn(e)[0]])((t={exports:{}}).exports,t),t.exports},ka=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Kn(t))!wa.call(e,a)&&a!==n&&Xn(e,a,{get:()=>t[a],enumerable:!(r=ya(t,a))||r.enumerable});return e},ut=(e,t,n)=>(n=e!=null?pa(xa(e)):{},ka(t||!e||!e.__esModule?Xn(n,"default",{value:e,enumerable:!0}):n,e)),Jn=U({"../../node_modules/color-name/index.js"(e,t){t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),Aa=U({"../../node_modules/is-arrayish/index.js"(e,t){t.exports=function(r){return!r||typeof r=="string"?!1:r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&r.constructor.name!=="String")}}}),_a=U({"../../node_modules/simple-swizzle/index.js"(e,t){var n=Aa(),r=Array.prototype.concat,a=Array.prototype.slice,c=t.exports=function(o){for(var l=[],f=0,s=o.length;f<s;f++){var u=o[f];n(u)?l=r.call(l,a.call(u)):l.push(u)}return l};c.wrap=function(i){return function(){return i(c(arguments))}}}}),Sa=U({"../../node_modules/color-string/index.js"(e,t){var n=Jn(),r=_a(),a=Object.hasOwnProperty,c=Object.create(null);for(i in n)a.call(n,i)&&(c[n[i]]=i);var i,o=t.exports={to:{},get:{}};o.get=function(s){var u=s.substring(0,3).toLowerCase(),m,b;switch(u){case"hsl":m=o.get.hsl(s),b="hsl";break;case"hwb":m=o.get.hwb(s),b="hwb";break;default:m=o.get.rgb(s),b="rgb";break}return m?{model:b,value:m}:null},o.get.rgb=function(s){if(!s)return null;var u=/^#([a-f0-9]{3,4})$/i,m=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,b=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,d=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,h=/^(\w+)$/,g=[0,0,0,1],v,p,A;if(v=s.match(m)){for(A=v[2],v=v[1],p=0;p<3;p++){var _=p*2;g[p]=parseInt(v.slice(_,_+2),16)}A&&(g[3]=parseInt(A,16)/255)}else if(v=s.match(u)){for(v=v[1],A=v[3],p=0;p<3;p++)g[p]=parseInt(v[p]+v[p],16);A&&(g[3]=parseInt(A+A,16)/255)}else if(v=s.match(b)){for(p=0;p<3;p++)g[p]=parseInt(v[p+1],0);v[4]&&(v[5]?g[3]=parseFloat(v[4])*.01:g[3]=parseFloat(v[4]))}else if(v=s.match(d)){for(p=0;p<3;p++)g[p]=Math.round(parseFloat(v[p+1])*2.55);v[4]&&(v[5]?g[3]=parseFloat(v[4])*.01:g[3]=parseFloat(v[4]))}else return(v=s.match(h))?v[1]==="transparent"?[0,0,0,0]:a.call(n,v[1])?(g=n[v[1]],g[3]=1,g):null:null;for(p=0;p<3;p++)g[p]=l(g[p],0,255);return g[3]=l(g[3],0,1),g},o.get.hsl=function(s){if(!s)return null;var u=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,m=s.match(u);if(m){var b=parseFloat(m[4]),d=(parseFloat(m[1])%360+360)%360,h=l(parseFloat(m[2]),0,100),g=l(parseFloat(m[3]),0,100),v=l(isNaN(b)?1:b,0,1);return[d,h,g,v]}return null},o.get.hwb=function(s){if(!s)return null;var u=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,m=s.match(u);if(m){var b=parseFloat(m[4]),d=(parseFloat(m[1])%360+360)%360,h=l(parseFloat(m[2]),0,100),g=l(parseFloat(m[3]),0,100),v=l(isNaN(b)?1:b,0,1);return[d,h,g,v]}return null},o.to.hex=function(){var s=r(arguments);return"#"+f(s[0])+f(s[1])+f(s[2])+(s[3]<1?f(Math.round(s[3]*255)):"")},o.to.rgb=function(){var s=r(arguments);return s.length<4||s[3]===1?"rgb("+Math.round(s[0])+", "+Math.round(s[1])+", "+Math.round(s[2])+")":"rgba("+Math.round(s[0])+", "+Math.round(s[1])+", "+Math.round(s[2])+", "+s[3]+")"},o.to.rgb.percent=function(){var s=r(arguments),u=Math.round(s[0]/255*100),m=Math.round(s[1]/255*100),b=Math.round(s[2]/255*100);return s.length<4||s[3]===1?"rgb("+u+"%, "+m+"%, "+b+"%)":"rgba("+u+"%, "+m+"%, "+b+"%, "+s[3]+")"},o.to.hsl=function(){var s=r(arguments);return s.length<4||s[3]===1?"hsl("+s[0]+", "+s[1]+"%, "+s[2]+"%)":"hsla("+s[0]+", "+s[1]+"%, "+s[2]+"%, "+s[3]+")"},o.to.hwb=function(){var s=r(arguments),u="";return s.length>=4&&s[3]!==1&&(u=", "+s[3]),"hwb("+s[0]+", "+s[1]+"%, "+s[2]+"%"+u+")"},o.to.keyword=function(s){return c[s.slice(0,3)]};function l(s,u,m){return Math.min(Math.max(u,s),m)}function f(s){var u=Math.round(s).toString(16).toUpperCase();return u.length<2?"0"+u:u}}}),Zn=U({"../../node_modules/color-convert/conversions.js"(e,t){var n=Jn(),r={};for(const i of Object.keys(n))r[n[i]]=i;var a={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};t.exports=a;for(const i of Object.keys(a)){if(!("channels"in a[i]))throw new Error("missing channels property: "+i);if(!("labels"in a[i]))throw new Error("missing channel labels property: "+i);if(a[i].labels.length!==a[i].channels)throw new Error("channel and label counts mismatch: "+i);const{channels:o,labels:l}=a[i];delete a[i].channels,delete a[i].labels,Object.defineProperty(a[i],"channels",{value:o}),Object.defineProperty(a[i],"labels",{value:l})}a.rgb.hsl=function(i){const o=i[0]/255,l=i[1]/255,f=i[2]/255,s=Math.min(o,l,f),u=Math.max(o,l,f),m=u-s;let b,d;u===s?b=0:o===u?b=(l-f)/m:l===u?b=2+(f-o)/m:f===u&&(b=4+(o-l)/m),b=Math.min(b*60,360),b<0&&(b+=360);const h=(s+u)/2;return u===s?d=0:h<=.5?d=m/(u+s):d=m/(2-u-s),[b,d*100,h*100]},a.rgb.hsv=function(i){let o,l,f,s,u;const m=i[0]/255,b=i[1]/255,d=i[2]/255,h=Math.max(m,b,d),g=h-Math.min(m,b,d),v=function(p){return(h-p)/6/g+1/2};return g===0?(s=0,u=0):(u=g/h,o=v(m),l=v(b),f=v(d),m===h?s=f-l:b===h?s=1/3+o-f:d===h&&(s=2/3+l-o),s<0?s+=1:s>1&&(s-=1)),[s*360,u*100,h*100]},a.rgb.hwb=function(i){const o=i[0],l=i[1];let f=i[2];const s=a.rgb.hsl(i)[0],u=1/255*Math.min(o,Math.min(l,f));return f=1-1/255*Math.max(o,Math.max(l,f)),[s,u*100,f*100]},a.rgb.cmyk=function(i){const o=i[0]/255,l=i[1]/255,f=i[2]/255,s=Math.min(1-o,1-l,1-f),u=(1-o-s)/(1-s)||0,m=(1-l-s)/(1-s)||0,b=(1-f-s)/(1-s)||0;return[u*100,m*100,b*100,s*100]};function c(i,o){return(i[0]-o[0])**2+(i[1]-o[1])**2+(i[2]-o[2])**2}a.rgb.keyword=function(i){const o=r[i];if(o)return o;let l=1/0,f;for(const s of Object.keys(n)){const u=n[s],m=c(i,u);m<l&&(l=m,f=s)}return f},a.keyword.rgb=function(i){return n[i]},a.rgb.xyz=function(i){let o=i[0]/255,l=i[1]/255,f=i[2]/255;o=o>.04045?((o+.055)/1.055)**2.4:o/12.92,l=l>.04045?((l+.055)/1.055)**2.4:l/12.92,f=f>.04045?((f+.055)/1.055)**2.4:f/12.92;const s=o*.4124+l*.3576+f*.1805,u=o*.2126+l*.7152+f*.0722,m=o*.0193+l*.1192+f*.9505;return[s*100,u*100,m*100]},a.rgb.lab=function(i){const o=a.rgb.xyz(i);let l=o[0],f=o[1],s=o[2];l/=95.047,f/=100,s/=108.883,l=l>.008856?l**(1/3):7.787*l+16/116,f=f>.008856?f**(1/3):7.787*f+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;const u=116*f-16,m=500*(l-f),b=200*(f-s);return[u,m,b]},a.hsl.rgb=function(i){const o=i[0]/360,l=i[1]/100,f=i[2]/100;let s,u,m;if(l===0)return m=f*255,[m,m,m];f<.5?s=f*(1+l):s=f+l-f*l;const b=2*f-s,d=[0,0,0];for(let h=0;h<3;h++)u=o+1/3*-(h-1),u<0&&u++,u>1&&u--,6*u<1?m=b+(s-b)*6*u:2*u<1?m=s:3*u<2?m=b+(s-b)*(2/3-u)*6:m=b,d[h]=m*255;return d},a.hsl.hsv=function(i){const o=i[0];let l=i[1]/100,f=i[2]/100,s=l;const u=Math.max(f,.01);f*=2,l*=f<=1?f:2-f,s*=u<=1?u:2-u;const m=(f+l)/2,b=f===0?2*s/(u+s):2*l/(f+l);return[o,b*100,m*100]},a.hsv.rgb=function(i){const o=i[0]/60,l=i[1]/100;let f=i[2]/100;const s=Math.floor(o)%6,u=o-Math.floor(o),m=255*f*(1-l),b=255*f*(1-l*u),d=255*f*(1-l*(1-u));switch(f*=255,s){case 0:return[f,d,m];case 1:return[b,f,m];case 2:return[m,f,d];case 3:return[m,b,f];case 4:return[d,m,f];case 5:return[f,m,b]}},a.hsv.hsl=function(i){const o=i[0],l=i[1]/100,f=i[2]/100,s=Math.max(f,.01);let u,m;m=(2-l)*f;const b=(2-l)*s;return u=l*s,u/=b<=1?b:2-b,u=u||0,m/=2,[o,u*100,m*100]},a.hwb.rgb=function(i){const o=i[0]/360;let l=i[1]/100,f=i[2]/100;const s=l+f;let u;s>1&&(l/=s,f/=s);const m=Math.floor(6*o),b=1-f;u=6*o-m,m&1&&(u=1-u);const d=l+u*(b-l);let h,g,v;switch(m){default:case 6:case 0:h=b,g=d,v=l;break;case 1:h=d,g=b,v=l;break;case 2:h=l,g=b,v=d;break;case 3:h=l,g=d,v=b;break;case 4:h=d,g=l,v=b;break;case 5:h=b,g=l,v=d;break}return[h*255,g*255,v*255]},a.cmyk.rgb=function(i){const o=i[0]/100,l=i[1]/100,f=i[2]/100,s=i[3]/100,u=1-Math.min(1,o*(1-s)+s),m=1-Math.min(1,l*(1-s)+s),b=1-Math.min(1,f*(1-s)+s);return[u*255,m*255,b*255]},a.xyz.rgb=function(i){const o=i[0]/100,l=i[1]/100,f=i[2]/100;let s,u,m;return s=o*3.2406+l*-1.5372+f*-.4986,u=o*-.9689+l*1.8758+f*.0415,m=o*.0557+l*-.204+f*1.057,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,u=u>.0031308?1.055*u**(1/2.4)-.055:u*12.92,m=m>.0031308?1.055*m**(1/2.4)-.055:m*12.92,s=Math.min(Math.max(0,s),1),u=Math.min(Math.max(0,u),1),m=Math.min(Math.max(0,m),1),[s*255,u*255,m*255]},a.xyz.lab=function(i){let o=i[0],l=i[1],f=i[2];o/=95.047,l/=100,f/=108.883,o=o>.008856?o**(1/3):7.787*o+16/116,l=l>.008856?l**(1/3):7.787*l+16/116,f=f>.008856?f**(1/3):7.787*f+16/116;const s=116*l-16,u=500*(o-l),m=200*(l-f);return[s,u,m]},a.lab.xyz=function(i){const o=i[0],l=i[1],f=i[2];let s,u,m;u=(o+16)/116,s=l/500+u,m=u-f/200;const b=u**3,d=s**3,h=m**3;return u=b>.008856?b:(u-16/116)/7.787,s=d>.008856?d:(s-16/116)/7.787,m=h>.008856?h:(m-16/116)/7.787,s*=95.047,u*=100,m*=108.883,[s,u,m]},a.lab.lch=function(i){const o=i[0],l=i[1],f=i[2];let s;s=Math.atan2(f,l)*360/2/Math.PI,s<0&&(s+=360);const m=Math.sqrt(l*l+f*f);return[o,m,s]},a.lch.lab=function(i){const o=i[0],l=i[1],s=i[2]/360*2*Math.PI,u=l*Math.cos(s),m=l*Math.sin(s);return[o,u,m]},a.rgb.ansi16=function(i,o=null){const[l,f,s]=i;let u=o===null?a.rgb.hsv(i)[2]:o;if(u=Math.round(u/50),u===0)return 30;let m=30+(Math.round(s/255)<<2|Math.round(f/255)<<1|Math.round(l/255));return u===2&&(m+=60),m},a.hsv.ansi16=function(i){return a.rgb.ansi16(a.hsv.rgb(i),i[2])},a.rgb.ansi256=function(i){const o=i[0],l=i[1],f=i[2];return o===l&&l===f?o<8?16:o>248?231:Math.round((o-8)/247*24)+232:16+36*Math.round(o/255*5)+6*Math.round(l/255*5)+Math.round(f/255*5)},a.ansi16.rgb=function(i){let o=i%10;if(o===0||o===7)return i>50&&(o+=3.5),o=o/10.5*255,[o,o,o];const l=(~~(i>50)+1)*.5,f=(o&1)*l*255,s=(o>>1&1)*l*255,u=(o>>2&1)*l*255;return[f,s,u]},a.ansi256.rgb=function(i){if(i>=232){const u=(i-232)*10+8;return[u,u,u]}i-=16;let o;const l=Math.floor(i/36)/5*255,f=Math.floor((o=i%36)/6)/5*255,s=o%6/5*255;return[l,f,s]},a.rgb.hex=function(i){const l=(((Math.round(i[0])&255)<<16)+((Math.round(i[1])&255)<<8)+(Math.round(i[2])&255)).toString(16).toUpperCase();return"000000".substring(l.length)+l},a.hex.rgb=function(i){const o=i.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!o)return[0,0,0];let l=o[0];o[0].length===3&&(l=l.split("").map(b=>b+b).join(""));const f=parseInt(l,16),s=f>>16&255,u=f>>8&255,m=f&255;return[s,u,m]},a.rgb.hcg=function(i){const o=i[0]/255,l=i[1]/255,f=i[2]/255,s=Math.max(Math.max(o,l),f),u=Math.min(Math.min(o,l),f),m=s-u;let b,d;return m<1?b=u/(1-m):b=0,m<=0?d=0:s===o?d=(l-f)/m%6:s===l?d=2+(f-o)/m:d=4+(o-l)/m,d/=6,d%=1,[d*360,m*100,b*100]},a.hsl.hcg=function(i){const o=i[1]/100,l=i[2]/100,f=l<.5?2*o*l:2*o*(1-l);let s=0;return f<1&&(s=(l-.5*f)/(1-f)),[i[0],f*100,s*100]},a.hsv.hcg=function(i){const o=i[1]/100,l=i[2]/100,f=o*l;let s=0;return f<1&&(s=(l-f)/(1-f)),[i[0],f*100,s*100]},a.hcg.rgb=function(i){const o=i[0]/360,l=i[1]/100,f=i[2]/100;if(l===0)return[f*255,f*255,f*255];const s=[0,0,0],u=o%1*6,m=u%1,b=1-m;let d=0;switch(Math.floor(u)){case 0:s[0]=1,s[1]=m,s[2]=0;break;case 1:s[0]=b,s[1]=1,s[2]=0;break;case 2:s[0]=0,s[1]=1,s[2]=m;break;case 3:s[0]=0,s[1]=b,s[2]=1;break;case 4:s[0]=m,s[1]=0,s[2]=1;break;default:s[0]=1,s[1]=0,s[2]=b}return d=(1-l)*f,[(l*s[0]+d)*255,(l*s[1]+d)*255,(l*s[2]+d)*255]},a.hcg.hsv=function(i){const o=i[1]/100,l=i[2]/100,f=o+l*(1-o);let s=0;return f>0&&(s=o/f),[i[0],s*100,f*100]},a.hcg.hsl=function(i){const o=i[1]/100,f=i[2]/100*(1-o)+.5*o;let s=0;return f>0&&f<.5?s=o/(2*f):f>=.5&&f<1&&(s=o/(2*(1-f))),[i[0],s*100,f*100]},a.hcg.hwb=function(i){const o=i[1]/100,l=i[2]/100,f=o+l*(1-o);return[i[0],(f-o)*100,(1-f)*100]},a.hwb.hcg=function(i){const o=i[1]/100,f=1-i[2]/100,s=f-o;let u=0;return s<1&&(u=(f-s)/(1-s)),[i[0],s*100,u*100]},a.apple.rgb=function(i){return[i[0]/65535*255,i[1]/65535*255,i[2]/65535*255]},a.rgb.apple=function(i){return[i[0]/255*65535,i[1]/255*65535,i[2]/255*65535]},a.gray.rgb=function(i){return[i[0]/100*255,i[0]/100*255,i[0]/100*255]},a.gray.hsl=function(i){return[0,0,i[0]]},a.gray.hsv=a.gray.hsl,a.gray.hwb=function(i){return[0,100,i[0]]},a.gray.cmyk=function(i){return[0,0,0,i[0]]},a.gray.lab=function(i){return[i[0],0,0]},a.gray.hex=function(i){const o=Math.round(i[0]/100*255)&255,f=((o<<16)+(o<<8)+o).toString(16).toUpperCase();return"000000".substring(f.length)+f},a.rgb.gray=function(i){return[(i[0]+i[1]+i[2])/3/255*100]}}}),Oa=U({"../../node_modules/color-convert/route.js"(e,t){var n=Zn();function r(){const o={},l=Object.keys(n);for(let f=l.length,s=0;s<f;s++)o[l[s]]={distance:-1,parent:null};return o}function a(o){const l=r(),f=[o];for(l[o].distance=0;f.length;){const s=f.pop(),u=Object.keys(n[s]);for(let m=u.length,b=0;b<m;b++){const d=u[b],h=l[d];h.distance===-1&&(h.distance=l[s].distance+1,h.parent=s,f.unshift(d))}}return l}function c(o,l){return function(f){return l(o(f))}}function i(o,l){const f=[l[o].parent,o];let s=n[l[o].parent][o],u=l[o].parent;for(;l[u].parent;)f.unshift(l[u].parent),s=c(n[l[u].parent][u],s),u=l[u].parent;return s.conversion=f,s}t.exports=function(o){const l=a(o),f={},s=Object.keys(l);for(let u=s.length,m=0;m<u;m++){const b=s[m];l[b].parent!==null&&(f[b]=i(b,l))}return f}}}),Ma=U({"../../node_modules/color-convert/index.js"(e,t){var n=Zn(),r=Oa(),a={},c=Object.keys(n);function i(l){const f=function(...s){const u=s[0];return u==null?u:(u.length>1&&(s=u),l(s))};return"conversion"in l&&(f.conversion=l.conversion),f}function o(l){const f=function(...s){const u=s[0];if(u==null)return u;u.length>1&&(s=u);const m=l(s);if(typeof m=="object")for(let b=m.length,d=0;d<b;d++)m[d]=Math.round(m[d]);return m};return"conversion"in l&&(f.conversion=l.conversion),f}c.forEach(l=>{a[l]={},Object.defineProperty(a[l],"channels",{value:n[l].channels}),Object.defineProperty(a[l],"labels",{value:n[l].labels});const f=r(l);Object.keys(f).forEach(u=>{const m=f[u];a[l][u]=o(m),a[l][u].raw=i(m)})}),t.exports=a}}),Pa=U({"../../node_modules/color/index.js"(e,t){var n=Sa(),r=Ma(),a=["keyword","gray","hex"],c={};for(const d of Object.keys(r))c[[...r[d].labels].sort().join("")]=d;var i={};function o(d,h){if(!(this instanceof o))return new o(d,h);if(h&&h in a&&(h=null),h&&!(h in r))throw new Error("Unknown model: "+h);let g,v;if(d==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(d instanceof o)this.model=d.model,this.color=[...d.color],this.valpha=d.valpha;else if(typeof d=="string"){const p=n.get(d);if(p===null)throw new Error("Unable to parse color from string: "+d);this.model=p.model,v=r[this.model].channels,this.color=p.value.slice(0,v),this.valpha=typeof p.value[v]=="number"?p.value[v]:1}else if(d.length>0){this.model=h||"rgb",v=r[this.model].channels;const p=Array.prototype.slice.call(d,0,v);this.color=b(p,v),this.valpha=typeof d[v]=="number"?d[v]:1}else if(typeof d=="number")this.model="rgb",this.color=[d>>16&255,d>>8&255,d&255],this.valpha=1;else{this.valpha=1;const p=Object.keys(d);"alpha"in d&&(p.splice(p.indexOf("alpha"),1),this.valpha=typeof d.alpha=="number"?d.alpha:0);const A=p.sort().join("");if(!(A in c))throw new Error("Unable to parse color from object: "+JSON.stringify(d));this.model=c[A];const{labels:_}=r[this.model],P=[];for(g=0;g<_.length;g++)P.push(d[_[g]]);this.color=b(P)}if(i[this.model])for(v=r[this.model].channels,g=0;g<v;g++){const p=i[this.model][g];p&&(this.color[g]=p(this.color[g]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}o.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(d){let h=this.model in n.to?this:this.rgb();h=h.round(typeof d=="number"?d:1);const g=h.valpha===1?h.color:[...h.color,this.valpha];return n.to[h.model](g)},percentString(d){const h=this.rgb().round(typeof d=="number"?d:1),g=h.valpha===1?h.color:[...h.color,this.valpha];return n.to.rgb.percent(g)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const d={},{channels:h}=r[this.model],{labels:g}=r[this.model];for(let v=0;v<h;v++)d[g[v]]=this.color[v];return this.valpha!==1&&(d.alpha=this.valpha),d},unitArray(){const d=this.rgb().color;return d[0]/=255,d[1]/=255,d[2]/=255,this.valpha!==1&&d.push(this.valpha),d},unitObject(){const d=this.rgb().object();return d.r/=255,d.g/=255,d.b/=255,this.valpha!==1&&(d.alpha=this.valpha),d},round(d){return d=Math.max(d||0,0),new o([...this.color.map(f(d)),this.valpha],this.model)},alpha(d){return d!==void 0?new o([...this.color,Math.max(0,Math.min(1,d))],this.model):this.valpha},red:s("rgb",0,u(255)),green:s("rgb",1,u(255)),blue:s("rgb",2,u(255)),hue:s(["hsl","hsv","hsl","hwb","hcg"],0,d=>(d%360+360)%360),saturationl:s("hsl",1,u(100)),lightness:s("hsl",2,u(100)),saturationv:s("hsv",1,u(100)),value:s("hsv",2,u(100)),chroma:s("hcg",1,u(100)),gray:s("hcg",2,u(100)),white:s("hwb",1,u(100)),wblack:s("hwb",2,u(100)),cyan:s("cmyk",0,u(100)),magenta:s("cmyk",1,u(100)),yellow:s("cmyk",2,u(100)),black:s("cmyk",3,u(100)),x:s("xyz",0,u(95.047)),y:s("xyz",1,u(100)),z:s("xyz",2,u(108.833)),l:s("lab",0,u(100)),a:s("lab",1),b:s("lab",2),keyword(d){return d!==void 0?new o(d):r[this.model].keyword(this.color)},hex(d){return d!==void 0?new o(d):n.to.hex(this.rgb().round().color)},hexa(d){if(d!==void 0)return new o(d);const h=this.rgb().round().color;let g=Math.round(this.valpha*255).toString(16).toUpperCase();return g.length===1&&(g="0"+g),n.to.hex(h)+g},rgbNumber(){const d=this.rgb().color;return(d[0]&255)<<16|(d[1]&255)<<8|d[2]&255},luminosity(){const d=this.rgb().color,h=[];for(const[g,v]of d.entries()){const p=v/255;h[g]=p<=.04045?p/12.92:((p+.055)/1.055)**2.4}return .2126*h[0]+.7152*h[1]+.0722*h[2]},contrast(d){const h=this.luminosity(),g=d.luminosity();return h>g?(h+.05)/(g+.05):(g+.05)/(h+.05)},level(d){const h=this.contrast(d);return h>=7?"AAA":h>=4.5?"AA":""},isDark(){const d=this.rgb().color;return(d[0]*2126+d[1]*7152+d[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const d=this.rgb();for(let h=0;h<3;h++)d.color[h]=255-d.color[h];return d},lighten(d){const h=this.hsl();return h.color[2]+=h.color[2]*d,h},darken(d){const h=this.hsl();return h.color[2]-=h.color[2]*d,h},saturate(d){const h=this.hsl();return h.color[1]+=h.color[1]*d,h},desaturate(d){const h=this.hsl();return h.color[1]-=h.color[1]*d,h},whiten(d){const h=this.hwb();return h.color[1]+=h.color[1]*d,h},blacken(d){const h=this.hwb();return h.color[2]+=h.color[2]*d,h},grayscale(){const d=this.rgb().color,h=d[0]*.3+d[1]*.59+d[2]*.11;return o.rgb(h,h,h)},fade(d){return this.alpha(this.valpha-this.valpha*d)},opaquer(d){return this.alpha(this.valpha+this.valpha*d)},rotate(d){const h=this.hsl();let g=h.color[0];return g=(g+d)%360,g=g<0?360+g:g,h.color[0]=g,h},mix(d,h){if(!d||!d.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof d);const g=d.rgb(),v=this.rgb(),p=h===void 0?.5:h,A=2*p-1,_=g.alpha()-v.alpha(),P=((A*_===-1?A:(A+_)/(1+A*_))+1)/2,R=1-P;return o.rgb(P*g.red()+R*v.red(),P*g.green()+R*v.green(),P*g.blue()+R*v.blue(),g.alpha()*p+v.alpha()*(1-p))}};for(const d of Object.keys(r)){if(a.includes(d))continue;const{channels:h}=r[d];o.prototype[d]=function(...g){return this.model===d?new o(this):g.length>0?new o(g,d):new o([...m(r[this.model][d].raw(this.color)),this.valpha],d)},o[d]=function(...g){let v=g[0];return typeof v=="number"&&(v=b(g,h)),new o(v,d)}}function l(d,h){return Number(d.toFixed(h))}function f(d){return function(h){return l(h,d)}}function s(d,h,g){d=Array.isArray(d)?d:[d];for(const v of d)(i[v]||(i[v]=[]))[h]=g;return d=d[0],function(v){let p;return v!==void 0?(g&&(v=g(v)),p=this[d](),p.color[h]=v,p):(p=this[d]().color[h],g&&(p=g(p)),p)}}function u(d){return function(h){return Math.max(0,Math.min(d,h))}}function m(d){return Array.isArray(d)?d:[d]}function b(d,h){for(let g=0;g<h;g++)typeof d[g]!="number"&&(d[g]=0);return d}t.exports=o}}),Ca=U({"../../node_modules/tailwindcss/lib/util/createPlugin.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n}});function t(r,a){return{handler:r,config:a}}t.withOptions=function(r,a=()=>({})){const c=function(i){return{__options:i,handler:r(i),config:a(i)}};return c.__isOptionsFunction=!0,c.__pluginFunction=r,c.__configFunction=a,c};var n=t}}),Ea=U({"../../node_modules/tailwindcss/lib/public/create-plugin.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r}});var t=n(Ca());function n(a){return a&&a.__esModule?a:{default:a}}var r=t.default}}),Ia=U({"../../node_modules/tailwindcss/plugin.js"(e,t){var n=Ea();t.exports=(n.__esModule?n:{default:n}).default}}),Na=U({"../../node_modules/lodash.foreach/index.js"(e,t){var n=9007199254740991,r="[object Arguments]",a="[object Function]",c="[object GeneratorFunction]",i=/^(?:0|[1-9]\d*)$/;function o(y,S){for(var O=-1,H=y?y.length:0;++O<H&&S(y[O],O,y)!==!1;);return y}function l(y,S){for(var O=-1,H=Array(y);++O<y;)H[O]=S(O);return H}function f(y,S){return function(O){return y(S(O))}}var s=Object.prototype,u=s.hasOwnProperty,m=s.toString,b=s.propertyIsEnumerable,d=f(Object.keys,Object);function h(y,S){var O=ae(y)||D(y)?l(y.length,String):[],H=O.length,F=!!H;for(var q in y)(S||u.call(y,q))&&!(F&&(q=="length"||R(q,H)))&&O.push(q);return O}var g=_(p),v=P();function p(y,S){return y&&v(y,S,We)}function A(y){if(!W(y))return d(y);var S=[];for(var O in Object(y))u.call(y,O)&&O!="constructor"&&S.push(O);return S}function _(y,S){return function(O,H){if(O==null)return O;if(!ue(O))return y(O,H);for(var F=O.length,q=S?F:-1,Me=Object(O);(S?q--:++q<F)&&H(Me[q],q,Me)!==!1;);return O}}function P(y){return function(S,O,H){for(var F=-1,q=Object(S),Me=H(S),tn=Me.length;tn--;){var nn=Me[y?tn:++F];if(O(q[nn],nn,q)===!1)break}return S}}function R(y,S){return S=S??n,!!S&&(typeof y=="number"||i.test(y))&&y>-1&&y%1==0&&y<S}function W(y){var S=y&&y.constructor,O=typeof S=="function"&&S.prototype||s;return y===O}function re(y,S){var O=ae(y)?o:g;return O(y,typeof S=="function"?S:Oe)}function D(y){return E(y)&&u.call(y,"callee")&&(!b.call(y,"callee")||m.call(y)==r)}var ae=Array.isArray;function ue(y){return y!=null&&pe(y.length)&&!Ue(y)}function E(y){return ye(y)&&ue(y)}function Ue(y){var S=Ye(y)?m.call(y):"";return S==a||S==c}function pe(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=n}function Ye(y){var S=typeof y;return!!y&&(S=="object"||S=="function")}function ye(y){return!!y&&typeof y=="object"}function We(y){return ue(y)?h(y):A(y)}function Oe(y){return y}t.exports=re}}),Ta=U({"../../node_modules/flat/index.js"(e,t){t.exports=a,a.flatten=a,a.unflatten=c;function n(i){return i&&i.constructor&&typeof i.constructor.isBuffer=="function"&&i.constructor.isBuffer(i)}function r(i){return i}function a(i,o){o=o||{};const l=o.delimiter||".",f=o.maxDepth,s=o.transformKey||r,u={};function m(b,d,h){h=h||1,Object.keys(b).forEach(function(g){const v=b[g],p=o.safe&&Array.isArray(v),A=Object.prototype.toString.call(v),_=n(v),P=A==="[object Object]"||A==="[object Array]",R=d?d+l+s(g):s(g);if(!p&&!_&&P&&Object.keys(v).length&&(!o.maxDepth||h<f))return m(v,R,h+1);u[R]=v})}return m(i),u}function c(i,o){o=o||{};const l=o.delimiter||".",f=o.overwrite||!1,s=o.transformKey||r,u={};if(n(i)||Object.prototype.toString.call(i)!=="[object Object]")return i;function b(g){const v=Number(g);return isNaN(v)||g.indexOf(".")!==-1||o.object?g:v}function d(g,v,p){return Object.keys(p).reduce(function(A,_){return A[g+l+_]=p[_],A},v)}function h(g){const v=Object.prototype.toString.call(g),p=v==="[object Array]",A=v==="[object Object]";if(g){if(p)return!g.length;if(A)return!Object.keys(g).length}else return!0}return i=Object.keys(i).reduce(function(g,v){const p=Object.prototype.toString.call(i[v]);return!(p==="[object Object]"||p==="[object Array]")||h(i[v])?(g[v]=i[v],g):d(v,g,a(i[v],o))},{}),Object.keys(i).forEach(function(g){const v=g.split(l).map(s);let p=b(v.shift()),A=b(v[0]),_=u;for(;A!==void 0;){if(p==="__proto__")return;const P=Object.prototype.toString.call(_[p]),R=P==="[object Object]"||P==="[object Array]";if(!f&&!R&&typeof _[p]<"u")return;(f&&!R||!f&&_[p]==null)&&(_[p]=typeof A=="number"&&!o.object?[]:{}),_=_[p],v.length>0&&(p=b(v.shift()),A=b(v[0]))}_[p]=c(i[g],o)}),u}}}),Qn={"padding-none":"0rem","padding-xxxs":"0.25rem","padding-xxs":"0.5rem","padding-xs":"0.75rem","padding-s":"1rem","padding-m":"1.5rem","padding-l":"2rem","padding-xl":"2.5rem","padding-page":"7.5rem"},er={"spacing-none":"0rem","spacing-xxxs":"0.25rem","spacing-xxs":"0.5rem","spacing-xs":"0.75rem","spacing-s":"1rem","spacing-m":"1.25rem","spacing-l":"1.5rem","spacing-xl":"2rem","spacing-xxl":"2.5rem","spacing-xxxl":"3rem","spacing-4xl":"4rem","spacing-5xl":"4.5rem","spacing-9xl":"6rem"},ks={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},As={xs:"475px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"};ut(Pa());ut(Ia());ut(Na());ut(Ta());var un=e=>getComputedStyle(document.documentElement).getPropertyValue(e).split(" ").join(","),ja={colors(e,t){if(t!=null&&t.variation){const a=k(`rgb(${un(`--variation-${e}---${t.variation}`)})`),c={rgb:a.setAlpha((t==null?void 0:t.opacity)??1).toRgbString(),hex:t!=null&&t.opacity?a.setAlpha((t==null?void 0:t.opacity)??1).toHex8String():a.toHexString(),hsl:a.setAlpha((t==null?void 0:t.opacity)??1).toHslString()};return t.type?c[t.type]:`rgb(var(--variation-${e}---${t.variation}) / ${(t==null?void 0:t.opacity)??1} )`}const n=k(`hsl(${un(`--${e}`)})`),r={rgb:n.setAlpha((t==null?void 0:t.opacity)??1).toRgbString(),hex:t!=null&&t.opacity?n.setAlpha((t==null?void 0:t.opacity)??1).toHex8String():n.toHexString(),hsl:n.setAlpha((t==null?void 0:t.opacity)??1).toHslString()};return t!=null&&t.type?r[t.type]:`hsl(var(--${e}) / ${(t==null?void 0:t.opacity)??1})`}};function tr(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=tr(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Ra(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=tr(e))&&(r&&(r+=" "),r+=t);return r}function za(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=nr(t))&&(r&&(r+=" "),r+=n);return r}function nr(e){if(typeof e=="string")return e;for(var t,n="",r=0;r<e.length;r++)e[r]&&(t=nr(e[r]))&&(n&&(n+=" "),n+=t);return n}var Dt="-";function Fa(e){var t=$a(e),n=e.conflictingClassGroups,r=e.conflictingClassGroupModifiers,a=r===void 0?{}:r;function c(o){var l=o.split(Dt);return l[0]===""&&l.length!==1&&l.shift(),rr(l,t)||La(o)}function i(o,l){var f=n[o]||[];return l&&a[o]?[].concat(f,a[o]):f}return{getClassGroupId:c,getConflictingClassGroupIds:i}}function rr(e,t){var i;if(e.length===0)return t.classGroupId;var n=e[0],r=t.nextPart.get(n),a=r?rr(e.slice(1),r):void 0;if(a)return a;if(t.validators.length!==0){var c=e.join(Dt);return(i=t.validators.find(function(o){var l=o.validator;return l(c)}))==null?void 0:i.classGroupId}}var dn=/^\[(.+)\]$/;function La(e){if(dn.test(e)){var t=dn.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function $a(e){var t=e.theme,n=e.prefix,r={nextPart:new Map,validators:[]},a=Da(Object.entries(e.classGroups),n);return a.forEach(function(c){var i=c[0],o=c[1];At(o,r,i,t)}),r}function At(e,t,n,r){e.forEach(function(a){if(typeof a=="string"){var c=a===""?t:mn(t,a);c.classGroupId=n;return}if(typeof a=="function"){if(Ha(a)){At(a(r),t,n,r);return}t.validators.push({validator:a,classGroupId:n});return}Object.entries(a).forEach(function(i){var o=i[0],l=i[1];At(l,mn(t,o),n,r)})})}function mn(e,t){var n=e;return t.split(Dt).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function Ha(e){return e.isThemeGetter}function Da(e,t){return t?e.map(function(n){var r=n[0],a=n[1],c=a.map(function(i){return typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(function(o){var l=o[0],f=o[1];return[t+l,f]})):i});return[r,c]}):e}function Ga(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function a(c,i){n.set(c,i),t++,t>e&&(t=0,r=n,n=new Map)}return{get:function(i){var o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return a(i,o),o},set:function(i,o){n.has(i)?n.set(i,o):a(i,o)}}}var ar="!";function Ua(e){var t=e.separator||":",n=t.length===1,r=t[0],a=t.length;return function(i){for(var o=[],l=0,f=0,s,u=0;u<i.length;u++){var m=i[u];if(l===0){if(m===r&&(n||i.slice(u,u+a)===t)){o.push(i.slice(f,u)),f=u+a;continue}if(m==="/"){s=u;continue}}m==="["?l++:m==="]"&&l--}var b=o.length===0?i:i.substring(f),d=b.startsWith(ar),h=d?b.substring(1):b,g=s&&s>f?s-f:void 0;return{modifiers:o,hasImportantModifier:d,baseClassName:h,maybePostfixModifierPosition:g}}}function Ya(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(r){var a=r[0]==="[";a?(t.push.apply(t,n.sort().concat([r])),n=[]):n.push(r)}),t.push.apply(t,n.sort()),t}function Wa(e){return{cache:Ga(e.cacheSize),splitModifiers:Ua(e),...Fa(e)}}var qa=/\s+/;function Va(e,t){var n=t.splitModifiers,r=t.getClassGroupId,a=t.getConflictingClassGroupIds,c=new Set;return e.trim().split(qa).map(function(i){var o=n(i),l=o.modifiers,f=o.hasImportantModifier,s=o.baseClassName,u=o.maybePostfixModifierPosition,m=r(u?s.substring(0,u):s),b=!!u;if(!m){if(!u)return{isTailwindClass:!1,originalClassName:i};if(m=r(s),!m)return{isTailwindClass:!1,originalClassName:i};b=!1}var d=Ya(l).join(":"),h=f?d+ar:d;return{isTailwindClass:!0,modifierId:h,classGroupId:m,originalClassName:i,hasPostfixModifier:b}}).reverse().filter(function(i){if(!i.isTailwindClass)return!0;var o=i.modifierId,l=i.classGroupId,f=i.hasPostfixModifier,s=o+l;return c.has(s)?!1:(c.add(s),a(l,f).forEach(function(u){return c.add(o+u)}),!0)}).reverse().map(function(i){return i.originalClassName}).join(" ")}function Ba(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a,c,i=o;function o(f){var s=t[0],u=t.slice(1),m=u.reduce(function(b,d){return d(b)},s());return r=Wa(m),a=r.cache.get,c=r.cache.set,i=l,l(f)}function l(f){var s=a(f);if(s)return s;var u=Va(f,r);return c(f,u),u}return function(){return i(za.apply(null,arguments))}}function I(e){var t=function(r){return r[e]||[]};return t.isThemeGetter=!0,t}var ir=/^\[(?:([a-z-]+):)?(.+)\]$/i,Xa=/^\d+\/\d+$/,Ka=new Set(["px","full","screen"]),Ja=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Za=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Qa=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function V(e){return de(e)||Ka.has(e)||Xa.test(e)||_t(e)}function _t(e){return ve(e,"length",ii)}function ei(e){return ve(e,"size",or)}function ti(e){return ve(e,"position",or)}function ni(e){return ve(e,"url",oi)}function qe(e){return ve(e,"number",de)}function de(e){return!Number.isNaN(Number(e))}function ri(e){return e.endsWith("%")&&de(e.slice(0,-1))}function Pe(e){return hn(e)||ve(e,"number",hn)}function C(e){return ir.test(e)}function Ce(){return!0}function ie(e){return Ja.test(e)}function ai(e){return ve(e,"",si)}function ve(e,t,n){var r=ir.exec(e);return r?r[1]?r[1]===t:n(r[2]):!1}function ii(e){return Za.test(e)}function or(){return!1}function oi(e){return e.startsWith("url(")}function hn(e){return Number.isInteger(Number(e))}function si(e){return Qa.test(e)}function li(){var e=I("colors"),t=I("spacing"),n=I("blur"),r=I("brightness"),a=I("borderColor"),c=I("borderRadius"),i=I("borderSpacing"),o=I("borderWidth"),l=I("contrast"),f=I("grayscale"),s=I("hueRotate"),u=I("invert"),m=I("gap"),b=I("gradientColorStops"),d=I("gradientColorStopPositions"),h=I("inset"),g=I("margin"),v=I("opacity"),p=I("padding"),A=I("saturate"),_=I("scale"),P=I("sepia"),R=I("skew"),W=I("space"),re=I("translate"),D=function(){return["auto","contain","none"]},ae=function(){return["auto","hidden","clip","visible","scroll"]},ue=function(){return["auto",C,t]},E=function(){return[C,t]},Ue=function(){return["",V]},pe=function(){return["auto",de,C]},Ye=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},ye=function(){return["solid","dashed","dotted","double","none"]},We=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},Oe=function(){return["start","end","center","between","around","evenly","stretch"]},y=function(){return["","0",C]},S=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},O=function(){return[de,qe]},H=function(){return[de,C]};return{cacheSize:500,theme:{colors:[Ce],spacing:[V],blur:["none","",ie,C],brightness:O(),borderColor:[e],borderRadius:["none","","full",ie,C],borderSpacing:E(),borderWidth:Ue(),contrast:O(),grayscale:y(),hueRotate:H(),invert:y(),gap:E(),gradientColorStops:[e],gradientColorStopPositions:[ri,_t],inset:ue(),margin:ue(),opacity:O(),padding:E(),saturate:O(),scale:O(),sepia:y(),skew:H(),space:E(),translate:E()},classGroups:{aspect:[{aspect:["auto","square","video",C]}],container:["container"],columns:[{columns:[ie]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(Ye(),[C])}],overflow:[{overflow:ae()}],"overflow-x":[{"overflow-x":ae()}],"overflow-y":[{"overflow-y":ae()}],overscroll:[{overscroll:D()}],"overscroll-x":[{"overscroll-x":D()}],"overscroll-y":[{"overscroll-y":D()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Pe]}],basis:[{basis:ue()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",C]}],grow:[{grow:y()}],shrink:[{shrink:y()}],order:[{order:["first","last","none",Pe]}],"grid-cols":[{"grid-cols":[Ce]}],"col-start-end":[{col:["auto",{span:["full",Pe]},C]}],"col-start":[{"col-start":pe()}],"col-end":[{"col-end":pe()}],"grid-rows":[{"grid-rows":[Ce]}],"row-start-end":[{row:["auto",{span:[Pe]},C]}],"row-start":[{"row-start":pe()}],"row-end":[{"row-end":pe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",C]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",C]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal"].concat(Oe())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(Oe(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(Oe(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[p]}],px:[{px:[p]}],py:[{py:[p]}],ps:[{ps:[p]}],pe:[{pe:[p]}],pt:[{pt:[p]}],pr:[{pr:[p]}],pb:[{pb:[p]}],pl:[{pl:[p]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[W]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[W]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",C,t]}],"min-w":[{"min-w":["min","max","fit",C,V]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[ie]},ie,C]}],h:[{h:[C,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",C,V]}],"max-h":[{"max-h":[C,t,"min","max","fit"]}],"font-size":[{text:["base",ie,_t]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",qe]}],"font-family":[{font:[Ce]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",C]}],"line-clamp":[{"line-clamp":["none",de,qe]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",C,V]}],"list-image":[{"list-image":["none",C]}],"list-style-type":[{list:["none","disc","decimal",C]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(ye(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",V]}],"underline-offset":[{"underline-offset":["auto",C,V]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(Ye(),[ti])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ei]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ni]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[d]}],"gradient-via-pos":[{via:[d]}],"gradient-to-pos":[{to:[d]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[c]}],"rounded-s":[{"rounded-s":[c]}],"rounded-e":[{"rounded-e":[c]}],"rounded-t":[{"rounded-t":[c]}],"rounded-r":[{"rounded-r":[c]}],"rounded-b":[{"rounded-b":[c]}],"rounded-l":[{"rounded-l":[c]}],"rounded-ss":[{"rounded-ss":[c]}],"rounded-se":[{"rounded-se":[c]}],"rounded-ee":[{"rounded-ee":[c]}],"rounded-es":[{"rounded-es":[c]}],"rounded-tl":[{"rounded-tl":[c]}],"rounded-tr":[{"rounded-tr":[c]}],"rounded-br":[{"rounded-br":[c]}],"rounded-bl":[{"rounded-bl":[c]}],"border-w":[{border:[o]}],"border-w-x":[{"border-x":[o]}],"border-w-y":[{"border-y":[o]}],"border-w-s":[{"border-s":[o]}],"border-w-e":[{"border-e":[o]}],"border-w-t":[{"border-t":[o]}],"border-w-r":[{"border-r":[o]}],"border-w-b":[{"border-b":[o]}],"border-w-l":[{"border-l":[o]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[].concat(ye(),["hidden"])}],"divide-x":[{"divide-x":[o]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[o]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:ye()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:[""].concat(ye())}],"outline-offset":[{"outline-offset":[C,V]}],"outline-w":[{outline:[V]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[V]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ie,ai]}],"shadow-color":[{shadow:[Ce]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":We()}],"bg-blend":[{"bg-blend":We()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",ie,C]}],grayscale:[{grayscale:[f]}],"hue-rotate":[{"hue-rotate":[s]}],invert:[{invert:[u]}],saturate:[{saturate:[A]}],sepia:[{sepia:[P]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[f]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[s]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[A]}],"backdrop-sepia":[{"backdrop-sepia":[P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",C]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",C]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",C]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[Pe,C]}],"translate-x":[{"translate-x":[re]}],"translate-y":[{"translate-y":[re]}],"skew-x":[{"skew-x":[R]}],"skew-y":[{"skew-y":[R]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",C]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",C]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",C]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[V,qe]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var ci=Ba(li);function sr(...e){return ci(Ra(e))}function _s(e,t){return(Array.isArray(e)?e:[e]).find(r=>{var a;return((a=r==null?void 0:r.type)==null?void 0:a.displayName)===t})}function lr(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=lr(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function fi(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=lr(e))&&(r&&(r+=" "),r+=t);return r}const gn=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,bn=fi,cr=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return bn(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:c}=t,i=Object.keys(a).map(f=>{const s=n==null?void 0:n[f],u=c==null?void 0:c[f];if(s===null)return null;const m=gn(s)||gn(u);return a[f][m]}),o=n&&Object.entries(n).reduce((f,s)=>{let[u,m]=s;return m===void 0||(f[u]=m),f},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((f,s)=>{let{class:u,className:m,...b}=s;return Object.entries(b).every(d=>{let[h,g]=d;return Array.isArray(g)?g.includes({...c,...o}[h]):{...c,...o}[h]===g})?[...f,u,m]:f},[]);return bn(e,i,l,n==null?void 0:n.class,n==null?void 0:n.className)};function vn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vn(Object(n),!0).forEach(function(r){$(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function it(e){"@babel/helpers - typeof";return it=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},it(e)}function ui(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pn(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function di(e,t,n){return t&&pn(e.prototype,t),n&&pn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gt(e,t){return hi(e)||bi(e,t)||fr(e,t)||pi()}function $e(e){return mi(e)||gi(e)||fr(e)||vi()}function mi(e){if(Array.isArray(e))return St(e)}function hi(e){if(Array.isArray(e))return e}function gi(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bi(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,c=!1,i,o;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(r.push(i.value),!(t&&r.length===t));a=!0);}catch(l){c=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(c)throw o}}return r}}function fr(e,t){if(e){if(typeof e=="string")return St(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return St(e,t)}}function St(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function vi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yn=function(){},Ut={},ur={},dr=null,mr={mark:yn,measure:yn};try{typeof window<"u"&&(Ut=window),typeof document<"u"&&(ur=document),typeof MutationObserver<"u"&&(dr=MutationObserver),typeof performance<"u"&&(mr=performance)}catch{}var yi=Ut.navigator||{},xn=yi.userAgent,wn=xn===void 0?"":xn,le=Ut,T=ur,kn=dr,Ve=mr;le.document;var ne=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",hr=~wn.indexOf("MSIE")||~wn.indexOf("Trident/"),Be,Xe,Ke,Je,Ze,Q="___FONT_AWESOME___",Ot=16,gr="fa",br="svg-inline--fa",ge="data-fa-i2svg",Mt="data-fa-pseudo-element",xi="data-fa-pseudo-element-pending",Yt="data-prefix",Wt="data-icon",An="fontawesome-i2svg",wi="async",ki=["HTML","HEAD","STYLE","SCRIPT"],vr=function(){try{return!0}catch{return!1}}(),N="classic",z="sharp",qt=[N,z];function He(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[N]}})}var je=He((Be={},$(Be,N,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),$(Be,z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Be)),Re=He((Xe={},$(Xe,N,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),$(Xe,z,{solid:"fass",regular:"fasr",light:"fasl"}),Xe)),ze=He((Ke={},$(Ke,N,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),$(Ke,z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ke)),Ai=He((Je={},$(Je,N,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),$(Je,z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Je)),_i=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,pr="fa-layers-text",Si=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Oi=He((Ze={},$(Ze,N,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),$(Ze,z,{900:"fass",400:"fasr",300:"fasl"}),Ze)),yr=[1,2,3,4,5,6,7,8,9,10],Mi=yr.concat([11,12,13,14,15,16,17,18,19,20]),Pi=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],me={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fe=new Set;Object.keys(Re[N]).map(Fe.add.bind(Fe));Object.keys(Re[z]).map(Fe.add.bind(Fe));var Ci=[].concat(qt,$e(Fe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",me.GROUP,me.SWAP_OPACITY,me.PRIMARY,me.SECONDARY]).concat(yr.map(function(e){return"".concat(e,"x")})).concat(Mi.map(function(e){return"w-".concat(e)})),Ne=le.FontAwesomeConfig||{};function Ei(e){var t=T.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ii(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(T&&typeof T.querySelector=="function"){var Ni=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ni.forEach(function(e){var t=Gt(e,2),n=t[0],r=t[1],a=Ii(Ei(n));a!=null&&(Ne[r]=a)})}var xr={styleDefault:"solid",familyDefault:"classic",cssPrefix:gr,replacementClass:br,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ne.familyPrefix&&(Ne.cssPrefix=Ne.familyPrefix);var _e=x(x({},xr),Ne);_e.autoReplaceSvg||(_e.observeMutations=!1);var w={};Object.keys(xr).forEach(function(e){Object.defineProperty(w,e,{enumerable:!0,set:function(n){_e[e]=n,Te.forEach(function(r){return r(w)})},get:function(){return _e[e]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(t){_e.cssPrefix=t,Te.forEach(function(n){return n(w)})},get:function(){return _e.cssPrefix}});le.FontAwesomeConfig=w;var Te=[];function Ti(e){return Te.push(e),function(){Te.splice(Te.indexOf(e),1)}}var oe=Ot,J={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ji(e){if(!(!e||!ne)){var t=T.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=T.head.childNodes,r=null,a=n.length-1;a>-1;a--){var c=n[a],i=(c.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=c)}return T.head.insertBefore(t,r),e}}var Ri="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Le(){for(var e=12,t="";e-- >0;)t+=Ri[Math.random()*62|0];return t}function Se(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Vt(e){return e.classList?Se(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function wr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(wr(e[n]),'" ')},"").trim()}function dt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Bt(e){return e.size!==J.size||e.x!==J.x||e.y!==J.y||e.rotate!==J.rotate||e.flipX||e.flipY}function Fi(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},c="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(c," ").concat(i," ").concat(o)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Li(e){var t=e.transform,n=e.width,r=n===void 0?Ot:n,a=e.height,c=a===void 0?Ot:a,i=e.startCentered,o=i===void 0?!1:i,l="";return o&&hr?l+="translate(".concat(t.x/oe-r/2,"em, ").concat(t.y/oe-c/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/oe,"em), calc(-50% + ").concat(t.y/oe,"em)) "):l+="translate(".concat(t.x/oe,"em, ").concat(t.y/oe,"em) "),l+="scale(".concat(t.size/oe*(t.flipX?-1:1),", ").concat(t.size/oe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var $i=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function kr(){var e=gr,t=br,n=w.cssPrefix,r=w.replacementClass,a=$i;if(n!==e||r!==t){var c=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(c,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var _n=!1;function bt(){w.autoAddCss&&!_n&&(ji(kr()),_n=!0)}var Hi={mixout:function(){return{dom:{css:kr,insertCss:bt}}},hooks:function(){return{beforeDOMElementCreation:function(){bt()},beforeI2svg:function(){bt()}}}},ee=le||{};ee[Q]||(ee[Q]={});ee[Q].styles||(ee[Q].styles={});ee[Q].hooks||(ee[Q].hooks={});ee[Q].shims||(ee[Q].shims=[]);var K=ee[Q],Ar=[],Di=function e(){T.removeEventListener("DOMContentLoaded",e),ot=1,Ar.map(function(t){return t()})},ot=!1;ne&&(ot=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),ot||T.addEventListener("DOMContentLoaded",Di));function Gi(e){ne&&(ot?setTimeout(e,0):Ar.push(e))}function De(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,c=a===void 0?[]:a;return typeof e=="string"?wr(e):"<".concat(t," ").concat(zi(r),">").concat(c.map(De).join(""),"</").concat(t,">")}function Sn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ui=function(t,n){return function(r,a,c,i){return t.call(n,r,a,c,i)}},vt=function(t,n,r,a){var c=Object.keys(t),i=c.length,o=a!==void 0?Ui(n,a):n,l,f,s;for(r===void 0?(l=1,s=t[c[0]]):(l=0,s=r);l<i;l++)f=c[l],s=o(s,t[f],f,t);return s};function Yi(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var c=e.charCodeAt(n++);(c&64512)==56320?t.push(((a&1023)<<10)+(c&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Pt(e){var t=Yi(e);return t.length===1?t[0].toString(16):null}function Wi(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function On(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ct(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,c=On(t);typeof K.hooks.addPack=="function"&&!a?K.hooks.addPack(e,On(t)):K.styles[e]=x(x({},K.styles[e]||{}),c),e==="fas"&&Ct("fa",t)}var Qe,et,tt,xe=K.styles,qi=K.shims,Vi=(Qe={},$(Qe,N,Object.values(ze[N])),$(Qe,z,Object.values(ze[z])),Qe),Xt=null,_r={},Sr={},Or={},Mr={},Pr={},Bi=(et={},$(et,N,Object.keys(je[N])),$(et,z,Object.keys(je[z])),et);function Xi(e){return~Ci.indexOf(e)}function Ki(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Xi(a)?a:null}var Cr=function(){var t=function(c){return vt(xe,function(i,o,l){return i[l]=vt(o,c,{}),i},{})};_r=t(function(a,c,i){if(c[3]&&(a[c[3]]=i),c[2]){var o=c[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=i})}return a}),Sr=t(function(a,c,i){if(a[i]=i,c[2]){var o=c[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=i})}return a}),Pr=t(function(a,c,i){var o=c[2];return a[i]=i,o.forEach(function(l){a[l]=i}),a});var n="far"in xe||w.autoFetchSvg,r=vt(qi,function(a,c){var i=c[0],o=c[1],l=c[2];return o==="far"&&!n&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Or=r.names,Mr=r.unicodes,Xt=mt(w.styleDefault,{family:w.familyDefault})};Ti(function(e){Xt=mt(e.styleDefault,{family:w.familyDefault})});Cr();function Kt(e,t){return(_r[e]||{})[t]}function Ji(e,t){return(Sr[e]||{})[t]}function he(e,t){return(Pr[e]||{})[t]}function Er(e){return Or[e]||{prefix:null,iconName:null}}function Zi(e){var t=Mr[e],n=Kt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ce(){return Xt}var Jt=function(){return{prefix:null,iconName:null,rest:[]}};function mt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?N:n,a=je[r][e],c=Re[r][e]||Re[r][a],i=e in K.styles?e:null;return c||i||null}var Mn=(tt={},$(tt,N,Object.keys(ze[N])),$(tt,z,Object.keys(ze[z])),tt);function ht(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,c=(t={},$(t,N,"".concat(w.cssPrefix,"-").concat(N)),$(t,z,"".concat(w.cssPrefix,"-").concat(z)),t),i=null,o=N;(e.includes(c[N])||e.some(function(f){return Mn[N].includes(f)}))&&(o=N),(e.includes(c[z])||e.some(function(f){return Mn[z].includes(f)}))&&(o=z);var l=e.reduce(function(f,s){var u=Ki(w.cssPrefix,s);if(xe[s]?(s=Vi[o].includes(s)?Ai[o][s]:s,i=s,f.prefix=s):Bi[o].indexOf(s)>-1?(i=s,f.prefix=mt(s,{family:o})):u?f.iconName=u:s!==w.replacementClass&&s!==c[N]&&s!==c[z]&&f.rest.push(s),!a&&f.prefix&&f.iconName){var m=i==="fa"?Er(f.iconName):{},b=he(f.prefix,f.iconName);m.prefix&&(i=null),f.iconName=m.iconName||b||f.iconName,f.prefix=m.prefix||f.prefix,f.prefix==="far"&&!xe.far&&xe.fas&&!w.autoFetchSvg&&(f.prefix="fas")}return f},Jt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===z&&(xe.fass||w.autoFetchSvg)&&(l.prefix="fass",l.iconName=he(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||i==="fa")&&(l.prefix=ce()||"fas"),l}var Qi=function(){function e(){ui(this,e),this.definitions={}}return di(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];var i=a.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){n.definitions[o]=x(x({},n.definitions[o]||{}),i[o]),Ct(o,i[o]);var l=ze[N][o];l&&Ct(l,i[o]),Cr()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(c){var i=a[c],o=i.prefix,l=i.iconName,f=i.icon,s=f[2];n[o]||(n[o]={}),s.length>0&&s.forEach(function(u){typeof u=="string"&&(n[o][u]=f)}),n[o][l]=f}),n}}]),e}(),Pn=[],we={},Ae={},eo=Object.keys(Ae);function to(e,t){var n=t.mixoutsTo;return Pn=e,we={},Object.keys(Ae).forEach(function(r){eo.indexOf(r)===-1&&delete Ae[r]}),Pn.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(i){typeof a[i]=="function"&&(n[i]=a[i]),it(a[i])==="object"&&Object.keys(a[i]).forEach(function(o){n[i]||(n[i]={}),n[i][o]=a[i][o]})}),r.hooks){var c=r.hooks();Object.keys(c).forEach(function(i){we[i]||(we[i]=[]),we[i].push(c[i])})}r.provides&&r.provides(Ae)}),n}function Et(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var c=we[e]||[];return c.forEach(function(i){t=i.apply(null,[t].concat(r))}),t}function be(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=we[e]||[];a.forEach(function(c){c.apply(null,n)})}function te(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ae[e]?Ae[e].apply(null,t):void 0}function It(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ce();if(t)return t=he(n,t)||t,Sn(Ir.definitions,n,t)||Sn(K.styles,n,t)}var Ir=new Qi,no=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,be("noAuto")},ro={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ne?(be("beforeI2svg",t),te("pseudoElements2svg",t),te("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,Gi(function(){io({autoReplaceSvgRoot:n}),be("watch",t)})}},ao={icon:function(t){if(t===null)return null;if(it(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:he(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=mt(t[0]);return{prefix:r,iconName:he(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(w.cssPrefix,"-"))>-1||t.match(_i))){var a=ht(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ce(),iconName:he(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var c=ce();return{prefix:c,iconName:he(c,t)||t}}}},Y={noAuto:no,config:w,dom:ro,parse:ao,library:Ir,findIconDefinition:It,toHtml:De},io=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?T:n;(Object.keys(K.styles).length>0||w.autoFetchSvg)&&ne&&w.autoReplaceSvg&&Y.dom.i2svg({node:r})};function gt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return De(r)})}}),Object.defineProperty(e,"node",{get:function(){if(ne){var r=T.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function oo(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,c=e.styles,i=e.transform;if(Bt(i)&&n.found&&!r.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};a.style=dt(x(x({},c),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function so(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,c=e.symbol,i=c===!0?"".concat(t,"-").concat(w.cssPrefix,"-").concat(n):c;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:x(x({},a),{},{id:i}),children:r}]}]}function Zt(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,c=e.iconName,i=e.transform,o=e.symbol,l=e.title,f=e.maskId,s=e.titleId,u=e.extra,m=e.watchable,b=m===void 0?!1:m,d=r.found?r:n,h=d.width,g=d.height,v=a==="fak",p=[w.replacementClass,c?"".concat(w.cssPrefix,"-").concat(c):""].filter(function(D){return u.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(u.classes).join(" "),A={children:[],attributes:x(x({},u.attributes),{},{"data-prefix":a,"data-icon":c,class:p,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(g)})},_=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(h/g*16*.0625,"em")}:{};b&&(A.attributes[ge]=""),l&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(s||Le())},children:[l]}),delete A.attributes.title);var P=x(x({},A),{},{prefix:a,iconName:c,main:n,mask:r,maskId:f,transform:i,symbol:o,styles:x(x({},_),u.styles)}),R=r.found&&n.found?te("generateAbstractMask",P)||{children:[],attributes:{}}:te("generateAbstractIcon",P)||{children:[],attributes:{}},W=R.children,re=R.attributes;return P.children=W,P.attributes=re,o?so(P):oo(P)}function Cn(e){var t=e.content,n=e.width,r=e.height,a=e.transform,c=e.title,i=e.extra,o=e.watchable,l=o===void 0?!1:o,f=x(x(x({},i.attributes),c?{title:c}:{}),{},{class:i.classes.join(" ")});l&&(f[ge]="");var s=x({},i.styles);Bt(a)&&(s.transform=Li({transform:a,startCentered:!0,width:n,height:r}),s["-webkit-transform"]=s.transform);var u=dt(s);u.length>0&&(f.style=u);var m=[];return m.push({tag:"span",attributes:f,children:[t]}),c&&m.push({tag:"span",attributes:{class:"sr-only"},children:[c]}),m}function lo(e){var t=e.content,n=e.title,r=e.extra,a=x(x(x({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),c=dt(r.styles);c.length>0&&(a.style=c);var i=[];return i.push({tag:"span",attributes:a,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var pt=K.styles;function Nt(e){var t=e[0],n=e[1],r=e.slice(4),a=Gt(r,1),c=a[0],i=null;return Array.isArray(c)?i={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(me.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(me.SECONDARY),fill:"currentColor",d:c[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(me.PRIMARY),fill:"currentColor",d:c[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:c}},{found:!0,width:t,height:n,icon:i}}var co={found:!1,width:512,height:512};function fo(e,t){!vr&&!w.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Tt(e,t){var n=t;return t==="fa"&&w.styleDefault!==null&&(t=ce()),new Promise(function(r,a){if(te("missingIconAbstract"),n==="fa"){var c=Er(e)||{};e=c.iconName||e,t=c.prefix||t}if(e&&t&&pt[t]&&pt[t][e]){var i=pt[t][e];return r(Nt(i))}fo(e,t),r(x(x({},co),{},{icon:w.showMissingIcons&&e?te("missingIconAbstract")||{}:{}}))})}var En=function(){},jt=w.measurePerformance&&Ve&&Ve.mark&&Ve.measure?Ve:{mark:En,measure:En},Ie='FA "6.4.2"',uo=function(t){return jt.mark("".concat(Ie," ").concat(t," begins")),function(){return Nr(t)}},Nr=function(t){jt.mark("".concat(Ie," ").concat(t," ends")),jt.measure("".concat(Ie," ").concat(t),"".concat(Ie," ").concat(t," begins"),"".concat(Ie," ").concat(t," ends"))},Qt={begin:uo,end:Nr},nt=function(){};function In(e){var t=e.getAttribute?e.getAttribute(ge):null;return typeof t=="string"}function mo(e){var t=e.getAttribute?e.getAttribute(Yt):null,n=e.getAttribute?e.getAttribute(Wt):null;return t&&n}function ho(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(w.replacementClass)}function go(){if(w.autoReplaceSvg===!0)return rt.replace;var e=rt[w.autoReplaceSvg];return e||rt.replace}function bo(e){return T.createElementNS("http://www.w3.org/2000/svg",e)}function vo(e){return T.createElement(e)}function Tr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?bo:vo:n;if(typeof e=="string")return T.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])});var c=e.children||[];return c.forEach(function(i){a.appendChild(Tr(i,{ceFn:r}))}),a}function po(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var rt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Tr(a),n)}),n.getAttribute(ge)===null&&w.keepOriginalSource){var r=T.createComment(po(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Vt(n).indexOf(w.replacementClass))return rt.replace(t);var a=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var c=r[0].attributes.class.split(" ").reduce(function(o,l){return l===w.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=c.toSvg.join(" "),c.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",c.toNode.join(" "))}var i=r.map(function(o){return De(o)}).join(`
`);n.setAttribute(ge,""),n.innerHTML=i}};function Nn(e){e()}function jr(e,t){var n=typeof t=="function"?t:nt;if(e.length===0)n();else{var r=Nn;w.mutateApproach===wi&&(r=le.requestAnimationFrame||Nn),r(function(){var a=go(),c=Qt.begin("mutate");e.map(a),c(),n()})}}var en=!1;function Rr(){en=!0}function Rt(){en=!1}var st=null;function Tn(e){if(kn&&w.observeMutations){var t=e.treeCallback,n=t===void 0?nt:t,r=e.nodeCallback,a=r===void 0?nt:r,c=e.pseudoElementsCallback,i=c===void 0?nt:c,o=e.observeMutationsRoot,l=o===void 0?T:o;st=new kn(function(f){if(!en){var s=ce();Se(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!In(u.addedNodes[0])&&(w.searchPseudoElements&&i(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&w.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&In(u.target)&&~Pi.indexOf(u.attributeName))if(u.attributeName==="class"&&mo(u.target)){var m=ht(Vt(u.target)),b=m.prefix,d=m.iconName;u.target.setAttribute(Yt,b||s),d&&u.target.setAttribute(Wt,d)}else ho(u.target)&&a(u.target)})}}),ne&&st.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function yo(){st&&st.disconnect()}function xo(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var c=a.split(":"),i=c[0],o=c.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),n}function wo(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=ht(Vt(e));return a.prefix||(a.prefix=ce()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ji(a.prefix,e.innerText)||Kt(a.prefix,Pt(e.innerText))),!a.iconName&&w.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ko(e){var t=Se(e.attributes).reduce(function(a,c){return a.name!=="class"&&a.name!=="style"&&(a[c.name]=c.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return w.autoA11y&&(n?t["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(r||Le()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ao(){return{iconName:null,title:null,titleId:null,prefix:null,transform:J,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function jn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=wo(e),r=n.iconName,a=n.prefix,c=n.rest,i=ko(e),o=Et("parseNodeAttributes",{},e),l=t.styleParser?xo(e):[];return x({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:J,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:c,styles:l,attributes:i}},o)}var _o=K.styles;function zr(e){var t=w.autoReplaceSvg==="nest"?jn(e,{styleParser:!1}):jn(e);return~t.extra.classes.indexOf(pr)?te("generateLayersText",e,t):te("generateSvgReplacementMutation",e,t)}var fe=new Set;qt.map(function(e){fe.add("fa-".concat(e))});Object.keys(je[N]).map(fe.add.bind(fe));Object.keys(je[z]).map(fe.add.bind(fe));fe=$e(fe);function Rn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ne)return Promise.resolve();var n=T.documentElement.classList,r=function(u){return n.add("".concat(An,"-").concat(u))},a=function(u){return n.remove("".concat(An,"-").concat(u))},c=w.autoFetchSvg?fe:qt.map(function(s){return"fa-".concat(s)}).concat(Object.keys(_o));c.includes("fa")||c.push("fa");var i=[".".concat(pr,":not([").concat(ge,"])")].concat(c.map(function(s){return".".concat(s,":not([").concat(ge,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=Se(e.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Qt.begin("onTree"),f=o.reduce(function(s,u){try{var m=zr(u);m&&s.push(m)}catch(b){vr||b.name==="MissingIcon"&&console.error(b)}return s},[]);return new Promise(function(s,u){Promise.all(f).then(function(m){jr(m,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),s()})}).catch(function(m){l(),u(m)})})}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zr(e).then(function(n){n&&jr([n],t)})}function Oo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:It(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:It(a||{})),e(r,x(x({},n),{},{mask:a}))}}var Mo=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?J:r,c=n.symbol,i=c===void 0?!1:c,o=n.mask,l=o===void 0?null:o,f=n.maskId,s=f===void 0?null:f,u=n.title,m=u===void 0?null:u,b=n.titleId,d=b===void 0?null:b,h=n.classes,g=h===void 0?[]:h,v=n.attributes,p=v===void 0?{}:v,A=n.styles,_=A===void 0?{}:A;if(t){var P=t.prefix,R=t.iconName,W=t.icon;return gt(x({type:"icon"},t),function(){return be("beforeDOMElementCreation",{iconDefinition:t,params:n}),w.autoA11y&&(m?p["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(d||Le()):(p["aria-hidden"]="true",p.focusable="false")),Zt({icons:{main:Nt(W),mask:l?Nt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:R,transform:x(x({},J),a),symbol:i,title:m,maskId:s,titleId:d,extra:{attributes:p,styles:_,classes:g}})})}},Po={mixout:function(){return{icon:Oo(Mo)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Rn,n.nodeCallback=So,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?T:r,c=n.callback,i=c===void 0?function(){}:c;return Rn(a,i)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,c=r.title,i=r.titleId,o=r.prefix,l=r.transform,f=r.symbol,s=r.mask,u=r.maskId,m=r.extra;return new Promise(function(b,d){Promise.all([Tt(a,o),s.iconName?Tt(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(h){var g=Gt(h,2),v=g[0],p=g[1];b([n,Zt({icons:{main:v,mask:p},prefix:o,iconName:a,transform:l,symbol:f,maskId:u,title:c,titleId:i,extra:m,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,c=n.main,i=n.transform,o=n.styles,l=dt(o);l.length>0&&(a.style=l);var f;return Bt(i)&&(f=te("generateAbstractTransformGrouping",{main:c,transform:i,containerWidth:c.width,iconWidth:c.width})),r.push(f||c.icon),{children:r,attributes:a}}}},Co={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,c=a===void 0?[]:a;return gt({type:"layer"},function(){be("beforeDOMElementCreation",{assembler:n,params:r});var i=[];return n(function(o){Array.isArray(o)?o.map(function(l){i=i.concat(l.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat($e(c)).join(" ")},children:i}]})}}}},Eo={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,c=a===void 0?null:a,i=r.classes,o=i===void 0?[]:i,l=r.attributes,f=l===void 0?{}:l,s=r.styles,u=s===void 0?{}:s;return gt({type:"counter",content:n},function(){return be("beforeDOMElementCreation",{content:n,params:r}),lo({content:n.toString(),title:c,extra:{attributes:f,styles:u,classes:["".concat(w.cssPrefix,"-layers-counter")].concat($e(o))}})})}}}},Io={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,c=a===void 0?J:a,i=r.title,o=i===void 0?null:i,l=r.classes,f=l===void 0?[]:l,s=r.attributes,u=s===void 0?{}:s,m=r.styles,b=m===void 0?{}:m;return gt({type:"text",content:n},function(){return be("beforeDOMElementCreation",{content:n,params:r}),Cn({content:n,transform:x(x({},J),c),title:o,extra:{attributes:u,styles:b,classes:["".concat(w.cssPrefix,"-layers-text")].concat($e(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,c=r.transform,i=r.extra,o=null,l=null;if(hr){var f=parseInt(getComputedStyle(n).fontSize,10),s=n.getBoundingClientRect();o=s.width/f,l=s.height/f}return w.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Cn({content:n.innerHTML,width:o,height:l,transform:c,title:a,extra:i,watchable:!0})])}}},No=new RegExp('"',"ug"),zn=[1105920,1112319];function To(e){var t=e.replace(No,""),n=Wi(t,0),r=n>=zn[0]&&n<=zn[1],a=t.length===2?t[0]===t[1]:!1;return{value:Pt(a?t[0]:t),isSecondary:r||a}}function Fn(e,t){var n="".concat(xi).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var c=Se(e.children),i=c.filter(function(W){return W.getAttribute(Mt)===t})[0],o=le.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Si),f=o.getPropertyValue("font-weight"),s=o.getPropertyValue("content");if(i&&!l)return e.removeChild(i),r();if(l&&s!=="none"&&s!==""){var u=o.getPropertyValue("content"),m=~["Sharp"].indexOf(l[2])?z:N,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Re[m][l[2].toLowerCase()]:Oi[m][f],d=To(u),h=d.value,g=d.isSecondary,v=l[0].startsWith("FontAwesome"),p=Kt(b,h),A=p;if(v){var _=Zi(h);_.iconName&&_.prefix&&(p=_.iconName,b=_.prefix)}if(p&&!g&&(!i||i.getAttribute(Yt)!==b||i.getAttribute(Wt)!==A)){e.setAttribute(n,A),i&&e.removeChild(i);var P=Ao(),R=P.extra;R.attributes[Mt]=t,Tt(p,b).then(function(W){var re=Zt(x(x({},P),{},{icons:{main:W,mask:Jt()},prefix:b,iconName:A,extra:R,watchable:!0})),D=T.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(D,e.firstChild):e.appendChild(D),D.outerHTML=re.map(function(ae){return De(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function jo(e){return Promise.all([Fn(e,"::before"),Fn(e,"::after")])}function Ro(e){return e.parentNode!==document.head&&!~ki.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ln(e){if(ne)return new Promise(function(t,n){var r=Se(e.querySelectorAll("*")).filter(Ro).map(jo),a=Qt.begin("searchPseudoElements");Rr(),Promise.all(r).then(function(){a(),Rt(),t()}).catch(function(){a(),Rt(),n()})})}var zo={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ln,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?T:r;w.searchPseudoElements&&Ln(a)}}},$n=!1,Fo={mixout:function(){return{dom:{unwatch:function(){Rr(),$n=!0}}}},hooks:function(){return{bootstrap:function(){Tn(Et("mutationObserverCallbacks",{}))},noAuto:function(){yo()},watch:function(n){var r=n.observeMutationsRoot;$n?Rt():Tn(Et("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Hn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var c=a.toLowerCase().split("-"),i=c[0],o=c.slice(1).join("-");if(i&&o==="h")return r.flipX=!0,r;if(i&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(i){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Lo={mixout:function(){return{parse:{transform:function(n){return Hn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Hn(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,c=n.containerWidth,i=n.iconWidth,o={transform:"translate(".concat(c/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(s)},m={transform:"translate(".concat(i/2*-1," -256)")},b={outer:o,inner:u,path:m};return{tag:"g",attributes:x({},b.outer),children:[{tag:"g",attributes:x({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:x(x({},r.icon.attributes),b.path)}]}]}}}},yt={x:0,y:0,width:"100%",height:"100%"};function Dn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function $o(e){return e.tag==="g"?e.children:[e]}var Ho={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),c=a?ht(a.split(" ").map(function(i){return i.trim()})):Jt();return c.prefix||(c.prefix=ce()),n.mask=c,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,c=n.main,i=n.mask,o=n.maskId,l=n.transform,f=c.width,s=c.icon,u=i.width,m=i.icon,b=Fi({transform:l,containerWidth:u,iconWidth:f}),d={tag:"rect",attributes:x(x({},yt),{},{fill:"white"})},h=s.children?{children:s.children.map(Dn)}:{},g={tag:"g",attributes:x({},b.inner),children:[Dn(x({tag:s.tag,attributes:x(x({},s.attributes),b.path)},h))]},v={tag:"g",attributes:x({},b.outer),children:[g]},p="mask-".concat(o||Le()),A="clip-".concat(o||Le()),_={tag:"mask",attributes:x(x({},yt),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,v]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:$o(m)},_]};return r.push(P,{tag:"rect",attributes:x({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(p,")")},yt)}),{children:r,attributes:a}}}},Do={provides:function(t){var n=!1;le.matchMedia&&(n=le.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},c={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:x(x({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=x(x({},c),{},{attributeName:"opacity"}),o={tag:"circle",attributes:x(x({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:x(x({},c),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:x(x({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:x(x({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:x(x({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:x(x({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:x(x({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Go={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),c=a===null?!1:a===""?!0:a;return n.symbol=c,n}}}},Uo=[Hi,Po,Co,Eo,Io,zo,Fo,Lo,Ho,Do,Go];to(Uo,{mixoutsTo:Y});Y.noAuto;Y.config;Y.library;Y.dom;var zt=Y.parse;Y.findIconDefinition;Y.toHtml;var Yo=Y.icon;Y.layer;Y.text;Y.counter;function Gn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gn(Object(n),!0).forEach(function(r){ke(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gn(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function lt(e){"@babel/helpers - typeof";return lt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lt(e)}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wo(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,c;for(c=0;c<r.length;c++)a=r[c],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function qo(e,t){if(e==null)return{};var n=Wo(e,t),r,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ft(e){return Vo(e)||Bo(e)||Xo(e)||Ko()}function Vo(e){if(Array.isArray(e))return Lt(e)}function Bo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xo(e,t){if(e){if(typeof e=="string")return Lt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Lt(e,t)}}function Lt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ko(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jo(e){var t,n=e.beat,r=e.fade,a=e.beatFade,c=e.bounce,i=e.shake,o=e.flash,l=e.spin,f=e.spinPulse,s=e.spinReverse,u=e.pulse,m=e.fixedWidth,b=e.inverse,d=e.border,h=e.listItem,g=e.flip,v=e.size,p=e.rotation,A=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":c,"fa-shake":i,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":s,"fa-spin-pulse":f,"fa-pulse":u,"fa-fw":m,"fa-inverse":b,"fa-border":d,"fa-li":h,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},ke(t,"fa-".concat(v),typeof v<"u"&&v!==null),ke(t,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),ke(t,"fa-pull-".concat(A),typeof A<"u"&&A!==null),ke(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(P){return _[P]?P:null}).filter(function(P){return P})}function Zo(e){return e=e-0,e===e}function Fr(e){return Zo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Qo=["style"];function es(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ts(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Fr(n.slice(0,r)),c=n.slice(r+1).trim();return a.startsWith("webkit")?t[es(a)]=c:t[a]=c,t},{})}function Lr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Lr(e,l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var s=t.attributes[f];switch(f){case"class":l.attrs.className=s,delete t.attributes.class;break;case"style":l.attrs.style=ts(s);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=s:l.attrs[Fr(f)]=s}return l},{attrs:{}}),c=n.style,i=c===void 0?{}:c,o=qo(n,Qo);return a.attrs.style=se(se({},a.attrs.style),i),e.apply(void 0,[t.tag,se(se({},a.attrs),o)].concat(Ft(r)))}var $r=!1;try{$r=!0}catch{}function ns(){if(!$r&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Un(e){if(e&&lt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(zt.icon)return zt.icon(e);if(e===null)return null;if(e&&lt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function xt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ke({},e,t):{}}var Ge=Yn.forwardRef(function(e,t){var n=e.icon,r=e.mask,a=e.symbol,c=e.className,i=e.title,o=e.titleId,l=e.maskId,f=Un(n),s=xt("classes",[].concat(Ft(Jo(e)),Ft(c.split(" ")))),u=xt("transform",typeof e.transform=="string"?zt.transform(e.transform):e.transform),m=xt("mask",Un(r)),b=Yo(f,se(se(se(se({},s),u),m),{},{symbol:a,title:i,titleId:o,maskId:l}));if(!b)return ns("Could not find icon",f),null;var d=b.abstract,h={ref:t};return Object.keys(e).forEach(function(g){Ge.defaultProps.hasOwnProperty(g)||(h[g]=e[g])}),rs(d[0],h)});Ge.displayName="FontAwesomeIcon";Ge.propTypes={beat:M.bool,border:M.bool,beatFade:M.bool,bounce:M.bool,className:M.string,fade:M.bool,flash:M.bool,mask:M.oneOfType([M.object,M.array,M.string]),maskId:M.string,fixedWidth:M.bool,inverse:M.bool,flip:M.oneOf([!0,!1,"horizontal","vertical","both"]),icon:M.oneOfType([M.object,M.array,M.string]),listItem:M.bool,pull:M.oneOf(["right","left"]),pulse:M.bool,rotation:M.oneOf([0,90,180,270]),shake:M.bool,size:M.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:M.bool,spinPulse:M.bool,spinReverse:M.bool,symbol:M.oneOfType([M.bool,M.string]),title:M.string,titleId:M.string,transform:M.oneOfType([M.string,M.object]),swapOpacity:M.bool};Ge.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var rs=Lr.bind(null,Yn.createElement);function as(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function is(...e){return t=>e.forEach(n=>as(n,t))}const Hr=L.forwardRef((e,t)=>{const{children:n,...r}=e,a=L.Children.toArray(n),c=a.find(ss);if(c){const i=c.props.children,o=a.map(l=>l===c?L.Children.count(i)>1?L.Children.only(null):L.isValidElement(i)?i.props.children:null:l);return L.createElement($t,rn({},r,{ref:t}),L.isValidElement(i)?L.cloneElement(i,void 0,o):null)}return L.createElement($t,rn({},r,{ref:t}),n)});Hr.displayName="Slot";const $t=L.forwardRef((e,t)=>{const{children:n,...r}=e;return L.isValidElement(n)?L.cloneElement(n,{...ls(r,n.props),ref:t?is(t,n.ref):n.ref}):L.Children.count(n)>1?L.Children.only(null):null});$t.displayName="SlotClone";const os=({children:e})=>L.createElement(L.Fragment,null,e);function ss(e){return L.isValidElement(e)&&e.type===os}function ls(e,t){const n={...t};for(const r in t){const a=e[r],c=t[r];/^on[A-Z]/.test(r)?a&&c?n[r]=(...o)=>{c(...o),a(...o)}:a&&(n[r]=a):r==="style"?n[r]={...a,...c}:r==="className"&&(n[r]=[a,c].filter(Boolean).join(" "))}return{...e,...n}}const cs={...er,...Qn},fs=Object.keys(cs).reduce((e,t)=>(e[t]=`gap-${t}`,e),{}),us=cr(["flex items-center flex-nowrap"],{variants:{vertical:{true:"flex-col"},gap:{...fs},wrap:{nowrap:"flex-nowrap",wrap:"flex-wrap",reverse:"flex-wrap-reverse"},justify:{start:"justify-start",end:"justify-end",center:"justify-center",between:"justify-between",around:"justify-around"},align:{start:"items-start",end:"items-end",center:"items-center",baseline:"items-baseline",stretch:"items-stretch"}}}),ds=({className:e,gap:t,vertical:n,wrap:r,align:a,justify:c,asChild:i,...o},l)=>wt(i?Hr:"div",{ref:l,className:sr(us({gap:t,vertical:n,wrap:r,align:a,justify:c}),e),...o}),ms=L.forwardRef(ds),Dr={...er,...Qn},hs=Object.keys(Dr).reduce((e,t)=>(e[t]=`h-${t} w-${t}`,e),{}),gs=cr([""],{variants:{size:{...hs}}}),bs=L.forwardRef(({className:e,fill:t,size:n="spacing-s",name:r,...a},c)=>{const i=n?Dr[n]:"1rem",l={color:t?t!=="inherit"?ja.colors(t):"inherit":void 0};return wt(ms,{className:sr(gs({size:n}),e),justify:"center",style:l,...a,children:wt(Ge,{icon:r,className:"h-full  w-full",fontSize:i})})});bs.displayName="Icon";export{Hr as $,xs as F,bs as I,ws as a,As as b,sr as c,ms as d,cr as e,ks as f,_s as g,wt as j,Qn as p,er as s,ja as t};
//# sourceMappingURL=index-ecq6vdbC.js.map
