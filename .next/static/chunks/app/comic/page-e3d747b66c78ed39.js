(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{272:function(e,t,r){Promise.resolve().then(r.bind(r,289)),Promise.resolve().then(r.bind(r,8782))},289:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),a=r(5946),c=r(1396),s=r.n(c),l=r(4033),i=r(2265);function o(e){let{size:t,currentPage:r,limit:a,url:c}=e,l=Math.ceil(t/a),i=1===r?r+2:r+1,o=[];return(()=>{for(let e=0;e<l;e++)o.push(e)})(),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"pagination grid grid-cols-7 gap-4",children:[(0,n.jsx)(s(),{href:"".concat(c,"?page=",1,"&limit=").concat(a),className:"btn-pager",children:"start"}),(0,n.jsx)(s(),{href:"".concat(c,"?page=").concat(r-1,"&limit=").concat(a),className:"btn-pager",children:"prev"}),o.map((e,t)=>t<i&&t>=r-2&&(0,n.jsx)(s(),{href:"".concat(c,"?page=").concat(t+1,"&limit=").concat(a),className:"".concat(t+1===r?"bg-pink-500":"bg-gray-600"," text-center text-white px-3 py-2 rounded-md"),children:t+1},t)),(0,n.jsx)(s(),{href:"".concat(c,"?page=").concat(r+1,"&limit=").concat(a),className:"btn-pager",children:"next"}),(0,n.jsx)(s(),{href:"".concat(c,"?page=").concat(l,"&limit=").concat(a),className:"btn-pager",children:"end"})]})})}function u(){let e=(0,l.useSearchParams)(),t=(0,l.usePathname)(),[r,c]=(0,i.useState)(10),[u,d]=(0,i.useState)([]),p=e.get("page")?parseInt(e.get("page")):1;return(0,i.useEffect)(()=>{d(a.D_.slice(r*(p-1),r*p))},[r]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex self-start items-center gap-2",children:[(0,n.jsx)("label",{htmlFor:"show",className:"text-white",children:"Show:"}),(0,n.jsxs)("select",{name:"show",id:"show",className:"text-black px-8 py-2",defaultValue:r,onChange:e=>c(parseInt(e.target.value)),children:[(0,n.jsx)("option",{value:"10",children:"10"}),(0,n.jsx)("option",{value:"20",children:"20"}),(0,n.jsx)("option",{value:"50",children:"50"}),(0,n.jsx)("option",{value:"80",children:"80"})]})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:u.length>0&&u.map((e,t)=>(0,n.jsx)(s(),{className:"text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer",href:"/comic/baca/".concat(e.title),children:e.title},t))}),(0,n.jsx)(o,{url:t,size:a.D_.length,currentPage:p,limit:r})]})}},8782:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(7437),a=r(2265);function c(e){let{type:t,name:r,placeholder:a,labelText:c,required:s,onChange:l,handleKeyDown:i,value:o,styles:u}=e;return(0,n.jsxs)("div",{className:"input-form ".concat(u),children:[c&&(0,n.jsx)("label",{className:"self-start",htmlFor:r,children:c}),(0,n.jsx)("input",{className:"input",onKeyDown:i,id:r,type:t,placeholder:a,required:s,value:o,onChange:l})]})}var s=r(5946),l=r(1396),i=r.n(l);function o(){let[e,t]=(0,a.useState)(""),[r,l]=(0,a.useState)(null);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{className:"font-bold",children:"Cari Komik"}),(0,n.jsx)(c,{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Cari...       Esc to cancel",handleKeyDown:r=>{if("Enter"===r.key&&""!==e){let r=s.zM.filter(t=>t.title.toLowerCase().includes(e.toLowerCase()));l(r),t("")}else("Enter"===r.key||"Escape"===r.key)&&""===e?l(null):"Escape"===r.key&&(l(null),t(""))}}),r&&r.map((e,t)=>(0,n.jsx)(i(),{className:"text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer",href:"/comic/baca/".concat(e.title),children:e.title},t))]})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,c={},o=null,u=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:a,type:e,key:o,ref:u,props:c,_owner:l.current}}t.Fragment=c,t.jsx=o,t.jsxs=o},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){e.exports=r(6685)},4033:function(e,t,r){e.exports=r(8165)}},function(e){e.O(0,[685,946,971,596,744],function(){return e(e.s=272)}),_N_E=e.O()}]);