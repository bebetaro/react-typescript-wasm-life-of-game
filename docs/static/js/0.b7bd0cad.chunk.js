(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[0],[,,,,,,,,,,,,function(e,n,r){"use strict";(function(e){r.d(n,"a",(function(){return g})),r.d(n,"b",(function(){return k})),r.d(n,"d",(function(){return m})),r.d(n,"f",(function(){return O})),r.d(n,"c",(function(){return j})),r.d(n,"g",(function(){return x})),r.d(n,"e",(function(){return E})),r.d(n,"h",(function(){return T}));var t=r(15),u=r(16),i=r(13),o=new Array(32).fill(void 0);function c(e){return o[e]}o.push(void 0,null,!0,!1);var f=o.length;function a(e){var n=c(e);return function(e){e<36||(o[e]=f,f=e)}(e),n}var l=new("undefined"===typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();var d=null;function s(){return null!==d&&d.buffer===i.memory.buffer||(d=new Uint8Array(i.memory.buffer)),d}function h(e,n){return l.decode(s().subarray(e,e+n))}var v=null;function _(){return null!==v&&v.buffer===i.memory.buffer||(v=new Int32Array(i.memory.buffer)),v}var w=0,p=new("undefined"===typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8"),y="function"===typeof p.encodeInto?function(e,n){return p.encodeInto(e,n)}:function(e,n){var r=p.encode(e);return n.set(r),{read:e.length,written:r.length}};var b,g=Object.freeze({Dead:0,Alive:1}),k=function(){function e(){Object(t.a)(this,e)}return Object(u.a)(e,[{key:"free",value:function(){var e=this.ptr;this.ptr=0,i.__wbg_universe_free(e)}},{key:"width",value:function(){return i.universe_width(this.ptr)>>>0}},{key:"height",value:function(){return i.universe_height(this.ptr)>>>0}},{key:"cells",value:function(){return i.universe_cells(this.ptr)}},{key:"tick",value:function(){i.universe_tick(this.ptr)}},{key:"render",value:function(){try{i.universe_render(8,this.ptr);var e=_()[2],n=_()[3];return h(e,n)}finally{i.__wbindgen_free(e,n)}}},{key:"set_width",value:function(e){i.universe_set_width(this.ptr,e)}},{key:"set_height",value:function(e){i.universe_set_height(this.ptr,e)}},{key:"toggle_cell",value:function(e,n){i.universe_toggle_cell(this.ptr,e,n)}}],[{key:"__wrap",value:function(n){var r=Object.create(e.prototype);return r.ptr=n,r}},{key:"new",value:function(n,r){var t=i.universe_new(n,r);return e.__wrap(t)}}]),e}(),m=function(){return function(e){f===o.length&&o.push(o.length+1);var n=f;return f=o[n],o[n]=e,n}(new Error)},O=function(e,n){var r=function(e,n,r){if(void 0===r){var t=p.encode(e),u=n(t.length);return s().subarray(u,u+t.length).set(t),w=t.length,u}for(var i=e.length,o=n(i),c=s(),f=0;f<i;f++){var a=e.charCodeAt(f);if(a>127)break;c[o+f]=a}if(f!==i){0!==f&&(e=e.slice(f)),o=r(o,i,i=f+3*e.length);var l=s().subarray(o+f,o+i);f+=y(e,l).written}return w=f,o}(c(n).stack,i.__wbindgen_malloc,i.__wbindgen_realloc),t=w;_()[e/4+1]=t,_()[e/4+0]=r},j=function(e,n){try{console.error(h(e,n))}finally{i.__wbindgen_free(e,n)}},x=function(e){a(e)},E="function"==typeof Math.random?Math.random:(b="Math.random",function(){throw new Error("".concat(b," is not defined"))}),T=function(e,n){throw new Error(h(e,n))}}).call(this,r(14)(e))},function(e,n,r){"use strict";var t=r.w[e.i];for(var u in r.r(n),t)"__webpack_init__"!=u&&(n[u]=t[u]);r(12);t.__webpack_init__()},function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}r.d(n,"a",(function(){return t}))},function(e,n,r){"use strict";function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function u(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}r.d(n,"a",(function(){return u}))}]]);
//# sourceMappingURL=0.b7bd0cad.chunk.js.map