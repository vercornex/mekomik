(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{1606:function(e,t,r){Promise.resolve().then(r.bind(r,571))},571:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),o=r(4194),c=r(1396),a=r.n(c),s=r(2265);function l(){let[e,t]=(0,s.useState)([]);return(0,s.useEffect)(()=>{let e=(0,o.s1)();t(e)},[]),(0,n.jsxs)("div",{className:"p-8 flex flex-col gap-4",children:[(0,n.jsx)("h1",{className:"font-bold text-[24px]",children:"Terakhir Baca"}),(0,n.jsx)("div",{className:"history grid sm:grid-cols-4 gap-4",children:e.map((e,t)=>(0,n.jsxs)(a(),{href:"/comic/baca/".concat(e.title,"/chapter-").concat(e.chapter),className:"text-white p-4 bg-gray-900 border-2 border-gray-700 rounded-md cursor-pointer h-20 mx-h-24",children:[e.title," chapter-",e.chapter]},t))})]})}},4194:function(e,t,r){"use strict";r.d(t,{QQ:function(){return o},Rh:function(){return n},s1:function(){return c}});let n=(e,t)=>{let r=localStorage.getItem("history"),n=e.replaceAll("-"," "),o=r?JSON.parse(r):[],c=o.findIndex(e=>e.title===n),a=parseInt(t.toString().charAt(t.length-1)),s={title:n,url:"".concat(window.location.origin).concat(t),chapter:a};-1!==c?(o[c].url=s.url,o[c].chapter=s.chapter):o.push(s),o.length>10&&o.splice(0,o.length-10);let l=JSON.stringify(o);localStorage.setItem("history",l)},o=()=>{localStorage.setItem("history","")},c=()=>{let e=localStorage.getItem("history"),t=e?JSON.parse(e):[];return t}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,c={},i=null,u=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(c[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===c[n]&&(c[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:u,props:c,_owner:s.current}}t.Fragment=c,t.jsx=i,t.jsxs=i},7437:function(e,t,r){"use strict";e.exports=r(622)},1396:function(e,t,r){e.exports=r(6685)}},function(e){e.O(0,[685,971,596,744],function(){return e(e.s=1606)}),_N_E=e.O()}]);