(()=>{"use strict";var e={917:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const c=i},426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,'body {\n    display: grid;\n    grid-template-areas: \n        "a a"\n        "b c";\n    grid-template-columns: 10vw 1fr;\n}\n\n#title {\n    grid-area: a;\n    margin: auto;\n}\n\nnav {\n    grid-area: b;\n    background-color: rgb(255, 149, 149);\n}\n\nmain {\n    grid-area: c;\n    background-color: rgb(145, 145, 255);\n    padding: 20px;\n}\n\n.task {\n    display: flex;\n    background-color: rgb(164, 255, 164);\n    width: 80vw;\n    padding: 20px;\n}\n\n.task-card {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    background-color: rgb(255, 221, 159);\n    width: 60vw;\n    height: 1em;\n    padding: 20px;\n    overflow: hidden;\n}\n\n.task button {\n    height: 2em;\n}\n\n.task-card p {\n    width: 60vw;\n    margin-top: 1.5em;\n}\n\n.expanded {\n    height: auto;\n}',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=a(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(917),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(426),v={};function b(){"Range"!=window.getSelection().type&&this.classList.toggle("expanded")}v.styleTagTransform=p(),v.setAttributes=s(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),n()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,function(e,n,t,r,a){const o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("h4"),s=document.createElement("h4"),d=document.createElement("p"),l=document.createElement("button"),u=document.createElement("button");c.textContent="do thind",s.textContent="3/8/21",d.textContent="dont procastinate this u little bitch",l.textContent="EDIT",u.textContent="DELETE",o.classList.add("task"),i.classList.add("task-card"),l.classList.add("task-edit"),u.classList.add("task-delete"),i.classList.add("lol"),i.addEventListener("click",b),i.append(c,s,d),o.append(i,l,u),a.container.appendChild(o)}(0,0,0,0,function(e){const n=document.createElement("div"),t=document.createElement("h3"),r=document.createElement("button");return t.textContent=e,r.textContent=e,n.classList.add("project"),n.appendChild(t),document.querySelector("main").appendChild(n),document.querySelector("nav").appendChild(r),{container:n}}("PROJECT 1"))})()})();