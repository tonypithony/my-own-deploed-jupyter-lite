"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2459,5979],{95979:(n,t,e)=>{function r(n,t,e){return n.fields=t||[],n.fname=e,n}function u(n){return null==n?null:n.fname}function o(n){return null==n?null:n.fields}function l(n){return 1===n.length?c(n[0]):i(n)}e.d(t,{cG:()=>O,jj:()=>d,kI:()=>E,Hq:()=>j,uU:()=>k,ZE:()=>r,Oj:()=>o,el:()=>u,IX:()=>F,j2:()=>nn,l$:()=>Y,qu:()=>V,a9:()=>un,Ds:()=>on,vU:()=>f,l7:()=>ln,We:()=>cn,dI:()=>fn,k:()=>m,Xr:()=>gn,EP:()=>a,yl:()=>pn,nr:()=>an,id:()=>h,yR:()=>g,XW:()=>bn,u5:()=>yn,kJ:()=>_,jn:()=>mn,J_:()=>Mn,mf:()=>Q,TW:()=>jn,hj:()=>dn,Kn:()=>R,Kj:()=>kn,HD:()=>En,Jy:()=>On,t7:()=>wn,kg:()=>w,$m:()=>_n,TS:()=>Rn,fE:()=>U,kX:()=>b,vk:()=>Un,Dw:()=>H,mJ:()=>I,QA:()=>N,Zw:()=>W,fj:()=>A,mS:()=>L,rx:()=>Tn,yP:()=>vn,_k:()=>s,m8:()=>Dn,sw:()=>An,ZU:()=>Jn,He:()=>P,Rg:()=>zn,BB:()=>xn,$G:()=>Sn,yb:()=>y,N3:()=>Z,FP:()=>Bn,iL:()=>v,bM:()=>p,ay:()=>$,dH:()=>q,mK:()=>G,bV:()=>K});const c=n=>function(t){return t[n]},i=n=>{const t=n.length;return function(e){for(let r=0;r<t;++r)e=e[n[r]];return e}};function f(n){throw Error(n)}function s(n){const t=[],e=n.length;let r,u,o,l=null,c=0,i="";function s(){t.push(i+n.substring(r,u)),i="",r=u+1}for(n+="",r=u=0;u<e;++u)if(o=n[u],"\\"===o)i+=n.substring(r,u),i+=n.substring(++u,++u),r=u;else if(o===l)s(),l=null,c=-1;else{if(l)continue;r===c&&'"'===o||r===c&&"'"===o?(r=u+1,l=o):"."!==o||c?"["===o?(u>r&&s(),c=r=u+1):"]"===o&&(c||f("Access path missing open bracket: "+n),c>0&&s(),c=0,r=u+1):u>r?s():r=u+1}return c&&f("Access path missing closing bracket: "+n),l&&f("Access path missing closing quote: "+n),u>r&&(u++,s()),t}function a(n,t,e){const u=s(n);return n=1===u.length?u[0]:n,r((e&&e.get||l)(u),[n],t||n)}const h=a("id"),g=r((n=>n),[],"identity"),p=r((()=>0),[],"zero"),b=r((()=>1),[],"one"),y=r((()=>!0),[],"true"),m=r((()=>!1),[],"false");function M(n,t,e){const r=[t].concat([].slice.call(e));console[n].apply(console,r)}const j=0,d=1,k=2,E=3,O=4;function w(n,t){let e=n||j;return{level(n){return arguments.length?(e=+n,this):e},error(){return e>=d&&M(t||"error","ERROR",arguments),this},warn(){return e>=k&&M(t||"warn","WARN",arguments),this},info(){return e>=E&&M(t||"log","INFO",arguments),this},debug(){return e>=O&&M(t||"log","DEBUG",arguments),this}}}var _=Array.isArray;function R(n){return n===Object(n)}const T=n=>"__proto__"!==n;function U(...n){return n.reduce(((n,t)=>{for(const e in t)if("signals"===e)n.signals=D(n.signals,t.signals);else{const r="legend"===e?{layout:1}:"style"===e||null;v(n,e,t[e],r)}return n}),{})}function v(n,t,e,r){if(!T(t))return;let u,o;if(R(e)&&!_(e))for(u in o=R(n[t])?n[t]:n[t]={},e)r&&(!0===r||r[u])?v(o,u,e[u]):T(u)&&(o[u]=e[u]);else n[t]=e}function D(n,t){if(null==n)return t;const e={},r=[];function u(n){e[n.name]||(e[n.name]=1,r.push(n))}return t.forEach(u),n.forEach(u),r}function A(n){return n[n.length-1]}function P(n){return null==n||""===n?null:+n}const J=n=>t=>n*Math.exp(t),x=n=>t=>Math.log(n*t),z=n=>t=>Math.sign(t)*Math.log1p(Math.abs(t/n)),S=n=>t=>Math.sign(t)*Math.expm1(Math.abs(t))*n,B=n=>t=>t<0?-Math.pow(-t,n):Math.pow(t,n);function C(n,t,e,r){const u=e(n[0]),o=e(A(n)),l=(o-u)*t;return[r(u-l),r(o-l)]}function H(n,t){return C(n,t,P,g)}function I(n,t){var e=Math.sign(n[0]);return C(n,t,x(e),J(e))}function N(n,t,e){return C(n,t,B(e),B(1/e))}function W(n,t,e){return C(n,t,z(e),S(e))}function X(n,t,e,r,u){const o=r(n[0]),l=r(A(n)),c=null!=t?r(t):(o+l)/2;return[u(c+(o-c)*e),u(c+(l-c)*e)]}function $(n,t,e){return X(n,t,e,P,g)}function q(n,t,e){const r=Math.sign(n[0]);return X(n,t,e,x(r),J(r))}function G(n,t,e,r){return X(n,t,e,B(r),B(1/r))}function K(n,t,e,r){return X(n,t,e,z(r),S(r))}function L(n){return 1+~~(new Date(n).getMonth()/3)}function Z(n){return 1+~~(new Date(n).getUTCMonth()/3)}function F(n){return null!=n?_(n)?n:[n]:[]}function Y(n,t,e){let r,u=n[0],o=n[1];return o<u&&(r=o,o=u,u=r),r=o-u,r>=e-t?[t,e]:[u=Math.min(Math.max(u,t),e-r),u+r]}function Q(n){return"function"==typeof n}function V(n,t,e){e=e||{},t=F(t)||[];const u=[],l=[],c={},i=e.comparator||tn;return F(n).forEach(((n,r)=>{null!=n&&(u.push("descending"===t[r]?-1:1),l.push(n=Q(n)?n:a(n,null,e)),(o(n)||[]).forEach((n=>c[n]=1)))})),0===l.length?null:r(i(l,u),Object.keys(c))}const nn=(n,t)=>(n<t||null==n)&&null!=t?-1:(n>t||null==t)&&null!=n?1:(t=t instanceof Date?+t:t,(n=n instanceof Date?+n:n)!==n&&t==t?-1:t!=t&&n==n?1:0),tn=(n,t)=>1===n.length?en(n[0],t[0]):rn(n,t,n.length),en=(n,t)=>function(e,r){return nn(n(e),n(r))*t},rn=(n,t,e)=>(t.push(0),function(r,u){let o,l=0,c=-1;for(;0===l&&++c<e;)o=n[c],l=nn(o(r),o(u));return l*t[c]});function un(n){return Q(n)?n:()=>n}function on(n,t){let e;return r=>{e&&clearTimeout(e),e=setTimeout((()=>(t(r),e=null)),n)}}function ln(n){for(let t,e,r=1,u=arguments.length;r<u;++r)for(e in t=arguments[r],t)n[e]=t[e];return n}function cn(n,t){let e,r,u,o,l=0;if(n&&(e=n.length))if(null==t){for(r=n[l];l<e&&(null==r||r!=r);r=n[++l]);for(u=o=r;l<e;++l)r=n[l],null!=r&&(r<u&&(u=r),r>o&&(o=r))}else{for(r=t(n[l]);l<e&&(null==r||r!=r);r=t(n[++l]));for(u=o=r;l<e;++l)r=t(n[l]),null!=r&&(r<u&&(u=r),r>o&&(o=r))}return[u,o]}function fn(n,t){const e=n.length;let r,u,o,l,c,i=-1;if(null==t){for(;++i<e;)if(u=n[i],null!=u&&u>=u){r=o=u;break}if(i===e)return[-1,-1];for(l=c=i;++i<e;)u=n[i],null!=u&&(r>u&&(r=u,l=i),o<u&&(o=u,c=i))}else{for(;++i<e;)if(u=t(n[i],i,n),null!=u&&u>=u){r=o=u;break}if(i===e)return[-1,-1];for(l=c=i;++i<e;)u=t(n[i],i,n),null!=u&&(r>u&&(r=u,l=i),o<u&&(o=u,c=i))}return[l,c]}const sn=Object.prototype.hasOwnProperty;function an(n,t){return sn.call(n,t)}const hn={};function gn(n){let t,e={};function r(n){return an(e,n)&&e[n]!==hn}const u={size:0,empty:0,object:e,has:r,get:n=>r(n)?e[n]:void 0,set(n,t){return r(n)||(++u.size,e[n]===hn&&--u.empty),e[n]=t,this},delete(n){return r(n)&&(--u.size,++u.empty,e[n]=hn),this},clear(){u.size=u.empty=0,u.object=e={}},test(n){return arguments.length?(t=n,u):t},clean(){const n={};let r=0;for(const u in e){const o=e[u];o===hn||t&&t(o)||(n[u]=o,++r)}u.size=r,u.empty=0,u.object=e=n}};return n&&Object.keys(n).forEach((t=>{u.set(t,n[t])})),u}function pn(n,t,e,r,u,o){if(!e&&0!==e)return o;const l=+e;let c,i=n[0],f=A(n);f<i&&(c=i,i=f,f=c),c=Math.abs(t-i);const s=Math.abs(f-t);return c<s&&c<=l?r:s<=l?u:o}function bn(n,t,e){const r=n.prototype=Object.create(t.prototype);return Object.defineProperty(r,"constructor",{value:n,writable:!0,enumerable:!0,configurable:!0}),ln(r,e)}function yn(n,t,e,r){let u,o=t[0],l=t[t.length-1];return o>l&&(u=o,o=l,l=u),r=void 0===r||r,((e=void 0===e||e)?o<=n:o<n)&&(r?n<=l:n<l)}function mn(n){return"boolean"==typeof n}function Mn(n){return"[object Date]"===Object.prototype.toString.call(n)}function jn(n){return n&&Q(n[Symbol.iterator])}function dn(n){return"number"==typeof n}function kn(n){return"[object RegExp]"===Object.prototype.toString.call(n)}function En(n){return"string"==typeof n}function On(n,t,e){n&&(n=t?F(n).map((n=>n.replace(/\\(.)/g,"$1"))):F(n));const u=n&&n.length,o=e&&e.get||l,c=n=>o(t?[n]:s(n));let i;if(u)if(1===u){const t=c(n[0]);i=function(n){return""+t(n)}}else{const t=n.map(c);i=function(n){let e=""+t[0](n),r=0;for(;++r<u;)e+="|"+t[r](n);return e}}else i=function(){return""};return r(i,n,"key")}function wn(n,t){const e=n[0],r=A(n),u=+t;return u?1===u?r:e+u*(r-e):e}function _n(n){let t,e,r;n=+n||1e4;const u=()=>{t={},e={},r=0},o=(u,o)=>(++r>n&&(e=t,t={},r=1),t[u]=o);return u(),{clear:u,has:n=>an(t,n)||an(e,n),get:n=>an(t,n)?t[n]:an(e,n)?o(n,e[n]):void 0,set:(n,e)=>an(t,n)?t[n]=e:o(n,e)}}function Rn(n,t,e,r){const u=t.length,o=e.length;if(!o)return t;if(!u)return e;const l=r||new t.constructor(u+o);let c=0,i=0,f=0;for(;c<u&&i<o;++f)l[f]=n(t[c],e[i])>0?e[i++]:t[c++];for(;c<u;++c,++f)l[f]=t[c];for(;i<o;++i,++f)l[f]=e[i];return l}function Tn(n,t){let e="";for(;--t>=0;)e+=n;return e}function Un(n,t,e,r){const u=e||" ",o=n+"",l=t-o.length;return l<=0?o:"left"===r?Tn(u,l)+o:"center"===r?Tn(u,~~(l/2))+o+Tn(u,Math.ceil(l/2)):o+Tn(u,l)}function vn(n){return n&&A(n)-n[0]||0}function Dn(n){return _(n)?"["+n.map(Dn)+"]":R(n)||En(n)?JSON.stringify(n).replace("\u2028","\\u2028").replace("\u2029","\\u2029"):n}function An(n){return null==n||""===n?null:!(!n||"false"===n||"0"===n||!n)}const Pn=n=>dn(n)||Mn(n)?n:Date.parse(n);function Jn(n,t){return t=t||Pn,null==n||""===n?null:t(n)}function xn(n){return null==n||""===n?null:n+""}function zn(n){const t={},e=n.length;for(let r=0;r<e;++r)t[n[r]]=!0;return t}function Sn(n,t,e,r){const u=null!=r?r:"…",o=n+"",l=o.length,c=Math.max(0,t-u.length);return l<=t?o:"left"===e?u+o.slice(l-c):"center"===e?o.slice(0,Math.ceil(c/2))+u+o.slice(l-~~(c/2)):o.slice(0,c)+u}function Bn(n,t,e){if(n)if(t){const r=n.length;for(let u=0;u<r;++u){const r=t(n[u]);r&&e(r,u,n)}}else n.forEach(e)}}}]);
//# sourceMappingURL=2459.f176f5419a6cb5f882bb.js.map