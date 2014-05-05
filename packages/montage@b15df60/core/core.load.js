montageDefine("b15df60","core/core",{dependencies:["collections/shim","./shim/object","./shim/array","./shim/string","./extras/object","./extras/date","./extras/element","./extras/function","./extras/regexp","./extras/string","./deprecate","./uuid","collections/listen/property-changes","frb","collections/weak-map","collections/map","frb/parse","frb/evaluate","frb/assign","frb/observe","frb/bind","frb/compile-observer","frb/scope","frb/observers","./serialization/bindings","./promise"],factory:function(e,t){function n(e,t){var i=a+t+r;return e.hasOwnProperty(i)?e[i]:Object.defineProperty(e,i,{enumerable:!1,configurable:!1,writable:!0,value:Object.create(n(Object.getPrototypeOf(e),t))})[i]}e("collections/shim"),e("./shim/object"),e("./shim/array"),e("./shim/string"),e("./extras/object"),e("./extras/date"),e("./extras/element"),e("./extras/function"),e("./extras/regexp"),e("./extras/string");var i=e("./deprecate"),r="AttributeProperties",a="_",s="__proto__",o="value",l="enumerable",u="distinct",h="serializable",c=Array.prototype,d=Object.prototype,p=!0,m=t.Montage=function m(){};m.deprecate=i.deprecateMethod(m,i.deprecateMethod,"Montage.deprecate","deprecate module's deprecateMethod"),m.callDeprecatedFunction=i.deprecateMethod(m,i.callDeprecatedFunction,"Montage.callDeprecatedFunction","deprecate module's callDeprecatedFunction");var f={}.__proto__===Object.prototype,v={_montage_metadata:1,__state__:1},g=Object.getOwnPropertyNames(Function);if(Object.defineProperty(m,"specialize",{value:function(e,t){var n,r,a,s,o,l,u,h=this,c=this.specialize===void 0;if(e=e||Object.empty,t=t||Object.empty,n=e.constructor&&e.constructor.value?e.constructor.value:e.didCreate&&e.didCreate.value?m.deprecate(null,e.didCreate.value,"didCreate","constructor"):function(){return this.superForValue("constructor")()||this},f)n.__proto__=h;else{a=Object.getOwnPropertyNames(h);for(var l=0;a.length>l;l++)s=a[l],v.hasOwnProperty(s)||(o=Object.getOwnPropertyDescriptor(n,s),(!o||o.configurable)&&m.defineProperty(n,s,Object.getOwnPropertyDescriptor(h,s)));n.__constructorProto__=h,m.defineProperty(n,"isPrototypeOf",{value:function(e){for(;null!==e;){if(Object.getPrototypeOf(e)===this)return!0;e=Object.getPrototypeOf(e)}return!1},enumerable:!1})}if(r=Object.create(this.prototype),c){for(a=Object.getOwnPropertyNames(m),l=0;a.length>l;l++)s=a[l],o=Object.getOwnPropertyDescriptor(n,s),(!o||o.configurable)&&m.defineProperty(n,s,Object.getOwnPropertyDescriptor(m,s));for(a=Object.getOwnPropertyNames(m.prototype),l=0;a.length>l;l++)s=a[l],o=Object.getOwnPropertyDescriptor(n,s),(!o||o.configurable)&&m.defineProperty(r,s,Object.getOwnPropertyDescriptor(m.prototype,s))}if(m.defineProperties(r,e),p){u=function(e,t,n){function r(){return this===t&&i.deprecationWarning(m.getInfoForObject(t).objectName+"."+n+" should be moved to constructorProperties",null,3),e.apply(this,arguments)}return r.deprecatedFunction=e,r};for(s in e)g.has(s)?delete e[s]:(o=e[s],o.value&&"function"==typeof o.value&&!o.value.__isConstructor__?o.value=u(o.value,n,s):(o.get&&(o.get=u(o.get,n,s)),o.set&&(o.set=u(o.set,n,s))));m.defineProperties(n,e),m.defineProperty(n,"create",{value:function(){return new n},enumerable:!1})}return m.defineProperties(n,t),m.defineProperty(n,"__isConstructor__",{value:!0,enumerable:!1}),m.defineProperty(n,"_superCache",{value:{},enumerable:!1}),n.prototype=r,m.defineProperty(r,"constructor",{value:n,enumerable:!1}),n},writable:!0,configurable:!0,enumerable:!1}),!f){var y=Object.getPrototypeOf;Object.getPrototypeOf=function(e){return"function"==typeof e&&e.__constructorProto__?e.__constructorProto__:y.apply(Object,arguments)}}Object.defineProperty(m,"create",{configurable:!0,value:function(e,t){if(void 0!==e&&"object"!=typeof e&&"function"!=typeof e)throw new TypeError("Object prototype may only be an Object or null, not '"+e+"'");if(e=e===void 0?this:e,"function"==typeof e)return t?e.specialize(t):new e;var n=Object.create(e);return t&&m.defineProperties(n,t),n}});var _=[h];_.forEach(function(e){Object.defineProperty(Object.prototype,a+e+r,{enumerable:!1,configurable:!1,writable:!0,value:{}})}),Object.defineProperty(m,"defineProperty",{value:function(e,t,i){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("Object must be an object, not '"+e+"'");var r=o in i;if(u in i&&!r)throw new TypeError("Cannot use distinct attribute on non-value property '"+t+"'");if(s in i)i.__proto__=r?"function"==typeof i.value?M:w:b;else{var p;p=r?"function"==typeof i.value?M:w:b;for(var m in p)m in i||(i[m]=p[m])}if(i.hasOwnProperty(l)||t.charAt(0)!==a||(i.enumerable=!1),i.hasOwnProperty(h)||(i.enumerable?i.get&&!i.set?i.serializable=!1:i.writable===!1&&(i.serializable=!1):i.serializable=!1),h in i&&(n(e,h)[t]=i.serializable),i.distinct!==!0||"object"!=typeof i.value){var f,v,g;if(e._superDependencies){if("function"==typeof i.value&&(f=e._superDependencies[t+".value"]))for(v=0,g=f.length;g>v;v++)delete f[v]._superCache[t+".value"];if("function"==typeof i.get&&(f=e._superDependencies[t+".get"]))for(v=0,g=f.length;g>v;v++)delete f[v]._superCache[t+".get"];if("function"==typeof i.set&&(f=e._superDependencies[t+".set"]))for(v=0,g=f.length;g>v;v++)delete f[v]._superCache[t+".set"]}return Object.defineProperty(e,t,i)}(function(e,t,n,i){var r=function(e,t,n){Object.defineProperty(e,t,{enumerable:!1,configurable:!0,writable:!0,value:n})};n.constructor===Object&&Object.getPrototypeOf(n)===d?0!==Object.keys(n).length?Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];if(!e){var i;e={};for(i in n)e[i]=n[i];this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];return e||(e={},this.hasOwnProperty(t)?this[t]=e:r(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):(n.__proto__||Object.getPrototypeOf(n))===c?0!==n.length?Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];if(!e){var i,a;for(e=[],i=0;(a=n[i])!==void 0;i++)e[i]=a;this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];return e||(e=[],this.hasOwnProperty(t)?this[t]=e:r(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):n.constructor.prototype===Object.getPrototypeOf(n)?Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];if(!e){var i;e=new n.constructor;for(i in n)e[i]=n[i];this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}return e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}}):Object.defineProperty(i,e,{configurable:!0,get:function(){var e=this[t];return e||(e=Object.create(n.__proto__||Object.getPrototypeOf(n)),this.hasOwnProperty(t)?this[t]=e:r(this,t,e)),e},set:function(e){this.hasOwnProperty(t)?this[t]=e:r(this,t,e)}})})(t,a+t,i.value,e)}}),Object.defineProperty(m,"defineProperties",{value:function(e,t){if("object"!=typeof t||null===t)throw new TypeError("Properties must be an object, not '"+t+"'");for(var n in t)"_bindingDescriptors"!==n&&this.defineProperty(e,n,t[n]);return e}});var b={enumerable:!0,configurable:!0,serializable:!0},w={writable:!0,enumerable:!0,configurable:!0,serializable:"reference"},M={writable:!0,enumerable:!1,configurable:!0,serializable:!1};m.defineProperty(m,"didCreate",{value:Function.noop});var P=function(e,t){var n,i,r,a,s,o,l,u,h;if(!t._superPropertyName||!t._superPropertyType)for(m.defineProperty(t,"_superPropertyType",{value:null}),m.defineProperty(t,"_superPropertyName",{value:null}),l=e;!u&&null!==l;){for(n=Object.getOwnPropertyNames(l),i=Object.getPrototypeOf(l),r=0,a=n.length,r;a>r;r++){if(s=n[r],h=Object.getOwnPropertyDescriptor(l,s),null!=(o=h.value)&&(o===t||o.deprecatedFunction===t)){t._superPropertyType="value",t._superPropertyName=s,u=!0;break}if(null!=(o=h.get)&&(o===t||o.deprecatedFunction===t)){t._superPropertyType="get",t._superPropertyName=s,u=!0;break}if(null!=(o=h.set)&&(o===t||o.deprecatedFunction===t)){t._superPropertyType="set",t._superPropertyName=s,u=!0;break}}l=i}return D(e,t._superPropertyType,t._superPropertyName)},T=function(){if("function"!=typeof T.caller)throw new TypeError("Can't get super without caller. Use this.superForValue(methodName) if using strict mode.");var e=P(this,T.caller);return"function"==typeof e?e.bind(this):Function.noop},D=function(e,t,n){var i,r,a,s,o,l=e,u=n+"."+t;if(e._superContext||m.defineProperty(e,"_superContext",{value:{}}),e._superContext[u])l=e._superContext[u];else for(l=e;null!==l&&(!l.hasOwnProperty(n)||(a=Object.getOwnPropertyDescriptor(l,n),"function"!=typeof a[t]));)l=Object.getPrototypeOf(l);if(s=l.constructor,s._superCache&&s._superCache[u])return o=function(e,t,n,i){return function(){t._superContext[e]=n;var r=i.apply(t,arguments);return delete t._superContext[e],r}}(u,e,s._superCache[u].owner,s._superCache[u].func);for(r=l;i===void 0&&(r=Object.getPrototypeOf(r));)if(r._superDependencies||m.defineProperty(r,"_superDependencies",{value:{}}),r._superDependencies[u]||(r._superDependencies[u]=[]),r._superDependencies[u].push(s),a=Object.getOwnPropertyDescriptor(r,n)){if("function"==typeof a[t]){i=a[t];break}break}return"function"==typeof i?(o=function(e,t,n,i){return function(){t._superContext[e]=n;var r=i.apply(t,arguments);return delete t._superContext[e],r}}(u,e,r,i),s._superCache||m.defineProperty(s,"_superCache",{value:{}}),s._superCache[u]={func:i,owner:r},o):Function.noop},C=function(e){return D(this,"value",e)},S=function(e){return D(this,"get",e)},E=function(e){return D(this,"set",e)};m.defineProperty(m,"super",{get:T,enumerable:!1}),m.defineProperty(m.prototype,"super",{get:T,enumerable:!1}),m.defineProperty(m,"superForValue",{value:C,enumerable:!1}),m.defineProperty(m.prototype,"superForValue",{value:C,enumerable:!1}),m.defineProperty(m,"superForGet",{value:S,enumerable:!1}),m.defineProperty(m.prototype,"superForGet",{value:S,enumerable:!1}),m.defineProperty(m,"superForSet",{value:E,enumerable:!1}),m.defineProperty(m.prototype,"superForSet",{value:E,enumerable:!1}),m.defineProperty(m,"getSerializablePropertyNames",{value:function(e){var t=[],n=e._serializableAttributeProperties;if(n)for(var i in n)n[i]&&t.push(i);return t}}),m.defineProperty(m,"getPropertyAttribute",{value:function(e,t,n){var i=a+n+r,s=e[i];return s?s[t]:void 0}}),m.defineProperty(m,"getPropertyAttributes",{value:function(e,t){var n={},i=a+t+r,s=e[i];if(s){for(var o in s)n[o]=s[o];return n}}});var O={isInstance:{value:!0}},x={objectName:{value:"Function"},isInstance:{value:!0}};m.defineProperty(m,"getInfoForObject",{value:function(e){var t,n;if(L.call(e,"_montage_metadata"))return e._montage_metadata;if(t=e._montage_metadata||e.constructor&&e.constructor._montage_metadata||null,n=e.constructor===Function?x:O,e===Object.prototype)return Object.create(t,n);try{return Object.defineProperty(e,"_montage_metadata",{enumerable:!1,writable:!0,value:Object.create(t,n)})._montage_metadata}catch(i){return e._montage_metadata=Object.create(t,n)}}});var z=e("./uuid");"undefined"!=typeof window&&(window.uuid=z.generate());var L=Object.prototype.hasOwnProperty,Y=function(){var e=z.generate(),t=m.getInfoForObject(this);try{null!==t&&t.isInstance===!1?(this._uuid=e,Object.defineProperty(this,"uuid",{get:function(){return this.hasOwnProperty("uuid")?this._uuid:Y.call(this)}})):(t.isInstance&&Object.defineProperty(this,"uuid",{configurable:!0,enumerable:!1,writable:!1,value:e}),!(this instanceof Element)&&t.isInstance&&o in(Object.getOwnPropertyDescriptor(this,"uuid")||{})&&s in this||(this._uuid=e))}catch(n){}return this._uuid=e,e},k=function k(){return L.call(this,"_uuid")?this._uuid:Y.call(this)};Object.defineProperty(Object.prototype,"_uuid",{enumerable:!1,value:null,writable:!0}),Object.defineProperty(Object.prototype,"uuid",{configurable:!0,get:k,set:function(){}}),m.defineProperty(m,"identifier",{value:null,serializable:!0}),m.defineProperty(m.prototype,"identifier",{value:null,serializable:!0}),m.defineProperty(m.prototype,"equals",{value:function(e){return e?this===e||this.uuid===e.uuid:!1}}),m.defineProperty(m,"equals",{value:m.prototype.equals}),m.defineProperty(m.prototype,"callDelegateMethod",{value:function(e){var t,n,i=this.delegate;return"string"==typeof this.identifier&&(t=this.identifier+e.toCapitalized(),i&&"function"==typeof(n=i[t]))?(c.shift.call(arguments),n.apply(i,arguments)):i&&"function"==typeof(n=i[e])?(c.shift.call(arguments),n.apply(i,arguments)):void 0}});var A=e("collections/listen/property-changes");Object.addEach(m,A.prototype),Object.addEach(m.prototype,A.prototype);var N=t.Bindings=e("frb"),I={defineBinding:{value:function(e,t,n){return N.defineBinding(this,e,t,n)}},defineBindings:{value:function(e,t){return N.defineBindings(this,e,t)}},cancelBinding:{value:function(e){return N.cancelBinding(this,e)}},cancelBindings:{value:function(){return N.cancelBindings(this)}},getBinding:{value:function(e){return N.getBinding(this,e)}},getBindings:{value:function(){return N.getBindings(this)}}};m.defineProperties(m,I),m.defineProperties(m.prototype,I);var X=e("collections/weak-map"),j=e("collections/map"),F=e("frb/parse"),B=e("frb/evaluate"),R=e("frb/assign");e("frb/observe"),e("frb/bind");var H=e("frb/compile-observer"),V=e("frb/scope"),W=e("frb/observers"),U=W.autoCancelPrevious,q=new X,K={getPath:{value:function(e,t,n,i){return B(e,this,t||this,n,i)}},setPath:{value:function(e,t,n,i,r){return R(this,e,t,n||this,i,r)}},observePath:{value:function(e,t){var n=F(e),i=H(n);return i(U(t),new V(this))}},addRangeAtPathChangeListener:{value:function(e,t,n,i,r,a){function s(e,i,r){if(t[n])t[n](e,i,r);else{if(!t.call)throw Error("Can't dispatch range change to "+t);t.call(null,e,i,r)}}n=n||"handleRangeChange";var o=[];return this.addPathChangeListener(e,function(e){return e&&e.toArray&&e.addRangeChangeListener?(s(e.toArray(),o.toArray(),0),o=e,e.addRangeChangeListener(s)):(e=[],s(e,o,0),o=e,void 0)},void 0,void 0,i,r,a)}},getPathChangeDescriptors:{value:function(){return q.has(this)||q.set(this,{}),q.get(this)}},getPathChangeDescriptor:{value:function(e,t,n){var i=m.getPathChangeDescriptors.call(this);return Object.owns(i,e)||(i[e]={willChangeListeners:new j,changeListeners:new j}),i=i[e],i=n?i.willChangeListeners:i.changeListeners,i.has(t)||i.set(t,{path:e,handler:t,beforeChange:n,cancel:Function.noop}),i.get(t)}},addPathChangeListener:{value:function(e,t,n,i,r,a,s){var o=this;t=t||Function.noop;var l=m.getPathChangeDescriptor.call(this,e,t,i);l.cancel();var u,h,c,d=F(e);if(t===Function.noop)c=function(t){if(h)throw Error("Path change handler needs a handler because it emits new values when the source changes: "+JSON.stringify(e));h=!0,u=t};else if(n)c=function(i){return t[n].call(t,i,e,o)};else if(t.handlePathChange)c=function(n){return t.handlePathChange.call(t,n,e,o)};else{if("function"!=typeof t)throw Error("Can't recognize handler type: "+t+". Must be function or delegate implementing handlePathChange.");c=function(n){return t.call(o,n,e,o)}}var p=H(d),f=new V(this);f.beforeChange=i,f.parameters=r,f.document=a,f.components=s;var v=p(U(c),f);return l.cancel=v,h?u:v}},removePathChangeListener:{value:function(e,t,n){t=t||Function.noop;var i=m.getPathChangeDescriptors.call(this),r=n?"willChangeListeners":"changeListeners";if(!Object.owns(i,e))throw Error("Can't find "+r+" for "+JSON.stringify(e));var a=i[e],s=a[r];if(!s.has(t))throw Error("Can't find "+r+" for "+JSON.stringify(e));var o=s.get(t);o.cancel(),s["delete"](t),0===a.willChangeListeners.length&&0===a.changeListeners.length&&delete i[e];for(var l in i)return;q["delete"](this)}},addBeforePathChangeListener:{value:function(e,t,n,i,r,a){return m.addPathChangeListener.call(this,e,t,n,!0,i,r,a)}},removeBeforePathChangeListener:{value:function(e,t){return m.removePathChangeListener.call(this,e,t,!0)}}};m.defineProperties(m,K),m.defineProperties(m.prototype,K),e("./serialization/bindings"),t._blueprintModuleIdDescriptor={serializable:!1,enumerable:!1,get:function(){var e=m.getInfoForObject(this),t=e&&!e.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(t,"_blueprintModuleId")||!t._blueprintModuleId){e=m.getInfoForObject(t);var n=e.moduleId,i=n.lastIndexOf("/"),r=n.lastIndexOf(".");i=-1===i?0:i+1,r=-1===r?n.length:r,r=i>r?n.length:r,m.defineProperty(t,"_blueprintModuleId",{enumerable:!1,value:n.slice(0,r)+".meta"})}return t._blueprintModuleId}},t._blueprintDescriptor={serializable:!1,enumerable:!1,get:function(){var n=m.getInfoForObject(this),i=n&&!n.isInstance?this:this.constructor;if(!Object.getOwnPropertyDescriptor(i,"_blueprint")||!i._blueprint){var r=i.blueprintModuleId;if(""===r)throw new TypeError("Blueprint moduleId undefined for the module '"+JSON.stringify(i)+"'");t._blueprintDescriptor.BlueprintModulePromise||(t._blueprintDescriptor.BlueprintModulePromise=e.async("core/meta/module-blueprint").get("ModuleBlueprint")),m.defineProperty(i,"_blueprint",{enumerable:!1,value:t._blueprintDescriptor.BlueprintModulePromise.then(function(e){var t=m.getInfoForObject(i);return e.getBlueprintWithModuleId(r,t.require).fail(function(t){if(-1!==t.message.indexOf("Can't XHR"))return e.createDefaultBlueprintForObject(i).then(function(e){return e});throw t})})})}return i._blueprint},set:function(t){var n,i=m.getInfoForObject(this),r=i&&!i.isInstance?this:this.constructor;if(null===t)n=null;else{if("function"==typeof t.then)throw new TypeError("Object blueprint should not be a promise");t.blueprintInstanceModule=r.blueprintModule,n=e("./promise").Promise.resolve(t)}m.defineProperty(r,"_blueprint",{enumerable:!1,value:n})}}}});