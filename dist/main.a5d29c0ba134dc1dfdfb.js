/*! For license information please see main.a5d29c0ba134dc1dfdfb.js.LICENSE.txt */
(()=>{"use strict";var r={331:(r,n,e)=>{e.d(n,{Z:()=>c});var t=e(537),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([r.id,"*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,Helvetica,sans-serif;background:#3266cc}h3{margin-bottom:10px}h1{margin:20px 0;font-size:40px}button{display:inline-block;cursor:pointer;background:#3266cc;padding:10px 20px;border:none;color:#fff;font-weight:600;border-radius:30px;box-shadow:3px 3px #fff}button:hover{transition:.5s ease-in-out;box-shadow:5px 5px #fff}button:active{transform:scale(0.9)}.container{display:flex;flex-direction:column;justify-content:center;align-items:start;height:100vh;max-width:1400px;margin:0 auto;overflow:auto;padding:0 40px}.flex{display:grid;grid-template-columns:repeat(2, 1fr);gap:20px;width:100%;justify-content:center;align-items:start;overflow:hidden}.msg{display:none;position:absolute;right:0;margin:auto;margin-top:20px;width:200px;padding:10px 10px;border-radius:15px;text-align:center;color:#fff}.error{text-align:center;color:red;width:100%;margin:85px 0}.spinner{width:15px;text-align:center}.card{background:#1a1a1a;padding:20px;color:#fff;border-radius:30px}.card-header{display:flex;justify-content:space-between;align-items:center}ul{list-style-type:none;height:218px;overflow-y:auto;margin:10px 0}ul::-webkit-scrollbar{width:8px;scroll-behavior:smooth}ul::-webkit-scrollbar-track{border-radius:8px;background-color:#e7e7e7;border:1px solid #cacaca;margin:0 20px}ul::-webkit-scrollbar-thumb{border-radius:8px;border:3px solid rgba(0,0,0,0);background-clip:content-box;background-color:#3266cc}ul li{display:flex;justify-content:space-between;align-items:center;background:#272626;color:#fff;font-weight:600;text-align:center;border-radius:30px;margin:5px 0;padding:5px}ul li:nth-child(odd){background:#3c3b3b}ul li .index,ul li .scores{background:#3266cc;padding:10px 15px;border-radius:30px}.new-score{background:#1a1a1a;padding:20px;color:#fff;border-radius:30px}.form input{width:100%;display:block;margin:10px 0;padding:20px 0;background:none;border:none;color:#fff;font-weight:600;border-bottom:2px solid #fff}.form input:focus{outline:none}.form input:active{outline:none;background:none}.form input::placeholder{color:#fff}.form button{margin:20px 0}@media(max-width: 768px){.flex{display:grid;grid-template-columns:repeat(1, 1fr);gap:20px;justify-content:center;align-items:center;height:100%;overflow:hidden}.item:nth-child(1){order:2}.item:nth-child(2){order:1}}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAAA,EACE,qBAAA,CACA,QAAA,CACA,SAAA,CAGF,KACE,sCAAA,CACA,kBAAA,CAGF,GACE,kBAAA,CAGF,GACE,aAAA,CACA,cAAA,CAGF,OACE,oBAAA,CACA,cAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,kBAAA,CACA,uBAAA,CAGF,aACE,0BAAA,CACA,uBAAA,CAGF,cACE,oBAAA,CAGF,WACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,iBAAA,CACA,YAAA,CACA,gBAAA,CACA,aAAA,CACA,aAAA,CACA,cAAA,CAGF,MACE,YAAA,CACA,oCAAA,CACA,QAAA,CACA,UAAA,CACA,sBAAA,CACA,iBAAA,CACA,eAAA,CAGF,KACE,YAAA,CACA,iBAAA,CACA,OAAA,CACA,WAAA,CACA,eAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CAGF,OACE,iBAAA,CACA,SAAA,CACA,UAAA,CACA,aAAA,CAGF,SACE,UAAA,CACA,iBAAA,CAGF,MACE,kBAAA,CACA,YAAA,CACA,UAAA,CACA,kBAAA,CAGF,aACE,YAAA,CACA,6BAAA,CACA,kBAAA,CAGF,GACE,oBAAA,CACA,YAAA,CACA,eAAA,CACA,aAAA,CAGF,sBACE,SAAA,CACA,sBAAA,CAGF,4BACE,iBAAA,CACA,wBAAA,CACA,wBAAA,CACA,aAAA,CAGF,4BACE,iBAAA,CACA,8BAAA,CACA,2BAAA,CACA,wBAAA,CAGF,MACE,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,kBAAA,CACA,UAAA,CACA,eAAA,CACA,iBAAA,CACA,kBAAA,CACA,YAAA,CACA,WAAA,CAGF,qBACE,kBAAA,CAGF,2BAEE,kBAAA,CACA,iBAAA,CACA,kBAAA,CAGF,WACE,kBAAA,CACA,YAAA,CACA,UAAA,CACA,kBAAA,CAGF,YACE,UAAA,CACA,aAAA,CACA,aAAA,CACA,cAAA,CACA,eAAA,CACA,WAAA,CACA,UAAA,CACA,eAAA,CACA,4BAAA,CAGF,kBACE,YAAA,CAGF,mBACE,YAAA,CACA,eAAA,CAGF,yBACE,UAAA,CAGF,aACE,aAAA,CAGF,yBACE,MACE,YAAA,CACA,oCAAA,CACA,QAAA,CACA,sBAAA,CACA,kBAAA,CACA,WAAA,CACA,eAAA,CAGF,mBACE,OAAA,CAGF,mBACE,OAAA,CAAA",sourcesContent:["* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  background: #3266cc;\r\n}\r\n\r\nh3 {\r\n  margin-bottom: 10px;\r\n}\r\n\r\nh1 {\r\n  margin: 20px 0;\r\n  font-size: 40px;\r\n}\r\n\r\nbutton {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  background: #3266cc;\r\n  padding: 10px 20px;\r\n  border: none;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  border-radius: 30px;\r\n  box-shadow: 3px 3px #fff;\r\n}\r\n\r\nbutton:hover {\r\n  transition: 0.5s ease-in-out;\r\n  box-shadow: 5px 5px #fff;\r\n}\r\n\r\nbutton:active {\r\n  transform: scale(0.9);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: start;\r\n  height: 100vh;\r\n  max-width: 1400px;\r\n  margin: 0 auto;\r\n  overflow: auto;\r\n  padding: 0 40px;\r\n}\r\n\r\n.flex {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 20px;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: start;\r\n  overflow: hidden;\r\n}\r\n\r\n.msg {\r\n  display: none;\r\n  position: absolute;\r\n  right: 0;\r\n  margin: auto;\r\n  margin-top: 20px;\r\n  width: 200px;\r\n  padding: 10px 10px;\r\n  border-radius: 15px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.error {\r\n  text-align: center;\r\n  color: red;\r\n  width: 100%;\r\n  margin: 85px 0;\r\n}\r\n\r\n.spinner {\r\n  width: 15px;\r\n  text-align: center;\r\n}\r\n\r\n.card {\r\n  background: #1a1a1a;\r\n  padding: 20px;\r\n  color: #fff;\r\n  border-radius: 30px;\r\n}\r\n\r\n.card-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n  height: 218px;\r\n  overflow-y: auto;\r\n  margin: 10px 0;\r\n}\r\n\r\nul::-webkit-scrollbar {\r\n  width: 8px;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nul::-webkit-scrollbar-track {\r\n  border-radius: 8px;\r\n  background-color: #e7e7e7;\r\n  border: 1px solid #cacaca;\r\n  margin: 0 20px;\r\n}\r\n\r\nul::-webkit-scrollbar-thumb {\r\n  border-radius: 8px;\r\n  border: 3px solid transparent;\r\n  background-clip: content-box;\r\n  background-color: #3266cc;\r\n}\r\n\r\nul li {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background: #272626;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  text-align: center;\r\n  border-radius: 30px;\r\n  margin: 5px 0;\r\n  padding: 5px;\r\n}\r\n\r\nul li:nth-child(odd) {\r\n  background: #3c3b3b;\r\n}\r\n\r\nul li .index,\r\nul li .scores {\r\n  background: #3266cc;\r\n  padding: 10px 15px;\r\n  border-radius: 30px;\r\n}\r\n\r\n.new-score {\r\n  background: #1a1a1a;\r\n  padding: 20px;\r\n  color: #fff;\r\n  border-radius: 30px;\r\n}\r\n\r\n.form input {\r\n  width: 100%;\r\n  display: block;\r\n  margin: 10px 0;\r\n  padding: 20px 0;\r\n  background: none;\r\n  border: none;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  border-bottom: 2px solid #fff;\r\n}\r\n\r\n.form input:focus {\r\n  outline: none;\r\n}\r\n\r\n.form input:active {\r\n  outline: none;\r\n  background: none;\r\n}\r\n\r\n.form input::placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.form button {\r\n  margin: 20px 0;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .flex {\r\n    display: grid;\r\n    grid-template-columns: repeat(1, 1fr);\r\n    gap: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .item:nth-child(1) {\r\n    order: 2;\r\n  }\r\n\r\n  .item:nth-child(2) {\r\n    order: 1;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const c=a},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var s=0;s<r.length;s++){var u=[].concat(r[s]);t&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],c=0;c<r.length;c++){var A=r[c],s=t.base?A[0]+t.base:A[0],u=i[s]||0,l="".concat(s," ").concat(u);i[s]=u+1;var d=e(l),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var f=o(p,t);t.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var A=t(r,o),s=0;s<i.length;s++){var u=e(i[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=A}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!r;)r=t[o--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),A=e.n(c),s=e(216),u=e.n(s),l=e(589),d=e.n(l),p=e(331),f={};f.styleTagTransform=d(),f.setAttributes=A(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=e.p+"spinner[text]";function C(r){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},C(r)}function m(){m=function(){return r};var r={},n=Object.prototype,e=n.hasOwnProperty,t=Object.defineProperty||function(r,n,e){r[n]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function A(r,n,e){return Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),r[n]}try{A({},"")}catch(r){A=function(r,n,e){return r[n]=e}}function s(r,n,e,o){var i=n&&n.prototype instanceof d?n:d,a=Object.create(i.prototype),c=new S(o||[]);return t(a,"_invoke",{value:w(r,e,c)}),a}function u(r,n,e){try{return{type:"normal",arg:r.call(n,e)}}catch(r){return{type:"throw",arg:r}}}r.wrap=s;var l={};function d(){}function p(){}function f(){}var h={};A(h,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(j([])));v&&v!==n&&e.call(v,i)&&(h=v);var y=f.prototype=d.prototype=Object.create(h);function x(r){["next","throw","return"].forEach((function(n){A(r,n,(function(r){return this._invoke(n,r)}))}))}function b(r,n){function o(t,i,a,c){var A=u(r[t],r,i);if("throw"!==A.type){var s=A.arg,l=s.value;return l&&"object"==C(l)&&e.call(l,"__await")?n.resolve(l.__await).then((function(r){o("next",r,a,c)}),(function(r){o("throw",r,a,c)})):n.resolve(l).then((function(r){s.value=r,a(s)}),(function(r){return o("throw",r,a,c)}))}c(A.arg)}var i;t(this,"_invoke",{value:function(r,e){function t(){return new n((function(n,t){o(r,e,n,t)}))}return i=i?i.then(t,t):t()}})}function w(r,n,e){var t="suspendedStart";return function(o,i){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=k(a,e);if(c){if(c===l)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===t)throw t="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);t="executing";var A=u(r,n,e);if("normal"===A.type){if(t=e.done?"completed":"suspendedYield",A.arg===l)continue;return{value:A.arg,done:e.done}}"throw"===A.type&&(t="completed",e.method="throw",e.arg=A.arg)}}}function k(r,n){var e=n.method,t=r.iterator[e];if(void 0===t)return n.delegate=null,"throw"===e&&r.iterator.return&&(n.method="return",n.arg=void 0,k(r,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),l;var o=u(t,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,l;var i=o.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,l):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,l)}function E(r){var n={tryLoc:r[0]};1 in r&&(n.catchLoc=r[1]),2 in r&&(n.finallyLoc=r[2],n.afterLoc=r[3]),this.tryEntries.push(n)}function B(r){var n=r.completion||{};n.type="normal",delete n.arg,r.completion=n}function S(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(E,this),this.reset(!0)}function j(r){if(r){var n=r[i];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var t=-1,o=function n(){for(;++t<r.length;)if(e.call(r,t))return n.value=r[t],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:G}}function G(){return{value:void 0,done:!0}}return p.prototype=f,t(y,"constructor",{value:f,configurable:!0}),t(f,"constructor",{value:p,configurable:!0}),p.displayName=A(f,c,"GeneratorFunction"),r.isGeneratorFunction=function(r){var n="function"==typeof r&&r.constructor;return!!n&&(n===p||"GeneratorFunction"===(n.displayName||n.name))},r.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,f):(r.__proto__=f,A(r,c,"GeneratorFunction")),r.prototype=Object.create(y),r},r.awrap=function(r){return{__await:r}},x(b.prototype),A(b.prototype,a,(function(){return this})),r.AsyncIterator=b,r.async=function(n,e,t,o,i){void 0===i&&(i=Promise);var a=new b(s(n,e,t,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(r){return r.done?r.value:a.next()}))},x(y),A(y,c,"Generator"),A(y,i,(function(){return this})),A(y,"toString",(function(){return"[object Generator]"})),r.keys=function(r){var n=Object(r),e=[];for(var t in n)e.push(t);return e.reverse(),function r(){for(;e.length;){var t=e.pop();if(t in n)return r.value=t,r.done=!1,r}return r.done=!0,r}},r.values=j,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(B),!r)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var r=this.tryEntries[0].completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(e,t){return a.type="throw",a.arg=r,n.next=e,t&&(n.method="next",n.arg=void 0),!!t}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return t("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),A=e.call(i,"finallyLoc");if(c&&A){if(this.prev<i.catchLoc)return t(i.catchLoc,!0);if(this.prev<i.finallyLoc)return t(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return t(i.catchLoc,!0)}else{if(!A)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return t(i.finallyLoc)}}}},abrupt:function(r,n){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===r||"continue"===r)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=r,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(r,n){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&n&&(this.next=n),l},finish:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===r)return this.complete(e.completion,e.afterLoc),B(e),l}},catch:function(r){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===r){var t=e.completion;if("throw"===t.type){var o=t.arg;B(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,n,e){return this.delegate={iterator:j(r),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},r}function g(r,n,e,t,o,i,a){try{var c=r[i](a),A=c.value}catch(r){return void e(r)}c.done?n(A):Promise.resolve(A).then(t,o)}function v(r){return function(){var n=this,e=arguments;return new Promise((function(t,o){var i=r.apply(n,e);function a(r){g(i,t,o,a,c,"next",r)}function c(r){g(i,t,o,a,c,"throw",r)}a(void 0)}))}}var y=document.querySelector(".add-user"),x=document.querySelector(".refresh"),b=document.querySelector(".ul"),w=document.querySelector(".load"),k=function(r,n){var e=document.querySelector(".msg");e.style.display="block",e.innerText=r,e.style.background=n,setTimeout((function(){e.style.display="none"}),3e3)},E=function(r){localStorage.setItem("gameId",r)},B=function(){return localStorage.getItem("gameId")},S="",j=function(){var r=v(m().mark((function r(){var n,e;return m().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=1,r.next=4,fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({name:"Fifa-2023"})});case 4:return n=r.sent,r.next=7,n.json();case 7:e=r.sent,S=e.result.split(" ")[3],E(S),r.next=15;break;case 12:r.prev=12,r.t0=r.catch(1),k("An error occurred","red");case 15:case"end":return r.stop()}}),r,null,[[1,12]])})));return function(){return r.apply(this,arguments)}}(),G=function(){var r=v(m().mark((function r(n){var e,t,o,i,a;return m().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e=document.querySelector(".name").value,t=document.querySelector(".score").value,(o=document.querySelector(".add-user")).disabled=!0,""!==e||""!==t){r.next=8;break}k("All fields are required","red"),r.next=23;break;case 8:return r.prev=8,r.next=11,fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/".concat(B(),"/scores/"),{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({user:e,score:t})});case 11:return i=r.sent,document.querySelector(".name").value="",document.querySelector(".score").value="",r.next=16,i.json();case 16:a=r.sent,k(a.result,"green"),r.next=23;break;case 20:r.prev=20,r.t0=r.catch(8),k("An error occurred","red");case 23:o.disabled=!1,n.preventDefault();case 25:case"end":return r.stop()}}),r,null,[[8,20]])})));return function(n){return r.apply(this,arguments)}}(),F=function(){var r=v(m().mark((function r(){var n;return m().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(n=document.createElement("img")).className="spinner",n.src=h,w.appendChild(n);try{setTimeout(v(m().mark((function r(){var e,t,o,i,a;return m().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/".concat(B(),"/scores"));case 2:return e=r.sent,r.next=5,e.json();case 5:t=r.sent,o=t.result,b.innerHTML="",0===o.length?(i=document.createElement("li"),(a=document.createElement("p")).className="error",a.textContent="No user available",i.appendChild(a),b.appendChild(i)):o.forEach((function(r,n){var e=document.createElement("li");e.innerHTML='\n            <span class="index">'.concat(n+=1,"</span>\n            <p>").concat(r.user,'</p>\n            <span class="scores">').concat(r.score,"</span>\n          "),b.appendChild(e)})),n.style.display="none";case 10:case"end":return r.stop()}}),r)}))),2e3)}catch(r){k("An error occurred","red")}case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();document.addEventListener("DOMContentLoaded",v(m().mark((function r(){return m().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(S=B()){r.next=4;break}return r.next=4,j();case 4:F();case 5:case"end":return r.stop()}}),r)})))),y.addEventListener("click",G),x.addEventListener("click",F)})()})();
//# sourceMappingURL=main.a5d29c0ba134dc1dfdfb.js.map