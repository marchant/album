montageDefine("39386c7","weak-map",{dependencies:[],factory:function(e,t,n){(function(){"use strict";function e(t){t.permitHostObjects___&&t.permitHostObjects___(e)}function t(e){return!(e.substr(0,c.length)==c&&"___"===e.substr(e.length-3))}function i(e){if(e!==Object(e))throw new TypeError("Not an object: "+e);var t=e[u];if(t&&t.key===e)return t;if(!l(e))return void 0;var n=[],i=[];return t={key:e,gets:n,vals:i},o(e,u,{value:t,writable:!1,enumerable:!1,configurable:!1}),t}function r(e){return e.prototype=null,Object.freeze(e)}if("undefined"==typeof ses||!ses.ok||ses.ok()){if("undefined"!=typeof ses&&(ses.weakMapPermitHostObjects=e),"function"==typeof WeakMap){var a=WeakMap;if("undefined"==typeof navigator||!/Firefox/.test(navigator.userAgent))return n.exports=WeakMap,void 0}Object.prototype.hasOwnProperty;var s=Object.getOwnPropertyNames,o=Object.defineProperty,l=Object.isExtensible,c="weakmap:",u=c+"ident:"+Math.random()+"___";if("undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof ArrayBuffer&&"function"==typeof Uint8Array){var h=new ArrayBuffer(25),d=new Uint8Array(h);crypto.getRandomValues(d),u=c+"rand:"+Array.prototype.map.call(d,function(e){return(e%36).toString(36)}).join("")+"___"}if(o(Object,"getOwnPropertyNames",{value:function(e){return s(e).filter(t)}}),"getPropertyNames"in Object){var p=Object.getPropertyNames;o(Object,"getPropertyNames",{value:function(e){return p(e).filter(t)}})}(function(){var e=Object.freeze;o(Object,"freeze",{value:function(t){return i(t),e(t)}});var t=Object.seal;o(Object,"seal",{value:function(e){return i(e),t(e)}});var n=Object.preventExtensions;o(Object,"preventExtensions",{value:function(e){return i(e),n(e)}})})();var g=function(){function e(t,n){var r,a,l=i(t);return l?(r=l.gets.indexOf(e),a=l.vals):(r=s.indexOf(t),a=o),r>=0?a[r]:n}function t(t){var n,r=i(t);return n=r?r.gets.indexOf(e):s.indexOf(t),n>=0}function n(t,n){var r,a=i(t);a?(r=a.gets.indexOf(e),r>=0?a.vals[r]=n:(a.gets.push(e),a.vals.push(n))):(r=s.indexOf(t),r>=0?o[r]=n:(s.push(t),o.push(n)))}function a(t){var n,r=i(t);return r?(n=r.gets.indexOf(e),n>=0&&(r.gets.splice(n,1),r.vals.splice(n,1))):(n=s.indexOf(t),n>=0&&(s.splice(n,1),o.splice(n,1))),!0}var s=[],o=[];return Object.create(g.prototype,{get___:{value:r(e)},has___:{value:r(t)},set___:{value:r(n)},delete___:{value:r(a)}})};g.prototype=Object.create(Object.prototype,{get:{value:function(e,t){return this.get___(e,t)},writable:!0,configurable:!0},has:{value:function(e){return this.has___(e)},writable:!0,configurable:!0},set:{value:function(e,t){this.set___(e,t)},writable:!0,configurable:!0},"delete":{value:function(e){return this.delete___(e)},writable:!0,configurable:!0}}),"function"==typeof a?function(){function t(){function t(e,t){return l?o.has(e)?o.get(e):l.get___(e,t):o.get(e,t)}function n(e){return o.has(e)||(l?l.has___(e):!1)}function i(e,t){if(c)try{o.set(e,t)}catch(n){l||(l=new g),l.set___(e,t)}else o.set(e,t)}function s(e){o["delete"](e),l&&l.delete___(e)}var o=new a,l=void 0,c=!1;return Object.create(g.prototype,{get___:{value:r(t)},has___:{value:r(n)},set___:{value:r(i)},delete___:{value:r(s)},permitHostObjects___:{value:r(function(t){if(t!==e)throw Error("bogus call to permitHostObjects___");c=!0})}})}t.prototype=g.prototype,n.exports=t,Object.defineProperty(WeakMap.prototype,"constructor",{value:WeakMap,enumerable:!1,configurable:!0,writable:!0})}():("undefined"!=typeof Proxy&&(Proxy=void 0),n.exports=g)}})()}});