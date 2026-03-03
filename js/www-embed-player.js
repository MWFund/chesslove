(function(){'use strict';var n,aa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;
a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
var ea=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=aa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),fa;
if(typeof Object.setPrototypeOf=="function")fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ka={};try{ka.__proto__=ia;ha=ka.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=fa;
function v(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ga=b.prototype}
function na(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function z(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:na(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function A(a){if(!(a instanceof Array)){a=z(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function oa(a){return pa(a,a)}
function pa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function qa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ra=typeof Object.assign=="function"?Object.assign:function(a,b){if(a==null)throw new TypeError("No nullish arg");a=Object(a);for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)qa(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ra});
function sa(a){if(!(a instanceof Object))throw new TypeError("Iterator result "+a+" is not an object");}
function B(){this.X=!1;this.I=null;this.i=void 0;this.h=1;this.G=this.M=0;this.oa=this.H=null}
function ta(a){if(a.X)throw new TypeError("Generator is already running");a.X=!0}
B.prototype.ja=function(a){this.i=a};
function ua(a,b){a.H={exception:b,ee:!0};a.h=a.M||a.G}
B.prototype.getNextAddressJsc=function(){return this.h};
B.prototype.getYieldResultJsc=function(){return this.i};
B.prototype.return=function(a){this.H={return:a};this.h=this.G};
B.prototype["return"]=B.prototype.return;B.prototype.Ka=function(a){this.H={v:a};this.h=this.G};
B.prototype.jumpThroughFinallyBlocks=B.prototype.Ka;B.prototype.yield=function(a,b){this.h=b;return{value:a}};
B.prototype.yield=B.prototype.yield;B.prototype.Ra=function(a,b){a=z(a);var c=a.next();sa(c);if(c.done)this.i=c.value,this.h=b;else return this.I=a,this.yield(c.value,b)};
B.prototype.yieldAll=B.prototype.Ra;B.prototype.v=function(a){this.h=a};
B.prototype.jumpTo=B.prototype.v;B.prototype.o=function(){this.h=0};
B.prototype.jumpToEnd=B.prototype.o;B.prototype.u=function(a,b){this.M=a;b!=void 0&&(this.G=b)};
B.prototype.setCatchFinallyBlocks=B.prototype.u;B.prototype.La=function(a){this.M=0;this.G=a||0};
B.prototype.setFinallyBlock=B.prototype.La;B.prototype.B=function(a,b){this.h=a;this.M=b||0};
B.prototype.leaveTryBlock=B.prototype.B;B.prototype.j=function(a){this.M=a||0;a=this.H.exception;this.H=null;return a};
B.prototype.enterCatchBlock=B.prototype.j;B.prototype.Z=function(a,b,c){c?this.oa[c]=this.H:this.oa=[this.H];this.M=a||0;this.G=b||0};
B.prototype.enterFinallyBlock=B.prototype.Z;B.prototype.fa=function(a,b){b=this.oa.splice(b||0)[0];(b=this.H=this.H||b)?b.ee?this.h=this.M||this.G:b.v!=void 0&&this.G<b.v?(this.h=b.v,this.H=null):this.h=this.G:this.h=a};
B.prototype.leaveFinallyBlock=B.prototype.fa;B.prototype.Da=function(a){return new va(a)};
B.prototype.forIn=B.prototype.Da;function va(a){this.j=a;this.h=[];for(var b in a)this.h.push(b);this.h.reverse()}
va.prototype.i=function(){for(;this.h.length>0;){var a=this.h.pop();if(a in this.j)return a}return null};
va.prototype.getNext=va.prototype.i;function wa(a){this.h=new B;this.i=a}
function xa(a,b){ta(a.h);var c=a.h.I;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return za(a)}
function ya(a,b,c,d){try{var e=b.call(a.h.I,c);sa(e);if(!e.done)return a.h.X=!1,e;var f=e.value}catch(g){return a.h.I=null,ua(a.h,g),za(a)}a.h.I=null;d.call(a.h,f);return za(a)}
function za(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.X=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ua(a.h,c)}a.h.X=!1;if(a.h.H){b=a.h.H;a.h.H=null;if(b.ee)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){ta(a.h);a.h.I?b=ya(a,a.h.I.next,b,a.h.ja):(a.h.ja(b),b=za(a));return b};
this.throw=function(b){ta(a.h);a.h.I?b=ya(a,a.h.I["throw"],b,a.h.ja):(ua(a.h,b),b=za(a));return b};
this.return=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ba(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function C(a){return Ba(new Aa(new wa(a)))}
function D(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||da});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ea});
u("Reflect.setPrototypeOf",function(a){return a?a:la?function(b,c){try{return la(b,c),!0}catch(d){return!1}}:null});
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return Ca(na(this))}});
return a});
function Ca(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
u("Promise",function(a){function b(g){this.ea=0;this.nb=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.M),reject:g(this.j)}};
b.prototype.M=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.o(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.fa(h,g):this.o(g)};
b.prototype.j=function(g){this.H(2,g)};
b.prototype.o=function(g){this.H(1,g)};
b.prototype.H=function(g,h){if(this.ea!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.ea);this.ea=g;this.nb=h;this.ea===2&&this.X();this.B()};
b.prototype.X=function(){var g=this;e(function(){if(g.G()){var h=da.console;typeof h!=="undefined"&&h.error(g.nb)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.nb;return k(g)};
b.prototype.B=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.Fc(h.resolve,h.reject)};
b.prototype.fa=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(x){try{l(r(x))}catch(y){m(y)}}:t}
var l,m,p=new b(function(r,t){l=r;m=t});
this.Fc(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Fc=function(g,h){function k(){switch(l.ea){case 1:g(l.nb);break;case 2:h(l.nb);break;default:throw Error("Unexpected state: "+l.ea);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=z(g),m=l.next();!m.done;m=l.next())d(m.value).Fc(h,k)})};
b.all=function(g){var h=z(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(x){return function(y){r[x]=y;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Fc(p(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||la});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("SuppressedError",function(a){function b(c,d,e){if(!(this instanceof b))return new b(c,d,e);e=Error(e);"stack"in e&&(this.stack=e.stack);this.message=e.message;this.error=c;this.suppressed=d}
if(a)return a;v(b,Error);b.prototype.name="SuppressedError";return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=z(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!qa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!qa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&qa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&qa(k,g)&&qa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&qa(k,g)&&qa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return Ca(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&qa(h[0],l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,entry:p}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=z(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(z([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=z(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(z([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Da(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Da(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Da(this,function(b){return b})}});
function Ga(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)qa(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ga(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)qa(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Da(this,function(b,c){return c})}});
u("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
u("Math.imul",function(a){return a?a:function(b,c){b=Number(b);c=Number(c);var d=b&65535,e=c&65535;return d*e+((b>>>16&65535)*e+d*(c>>>16&65535)<<16>>>0)|0}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ha=Ha||{},E=this||self;function G(a,b,c){a=a.split(".");c=c||E;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ia(a,b){var c=H("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function H(a,b){a=a.split(".");b=b||E;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ja(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Ka(a){var b=Ja(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function La(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ma(a){return Object.prototype.hasOwnProperty.call(a,Na)&&a[Na]||(a[Na]=++Oa)}
var Na="closure_uid_"+(Math.random()*1E9>>>0),Oa=0;function Ra(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Ta=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ra:Sa;return Ta.apply(null,arguments)}
function Ua(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Va(){return Date.now()}
function Wa(a){return a}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.Ga=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function Ya(a){var b=D.apply(1,arguments).filter(Boolean).join("&");if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")<0?"?":"&")+b}
function Za(a,b){return b?"&"+a+"="+encodeURIComponent(b):""}
function $a(a){var b=a.url;a=a.Sj;this.i=b;this.o=a;this.j=(new Date).getTime()-17040672E5;this.h={};for(var c=/[?&]([^&=]+)=([^&]*)/g;a=c.exec(b);)this.h[a[1]]=a[2]}
function ab(a){a=a.o;if(!a)return"";var b=Za("uap",a.platform)+Za("uapv",a.platformVersion)+Za("uafv",a.uaFullVersion)+Za("uaa",a.architecture)+Za("uam",a.model)+Za("uab",a.bitness);a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+";"+encodeURIComponent(c.version)}).join("|")));
a.wow64!=null&&(b+="&uaw="+Number(a.wow64));return b.slice(1)}
;function bb(a,b){if(b!==null&&b!==void 0){if(typeof b!=="object"&&typeof b!=="function")throw new TypeError("Object expected.");if(c===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");var c=b[Symbol.dispose]}if(typeof c!=="function")throw new TypeError("Object not disposable.");a.stack.push({value:b,dispose:c,async:!1})}return b}
function cb(a){function b(f){a.error=a.rb?new SuppressedError(f,a.error,"An error was suppressed during disposal."):f;a.rb=!0}
function c(){for(;d=a.stack.pop();)try{if(!d.async&&e===1)return e=0,a.stack.push(d),Promise.resolve().then(c);if(d.dispose){var f=d.dispose.call(d.value);if(d.async)return e|=2,Promise.resolve(f).then(c,function(g){b(g);return c()})}else e|=1}catch(g){b(g)}if(e===1)return a.rb?Promise.reject(a.error):Promise.resolve();
if(a.rb)throw a.error;}
var d,e=0;c()}
;function db(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,db);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
Xa(db,Error);db.prototype.name="CustomError";var eb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var fb=globalThis.trustedTypes,hb;function ib(){var a=null;if(!fb)return a;try{var b=function(c){return c};
a=fb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function jb(){hb===void 0&&(hb=ib());return hb}
;function kb(a){this.h=a}
kb.prototype.toString=function(){return this.h+""};
function lb(a){var b=jb();a=b?b.createScriptURL(a):a;return new kb(a)}
function mb(a){if(a instanceof kb)return a.h;throw Error("");}
;var nb=oa([""]),ob=pa(["\x00"],["\\0"]),pb=pa(["\n"],["\\n"]),qb=pa(["\x00"],["\\u0000"]);function rb(a){return a.toString().indexOf("`")===-1}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.Nf=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);b!==void 0&&(a.href=b)}
;function Ab(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h+""};function Cb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Db(a){this.h=a}
Db.prototype.toString=function(){return this.h+""};
function Eb(a){var b=jb();a=b?b.createScript(a):a;return new Db(a)}
function Fb(a){if(a instanceof Db)return a.h;throw Error("");}
;function Gb(a){var b=Cb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Hb(a,b){a.src=mb(b);Gb(a)}
;function Ib(){this.h=Jb[0].toLowerCase()}
Ib.prototype.toString=function(){return this.h};function Lb(a){var b="true".toString(),c=[new Ib];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ib)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Mb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Nb(a,b){if(b instanceof kb)a.href=mb(b).toString(),a.rel="stylesheet";else{if(Mb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Ob=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Pb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Qb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Rb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Sb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Pb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Tb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Ub(a,b){b=Ob(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Vb(a){var b=a.length;if(b>0){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Wb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Xb(a,b){return a>b?1:a<b?-1:0}
;function Yb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Zb(a){var b=H("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||E.$googDebugFname||b}catch(g){e="Not available",c=!0}b=$b(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ac[c])c=ac[c];else{c=String(c);if(!ac[c]){var f=/function\s+([^\(]+)/m.exec(c);ac[c]=f?f[1]:"[Anonymous]"}c=ac[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function $b(a,b){b||(b={});b[bc(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[bc(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=$b(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[bc(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=$b(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function bc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var ac={};function cc(a){return decodeURIComponent(a.replace(/\+/g," "))}
function dc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(a){return a?decodeURI(a):a}
function hc(a){return fc(a.match(ec)[3]||null)}
function ic(a){return fc(a.match(ec)[5]||null)}
function jc(a){var b=a.match(ec);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function kc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function lc(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(d>=0){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?cc(e):"")}}}
function mc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)mc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function nc(a){var b=[],c;for(c in a)mc(c,a[c],b);return b.join("&")}
function oc(a,b){b=nc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function pc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var qc=/#|$/,rc=/[?&]($|#)/;function sc(a,b){for(var c=a.search(qc),d=0,e,f=[];(e=pc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(rc,"$1")}
;function tc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function uc(a,b,c){c=c===void 0?Error():c;var d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.code=a;b+=":";c instanceof Error?(this.message=b+c.message,this.stack=c.stack||""):(this.message=b+String(c),this.stack="");Object.setPrototypeOf(this,this.constructor.prototype)}
v(uc,Error);function vc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ka(d)?wc.apply(null,d):vc(d)}}
;function J(){this.J=this.J;this.H=this.H}
J.prototype.J=!1;J.prototype.dispose=function(){this.J||(this.J=!0,this.ba())};
J.prototype[Symbol.dispose]=function(){this.dispose()};
function xc(a,b){a.addOnDisposeCallback(Ua(vc,b))}
J.prototype.addOnDisposeCallback=function(a,b){this.J?b!==void 0?a.call(b):a():(this.H||(this.H=[]),b&&(a=a.bind(b)),this.H.push(a))};
J.prototype.ba=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function yc(){var a=zc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:tc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new Ac(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new Ac(f))}))})}
function Ac(a){J.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Ub=this.vm.p;this.j=this.qc.bind(this);this.addOnDisposeCallback(function(){return void Bc(b)})}
v(Ac,J);Ac.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.Ma&&{c:a.Ma},a.hd&&{s:a.hd},a.Jd!==void 0&&{p:a.Jd}))};
Ac.prototype.qc=function(a){this.vm.e(a)};
Ac.prototype.Gc=function(a,b){return this.vm.c(a,b,!1)};
function Bc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
Ac.prototype.xc=function(){return this.vm.l()};function Cc(a){var b,c,d={Ma:a.c,qd:a.e,Wf:(b=a.mc)!=null?b:!1,Xf:(c=a.me)!=null?c:!1};a.co&&(d.Dc={Td:a.co.c,Ue:a.co.a,Fg:a.co.s});return d}
function Dc(a){return function(){var b;return C(function(c){if(c.h==1)return c.yield(a(),2);b=c.i;return c.return({f:function(){return b.Tb.promise},
c:function(d){if(d>150)var e=!1;else try{b.cache=new Ec(d,b.logger),e=!0}catch(f){Fc(b,new uc(22,"GBJ:init",f)),e=!1}return e},
m:function(d){return b.mb(Cc(d))},
mws:function(d){return b.Uc(Cc(d))}})})}}
function Gc(a,b){var c=zc();c=c===void 0?"bevasrsg":c;b={s:function(f){var g;return a.snapshot(Object.assign({},f.c&&{Ma:f.c},f.s&&{hd:f.s},{Oj:(g=f.p)!=null?g:!0}))},
e:function(f){var g;return void((g=a.qc)==null?void 0:g.call(a,f))},
c:function(f,g){return a.Gc(f,g)},
p:a.Ub,l:function(){return a.xc()},
wpc:b?Dc(b):void 0};var d=window===window.top?window:tc()?window:window.top,e=d[c];if(e){e.bevasrs=b;if(e.nqfbel!==void 0)for(c=z(e.nqfbel),d=c.next();!d.done;d=c.next())d=d.value,d(b);e.nqfbel=void 0}else e={},e=(e.bevasrs=b,e.nqfbel=void 0,e),d[c]=e}
;function Hc(a){var b=b===void 0?53:b;var c=[];Ic(a,Jc,6).forEach(function(d){Kc(d,2)<=b&&c.push(Kc(d,1))});
return c}
function Lc(a){var b=b===void 0?53:b;var c=[];Ic(a,Jc,6).forEach(function(d){Kc(d,2)>b&&c.push(Kc(d,1))});
return c}
;function Mc(a){a.then(function(){},function(){})}
function Nc(){J.apply(this,arguments);this.i=1}
v(Nc,J);Nc.prototype.share=function(){if(this.J)throw Error("E:AD");this.i++;return this};
Nc.prototype.dispose=function(){--this.i||J.prototype.dispose.call(this)};function Oc(a){return{fieldType:2,fieldName:a}}
function Pc(a){return{fieldType:3,fieldName:a}}
;function Qc(a){this.h=a;a.ac("/client_streamz/bg/frs",Pc("mk"))}
Qc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Rc(a){this.h=a;a.ac("/client_streamz/bg/wrl",Pc("mn"),Oc("ac"),Oc("sc"),Pc("rk"),Pc("mk"))}
Rc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Sc(a){this.h=a;a.Db("/client_streamz/bg/ec",Pc("en"),Pc("mk"))}
Sc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/ec",a,b)};
function Tc(a){this.h=a;a.ac("/client_streamz/bg/el",Pc("en"),Pc("mk"))}
Tc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Uc(a){this.h=a;a.Db("/client_streamz/bg/cec",Oc("ec"),Pc("mk"))}
Uc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/cec",a,b)};
function Vc(a){this.h=a;a.Db("/client_streamz/bg/po/csc",Oc("cs"),Pc("mk"))}
Vc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/po/csc",a,b)};
function Wc(a){this.h=a;a.Db("/client_streamz/bg/po/ctav",Pc("av"),Pc("mk"))}
Wc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/po/ctav",a,b)};
function Xc(a){this.h=a;a.Db("/client_streamz/bg/po/cwsc",Pc("su"),Pc("mk"))}
Xc.prototype.la=function(a,b){this.h.Ab("/client_streamz/bg/po/cwsc",a,b)};
function Yc(a){this.h=a;a.ac("/client_streamz/bg/od/p",Pc("mk"))}
Yc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/od/p",a,b)};
function Zc(a){this.h=a;a.ac("/client_streamz/bg/od/n",Pc("et"),Pc("mk"))}
Zc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/od/n",a,b,c)};var $c,ad=typeof String.prototype.isWellFormed==="function",bd=typeof TextEncoder!=="undefined";
function cd(a){var b=!1;b=b===void 0?!1:b;if(bd){if(b&&(ad?!a.isWellFormed():/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)))throw Error("Found an unpaired surrogate");a=($c||($c=new TextEncoder)).encode(a)}else{for(var c=0,d=new Uint8Array(3*a.length),e=0;e<a.length;e++){var f=a.charCodeAt(e);if(f<128)d[c++]=f;else{if(f<2048)d[c++]=f>>6|192;else{if(f>=55296&&f<=57343){if(f<=56319&&e<a.length){var g=a.charCodeAt(++e);if(g>=56320&&g<=57343){f=(f-55296)*1024+g-56320+
65536;d[c++]=f>>18|240;d[c++]=f>>12&63|128;d[c++]=f>>6&63|128;d[c++]=f&63|128;continue}else e--}if(b)throw Error("Found an unpaired surrogate");f=65533}d[c++]=f>>12|224;d[c++]=f>>6&63|128}d[c++]=f&63|128}}a=c===d.length?d:d.subarray(0,c)}return a}
;function dd(a){E.setTimeout(function(){throw a;},0)}
;function ed(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;var fd=Ia(610401301,!1),gd=Ia(748402147,!0),hd=Ia(824656860,!0);function id(){var a=E.navigator;return a&&(a=a.userAgent)?a:""}
var jd,kd=E.navigator;jd=kd?kd.userAgentData||null:null;function ld(a){if(!fd||!jd)return!1;for(var b=0;b<jd.brands.length;b++){var c=jd.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function K(a){return id().indexOf(a)!=-1}
;function md(){return fd?!!jd&&jd.brands.length>0:!1}
function nd(){return md()?!1:K("Opera")}
function od(){return K("Firefox")||K("FxiOS")}
function pd(){return md()?ld("Chromium"):(K("Chrome")||K("CriOS"))&&!(md()?0:K("Edge"))||K("Silk")}
;function qd(){return fd?!!jd&&!!jd.platform:!1}
function rd(){return K("iPhone")&&!K("iPod")&&!K("iPad")}
;function sd(a){sd[" "](a);return a}
sd[" "]=function(){};var td=nd(),ud=md()?!1:K("Trident")||K("MSIE"),vd=K("Edge"),wd=K("Gecko")&&!(id().toLowerCase().indexOf("webkit")!=-1&&!K("Edge"))&&!(K("Trident")||K("MSIE"))&&!K("Edge"),xd=id().toLowerCase().indexOf("webkit")!=-1&&!K("Edge");xd&&K("Mobile");qd()||K("Macintosh");qd()||K("Windows");(qd()?jd.platform==="Linux":K("Linux"))||qd()||K("CrOS");var yd=qd()?jd.platform==="Android":K("Android");rd();K("iPad");K("iPod");rd()||K("iPad")||K("iPod");id().toLowerCase().indexOf("kaios");od();var zd=rd()||K("iPod"),Ad=K("iPad");!K("Android")||pd()||od()||nd()||K("Silk");pd();var Bd=K("Safari")&&!(pd()||(md()?0:K("Coast"))||nd()||(md()?0:K("Edge"))||(md()?ld("Microsoft Edge"):K("Edg/"))||(md()?ld("Opera"):K("OPR"))||od()||K("Silk")||K("Android"))&&!(rd()||K("iPad")||K("iPod"));var Cd={},Dd=null;function Ed(a,b){Ka(a);b===void 0&&(b=0);Fd();b=Cd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Gd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Hd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Hd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Dd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Fd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Fd(){if(!Dd){Dd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));Cd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Dd[f]===void 0&&(Dd[f]=e)}}}}
;var Id=typeof Uint8Array!=="undefined",Jd=!ud&&typeof btoa==="function",Kd=/[-_.]/g,Ld={"-":"+",_:"/",".":"="};function Md(a){return Ld[a]||""}
var Nd={};function Pd(a,b){Qd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
function Rd(){return Sd||(Sd=new Pd(null,Nd))}
function Td(a){return new Uint8Array(Ud(a)||0)}
Pd.prototype.sizeBytes=function(){var a=Ud(this);return a?a.length:0};
function Ud(a){Qd(Nd);var b=a.h;if(!(b==null||Id&&b!=null&&b instanceof Uint8Array))if(typeof b==="string")if(Jd){b=Kd.test(b)?b.replace(Kd,Md):b;b=atob(b);for(var c=new Uint8Array(b.length),d=0;d<b.length;d++)c[d]=b.charCodeAt(d);b=c}else b=Gd(b);else Ja(b),b=null;return b==null?b:a.h=b}
var Sd;function Qd(a){if(a!==Nd)throw Error("illegal external caller");}
;var Vd=void 0;function Wd(a){a=Error(a);Yb(a,"warning");return a}
function Xd(a,b){if(a!=null){var c;var d=(c=Vd)!=null?c:Vd={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),Yb(a,"incident"),dd(a))}}
;function Yd(){return typeof BigInt==="function"}
;var Zd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function $d(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var ae=$d("jas",void 0,!0),be=$d(void 0,"1oa"),ce=$d(void 0,Symbol()),de=$d(void 0,"0ub"),ee=$d(void 0,"0ubs"),fe=$d(void 0,"0ubsb"),ge=$d(void 0,"0actk"),he=$d("m_m","xj",!0),ie=$d(void 0,"vps"),je=$d();Math.max.apply(Math,A(Object.values({Ti:1,Si:2,Ri:4,Xi:8,Zi:16,Vi:32,bh:64,Pi:128,hh:256,Yi:512,ih:1024,Qi:2048,Wi:4096,Ui:8192})));var ke={Lf:{value:0,configurable:!0,writable:!0,enumerable:!1}},le=Object.defineProperties,L=Zd?ae:"Lf",me,ne=[];oe(ne,7);me=Object.freeze(ne);function pe(a,b){Zd||L in a||le(a,ke);a[L]|=b}
function oe(a,b){Zd||L in a||le(a,ke);a[L]=b}
;var qe={};function re(a,b){return b===void 0?a.h!==se&&!!(2&(a.D[L]|0)):!!(2&b)&&a.h!==se}
var se={};function te(a,b){if(a!=null)if(typeof a==="string")a=a?new Pd(a,Nd):Rd();else if(a.constructor!==Pd)if(Id&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new Pd(new Uint8Array(a),Nd):Rd();else{if(!b)throw Error();a=void 0}return a}
var ue=Object.freeze({});function ve(a,b,c){var d=b&128?0:-1,e=a.length,f;if(f=!!e)f=a[e-1],f=f!=null&&typeof f==="object"&&f.constructor===Object;var g=e+(f?-1:0);for(b=b&128?1:0;b<g;b++)c(b-d,a[b]);if(f){a=a[e-1];for(var h in a)!isNaN(h)&&c(+h,a[h])}}
var we={};function xe(a){a.pj=!0;return a}
;var ye=xe(function(a){return typeof a==="number"}),ze=xe(function(a){return typeof a==="string"}),Ae=xe(function(a){return typeof a==="boolean"});
function Be(){var a=Ce;return xe(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var De=xe(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"}),Ee=xe(function(a){return!!a&&(typeof a==="object"||typeof a==="function")});var Fe=typeof E.BigInt==="function"&&typeof E.BigInt(0)==="bigint";function Ge(a){var b=a;if(ze(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ye(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Fe?BigInt(a):a=Ae(a)?a?"1":"0":ze(a)?a.trim()||"0":String(a)}
var Me=xe(function(a){return Fe?a>=He&&a<=Ie:a[0]==="-"?Je(a,Ke):Je(a,Le)}),Ke=Number.MIN_SAFE_INTEGER.toString(),He=Fe?BigInt(Number.MIN_SAFE_INTEGER):void 0,Le=Number.MAX_SAFE_INTEGER.toString(),Ie=Fe?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Je(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var Ne=0,Oe=0,Pe;function Qe(a){var b=a>>>0;Ne=b;Oe=(a-b)/4294967296>>>0}
function Re(a){if(a<0){Qe(0-a);var b=z(Se(Ne,Oe));a=b.next().value;b=b.next().value;Ne=a>>>0;Oe=b>>>0}else Qe(a)}
function Te(a,b){var c=b*4294967296+(a>>>0);return Number.isSafeInteger(c)?c:Ue(a,b)}
function Ue(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Yd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+Ve(c)+Ve(a));return c}
function Ve(a){a=String(a);return"0000000".slice(a.length)+a}
function We(){var a=Ne,b=Oe;b&2147483648?Yd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=z(Se(a,b)),a=b.next().value,b=b.next().value,a="-"+Ue(a,b)):a=Ue(a,b);return a}
function Xe(a){if(a.length<16)Re(Number(a));else if(Yd())a=BigInt(a),Ne=Number(a&BigInt(4294967295))>>>0,Oe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");Oe=Ne=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Oe*=1E6,Ne=Ne*1E6+d,Ne>=4294967296&&(Oe+=Math.trunc(Ne/4294967296),Oe>>>=0,Ne>>>=0);b&&(b=z(Se(Ne,Oe)),a=b.next().value,b=b.next().value,Ne=a,Oe=b)}}
function Se(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Ye(a){return Array.prototype.slice.call(a)}
;var Ze=typeof BigInt==="function"?BigInt.asIntN:void 0,$e=typeof BigInt==="function"?BigInt.asUintN:void 0,af=Number.isSafeInteger,bf=Number.isFinite,cf=Math.trunc;function df(a){return a.displayName||a.name||"unknown type name"}
function ef(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Ja(a)+": "+a);return a}
var ff=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function gf(a){switch(typeof a){case "bigint":return!0;case "number":return bf(a);case "string":return ff.test(a);default:return!1}}
function hf(a){if(typeof a!=="number")throw Wd("int32");if(!bf(a))throw Wd("int32");return a|0}
function jf(a){return a==null?a:hf(a)}
function kf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a|0:void 0}
function lf(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return bf(a)?a>>>0:void 0}
function mf(a){var b=void 0;b!=null||(b=hd?1024:0);if(!gf(a))throw Wd("int64");var c=typeof a;switch(b){case 512:switch(c){case "string":return nf(a);case "bigint":return String(Ze(64,a));default:return of(a)}case 1024:switch(c){case "string":return pf(a);case "bigint":return Ge(Ze(64,a));default:return qf(a)}case 0:switch(c){case "string":return nf(a);case "bigint":return Ge(Ze(64,a));default:return rf(a)}default:return Ab(b,"Unknown format requested type for int64")}}
function sf(a){return a==null?a:mf(a)}
function tf(a){a.indexOf(".");var b=a.length;if(a[0]==="-"?b<20||b===20&&a<="-9223372036854775808":b<19||b===19&&a<="9223372036854775807")return a;Xe(a);return We()}
function rf(a){gf(a);a=cf(a);if(!af(a)){Re(a);var b=Ne,c=Oe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=Te(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function of(a){gf(a);a=cf(a);af(a)?a=String(a):(Re(a),a=We());return a}
function nf(a){gf(a);var b=cf(Number(a));if(af(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return tf(a)}
function pf(a){var b=cf(Number(a));if(af(b))return Ge(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Yd()?Ge(Ze(64,BigInt(a))):Ge(tf(a))}
function qf(a){return af(a)?Ge(rf(a)):Ge(of(a))}
function uf(a){if(a==null)return a;if(typeof a==="bigint")return Me(a)?a=Number(a):(a=Ze(64,a),a=Me(a)?Number(a):String(a)),a;if(gf(a))return typeof a==="number"?rf(a):nf(a)}
function vf(a){var b=typeof a;if(a==null)return a;if(b==="bigint")return Ge(Ze(64,a));if(gf(a))return b==="string"?pf(a):qf(a)}
function wf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String(Ze(64,a));if(gf(a)){if(b==="string")return nf(a);if(b==="number")return rf(a)}}
function xf(a){if(a==null)return a;var b=typeof a;if(b==="bigint")return String($e(64,a));if(gf(a)){if(b==="string")return gf(a),b=cf(Number(a)),af(b)&&b>=0?a=String(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a.indexOf("."),a[0]==="-"?b=!1:(b=a.length,b=b<20?!0:b===20&&a<="18446744073709551615"),b||(Xe(a),a=Ue(Ne,Oe))),a;if(b==="number")return gf(a),a=cf(a),a>=0&&af(a)||(Re(a),a=Te(Ne,Oe)),a}}
function yf(a){if(typeof a!=="string")throw Error();return a}
function zf(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Af(a){return a==null||typeof a==="string"?a:void 0}
function Bf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+df(b)+" but got "+(a&&df(a.constructor)));}
function Cf(a,b,c){if(a!=null&&a[he]===qe)return a;if(Array.isArray(a)){var d=a[L]|0;c=d|c&32|c&2;c!==d&&oe(a,c);return new b(a)}}
;var Df={};function Ef(a){return a}
;function Ff(a){var b=Wa(ce);return b?a[b]:void 0}
var Gf={Gj:!0};function Hf(a,b){b<100||Xd(ee,1)}
;function If(a,b,c,d){var e=d!==void 0;d=!!d;var f=Wa(ce),g;!e&&Zd&&f&&(g=a[f])&&g.zf(Hf);f=[];var h=a.length;g=4294967295;var k=!1,l=!!(b&64),m=l?b&128?0:-1:void 0;if(!(b&1)){var p=h&&a[h-1];p!=null&&typeof p==="object"&&p.constructor===Object?(h--,g=h):p=void 0;if(l&&!(b&128)&&!e){k=!0;var r;g=((r=Jf)!=null?r:Ef)(g-m,m,a,p,void 0)+m}}b=void 0;for(r=0;r<h;r++){var t=a[r];if(t!=null&&(t=c(t,d))!=null)if(l&&r>=g){var x=r-m,y=void 0;((y=b)!=null?y:b={})[x]=t}else f[r]=t}if(p)for(var w in p)h=p[w],h!=
null&&(h=c(h,d))!=null&&(r=+w,t=void 0,l&&!Number.isNaN(r)&&(t=r+m)<g?f[t]=h:(r=void 0,((r=b)!=null?r:b={})[w]=h));b&&(k?f.push(b):f[g]=b);e&&Wa(ce)&&Ff(a);return f}
function Kf(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return Me(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[L]|0;return a.length===0&&b&1?void 0:If(a,b,Kf)}if(a!=null&&a[he]===qe)return Lf(a);if(a instanceof Pd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(Jd){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);b=btoa(c)}else b=Ed(b);a=a.h=b}return a}return}return a}
var Jf;function Mf(a,b){if(b){Jf=b==null||b===Ef||b[ie]!==Df?Ef:b;try{return Lf(a)}finally{Jf=void 0}}return Lf(a)}
function Lf(a){a=a.D;return If(a,a[L]|0,Kf)}
;var Nf,Of;function Pf(a){switch(typeof a){case "boolean":return Nf||(Nf=[0,void 0,!0]);case "number":return a>0?void 0:a===0?Of||(Of=[0,void 0]):[-a,void 0];case "string":return[0,a];case "object":return a}}
function M(a,b,c){return Qf(a,b,c,2048)}
function Qf(a,b,c,d){d=d===void 0?0:d;if(a==null){var e=32;c?(a=[c],e|=128):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");e=a[L]|0;if(gd&&1&e)throw Error("rfarr");2048&e&&!(2&e)&&Rf();if(e&256)throw Error("farr");if(e&64)return(e|d)!==e&&oe(a,e|d),a;if(c&&(e|=128,c!==a[0]))throw Error("mid");a:{c=a;e|=64;var f=c.length;if(f){var g=f-1,h=c[g];if(h!=null&&typeof h==="object"&&h.constructor===Object){b=e&128?0:-1;g-=b;if(g>=1024)throw Error("pvtlmt");for(var k in h)f=
+k,f<g&&(c[f+b]=h[k],delete h[k]);e=e&-16760833|(g&1023)<<14;break a}}if(b){k=Math.max(b,f-(e&128?0:-1));if(k>1024)throw Error("spvt");e=e&-16760833|(k&1023)<<14}}}oe(a,e|64|d);return a}
function Rf(){if(gd)throw Error("carr");Xd(ge,5)}
;function Sf(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[L]|0;a.length===0&&c&1?a=void 0:c&2||(!b||4096&c||16&c?a=Tf(a,c,!1,b&&!(c&16)):(pe(a,34),c&4&&Object.freeze(a)));return a}if(a!=null&&a[he]===qe)return b=a.D,c=b[L]|0,re(a,c)?a:Uf(a,b,c)?Vf(a,b):Tf(b,c);if(a instanceof Pd)return a}
function Vf(a,b,c){a=new a.constructor(b);c&&(a.h=se);a.i=se;return a}
function Tf(a,b,c,d){d!=null||(d=!!(34&b));a=If(a,b,Sf,d);d=32;c&&(d|=2);b=b&16769217|d;oe(a,b);return a}
function Wf(a){var b=a.D,c=b[L]|0;return re(a,c)?Uf(a,b,c)?Vf(a,b,!0):new a.constructor(Tf(b,c,!1)):a}
function Xf(a){if(a.h!==se)return!1;var b=a.D;b=Tf(b,b[L]|0);pe(b,2048);a.D=b;a.h=void 0;a.i=void 0;return!0}
function Yf(a){if(!Xf(a)&&re(a,a.D[L]|0))throw Error();}
function Zf(a,b){b===void 0&&(b=a[L]|0);b&32&&!(b&4096)&&oe(a,b|4096)}
function Uf(a,b,c){return c&2?!0:c&32&&!(c&4096)?(oe(b,c|2),a.h=se,!0):!1}
;var $f=Ge(0),ag={};function bg(a,b,c,d,e){Object.isExtensible(a);b=cg(a.D,b,c,e);if(b!==null||d&&a.i!==se)return b}
function cg(a,b,c,d){if(b===-1)return null;var e=b+(c?0:-1),f=a.length-1;if(!(f<1+(c?0:-1))){if(e>=f){var g=a[f];if(g!=null&&typeof g==="object"&&g.constructor===Object){c=g[b];var h=!0}else if(e===f)c=g;else return}else c=a[e];if(d&&c!=null){d=d(c);if(d==null)return d;if(!Object.is(d,c))return h?g[b]=d:a[e]=d,d}return c}}
function dg(a,b,c,d){Yf(a);var e=a.D;eg(e,e[L]|0,b,c,d);return a}
function eg(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1;if(g>=1+(e?0:-1)&&f>=g){var h=a[g];if(h!=null&&typeof h==="object"&&h.constructor===Object)return h[c]=d,b}if(f<=g)return a[f]=d,b;if(d!==void 0){var k;g=((k=b)!=null?k:b=a[L]|0)>>14&1023||536870912;c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f)):a[f]=d}return b}
function fg(a){return!!(2&a)&&!!(4&a)||!!(256&a)}
function gg(a){return te(a,!0)}
function hg(a){a=bg(a,1,void 0,void 0,gg);return a==null?Rd():a}
function ig(a,b,c){Yf(a);var d=a.D,e=d[L]|0;if(b==null)return eg(d,e,3),a;if(!Array.isArray(b))throw Wd();var f=b===me?7:b[L]|0,g=f,h=fg(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Ye(b),g=0,f=jg(f,e),k=!1);f|=5;h=4&f?512&f?512:1024&f?1024:0:void 0;h=h!=null?h:hd?1024:0;f|=h;for(var l=0;l<b.length;l++){var m=b[l],p=c(m,h);Object.is(m,p)||(k&&(b=Ye(b),g=0,f=jg(f,e),k=!1),b[l]=p)}f!==g&&(k&&(b=Ye(b),f=jg(f,e)),oe(b,f));eg(d,e,3,b);return a}
function kg(a,b,c,d){Yf(a);var e=a.D;eg(e,e[L]|0,b,c===""?void 0:c,d);return a}
function lg(a,b,c,d){Yf(a);a=a.D;var e=a[L]|0;if(d==null){var f=mg(a);if(ng(f,a,e,c)===b)f.set(c,0);else return}else{b===0||c.includes(b);f=mg(a);var g=ng(f,a,e,c);g!==b&&(g&&(e=eg(a,e,g)),f.set(c,b))}eg(a,e,b,d)}
function mg(a){if(Zd){var b;return(b=a[be])!=null?b:a[be]=new Map}if(be in a)return a[be];b=new Map;Object.defineProperty(a,be,{value:b});return b}
function ng(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];cg(b,g)!=null&&(e!==0&&(c=eg(b,c,e)),e=g)}a.set(d,e);return e}
function og(a,b,c,d,e){var f=!1;d=cg(a,d,e,function(g){var h=Cf(g,c,b);f=h!==g&&h!=null;return h});
if(d!=null)return f&&!re(d)&&Zf(a,b),d}
function pg(a,b,c,d){var e=a.D,f=e[L]|0;b=og(e,f,b,c,d);if(b==null)return b;f=e[L]|0;if(!re(a,f)){var g=Wf(b);g!==b&&(Xf(a)&&(e=a.D,f=e[L]|0),b=g,f=eg(e,f,c,b,d),Zf(e,f))}return b}
function Ic(a,b,c){var d=void 0===ue?2:4;var e=a.D,f=e,g=e[L]|0,h=re(a,g);e=h?1:d;d=e===3;var k=!h;(e===2||k)&&Xf(a)&&(f=a.D,g=f[L]|0);a=cg(f,c);h=Array.isArray(a)?a:me;var l=h===me?7:h[L]|0;a=l;2&g&&(a|=2);var m=a|1;if(a=!(4&m)){var p=h,r=g,t=!!(2&m);t&&(r|=2);for(var x=!t,y=!0,w=0,I=0;w<p.length;w++){var F=Cf(p[w],b,r);if(F instanceof b){if(!t){var S=re(F);x&&(x=!S);y&&(y=S)}p[I++]=F}}I<w&&(p.length=I);m|=4;m=y?m&-4097:m|4096;m=x?m|8:m&-9}m!==l&&(oe(h,m),2&m&&Object.freeze(h));if(k&&!(8&m||!h.length&&
(e===1||(e!==4?0:2&m||!(16&m)&&32&g)))){fg(m)&&(h=Ye(h),m=jg(m,g),g=eg(f,g,c,h));b=h;k=m;for(l=0;l<b.length;l++)p=b[l],m=Wf(p),p!==m&&(b[l]=m);k|=8;m=k=b.length?k|4096:k&-4097;oe(h,m)}b=h;k=h=m;e===1||(e!==4?0:2&h||!(16&h)&&32&g)?fg(h)||(h|=!b.length||a&&!(4096&h)||32&g&&!(4096&h||16&h)?2:256,h!==k&&oe(b,h),Object.freeze(b)):(e===2&&fg(h)&&(b=Ye(b),k=0,h=jg(h,g),g=eg(f,g,c,b)),fg(h)||(d||(h|=16),h!==k&&oe(b,h)));2&h||!(4096&h||16&h)||Zf(f,g);return b}
function qg(a,b){a!=null?Bf(a,b):a=void 0;return a}
function rg(a,b,c,d,e){d=qg(d,b);dg(a,c,d,e);d&&!re(d)&&Zf(a.D);return a}
function sg(a,b,c,d){Yf(a);var e=a.D,f=e[L]|0;if(d==null)return eg(e,f,c),a;if(!Array.isArray(d))throw Wd();for(var g=d===me?7:d[L]|0,h=g,k=fg(g),l=k||Object.isFrozen(d),m=!0,p=!0,r=0;r<d.length;r++){var t=d[r];Bf(t,b);k||(t=re(t),m&&(m=!t),p&&(p=t))}k||(g=m?13:5,g=p?g&-4097:g|4096);l&&g===h||(d=Ye(d),h=0,g=jg(g,f));g!==h&&oe(d,g);f=eg(e,f,c,d);2&g||!(4096&g||16&g)||Zf(e,f);return a}
function jg(a,b){return a=(2&b?a|2:a&-3)&-273}
function Kc(a,b,c){c=c===void 0?0:c;a=kf(bg(a,b));return a!=null?a:c}
function tg(a,b){var c=c===void 0?0:c;a=lf(bg(a,b));return a!=null?a:c}
function ug(a,b,c){c=c===void 0?$f:c;a=hd?bg(a,b,void 0,void 0,vf):vf(bg(a,b));return a!=null?a:c}
function vg(a,b,c,d){c=c===void 0?"":c;var e;return(e=Af(bg(a,b,d)))!=null?e:c}
function wg(a){var b=b===void 0?0:b;a=bg(a,1);a=a==null?a:bf(a)?a|0:void 0;return a!=null?a:b}
function xg(a,b,c){return dg(a,b,zf(c))}
function yg(a,b,c){if(c!=null){if(!bf(c))throw Wd("enum");c|=0}return dg(a,b,c)}
;function zg(a,b){this.i=a>>>0;this.h=b>>>0}
function Ag(a){if(!a)return Bg||(Bg=new zg(0,0));if(!/^\d+$/.test(a))return null;Xe(a);return new zg(Ne,Oe)}
var Bg;function Cg(a,b){this.i=a>>>0;this.h=b>>>0}
function Dg(a){if(!a)return Eg||(Eg=new Cg(0,0));if(!/^-?\d+$/.test(a))return null;Xe(a);return new Cg(Ne,Oe)}
var Eg;function Fg(){this.h=[]}
Fg.prototype.length=function(){return this.h.length};
Fg.prototype.end=function(){var a=this.h;this.h=[];return a};
function Gg(a,b,c){for(;c>0||b>127;)a.h.push(b&127|128),b=(b>>>7|c<<25)>>>0,c>>>=7;a.h.push(b)}
function Hg(a,b){for(;b>127;)a.h.push(b&127|128),b>>>=7;a.h.push(b)}
Fg.prototype.writeUint8=function(a){this.h.push(a>>>0&255)};
function Ig(a,b){a.h.push(b>>>0&255);a.h.push(b>>>8&255);a.h.push(b>>>16&255);a.h.push(b>>>24&255)}
Fg.prototype.writeInt8=function(a){this.h.push(a>>>0&255)};function Jg(){this.j=[];this.i=0;this.h=new Fg}
function Kg(a,b){b.length!==0&&(a.j.push(b),a.i+=b.length)}
function Lg(a,b){Hg(a.h,b*8+2);b=a.h.end();Kg(a,b);b.push(a.i);return b}
function Mg(a,b){var c=b.pop();for(c=a.i+a.h.length()-c;c>127;)b.push(c&127|128),c>>>=7,a.i++;b.push(c);a.i++}
function Ng(a,b,c){if(c!=null){switch(typeof c){case "string":Ag(c)}Hg(a.h,b*8+1);switch(typeof c){case "number":a=a.h;Qe(c);Ig(a,Ne);Ig(a,Oe);break;case "bigint":c=BigInt.asUintN(64,c);c=new zg(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));a=a.h;b=c.h;Ig(a,c.i);Ig(a,b);break;default:c=Ag(c),a=a.h,b=c.h,Ig(a,c.i),Ig(a,b)}}}
function Og(a,b,c){Hg(a.h,b*8+2);Hg(a.h,c.length);Kg(a,a.h.end());Kg(a,c)}
;function Pg(){function a(){throw Error();}
Object.setPrototypeOf(a,a.prototype);return a}
var Qg=Pg(),Rg=Pg(),Sg=Pg(),Tg=Pg(),Ug=Pg(),Vg=Pg(),Wg=Pg();function N(a,b,c){this.D=M(a,b,c)}
N.prototype.toJSON=function(){return Mf(this)};
N.prototype.serialize=function(a){return JSON.stringify(Mf(this,a))};
function Xg(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");pe(b,32);return new a(b)}
N.prototype.clone=function(){var a=this.D,b=a[L]|0;return Uf(this,a,b)?Vf(this,a,!0):new this.constructor(Tf(a,b,!1))};
N.prototype[he]=qe;N.prototype.toString=function(){return this.D.toString()};function Yg(a,b){this.md=a;a=Wa(Qg);this.h=!!a&&b===a||!1}
function Zg(a){var b=b===void 0?Qg:b;return new Yg(a,b)}
function $g(a,b,c,d,e){b=ah(b,d);b!=null&&(c=Lg(a,c),e(b,a),Mg(a,c))}
var bh=Zg($g),ch=Zg($g),dh=Symbol(),eh=Symbol(),fh,gh;
function hh(a){var b=ih,c=jh,d=a[dh];if(d)return d;d={};d.cj=a;d.he=Pf(a[0]);var e=a[1],f=1;e&&e.constructor===Object&&(d.extensions=e,e=a[++f],typeof e==="function"&&(d.Mf=!0,fh!=null||(fh=e),gh!=null||(gh=a[f+1]),e=a[f+=2]));for(var g={};e&&kh(e);){for(var h=0;h<e.length;h++)g[e[h]]=e;e=a[++f]}for(h=1;e!==void 0;){typeof e==="number"&&(h+=e,e=a[++f]);var k=void 0;if(e instanceof Yg)var l=e;else l=bh,f--;e=void 0;if((e=l)==null?0:e.h){e=a[++f];k=a;var m=f;typeof e==="function"&&(e=e(),k[m]=e);k=
e}e=a[++f];m=h+1;typeof e==="number"&&e<0&&(m-=e,e=a[++f]);for(;h<m;h++){var p=g[h];k?c(d,h,l,k,p):b(d,h,l,p)}}return a[dh]=d}
function kh(a){return Array.isArray(a)&&!!a.length&&typeof a[0]==="number"&&a[0]>0}
function ah(a,b){if(a instanceof N)return a.D;if(Array.isArray(a))return Qf(a,b[0],b[1])}
;function ih(a,b,c){a[b]=c.md}
function jh(a,b,c,d){var e,f,g=c.md;a[b]=function(h,k,l){return g(h,k,l,f||(f=hh(d).he),e||(e=lh(d)))}}
function lh(a){var b=a[eh];if(!b){var c=hh(a);b=function(d,e){return mh(d,e,c)};
a[eh]=b}return b}
function mh(a,b,c){ve(a,a[L]|0,function(d,e){if(e!=null){var f=nh(c,d);f?f(b,e,d):d<500||Xd(fe,3)}});
(a=Ff(a))&&a.zf(function(d,e,f){Kg(b,b.h.end());for(d=0;d<f.length;d++)Kg(b,Ud(f[d])||new Uint8Array(0))})}
function nh(a,b){var c=a[b];if(c)return c;if(c=a.extensions)if(c=c[b]){c=Array.isArray(c)?c[0]instanceof Yg?c:[ch,c]:[c,void 0];var d=c[0].md;if(c=c[1]){var e=lh(c),f=hh(c).he;c=a.Mf?gh(f,e):function(g,h,k){return d(g,h,k,f,e)}}else c=d;
return a[b]=c}}
;function oh(a,b,c){if(Array.isArray(b)){var d=b[L]|0;if(d&4)return b;for(var e=0,f=0;e<b.length;e++){var g=a(b[e]);g!=null&&(b[f++]=g)}f<e&&(b.length=f);a=d|1;c&&(a=(a|4)&-1537);a!==d&&oe(b,a);c&&a&2&&Object.freeze(b);return b}}
function ph(a,b,c){b=b==null||typeof b==="number"?b:b==="NaN"||b==="Infinity"||b==="-Infinity"?Number(b):void 0;b!=null&&(Hg(a.h,c*8+1),a=a.h,c=Pe||(Pe=new DataView(new ArrayBuffer(8))),c.setFloat64(0,+b,!0),Ne=c.getUint32(0,!0),Oe=c.getUint32(4,!0),Ig(a,Ne),Ig(a,Oe))}
function qh(a,b,c){b=wf(b);if(b!=null){switch(typeof b){case "string":Dg(b)}if(b!=null)switch(Hg(a.h,c*8),typeof b){case "number":a=a.h;Re(b);Gg(a,Ne,Oe);break;case "bigint":c=BigInt.asUintN(64,b);c=new Cg(Number(c&BigInt(4294967295)),Number(c>>BigInt(32)));Gg(a.h,c.i,c.h);break;default:c=Dg(b),Gg(a.h,c.i,c.h)}}}
function rh(a,b,c){b=kf(b);if(b!=null&&b!=null)if(Hg(a.h,c*8),a=a.h,c=b,c>=0)Hg(a,c);else{for(b=0;b<9;b++)a.h.push(c&127|128),c>>=7;a.h.push(1)}}
function sh(a,b,c){b=b==null||typeof b==="boolean"?b:typeof b==="number"?!!b:void 0;b!=null&&(Hg(a.h,c*8),a.h.h.push(b?1:0))}
function th(a,b,c){b=Af(b);b!=null&&Og(a,c,cd(b))}
function uh(a,b,c,d,e){b=ah(b,d);b!=null&&(c=Lg(a,c),e(b,a),Mg(a,c))}
var vh=new Yg(ph,Wg),wh=new Yg(ph,Wg),xh=new Yg(qh,Ug),yh=new Yg(qh,Ug),zh=new Yg(rh,Tg),Ah=new Yg(rh,Tg),Bh;Bh=new Yg(function(a,b,c){Ng(a,c,xf(b))},Vg);
var Ch;Ch=new Yg(function(a,b,c){b=oh(xf,b,!1);if(b!=null)for(var d=0;d<b.length;d++)Ng(a,c,b[d])},Vg);
var Dh=new Yg(sh,Rg),Eh=new Yg(sh,Rg),Fh=new Yg(th,Sg),Gh;Gh=new Yg(function(a,b,c){b=oh(Af,b,!0);if(b!=null)for(var d=0;d<b.length;d++){var e=a,f=c,g=b[d];g!=null&&Og(e,f,cd(g))}},Sg);
var Hh=new Yg(th,Sg),Ih,Jh=void 0;Jh=Jh===void 0?Qg:Jh;Ih=new Yg(function(a,b,c,d,e){if(Array.isArray(b)){for(var f=0;f<b.length;f++)uh(a,b[f],c,d,e);a=b[L]|0;a&1||oe(b,a|1)}},Jh);
var Kh=Zg(uh);function Lh(){var a=Mh;this.ctor=Nh;this.isRepeated=0;this.h=pg;this.defaultValue=void 0;this.i=a.Uf!=null?we:void 0}
Lh.prototype.register=function(){sd(this)};function Oh(a){return function(b){return Xg(a,b)}}
;function Ph(a){this.D=M(a)}
v(Ph,N);function Qh(a,b){return ig(a,b,hf)}
;function Rh(a){this.D=M(a)}
v(Rh,N);var Sh=[1,2,3];var Th=[0,Sh,Hh,Ah,Eh];var Uh=[0,Ih,[0,vh,xh]];function Vh(a){this.D=M(a)}
v(Vh,N);var Wh=[1,2,3];var Xh=[0,Wh,yh,wh,Kh,Uh];function Yh(a){this.D=M(a)}
v(Yh,N);var Zh=[0,Ih,Th,Xh];var $h=[0,Fh];function ai(a){this.D=M(a)}
v(ai,N);var bi=[0,Fh,-1,Dh];var ci=[0,Fh,-1,zh,Dh];function di(a){this.D=M(a)}
v(di,N);var ei=[1,2,3];var fi=[0,ei,Kh,bi,Kh,ci,Kh,$h];function gi(a){this.D=M(a)}
v(gi,N);gi.prototype.j=function(a){return function(){var b=new Jg;mh(this.D,b,hh(a));Kg(b,b.h.end());for(var c=new Uint8Array(b.i),d=b.j,e=d.length,f=0,g=0;g<e;g++){var h=d[g];c.set(h,f);f+=h.length}b.j=[c];return c}}([0,
Fh,fi,Gh,Ih,Zh,Bh,Ch]);function hi(a){this.D=M(a)}
v(hi,N);function ii(a){var b=new gi;b=xg(b,1,a.i);var c=ji(a);b=ig(b,c,yf);c=[];for(var d=[],e=z(a.h.keys()),f=e.next();!f.done;f=e.next())d.push(f.value.split(","));for(e=0;e<d.length;e++){f=d[e];for(var g=a.o,h=a.td(f)||[],k=[],l=0;l<h.length;l++){var m=h[l],p=m&&m.h;m=new Vh;switch(g){case 3:p=Number(p);Number.isFinite(p)&&lg(m,1,Wh,sf(p));break;case 2:p=Number(p);if(p!=null&&typeof p!=="number")throw Error("Value of float/double field must be a number, found "+typeof p+": "+p);lg(m,2,Wh,p)}k.push(m)}g=
k;for(h=0;h<g.length;h++){k=g[h];l=new Yh;k=rg(l,Vh,2,k);l=[];m=ki(a);for(p=0;p<m.length;p++){var r=m[p],t=f[p],x=new Rh;switch(r){case 3:lg(x,1,Sh,zf(String(t)));break;case 2:r=Number(t);Number.isFinite(r)&&lg(x,2,Sh,jf(r));break;case 1:lg(x,3,Sh,ef(t==="true"))}l.push(x)}sg(k,Rh,1,l);c.push(k)}}sg(b,Yh,4,c);return b}
;function li(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function mi(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var r=g,t=0;t<64;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;t<80;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],y=e[2],w=e[3],I=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var F=w^x&(y^w);var S=1518500249}else F=x^y^w,S=1859775393;else t<60?(F=x&y|w&(x|y),S=2400959708):(F=x^y^w,S=3395469782);F=((p<<5|p>>>27)&4294967295)+F+I+S+r[t]&4294967295;I=w;w=y;y=(x<<30|x>>>2)&4294967295;x=p;p=F}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+w&4294967295;e[4]=e[4]+I&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var t=[],x=0,y=p.length;x<y;++x)t.push(p.charCodeAt(x));p=t}r||(r=p.length);t=0;if(l==0)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=p[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,m+=64}
function d(){var p=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var x=24;x>=0;x-=8)p[r++]=e[t]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ef:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function ni(a,b,c){var d=String(E.location.href);return d&&a&&b?[b,oi(li(d),a,c||null)].join(" "):null}
function oi(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Pb(d,function(h){e.push(h)}),pi(e.join(" "));
var f=[],g=[];Pb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Pb(d,function(h){e.push(h)});
a=pi(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function pi(a){var b=mi();b.update(a);return b.ef().toLowerCase()}
;function qi(a){this.h=a||{cookie:""}}
n=qi.prototype;n.isEnabled=function(){if(!E.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Tc:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.sameSite;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Tc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=eb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Tc:0,path:b,domain:c});return d};
n.kc=function(){return ri(this).keys};
n.hb=function(){return ri(this).values};
n.clear=function(){for(var a=ri(this).keys,b=a.length-1;b>=0;b--)this.remove(a[b])};
function ri(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=eb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var si=new qi(typeof document=="undefined"?null:document);function ti(){var a=E.__SAPISID||E.__APISID||E.__3PSAPISID||E.__1PSAPISID||E.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new qi(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function ui(a,b,c,d){(a=E[a])||typeof document==="undefined"||(a=(new qi(document)).get(b));return a?ni(a,c,d):null}
function vi(a){var b=li(E==null?void 0:E.location.href),c=[];if(ti()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?E.__SAPISID:E.__APISID;d||typeof document==="undefined"||(d=new qi(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?ni(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=ui("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=ui("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function wi(){}
wi.prototype.compress=function(a){var b,c,d,e;return C(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
wi.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function xi(a){this.D=M(a)}
v(xi,N);function yi(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Va()};
this.i=this.h()}
yi.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
yi.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
yi.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
yi.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function zi(a){this.D=M(a)}
v(zi,N);function Ai(a){this.D=M(a)}
v(Ai,N);function Bi(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
n=Bi.prototype;n.clone=function(){return new Bi(this.x,this.y)};
n.equals=function(a){return a instanceof Bi&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
n.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Ci(a,b){this.width=a;this.height=b}
n=Ci.prototype;n.clone=function(){return new Ci(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
n.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Di(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ei(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Fi(a){var b=Gi,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Hi(a){for(var b in a)return!1;return!0}
function Ii(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ji(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Ki(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Li(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Mi(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Mi(a[c]);return b}
var Ni="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Oi(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ni.length;f++)c=Ni[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Pi(a,b){this.h=a===Qi&&b||""}
Pi.prototype.toString=function(){return this.h};
var Qi={};new Pi(Qi,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Ri(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Si(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Ti(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Ui(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Vi(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Wi(a){this.D=M(a)}
v(Wi,N);Wi.prototype.Kc=function(){return wg(this)};function Xi(a){this.D=M(a)}
v(Xi,N);function Yi(a){this.D=M(a)}
v(Yi,N);function Zi(a){sg($i,Xi,1,a)}
var aj=Oh(Yi);function bj(a){this.D=M(a)}
v(bj,N);var cj=["platform","platformVersion","architecture","model","uaFullVersion"],$i=new Yi,dj=null;function ej(a,b){b=b===void 0?cj:b;if(!dj){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));Zi((a.brands||[]).map(function(e){var f=new Xi;f=xg(f,1,e.brand);return xg(f,2,e.version)}));
typeof a.mobile==="boolean"&&dg($i,2,ef(a.mobile));dj=a.getHighEntropyValues(b)}var d=new Set(b);return dj.then(function(e){var f=$i.clone();d.has("platform")&&xg(f,3,e.platform);d.has("platformVersion")&&xg(f,4,e.platformVersion);d.has("architecture")&&xg(f,5,e.architecture);d.has("model")&&xg(f,6,e.model);d.has("uaFullVersion")&&xg(f,7,e.uaFullVersion);return f.serialize()}).catch(function(){return $i.serialize()})}
;function fj(a){this.D=M(a)}
v(fj,N);function gj(a){return yg(a,1,1)}
;function hj(a){this.D=M(a,4)}
v(hj,N);function ij(a){this.D=M(a,37)}
v(ij,N);function jj(a){this.D=M(a,19)}
v(jj,N);jj.prototype.wc=function(a){return yg(this,2,a)};function kj(a,b){this.Xa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new jj;Number.isInteger(a)&&this.h.wc(a);b||(this.locale=document.documentElement.getAttribute("lang"));lj(this,new fj)}
kj.prototype.wc=function(a){this.h.wc(a);return this};
function lj(a,b){rg(a.h,fj,1,b);wg(b)||gj(b);a.Xa||(b=mj(a),vg(b,5)||xg(b,5,a.locale));a.j&&(b=mj(a),pg(b,Yi,9)||rg(b,Yi,9,a.j))}
function nj(a,b){a.i=b}
function oj(a){var b=b===void 0?cj:b;var c=a.Xa?void 0:window;c?ej(c,b).then(function(d){a.j=aj(d!=null?d:"[]");d=mj(a);rg(d,Yi,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function mj(a){var b=pg(a.h,fj,1);b||(b=new fj,lj(a,b));a=b;b=pg(a,bj,11);b||(b=new bj,rg(a,bj,11,b));return b}
function pj(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(!a.Xa){var h=mj(a);var k=new Wi;k=yg(k,1,a.i);k=dg(k,2,ef(a.isFinal));d=dg(k,3,jf(d>0?d:void 0));d=dg(d,4,jf(f>0?f:void 0));d=dg(d,5,jf(g>0?g:void 0));f=d.D;g=f[L]|0;d=re(d,g)?d:Uf(d,f,g)?Vf(d,f):new d.constructor(Tf(f,g,!0));rg(h,Wi,10,d)}a=a.h.clone();h=Date.now().toString();a=dg(a,4,sf(h));b=b.slice();b=sg(a,ij,3,b);e&&(a=new zi,e=dg(a,13,jf(e)),a=new Ai,e=rg(a,zi,2,e),a=new hj,
e=rg(a,Ai,1,e),e=yg(e,2,9),rg(b,hj,18,e));c&&dg(b,14,sf(c));return b}
;var qj=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
E.addEventListener("test",c,b);E.removeEventListener("test",c,b)}catch(d){}return a}();function rj(a,b,c,d){this.o=a;this.u=b;this.h=this.j=a;this.H=c||0;this.B=d||2}
rj.prototype.i=0;rj.prototype.reset=function(){this.h=this.j=this.o;this.i=0};
rj.prototype.getValue=function(){return this.j};
function sj(a){a.h=Math.min(a.u,a.h*a.B);a.j=Math.min(a.u,a.h+(a.H?Math.round(a.H*(Math.random()-.5)*2*a.h):0));a.i++}
;function Mh(a){this.D=M(a,8)}
v(Mh,N);var tj=Oh(Mh);function Nh(a){this.D=M(a)}
v(Nh,N);var uj;uj=new Lh;function vj(a){J.call(this);var b=this;this.componentId="";this.h=[];this.La="";this.pageId=null;this.Ra=this.ja=-1;this.G=this.experimentIds=null;this.B=this.o=0;this.M=null;this.Z=this.fa=0;this.Yb=1;this.timeoutMillis=0;this.oa=!1;this.logSource=a.logSource;this.Jb=a.Jb||function(){};
this.j=new kj(a.logSource,a.Xa);this.network=a.network||null;this.xb=a.xb||null;this.bufferSize=1E3;this.I=a.Mg||null;this.sessionIndex=a.sessionIndex||null;this.hc=a.hc||!1;this.logger=null;this.withCredentials=!a.pd;this.Xa=a.Xa||!1;this.X=!this.Xa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Ka=typeof URLSearchParams!=="undefined"&&!!(new URL(wj())).searchParams&&!!(new URL(wj())).searchParams.set;var c=gj(new fj);lj(this.j,c);this.u=new rj(1E4,3E5,.1);a=xj(this,a.Qd);
this.i=new yi(this.u.getValue(),a);this.Da=new yi(6E5,a);this.hc||this.Da.start();this.Xa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){yj(b);var d;(d=b.M)==null||d.flush()}}),document.addEventListener("pagehide",function(){yj(b);
var d;(d=b.M)==null||d.flush()}))}
v(vj,J);function xj(a,b){function c(){a.flush()}
return a.Ka?b?function(){b().then(c)}:c:function(){}}
vj.prototype.ba=function(){yj(this);this.i.stop();this.Da.stop();J.prototype.ba.call(this)};
function zj(a){a.I||(a.I=wj());try{return(new URL(a.I)).toString()}catch(b){return(new URL(a.I,window.location.origin)).toString()}}
function Aj(a,b,c){a.M&&a.M.la(b,c)}
vj.prototype.log=function(a){Aj(this,2,1);if(this.Ka){a=a.clone();var b=this.Yb++;a=dg(a,21,sf(b));this.componentId&&xg(a,26,this.componentId);b=a;var c=bg(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(Ze(64,c)):gf(c)?e==="string"?nf(c):d?of(c):rf(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",dg(b,1,sf(d)));(hd?uf(bg(b,15,void 0,void 0,vf)):uf(bg(b,15)))==null&&dg(b,15,sf((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),
rg(b,xi,16,d));Aj(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,Aj(this,3,b));this.h.push(a);this.hc||this.i.enabled||this.i.start()}};
vj.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.oa&&this.X)this.j.i=3,Bj(this);else{var d=Date.now();if(this.Ra>d&&this.ja<d)b&&b("throttled");else{this.network&&(typeof this.network.Kc==="function"?nj(this.j,this.network.Kc()):this.j.i=0);var e=this.h.length,f=pj(this.j,this.h,this.o,this.B,this.xb,this.fa,this.Z),g=this.Jb();if(g&&this.La===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=Cj(this,d,g),l=function(r){c.u.reset();c.i.setInterval(c.u.getValue());if(r){var t=null;try{var x=JSON.stringify(JSON.parse(r.replace(")]}'\n","")));t=tj(x)}catch(I){}if(t){r=Number(ug(t,1,Ge("-1")));r>0&&(c.ja=Date.now(),c.Ra=c.ja+r);r=Wa(ce);var y;Zd&&r&&((y=t.D[r])==null?void 0:y[175237375])!=null&&Xd(de,3);a:{var w=w===void 0?!1:w;if(Wa(je)&&Wa(ce)&&void 0===je){y=t.D;r=y[ce];if(!r)break a;if(r=r.Hj)try{r(y,175237375,Gf);break a}catch(I){dd(I)}}w&&(w=t.D,(y=Wa(ce))&&
y in w&&(w=w[y])&&delete w[175237375])}w=uj.ctor?uj.h(t,uj.ctor,175237375,uj.i):uj.h(t,175237375,null,uj.i);if(w=w===null?void 0:w)w=Kc(w,1,-1),w!==-1&&(c.u=new rj(w<1?1:w,3E5,.1),c.i.setInterval(c.u.getValue()))}}a&&a();c.B=0},m=function(r,t){var x=Ic(f,ij,3);
var y=Number(ug(f,14));sj(c.u);c.i.setInterval(c.u.getValue());r===401&&g&&(c.La=g);y&&(c.o+=y);t===void 0&&(t=c.isRetryable(r));t&&(c.h=x.concat(c.h),c.hc||c.i.enabled||c.i.start());Aj(c,7,1);b&&b("net-send-failed",r);++c.B},p=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(r){Aj(c,5,e);k.dd["Content-Encoding"]="gzip";k.dd["Content-Type"]="application/binary";k.body=r;k.We=2;p()},function(){Aj(c,6,e);
p()}):p()}}}};
function Cj(a,b,c){c=c===void 0?null:c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(zj(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,We:1,dd:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function yj(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function Bj(a){Dj(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.X=!1);return d})}
function Dj(a,b){if(a.h.length!==0){var c=new URL(zj(a));c.searchParams.delete("format");var d=a.Jb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=pj(a.j,e,a.o,a.B,a.xb,a.fa,a.Z);if(!b(c.toString(),f)){++a.B;break}a.o=0;a.B=0;a.fa=0;a.Z=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
vj.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function wj(){return"https://play.google.com/log?format=json&hasfast=true"}
;function Ej(){this.Pe=typeof AbortController!=="undefined"}
Ej.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,p,r,t;return C(function(x){switch(x.h){case 1:return f=(e=d.Pe?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,x.u(2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.dd)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),x.yield(fetch(a.url,g),5);case 5:h=x.i;if(h.status!==200){(k=c)==null||k(h.status);x.v(3);break}if((l=b)==null){x.v(7);break}return x.yield(h.text(),8);case 8:l(x.i);case 7:case 3:x.Z();clearTimeout(f);x.fa(0);break;case 2:m=x.j();switch((p=m)==null?void 0:p.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}x.v(3)}})};
Ej.prototype.Kc=function(){return 4};function Fj(a,b){b=b===void 0?"0":b;J.call(this);this.logSource=a;this.sessionIndex=b;this.gb="https://play.google.com/log?format=json&hasfast=true";this.buildLabel=null;this.j=!1;this.network=null;this.componentId="";this.h=this.xb=null;this.i=!1;this.pageId=null;this.bufferSize=void 0;this.logger=null}
v(Fj,J);function Gj(a,b){a.buildLabel=b;return a}
function Hj(a,b){a.network=b;return a}
function Ij(a,b){a.h=b}
function Jj(a){a.i=!0;return a}
Fj.prototype.pd=function(){this.o=!0;return this};
function Kj(a){a.network||(a.network=new Ej);var b=new vj({logSource:a.logSource,Jb:a.Jb?a.Jb:vi,sessionIndex:a.sessionIndex,Mg:a.gb,Xa:a.j,hc:!1,pd:a.o,Qd:a.Qd,network:a.network});xc(a,b);if(a.buildLabel){var c=a.buildLabel,d=mj(b.j);xg(d,7,c)}b.G=new wi;a.componentId&&(b.componentId=a.componentId);a.xb&&(b.xb=a.xb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new xi),c=b.experimentIds,d=d.serialize(),xg(c,4,d)):b.experimentIds&&dg(b.experimentIds,4));a.i&&(b.oa=
b.X);oj(b.j);a.bufferSize&&(b.bufferSize=a.bufferSize);a.network.wc&&a.network.wc(a.logSource);a.network.zg&&a.network.zg(b);return b}
;function Lj(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;J.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new Fj(a,"0"),a.componentId=b,xc(this,a),c!==""&&(a.gb=c),d&&(a.j=!0),e&&Gj(a,e),g&&Hj(a,g),b=Kj(a));this.h=b}
v(Lj,J);Lj.prototype.flush=function(a){var b=a||[];if(b.length){a=new hi;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=ii(e);c.push(f);e.clear()}sg(a,gi,1,c);b=this.h;if(a instanceof ij)b.log(a);else try{var g=new ij,h=a.serialize();var k=xg(g,8,h);b.log(k)}catch(l){Aj(b,4,1)}this.h.flush()}};function Mj(a){this.h=a}
;function Nj(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function ki(a){return a.fields.map(function(b){return b.fieldType})}
function ji(a){return a.fields.map(function(b){return b.fieldName})}
n=Nj.prototype;n.Qe=function(a){var b=D.apply(1,arguments),c=this.td(b);c?c.push(new Mj(a)):this.we(a,b)};
n.we=function(a){var b=this.Pd(D.apply(1,arguments));this.h.set(b,[new Mj(a)])};
n.td=function(){var a=this.Pd(D.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
n.Bf=function(){var a=this.td(D.apply(0,arguments));return a&&a.length?a[0]:void 0};
n.clear=function(){this.h.clear()};
n.Pd=function(){var a=D.apply(0,arguments);return a?a.join(","):"key"};function Oj(a,b){Nj.call(this,a,3,b)}
v(Oj,Nj);Oj.prototype.j=function(a){var b=D.apply(1,arguments),c=0,d=this.Bf(b);d&&(c=d.h);this.we(c+a,b)};function Pj(a,b){Nj.call(this,a,2,b)}
v(Pj,Nj);Pj.prototype.record=function(a){this.Qe(a,D.apply(1,arguments))};function Qj(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Qj.prototype.stopPropagation=function(){this.j=!0};
Qj.prototype.preventDefault=function(){this.defaultPrevented=!0};function Rj(a,b){Qj.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Xa(Rj,Qj);
Rj.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Rj.Ga.preventDefault.call(this)};
Rj.prototype.stopPropagation=function(){Rj.Ga.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Rj.prototype.preventDefault=function(){Rj.Ga.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Sj="closure_listenable_"+(Math.random()*1E6|0);var Tj=0;function Uj(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++Tj;this.vc=this.Ec=!1}
function Vj(a){a.vc=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null}
;function Wj(a){this.src=a;this.listeners={};this.h=0}
Wj.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Xj(a,b,d,e);g>-1?(b=a[g],c||(b.Ec=!1)):(b=new Uj(b,this.src,f,!!d,e),b.Ec=c,a.push(b));return b};
Wj.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Xj(e,b,c,d);return b>-1?(Vj(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Yj(a,b){var c=b.type;c in a.listeners&&Ub(a.listeners[c],b)&&(Vj(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Xj(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.vc&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1}
;var Zj="closure_lm_"+(Math.random()*1E6|0),ak={},bk=0;function ck(a,b,c,d,e){if(d&&d.once)dk(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ck(a,b[f],c,d,e);else c=ek(c),a&&a[Sj]?a.listen(b,c,La(d)?!!d.capture:!!d,e):fk(a,b,c,!1,d,e)}
function fk(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=La(e)?!!e.capture:!!e,h=gk(a);h||(a[Zj]=h=new Wj(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=hk();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)qj||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ik(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");bk++}}
function hk(){function a(c){return b.call(a.src,a.listener,c)}
var b=jk;return a}
function dk(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)dk(a,b[f],c,d,e);else c=ek(c),a&&a[Sj]?kk(a,b,c,La(d)?!!d.capture:!!d,e):fk(a,b,c,!0,d,e)}
function lk(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)lk(a,b[f],c,d,e);else(d=La(d)?!!d.capture:!!d,c=ek(c),a&&a[Sj])?a.i.remove(String(b),c,d,e):a&&(a=gk(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Xj(b,c,d,e)),(c=a>-1?b[a]:null)&&mk(c))}
function mk(a){if(typeof a!=="number"&&a&&!a.vc){var b=a.src;if(b&&b[Sj])Yj(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ik(c),d):b.addListener&&b.removeListener&&b.removeListener(d);bk--;(c=gk(b))?(Yj(c,a),c.h==0&&(c.src=null,b[Zj]=null)):Vj(a)}}}
function ik(a){return a in ak?ak[a]:ak[a]="on"+a}
function jk(a,b){if(a.vc)a=!0;else{b=new Rj(b,this);var c=a.listener,d=a.handler||a.src;a.Ec&&mk(a);a=c.call(d,b)}return a}
function gk(a){a=a[Zj];return a instanceof Wj?a:null}
var nk="__closure_events_fn_"+(Math.random()*1E9>>>0);function ek(a){if(typeof a==="function")return a;a[nk]||(a[nk]=function(b){return a.handleEvent(b)});
return a[nk]}
;function ok(){J.call(this);this.i=new Wj(this);this.oa=this;this.Z=null}
Xa(ok,J);ok.prototype[Sj]=!0;n=ok.prototype;n.addEventListener=function(a,b,c,d){ck(this,a,b,c,d)};
n.removeEventListener=function(a,b,c,d){lk(this,a,b,c,d)};
function pk(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.oa;c=b.type||b;typeof b==="string"?b=new Qj(b,a):b instanceof Qj?b.target=b.target||a:(e=b,b=new Qj(c,a),Oi(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=qk(g,c,!0,b)&&e}b.j||(g=b.h=a,e=qk(g,c,!0,b)&&e,b.j||(e=qk(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=qk(g,c,!1,b)&&e}
n.ba=function(){ok.Ga.ba.call(this);this.removeAllListeners();this.Z=null};
n.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function kk(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
n.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Vj(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function qk(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.vc&&g.capture==c){var h=g.listener,k=g.handler||g.src;g.Ec&&Yj(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var rk=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function sk(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
sk.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function tk(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function uk(){this.i=this.h=null}
uk.prototype.add=function(a,b){var c=vk.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
uk.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var vk=new sk(function(){return new wk},function(a){return a.reset()});
function wk(){this.next=this.scope=this.h=null}
wk.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
wk.prototype.reset=function(){this.next=this.scope=this.h=null};var xk,yk=!1,zk=new uk;function Ak(a,b){xk||Bk();yk||(xk(),yk=!0);zk.add(a,b)}
function Bk(){var a=Promise.resolve(void 0);xk=function(){a.then(Ck)}}
function Ck(){for(var a;a=zk.remove();){try{a.h.call(a.scope)}catch(b){dd(b)}tk(vk,a)}yk=!1}
;function Dk(){}
function Ek(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Fk(a){this.ea=0;this.nb=void 0;this.Fb=this.eb=this.parent_=null;this.Lc=this.rd=!1;if(a!=Dk)try{var b=this;a.call(void 0,function(c){Gk(b,2,c)},function(c){Gk(b,3,c)})}catch(c){Gk(this,3,c)}}
function Hk(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Hk.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Ik=new sk(function(){return new Hk},function(a){a.reset()});
function Jk(a,b,c){var d=Ik.get();d.i=a;d.h=b;d.context=c;return d}
function Kk(a){return new Fk(function(b,c){c(a)})}
Fk.prototype.then=function(a,b,c){return Lk(this,rk(typeof a==="function"?a:null),rk(typeof b==="function"?b:null),c)};
Fk.prototype.$goog_Thenable=!0;function Mk(a,b,c,d){Nk(a,Jk(b||Dk,c||null,d))}
n=Fk.prototype;n.finally=function(a){var b=this;a=rk(a);return new Fk(function(c,d){Mk(b,function(e){a();c(e)},function(e){a();
d(e)})})};
n.kd=function(a,b){return Lk(this,null,rk(a),b)};
n.catch=Fk.prototype.kd;n.cancel=function(a){if(this.ea==0){var b=new Ok(a);Ak(function(){Pk(this,b)},this)}};
function Pk(a,b){if(a.ea==0)if(a.parent_){var c=a.parent_;if(c.eb){for(var d=0,e=null,f=null,g=c.eb;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.ea==0&&d==1?Pk(c,b):(f?(d=f,d.next==c.Fb&&(c.Fb=d),d.next=d.next.next):Qk(c),Rk(c,e,3,b)))}a.parent_=null}else Gk(a,3,b)}
function Nk(a,b){a.eb||a.ea!=2&&a.ea!=3||Sk(a);a.Fb?a.Fb.next=b:a.eb=b;a.Fb=b}
function Lk(a,b,c,d){var e=Jk(null,null,null);e.child=new Fk(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Ok?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;Nk(a,e);return e.child}
n.Kg=function(a){this.ea=0;Gk(this,2,a)};
n.Lg=function(a){this.ea=0;Gk(this,3,a)};
function Gk(a,b,c){if(a.ea==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.ea=1;a:{var d=c,e=a.Kg,f=a.Lg;if(d instanceof Fk){Mk(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(La(d))try{var k=d.then;if(typeof k==="function"){Tk(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.nb=c,a.ea=b,a.parent_=null,Sk(a),b!=3||c instanceof Ok||Uk(a,c))}}
function Tk(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Sk(a){a.rd||(a.rd=!0,Ak(a.rf,a))}
function Qk(a){var b=null;a.eb&&(b=a.eb,a.eb=b.next,b.next=null);a.eb||(a.Fb=null);return b}
n.rf=function(){for(var a;a=Qk(this);)Rk(this,a,this.ea,this.nb);this.rd=!1};
function Rk(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.Lc;a=a.parent_)a.Lc=!1;if(b.child)b.child.parent_=null,Vk(b,c,d);else try{b.j?b.i.call(b.context):Vk(b,c,d)}catch(e){Wk.call(null,e)}tk(Ik,b)}
function Vk(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Uk(a,b){a.Lc=!0;Ak(function(){a.Lc&&Wk.call(null,b)})}
var Wk=dd;function Ok(a){db.call(this,a)}
Xa(Ok,db);Ok.prototype.name="cancel";function Xk(a,b){ok.call(this);this.j=a||1;this.h=b||E;this.o=Ta(this.Hg,this);this.u=Va()}
Xa(Xk,ok);n=Xk.prototype;n.enabled=!1;n.Ja=null;n.setInterval=function(a){this.j=a;this.Ja&&this.enabled?(this.stop(),this.start()):this.Ja&&this.stop()};
n.Hg=function(){if(this.enabled){var a=Va()-this.u;a>0&&a<this.j*.8?this.Ja=this.h.setTimeout(this.o,this.j-a):(this.Ja&&(this.h.clearTimeout(this.Ja),this.Ja=null),pk(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
n.start=function(){this.enabled=!0;this.Ja||(this.Ja=this.h.setTimeout(this.o,this.j),this.u=Va())};
n.stop=function(){this.enabled=!1;this.Ja&&(this.h.clearTimeout(this.Ja),this.Ja=null)};
n.ba=function(){Xk.Ga.ba.call(this);this.stop();delete this.h};function Yk(a){J.call(this);this.G=a;this.o=0;this.j=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Xk(this.flushInterval);this.h.listen("tick",this.jd,!1,this);xc(this,this.h)}
v(Yk,J);n=Yk.prototype;n.sendIsolatedPayload=function(a){this.u=a;this.j=1};
function Zk(a){a.h.enabled||a.h.start();a.o++;a.o>=a.j&&a.jd()}
n.jd=function(){var a=this.i.values();a=[].concat(A(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);$k(a);this.o=0;this.h.enabled&&this.h.stop()};
n.Db=function(a){var b=D.apply(1,arguments);this.i.has(a)||this.i.set(a,new Oj(a,b))};
n.ac=function(a){var b=D.apply(1,arguments);this.i.has(a)||this.i.set(a,new Pj(a,b))};
function al(a,b){return a.B.has(b)?void 0:a.i.get(b)}
n.Ab=function(a){this.Oe(a,1,D.apply(1,arguments))};
n.Oe=function(a,b){var c=D.apply(2,arguments),d=al(this,a);d&&d instanceof Oj&&(d.j(b,c),Zk(this))};
n.record=function(a,b){var c=D.apply(2,arguments),d=al(this,a);d&&d instanceof Pj&&(d.record(b,c),Zk(this))};
function $k(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function bl(a){switch(a){case 200:return 0;case 400:return 3;case 401:return 16;case 403:return 7;case 404:return 5;case 409:return 10;case 412:return 9;case 429:return 8;case 499:return 1;case 500:return 2;case 501:return 12;case 503:return 14;case 504:return 4;default:return 2}}
function cl(a){switch(a){case 0:return"OK";case 1:return"CANCELLED";case 2:return"UNKNOWN";case 3:return"INVALID_ARGUMENT";case 4:return"DEADLINE_EXCEEDED";case 5:return"NOT_FOUND";case 6:return"ALREADY_EXISTS";case 7:return"PERMISSION_DENIED";case 16:return"UNAUTHENTICATED";case 8:return"RESOURCE_EXHAUSTED";case 9:return"FAILED_PRECONDITION";case 10:return"ABORTED";case 11:return"OUT_OF_RANGE";case 12:return"UNIMPLEMENTED";case 13:return"INTERNAL";case 14:return"UNAVAILABLE";case 15:return"DATA_LOSS";
default:return""}}
;function dl(a,b,c){c=c===void 0?{}:c;b=Error.call(this,b);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.code=a;this.metadata=c;this.name="RpcError";Object.setPrototypeOf(this,this.constructor.prototype)}
v(dl,Error);dl.prototype.toString=function(){var a="RpcError("+(cl(this.code)||String(this.code))+")";this.message&&(a+=": "+this.message);return a};function el(){}
el.prototype.serialize=function(a){var b=[];fl(this,a,b);return b.join("")};
function fl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),fl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),gl(d,c),c.push(":"),fl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":gl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var hl={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},il=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function gl(a,b){b.push('"',a.replace(il,function(c){var d=hl[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),hl[c]=d);return d}),'"')}
;function jl(){ok.call(this);this.headers=new Map;this.h=!1;this.S=null;this.o=this.X="";this.j=this.M=this.B=this.I=!1;this.G=0;this.u=null;this.ja="";this.fa=!1}
Xa(jl,ok);var kl=/^https?$/i,ll=["POST","PUT"],ml=[];function nl(a,b,c,d,e,f,g){var h=new jl;ml.push(h);b&&h.listen("complete",b);kk(h,"ready",h.af);f&&(h.G=Math.max(0,f));g&&(h.fa=g);h.send(a,c,d,e)}
n=jl.prototype;n.af=function(){this.dispose();Ub(ml,this)};
n.send=function(a,b,c,d){if(this.S)throw Error("[goog.net.XhrIo] Object is active with another request="+this.X+"; newUri="+a);b=b?b.toUpperCase():"GET";this.X=a;this.o="";this.I=!1;this.h=!0;this.S=new XMLHttpRequest;this.S.onreadystatechange=rk(Ta(this.ke,this));try{this.getStatus(),this.M=!0,this.S.open(b,String(a),!0),this.M=!1}catch(g){this.getStatus();ol(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=z(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=E.FormData&&a instanceof E.FormData;!(Ob(ll,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=z(c);for(d=b.next();!d.done;d=b.next())c=z(d.value),d=c.next().value,c=c.next().value,this.S.setRequestHeader(d,c);this.ja&&(this.S.responseType=this.ja);"withCredentials"in this.S&&this.S.withCredentials!==this.fa&&(this.S.withCredentials=this.fa);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.Jg.bind(this),this.G)),
this.getStatus(),this.B=!0,this.S.send(a),this.B=!1}catch(g){this.getStatus(),ol(this,g)}};
n.Jg=function(){typeof Ha!="undefined"&&this.S&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),pk(this,"timeout"),this.abort(8))};
function ol(a,b){a.h=!1;a.S&&(a.j=!0,a.S.abort(),a.j=!1);a.o=b;pl(a);ql(a)}
function pl(a){a.I||(a.I=!0,pk(a,"complete"),pk(a,"error"))}
n.abort=function(){this.S&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.S.abort(),this.j=!1,pk(this,"complete"),pk(this,"abort"),ql(this))};
n.ba=function(){this.S&&(this.h&&(this.h=!1,this.j=!0,this.S.abort(),this.j=!1),ql(this,!0));jl.Ga.ba.call(this)};
n.ke=function(){this.J||(this.M||this.B||this.j?rl(this):this.ag())};
n.ag=function(){rl(this)};
function rl(a){if(a.h&&typeof Ha!="undefined")if(a.B&&(a.S?a.S.readyState:0)==4)setTimeout(a.ke.bind(a),0);else if(pk(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(sl(a))pk(a,"complete"),pk(a,"success");else{try{var b=(a.S?a.S.readyState:0)>2?a.S.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";pl(a)}}finally{ql(a)}}}
function ql(a,b){if(a.S){a.u&&(clearTimeout(a.u),a.u=null);var c=a.S;a.S=null;b||pk(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
n.isActive=function(){return!!this.S};
n.isComplete=function(){return(this.S?this.S.readyState:0)==4};
function sl(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.X).match(ec)[1]||null,!a&&E.self&&E.self.location&&(a=E.self.location.protocol.slice(0,-1)),b=!kl.test(a?a.toLowerCase():"");c=b}return c}
n.getStatus=function(){try{return(this.S?this.S.readyState:0)>2?this.S.status:-1}catch(a){return-1}};
n.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function tl(){}
tl.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
nl(a.url,function(d){d=d.target;if(sl(d)){try{var e=d.S?d.S.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.dd,a.timeoutMillis,a.withCredentials)};
tl.prototype.Kc=function(){return 1};function ul(a,b){this.logger=a;this.event=b;this.startTime=vl()}
ul.prototype.done=function(){this.logger.kb(this.event,vl()-this.startTime)};
function wl(){Nc.apply(this,arguments)}
v(wl,Nc);function xl(a,b,c){var d=vl();b=b();a.kb(c,vl()-d);return b}
function yl(){wl.apply(this,arguments)}
v(yl,wl);n=yl.prototype;n.oc=function(){};
n.Oa=function(){};
n.kb=function(){};
n.wa=function(){};
n.Qc=function(){};
n.Pc=function(){};
n.Za=function(){};
n.Sc=function(){};
n.Oc=function(){};
n.Rc=function(){};
function zl(a){wl.call(this);var b=this;this.logger=a;this.addOnDisposeCallback(function(){return void b.logger.dispose()})}
v(zl,wl);n=zl.prototype;n.update=function(a){this.logger.dispose();this.logger=a};
n.Oa=function(a){this.logger.Oa(a)};
n.kb=function(a,b){this.logger.kb(a,b)};
n.wa=function(a){this.logger.wa(a)};
n.Qc=function(a){this.logger.Qc(a)};
n.Pc=function(a,b){this.logger.Pc(a,b)};
n.Za=function(){this.logger.Za()};
n.Sc=function(a){this.logger.Sc(a)};
n.Oc=function(a){this.logger.Oc(a)};
n.Rc=function(a){this.logger.Rc(a)};
n.oc=function(a){this.logger.oc(a)};
function Al(a,b,c,d){a=Jj(Hj(Gj(new Fj(1828,"0"),a),new tl)).pd();b.length&&Ij(a,Qh(new Ph,b));d!==void 0&&(a.gb=d);var e=new Lj(1828,"","",!1,"",Kj(a));xc(e,a);var f=new Yk({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.jd()}finally{e.dispose()}})});
f.j=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function Bl(a,b){J.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
v(Bl,J);function Cl(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-vl());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=vl(),a.timer=void 0}},b)}}
function Dl(a,b){wl.call(this);this.metrics=a;this.na=b}
v(Dl,wl);n=Dl.prototype;n.oc=function(a){this.metrics.Dg.record(a,this.na)};
n.Oa=function(a){this.metrics.eventCount.la(a,this.na)};
n.kb=function(a,b){this.metrics.qf.record(b,a,this.na)};
n.wa=function(a){this.metrics.errorCount.la(a,this.na)};
n.Sc=function(a){this.metrics.Pg.la(a,this.na)};
n.Oc=function(a){this.metrics.Xe.la(a,this.na)};
n.Rc=function(a){this.metrics.Og.la(a,this.na)};
n.Qc=function(a){this.metrics.payloadSize.record(a,this.na)};
n.Pc=function(a,b){this.metrics.Zf.record(b,a,this.na)};
function El(a,b){b=b===void 0?[]:b;var c={na:a.na||"_",sd:a.sd||[],xd:a.xd|0,gb:a.gb,Wc:a.Wc||function(){},
Wb:a.Wb||function(f,g){return Al(f,g,c.Wc,c.gb)}},d=c.Wb("53",c.sd.concat(b));
Dl.call(this,{Dg:new Qc(d),errorCount:new Uc(d),eventCount:new Sc(d),qf:new Tc(d),Tj:new Rc(d),Pg:new Vc(d),Xe:new Wc(d),Og:new Xc(d),payloadSize:new Yc(d),Zf:new Zc(d)},c.na);var e=this;this.options=c;this.service=d;this.j=!a.Wb;this.h=new Bl(function(){return void e.service.jd()},c.xd);
this.addOnDisposeCallback(function(){e.h.dispose();e.j&&e.service.dispose()});
b.slice().sort(Xb)}
v(El,Dl);El.prototype.Za=function(){Cl(this.h)};
function vl(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Fl(a){this.D=M(a)}
v(Fl,N);function Gl(a){this.D=M(a)}
v(Gl,N);function Hl(a){this.D=M(a,0,"bfkj")}
v(Hl,N);var Il=function(a){return xe(function(b){return b instanceof a&&!re(b)})}(Hl);
Hl.Uf="bfkj";function Jc(a){this.D=M(a)}
v(Jc,N);function Jl(a){this.D=M(a)}
v(Jl,N);var Kl=Oh(Jl);function Ll(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ml(a,b){if(a.disable)return new yl;b=b?Hc(b):[];a={na:a.na,sd:a.tf,xd:a.Vf,gb:a.gb,Wc:a.Wc,Wb:a.Wb};b=b===void 0?[]:b;return new El(a,b)}
function Nl(a){function b(y,w,I,F){Promise.resolve().then(function(){k.done();h.Za();h.dispose();g.resolve({Se:y,Cg:w,fg:I,Ye:F})})}
function c(y,w,I,F){if(!d.logger.J){var S="k";w?S="h":I&&(S="u");S!=="k"?F!==0&&(d.logger.Oa(S),d.logger.kb(S,y)):d.j<=0?(d.logger.Oa(S),d.logger.kb(S,y),d.j=Math.floor(Math.random()*200)):d.j--}}
J.call(this);var d=this;this.j=Math.floor(Math.random()*200);this.h=new Jl;if("challenge"in a&&Il(a.challenge)){var e=vg(a.challenge,4,void 0,we);var f=vg(a.challenge,5,void 0,we);vg(a.challenge,7,void 0,we)&&(this.h=Kl(vg(a.challenge,7,void 0,we)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var y,w,I;return C(function(F){if(F.h==1)return F.yield(d.i,2);y=F.i;w=y.Cg;(I=w)==null||I();F.o()})});
this.logger=Ml(a.Qb||{},this.h);xc(this,this.logger);var g=new Ll;this.i=g.promise;this.logger.Oa("t");var h=this.logger.share(),k=new ul(h,"t"),l=[function(y,w){d.logger.kb(y,w)},
function(y){d.logger.wa(y)},
function(y){d.logger.Qc(y)},
function(y,w){d.logger.Pc(y,w)}];
if(!E[f])throw this.logger.wa(25),Error("EGOU");if(!E[f].a)throw this.logger.wa(26),Error("ELIU");try{var m=E[f].a;f=[];for(var p=[],r=Hc(this.h),t=0;t<r.length;t++)f.push(r[t]),p.push(1);var x=Lc(this.h);for(r=0;r<x.length;r++)f.push(x[r]),p.push(2);this.o=z(m(e,b,!0,a.Fe,c,[f,p],vg(this.h,5),!1,l)).next().value;this.Ub=g.promise.then(function(){})}catch(y){throw this.logger.wa(28),y;
}}
v(Nl,J);n=Nl.prototype;n.snapshot=function(a){if(this.J)throw Error("Already disposed");this.logger.Oa("n");var b=this.logger.share();return this.i.then(function(c){var d=c.Se;return new Promise(function(e){var f=new ul(b,"n");d(function(g){f.done();b.oc(g.length);b.Za();b.dispose();e(g)},[a.Ma,
a.hd,a.Je,a.Jd])})})};
n.ye=function(a){var b=this;if(this.J)throw Error("Already disposed");this.logger.Oa("n");var c=xl(this.logger,function(){return b.o([a.Ma,a.hd,a.Je,a.Jd])},"n");
this.logger.oc(c.length);this.logger.Za();return c};
n.qc=function(a){this.i.then(function(b){var c;(c=b.fg)==null||c(a)})};
n.Gc=function(a,b){return this.i.then(function(c){var d;return(d=c.Ye)==null?void 0:d(a,b,!1)})};
n.xc=function(){return this.logger.share()};function Ol(a){if(!a)return null;a=Af(bg(a,4,void 0,ag));return a===null||a===void 0?null:lb(a)}
;function Pl(){this.promises={};this.h=null}
function Ql(){Pl.instance||(Pl.instance=new Pl);return Pl.instance}
function Rl(a,b){return Sl(a,pg(b,Fl,1,we),pg(b,Gl,2,we),vg(b,3,void 0,we))}
function Sl(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Tl(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Tl(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Tl(a,b){return b?Ul(b):a?Vl(a):Promise.resolve()}
function Ul(a){return new Promise(function(b,c){var d=Si("SCRIPT"),e=Ol(a);Hb(d,e);d.onload=function(){Ui(d);b()};
d.onerror=function(){Ui(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Vl(a){return new Promise(function(b){var c=Si("SCRIPT");if(a){var d=Af(bg(a,6,void 0,ag));d=d===null||d===void 0?null:Eb(d)}else d=null;c.textContent=Fb(d);Gb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Ui(c);b()})}
;function Wl(a){this.D=M(a)}
v(Wl,N);function Xl(a,b){return kg(a,1,zf(b))}
function Yl(a,b){return kg(a,2,zf(b))}
;function Zl(a){J.call(this);var b=this;this.options=a;this.B=new Ll;this.Ub=this.B.promise;this.u=new Ll;this.I=1;this.j=new Ll;this.o=[];this.isPaused=!1;this.Xc=a.Xc||function(){};
this.logger=new zl(Ml(a.Qb||{}));$l(this,a.Ta,a.Ff,a.Ij,a.Kj,Object.assign({},am,a.Xb||{}));this.addOnDisposeCallback(function(){return void bm(b)})}
v(Zl,J);n=Zl.prototype;n.snapshot=function(a){var b=this;return C(function(c){switch(c.h){case 1:if(b.J)throw Error("Already disposed");if(b.i||b.G){c.v(2);break}return c.yield(b.u.promise,2);case 2:if(!b.i){c.v(4);break}return c.yield(b.i.snapshot(a),5);case 5:return c.return(c.i);case 4:throw b.G;}})};
n.pause=function(){this.J||this.isPaused||(this.isPaused=!0,this.h&&this.h.pause())};
n.resume=function(){!this.J&&this.isPaused&&(this.isPaused=!1,this.h&&this.h.resume())};
n.checkForRefresh=function(){var a=this;return C(function(b){if(a.J)throw Error("Already disposed");var c;if(c=a.h)c=a.h,c.isExpired()?(cm(c),c.ed(0),c=!0):c=!1,c=!c;return c?b.v(0):b.yield(a.j.promise,0)})};
function dm(a){var b;return C(function(c){if(a.J)throw Error("Already disposed");(b=a.h)==null||em(b);return c.yield(a.j.promise,0)})}
function bm(a){a.G=Error("Cancelled by dispose");a.u.resolve();Mc(a.B.promise);a.B.reject(Error("Cancelled by dispose"));a.logger.dispose();Promise.all(a.o).then(function(){var c;return C(function(d){(c=a.i)==null||c.dispose();a.i=void 0;d.o()})});
a.o=[];var b;(b=a.h)==null||em(b);Mc(a.j.promise);a.j.reject(Error("Cancelled by dispose"))}
n.qc=function(a){var b,c;(b=this.i)==null||(c=b.qc)==null||c.call(b,a)};
n.Gc=function(a,b){var c,d,e;return(e=(c=this.i)==null?void 0:(d=c.Gc)==null?void 0:d.call(c,a,b))!=null?e:Promise.resolve()};
function fm(a,b){var c=a.Xc;a.Xc=function(){c();b()}}
function gm(a,b){a.J||(a.i=b,a.logger.update(b.xc()),a.u.resolve(),a.B.resolve(void 0),a.Xc())}
n.handleError=function(a){if(!this.J){this.G=a;this.u.resolve();var b,c;(c=(b=this.options).Vc)==null||c.call(b,a)}};
function hm(a,b){b&&(Promise.all(a.o).then(function(){return void b.dispose()}),a.o=[])}
function im(a,b){a.I=b;var c,d;(d=(c=a.options).Bj)==null||d.call(c,b)}
function jm(a){a.J||(a.j.resolve(),a.j=new Ll)}
function $l(a,b,c,d,e,f){d=d===void 0?Ql():d;e=e===void 0?Promise.resolve(void 0):e;var g,h,k,l,m,p,r,t,x,y,w,I;C(function(F){switch(F.h){case 1:return F.yield(0,3);case 3:h=null;if(!g){F.v(6);break}im(a,7);F.u(7);return F.yield(km(g.snapshot({}),f.df,function(){return Promise.resolve("E:CTO")}),9);
case 9:h=F.i;F.B(6);break;case 7:F.j(),h="E:UCE";case 6:k=void 0,l=g?f.lf:f.mf,m=new rj(l,f.nf,f.pf,f.kf),p=1;case 10:if(!(p<=f.maxAttempts)){F.v(12);break}if(p===1){F.v(13);break}im(a,0);a.h=new lm(m.getValue(),f.ld,f.Ce);return F.yield(a.h.promise,14);case 14:r=F.i,a.h=void 0,r===1?(p=1,m.reset()):sj(m);case 13:F.u(15);t=void 0;if(c){t=c;F.v(17);break}im(a,5);x=d.h;return F.yield(km(mm(b,x,h),f.xf,function(){return Promise.reject(Error("RGF:Fetch timed out"))}),18);
case 18:t=F.i;case 17:return im(a,3),F.yield(km(Rl(d,t),f.Pf,function(){return Promise.reject(Error("DTZ:Script timed out"))}),19);
case 19:return im(a,8),F.yield(e,20);case 20:return y=new Nl({challenge:t,Qb:a.options.Qb,Fe:a.options.Fe}),F.yield(km(y.Ub,f.Bg,function(){return Promise.reject(Error("QEG:Setup timed out"))}),21);
case 21:k=y;F.v(12);break;case 15:w=F.j(),a.handleError(w),jm(a);case 11:p++;F.v(10);break;case 12:if(a.J){F.v(5);break}k&&(c=void 0,hm(a,g),g=k,gm(a,k),jm(a));im(a,2);a.h=new lm(f.qe,f.ld,f.Ce);a.isPaused&&a.h.pause();return F.yield(a.h.promise,22);case 22:a.h=void 0;if(a.J){F.v(5);break}F.v(3);break;case 5:(I=g)==null||I.dispose(),F.o()}})}
n.xc=function(){return this.logger.share()};
var am={qe:432E5,ld:3E5,Ce:10,df:1E4,xf:3E4,Pf:3E4,Bg:6E4,mf:1E3,lf:6E4,nf:6E5,pf:.25,kf:2,maxAttempts:10};function km(a,b,c){var d,e=new Promise(function(f){d=setTimeout(f,b)});
return Promise.race([a.finally(function(){return void clearTimeout(d)}),
e.then(c)])}
function lm(a,b,c){var d=this;this.endTimeMs=0;this.h=null;this.isPaused=!1;this.tick=function(){if(!d.isPaused){var e=d.endTimeMs-Date.now();e<=d.i?(d.h=null,d.ed(0)):d.h=setTimeout(d.tick,Math.min(e,d.ld))}};
this.ld=b;this.i=c;this.promise=new Promise(function(e){d.ed=e});
nm(this,a)}
function nm(a,b){a.endTimeMs=Date.now()+b;a.tick()}
lm.prototype.pause=function(){this.isPaused||(this.isPaused=!0,cm(this))};
lm.prototype.resume=function(){this.isPaused&&(this.isPaused=!1,this.tick())};
function em(a){cm(a);a.endTimeMs=0;a.isPaused=!1;a.ed(1)}
function cm(a){a.h&&(clearTimeout(a.h),a.h=null)}
lm.prototype.isExpired=function(){return Date.now()>this.endTimeMs};function om(a,b){try{return globalThis.sessionStorage.setItem(a,b),!0}catch(c){return!1}}
var pm,qm=(pm=Math.imul)!=null?pm:function(a,b){return a*b|0};
function rm(a,b,c,d){b=b===void 0?0:b;c=c===void 0?a.length:c;var e=0;for(d&&(e=rm(d));b<c;b++)d=typeof a==="string"?a.charCodeAt(b):a[b],e=qm(31,e)+d|0;return e}
function sm(a,b){return[rm(a,0,a.length>>1,b),rm(a,a.length>>1)]}
var tm=[196,200,224,18];function um(a){var b=z(sm(a,tm));a=b.next().value;b=b.next().value;return a.toString(16)+b.toString(16)}
function wm(a,b){var c=sm(b);a=new Uint32Array(a.buffer);b=a[0];var d=z(c);c=d.next().value;d=d.next().value;for(var e=1;e<a.length;e+=2){for(var f=b,g=e,h=c,k=d,l=0;l<22;l++)g=g>>>8|g<<24,g+=f|0,g^=h+38293,f=f<<3|f>>>29,f^=g,k=k>>>8|k<<24,k+=h|0,k^=l+38293,h=h<<3|h>>>29,h^=k;f=[f,g];a[e]^=f[0];e+1<a.length&&(a[e+1]^=f[1])}}
function xm(a,b,c,d,e){var f=(4-(tm.length+c.length)%4)%4,g=new Uint8Array(4+f+tm.length+4+c.length),h=new DataView(g.buffer),k=0;h.setUint32(k,Math.random()*4294967295);k=k+4+f;g.set(tm,k);k+=tm.length;h.setUint32(k,e);g.set(c,k+4);wm(g,d);return a.ra(b,function(l){return void globalThis.sessionStorage.removeItem(l)})?om(b,Ed(g))?"s":"t":"i"}
function ym(a,b){var c=globalThis.sessionStorage.getItem(a);if(!c)return["m"];try{var d=Gd(c);wm(d,b)}catch(e){return globalThis.sessionStorage.removeItem(a),["c"]}for(b=4;b<7&&d[b]===0;)b++;for(c=0;c<tm.length;c++)if(d[b++]!==tm[c])return globalThis.sessionStorage.removeItem(a),["d"];c=(new DataView(d.buffer)).getUint32(b);return Math.floor(Date.now()/1E3)>=c?(globalThis.sessionStorage.removeItem(a),["e"]):["a",new Uint8Array(d.buffer,b+4)]}
function zm(a,b,c){c=c===void 0?[]:c;this.maxItems=a;this.h=b===void 0?0:b;this.i=c}
function Am(a){var b=globalThis.sessionStorage.getItem("iU5q-!O9@$");if(!b)return new zm(a);var c=b.split(",");if(c.length<2)return globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new zm(a);b=c.slice(1);b.length===1&&b[0]===""&&(b=[]);c=Number(c[0]);return isNaN(c)||c<0||c>b.length?(globalThis.sessionStorage.removeItem("iU5q-!O9@$"),new zm(a)):new zm(a,c,b)}
zm.prototype.serialize=function(){return String(this.h)+","+this.i.join()};
zm.prototype.ra=function(a,b){var c=void 0;if(this.i[this.h]!==a){var d=this.i.indexOf(a);d!==-1?(this.i.splice(d,1),d<this.h&&this.h--,this.i.splice(this.h,0,a)):(c=this.i[this.h],this.i[this.h]=a)}this.h=(this.h+1)%this.maxItems;a=om("iU5q-!O9@$",this.serialize());c&&a&&b(c);return a};
function Ec(a,b){this.logger=b;try{var c=globalThis.sessionStorage&&!!globalThis.sessionStorage.getItem&&!!globalThis.sessionStorage.setItem&&!!globalThis.sessionStorage.removeItem}catch(d){c=!1}c&&(this.index=Am(a))}
function Bm(a,b,c,d,e){var f=a.index?xl(a.logger,function(){return xm(a.index,um(b),c,d,e)},"W"):"u";
a.logger.Rc(f)}
function Cm(a,b,c){var d=z(a.index?xl(a.logger,function(){return ym(um(b),c)},"R"):["u"]),e=d.next().value;
d=d.next().value;a.logger.Oc(e);return d}
;var Dm={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Em(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Fm(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;g>=12;g-=12,h+=12)c+=Gm(a,h),d+=Gm(a,h+4),e+=Gm(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Dm.toString(e)}
function Fm(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Gm(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Hm(a){J.call(this);this.logger=a;this.j=new Ll}
v(Hm,J);function Im(a,b){var c=setTimeout(function(){a.j.resolve()},b);
a.addOnDisposeCallback(function(){return void clearTimeout(c)})}
Hm.prototype.Uc=function(a,b){var c=this.mb(a);b==null||b(c);return xl(this.logger,function(){return Ed(c,2)},this.i)};
function Jm(a,b,c,d){return xl(a.logger,function(){return c?a.Uc(b,d):a.mb(b,d)},a.h)}
function Km(a,b,c,d){Hm.call(this,a);this.o=b;this.B=c;this.h="m";this.i="x";this.u=0;Im(this,d)}
v(Km,Hm);Km.prototype.mb=function(a,b){var c=this;this.logger.Oa(this.h);++this.u>=this.B&&this.j.resolve();var d=a();a=xl(this.logger,function(){return c.o(d)},"C");
if(a===void 0)throw new uc(17,"YNJ:Undefined");if(!(a instanceof Uint8Array))throw new uc(18,"ODM:Invalid");b==null||b(a);return a};
function Lm(a,b,c){Hm.call(this,a);this.o=b;this.h="f";this.i="z";Im(this,c)}
v(Lm,Hm);Lm.prototype.mb=function(){return this.o};
function Mm(a,b,c){Hm.call(this,a);this.o=b;this.h="w";this.i="z";Im(this,c)}
v(Mm,Hm);Mm.prototype.mb=function(){var a=this;return xl(this.logger,function(){return Gd(a.o)},"d")};
Mm.prototype.Uc=function(){return this.o};
function Nm(a,b){Hm.call(this,a);this.error=b;this.h="e";this.i="y"}
v(Nm,Hm);function Om(a,b){var c=(b(a.error.message)+":"+b(a.error.stack)).substring(0,2048);b=c.length+1;c=Pm(c);var d=new Uint8Array(4+c.length);d.set([42,b&127|128,b>>7,a.error.code]);d.set(c,4);return d}
Nm.prototype.mb=function(){if(this.o)return this.o;this.o=Om(this,function(a){return"_"+Em(a)});
return Om(this,function(a){return a})};
function Qm(a,b,c){Hm.call(this,a);this.o=b;this.clientState=c;this.h="S";this.i="q"}
v(Qm,Hm);Qm.prototype.mb=function(){var a=Math.floor(Date.now()/1E3),b=[Math.random()*255,Math.random()*255],c=b.concat([this.o&255,this.clientState],[a>>24&255,a>>16&255,a>>8&255,a&255]);a=new Uint8Array(2+c.length);a[0]=34;a[1]=c.length;a.set(c,2);c=a.subarray(2);for(var d=b=b.length;d<c.length;++d)c[d]^=c[d%b];this.logger.Sc(this.clientState);return a};
function Pm(a){return globalThis.TextEncoder?(new TextEncoder).encode(a):ed(a)}
;var Rm={yf:3E4,Eg:2E4};function Sm(a){J.call(this);var b=this;this.Tb=new Ll;this.j=0;this.i=void 0;this.state=2;this.vm=a.vm;this.Ta=a.Ta;this.Xb=Object.assign({},Rm,a.Xb||{});this.logger=a.vm.xc();var c;this.onError=(c=a.onError)!=null?c:function(){};
this.Od=a.Od||!1;if(Tm(a)){var d=this.vm;this.o=function(){return dm(d).catch(function(g){g=Fc(b,new uc(b.h?20:32,"TRG:Disposed",g));b.i=g;var h;(h=b.h)==null||h.dispose();b.h=void 0;b.Tb.reject(g)})};
fm(d,function(){return void Um(b)});
d.I===2&&Um(this)}else this.o=a.Aj,Um(this);var e=this.logger.share();e.Oa("o");var f=new ul(e,"o");this.Tb.promise.then(function(){f.done();e.Za();e.dispose()},function(){return void e.dispose()});
this.addOnDisposeCallback(function(){b.h?(b.h.dispose(),b.h=void 0):b.i?b.logger.Za():(b.i=Fc(b,new uc(32,"TNP:Disposed")),b.logger.Za(),b.Tb.reject(b.i))});
xc(this,this.logger)}
v(Sm,J);function Vm(a,b){if(!(b instanceof uc))if(b instanceof dl){var c=Error(b.toString());c.stack=b.stack;b=new uc(11,"EBH:Error",c)}else b=new uc(12,"BSO:Unknown",b);return Fc(a,b)}
function Um(a){var b,c,d,e,f,g,h,k,l,m,p,r,t,x,y;return C(function(w){switch(w.h){case 1:b=void 0;a.j++;c=new Ll;a.vm instanceof Zl&&a.vm.o.push(c.promise);if(!a.Od){w.v(2);break}d=new Ll;setTimeout(function(){return void d.resolve()});
return w.yield(d.promise,2);case 2:return e=a.logger.share(),w.u(4,5),a.state=5,f={},g=[],w.yield(km(a.vm.snapshot({Ma:f,Je:g}),a.Xb.Eg,function(){return Promise.reject(new uc(15,"MDA:Timeout"))}),7);
case 7:h=w.i;if(a.J)throw new uc(a.h?20:32,"MDA:Disposed");k=g[0];a.state=6;return w.yield(km(Wm(a.Ta,h),a.Xb.yf,function(){return Promise.reject(new uc(10,"BWB:Timeout"))}),8);
case 8:l=w.i;if(a.J)throw new uc(a.h?20:32,"BWB:Disposed");a.state=7;b=xl(e,function(){var F=Xm(a,l,c,k);F.j.promise.then(function(){return void a.o()});
return F},"i");
case 5:w.Z();e.dispose();w.fa(6);break;case 4:m=w.j();(p=b)==null||p.dispose();if(!a.i){r=Vm(a,m);c.resolve();var I;if(I=a.vm instanceof Zl&&a.j<2)a:if(m instanceof uc)I=m.code!==32&&m.code!==20&&m.code!==10;else{if(m instanceof dl)switch(m.code){case 2:case 13:case 14:case 4:break;default:I=!1;break a}I=!0}if(I)return t=(1+Math.random()*.25)*(a.h?6E4:1E3),x=setTimeout(function(){return void a.o()},t),a.addOnDisposeCallback(function(){return void clearTimeout(x)}),w.return();
a.i=r}e.wa(a.h?13:14);a.Tb.reject(a.i);return w.return();case 6:a.state=8,a.j=0,(y=a.h)==null||y.dispose(),a.h=b,a.Tb.resolve(),w.o()}})}
function Xm(a,b,c,d){var e=tg(b,2)*1E3;if(e<=0)throw new uc(31,"TTM:Invalid");if(vg(b,4))return new Mm(a.logger,vg(b,4),e);if(!tg(b,3))return new Lm(a.logger,Td(hg(b)),e);if(!d)throw new uc(4,"PMD:Undefined");d=d(Td(hg(b)));if(typeof d!=="function")throw new uc(16,"APF:Failed");a.u=Math.floor((Date.now()+e)/1E3);a=new Km(a.logger,d,tg(b,3),e);a.addOnDisposeCallback(function(){return void c.resolve()});
return a}
Sm.prototype.mb=function(a){return Ym(this,Object.assign({},a),!1)};
Sm.prototype.Uc=function(a){return Ym(this,Object.assign({},a),!0)};
function Fc(a,b){a.logger.wa(b.code);a.onError(b);return b}
function Zm(a,b){b=b instanceof uc?b:new uc(5,"TVD:error",b);return Fc(a,b)}
function Ym(a,b,c){try{if(a.J)throw new uc(21,"BNT:disposed");if(!a.h&&a.i)throw a.i;var d,e;return(e=(d=$m(a,b,c))!=null?d:an(a,b,c))!=null?e:bn(a,b,c)}catch(f){if(!b.Xf)throw Zm(a,f);return cn(a,c,f)}}
function $m(a,b,c){var d;return(d=a.h)==null?void 0:Jm(d,function(){return dn(a,b)},c,function(e){var f;
if(a.h instanceof Km&&((f=b.Dc)==null?0:f.Fg))try{var g;(g=a.cache)==null||Bm(g,dn(a,b),e,b.Dc.Td,a.u-120)}catch(h){Fc(a,new uc(24,"ELX:write",h))}})}
function an(a,b,c){var d;if((d=b.Dc)!=null&&d.Ue)try{var e,f=(e=a.cache)==null?void 0:Cm(e,dn(a,b),b.Dc.Td);return f?c?xl(a.logger,function(){return Ed(f,2)},"a"):f:void 0}catch(g){Fc(a,new uc(23,"RXO:read",g))}}
function bn(a,b,c){var d={stack:[],error:void 0,rb:!1};try{if(!b.Wf)throw new uc(29,"SDF:notready");return Jm(bb(d,new Qm(a.logger,0,a.state)),function(){return dn(a,b)},c)}catch(e){d.error=e,d.rb=!0}finally{cb(d)}}
function cn(a,b,c){var d={stack:[],error:void 0,rb:!1};try{var e=Zm(a,c);return Jm(bb(d,new Nm(a.logger,e)),function(){return[]},b)}catch(f){d.error=f,d.rb=!0}finally{cb(d)}}
function dn(a,b){return b.qd?b.qd:b.Ma?xl(a.logger,function(){return b.qd=Pm(b.Ma)},"c"):[]}
var Tm=function(a){return xe(function(b){if(!Ee(b))return!1;for(var c=z(Object.entries(a)),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;if(!(d in b)){if(e.qj===!0)continue;return!1}if(!e(b[d]))return!1}return!0})}({vm:function(a){return xe(function(b){return b instanceof a})}(Zl)},"");function en(){if(!fn){fn=new Yk(new gn);var a=O("client_streamz_web_flush_count",-1);a!==-1&&(fn.j=a)}this.h=a=fn;a.Db("/client_streamz/youtube/aba/gac",Oc("type"),Oc("sequence"))}
en.prototype.la=function(a,b){this.h.Ab("/client_streamz/youtube/aba/gac",a,b)};var hn=window;function jn(a){var b=kn;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function ln(){var a=[];jn(function(b){a.push(b)});
return a}
;var kn={Qg:"allow-forms",Rg:"allow-modals",Sg:"allow-orientation-lock",Tg:"allow-pointer-lock",Ug:"allow-popups",Vg:"allow-popups-to-escape-sandbox",Wg:"allow-presentation",Xg:"allow-same-origin",Yg:"allow-scripts",Zg:"allow-top-navigation",ah:"allow-top-navigation-by-user-activation"},mn=Ek(function(){return ln()});
function nn(){var a=on(),b={};Pb(mn(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function on(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function pn(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var qn=(new Date).getTime();function rn(a){this.D=M(a)}
v(rn,N);var sn=Oh(rn);function tn(a){ok.call(this);var b=this;this.B=this.j=0;this.Ia=a!=null?a:{xa:function(e,f){return setTimeout(e,f)},
ya:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return C(function(e){return e.yield(un(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||vn(this)}
v(tn,ok);function wn(){var a=xn;tn.instance||(tn.instance=new tn(a));return tn.instance}
tn.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ia.ya(this.B);delete tn.instance};
tn.prototype.Aa=function(){return this.h};
function vn(a){a.B=a.Ia.xa(function(){var b;return C(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.v(3):c.yield(un(a),3):c.yield(un(a),3);vn(a);c.o()})},3E4)}
function un(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return C(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,h.u(2,3),d&&(a.j=a.Ia.xa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.Z();a.u=void 0;a.j&&(a.Ia.ya(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?pk(a,"networkstatus-online"):pk(a,"networkstatus-offline"));c(g);h.fa(0);break;case 2:h.j(),g=!1,h.v(3)}})})}
;function yn(){this.data=[];this.h=-1}
yn.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
yn.prototype.get=function(a){return!!this.data[a]};
function zn(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function An(){this.blockSize=-1}
;function Bn(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
v(Bn,An);Bn.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Cn(a,b,c){c||(c=0);var d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Bn.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Cn(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Cn(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Cn(this,e);f=0;break}}this.i=f;this.o+=b}};
Bn.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Cn(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Dn(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function En(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Fn(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Dn(a).match(/\S+/g)||[],b=Ob(a,b)>=0);return b}
function Gn(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Fn(a,"inverted-hdpi")&&En(a,Array.prototype.filter.call(a.classList?a.classList:Dn(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Hn(){}
Hn.prototype.next=function(){return In};
var In={done:!0,value:void 0};Hn.prototype.Cb=function(){return this};function Jn(a){if(a instanceof Kn||a instanceof Ln||a instanceof Mn)return a;if(typeof a.next=="function")return new Kn(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Kn(function(){return a[Symbol.iterator]()});
if(typeof a.Cb=="function")return new Kn(function(){return a.Cb()});
throw Error("Not an iterator or iterable.");}
function Kn(a){this.h=a}
Kn.prototype.Cb=function(){return new Ln(this.h())};
Kn.prototype[Symbol.iterator]=function(){return new Mn(this.h())};
Kn.prototype.i=function(){return new Mn(this.h())};
function Ln(a){this.h=a}
v(Ln,Hn);Ln.prototype.next=function(){return this.h.next()};
Ln.prototype[Symbol.iterator]=function(){return new Mn(this.h)};
Ln.prototype.i=function(){return new Mn(this.h)};
function Mn(a){Kn.call(this,function(){return a});
this.j=a}
v(Mn,Kn);Mn.prototype.next=function(){return this.j.next()};function Nn(a){J.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
Xa(Nn,J);n=Nn.prototype;n.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
n.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ac(a)}return!1};
n.Ac=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ub(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
n.Bb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],On(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.J;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Ac(c)}}return f!=0}return!1};
function On(a,b,c){Ak(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ac,this),delete this.i[a])}else this.h.length=0,this.i={}};
n.ba=function(){Nn.Ga.ba.call(this);this.clear();this.j.length=0};function Pn(a){this.h=a}
Pn.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new el).serialize(b))};
Pn.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Pn.prototype.remove=function(a){this.h.remove(a)};function Qn(a){this.h=a}
Xa(Qn,Pn);function Rn(a){this.data=a}
function Sn(a){return a===void 0||a instanceof Rn?a:new Rn(a)}
Qn.prototype.set=function(a,b){Qn.Ga.set.call(this,a,Sn(b))};
Qn.prototype.i=function(a){a=Qn.Ga.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Qn.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Tn(a){this.h=a}
Xa(Tn,Qn);Tn.prototype.set=function(a,b,c){if(b=Sn(b)){if(c){if(c<Va()){Tn.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Va()}Tn.Ga.set.call(this,a,b)};
Tn.prototype.i=function(a){var b=Tn.Ga.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Va()||c&&c>Va())Tn.prototype.remove.call(this,a);else return b}};function Un(){}
;function Vn(){}
Xa(Vn,Un);Vn.prototype[Symbol.iterator]=function(){return Jn(this.Cb(!0)).i()};
Vn.prototype.clear=function(){var a=Array.from(this);a=z(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Wn(a){this.h=a;this.i=null}
Xa(Wn,Vn);n=Wn.prototype;n.isAvailable=function(){if(this.i===null){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
n.set=function(a,b){Xn(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){Xn(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){Xn(this);this.h.removeItem(a)};
n.Cb=function(a){Xn(this);var b=0,c=this.h,d=new Hn;d.next=function(){if(b>=c.length)return In;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){Xn(this);this.h.clear()};
n.key=function(a){Xn(this);return this.h.key(a)};
function Xn(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");a.isAvailable()||dd(Error("Storage mechanism: Storage unavailable"))}
;function Yn(){var a=null;try{a=E.localStorage||null}catch(b){}Wn.call(this,a)}
Xa(Yn,Wn);function Zn(a,b){this.i=a;this.h=b+"::"}
Xa(Zn,Vn);Zn.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Zn.prototype.get=function(a){return this.i.get(this.h+a)};
Zn.prototype.remove=function(a){this.i.remove(this.h+a)};
Zn.prototype.Cb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Hn;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};function $n(a){if(a.hb&&typeof a.hb=="function")return a.hb();if(typeof Map!=="undefined"&&a instanceof Map||typeof Set!=="undefined"&&a instanceof Set)return Array.from(a.values());if(typeof a==="string")return a.split("");if(Ka(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ei(a)}
function ao(a){if(a.kc&&typeof a.kc=="function")return a.kc();if(!a.hb||typeof a.hb!="function"){if(typeof Map!=="undefined"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set!=="undefined"&&a instanceof Set)){if(Ka(a)||typeof a==="string"){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}}
function bo(a,b,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(b,c);else if(Ka(a)||typeof a==="string")Array.prototype.forEach.call(a,b,c);else for(var d=ao(a),e=$n(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}
;function co(a){this.i=this.B=this.j="";this.G=null;this.u=this.h="";this.o=!1;var b;a instanceof co?(this.o=a.o,eo(this,a.j),this.B=a.B,this.i=a.i,fo(this,a.G),this.h=a.h,go(this,a.H.clone()),this.u=a.u):a&&(b=String(a).match(ec))?(this.o=!1,eo(this,b[1]||"",!0),this.B=ho(b[2]||""),this.i=ho(b[3]||"",!0),fo(this,b[4]),this.h=ho(b[5]||"",!0),go(this,b[6]||"",!0),this.u=ho(b[7]||"")):(this.o=!1,this.H=new io(null,this.o))}
co.prototype.toString=function(){var a=[],b=this.j;b&&a.push(jo(b,ko,!0),":");var c=this.i;if(c||b=="file")a.push("//"),(b=this.B)&&a.push(jo(b,ko,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.G,c!=null&&a.push(":",String(c));if(c=this.h)this.i&&c.charAt(0)!="/"&&a.push("/"),a.push(jo(c,c.charAt(0)=="/"?lo:mo,!0));(c=this.H.toString())&&a.push("?",c);(c=this.u)&&a.push("#",jo(c,no));return a.join("")};
co.prototype.resolve=function(a){var b=this.clone(),c=!!a.j;c?eo(b,a.j):c=!!a.B;c?b.B=a.B:c=!!a.i;c?b.i=a.i:c=a.G!=null;var d=a.h;if(c)fo(b,a.G);else if(c=!!a.h){if(d.charAt(0)!="/")if(this.i&&!this.h)d="/"+d;else{var e=b.h.lastIndexOf("/");e!=-1&&(d=b.h.slice(0,e+1)+d)}e=d;if(e==".."||e==".")d="";else if(e.indexOf("./")!=-1||e.indexOf("/.")!=-1){d=e.lastIndexOf("/",0)==0;e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];h=="."?d&&g==e.length&&f.push(""):h==".."?((f.length>1||f.length==1&&
f[0]!="")&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.h=d:c=a.H.toString()!=="";c?go(b,a.H.clone()):c=!!a.u;c&&(b.u=a.u);return b};
co.prototype.clone=function(){return new co(this)};
function eo(a,b,c){a.j=c?ho(b,!0):b;a.j&&(a.j=a.j.replace(/:$/,""))}
function fo(a,b){if(b){b=Number(b);if(isNaN(b)||b<0)throw Error("Bad port number "+b);a.G=b}else a.G=null}
function go(a,b,c){b instanceof io?(a.H=b,oo(a.H,a.o)):(c||(b=jo(b,po)),a.H=new io(b,a.o))}
function ho(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function jo(a,b,c){return typeof a==="string"?(a=encodeURI(a).replace(b,qo),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function qo(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var ko=/[#\/\?@]/g,mo=/[#\?:]/g,lo=/[#\?]/g,po=/[#\?@]/g,no=/#/g;function io(a,b){this.i=this.h=null;this.j=a||null;this.o=!!b}
function ro(a){a.h||(a.h=new Map,a.i=0,a.j&&lc(a.j,function(b,c){a.add(cc(b),c)}))}
n=io.prototype;n.add=function(a,b){ro(this);this.j=null;a=so(this,a);var c=this.h.get(a);c||this.h.set(a,c=[]);c.push(b);this.i=this.i+1;return this};
n.remove=function(a){ro(this);a=so(this,a);return this.h.has(a)?(this.j=null,this.i=this.i-this.h.get(a).length,this.h.delete(a)):!1};
n.clear=function(){this.h=this.j=null;this.i=0};
function to(a,b){ro(a);b=so(a,b);return a.h.has(b)}
n.forEach=function(a,b){ro(this);this.h.forEach(function(c,d){c.forEach(function(e){a.call(b,e,d,this)},this)},this)};
n.kc=function(){ro(this);for(var a=Array.from(this.h.values()),b=Array.from(this.h.keys()),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
n.hb=function(a){ro(this);var b=[];if(typeof a==="string")to(this,a)&&(b=b.concat(this.h.get(so(this,a))));else{a=Array.from(this.h.values());for(var c=0;c<a.length;c++)b=b.concat(a[c])}return b};
n.set=function(a,b){ro(this);this.j=null;a=so(this,a);to(this,a)&&(this.i=this.i-this.h.get(a).length);this.h.set(a,[b]);this.i=this.i+1;return this};
n.get=function(a,b){if(!a)return b;a=this.hb(a);return a.length>0?String(a[0]):b};
n.toString=function(){if(this.j)return this.j;if(!this.h)return"";for(var a=[],b=Array.from(this.h.keys()),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.hb(d);for(var f=0;f<d.length;f++){var g=e;d[f]!==""&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.j=a.join("&")};
n.clone=function(){var a=new io;a.j=this.j;this.h&&(a.h=new Map(this.h),a.i=this.i);return a};
function so(a,b){b=String(b);a.o&&(b=b.toLowerCase());return b}
function oo(a,b){b&&!a.o&&(ro(a),a.j=null,a.h.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(this.remove(d),this.remove(e),c.length>0&&(this.j=null,this.h.set(so(this,e),Vb(c)),this.i=this.i+c.length))},a));
a.o=b}
n.extend=function(a){for(var b=0;b<arguments.length;b++)bo(arguments[b],function(c,d){this.add(d,c)},this)};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var P={},uo=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.Id=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var vo={Eb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},wo={Eb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Xd:function(a){return[].concat.apply([],a)}};
P.Ag=function(){uo?(P.zb=Uint8Array,P.Qa=Uint16Array,P.Ne=Int32Array,P.assign(P,vo)):(P.zb=Array,P.Qa=Array,P.Ne=Array,P.assign(P,wo))};
P.Ag();var xo=!0;try{new Uint8Array(1)}catch(a){xo=!1}
function yo(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new P.zb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var zo={};zo=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Ao={},Bo,Co=[],Do=0;Do<256;Do++){Bo=Do;for(var Eo=0;Eo<8;Eo++)Bo=Bo&1?3988292384^Bo>>>1:Bo>>>1;Co[Do]=Bo}Ao=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Co[(a^b[d])&255];return a^-1};var Fo={};Fo={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Go(a){for(var b=a.length;--b>=0;)a[b]=0}
var Ho=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Io=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Jo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ko=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Lo=Array(576);Go(Lo);var Mo=Array(60);Go(Mo);var No=Array(512);Go(No);var Oo=Array(256);Go(Oo);var Po=Array(29);Go(Po);var Qo=Array(30);Go(Qo);function Ro(a,b,c,d,e){this.ze=a;this.wf=b;this.uf=c;this.gf=d;this.Tf=e;this.be=a&&a.length}
var So,To,Uo;function Vo(a,b){this.Wd=a;this.Pb=0;this.ob=b}
function Wo(a,b){a.ga[a.pending++]=b&255;a.ga[a.pending++]=b>>>8&255}
function Xo(a,b,c){a.ma>16-c?(a.va|=b<<a.ma&65535,Wo(a,a.va),a.va=b>>16-a.ma,a.ma+=c-16):(a.va|=b<<a.ma&65535,a.ma+=c)}
function Yo(a,b,c){Xo(a,c[b*2],c[b*2+1])}
function Zo(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function $o(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Zo(d[e]++,e))}
function ap(a){var b;for(b=0;b<286;b++)a.za[b*2]=0;for(b=0;b<30;b++)a.qb[b*2]=0;for(b=0;b<19;b++)a.pa[b*2]=0;a.za[512]=1;a.Ya=a.Vb=0;a.Ea=a.matches=0}
function bp(a){a.ma>8?Wo(a,a.va):a.ma>0&&(a.ga[a.pending++]=a.va);a.va=0;a.ma=0}
function cp(a,b,c){bp(a);Wo(a,c);Wo(a,~c);P.Eb(a.ga,a.window,b,c,a.pending);a.pending+=c}
function dp(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ep(a,b,c){for(var d=a.ha[c],e=c<<1;e<=a.Wa;){e<a.Wa&&dp(b,a.ha[e+1],a.ha[e],a.depth)&&e++;if(dp(b,d,a.ha[e],a.depth))break;a.ha[c]=a.ha[e];c=e;e<<=1}a.ha[c]=d}
function fp(a,b,c){var d=0;if(a.Ea!==0){do{var e=a.ga[a.fc+d*2]<<8|a.ga[a.fc+d*2+1];var f=a.ga[a.wd+d];d++;if(e===0)Yo(a,f,b);else{var g=Oo[f];Yo(a,g+256+1,b);var h=Ho[g];h!==0&&(f-=Po[g],Xo(a,f,h));e--;g=e<256?No[e]:No[256+(e>>>7)];Yo(a,g,c);h=Io[g];h!==0&&(e-=Qo[g],Xo(a,e,h))}}while(d<a.Ea)}Yo(a,256,b)}
function gp(a,b){var c=b.Wd,d=b.ob.ze,e=b.ob.be,f=b.ob.gf,g,h=-1;a.Wa=0;a.Lb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ha[++a.Wa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Wa<2;){var k=a.ha[++a.Wa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Ya--;e&&(a.Vb-=d[k*2+1])}b.Pb=h;for(g=a.Wa>>1;g>=1;g--)ep(a,c,g);k=f;do g=a.ha[1],a.ha[1]=a.ha[a.Wa--],ep(a,c,1),d=a.ha[1],a.ha[--a.Lb]=g,a.ha[--a.Lb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ha[1]=k++,ep(a,c,1);while(a.Wa>=
2);a.ha[--a.Lb]=a.ha[1];g=b.Wd;k=b.Pb;d=b.ob.ze;e=b.ob.be;f=b.ob.wf;var l=b.ob.uf,m=b.ob.Tf,p,r=0;for(p=0;p<=15;p++)a.Sa[p]=0;g[a.ha[a.Lb]*2+1]=0;for(b=a.Lb+1;b<573;b++){var t=a.ha[b];p=g[g[t*2+1]*2+1]+1;p>m&&(p=m,r++);g[t*2+1]=p;if(!(t>k)){a.Sa[p]++;var x=0;t>=l&&(x=f[t-l]);var y=g[t*2];a.Ya+=y*(p+x);e&&(a.Vb+=y*(d[t*2+1]+x))}}if(r!==0){do{for(p=m-1;a.Sa[p]===0;)p--;a.Sa[p]--;a.Sa[p+1]+=2;a.Sa[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(t=a.Sa[p];t!==0;)d=a.ha[--b],d>k||(g[d*2+1]!==p&&(a.Ya+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),t--)}$o(c,h,a.Sa)}
function hp(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.pa[l*2]+=g:l!==0?(l!==e&&a.pa[l*2]++,a.pa[32]++):g<=10?a.pa[34]++:a.pa[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ip(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Yo(a,l,a.pa);while(--g!==0)}else l!==0?(l!==e&&(Yo(a,l,a.pa),g--),Yo(a,16,a.pa),Xo(a,g-3,2)):g<=10?(Yo(a,17,a.pa),Xo(a,g-3,3)):(Yo(a,18,a.pa),Xo(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function jp(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.za[c*2]!==0)return 0;if(a.za[18]!==0||a.za[20]!==0||a.za[26]!==0)return 1;for(c=32;c<256;c++)if(a.za[c*2]!==0)return 1;return 0}
var kp=!1;function lp(a,b,c){a.ga[a.fc+a.Ea*2]=b>>>8&255;a.ga[a.fc+a.Ea*2+1]=b&255;a.ga[a.wd+a.Ea]=c&255;a.Ea++;b===0?a.za[c*2]++:(a.matches++,b--,a.za[(Oo[c]+256+1)*2]++,a.qb[(b<256?No[b]:No[256+(b>>>7)])*2]++);return a.Ea===a.nc-1}
;function mp(a,b){a.msg=Fo[b];return b}
function np(a){for(var b=a.length;--b>=0;)a[b]=0}
function op(a){var b=a.state,c=b.pending;c>a.W&&(c=a.W);c!==0&&(P.Eb(a.output,b.ga,b.sc,c,a.Rb),a.Rb+=c,b.sc+=c,a.Kd+=c,a.W-=c,b.pending-=c,b.pending===0&&(b.sc=0))}
function pp(a,b){var c=a.Ba>=0?a.Ba:-1,d=a.A-a.Ba,e=0;if(a.level>0){a.U.od===2&&(a.U.od=jp(a));gp(a,a.Nc);gp(a,a.Ic);hp(a,a.za,a.Nc.Pb);hp(a,a.qb,a.Ic.Pb);gp(a,a.Sd);for(e=18;e>=3&&a.pa[Ko[e]*2+1]===0;e--);a.Ya+=3*(e+1)+5+5+4;var f=a.Ya+3+7>>>3;var g=a.Vb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Xo(a,b?1:0,3),cp(a,c,d);else if(a.strategy===4||g===f)Xo(a,2+(b?1:0),3),fp(a,Lo,Mo);else{Xo(a,4+(b?1:0),3);c=a.Nc.Pb+1;d=a.Ic.Pb+1;e+=1;Xo(a,c-257,5);Xo(a,d-1,5);Xo(a,e-4,4);for(f=0;f<e;f++)Xo(a,
a.pa[Ko[f]*2+1],3);ip(a,a.za,c-1);ip(a,a.qb,d-1);fp(a,a.za,a.qb)}ap(a);b&&bp(a);a.Ba=a.A;op(a.U)}
function R(a,b){a.ga[a.pending++]=b}
function qp(a,b){a.ga[a.pending++]=b>>>8&255;a.ga[a.pending++]=b&255}
function rp(a,b){var c=a.ge,d=a.A,e=a.Ca,f=a.je,g=a.A>a.sa-262?a.A-(a.sa-262):0,h=a.window,k=a.pb,l=a.Pa,m=a.A+258,p=h[d+e-1],r=h[d+e];a.Ca>=a.Zd&&(c>>=2);f>a.F&&(f=a.F);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Ob=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.F?e:a.F}
function sp(a){var b=a.sa,c;do{var d=a.Le-a.F-a.A;if(a.A>=b+(b-262)){P.Eb(a.window,a.window,b,b,0);a.Ob-=b;a.A-=b;a.Ba-=b;var e=c=a.Mc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Pa[--e],a.Pa[e]=f>=b?f-b:0;while(--c);d+=b}if(a.U.ta===0)break;e=a.U;c=a.window;f=a.A+a.F;var g=e.ta;g>d&&(g=d);g===0?c=0:(e.ta-=g,P.Eb(c,e.input,e.wb,g,f),e.state.wrap===1?e.P=zo(e.P,c,g,f):e.state.wrap===2&&(e.P=Ao(e.P,c,g,f)),e.wb+=g,e.yb+=g,c=g);a.F+=c;if(a.F+a.ra>=3)for(d=a.A-a.ra,a.V=a.window[d],
a.V=(a.V<<a.Va^a.window[d+1])&a.Ua;a.ra&&!(a.V=(a.V<<a.Va^a.window[d+3-1])&a.Ua,a.Pa[d&a.pb]=a.head[a.V],a.head[a.V]=d,d++,a.ra--,a.F+a.ra<3););}while(a.F<262&&a.U.ta!==0)}
function tp(a,b){for(var c;;){if(a.F<262){sp(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.V=(a.V<<a.Va^a.window[a.A+3-1])&a.Ua,c=a.Pa[a.A&a.pb]=a.head[a.V],a.head[a.V]=a.A);c!==0&&a.A-c<=a.sa-262&&(a.Y=rp(a,c));if(a.Y>=3)if(c=lp(a,a.A-a.Ob,a.Y-3),a.F-=a.Y,a.Y<=a.yd&&a.F>=3){a.Y--;do a.A++,a.V=(a.V<<a.Va^a.window[a.A+3-1])&a.Ua,a.Pa[a.A&a.pb]=a.head[a.V],a.head[a.V]=a.A;while(--a.Y!==0);a.A++}else a.A+=a.Y,a.Y=0,a.V=a.window[a.A],a.V=(a.V<<a.Va^a.window[a.A+1])&a.Ua;else c=lp(a,0,
a.window[a.A]),a.F--,a.A++;if(c&&(pp(a,!1),a.U.W===0))return 1}a.ra=a.A<2?a.A:2;return b===4?(pp(a,!0),a.U.W===0?3:4):a.Ea&&(pp(a,!1),a.U.W===0)?1:2}
function up(a,b){for(var c,d;;){if(a.F<262){sp(a);if(a.F<262&&b===0)return 1;if(a.F===0)break}c=0;a.F>=3&&(a.V=(a.V<<a.Va^a.window[a.A+3-1])&a.Ua,c=a.Pa[a.A&a.pb]=a.head[a.V],a.head[a.V]=a.A);a.Ca=a.Y;a.ne=a.Ob;a.Y=2;c!==0&&a.Ca<a.yd&&a.A-c<=a.sa-262&&(a.Y=rp(a,c),a.Y<=5&&(a.strategy===1||a.Y===3&&a.A-a.Ob>4096)&&(a.Y=2));if(a.Ca>=3&&a.Y<=a.Ca){d=a.A+a.F-3;c=lp(a,a.A-1-a.ne,a.Ca-3);a.F-=a.Ca-1;a.Ca-=2;do++a.A<=d&&(a.V=(a.V<<a.Va^a.window[a.A+3-1])&a.Ua,a.Pa[a.A&a.pb]=a.head[a.V],a.head[a.V]=a.A);
while(--a.Ca!==0);a.tb=0;a.Y=2;a.A++;if(c&&(pp(a,!1),a.U.W===0))return 1}else if(a.tb){if((c=lp(a,0,a.window[a.A-1]))&&pp(a,!1),a.A++,a.F--,a.U.W===0)return 1}else a.tb=1,a.A++,a.F--}a.tb&&(lp(a,0,a.window[a.A-1]),a.tb=0);a.ra=a.A<2?a.A:2;return b===4?(pp(a,!0),a.U.W===0?3:4):a.Ea&&(pp(a,!1),a.U.W===0)?1:2}
function vp(a,b){for(var c,d,e,f=a.window;;){if(a.F<=258){sp(a);if(a.F<=258&&b===0)return 1;if(a.F===0)break}a.Y=0;if(a.F>=3&&a.A>0&&(d=a.A-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.A+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.Y=258-(e-d);a.Y>a.F&&(a.Y=a.F)}a.Y>=3?(c=lp(a,1,a.Y-3),a.F-=a.Y,a.A+=a.Y,a.Y=0):(c=lp(a,0,a.window[a.A]),a.F--,a.A++);if(c&&(pp(a,!1),a.U.W===0))return 1}a.ra=0;return b===4?(pp(a,!0),a.U.W===0?3:4):
a.Ea&&(pp(a,!1),a.U.W===0)?1:2}
function wp(a,b){for(var c;;){if(a.F===0&&(sp(a),a.F===0)){if(b===0)return 1;break}a.Y=0;c=lp(a,0,a.window[a.A]);a.F--;a.A++;if(c&&(pp(a,!1),a.U.W===0))return 1}a.ra=0;return b===4?(pp(a,!0),a.U.W===0?3:4):a.Ea&&(pp(a,!1),a.U.W===0)?1:2}
function xp(a,b,c,d,e){this.Df=a;this.Sf=b;this.Yf=c;this.Rf=d;this.Af=e}
var yp;yp=[new xp(0,0,0,0,function(a,b){var c=65535;for(c>a.Fa-5&&(c=a.Fa-5);;){if(a.F<=1){sp(a);if(a.F===0&&b===0)return 1;if(a.F===0)break}a.A+=a.F;a.F=0;var d=a.Ba+c;if(a.A===0||a.A>=d)if(a.F=a.A-d,a.A=d,pp(a,!1),a.U.W===0)return 1;if(a.A-a.Ba>=a.sa-262&&(pp(a,!1),a.U.W===0))return 1}a.ra=0;if(b===4)return pp(a,!0),a.U.W===0?3:4;a.A>a.Ba&&pp(a,!1);return 1}),
new xp(4,4,8,4,tp),new xp(4,5,16,8,tp),new xp(4,6,32,32,tp),new xp(4,4,16,16,up),new xp(8,16,32,32,up),new xp(8,16,128,128,up),new xp(8,32,128,256,up),new xp(32,128,258,1024,up),new xp(32,258,258,4096,up)];
function zp(){this.U=null;this.status=0;this.ga=null;this.wrap=this.pending=this.sc=this.Fa=0;this.K=null;this.Ha=0;this.method=8;this.Nb=-1;this.pb=this.Nd=this.sa=0;this.window=null;this.Le=0;this.head=this.Pa=null;this.je=this.Zd=this.strategy=this.level=this.yd=this.ge=this.Ca=this.F=this.Ob=this.A=this.tb=this.ne=this.Y=this.Ba=this.Va=this.Ua=this.ud=this.Mc=this.V=0;this.za=new P.Qa(1146);this.qb=new P.Qa(122);this.pa=new P.Qa(78);np(this.za);np(this.qb);np(this.pa);this.Sd=this.Ic=this.Nc=
null;this.Sa=new P.Qa(16);this.ha=new P.Qa(573);np(this.ha);this.Lb=this.Wa=0;this.depth=new P.Qa(573);np(this.depth);this.ma=this.va=this.ra=this.matches=this.Vb=this.Ya=this.fc=this.Ea=this.nc=this.wd=0}
function Ap(a,b){if(!a||!a.state||b>5||b<0)return a?mp(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ta!==0||c.status===666&&b!==4)return mp(a,a.W===0?-5:-2);c.U=a;var d=c.Nb;c.Nb=b;if(c.status===42)if(c.wrap===2)a.P=0,R(c,31),R(c,139),R(c,8),c.K?(R(c,(c.K.text?1:0)+(c.K.ib?2:0)+(c.K.extra?4:0)+(c.K.name?8:0)+(c.K.comment?16:0)),R(c,c.K.time&255),R(c,c.K.time>>8&255),R(c,c.K.time>>16&255),R(c,c.K.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.K.os&255),c.K.extra&&c.K.extra.length&&
(R(c,c.K.extra.length&255),R(c,c.K.extra.length>>8&255)),c.K.ib&&(a.P=Ao(a.P,c.ga,c.pending,0)),c.Ha=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.Nd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.A!==0&&(e|=32);c.status=113;qp(c,e+(31-e%31));c.A!==0&&(qp(c,a.P>>>16),qp(c,a.P&65535));a.P=1}if(c.status===69)if(c.K.extra){for(e=c.pending;c.Ha<(c.K.extra.length&65535)&&(c.pending!==c.Fa||
(c.K.ib&&c.pending>e&&(a.P=Ao(a.P,c.ga,c.pending-e,e)),op(a),e=c.pending,c.pending!==c.Fa));)R(c,c.K.extra[c.Ha]&255),c.Ha++;c.K.ib&&c.pending>e&&(a.P=Ao(a.P,c.ga,c.pending-e,e));c.Ha===c.K.extra.length&&(c.Ha=0,c.status=73)}else c.status=73;if(c.status===73)if(c.K.name){e=c.pending;do{if(c.pending===c.Fa&&(c.K.ib&&c.pending>e&&(a.P=Ao(a.P,c.ga,c.pending-e,e)),op(a),e=c.pending,c.pending===c.Fa)){var f=1;break}f=c.Ha<c.K.name.length?c.K.name.charCodeAt(c.Ha++)&255:0;R(c,f)}while(f!==0);c.K.ib&&c.pending>
e&&(a.P=Ao(a.P,c.ga,c.pending-e,e));f===0&&(c.Ha=0,c.status=91)}else c.status=91;if(c.status===91)if(c.K.comment){e=c.pending;do{if(c.pending===c.Fa&&(c.K.ib&&c.pending>e&&(a.P=Ao(a.P,c.ga,c.pending-e,e)),op(a),e=c.pending,c.pending===c.Fa)){f=1;break}f=c.Ha<c.K.comment.length?c.K.comment.charCodeAt(c.Ha++)&255:0;R(c,f)}while(f!==0);c.K.ib&&c.pending>e&&(a.P=Ao(a.P,c.ga,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.K.ib?(c.pending+2>c.Fa&&op(a),c.pending+2<=c.Fa&&(R(c,
a.P&255),R(c,a.P>>8&255),a.P=0,c.status=113)):c.status=113);if(c.pending!==0){if(op(a),a.W===0)return c.Nb=-1,0}else if(a.ta===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return mp(a,-5);if(c.status===666&&a.ta!==0)return mp(a,-5);if(a.ta!==0||c.F!==0||b!==0&&c.status!==666){d=c.strategy===2?wp(c,b):c.strategy===3?vp(c,b):yp[c.level].Af(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.W===0&&(c.Nb=-1),0;if(d===2&&(b===1?(Xo(c,2,3),Yo(c,256,Lo),c.ma===16?(Wo(c,c.va),c.va=0,c.ma=0):c.ma>=
8&&(c.ga[c.pending++]=c.va&255,c.va>>=8,c.ma-=8)):b!==5&&(Xo(c,0,3),cp(c,0,0),b===3&&(np(c.head),c.F===0&&(c.A=0,c.Ba=0,c.ra=0))),op(a),a.W===0))return c.Nb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.P&255),R(c,a.P>>8&255),R(c,a.P>>16&255),R(c,a.P>>24&255),R(c,a.yb&255),R(c,a.yb>>8&255),R(c,a.yb>>16&255),R(c,a.yb>>24&255)):(qp(c,a.P>>>16),qp(c,a.P&65535));op(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Bp={};Bp=function(){this.input=null;this.yb=this.ta=this.wb=0;this.output=null;this.Kd=this.W=this.Rb=0;this.msg="";this.state=null;this.od=2;this.P=0};var Cp=Object.prototype.toString;
function Dp(a){if(!(this instanceof Dp))return new Dp(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.U=new Bp;this.U.W=0;var b=this.U;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=mp(b,-2);else{e===8&&(e=9);var k=new zp;b.state=k;k.U=b;k.wrap=h;k.K=null;k.Nd=e;k.sa=1<<k.Nd;k.pb=k.sa-1;k.ud=f+7;k.Mc=1<<k.ud;k.Ua=k.Mc-1;k.Va=~~((k.ud+3-1)/3);k.window=new P.zb(k.sa*2);k.head=new P.Qa(k.Mc);k.Pa=new P.Qa(k.sa);k.nc=1<<f+6;k.Fa=k.nc*4;k.ga=new P.zb(k.Fa);k.fc=1*k.nc;k.wd=3*k.nc;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.yb=b.Kd=0;b.od=2;c=b.state;c.pending=0;c.sc=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.P=c.wrap===2?
0:1;c.Nb=0;if(!kp){d=Array(16);for(f=g=0;f<28;f++)for(Po[f]=g,e=0;e<1<<Ho[f];e++)Oo[g++]=f;Oo[g-1]=f;for(f=g=0;f<16;f++)for(Qo[f]=g,e=0;e<1<<Io[f];e++)No[g++]=f;for(g>>=7;f<30;f++)for(Qo[f]=g<<7,e=0;e<1<<Io[f]-7;e++)No[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Lo[e*2+1]=8,e++,d[8]++;for(;e<=255;)Lo[e*2+1]=9,e++,d[9]++;for(;e<=279;)Lo[e*2+1]=7,e++,d[7]++;for(;e<=287;)Lo[e*2+1]=8,e++,d[8]++;$o(Lo,287,d);for(e=0;e<30;e++)Mo[e*2+1]=5,Mo[e*2]=Zo(e,5);So=new Ro(Lo,Ho,257,286,15);To=new Ro(Mo,
Io,0,30,15);Uo=new Ro([],Jo,0,19,7);kp=!0}c.Nc=new Vo(c.za,So);c.Ic=new Vo(c.qb,To);c.Sd=new Vo(c.pa,Uo);c.va=0;c.ma=0;ap(c);c=0}else c=mp(b,-2);c===0&&(b=b.state,b.Le=2*b.sa,np(b.head),b.yd=yp[b.level].Sf,b.Zd=yp[b.level].Df,b.je=yp[b.level].Yf,b.ge=yp[b.level].Rf,b.A=0,b.Ba=0,b.F=0,b.ra=0,b.Y=b.Ca=2,b.tb=0,b.V=0);b=c}}else b=-2;if(b!==0)throw Error(Fo[b]);a.header&&(b=this.U)&&b.state&&b.state.wrap===2&&(b.state.K=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=yo(a.dictionary):
Cp.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.U;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.F)b=-2;else{b===1&&(a.P=zo(a.P,f,g,0));l.wrap=0;g>=l.sa&&(b===0&&(np(l.head),l.A=0,l.Ba=0,l.ra=0),c=new P.zb(l.sa),P.Eb(c,f,g-l.sa,l.sa,0),f=c,g=l.sa);c=a.ta;d=a.wb;e=a.input;a.ta=g;a.wb=0;a.input=f;for(sp(l);l.F>=3;){f=l.A;g=l.F-2;do l.V=(l.V<<l.Va^l.window[f+3-1])&l.Ua,l.Pa[f&l.pb]=l.head[l.V],l.head[l.V]=f,f++;while(--g);
l.A=f;l.F=2;sp(l)}l.A+=l.F;l.Ba=l.A;l.ra=l.F;l.F=0;l.Y=l.Ca=2;l.tb=0;a.wb=d;a.input=e;a.ta=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Fo[b]);this.aj=!0}}
Dp.prototype.push=function(a,b){var c=this.U,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=yo(a):Cp.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.wb=0;c.ta=c.input.length;do{c.W===0&&(c.output=new P.zb(d),c.Rb=0,c.W=d);a=Ap(c,e);if(a!==1&&a!==0)return Ep(this,a),this.ended=!0,!1;if(c.W===0||c.ta===0&&(e===4||e===2))if(this.options.to==="string"){var f=P.Id(c.output,c.Rb);b=f;f=f.length;if(f<65537&&(b.subarray&&xo||!b.subarray))b=
String.fromCharCode.apply(null,P.Id(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.Id(c.output,c.Rb),this.chunks.push(b)}while((c.ta>0||c.W===0)&&a!==1);if(e===4)return(c=this.U)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=mp(c,-2):(c.state=null,a=d===113?mp(c,-3):0)):a=-2,Ep(this,a),this.ended=!0,a===0;e===2&&(Ep(this,0),c.W=0);return!0};
function Ep(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):P.Xd(a.chunks));a.chunks=[];a.err=b;a.msg=a.U.msg}
function Fp(a,b){b=b||{};b.gzip=!0;b=new Dp(b);b.push(a,!0);if(b.err)throw b.msg||Fo[b.err];return b.result}
;function Gp(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Eb(a):null:null}
function Hp(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?lb(a):null:null}
;function Ip(a){return lb(a===null?"null":a===void 0?"undefined":a)}
;function Jp(a){this.name=a}
;var Kp=new Jp("rawColdConfigGroup");var Lp=new Jp("rawHotConfigGroup");function Mp(a){this.D=M(a)}
v(Mp,N);function Np(a){this.D=M(a)}
v(Np,N);Np.prototype.setTrackingParams=function(a){return dg(this,1,te(a,!1))};var Op=new Jp("continuationCommand");var Pp=new Jp("webCommandMetadata");var Qp=new Jp("signalServiceEndpoint");var Rp={gh:"EMBEDDED_PLAYER_MODE_UNKNOWN",dh:"EMBEDDED_PLAYER_MODE_DEFAULT",fh:"EMBEDDED_PLAYER_MODE_PFP",eh:"EMBEDDED_PLAYER_MODE_PFL"};var Sp=new Jp("feedbackEndpoint");var Ce={Bi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",di:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",oi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ai:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Di:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",mi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Gi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Fi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",ii:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",ti:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Mi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Li:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Ki:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",wi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
ki:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Ni:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",si:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Oi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",bi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Hi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",ci:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",ai:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",mh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",yh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",Ih:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Hh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Lh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",yi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
zi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Sh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Nh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
ji:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",Kh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",Jh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",zh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",xi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",Dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
Ch:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",Ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",gi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",hi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",xh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",Eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",wh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Ci:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED",li:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHORTS_NON_DEFAULT_ASPECT_RATIO",Vh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PLAYER_IN_SQUEEZEBACK",Oh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_CREATOR_AR_GIFT_RECEIVED",fi:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RETURNED_TO_VIDEO_AFTER_FAILED_ATTEMPT_TO_BACKGROUND",Ii:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_AUTO_ZOOM",
Th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_CONTROL",Uh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_PASSIVE_IN_TREATMENT",th:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DISABLE_PLAYER_OPEN_ON_FULLSCREEN",Rh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_RECONNECT_WITH_RETRY",ni:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SINGLE_COLUMN_GRID_TRIGGERED",Qh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_MDX_CONNECTION_TIMEOUT",Ph:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LIVE_GHOST_LOADING_ELIGIBLE",ri:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_STREAMED_GET_WATCH_SUPPORTED",
Ei:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WEBVIEW_CONTAINER",Ji:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_ENTER_PIP"};var Tp=new Jp("shareEndpoint"),Up=new Jp("shareEntityEndpoint"),Vp=new Jp("shareEntityServiceEndpoint"),Wp=new Jp("webPlayerShareEntityServiceEndpoint");var Xp=new Jp("playlistEditEndpoint");var Yp=new Jp("modifyChannelNotificationPreferenceEndpoint");var Zp=new Jp("undoFeedbackEndpoint");var $p=new Jp("unsubscribeEndpoint");var aq=new Jp("subscribeEndpoint");function bq(){var a=cq;H("yt.ads.biscotti.getId_")||G("yt.ads.biscotti.getId_",a)}
function dq(a){G("yt.ads.biscotti.lastId_",a)}
;function eq(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var fq=E.window,gq,hq,iq=(fq==null?void 0:(gq=fq.yt)==null?void 0:gq.config_)||(fq==null?void 0:(hq=fq.ytcfg)==null?void 0:hq.data_)||{};G("yt.config_",iq);function jq(){eq(iq,arguments)}
function T(a,b){return a in iq?iq[a]:b}
function kq(a){var b=iq.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var lq=[];function mq(a){lq.forEach(function(b){return b(a)})}
function nq(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){oq(b)}}:a}
function oq(a){var b=H("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),jq("ERRORS",b));mq(a)}
function pq(a,b,c,d,e){var f=H("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),jq("ERRORS",f))}
;var qq=/^[\w.]*$/,rq={q:!0,search_query:!0};function sq(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=tq(f[0]||""),h=tq(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Wb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],p=String(sq);l.args=[{key:m,value:f[1],query:a,method:uq===p?"unchanged":p}];rq.hasOwnProperty(m)||pq(l)}}return c}
var uq=String(sq);function vq(a){var b=[];Di(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Pb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function wq(a){a.charAt(0)==="?"&&(a=a.substring(1));return sq(a,"&")}
function xq(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),wq(a.length>1?a[1]:a[0])):{}}
function yq(a,b){return zq(a,b||{},!0)}
function zq(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=wq(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return oc(a,e)+d}
function Aq(a){if(!b)var b=window.location.href;var c=a.match(ec)[1]||null,d=hc(a);c&&d?(a=a.match(ec),b=b.match(ec),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?hc(b)===d&&(Number(b.match(ec)[4]||null)||null)===(Number(a.match(ec)[4]||null)||null):!0;return a}
function tq(a){return a&&a.match(qq)?a:cc(a)}
;function Bq(a){var b=Cq;a=a===void 0?H("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=qn;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Pa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();try{var g=hn.history.length}catch(Pa){g=0}e.u_his=g;var h;e.u_h=(h=hn.screen)==null?void 0:h.height;var k;e.u_w=(k=hn.screen)==null?void 0:k.width;var l;e.u_ah=(l=hn.screen)==null?void 0:l.availHeight;var m;e.u_aw=(m=hn.screen)==null?
void 0:m.availWidth;var p;e.u_cd=(p=hn.screen)==null?void 0:p.colorDepth}catch(Pa){}var r;g=b.h;try{var t=g.screenX;var x=g.screenY}catch(Pa){}try{var y=g.outerWidth;var w=g.outerHeight}catch(Pa){}try{var I=g.innerWidth;var F=g.innerHeight}catch(Pa){}try{var S=g.screenLeft;var Ea=g.screenTop}catch(Pa){}try{I=g.innerWidth,F=g.innerHeight}catch(Pa){}try{var ja=g.screen.availWidth;var Od=g.screen.availTop}catch(Pa){}t=[S,Ea,t,x,ja,Od,y,w,I,F];try{var Kb=(b.h.top||window).document,gb=Kb.compatMode=="CSS1Compat"?
Kb.documentElement:Kb.body;var Qa=(new Ci(gb.clientWidth,gb.clientHeight)).round()}catch(Pa){Qa=new Ci(-12245933,-12245933)}Kb=Qa;Qa={};var Fa=Fa===void 0?E:Fa;gb=new yn;"SVGElement"in Fa&&"createElementNS"in Fa.document&&gb.set(0);x=nn();x["allow-top-navigation-by-user-activation"]&&gb.set(1);x["allow-popups-to-escape-sandbox"]&&gb.set(2);Fa.crypto&&Fa.crypto.subtle&&gb.set(3);"TextDecoder"in Fa&&"TextEncoder"in Fa&&gb.set(4);Fa=zn(gb);Qa.bc=Fa;Qa.bih=Kb.height;Qa.biw=Kb.width;Qa.brdim=t.join();
b=b.i;b=b.prerendering?3:(r={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?r:0;r=(Qa.vis=b,Qa.wgl=!!hn.WebGLRenderingContext,Qa);c=d.call(c,e,r);c.ca_type="image";a&&(c.bid=a);return c}
var Cq=new function(){var a=window.document;this.h=window;this.i=a};
G("yt.ads_.signals_.getAdSignalsString",function(a){return vq(Bq(a))});Va();navigator.userAgent.indexOf(" (CrKey ");var Dq="XMLHttpRequest"in E?function(){return new XMLHttpRequest}:null;
function Eq(){if(!Dq)return null;var a=Dq();return"open"in a?a:null}
function Fq(a){switch(Gq(a)){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
function Gq(a){return a&&"status"in a?a.status:-1}
;function Hq(a,b){typeof a==="function"&&(a=nq(a));return window.setTimeout(a,b)}
;var Iq="absolute_experiments client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods theme".split(" ");[].concat(A(Iq),["client_dev_set_cookie"]);function U(a){a=Jq(a);return typeof a==="string"&&a==="false"?!1:!!a}
function O(a,b){a=Jq(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Kq(){var a=Jq("html5_web_po_experiment_ids");return Array.isArray(a)?Rb(a,function(b){return Number(b||0)}):[Number(a||0)]}
function Lq(a){a=Jq(a);return a!==void 0?String(a):""}
function Jq(a){return T("EXPERIMENT_FLAGS",{})[a]}
function Mq(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=z(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});d=z(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Nq={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Oq="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(A(Iq)),Pq=!1;function Qq(a,b,c,d,e,f,g,h,k){function l(){(m&&"readyState"in m?m.readyState:0)===4&&b&&nq(b)(m)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var m=Eq();if(!m)return null;"onloadend"in m?m.addEventListener("loadend",l,!1):m.onreadystatechange=l;U("debug_forward_web_query_parameters")&&(a=Rq(a));m.open(c,a,!0);f&&(m.responseType=f);g&&(m.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Sq(a,e))for(var p in e)m.setRequestHeader(p,e[p]),"content-type"===p.toLowerCase()&&(c=!1);c&&m.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
k&&"onprogress"in m&&(m.onprogress=function(){k(m.responseText)});
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{m.setAttributionReporting(a)}catch(r){pq(r)}}m.send(d);return m}
function Sq(a,b){b=b===void 0?{}:b;var c=Aq(a),d=T("INNERTUBE_CLIENT_NAME"),e=U("web_ajax_ignore_global_headers_if_set"),f;for(f in Nq){var g=T(Nq[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=T("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(hc(a)?!1:!0))){k=a;var l;if(l=U("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=hc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=ic(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!hc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!hc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&hc(a)||(b["X-YouTube-Ad-Signals"]=vq(Bq()));return b}
function Tq(a,b){b.method="POST";b.postParams||(b.postParams={});return Uq(a,b)}
function Uq(a,b){var c=b.format||"JSON";a=Vq(a,b);var d=Wq(a,b),e=!1,f=Xq(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Fq(k),m=null,p=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||p||r)m=Yq(a,c,k,b.convertToSafeHtml);l&&(l=Zq(c,k,m));m=m||{};p=b.context||E;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials,!1,b.onProgress);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Hq(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||E,f))},d)}return f}
function Vq(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=yq(a,b);return a}
function Wq(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||hc(a)&&!b.withCredentials&&hc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=wq(e),Oi(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):nc(e));f=e||f&&!Hi(f);!Pq&&f&&b.method!=="POST"&&(Pq=!0,oq(Error("AJAX request with postData should use POST")));return e}
function Yq(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,pq(d),g;}a=c.getResponseHeader("Content-Type")||"";if(f&&a.indexOf("json")>=0){f.substring(0,5)===")]}'\n"&&(f=f.substring(5));try{e=JSON.parse(f)}catch(g){}}break;case "XML":if(a=(a=c.responseXML)?$q(a):null)e={},Pb(a.getElementsByTagName("*"),function(g){e[g.tagName]=ar(g)})}d&&br(e);
return e}
function br(a){if(La(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=a[b];var d=jb();c=d?d.createHTML(c):c;a[b]=new Bb(c)}else br(a[b])}}
function Zq(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function $q(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function ar(a){var b="";Pb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Rq(a){var b=window.location.search,c=hc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Aq(a)&&(c=document.location.hostname);var d=ic(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=wq(b),f={};Pb(Oq,function(g){e[g]&&(f[g]=e[g])});
return zq(a,f||{},!1)}
var Xq=Qq;var cr=[{zd:function(a){return"Cannot read property '"+a.key+"'"},
Yc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{zd:function(a){return"Cannot call '"+a.key+"'"},
Yc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{zd:function(a){return a.key+" is not defined"},
Yc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var fr={lb:[],fb:[{callback:dr,weight:500},{callback:er,weight:500}]};function dr(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("-extension://")||a.includes("webkit-masked-url://")}
function er(a){if(!a.stack)return!0;var b=!a.stack.includes("\n");return b&&a.stack.includes("ErrorType: ")||b&&a.stack.includes("Anonymous function (Unknown script")||a.stack.toLowerCase()==="not available"||a.fileName==="user-script"||a.fileName.startsWith("user-script:")?!0:!1}
;function gr(){this.fb=[];this.lb=[]}
var hr;function ir(){if(!hr){var a=hr=new gr;a.lb.length=0;a.fb.length=0;jr(a,fr)}return hr}
function jr(a,b){b.lb&&a.lb.unshift.apply(a.lb,b.lb);b.fb&&a.fb.unshift.apply(a.fb,b.fb)}
;var kr=new Nn;function lr(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=mr(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=mr(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=mr(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function mr(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function nr(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=or(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=lr(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?or(f+".ve",g,h,k):0;d+=f;d+=or(e,a[e],b,c);if(d>500)break}}else c[b]=pr(a),d+=c[b].length;else c[b]=pr(a),d+=c[b].length;return d}
function or(a,b,c,d){c+="."+a;a=pr(b);d[c]=a;return c.length+a.length}
function pr(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function qr(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function rr(){if(!E.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return E.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":E.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":E.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":E.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function sr(){this.Ae=!0}
function tr(a){var b={},c=[];"USER_SESSION_ID"in iq&&c.push({key:"u",value:T("USER_SESSION_ID")});if(c=vi(c))b.Authorization=c,c=a=a==null?void 0:a.sessionIndex,c===void 0&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in iq||(b["X-Origin"]=window.location.origin),a===void 0&&"DELEGATED_SESSION_ID"in iq&&(b["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));return b}
;var ur={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function vr(a,b,c,d,e){si.set(""+a,b,{Tc:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function wr(a){return si.get(""+a,void 0)}
function xr(a,b,c){si.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function yr(){if(!si.isEnabled())return!1;if(si.h.cookie)return!0;si.set("TESTCOOKIESENABLED","1",{Tc:60});if(si.get("TESTCOOKIESENABLED")!=="1")return!1;si.remove("TESTCOOKIESENABLED");return!0}
;var zr=H("ytglobal.prefsUserPrefsPrefs_")||{};G("ytglobal.prefsUserPrefsPrefs_",zr);function Ar(){this.h=T("ALT_PREF_COOKIE_NAME","PREF");this.i=T("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=wr(this.h);a&&this.parse(a)}
var Br;function Cr(){Br||(Br=new Ar);return Br}
n=Ar.prototype;n.get=function(a,b){Dr(a);Er(a);a=zr[a]!==void 0?zr[a].toString():null;return a!=null?a:b?b:""};
n.set=function(a,b){Dr(a);Er(a);if(b==null)throw Error("ExpectedNotNull");zr[a]=b.toString()};
function Fr(a){return!!((Gr("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
n.remove=function(a){Dr(a);Er(a);delete zr[a]};
n.clear=function(){for(var a in zr)delete zr[a]};
function Er(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Dr(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Gr(a){a=zr[a]!==void 0?zr[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
n.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(zr[d]=c.toString())}};var Hr={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ir={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Jr(){var a=E.navigator;return a?a.connection:void 0}
function Kr(){var a=Jr();if(a){var b=Hr[a.type||"unknown"]||"CONN_UNKNOWN";a=Hr[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Lr(){var a=Jr();if(a!=null&&a.effectiveType)return Ir.hasOwnProperty(a.effectiveType)?Ir[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=D.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(A(b));Object.setPrototypeOf(this,this.constructor.prototype)}
v(V,Error);function Mr(){try{return Nr(),!0}catch(a){return!1}}
function Nr(a){if(T("DATASYNC_ID")!==void 0)return T("DATASYNC_ID");throw new V("Datasync ID not set",a===void 0?"unknown":a);}
;function Or(){}
function Pr(a,b){return xn.cb(a,0,b)}
Or.prototype.xa=function(a,b){return this.cb(a,1,b)};
function Qr(a,b){xn.cb(a,2,b)}
Or.prototype.Zb=function(a){var b=H("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Rr=O("web_emulated_idle_callback_delay",300),Sr=1E3/60-3,Tr=[8,5,4,3,2,1,0];
function Ur(a){a=a===void 0?{}:a;J.call(this);this.i=[];this.j={};this.Z=this.h=0;this.X=this.u=!1;this.I=[];this.M=this.fa=!1;for(var b=z(Tr),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.nd=a.timeout||1;this.G=Sr;this.B=0;this.Da=this.cg.bind(this);this.Yb=this.Ig.bind(this);this.Ka=this.Re.bind(this);this.La=this.Ef.bind(this);this.Ra=this.jg.bind(this);this.oa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ja=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.Da)}
v(Ur,J);n=Ur.prototype;n.Zb=function(a){var b=Va();Vr(this,a);a=Va()-b;this.u||(this.G-=a)};
n.cb=function(a,b,c){++this.Z;if(b===10)return this.Zb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.I.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.u||(this.h!==0&&Wr(this)!==this.B&&this.stop(),this.start()));return d};
n.ya=function(a){delete this.j[a]};
function Xr(a){a.I.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
n.isHidden=function(){return!!document.hidden||!1};
function Yr(a){return!a.isHidden()&&a.ja}
function Wr(a){if(a.i[8].length){if(a.M)return 4;if(Yr(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Yr(a)?3:2:1;return 0}
n.wa=function(a){var b=H("yt.logging.errors.log");b&&b(a)};
function Vr(a,b){try{b()}catch(c){a.wa(c)}}
function Zr(a){for(var b=z(Tr),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
n.Ef=function(a){var b=void 0;a&&(b=a.timeRemaining());this.fa=!0;$r(this,b);this.fa=!1};
n.Ig=function(){$r(this)};
n.Re=function(){as(this)};
n.jg=function(a){this.M=!0;var b=Wr(this);b===4&&b!==this.B&&(this.stop(),this.start());$r(this,void 0,a);this.M=!1};
n.cg=function(){this.isHidden()||as(this);this.h&&(this.stop(),this.start())};
function as(a){a.stop();a.u=!0;for(var b=Va(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Vr(a,e)}bs(a);a.u=!1;Zr(a)&&a.start();b=Va()-b;a.G-=b}
function bs(a){for(var b=0,c=a.I.length;b<c;b++){var d=a.I[b];a.i[d.priority].push(d.id)}a.I.length=0}
function $r(a,b,c){a.M&&a.B===4&&a.h||a.stop();a.u=!0;b=Va()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.wa(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Vr(a,f);d=a.fa?0:1;d=a.o>d?a.o:d;if(!(Va()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Vr(a,c)}while(c&&Va()<b)}a.u=!1;bs(a);a.G=Sr;Zr(a)&&a.start()}
n.start=function(){this.X=!1;if(this.h===0)switch(this.B=Wr(this),this.B){case 1:var a=this.La;this.h=this.oa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Rr);break;case 2:this.h=window.setTimeout(this.Yb,this.nd);break;case 3:this.h=window.requestAnimationFrame(this.Ra);break;case 4:this.h=window.setTimeout(this.Ka,0)}};
n.pause=function(){this.stop();this.X=!0};
n.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.oa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
n.ba=function(){Xr(this);this.stop();this.ja&&document.removeEventListener("visibilitychange",this.Da);J.prototype.ba.call(this)};var cs=H("yt.scheduler.instance.timerIdMap_")||{},ds=O("kevlar_tuner_scheduler_soft_state_timer_ms",800),es=0,gs=0;function hs(){var a=H("ytglobal.schedulerInstanceInstance_");if(!a||a.J)a=new Ur(T("scheduler")||{}),G("ytglobal.schedulerInstanceInstance_",a);return a}
function is(){js();var a=H("ytglobal.schedulerInstanceInstance_");a&&(vc(a),G("ytglobal.schedulerInstanceInstance_",null))}
function js(){Xr(hs());for(var a in cs)cs.hasOwnProperty(a)&&delete cs[Number(a)]}
function ks(a,b,c){if(!c)return c=c===void 0,-hs().cb(a,b,c);var d=window.setTimeout(function(){var e=hs().cb(a,b);cs[d]=e},c);
return d}
function ls(a){hs().Zb(a)}
function ms(a){var b=hs();if(a<0)b.ya(-a);else{var c=cs[a];c?(b.ya(c),delete cs[a]):window.clearTimeout(a)}}
function ns(){ps()}
function ps(){window.clearTimeout(es);hs().start()}
function qs(){hs().pause();window.clearTimeout(es);es=window.setTimeout(ns,ds)}
function rs(){window.clearTimeout(gs);gs=window.setTimeout(function(){ss(0)},ds)}
function ss(a){rs();var b=hs();b.o=a;b.start()}
function ts(a){rs();var b=hs();b.o>a&&(b.o=a,b.start())}
function us(){window.clearTimeout(gs);var a=hs();a.o=0;a.start()}
;function vs(){Or.apply(this,arguments)}
v(vs,Or);function ws(){vs.instance||(vs.instance=new vs);return vs.instance}
vs.prototype.cb=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=H("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Hq(a,c||0)};
vs.prototype.ya=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=H("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
vs.prototype.start=function(){var a=H("yt.scheduler.instance.start");a&&a()};
vs.prototype.pause=function(){var a=H("yt.scheduler.instance.pause");a&&a()};
var xn=ws();
H("yt.scheduler.initialized")||(G("yt.scheduler.instance.dispose",is),G("yt.scheduler.instance.addJob",ks),G("yt.scheduler.instance.addImmediateJob",ls),G("yt.scheduler.instance.cancelJob",ms),G("yt.scheduler.instance.cancelAllJobs",js),G("yt.scheduler.instance.start",ps),G("yt.scheduler.instance.pause",qs),G("yt.scheduler.instance.setPriorityThreshold",ss),G("yt.scheduler.instance.enablePriorityThreshold",ts),G("yt.scheduler.instance.clearPriorityThreshold",us),G("yt.scheduler.initialized",!0));function xs(a){var b=new Yn;this.h=(a=b.isAvailable()?a?new Zn(b,a):b:null)?new Tn(a):null;this.i=document.domain||window.location.hostname}
xs.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new el).serialize(b))}catch(f){return}else e=escape(b);vr(a,e,c,this.i)};
xs.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=wr(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
xs.prototype.remove=function(a){this.h&&this.h.remove(a);xr(a,"/",this.i)};var ys=function(){var a;return function(){a||(a=new xs("ytidb"));return a}}();
function zs(){var a;return(a=ys())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var As=[],Bs,Cs=!1;function Ds(){var a={};for(Bs=new Es(a.handleError===void 0?Fs:a.handleError,a.logEvent===void 0?Gs:a.logEvent);As.length>0;)switch(a=As.shift(),a.type){case "ERROR":Bs.wa(a.payload);break;case "EVENT":Bs.logEvent(a.eventType,a.payload)}}
function Hs(a){Cs||(Bs?Bs.wa(a):(As.push({type:"ERROR",payload:a}),As.length>10&&As.shift()))}
function Is(a,b){Cs||(Bs?Bs.logEvent(a,b):(As.push({type:"EVENT",eventType:a,payload:b}),As.length>10&&As.shift()))}
;function Js(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Ks(a){return a.substr(0,a.indexOf(":"))||a}
;var Ls=zd||Ad;function Ms(a){var b=id();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Ns={},Os=(Ns.AUTH_INVALID="No user identifier specified.",Ns.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ns.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ns.MISSING_INDEX="Index not created.",Ns.MISSING_OBJECT_STORES="Object stores not created.",Ns.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ns.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ns.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ns.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ns.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ns.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ns.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ns),Ps={},Qs=(Ps.AUTH_INVALID="ERROR",Ps.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ps.EXPLICIT_ABORT="IGNORED",Ps.IDB_NOT_SUPPORTED="ERROR",Ps.MISSING_INDEX=
"WARNING",Ps.MISSING_OBJECT_STORES="ERROR",Ps.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ps.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ps.QUOTA_EXCEEDED="WARNING",Ps.QUOTA_MAYBE_EXCEEDED="WARNING",Ps.UNKNOWN_ABORT="WARNING",Ps.INCOMPATIBLE_DB_VERSION="WARNING",Ps),Rs={},Ss=(Rs.AUTH_INVALID=!1,Rs.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Rs.EXPLICIT_ABORT=!1,Rs.IDB_NOT_SUPPORTED=!1,Rs.MISSING_INDEX=!1,Rs.MISSING_OBJECT_STORES=!1,Rs.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Rs.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Rs.QUOTA_EXCEEDED=!1,Rs.QUOTA_MAYBE_EXCEEDED=!0,Rs.UNKNOWN_ABORT=!0,Rs.INCOMPATIBLE_DB_VERSION=!1,Rs);function Ts(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Os[a]:c;d=d===void 0?Qs[a]:d;e=e===void 0?Ss[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Ts.prototype)}
v(Ts,V);function Us(a,b){Ts.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Os.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Us.prototype)}
v(Us,Ts);function Vs(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Vs.prototype)}
v(Vs,Error);var Ws=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Xs(a,b,c,d){b=Ks(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Ts)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Ts("QUOTA_EXCEEDED",a);if(Bd&&e.name==="UnknownError")return new Ts("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Vs)return new Ts("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Ws.some(function(f){return e.message.includes(f)}))return new Ts("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Ts("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",le:e.name})];e.level="WARNING";return e}
function Ys(a,b,c){var d=zs();return new Ts("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Zs(a){if(!a)throw Error();throw a;}
function $s(a){return a}
function at(a){this.h=a}
function bt(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=z(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=z(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
bt.all=function(a){return new bt(new at(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Mb:0};f.Mb<a.length;f={Mb:f.Mb},++f.Mb)bt.resolve(a[f.Mb]).then(function(g){return function(h){d[g.Mb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
bt.resolve=function(a){return new bt(new at(function(b,c){a instanceof bt?a.then(b,c):b(a)}))};
bt.reject=function(a){return new bt(new at(function(b,c){c(a)}))};
bt.prototype.then=function(a,b){var c=this,d=a!=null?a:$s,e=b!=null?b:Zs;return new bt(new at(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){ct(c,c,d,f,g)}),c.i.push(function(){dt(c,c,e,f,g)})):c.state.status==="FULFILLED"?ct(c,c,d,f,g):c.state.status==="REJECTED"&&dt(c,c,e,f,g)}))};
bt.prototype.catch=function(a){return this.then(void 0,a)};
function ct(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof bt?et(a,b,f,d,e):d(f)}catch(g){e(g)}}
function dt(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof bt?et(a,b,f,d,e):d(f)}catch(g){e(g)}}
function et(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof bt?et(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ft(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function gt(a){return new Promise(function(b,c){ft(a,b,c)})}
function ht(a){return new bt(new at(function(b,c){ft(a,b,c)}))}
;function jt(a,b){return new bt(new at(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var kt=window,W=kt.ytcsi&&kt.ytcsi.now?kt.ytcsi.now:kt.performance&&kt.performance.timing&&kt.performance.now&&kt.performance.timing.navigationStart?function(){return kt.performance.timing.navigationStart+kt.performance.now()}:function(){return(new Date).getTime()};function lt(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
function mt(){return U("idb_immediate_commit")}
n=lt.prototype;n.add=function(a,b,c){return nt(this,[a],{mode:"readwrite",qa:!0,commit:mt()},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return nt(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return nt(this,[a],{mode:"readonly",qa:!0,commit:mt()},function(c){return c.objectStore(a).count(b)})};
function ot(a,b,c){a=a.h.createObjectStore(b,c);return new pt(a)}
n.delete=function(a,b){return nt(this,[a],{mode:"readwrite",qa:!0,commit:mt()&&!(b instanceof IDBKeyRange)},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return nt(this,[a],{mode:"readonly",qa:!0,commit:mt()},function(c){return c.objectStore(a).get(b)})};
function qt(a,b,c){return nt(a,[b],{mode:"readwrite",qa:!0,commit:mt()},function(d){d=d.objectStore(b);return ht(d.h.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function nt(a,b,c,d){var e,f,g,h,k,l,m,p,r,t,x,y;return C(function(w){switch(w.h){case 1:var I={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?I.mode=c:Object.assign(I,c);e=I;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){w.v(4);break}g++;k=Math.round(W());w.u(5);l=a.h.transaction(b,e.mode);I=w.yield;var F=!!e.commit;var S=new rt(l);F=st(S,d,F);return I.call(w,F,7);case 7:return m=w.i,p=Math.round(W()),tt(a,k,p,g,void 0,b.join(),e),w.return(m);case 5:r=w.j();t=Math.round(W());
x=Xs(r,a.h.name,b.join(),a.h.version);if((y=x instanceof Ts&&!x.h)||g>=f)tt(a,k,t,g,x,b.join(),e),h=x;w.v(2);break;case 4:return w.return(Promise.reject(h))}})}
function tt(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Ts&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Is("QUOTA_EXCEEDED",{dbName:Ks(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Ts&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Is("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),ut(a,!1,d,f,b,g.tag),Hs(e)):ut(a,!0,d,f,b,g.tag)}
function ut(a,b,c,d,e,f){Is("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.h.name};
function pt(a){this.h=a}
n=pt.prototype;n.add=function(a,b){return ht(this.h.add(a,b))};
n.autoIncrement=function(){return this.h.autoIncrement};
n.clear=function(){return ht(this.h.clear()).then(function(){})};
function vt(a,b,c){a.h.createIndex(b,c,{unique:!1})}
n.count=function(a){return ht(this.h.count(a))};
function wt(a,b){return xt(a,{query:b},function(c){return c.delete().then(function(){return zt(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?wt(this,a):ht(this.h.delete(a))};
n.get=function(a){return ht(this.h.get(a))};
n.index=function(a){try{return new At(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Vs(a,this.h.name);throw b;}};
n.getName=function(){return this.h.name};
n.keyPath=function(){return this.h.keyPath};
function xt(a,b,c){a=a.h.openCursor(b.query,b.direction);return Bt(a).then(function(d){return jt(d,c)})}
function rt(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Ts;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function st(a,b,c){var d=new Promise(function(e,f){try{var g=b(a);c&&a.commit();g.then(function(h){e(h)}).catch(f)}catch(h){f(h),a.abort()}});
return Promise.all([d,a.done]).then(function(e){return z(e).next().value})}
rt.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Ts("EXPLICIT_ABORT");};
rt.prototype.commit=function(){if(!this.aborted){var a,b;(b=(a=this.h).commit)==null||b.call(a)}};
rt.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new pt(a),this.i.set(a,b));return b};
function At(a){this.h=a}
n=At.prototype;n.count=function(a){return ht(this.h.count(a))};
n.delete=function(a){return Ct(this,{query:a},function(b){return b.delete().then(function(){return zt(b)})})};
n.get=function(a){return ht(this.h.get(a))};
n.keyPath=function(){return this.h.keyPath};
n.unique=function(){return this.h.unique};
function Ct(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Bt(a).then(function(d){return jt(d,c)})}
function Dt(a,b){this.request=a;this.cursor=b}
function Bt(a){return ht(a).then(function(b){return b?new Dt(a,b):null})}
function zt(a){a.cursor.continue(void 0);return Bt(a.request)}
Dt.prototype.delete=function(){return ht(this.cursor.delete()).then(function(){})};
Dt.prototype.getValue=function(){return this.cursor.value};
Dt.prototype.update=function(a){return ht(this.cursor.update(a))};function Et(a,b,c){return new Promise(function(d,e){function f(){r||(r=new lt(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Ve,k=c.blocking,l=c.Gg,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Is("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Ks(a)});var x=f(),y=new rt(g.transaction);
m&&m(x,function(w){return t.oldVersion<w&&t.newVersion>=w},y);
y.done.catch(function(w){e(w)})}catch(w){e(w)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Is("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ks(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ft(a,b,c){c=c===void 0?{}:c;return Et(a,b,c)}
function Gt(a,b){b=b===void 0?{}:b;var c,d,e,f;return C(function(g){if(g.h==1)return g.u(2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Ve)&&c.addEventListener("blocked",function(){e()}),g.yield(gt(c),4);
if(g.h!=2)return g.B(0);f=g.j();throw Xs(f,a,"",-1);})}
;function Ht(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
Ht.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Ft(a,b,c)};
Ht.prototype.delete=function(a){a=a===void 0?{}:a;return Gt(this.name,a)};
function It(a,b){return new Ts("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Jt(a,b){if(!b)throw Ys("openWithToken",Ks(a.name));return a.open()}
Ht.prototype.open=function(){function a(){var f,g,h,k,l,m,p,r,t,x;return C(function(y){switch(y.h){case 1:return g=(f=Error().stack)!=null?f:"",y.u(2),y.yield(c.i(c.name,c.options.version,e),4);case 4:for(var w=h=y.i,I=c.options,F=[],S=z(Object.keys(I.Sb)),Ea=S.next();!Ea.done;Ea=S.next()){Ea=Ea.value;var ja=I.Sb[Ea],Od=ja.kg===void 0?Number.MAX_VALUE:ja.kg;!(w.h.version>=ja.cc)||w.h.version>=Od||w.h.objectStoreNames.contains(Ea)||F.push(Ea)}k=F;if(k.length===0){y.v(5);break}l=Object.keys(c.options.Sb);
m=h.objectStoreNames();if(c.u<O("ytidb_reopen_db_retries",0))return c.u++,h.close(),Hs(new Ts("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());if(!(c.o<O("ytidb_remake_db_retries",1))){y.v(6);break}c.o++;return y.yield(c.delete(),7);case 7:return Hs(new Ts("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),y.return(a());case 6:throw new Us(m,l);case 5:return y.return(h);case 2:p=y.j();
if(p instanceof DOMException?p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){y.v(8);break}return y.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=y.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,It(c,t);return y.return(r);case 8:throw b(),p instanceof
Error&&!U("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Xs(p,c.name,"",(x=c.options.version)!=null?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw It(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Gg:b,upgrade:this.options.upgrade};return this.h=d=a()};var Kt=new Ht("YtIdbMeta",{Sb:{databases:{cc:1}},upgrade:function(a,b){b(1)&&ot(a,"databases",{keyPath:"actualName"})}});
function Lt(a,b){var c;return C(function(d){if(d.h==1)return d.yield(Jt(Kt,b),2);c=d.i;return d.return(nt(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return ht(f.h.put(a,void 0)).then(function(){})})}))})}
function Mt(a,b){var c;return C(function(d){if(d.h==1)return a?d.yield(Jt(Kt,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Nt(a,b){var c,d;return C(function(e){return e.h==1?(c=[],e.yield(Jt(Kt,b),2)):e.h!=3?(d=e.i,e.yield(nt(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return xt(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return zt(g)})}),3)):e.return(c)})}
function Ot(a){return Nt(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Pt(a,b,c){return Nt(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Qt(a){var b,c;return C(function(d){if(d.h==1)return b=Nr("YtIdbMeta hasAnyMeta other"),d.yield(Nt(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Rt,St=new function(){}(new function(){});
function Tt(){var a,b,c;return C(function(d){switch(d.h){case 1:a=zs();if((b=a)==null?0:b.hasSucceededOnce)return d.return(!0);var e;if(e=Ls)e=/WebKit\/([0-9]+)/.exec(id()),e=!!(e&&parseInt(e[1],10)>=600);e&&(e=/WebKit\/([0-9]+)/.exec(id()),e=!(e&&parseInt(e[1],10)>=602));if(!(e=e||vd)){try{e=self;var f=!!(e.indexedDB&&e.IDBIndex&&e.IDBKeyRange&&e.IDBObjectStore)}catch(g){f=!1}e=!f}if(e||!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);d.u(2);c={actualName:"yt-idb-test-do-not-use",
publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return d.yield(Lt(c,St),4);case 4:return d.yield(Mt("yt-idb-test-do-not-use",St),5);case 5:return d.return(!0);case 2:return d.j(),d.return(!1)}})}
function Ut(){if(Rt!==void 0)return Rt;Cs=!0;return Rt=Tt().then(function(a){Cs=!1;var b;if((b=ys())!=null&&b.h){var c;b={hasSucceededOnce:((c=zs())==null?void 0:c.hasSucceededOnce)||a};var d;(d=ys())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Vt(){return H("ytglobal.idbToken_")||void 0}
function Wt(){var a=Vt();return a?Promise.resolve(a):Ut().then(function(b){b?(G("ytglobal.idbToken_",St),b=St):b=void 0;return b})}
;var Xt=0;function Yt(a,b){Xt||(Xt=xn.xa(function(){var c,d,e,f,g;return C(function(h){switch(h.h){case 1:return h.yield(Wt(),2);case 2:c=h.i;if(!c)return h.return();d=!0;h.u(3);return h.yield(Pt(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return h.yield(Gt(f.actualName),7);case 7:return h.yield(Mt(f.actualName,c),6);case 6:h.B(4);break;case 3:g=h.j(),Hs(g),d=!1;case 4:xn.ya(Xt),Xt=0,d&&Yt(a,b),h.o()}})}))}
function Zt(){var a;return C(function(b){return b.h==1?b.yield(Wt(),2):(a=b.i)?b.return(Qt(a)):b.return(!1)})}
new Ll;function $t(a){if(!Mr())throw a=new Ts("AUTH_INVALID",{dbName:a}),Hs(a),a;var b=Nr();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function au(a,b,c,d){var e,f,g,h,k,l;return C(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Wt(),2);case 2:g=m.i;if(!g)throw h=Ys("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Hs(h),h;Js(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:$t(a);m.u(3);return m.yield(Lt(k,g),5);case 5:return m.yield(Ft(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=m.j(),m.u(7),m.yield(Mt(k.actualName,
g),9);case 9:m.B(8);break;case 7:m.j();case 8:throw l;}})}
function bu(a,b,c){c=c===void 0?{}:c;return au(a,b,!1,c)}
function cu(a,b,c){c=c===void 0?{}:c;return au(a,b,!0,c)}
function du(a,b){b=b===void 0?{}:b;var c,d;return C(function(e){if(e.h==1)return e.yield(Wt(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Js(a);d=$t(a);return e.yield(Gt(d.actualName,b),3)}return e.yield(Mt(d.actualName,c),0)})}
function eu(a,b,c){a=a.map(function(d){return C(function(e){return e.h==1?e.yield(Gt(d.actualName,b),2):e.yield(Mt(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function fu(){var a=a===void 0?{}:a;var b,c;return C(function(d){if(d.h==1)return d.yield(Wt(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Js("LogsDatabaseV2");return d.yield(Ot(b),3)}c=d.i;return d.yield(eu(c,a,b),0)})}
function gu(a,b){b=b===void 0?{}:b;var c;return C(function(d){if(d.h==1)return d.yield(Wt(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Js(a);return d.yield(Gt(a,b),3)}return d.yield(Mt(a,c),0)})}
;function hu(a,b){Ht.call(this,a,b);this.options=b;Js(a)}
v(hu,Ht);function iu(a,b){var c;return function(){c||(c=new hu(a,b));return c}}
hu.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?cu:bu)(a,b,Object.assign({},c))};
hu.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?gu:du)(this.name,a)};
function ju(a,b){return iu(a,b)}
;var ku={},lu=ju("ytGcfConfig",{Sb:(ku.coldConfigStore={cc:1},ku.hotConfigStore={cc:1},ku),shared:!1,upgrade:function(a,b){b(1)&&(vt(ot(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),vt(ot(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function mu(a){return Jt(lu(),a)}
function nu(a,b,c){var d,e,f;return C(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(mu(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(qt(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function ou(a,b,c,d){var e,f,g;return C(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(mu(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(qt(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function pu(a){var b,c;return C(function(d){return d.h==1?d.yield(mu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(nt(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return Ct(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function qu(a){var b,c;return C(function(d){return d.h==1?d.yield(mu(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(nt(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return Ct(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function ru(){J.call(this);this.i=[];this.h=[];var a=H("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(A(a)),this.h=a):(this.h=[],G("yt.gcf.config.hotUpdateCallbacks",this.h))}
v(ru,J);ru.prototype.ba=function(){for(var a=z(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;J.prototype.ba.call(this)};function su(){this.h=0;this.i=new ru}
function tu(){var a;return(a=H("yt.gcf.config.hotConfigGroup"))!=null?a:T("RAW_HOT_CONFIG_GROUP")}
function uu(a,b,c){var d,e,f;return C(function(g){switch(g.h){case 1:if(!U("start_client_gcf")){g.v(0);break}c&&(a.j=c,G("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Vt();if(!d){g.v(3);break}if(c){g.v(4);break}return g.yield(qu(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(nu(c,b,d),3);case 3:if(c)for(var h=c,k=z(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.o()}})}
function vu(a,b,c){var d,e,f,g;return C(function(h){if(h.h==1){if(!U("start_client_gcf"))return h.v(0);a.coldHashData=b;G("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Vt())?c?h.v(4):h.yield(pu(d),5):h.v(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.v(0);g=c.configData;return h.yield(ou(c,b,g,d),0)})}
function wu(){if(!su.instance){var a=new su;su.instance=a}a=su.instance;var b=W()-a.h;if(!(a.h!==0&&b<O("send_config_hash_timer"))){b=H("yt.gcf.config.coldConfigData");var c=H("yt.gcf.config.hotHashData"),d=H("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
su.prototype.o=function(a){this.hotHashData=a;G("yt.gcf.config.hotHashData",this.hotHashData||null)};function xu(){return"INNERTUBE_API_KEY"in iq&&"INNERTUBE_API_VERSION"in iq}
function yu(){return{innertubeApiKey:T("INNERTUBE_API_KEY"),innertubeApiVersion:T("INNERTUBE_API_VERSION"),Gf:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),de:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),nj:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),If:T("INNERTUBE_CONTEXT_HL"),Hf:T("INNERTUBE_CONTEXT_GL"),Jf:T("INNERTUBE_HOST_OVERRIDE")||"",Kf:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),oj:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function zu(a){var b={client:{hl:a.If,gl:a.Hf,clientName:a.de,clientVersion:a.innertubeContextClientVersion,configInfo:a.Gf}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=E.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Mq();c.length>0&&(b.request={internalExperimentFlags:c});c=a.de;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=rr()}(d=H("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(U("web_log_memory_total_kbytes")&&((e=E.navigator)==null?0:e.deviceMemory)){var f;e=(f=E.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Kr())&&b&&(b.client.connectionType=a);U("web_log_effective_connection_type")&&
(a=Lr())&&b&&(b.client.effectiveConnectionType=a);U("start_client_gcf")&&(e=wu())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=T("INNERTUBE_CONTEXT");var g;if(U("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=z(Object.entries(wq(T("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=z(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function Au(a,b,c){c=c===void 0?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||T("AUTHORIZATION");b||(a?b="Bearer "+H("gapi.auth.getToken")().bj:(sr.instance||(sr.instance=new sr),a=tr(),U("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Bu=typeof TextEncoder!=="undefined"?new TextEncoder:null,Cu=Bu?function(a){return Bu.encode(a)}:function(a){a=ed(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};var Du={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},Eu={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Fu(a,b){this.version=a;this.args=b}
Fu.prototype.serialize=function(){return{version:this.version,args:this.args}};function Gu(a,b){this.topic=a;this.h=b}
Gu.prototype.toString=function(){return this.topic};var Hu=H("ytPubsub2Pubsub2Instance")||new Nn;Nn.prototype.subscribe=Nn.prototype.subscribe;Nn.prototype.unsubscribeByKey=Nn.prototype.Ac;Nn.prototype.publish=Nn.prototype.Bb;Nn.prototype.clear=Nn.prototype.clear;G("ytPubsub2Pubsub2Instance",Hu);var Iu=H("ytPubsub2Pubsub2SubscribedKeys")||{};G("ytPubsub2Pubsub2SubscribedKeys",Iu);var Ju=H("ytPubsub2Pubsub2TopicToKeys")||{};G("ytPubsub2Pubsub2TopicToKeys",Ju);var Ku=H("ytPubsub2Pubsub2IsAsync")||{};G("ytPubsub2Pubsub2IsAsync",Ku);
G("ytPubsub2Pubsub2SkipSubKey",null);function Lu(a,b){var c=Mu();c&&c.publish.call(c,a.toString(),a,b)}
function Nu(a){var b=Ou,c=Mu();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=H("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Iu[d])try{if(f&&b instanceof Gu&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ge){var l=new h;h.Ge=l.version}var m=h.Ge}catch(p){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Vb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){oq(p)}},Ku[b.toString()]?H("yt.scheduler.instance")?xn.xa(g):Hq(g,0):g())});
Iu[d]=!0;Ju[b.toString()]||(Ju[b.toString()]=[]);Ju[b.toString()].push(d);return d}
function Pu(){var a=Qu,b=Nu(function(c){a.apply(void 0,arguments);Ru(b)});
return b}
function Ru(a){var b=Mu();b&&(typeof a==="number"&&(a=[a]),Pb(a,function(c){b.unsubscribeByKey(c);delete Iu[c]}))}
function Mu(){return H("ytPubsub2Pubsub2Instance")}
;function Su(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Lu("meta_logging_csi_event",{timerName:a,Rj:b})}
;var Tu=O("max_body_size_to_compress",5E5),Uu=O("min_body_size_to_compress",500),Vu=!0,Wu=0,Xu=0,Yu=O("compression_performance_threshold_lr",250),Zu=O("slow_compressions_before_abandon_count",4);function $u(a,b,c,d){var e={startTime:W(),ticks:{},infos:{}};if(Vu)try{var f=av(b);if(f==null||!(f>Tu||f<Uu)){var g=Fp(Cu(b)),h=W();e.ticks.gelc=h;Xu++;bv(e);c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=g;c.postParams=void 0}d(a,c)}catch(k){pq(k),d(a,c)}else d(a,c)}
function cv(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?H("yt.logging.gzipForFetch",!1):!0;if(Vu&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=av(g);if(h!=null&&(h>Tu||h<Uu))return a;c=b?{level:1}:void 0;f=Fp(Cu(g),c);var k=W();e.ticks.gelc=k;if(b){Xu++;if(U("disable_compression_due_to_performance_degradation_lr")&&k-d>=Yu)if(Wu++,U("abandon_compression_after_N_slow_zips_lr")){b=
Wu/Xu;var l=Zu/O("compression_disable_point");Xu>0&&Xu%O("compression_disable_point")===0&&b>=l&&(Vu=!1)}else Vu=!1;bv(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return pq(m),a}}else return a}
function av(a){try{return(new Blob(a.split(""))).size}catch(b){return pq(b),null}}
function bv(a){U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Su("gel_compression",a,{sampleRate:.1})}
;function dv(a){a=Object.assign({},a);delete a.Authorization;var b=vi();if(b){var c=new Bn;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Ed(c.digest(),3)}return a}
;var ev;function fv(){ev||(ev=new xs("yt.innertube"));return ev}
function gv(a,b,c,d){if(d)return null;d=fv().get("nextId",!0)||1;var e=fv().get("requests",!0)||{};e[d]={method:a,request:b,authState:dv(c),requestTime:Math.round(W())};fv().set("nextId",d+1,86400,!0);fv().set("requests",e,86400,!0);return d}
function hv(a){var b=fv().get("requests",!0)||{};delete b[a];fv().set("requests",b,86400,!0)}
function iv(a){var b=fv().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=dv(Au(!1));Ki(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),jv(a,d.method,e,{}));delete b[c]}}fv().set("requests",b,86400,!0)}}
;function kv(a){this.Cc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.Kb=function(){};
this.now=Date.now;this.jc=!1;var b;this.Be=(b=a.Be)!=null?b:100;var c;this.ue=(c=a.ue)!=null?c:1;var d;this.se=(d=a.se)!=null?d:2592E6;var e;this.oe=(e=a.oe)!=null?e:12E4;var f;this.te=(f=a.te)!=null?f:5E3;var g;this.aa=(g=a.aa)!=null?g:void 0;this.Jc=!!a.Jc;var h;this.Hc=(h=a.Hc)!=null?h:.1;var k;this.bd=(k=a.bd)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.Kb&&(this.Kb=a.Kb);a.jc&&(this.jc=a.jc);a.Cc&&(this.Cc=a.Cc);this.da=a.da;this.Ia=a.Ia;this.ka=a.ka;this.ia=a.ia;this.bb=a.bb;
this.Fd=a.Fd;this.Cd=a.Cd;lv(this)&&(!this.da||this.da("networkless_logging"))&&mv(this)}
function mv(a){lv(a)&&!a.jc&&(a.h=!0,a.Jc&&Math.random()<=a.Hc&&a.ka.Ze(a.aa),nv(a),a.ia.Aa()&&a.zc(),a.ia.listen(a.Fd,a.zc.bind(a)),a.ia.listen(a.Cd,a.Ud.bind(a)))}
n=kv.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(lv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ka.set(d,this.aa).then(function(e){d.id=e;c.ia.Aa()&&ov(c,d)}).catch(function(e){ov(c,d);
pv(c,e)})}else this.bb(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(lv(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da&&this.da("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.Aa()||this.da&&this.da("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return C(function(k){if(k.h==1)return k.yield(d.ka.set(e,d.aa).catch(function(l){pv(d,l)}),2);
f(g,h);k.o()})}}this.bb(a,b,e.skipRetry)}else this.ka.set(e,this.aa).catch(function(g){d.bb(a,b,e.skipRetry);
pv(d,g)})}else this.bb(a,b,this.da&&this.da("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(lv(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ka.Hb(d.id,c.aa):e=!0;c.ia.ub&&c.da&&c.da("vss_network_hint")&&c.ia.ub(!0);f(g,h)};
this.bb(d.url,d.options,void 0,!0);this.ka.set(d,this.aa).then(function(g){d.id=g;e&&c.ka.Hb(d.id,c.aa)}).catch(function(g){pv(c,g)})}else this.bb(a,b,void 0,!0)};
n.zc=function(){var a=this;if(!lv(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ia.xa(function(){var b;return C(function(c){if(c.h==1)return c.yield(a.ka.Yd("NEW",a.aa),2);if(c.h!=3)return b=c.i,b?c.yield(ov(a,b),3):(a.Ud(),c.return());a.i&&(a.i=0,a.zc());c.o()})},this.Be))};
n.Ud=function(){this.Ia.ya(this.i);this.i=0};
function ov(a,b){var c;return C(function(d){switch(d.h){case 1:if(!lv(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.v(2);break}return d.yield(a.ka.Qf(b.id,a.aa),3);case 3:(c=d.i)||a.Kb(Error("The request cannot be found in the database."));case 2:if(qv(a,b,a.se)){d.v(4);break}a.Kb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.v(5);break}return d.yield(a.ka.Hb(b.id,a.aa),5);case 5:return d.return();case 4:b.skipRetry||(b=
rv(a,b));if(!b){d.v(0);break}if(!b.skipRetry||b.id===void 0){d.v(8);break}return d.yield(a.ka.Hb(b.id,a.aa),8);case 8:a.bb(b.url,b.options,!!b.skipRetry),d.o()}})}
function rv(a,b){if(!lv(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return C(function(m){switch(m.h){case 1:g=sv(f);(h=tv(f))&&a.da&&a.da("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.da&&a.da("nwl_consider_error_code")&&g||a.da&&!a.da("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.bd)){m.v(2);break}if(!a.ia.gd){m.v(3);break}return m.yield(a.ia.gd(),3);case 3:if(a.ia.Aa()){m.v(2);break}c(e,f);if(!a.da||!a.da("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===
void 0){m.v(6);break}return m.yield(a.ka.Gd(b.id,a.aa,!1),6);case 6:return m.return();case 2:if(a.da&&a.da("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.bd)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.v(8);break}return b.sendCount<a.ue?m.yield(a.ka.Gd(b.id,a.aa,!0,h?!1:void 0),12):m.yield(a.ka.Hb(b.id,a.aa),8);case 12:a.Ia.xa(function(){a.ia.Aa()&&a.zc()},a.te);
case 8:c(e,f),m.o()}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return C(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.v(2):h.yield(a.ka.Hb(b.id,a.aa),2);a.ia.ub&&a.da&&a.da("vss_network_hint")&&a.ia.ub(!0);d(e,f);h.o()})};
return b}
function qv(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function nv(a){if(!lv(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ka.Yd("QUEUED",a.aa).then(function(b){b&&!qv(a,b,a.oe)?a.Ia.xa(function(){return C(function(c){if(c.h==1)return b.id===void 0?c.v(2):c.yield(a.ka.Gd(b.id,a.aa),2);nv(a);c.o()})}):a.ia.Aa()&&a.zc()})}
function pv(a,b){a.Me&&!a.ia.Aa()?a.Me(b):a.handleError(b)}
function lv(a){return!!a.aa||a.Cc}
function sv(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function tv(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var uv;
function vv(){if(uv)return uv();var a={};uv=ju("LogsDatabaseV2",{Sb:(a.LogsRequestsStore={cc:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&ot(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),vt(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return uv()}
;function Av(a){return Jt(vv(),a)}
function Bv(a,b){var c,d,e,f;return C(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Av(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(qt(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Cv(c);return g.return(f)})}
function Dv(a,b){var c,d,e,f,g,h,k,l,m;return C(function(p){if(p.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},p.yield(Av(b),2);if(p.h!=3)return d=p.i,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",U("use_fifo_for_networkless")&&(k="next"),l=void 0,m=a==="NEW"?"readwrite":"readonly",U("use_readonly_for_get_most_recent_by_status_killswitch")&&(m="readwrite"),p.yield(nt(d,["LogsRequestsStore"],{mode:m,qa:!0},
function(r){return Ct(r.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},function(t){t.getValue()&&(l=t.getValue(),a==="NEW"&&(l.status="QUEUED",t.update(l)))})}),3);
c.ticks.tc=W();Cv(c);return p.return(l)})}
function Ev(a,b){var c;return C(function(d){if(d.h==1)return d.yield(Av(b),2);c=d.i;return d.return(nt(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",ht(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Fv(a,b,c,d){c=c===void 0?!0:c;var e;return C(function(f){if(f.h==1)return f.yield(Av(b),2);e=f.i;return f.return(nt(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),ht(h.h.put(k,void 0)).then(function(){return k})):bt.resolve(void 0)})}))})}
function Gv(a,b){var c;return C(function(d){if(d.h==1)return d.yield(Av(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Hv(a){var b,c;return C(function(d){if(d.h==1)return d.yield(Av(a),2);b=d.i;c=W()-2592E6;return d.yield(nt(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return xt(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return zt(f)})})}),0)})}
function Iv(){C(function(a){return a.yield(fu(),0)})}
function Cv(a){U("nwl_csi_killswitch")||Su("networkless_performance",a,{sampleRate:1})}
;var Jv={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationPlayablesMetrics:533,liveCreationStreamWebrtcStats:288,liveCreationWebrtcError:526,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,
visualElementShown:72,visualElementHidden:73,visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,
spacecastSummaryRequested:88,spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,
vrCopresencePartyStats:153,vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,
buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,
buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,
transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,
outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,
ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,
watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,
deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,
ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,
watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,
tvhtml5UnexpectedRestart:319,tvhtml5DeviceStorageStats:535,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,
appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,
webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,
parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,
prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,
sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,
parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,
biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,producerMediaServicesResetDetails:522,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,
youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,
crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,
embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515,adsSeenClientLogging:517,producerEvent:518,tvhtml5CleanStart:519,deviceAccountMetricsEvent:520,derpLogEvent:521,playablesPortalEvent:523,ipValidationStarted:524,ipValidationReceived:525,reelsSequenceMutationEvent:527,watchZoomStateChange:528,metadataEditorEvent:529,kidsPrismaDeeplinksEvent:530,creationOrchestrationEvent:531,coordinatedSamplingTriggered:532,dnaRecapScreenshotEvent:534,
mdxLocalNetworkPermissionRequestEvent:536,mdxLocalNetworkPermissionResponseEvent:537,sessionReplayEvent:538,sessionReplayStatusEvent:539,loggingReliabilityProbe:540,keyValueStoreStatsEvent:541,deviceLocationPermissionEvent:542,remoteControlStarted:543,remoteControlCompleted:544,reelsAdsEvents:545};var Kv={},Lv=ju("ServiceWorkerLogsDatabase",{Sb:(Kv.SWHealthLog={cc:1},Kv),shared:!0,upgrade:function(a,b){b(1)&&vt(ot(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Mv(a){return Jt(Lv(),a)}
function Nv(a){var b,c;C(function(d){if(d.h==1)return d.yield(Mv(a),2);b=d.i;c=W()-2592E6;return d.yield(nt(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return xt(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return zt(f)})})}),0)})}
function Ov(a){var b;return C(function(c){if(c.h==1)return c.yield(Mv(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Pv={},Qv=0;function Rv(a){var b=b===void 0?{}:b;var c=new Image,d=""+Qv++;Pv[d]=c;c.onload=c.onerror=function(){delete Pv[d]};
b.Jj&&(c.referrerPolicy="no-referrer");c.src=a}
;var Sv;function Tv(){Sv||(Sv=new xs("yt.offline"));return Sv}
function Uv(a){if(U("offline_error_handling")){var b=Tv().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Tv().set("errors",b,2592E3,!0)}}
;function Vv(){this.h=new Map;this.i=!1}
function Wv(){if(!Vv.instance){var a=H("yt.networkRequestMonitor.instance")||new Vv;G("yt.networkRequestMonitor.instance",a);Vv.instance=a}return Vv.instance}
Vv.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Vv.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Vv.prototype.removeParams=function(a){return a.split("?")[0]};
Vv.prototype.removeParams=Vv.prototype.removeParams;Vv.prototype.isEndpointCFR=Vv.prototype.isEndpointCFR;Vv.prototype.requestComplete=Vv.prototype.requestComplete;Vv.getInstance=Wv;function Xv(){ok.call(this);var a=this;this.j=!1;this.h=wn();this.h.listen("networkstatus-online",function(){if(a.j&&U("offline_error_handling")){var b=Tv().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;oq(d)}Tv().set("errors",{},2592E3,!0)}}})}
v(Xv,ok);function Yv(){if(!Xv.instance){var a=H("yt.networkStatusManager.instance")||new Xv;G("yt.networkStatusManager.instance",a);Xv.instance=a}return Xv.instance}
n=Xv.prototype;n.Aa=function(){return this.h.Aa()};
n.ub=function(a){this.h.h=a};
n.Cf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.hf=function(){this.j=!0};
n.listen=function(a,b){return this.h.listen(a,b)};
n.gd=function(a){return un(this.h,a)};
Xv.prototype.sendNetworkCheckRequest=Xv.prototype.gd;Xv.prototype.listen=Xv.prototype.listen;Xv.prototype.enableErrorFlushing=Xv.prototype.hf;Xv.prototype.getWindowStatus=Xv.prototype.Cf;Xv.prototype.networkStatusHint=Xv.prototype.ub;Xv.prototype.isNetworkAvailable=Xv.prototype.Aa;Xv.getInstance=Yv;function Zv(a){a=a===void 0?{}:a;ok.call(this);var b=this;this.h=this.u=0;this.j=Yv();var c=H("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){$v(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){$v(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){pk(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){pk(b,"publicytnetworkstatus-offline")})))}
v(Zv,ok);Zv.prototype.Aa=function(){var a=H("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Zv.prototype.ub=function(a){var b=H("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Zv.prototype.gd=function(a){var b=this,c;return C(function(d){c=H("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return U("skip_network_check_if_cfr")&&Wv().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ub(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.Aa())})):c?d.return(c(a)):d.return(!0)})};
function $v(a,b){a.rateLimit?a.h?(xn.ya(a.u),a.u=xn.xa(function(){a.o!==b&&(pk(a,b),a.o=b,a.h=W())},a.rateLimit-(W()-a.h))):(pk(a,b),a.o=b,a.h=W()):pk(a,b)}
;var aw;function bw(){var a=kv.call;aw||(aw=new Zv({uj:!0,jj:!0}));a.call(kv,this,{ka:{Ze:Hv,Hb:Gv,Yd:Dv,Qf:Ev,Gd:Fv,set:Bv},ia:aw,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new V(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);pq(b,void 0,void 0,void 0,!0)}else oq(b)},
Kb:pq,bb:cw,now:W,Me:Uv,Ia:ws(),Fd:"publicytnetworkstatus-online",Cd:"publicytnetworkstatus-offline",Jc:!0,Hc:.1,bd:O("potential_esf_error_limit",10),da:U,jc:!(Mr()&&dw())});this.j=new Ll;U("networkless_immediately_drop_all_requests")&&Iv();gu("LogsDatabaseV2")}
v(bw,kv);function ew(){var a=H("yt.networklessRequestController.instance");a||(a=new bw,G("yt.networklessRequestController.instance",a),U("networkless_logging")&&Wt().then(function(b){a.aa=b;mv(a);a.j.resolve();a.Jc&&Math.random()<=a.Hc&&a.aa&&Nv(a.aa);U("networkless_immediately_drop_sw_health_store")&&fw(a)}));
return a}
bw.prototype.writeThenSend=function(a,b){b||(b={});b=gw(a,b);Mr()||(this.h=!1);kv.prototype.writeThenSend.call(this,a,b)};
bw.prototype.sendThenWrite=function(a,b,c){b||(b={});b=gw(a,b);Mr()||(this.h=!1);kv.prototype.sendThenWrite.call(this,a,b,c)};
bw.prototype.sendAndWrite=function(a,b){b||(b={});b=gw(a,b);Mr()||(this.h=!1);kv.prototype.sendAndWrite.call(this,a,b)};
bw.prototype.awaitInitialization=function(){return this.j.promise};
function fw(a){var b;C(function(c){if(!a.aa)throw b=Ys("clearSWHealthLogsDb"),b;return c.return(Ov(a.aa).catch(function(d){a.handleError(d)}))})}
function cw(a,b,c){b=U("web_fp_via_jspb")?Object.assign({},b):b;if(U("use_request_time_ms_header"))b.headers&&Aq(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var d;if((d=b.postParams)==null?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var e=e===void 0?"":e;var f=f===void 0?!1:f;var g=g===void 0?!1:g;if(a)if(e)Qq(a,void 0,"POST",e,void 0);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||g)Qq(a,void 0,"GET","",void 0,void 0,
f,g);else{b:{try{c:{var h=new $a({url:a});if(h.h.dsh==="1")var k=null;else{var l=h.h.ae;if(l==="1"){var m=h.h.adurl;if(m)try{k={version:3,ff:decodeURIComponent(m),Te:Ya(h.i,"act=1","ri=1",ab(h))};break c}catch(S){}}k=l==="2"?{version:4,ff:Ya(h.i,"dct=1","suid="+h.j,"ri=1"),Te:Ya(h.i,"act=1","ri=1","suid="+h.j)}:null}}if(k){var p=ic(a),r;if(!(r=!p||!p.endsWith("/aclk"))){var t=a.search(qc),x=pc(a,0,"ri",t);if(x<0)var y=null;else{var w=a.indexOf("&",x);if(w<0||w>t)w=t;y=cc(a.slice(x+3,w!==-1?w:0))}r=
y!=="1"}var I=!r;break b}}catch(S){}I=!1}if(I){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var F=!0;break b}}catch(S){}F=!1}c=F?!0:!1}else c=!1;c||Rv(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),$u(a,b.postBody,b,Uq)):$u(a,JSON.stringify(b.postParams),b,Tq):Uq(a,b)}
function gw(a,b){U("use_event_time_ms_header")&&Aq(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function dw(){return hc(document.location.toString())!=="www.youtube-nocookie.com"}
;var hw=!1,iw=E.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:hw};G("ytNetworklessLoggingInitializationOptions",iw);function jw(){var a;C(function(b){if(b.h==1)return b.yield(Wt(),2);a=b.i;if(!a||!Mr()&&!U("nwl_init_require_datasync_id_killswitch")||!dw())return b.v(0);hw=!0;iw.isNwlInitialized=hw;return b.yield(ew().awaitInitialization(),0)})}
;function kw(a){var b=this;this.config_=null;a?this.config_=a:xu()&&(this.config_=yu());Pr(function(){iv(b)},5E3)}
kw.prototype.isReady=function(){!this.config_&&xu()&&(this.config_=yu());return!!this.config_};
function jv(a,b,c,d){function e(p){p=p===void 0?!1:p;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(p||U("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=gv(b,c,l,k)),r)){var t=g.onSuccess,x=g.onFetchSuccess;g.onSuccess=function(w,I){hv(r);t(w,I)};
c.onFetchSuccess=function(w,I){hv(r);x(w,I)}}try{if(p&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?ew().writeThenSend(m,g):ew().sendAndWrite(m,g);
else if(d.compress)if(g.postBody){var y=g.postBody;typeof y!=="string"&&(y=JSON.stringify(g.postBody));$u(m,y,g,Uq)}else $u(m,JSON.stringify(g.postParams),g,Tq);else Tq(m,g)}catch(w){if(w.name==="InvalidAccessError")r&&(hv(r),r=0),pq(Error("An extension is blocking network request."));else throw w;}r&&Pr(function(){iv(a)},5E3)}
!T("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&pq(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);oq(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onProgress:function(p){if(d.onProgress)d.onProgress(p)},
onError:function(p,r){if(d.onError)d.onError(r)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Jf)&&(h=f);var k=a.config_.Kf||!1,l=Au(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=yq(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(H("ytNetworklessLoggingInitializationOptions")?iw.isNwlInitialized:hw)?Ut().then(function(p){e(p)}):e(!1)}
;var lw=0,mw=xd?"webkit":wd?"moz":ud?"ms":td?"o":"";G("ytDomDomGetNextId",H("ytDomDomGetNextId")||function(){return++lw});var nw={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ow(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in nw||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function pw(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
ow.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ow.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ow.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Gi=E.ytEventsEventsListeners||{};G("ytEventsEventsListeners",Gi);var qw=E.ytEventsEventsCounter||{count:0};G("ytEventsEventsCounter",qw);
function rw(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Fi(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=La(e[4])&&La(d)&&Ki(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function sw(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=rw(a,b,c,d);if(e)return e;e=++qw.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new ow(h);if(!Vi(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new ow(h);
h.currentTarget=a;return c.call(a,h)};
g=nq(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),tw()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Gi[e]=[a,b,c,g,d];return e}
function uw(a){a&&(typeof a=="string"&&(a=[a]),Pb(a,function(b){if(b in Gi){var c=Gi[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?tw()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Gi[b]}}))}
var tw=Ek(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function vw(a){this.G=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.M=sw(window,"mousemove",Ta(this.X,this));a=Ta(this.I,this);typeof a==="function"&&(a=nq(a));this.Z=window.setInterval(a,25)}
Xa(vw,J);vw.prototype.X=function(a){a.h===void 0&&pw(a);var b=a.h;a.i===void 0&&pw(a);this.h=new Bi(b,a.i)};
vw.prototype.I=function(){if(this.h){var a=W();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
vw.prototype.ba=function(){window.clearInterval(this.Z);uw(this.M)};var ww={};function xw(a){var b=a===void 0?{}:a;a=b.hg===void 0?!1:b.hg;b=b.jf===void 0?!0:b.jf;if(H("_lact",window)==null){var c=parseInt(T("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;G("_lact",c,window);G("_fact",c,window);c==-1&&yw();zw(a,b);new vw(function(){Aw("mouse",100)})}}
function zw(a,b){var c=window;a=a===void 0?!1:a;b=b===void 0?!0:b;sw(c.document,"keydown",yw);sw(c.document,"keyup",yw);sw(c.document,"mousedown",yw);sw(c.document,"mouseup",yw);a?sw(c,"touchmove",function(){Aw("touchmove",200)},{passive:!0}):(sw(c,"resize",function(){Aw("resize",200)}),b&&sw(c,"scroll",function(){Aw("scroll",200)}));
sw(c.document,"touchstart",yw,{passive:!0});sw(c.document,"touchend",yw,{passive:!0})}
function Aw(a,b){ww[a]||(ww[a]=!0,xn.xa(function(){yw();ww[a]=!1},b))}
function yw(){H("_lact",window)==null&&xw();var a=Date.now();G("_lact",a,window);H("_fact",window)==-1&&G("_fact",a,window);(a=H("ytglobal.ytUtilActivityCallback_"))&&a()}
function Bw(){var a=H("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Cw=E.ytPubsubPubsubInstance||new Nn,Dw=E.ytPubsubPubsubSubscribedKeys||{},Ew=E.ytPubsubPubsubTopicToKeys||{},Fw=E.ytPubsubPubsubIsSynchronous||{};function Gw(a,b){var c=Hw();if(c&&b){var d=c.subscribe(a,function(){function e(){Dw[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Fw[a]?e():Hq(e,0)}catch(g){oq(g)}},void 0);
Dw[d]=!0;Ew[a]||(Ew[a]=[]);Ew[a].push(d);return d}return 0}
function Iw(a){var b=Hw();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Pb(a,function(c){b.unsubscribeByKey(c);delete Dw[c]}))}
function Jw(a,b){var c=Hw();c&&c.publish.apply(c,arguments)}
function Kw(a){var b=Hw();if(b)if(b.clear(a),a)Lw(a);else for(var c in Ew)Lw(c)}
function Hw(){return E.ytPubsubPubsubInstance}
function Lw(a){Ew[a]&&(a=Ew[a],Pb(a,function(b){Dw[b]&&delete Dw[b]}),a.length=0)}
Nn.prototype.subscribe=Nn.prototype.subscribe;Nn.prototype.unsubscribeByKey=Nn.prototype.Ac;Nn.prototype.publish=Nn.prototype.Bb;Nn.prototype.clear=Nn.prototype.clear;G("ytPubsubPubsubInstance",Cw);G("ytPubsubPubsubTopicToKeys",Ew);G("ytPubsubPubsubIsSynchronous",Fw);G("ytPubsubPubsubSubscribedKeys",Dw);var Mw=Symbol("injectionDeps");function Nw(a){this.name=a}
Nw.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ow(a){this.key=a}
function Pw(){this.i=new Map;this.j=new Map;this.h=new Map}
function Qw(a,b){a.i.set(b.uc,b);var c=a.j.get(b.uc);if(c)try{c.ed(a.resolve(b.uc))}catch(d){c.Fj(d)}}
Pw.prototype.resolve=function(a){return a instanceof Ow?Rw(this,a.key,[],!0):Rw(this,a,[])};
function Rw(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Ee!==void 0)var e=d.Ee;else if(d.Ng)e=d[Mw]?Sw(a,d[Mw],c):[],e=d.Ng.apply(d,A(e));else if(d.Ld){e=d.Ld;var f=e[Mw]?Sw(a,e[Mw],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(A(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Nj||a.h.set(b,e);return e}
function Sw(a,b,c){return b?b.map(function(d){return d instanceof Ow?Rw(a,d.key,c,!0):Rw(a,d,c)}):[]}
;var Tw;function Uw(){Tw||(Tw=new Pw);return Tw}
;var Vw=window;function Ww(){var a,b;return"h5vcc"in Vw&&((a=Vw.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Vw.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Vw&&Vw.performance.mark&&Vw.performance.measure?2:0}
function Xw(a){var b=Ww();switch(b){case 1:Vw.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Vw.performance.mark(a+"-start");break;case 0:break;default:Ab(b,"unknown trace type")}}
function Yw(a){var b=Ww();switch(b){case 1:Vw.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Vw.performance.mark(c);Vw.performance.measure(a,b,c);break;case 0:break;default:Ab(b,"unknown trace type")}}
;var Zw=U("web_enable_lifecycle_monitoring")&&Ww()!==0,$w=U("web_enable_lifecycle_monitoring");function ax(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function bx(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?ws():d;this.j=c;this.scheduler=d;this.i=new Ll;this.h=a;for(a={sb:0};a.sb<this.h.length;a={Zc:void 0,sb:a.sb},a.sb++)a.Zc=this.h[a.sb],c=function(e){return function(){e.Zc.vd();b.h[e.sb].cd=!0;b.h.every(function(f){return f.cd===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.Zc),d=this.scheduler.cb(c,d),this.h[a.sb]=Object.assign({},a.Zc,{vd:c,
jobId:d})}
function cx(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=z(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.cd||(a.scheduler.ya(c.jobId),a.scheduler.cb(c.vd,10))}
bx.prototype.cancel=function(){for(var a=z(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.cd||this.scheduler.ya(b.jobId),b.cd=!0;this.i.resolve()};
bx.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function dx(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};Zw&&Xw(this.state)}
n=dx.prototype;n.install=function(a){this.plugins.push(a);return this};
n.uninstall=function(){var a=this;D.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
n.transition=function(a,b){var c=this;Zw&&Yw(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(cx(this.j),this.j=void 0);ex(this,a,b);this.state=a;Zw&&Xw(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(fx(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function fx(a,b){var c=b.filter(function(e){return gx(a,e)===10}),d=b.filter(function(e){return gx(a,e)!==10});
return a.B.Mj?function(){var e=D.apply(0,arguments);return C(function(f){if(f.h==1)return f.yield(a.ng.apply(a,[c].concat(A(e))),2);a.xe.apply(a,[d].concat(A(e)));f.o()})}:function(){var e=D.apply(0,arguments);
a.og.apply(a,[c].concat(A(e)));a.xe.apply(a,[d].concat(A(e)))}}
n.og=function(a){for(var b=D.apply(1,arguments),c=ws(),d=z(a),e=d.next(),f={};!e.done;f={lc:void 0},e=d.next())f.lc=e.value,c.Zb(function(g){return function(){hx(g.lc.name);ix(function(){return g.lc.callback.apply(g.lc,A(b))});
jx(g.lc.name)}}(f))};
n.ng=function(a){var b=D.apply(1,arguments),c,d,e,f,g;return C(function(h){h.h==1&&(c=ws(),d=z(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.v(0);f.jb=e.value;f.Bc=void 0;g=function(k){return function(){hx(k.jb.name);var l=ix(function(){return k.jb.callback.apply(k.jb,A(b))});
De(l)?k.Bc=U("web_lifecycle_error_handling_killswitch")?l.then(function(){jx(k.jb.name)}):l.then(function(){jx(k.jb.name)},function(m){ax(m);
jx(k.jb.name)}):jx(k.jb.name)}}(f);
c.Zb(g);return f.Bc?h.yield(f.Bc,3):h.v(3)}f={jb:void 0,Bc:void 0};e=d.next();return h.v(2)})};
n.xe=function(a){var b=D.apply(1,arguments),c=this,d=a.map(function(e){return{vd:function(){hx(e.name);ix(function(){return e.callback.apply(e,A(b))});
jx(e.name)},
priority:gx(c,e)}});
d.length&&(this.j=new bx(d))};
function gx(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function hx(a){Zw&&a&&Xw(a)}
function jx(a){Zw&&a&&Yw(a)}
function ex(a,b,c){$w&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(dx.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function ix(a){if(U("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){ax(b)}}
;function kx(a){dx.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var lx;v(kx,dx);kx.prototype.i=function(a,b){var c=this;this.h=Pr(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
kx.prototype.u=function(a,b){this.h&&(xn.ya(this.h),this.h=null);a(b==null?void 0:b.event)};
function mx(){lx||(lx=new kx);return lx}
;var nx=[];G("yt.logging.transport.getScrapedGelPayloads",function(){return nx});function ox(){this.store={};this.h={}}
ox.prototype.storePayload=function(a,b){a=px(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);U("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
ox.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=qx(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,A(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,A(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,A(this.smartExtractMatchingEntries(a))));return c};
ox.prototype.extractMatchingEntries=function(a){a=qx(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,A(this.store[a[c]])),delete this.store[a[c]]);return b};
ox.prototype.getSequenceCount=function(a){a=qx(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function qx(a,b){var c=px(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&px(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(rx(b.auth,g[0])){var h=b.isJspb;rx(h===void 0?"undefined":h?"true":"false",g[1])&&rx(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),rx(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function rx(a,b){return a===void 0||a==="undefined"?!0:a===b}
ox.prototype.getSequenceCount=ox.prototype.getSequenceCount;ox.prototype.extractMatchingEntries=ox.prototype.extractMatchingEntries;ox.prototype.smartExtractMatchingEntries=ox.prototype.smartExtractMatchingEntries;ox.prototype.storePayload=ox.prototype.storePayload;function px(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function sx(a,b){if(a)return a[b.name]}
;var tx=new Nw("FinchConfigManagerService");var ux=O("initial_gel_batch_timeout",2E3),vx=O("gel_queue_timeout_max_ms",6E4),wx=O("gel_min_batch_size",5),xx=void 0;function yx(){this.o=this.h=this.i=0;this.j=!1}
var zx=new yx,Ax=new yx,Bx=new yx,Cx=new yx,Dx,Ex=!0,Fx=E.ytLoggingTransportTokensToCttTargetIds_||{};G("ytLoggingTransportTokensToCttTargetIds_",Fx);var Gx={};function Hx(){var a=H("yt.logging.ims");a||(a=new ox,G("yt.logging.ims",a));return a}
function Ix(a,b){if(a.endpoint==="log_event"){Jx(a);var c=Kx(a),d=Lx(a.payload)||"";a:{if(U("enable_web_tiered_gel")){var e=Jv[d||""];var f,g,h,k=Uw().resolve(new Ow(su))==null?void 0:(f=tu())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!U("web_payload_policy_disabled_killswitch"))return;k=Mx(e.tier);if(k===400){Nx(a,b);return}}Gx[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Hx().storePayload(c,a.payload);Ox(b,c,d==="gelDebuggingEvent")}}
function Ox(a,b,c){function d(){Px({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(xx=new a);a=O("tvhtml5_logging_max_batch_ads_fork")||O("tvhtml5_logging_max_batch")||O("web_logging_max_batch")||100;var f=W(),g=Qx(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Hx().getSequenceCount(b));c>=1E3?d():c>=a?Dx||(Dx=Rx(function(){d();Dx=void 0},0)):f-h>=10&&(Sx(e,b.tier),g.o=f)}
function Nx(a,b){if(a.endpoint==="log_event"){U("more_accurate_gel_parser")&&Hx().storePayload({isJspb:!1},a.payload);Jx(a);var c=Kx(a),d=new Map;d.set(c,[a.payload]);var e=Lx(a.payload)||"";b&&(xx=new b);return new Fk(function(f,g){xx&&xx.isReady()?Tx(d,xx,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Kx(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Fx[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Px(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Fk(function(e,f){var g=Qx(c,d),h=g.j;g.j=!1;Ux(g.i);Ux(g.h);g.h=0;xx&&xx.isReady()?d===void 0&&U("enable_web_tiered_gel")?Vx(e,f,a,b,c,300,h):Vx(e,f,a,b,c,d,h):(Sx(c,d),e())})}
function Vx(a,b,c,d,e,f,g){var h=xx;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=U("enable_web_tiered_gel")?Hx().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Hx().extractMatchingEntries(e),k.set(d,f);else for(d=z(Object.keys(Gx)),l=d.next();!l.done;l=d.next())l=l.value,e=U("enable_web_tiered_gel")?Hx().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Hx().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Gx[l];Tx(k,h,a,b,c,!1,g)}
function Sx(a,b){function c(){Px({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Qx(a,b),e=d===Cx||d===Bx?5E3:vx;U("web_gel_timeout_cap")&&!d.h&&(e=Rx(function(){c()},e),d.h=e);
Ux(d.i);e=T("LOGGING_BATCH_TIMEOUT",O("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Ex&&(e=ux);e=Rx(function(){O("gel_min_batch_size")>0?Hx().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=wx&&c():c()},e);
d.i=e}
function Tx(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&U("vss_through_gel_video_stats")?"video_stats":"log_event";a=z(a);var m=a.next();for(g={};!m.done;g={Ad:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Ed:void 0,Dd:void 0},m=a.next()){var p=z(m.value);m=p.next().value;p=p.next().value;g.batchRequest=Mi({context:zu(b.config_||yu())});if(!Ka(p)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Fx[m])&&
Wx(g.batchRequest,m,p);delete Fx[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Xx(g.batchRequest,h,g.dangerousLogToVisitorSession);U("always_send_and_write")&&(e.writeThenSend=!1);g.Ed=function(r){U("start_client_gcf")&&xn.xa(function(){return C(function(t){return t.yield(Yx(r),0)})});
k--;k||c()};
g.Ad=0;g.Dd=function(r){return function(){r.Ad++;if(e.bypassNetworkless&&r.Ad===1)try{jv(b,l,r.batchRequest,Zx({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Ed,r.Dd,f)),Ex=!1}catch(t){oq(t),d()}k--;k||c()}}(g);
try{jv(b,l,g.batchRequest,Zx(e,g.dangerousLogToVisitorSession,g.Ed,g.Dd,f)),Ex=!1}catch(r){oq(r),d()}}}
function Zx(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,dj:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};$x()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Xx(a,b,c){$x()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&((c=T("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),jq("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Wx(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Jx(a){var b=Lq("il_payload_scraping")==="enable_il_payload_scraping";if(!H("yt.logging.transport.enableScrapingForTest"))if(b)nx=[],G("yt.logging.transport.enableScrapingForTest",!0),G("yt.logging.transport.scrapedPayloadsForTesting",nx),G("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),G("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),G("yt.logging.transport.scrapeClientEvent",
!0);else return;b=H("yt.logging.transport.scrapedPayloadsForTesting");var c=H("yt.logging.transport.payloadToScrape"),d=H("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}G("yt.logging.transport.scrapedPayloadsForTesting",b)}
function $x(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Rx(a,b){return U("transport_use_scheduler")===!1?Hq(a,b):U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Pr(function(){if(mx().currentState==="none")a();else{var c={};mx().install((c.none={callback:a},c))}},b):Pr(a,b)}
function Ux(a){U("transport_use_scheduler")?xn.ya(a):window.clearTimeout(a)}
function Yx(a){var b,c,d,e,f,g,h,k,l,m,p,r,t,x,y;return C(function(w){if(w.h==1)return d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=sx(d,Lp),g=(f=d)==null?void 0:f.hotHashData,h=sx(d,Kp),l=(k=d)==null?void 0:k.coldHashData,(m=Uw().resolve(new Ow(su)))?g?e?w.yield(uu(m,g,e),3):w.yield(uu(m,g),3):w.v(3):w.v(2);if(w.h!=2)return l?h?w.yield(vu(m,l,h),2):w.yield(vu(m,l),2):w.v(2);r=(p=d)==null?void 0:p.rawFinchStaticConfigGroup;x=(t=d)==null?void 0:t.finchStaticHashData;
if(!x)return r&&pq(new V("Finch config data is present, but hash is missing.")),w.return();y=Uw().resolve(new Ow(tx));return y?w.yield(y.Cj({config:r||{},fj:x||""}),0):((r||x)&&pq(new V("FinchConfigManagerService is not present, but Finch config data is present.")),w.v(0))})}
function Qx(a,b){b=b===void 0?200:b;return a?b===300?Cx:Ax:b===300?Bx:zx}
function Lx(a){a=Object.keys(a);a=z(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Jv[b])return b}
function Mx(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var ay=E.ytLoggingGelSequenceIdObj_||{};G("ytLoggingGelSequenceIdObj_",ay);
function by(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Bw();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,ay[b]=b in ay?ay[b]+1:0,a.sequence={index:ay[b],groupKey:b},d.endOfSequence&&delete ay[d.sequenceGroup]);U("web_tag_automated_log_events")&&(e.context.automatedLogEventSource=d.automatedLogEventSource);(d.sendIsolatedPayload?
Nx:Ix)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
;function Gs(a,b,c){c=c===void 0?{}:c;var d=kw;T("ytLoggingEventsDefaultDisabled",!1)&&kw===kw&&(d=null);by(a,b,d,c)}
;var cy=new Set,dy=0,ey=0,fy=0,gy=[],hy=[],iy=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function jy(){Pb(T("ERRORS")||[],function(a){ky.apply(null,a)});
jq("ERRORS",[])}
function Fs(a){ky(a)}
function ly(a){ky(a,"WARNING")}
function my(a){a instanceof Error?ky(a):(a=La(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",ly(a))}
function ny(a,b,c,d,e,f){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=kq("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new V(h),e.name="UnhandledWindowError",e.message=h,e.fileName=
b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!U("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.bf)f||(f={}),f.componentStack=m}f&&oy(e,f);g?ky(e):ly(e)}}
function ky(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||T("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||T("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a){a.hasOwnProperty("level")&&a.level&&(b=a.level);if(U("console_log_js_exceptions")||["test","dev","autopush","staging"].includes(T("SERVER_VERSION")))d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),
a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a);if(!(dy>=5)){d=[];e=z(hy);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(w){}}d=[].concat(A(gy),A(d));var k=Zb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";
k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=nr(a.args[r],"params."+r,c,p),p>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var x="params."+r,y=pr(t[r]);c[x]=y;p+=x.length+y.length;if(p>500)break}}else c.params=pr(t)}if(d.length)for(r=0;r<d.length&&!(p=nr(d[r],"params.context."+r,c,p),p>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=
navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=ir();c=z(a.lb);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.yj)){a=d.weight;break a}a=z(a.fb);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=z(cr);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Yc[r.name])for(e=
z(c.Yc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.zd(f);break}r.params||(r.params={});a=ir();r.params["params.errorServiceSignature"]="msg="+a.lb.length+"&cb="+a.fb.length;r.params["params.serviceWorker"]="false";E.document&&E.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));
(new Pi(Qi,"sample")).constructor!==Pi&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(r);if(r.sampleWeight!==0&&!cy.has(r.message)){if(g)py(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(kr.Bb("handleError",r),U("record_app_crashed_web")&&fy===0&&r.sampleWeight===1&&(fy++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},U("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),
Gs("appCrashed",g)),ey++):b==="WARNING"&&kr.Bb("handleWarning",r);if(U("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=z(iy);for(c=a.next();!c.done;c=a.next())if(Ms(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=
Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];T("FEXP_EXPERIMENTS")&&(h.experimentIds=T("FEXP_EXPERIMENTS"));d=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!kq("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=z(Object.keys(d)),f=
e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=T("SERVER_NAME");e=T("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));(d=T("PLAYER_CLIENT_VERSION"))&&h.kvPairs.push({key:"client.player.version",value:d});h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Gs("clientError",
h),(g==="ERROR"||U("errors_flush_gel_always_killswitch"))&&Px(void 0,void 0,!1))}U("suppress_error_204_logging")||py(b,r)}try{cy.add(r.message)}catch(w){}dy++}}}}
function py(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=z(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=z(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=T("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b);(c=T("PLAYER_CLIENT_VERSION"))&&(a.postParams["client.player.version"]=c)}Uq(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function oy(a){var b=D.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,A(b))}
;function qy(){this.register=new Map}
function ry(a){a=z(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.pe("ABORTED")}
qy.prototype.clear=function(){ry(this);this.register.clear()};
var sy=new qy;var ty=Date.now().toString();
function uy(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(ty)for(a=1,b=0;b<ty.length;b++)d[a%16]^=d[(a-1)%16]/4^ty.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var vy,wy=E.ytLoggingDocDocumentNonce_;wy||(wy=uy(),G("ytLoggingDocDocumentNonce_",wy));vy=wy;function xy(a){this.h=a}
n=xy.prototype;n.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
n.getAsJspb=function(){var a=new Np;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&dg(a,2,jf(this.h.veType)),this.h.veCounter!==void 0&&dg(a,6,jf(this.h.veCounter)),this.h.elementIndex!==void 0&&dg(a,3,jf(this.h.elementIndex)),this.h.isCounterfactual&&dg(a,5,ef(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();rg(a,Np,7,b)}this.h.youtubeData!==void 0&&rg(a,Mp,8,this.h.jspbYoutubeData);return a};
n.toString=function(){return JSON.stringify(this.getAsJson())};
n.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
n.getLoggingDirectives=function(){return this.h.loggingDirectives};function yy(a){return T("client-screen-nonce-store",{})[a===void 0?0:a]}
function zy(a,b){b=b===void 0?0:b;var c=T("client-screen-nonce-store");c||(c={},jq("client-screen-nonce-store",c));c[b]=a}
function Ay(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function By(a){return T(Ay(a===void 0?0:a))}
G("yt_logging_screen.getRootVeType",By);function Cy(){var a=T("csn-to-ctt-auth-info");a||(a={},jq("csn-to-ctt-auth-info",a));return a}
function Dy(){return Object.values(T("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Ey(a){a=yy(a===void 0?0:a);if(!a&&!T("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
G("yt_logging_screen.getCurrentCsn",Ey);function Fy(a,b,c){var d=Cy();(c=Ey(c))&&delete d[c];b&&(d[a]=b)}
function Gy(a){return Cy()[a]}
G("yt_logging_screen.getCttAuthInfo",Gy);G("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==yy(c)||b!==T(Ay(c)))if(Fy(a,d,c),zy(a,c),jq(Ay(c),b),b=function(){setTimeout(function(){a&&Gs("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:vy,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Hy(){var a=Li(Iy),b;return(new Fk(function(c,d){a.onSuccess=function(e){Fq(e)?c(new Jy(e)):d(new Ky("Request failed, status="+Gq(e),"net.badstatus",e))};
a.onError=function(e){d(new Ky("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ky("Request timed out","net.timeout",e))};
b=Uq("//googleads.g.doubleclick.net/pagead/id",a)})).kd(function(c){if(c instanceof Ok){var d;
(d=b)==null||d.abort()}return Kk(c)})}
function Ky(a,b,c){db.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(Ky,db);function Jy(a){this.xhr=a}
;function Ly(){this.ea=0;this.h=null}
Ly.prototype.then=function(a,b,c){return this.ea===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:My(a):this.ea===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Ny(a):this};
Ly.prototype.getValue=function(){return this.h};
Ly.prototype.isRejected=function(){return this.ea==2};
Ly.prototype.$goog_Thenable=!0;function Ny(a){var b=new Ly;a=a===void 0?null:a;b.ea=2;b.h=a===void 0?null:a;return b}
function My(a){var b=new Ly;a=a===void 0?null:a;b.ea=1;b.h=a===void 0?null:a;return b}
;function Oy(a){var b=T("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(jc(a)));return a}
function Py(a){var b={};U("json_condensed_response")&&(b.prettyPrint="false");return a=zq(a,b||{},!1)}
function Qy(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Aq(a)?"same-origin":"cors",credentials:Aq(a)?"same-origin":"include"};b={};for(var d=z(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Ry(){return ti()||(zd||Ad)&&Ms("applewebkit")&&!Ms("version")&&(!Ms("safari")||Ms("gsa/"))||yd&&Ms("version/")?!0:T("EOM_VISITOR_DATA")?!1:!0}
;function Sy(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Ty(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Rp)if(Rp[d]==c.embeddedPlayerMode){b=Rp[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Uy(a){db.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Vy;this.isTimeout=a instanceof Ky&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Ok}
v(Uy,db);Uy.prototype.name="BiscottiError";function Vy(){db.call(this,"Biscotti ID is missing from server")}
v(Vy,db);Vy.prototype.name="BiscottiMissingError";var Iy={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Wy=null;function Xy(){if(U("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ry())return Error("User has not consented - not fetching biscotti id.");var a=T("PLAYER_VARS",{});if(Ji(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Ty(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function cq(){var a=Xy();if(a!==void 0)return Kk(a);Wy||(Wy=Hy().then(Yy).kd(function(b){return Zy(2,b)}));
return Wy}
function Yy(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Vy;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Vy;a=a.id;dq(a);Wy=My(a);$y(18E5,2);return a}
function Zy(a,b){b=new Uy(b);dq("");Wy=Ny(b);a>0&&$y(12E4,a-1);throw b;}
function $y(a,b){Hq(function(){Hy().then(Yy,function(c){return Zy(b,c)}).kd(Dk)},a)}
function az(){try{var a=H("yt.ads.biscotti.getId_");return a?a():cq()}catch(b){return Kk(b)}}
;var Jb=oa(["data-"]);function bz(a){a&&(a.dataset?a.dataset[cz()]="true":Lb(a))}
function dz(a){return a?a.dataset?a.dataset[cz()]:a.getAttribute("data-loaded"):null}
var ez={};function cz(){return ez.loaded||(ez.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function fz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Li(b);this.assets=a.assets||{};this.attrs=a.attrs||Li(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
fz.prototype.clone=function(){var a=new fz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Ja(c)=="object"?a[b]=Li(c):a[b]=c}return a};var gz=["att/get"],hz=["share/get_share_panel"],iz=["share/get_web_player_share_panel"],jz=["feedback"],kz=["notification/modify_channel_preference"],lz=["browse/edit_playlist"],mz=["subscription/subscribe"],nz=["subscription/unsubscribe"];var oz=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};G("yt.msgs_",oz);function pz(a){eq(oz,arguments)}
;function qz(a,b,c){rz(a,b,c===void 0?null:c)}
function sz(a){a=tz(a);var b=document.getElementById(a);b&&(Kw(a),b.parentNode.removeChild(b))}
function uz(a,b){a&&b&&(a=""+Ma(b),(a=vz[a])&&Iw(a))}
function rz(a,b,c){c=c===void 0?null:c;var d=tz(typeof a==="string"?a:a.toString()),e=document.getElementById(d),f=e&&dz(e),g=e&&!f;f?b&&b():(b&&(f=Gw(d,b),b=""+Ma(b),vz[b]=f),g||(e=wz(a,d,function(){dz(e)||(bz(e),Jw(d),Hq(function(){Kw(d)},0))},c)))}
function wz(a,b,c,d){d=d===void 0?null:d;var e=Si("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Hb(e,typeof a==="string"?Ip(a):a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function tz(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+dc(a)}
var vz={};function xz(a){var b=yz(a),c=document.getElementById(b),d=c&&dz(c);d||c&&!d||(c=zz(a,b,function(){if(!dz(c)){bz(c);Jw(b);var e=Ua(Kw,b);Hq(e,0)}}))}
function zz(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ip(a);Nb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function yz(a){var b=Si("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+dc(a)}
;function Az(a){var b=D.apply(1,arguments);if(!Bz(a)||b.some(function(d){return!Bz(d)}))throw Error("Only objects may be merged.");
b=z(b);for(var c=b.next();!c.done;c=b.next())Cz(a,c.value)}
function Cz(a,b){for(var c in b)if(Bz(b[c])){if(c in a&&!Bz(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Cz(a[c],b[c])}else if(Dz(b[c])){if(c in a&&!Dz(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ez(a[c],b[c])}else a[c]=b[c];return a}
function Ez(a,b){b=z(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Bz(c)?a.push(Cz({},c)):Dz(c)?a.push(Ez([],c)):a.push(c);return a}
function Bz(a){return typeof a==="object"&&!Array.isArray(a)}
function Dz(a){return typeof a==="object"&&Array.isArray(a)}
;var Fz="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Gz(a,b){var c=c===void 0?!0:c;var d=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=hc(window.location.href);e&&d.push(e);e=hc(a);if(Ob(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=jc(a),a=kc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ey()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Hz(a,b,f)}else Hz(a,b)}
function Hz(a,b,c){a=Iz(a);b=b?nc(b):"";c=c||5;Ry()&&vr(a,b,c)}
function Iz(a){for(var b=z(Fz),c=b.next();!c.done;c=b.next())a=sc(a,c.value);return"ST-"+dc(a).toString(36)}
;Date.now();function Jz(a){for(var b=0,c=0;c<a.length;c++)b=b*31+a.charCodeAt(c),c<a.length-1&&(b%=0x800000000000);return b%1E5}
;function Kz(a){Fu.call(this,1,arguments);this.csn=a}
v(Kz,Fu);var Ou=new Gu("screen-created",Kz),Lz=[],Mz=0,Nz=new Map,Oz=new Map,Pz=new Map;
function Qz(a,b,c,d,e,f){e=e===void 0?!1:e;f=f===void 0?{}:f;Object.assign(f,Rz({cttAuthInfo:Gy(b)||void 0},b));for(var g=z(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Hi(k)||!k.trackingParams&&!k.veType)&&ly(Error("Child VE logged with no data"));if(U("no_client_ve_attach_unless_shown")){var l=Sz(h,b);if(k.veType&&!Oz.has(l)&&!Pz.has(l)&&!e){if(!U("il_attach_cache_limit")||Nz.size<1E3){Nz.set(l,[a,b,c,h]);return}U("il_attach_cache_limit")&&Nz.size>1E3&&ly(new V("IL Attach cache exceeded limit"))}h=
Sz(c,b);Nz.has(h)?Tz(c,b):Pz.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Rb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Uz("visualElementAttached",f,c):a?by("visualElementAttached",c,a,f):Gs("visualElementAttached",c,f)}
function Uz(a,b,c){Lz.push({gg:a,payload:c,rj:void 0,options:b});Mz||(Mz=Pu())}
function Qu(a){if(Lz){for(var b=z(Lz),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Gs(c.gg,c.payload,c.options));Lz.length=0}Mz=0}
function Sz(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Tz(a,b){a=Sz(a,b);if(Nz.has(a)){b=Nz.get(a)||[];var c=c===void 0?{}:c;Qz(b[0],b[1],b[2],[b[3]],!0,c);Nz.delete(a)}}
function Rz(a,b){U("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Vz(){}
Vz.prototype.flush=function(a,b){a=a===void 0?[]:a;b=b===void 0?!1:b;if(U("enable_client_streamz_web")){a=z(a);for(var c=a.next();!c.done;c=a.next())c=ii(c.value),this.h&&rg(c,di,2,this.h),c={serializedIncrementBatch:Ed(c.j())},Gs("streamzIncremented",c,{sendIsolatedPayload:b})}};
function gn(){}
v(gn,Vz);function Wz(a){var b=new di;var c=new ai;c=xg(c,1,"botguard");a=xg(c,2,a);a=qg(a,ai);lg(b,1,ei,a);a&&!re(a)&&Zf(b.D);this.h=b}
v(Wz,Vz);var fn,Xz=new Map;function Yz(){try{return!!self.localStorage}catch(a){return!1}}
;function Zz(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function $z(a){if(Yz()){var b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Zz(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function aA(){if(!Yz())return!1;var a=Nr(),b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=Zz(c.value),c!==void 0&&c!==a)return!0;return!1}
;function bA(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(T("INNERTUBE_CLIENT_NAME")==="WEB"||T("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function cA(){var a=a===void 0?!0:a;try{window.sessionStorage.removeItem("stickiness_reload");window.sessionStorage.removeItem("session_logininfo");jq("LOGIN_INFO","");a&&window.sessionStorage.setItem("from_switch_account","1");a=!0;a=a===void 0?!1:a;var b,c=dA;c||(c=document.querySelector("#persist_identity"));if(b=c){var d=b.src?(new URL(b.src)).origin:"*";if(a){var e;(e=b.contentWindow)==null||e.postMessage({action:"clear"},d)}else if(!(Number(window.sessionStorage.getItem("stickiness_reload"))>=
2)){var f=window.sessionStorage.getItem("session_logininfo");if(f){var g;(g=b.contentWindow)==null||g.postMessage({loginInfo:f},d)}}}}catch(h){}}
function eA(a){if(a)if(a.startsWith("https://accounts.google.com/AddSession"))cA();else if(a.startsWith("https://accounts.google.com/ServiceLogin"))cA();else{var b;if(b=a.startsWith("https://myaccount.google.com"))b=(a instanceof co?a.clone():new co(a)).h.endsWith("/youtubeoptions");b&&cA()}if(T("LOGGED_IN",!0)&&bA()){b=T("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=hc(window.location.href);c&&b.push(c);c=hc(a);Ob(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=jc(a),(b=kc(b))?(b=Iz(b),b=(b=wr(b)||null)?wq(b):
{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;bA()?(d||(d=T("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Gz(a,b)}}
var dA=null;function fA(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=T("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Gz(a,b);if(c)return!1;eA(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=oc(a,e);eA(b);a=void 0;a=a===void 0?wb:a;a:if(f=b+f,a=a===void 0?wb:a,!(f instanceof sb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof ub&&c.Nf(f)){f=new sb(f);break a}f=void 0}g=g.location;f=yb(f||tb);f!==void 0&&(g.href=f);return!0}
;function gA(a){if(Ji(T("PLAYER_VARS",{}))!="1"){a&&bq();try{az().then(function(){},function(){}),Hq(gA,18E5)}catch(b){oq(b)}}}
;function hA(){this.h={}}
n=hA.prototype;n.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
n.get=function(a){if(this.contains(a))return this.h[a]};
n.set=function(a,b){this.h[a]=b};
n.kc=function(){return Object.keys(this.h)};
n.remove=function(a){delete this.h[a]};function iA(){this.mappings=new hA}
iA.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
iA.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Ab(b)}}return a};
new iA;var jA=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function kA(){var a=a===void 0?window.location.href:a;if(U("kevlar_disable_theme_param"))return null;var b=ic(a);if(U("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=xq(a).theme;return jA.get(c)||null}catch(d){}return null}
;function lA(a){var b=new Hl;if(a.interpreterJavascript){var c=Gp(a.interpreterJavascript);c=Fb(c).toString();var d=new Fl;xg(d,6,c);rg(b,Fl,1,d,we)}else a.interpreterUrl&&(c=Hp(a.interpreterUrl),c=mb(c).toString(),d=new Gl,xg(d,4,c),rg(b,Gl,2,d,we));a.interpreterHash&&kg(b,3,zf(a.interpreterHash),we);a.program&&kg(b,4,zf(a.program),we);a.globalName&&kg(b,5,zf(a.globalName),we);a.clientExperimentsStateBlob&&kg(b,7,zf(a.clientExperimentsStateBlob),we);return b}
function mA(a){var b={};a=z(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
function nA(a){return Number(a.t)||7200}
;function oA(){var a=a===void 0?window:a;var b,c;return C(function(d){if(d.h==1)return d.yield(yc(),2);b=a;c=b.bgevmc;if(!c)throw Error("BGE Controls not exposed");return d.return({pause:function(){c.p()},
resume:function(){c.r()},
checkForRefresh:function(){return c.cr()}})})}
function zc(){if(U("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=globalThis.performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function pA(a){window.bgens=a}
function qA(a){this.h=a}
qA.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
qA.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
qA.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function rA(){return new Promise(function(a){var b=window;b.ntpevasrs!==void 0?a(new qA(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new qA(c))}))})}
;var sA=oa(["https://static.doubleclick.net/instream/ad_status.js"]),tA=[],uA=function(a){var b=D.apply(1,arguments);if(b.length===0)return lb(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return lb(c)}(sA),vA=!1;
function wA(){if(Ry()){var a=T("PLAYER_VARS",{});if(Ji(a)!="1"&&!Ty(a)){var b=function(){vA=!0;"google_ad_status"in window?jq("DCLKSTAT",1):jq("DCLKSTAT",2)};
try{var c=Cb(document);qz(uA,b,c)}catch(d){}tA.push(xn.xa(function(){if(!(vA||"google_ad_status"in window)){try{uz(uA.toString(),b)}catch(d){}vA=!0;jq("DCLKSTAT",3)}},5E3))}}}
function xA(){var a=Number(T("DCLKSTAT",0));return isNaN(a)?0:a}
;function X(a){this.h=a}
[new X("b.f_"),new X("j.s_"),new X("r.s_"),new X("e.h_"),new X("i.s_"),new X("s.t_"),new X("p.h_"),new X("s.i_"),new X("f.i_"),new X("a.b_"),new X("a.o_"),new X("g.o_"),new X("p.i_"),new X("p.m_"),new X("n.k_"),new X("i.f_"),new X("a.s_"),new X("m.c_"),new X("n.h_"),new X("o.p_"),new X("m.p_"),new X("o.a_"),new X("d.p_"),new X("e.i_")].reduce(function(a,b){a[b.h]=b;return a},{});function yA(a){return H("ytcsi."+(a||"")+"data_")||zA(a)}
function AA(){var a=yA();a.info||(a.info={});return a.info}
function BA(a){a=yA(a);a.metadata||(a.metadata={});return a.metadata}
function CA(a){a=yA(a);a.tick||(a.tick={});return a.tick}
function DA(a){a=yA(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function EA(a){a=DA(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function FA(a){var b=yA(a).nonce;b||(b=uy(),yA(a).nonce=b);return b}
function zA(a){var b={tick:{},info:{}};G("ytcsi."+(a||"")+"data_",b);return b}
;var GA=O("ytcsi_debug_max_size",100);function HA(){var a=H("ytcsi.debug");a||(a=[],G("ytcsi.debug",a),G("ytcsi.reference",{}));return a}
function IA(a){var b=HA();b.push(a);U("limit_ytcsi_debug_array_size")&&b.length>GA&&b.splice(0,b.length-GA)}
function JA(a){a=a||"";var b=KA();if(b[a])return b[a];var c={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};IA(c);return b[a]=c}
function KA(){var a=H("ytcsi.reference");if(a)return a;HA();return H("ytcsi.reference")}
;var Y={},LA=(Y.auto_search="LATENCY_ACTION_AUTO_SEARCH",Y.ad_to_ad="LATENCY_ACTION_AD_TO_AD",Y.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",Y.app_startup="LATENCY_ACTION_APP_STARTUP",Y.browse="LATENCY_ACTION_BROWSE",Y.cast_splash="LATENCY_ACTION_CAST_SPLASH",Y.channel_activity="LATENCY_ACTION_FAMILY_CENTER_CHANNEL_ACTIVITY",Y.channels="LATENCY_ACTION_CHANNELS",Y.chips="LATENCY_ACTION_CHIPS",Y.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",Y.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
Y.editor="LATENCY_ACTION_EDITOR",Y.embed="LATENCY_ACTION_EMBED",Y.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",Y.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",Y.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",Y.explore="LATENCY_ACTION_EXPLORE",Y.favorites="LATENCY_ACTION_FAVORITES",Y.home="LATENCY_ACTION_HOME",Y.inboarding="LATENCY_ACTION_INBOARDING",Y.landing="LATENCY_ACTION_LANDING",Y.learning="LATENCY_ACTION_LEARNING",Y.learning_journey_browse=
"LATENCY_ACTION_LEARNING_JOURNEY_BROWSE",Y.learning_journey_watch="LATENCY_ACTION_LEARNING_JOURNEY_WATCH",Y.library="LATENCY_ACTION_LIBRARY",Y.live="LATENCY_ACTION_LIVE",Y.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",Y.management="LATENCY_ACTION_MANAGEMENT",Y.mini_app="LATENCY_ACTION_MINI_APP_PLAY",Y.notification_settings="LATENCY_ACTION_FAMILY_CENTER_NOTIFICATION_SETTINGS",Y.onboarding="LATENCY_ACTION_ONBOARDING",Y.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",Y.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",Y.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",Y.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",Y.prebuffer="LATENCY_ACTION_PREBUFFER",Y.prefetch="LATENCY_ACTION_PREFETCH",Y.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",Y.profile_switcher="LATENCY_ACTION_LOGIN",Y.projects="LATENCY_ACTION_PROJECTS",Y.reel_watch="LATENCY_ACTION_REEL_WATCH",Y.results="LATENCY_ACTION_RESULTS",Y.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.premium=
"LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",Y.privacy_policy="LATENCY_ACTION_FAMILY_CENTER_PRIVACY_POLICY",Y.review="LATENCY_ACTION_REVIEW",Y.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",Y.search_ui="LATENCY_ACTION_SEARCH_UI",Y.search_suggest="LATENCY_ACTION_SUGGEST",Y.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",Y.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",Y.switchplan="LATENCY_ACTION_UNPLUGGED_SWITCH_PLAN",Y.seek="LATENCY_ACTION_PLAYER_SEEK",Y.settings="LATENCY_ACTION_SETTINGS",
Y.store="LATENCY_ACTION_STORE",Y.supervision_dashboard="LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_DASHBOARD",Y.bedtime_reminder_settings="LATENCY_ACTION_FAMILY_CENTER_BEDTIME_REMINDER_SETTINGS",Y.break_reminder_settings="LATENCY_ACTION_FAMILY_CENTER_BREAK_REMINDER_SETTINGS",Y.supervision_settings_dashboard="LATENCY_ACTION_FAMILY_CENTER_SUPERVISION_SETTINGS_DASHBOARD",Y.time_management="LATENCY_ACTION_FAMILY_CENTER_TIME_MANAGEMENT",Y.update_profile="LATENCY_ACTION_FAMILY_CENTER_UPDATE_PROFILE",Y.viewing_permissions=
"LATENCY_ACTION_FAMILY_CENTER_VIEWING_PERMISSIONS",Y.shorts_settings="LATENCY_ACTION_FAMILY_CENTER_SHORTS_SETTINGS",Y.privacy_settings="LATENCY_ACTION_FAMILY_CENTER_PRIVACY_SETTINGS",Y.tenx="LATENCY_ACTION_TENX",Y.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",Y.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",Y.watch="LATENCY_ACTION_WATCH",Y.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",Y["watch,watch7"]="LATENCY_ACTION_WATCH",Y["watch,watch7_html5"]="LATENCY_ACTION_WATCH",Y["watch,watch7ad"]="LATENCY_ACTION_WATCH",
Y["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",Y.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",Y.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",Y.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",Y.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",Y.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",Y.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",Y.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",Y.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",
Y);function MA(a){return LA[a]||"LATENCY_ACTION_UNKNOWN"}
;function NA(a,b){Fu.call(this,1,arguments);this.timer=b}
v(NA,Fu);var OA=new Gu("aft-recorded",NA);G("ytLoggingGelSequenceIdObj_",E.ytLoggingGelSequenceIdObj_||{});var PA=E.ytLoggingLatencyUsageStats_||{};G("ytLoggingLatencyUsageStats_",PA);function QA(){this.h=0}
function RA(){QA.instance||(QA.instance=new QA);return QA.instance}
QA.prototype.tick=function(a,b,c,d){SA(this,"tick_"+a+"_"+b)||Gs("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
QA.prototype.info=function(a,b,c){var d=Object.keys(a).join("");SA(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Gs("latencyActionInfo",a,{cttAuthInfo:c}))};
QA.prototype.jspbInfo=function(){};
QA.prototype.span=function(a,b,c){var d=Object.keys(a).join("");SA(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Gs("latencyActionSpan",a,{cttAuthInfo:c}))};
function SA(a,b){PA[b]=PA[b]||{count:0};var c=PA[b];c.count++;c.time=W();a.h||(a.h=Pr(function(){var d=W(),e;for(e in PA)PA[e]&&d-PA[e].time>6E4&&delete PA[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||ly(c)),!0):!1}
;var TA=window;function UA(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function VA(){var a;if(U("csi_use_performance_navigation_timing")){var b,c,d,e=Z==null?void 0:(a=Z.getEntriesByType)==null?void 0:(b=a.call(Z,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=WA(e.requestStart),e.responseEnd=WA(e.responseEnd),e.redirectStart=WA(e.redirectStart),e.redirectEnd=WA(e.redirectEnd),e.domainLookupEnd=WA(e.domainLookupEnd),e.connectStart=WA(e.connectStart),e.connectEnd=WA(e.connectEnd),e.responseStart=WA(e.responseStart),
e.secureConnectionStart=WA(e.secureConnectionStart),e.domainLookupStart=WA(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Z.timing}else a=U("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Z.timing)):Z.timing;return a}
function WA(a){return Math.round(XA()+a)}
function XA(){return(U("csi_use_time_origin")||U("csi_use_time_origin_tvhtml5"))&&Z.timeOrigin?Math.floor(Z.timeOrigin):Z.timing.navigationStart}
var Z=TA.performance||TA.mozPerformance||TA.msPerformance||TA.webkitPerformance||new UA;var YA=!1,ZA=!1,$A={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"},aB=Ta(Z.clearResourceTimings||Z.webkitClearResourceTimings||Z.mozClearResourceTimings||Z.msClearResourceTimings||Z.oClearResourceTimings||Dk,Z);function bB(a,b){cB("_start",a,b)}
function dB(a,b){if(!U("web_csi_action_sampling_enabled")||!yA(b).actionDisabled){var c=JA(b||"");Az(c.info,a);a.loadType&&(c=a.loadType,BA(b).loadType=c);Az(EA(b),a);c=FA(b);b=yA(b).cttAuthInfo;RA().info(a,c,b)}}
function eB(){var a,b,c,d;return((d=Uw().resolve(new Ow(su))==null?void 0:(a=tu())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function cB(a,b,c){if(!U("web_csi_action_sampling_enabled")||!yA(c).actionDisabled){var d=FA(c),e;if(e=U("web_csi_debug_sample_enabled")&&d){(Uw().resolve(new Ow(su))==null?0:tu())&&!ZA&&(ZA=!0,cB("gcfl",W(),c));var f,g,h;e=(Uw().resolve(new Ow(su))==null?void 0:(f=tu())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=eB();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}f?(e=Jz(d)%e!==0,yA(c).debugTicksExcludedLogged||
(f={},f.debugTicksExcluded=e,dB(f,c)),yA(c).debugTicksExcludedLogged=!0):e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Z.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||U("web_csi_disable_alt_time_performance_mark"))Z.mark(e);else{f=U("csi_use_performance_navigation_timing")?f-Z.timeOrigin:f-(Z.timeOrigin||Z.timing.navigationStart);try{Z.mark(e,{startTime:f})}catch(k){}}e=JA(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=z(e.callback[a]),f=e.next();!f.done;f=e.next())f=
f.value,f();e=DA(c);e.gelTicks&&(e.gelTicks[a]=!0);f=CA(c);e=b||W();f[a]=e;f=yA(c).cttAuthInfo;a==="_start"?(a=RA(),SA(a,"baseline_"+d)||Gs("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):RA().tick(a,d,b,f);fB(c);return e}}}
function gB(){var a,b=(a=Z.getEntriesByType)==null?void 0:a.call(Z,"mark");b&&b.forEach(function(c){if(c.name.startsWith("mark_")){var d;(d=Z.clearMarks)==null||d.call(Z,c.name)}})}
function hB(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=mw+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function iB(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=z(Object.entries(T("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function jB(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Cb(document)&&a.setAttribute("nonce",Cb(document));return c?(a=Z.getEntriesByName(c))&&a[0]&&(a=a[0],c=XA(),cB("rsf_"+b,c+Math.round(a.fetchStart)),cB("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function kB(){var a=window.location.protocol,b=Z.getEntriesByType("resource");b=Qb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Sb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(cB("wffs",WA(b.startTime)),cB("wffe",WA(b.responseEnd)))}
function lB(a){var b=mB("aft",a);if(b)return b;b=T((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=mB(b[d],a);if(e)return e}return NaN}
function nB(a){G("ytglobal.timing"+(a||"")+"ready_",!0)}
function mB(a,b){if(a=CA(b)[a])return typeof a==="number"?a:a[a.length-1]}
function fB(a){var b=mB("_start",a),c=lB(a),d=!YA;b&&c&&d&&(Lu(OA,new NA(Math.round(c-b),a)),YA=!0)}
function oB(){if(Z.getEntriesByType){var a=Z.getEntriesByType("paint");if(a=Tb(a,function(c){return c.name==="first-paint"}))return WA(a.startTime)}var b;
U("csi_use_performance_navigation_timing")?b=Z.getEntriesByType("first-paint")[0].startTime:b=Z.timing.zj;return b?Math.max(0,b):0}
;function pB(a,b){nq(function(){JA("").info.actionType=a;b&&jq("TIMING_AFT_KEYS",b);jq("TIMING_ACTION",a);var c=iB();Object.keys(c).length>0&&dB(c);c={isNavigation:!0,actionType:MA(T("TIMING_ACTION"))};var d=T("PREVIOUS_ACTION");d&&(c.previousAction=MA(d));if(d=T("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=T("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Ey())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=hB();if(d===1||d===-1)c.isVisible=!0;BA();AA();c.loadType="cold";d=AA();var e=VA(),f=XA(),g=T("CSI_START_TIMESTAMP_MILLIS",
0);g>0&&!U("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(cB("srt",e.responseStart),d.prerender!==1&&bB(f));d=oB();d>0&&cB("fpt",d);d=VA();d.isPerformanceNavigationTiming&&dB({performanceNavigationTiming:!0},void 0);cB("nreqs",d.requestStart,void 0);cB("nress",d.responseStart,void 0);cB("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(cB("nrs",d.redirectStart,void 0),cB("nre",d.redirectEnd,void 0));d.domainLookupEnd-d.domainLookupStart>0&&(cB("ndnss",d.domainLookupStart,
void 0),cB("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(cB("ntcps",d.connectStart,void 0),cB("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=XA()&&d.connectEnd-d.secureConnectionStart>0&&(cB("nstcps",d.secureConnectionStart,void 0),cB("ntcpe",d.connectEnd,void 0));Z&&"getEntriesByType"in Z&&kB();d=[];if(document.querySelector&&Z&&Z.getEntriesByName)for(var h in $A)$A.hasOwnProperty(h)&&(e=$A[h],jB(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=z(d),d=h.next();!d.done;d=
h.next())c.resourceInfo.push({resourceCache:d.value});dB(c);c=DA();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=EA();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(BA().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=CA();e=DA();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)k in e||typeof d[k]==="number"&&cB(k,mB(k));k={};d=!1;h=z(h);for(e=h.next();!e.done;e=h.next())d=e.value,Az(c,d),Az(k,d),d=!0;d&&dB(k)}nB();k=T("TIMING_ACTION");
H("ytglobal.timingready_")&&k&&qB()&&lB()&&fB()})()}
function rB(){var a=a===void 0?{}:a;nq(function(){sB();var b=a.sampleRate;if(!U("web_csi_action_sampling_enabled")||b===void 0||b<=1)b=!1;else{var c=FA("attestation_challenge_fetch");b=Jz(c)%b!==0}b&&(yA("attestation_challenge_fetch").actionDisabled=!0);JA("attestation_challenge_fetch").info.actionType="attestation_challenge_fetch";a.cttAuthInfo&&(yA("attestation_challenge_fetch").cttAuthInfo=a.cttAuthInfo);jq("attestation_challenge_fetchTIMING_ACTION","attestation_challenge_fetch");nq(bB)(a.startTime,
"attestation_challenge_fetch");b={actionType:MA("attestation_challenge_fetch")};a.vj&&(b.previousAction=MA(T("TIMING_ACTION")));(c=Ey())&&c!=="UNDEFINED_CSN"&&(b.clientScreenNonce=c);tB(b,"attestation_challenge_fetch");nB("attestation_challenge_fetch")})()}
function sB(){nq(function(){qB("attestation_challenge_fetch")&&uB("aa",void 0,"attestation_challenge_fetch");var a=KA();a.attestation_challenge_fetch&&delete a.attestation_challenge_fetch;var b={timerName:"attestation_challenge_fetch",info:{},tick:{},span:{},jspbInfo:[]};IA(b);a.attestation_challenge_fetch=b;zA("attestation_challenge_fetch");aB();gB()})()}
function qB(a){return nq(function(){return vB("_start",a)})()}
function tB(a,b,c){nq(dB)(a,b,c===void 0?!1:c)}
function uB(a,b,c){return nq(cB)(a,b,c)}
function vB(a,b){return nq(function(){var c=CA(b);return a in c})()}
function wB(a){if(!U("universal_csi_network_ticks"))return"";a=ic(a)||"";for(var b=Object.keys(Du),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function xB(a){if(!U("universal_csi_network_ticks"))return function(){};
var b=Du[a];return b?(yB(b),function(){var c=U("universal_csi_network_ticks")?(c=Eu[a])?yB(c):!1:!1;return c}):function(){}}
function yB(a){return nq(function(){if(vB(a))return!1;uB(a,void 0,void 0);return!0})()}
function zB(a){nq(function(){if(!qB("attestation_challenge_fetch")||vB(a,"attestation_challenge_fetch"))return!1;uB(a,void 0,"attestation_challenge_fetch");return!0})()}
function AB(){nq(function(){var a=FA();requestAnimationFrame(function(){setTimeout(function(){a===FA()&&uB("ol",void 0,void 0)},0)})})()}
var BB=window;BB.ytcsi&&(BB.ytcsi.infoGel=tB,BB.ytcsi.tick=uB);function CB(a,b,c){var d=this;this.network=a;this.options=b;this.H=c;this.j=0;this.h=null;this.i=new en;b.De?DB(this,EB(this)):b.preload&&DB(this,new Promise(function(e){Pr(function(){e(FB(d))},0)}))}
function EB(a){var b,c,d,e,f,g,h,k,l,m,p,r;return C(function(t){switch(t.h){case 1:b=E;if(!b.ytAtP||U("ytatp_ks")){b.ytAtRC?(d=O("att_init_delay",0),Qr(function(){var x,y;return C(function(w){if(w.h==1){c=b.ytAtT;delete b.ytAtT;if(!b.ytAtRC)return a.i.la(6,a.j++),w.return();a.i.la(2,a.j++);x=GB(c,null);return w.yield(a.Ib(x),2)}y=w.i;b.ytAtRC&&b.ytAtRC(JSON.stringify(y));w.o()})},d)):(c=b.ytAtT,delete b.ytAtT,a.i.la(1,a.j++));
t.v(2);break}return t.yield(b.ytAtP,3);case 3:e=t.i;delete b.ytAtP;g=(f=e)==null?void 0:f.R;c=(h=e)==null?void 0:h.T;if(g){a.i.la(1,a.j++);t.v(4);break}a.i.la(2,a.j++);return t.yield(a.Ib(GB(c,null)),5);case 5:k=t.i,g=JSON.stringify(k);case 4:b.ytAtRC?b.ytAtRC(g):ly(Error("ytAtRC not defined for ytAtP."));case 2:return t.yield(rA(),6);case 6:return l=t.i,l.bindInnertubeChallengeFetcher(function(x){a.i.la(3,a.j++);return a.Ib(GB(c,x))}),l.registerChallengeFetchedCallback(function(x){x=x.challenge;
if(!x)throw Error("BGE_MACR");x={challenge:x,Gb:mA(x),vm:m,bgChallenge:new Hl};x=Promise.resolve(x);a.h=x}),t.yield(yc(),7);
case 7:m=t.i;p=l.getLatestChallengeResponse();r=p.challenge;if(!r)throw Error("BGE_MACIL");return t.return({challenge:r,Gb:mA(r),vm:m,bgChallenge:new Hl})}})}
CB.prototype.u=function(){var a=this;return C(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
CB.prototype.o=function(a,b,c){var d=this,e,f,g;return C(function(h){d.h===null&&DB(d,FB(d));e=!1;f={};g=function(){var k,l,m,p,r;return C(function(t){switch(t.h){case 1:if(!d.options.kj||!d.options.De){t.v(2);break}return t.yield(oA(),3);case 3:return k=t.i,t.yield((l=k)==null?void 0:l.checkForRefresh(),2);case 2:return t.yield(d.h,5);case 5:m=t.i;f.challenge=m.challenge;if(!m.vm){"c1a"in m.Gb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");t.v(6);break}p=Object.assign({},{c:m.challenge,e:a},b);
t.u(7);e=!0;return t.yield(m.vm.snapshot({Ma:p}),9);case 9:(r=t.i)?f.webResponse=r:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";t.B(6);break;case 7:t.j(),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 6:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var x=m.Gb,y={};x.c6a&&(y.reportingStatus=String(Number(x.c)^xA()));x.c6b&&(y.broadSpectrumDetectionResult=String(Number(x.c)^Number(T("CATSTAT",0))));f.adblockReporting=y}return t.return(f)}})};
return h.return(Promise.race([g(),HB(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function FB(a){var b,c,d,e,f,g,h,k,l;return C(function(m){switch(m.h){case 1:return b=GB(void 0,Ql().h),m.u(2),m.yield(IB(a,b),4);case 4:c=m.i;m.B(3);break;case 2:return m.j(),ly(Error("Failed to fetch attestation challenge after 5 attempts; not retrying for 24h.")),JB(a,864E5),m.return({challenge:"",Gb:{},vm:void 0,bgChallenge:void 0});case 3:d=c.dg;e=c.eg;f=nA(e);JB(a,f*1E3);g=void 0;if(!("c1a"in e&&c.bgChallenge)){m.v(5);break}h=lA(c.bgChallenge);m.u(6);return m.yield(Rl(Ql(),h),8);case 8:m.B(7);
break;case 6:return k=m.j(),ly(k),m.return({challenge:d,Gb:e,vm:g,bgChallenge:h});case 7:return m.u(9),g=new Nl({challenge:h,Qb:{na:"aGIf"}}),m.yield(g.Ub,11);case 11:m.B(5);break;case 9:l=m.j(),ly(l),g=void 0;case 5:return m.return({challenge:d,Gb:e,vm:g,bgChallenge:h})}})}
function KB(a,b){var c;return C(function(d){if(d.h==1)return pA(2),d.u(2),d.yield(a.network.Ib(b),4);if(d.h!=2)return(c=d.i)?c.challenge&&!c.bgChallenge?pA(1):pA(4):pA(3),d.return(c);d.j();pA(3);return d.return(void 0)})}
CB.prototype.Ib=function(a){var b=this,c;return C(function(d){c=b.H;if(!c||c.Aa())return d.return(KB(b,a));zB("att_pna");return d.return(new Promise(function(e){kk(c,"publicytnetworkstatus-online",function(){KB(b,a).then(e)})}))})};
function LB(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=mA(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{dg:b,eg:c})}
function IB(a,b){var c,d,e,f,g;return C(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.v(4);break}if(!(d>0)){h.v(5);break}e.Rd=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Pr(function(){l(void 0)},k.Rd)}}(e)),5);
case 5:return h.u(7),a.i.la(4,a.j++),h.yield(a.Ib(b),9);case 9:return f=h.i,h.return(LB(f));case 7:c=g=h.j(),g instanceof Error&&ly(g);case 8:d++;e={Rd:void 0};h.v(2);break;case 4:throw c;}})}
function DB(a,b){a.h=b}
function MB(a){var b,c,d;return C(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=FB(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.o()})}
function JB(a,b){function c(){var e;return C(function(f){e=d-Date.now();return e<1E3?f.yield(MB(a),0):(Pr(c,Math.min(e,6E4)),f.v(0))})}
var d=Date.now()+b;c()}
function HB(a,b){return new Promise(function(c){Pr(function(){c(b())},a)})}
function GB(a,b){var c={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(c.eacrToken=a);b&&(c.interpreterHash=b);return c}
;var NB={},OB=(NB.WEB_UNPLUGGED="^unplugged/",NB.WEB_UNPLUGGED_ONBOARDING="^unplugged/",NB.WEB_UNPLUGGED_OPS="^unplugged/",NB.WEB_UNPLUGGED_PUBLIC="^unplugged/",NB.WEB_CREATOR="^creator/",NB.WEB_KIDS="^kids/",NB.WEB_EXPERIMENTS="^experiments/",NB.WEB_MUSIC="^music/",NB.WEB_REMIX="^music/",NB.WEB_MUSIC_EMBEDDED_PLAYER="^music/",NB.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",NB);
function PB(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=OB[b];if(c){c=new RegExp(c);for(var d=z(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(OB).forEach(function(g){var h=z(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=z(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function QB(){this.h=RB.instance}
QB.prototype.Ib=function(a){zB("att_fsr");return SB(this.h,a).then(function(b){zB("att_frr");return b})};var TB=new Nw("INNERTUBE_TRANSPORT_TOKEN");function UB(){var a,b,c;return C(function(d){if(d.h==1)return a=Uw().resolve(TB),a?d.yield(VB(a),2):(ly(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return ly(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.gj;return d.return(c)}ly(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function WB(){this.h={};if(this.i=yr()){var a=wr("CONSISTENCY");a&&XB(this,{encryptedTokenJarContents:a})}}
WB.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Na.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=z(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];XB(this,a)}};
function XB(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&vr("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var YB=window.location.hostname.split(".").slice(-2).join(".");function ZB(){this.i=-1;var a=T("LOCATION_PLAYABILITY_TOKEN");T("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.localStorage=$B(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.h=void 0)}
var aC;function bC(){aC=H("yt.clientLocationService.instance");aC||(aC=new ZB,G("yt.clientLocationService.instance",aC));return aC}
n=ZB.prototype;
n.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.h)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.h.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.h.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.h.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.j||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.j||
this.locationPlayabilityToken};
n.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.h=void 0,T("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.localStorage=$B(this))&&this.localStorage.set("yt-location-playability-token",a,15552E3):vr("YT_CL",JSON.stringify({loctok:a}),15552E3,YB,!0))};
function $B(a){return a.localStorage===void 0?new xs("yt-client-location"):a.localStorage}
n.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.localStorage=$B(this))&&this.localStorage.remove("yt-location-playability-token"):xr("YT_CL");this.j=void 0;this.i!==-1&&(clearTimeout(this.i),this.i=-1)};
n.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;T("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.h=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
n.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
n.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function cC(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=T("INNERTUBE_CONTEXT");if(!d)return ky(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=Mi(d);U("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=T("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;Cr();var g="USER_INTERFACE_THEME_LIGHT";Fr(165)?g="USER_INTERFACE_THEME_DARK":Fr(174)?g="USER_INTERFACE_THEME_LIGHT":!U("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:kA()||g;e.userInterfaceTheme=f;if(!b){if(f=Kr())e.connectionType=f;U("web_log_effective_connection_type")&&(f=Lr())&&(d.client.effectiveConnectionType=f)}var h;if(U("web_log_memory_total_kbytes")&&((h=E.navigator)==null?0:h.deviceMemory)){var k;h=(k=E.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}U("web_gcf_hashes_innertube")&&(f=wu())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=xq(E.location.href);!U("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo||(e.mainAppWebInfo={}),e.mainAppWebInfo.graftUrl=E.location.href,U("kevlar_woffle")&&qr.instance&&(k=qr.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),
e.mainAppWebInfo.webDisplayMode=rr(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!U("web_lr_app_quality_killswitch")&&(k=T("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=T("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!U("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;
break a}catch(Ea){}l=void 0}l&&(e.timeZone=l)}(l=T("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Mq();WB.instance||(WB.instance=new WB);d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:Ei(WB.instance.h)});!U("web_prequest_context_killswitch")&&(l=T("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=l);e=Cr();l=Fr(58);e=e.get("gsml","");d.user=Object.assign({},d.user);l&&(d.user.enableSafetyMode=l);e&&(d.user.lockedSafetyMode=
!0);U("warm_op_csn_cleanup")?c&&(b=Ey())&&(d.clientScreenNonce=b):!b&&(b=Ey())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=H("yt.mdx.remote.remoteClient_"))d.remoteClient=a;bC().setLocationOnInnerTubeContext(d);try{var m=Bq(),p=m.bid;delete m.bid;d.adSignalsInfo={params:[],bid:p};for(var r=z(Object.entries(m)),t=r.next();!t.done;t=r.next()){var x=z(t.value),y=x.next().value,w=x.next().value;m=y;p=w;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:m,value:""+p})}var I,
F;if(((I=d.client)==null?void 0:I.clientName)==="TVHTML5"||((F=d.client)==null?void 0:F.clientName)==="TVHTML5_UNPLUGGED"){var S=T("INNERTUBE_CONTEXT");S.adSignalsInfo&&(d.adSignalsInfo.advertisingId=S.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=S.adSignalsInfo.limitAdTracking)}}catch(Ea){ky(Ea)}return d}
;function dC(a){var b={"Content-Type":"application/json"};T("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=T("EOM_VISITOR_DATA"):T("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=T("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=T("LOGGED_IN",!1);T("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=T("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=T("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=T("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=T("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=T("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));(a=T("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a);return b}
;function eC(a){return function(){return new a}}
;function fC(){}
fC.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?ur:c;var d={context:cC(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;e="/youtubei/v1/"+PB(this.j());var g=(f=sx(a.commandMetadata,Pp))==null?void 0:f.apiUrl;g&&(e=g);f=Py(Oy(e));a=Object.assign({},{command:a},void 0);d={input:f,ab:Qy(f),Na:d,config:a};d.config.dc?d.config.dc.identity=c:d.config.dc={identity:c};b.abortSignal&&(d.ab.signal=b.abortSignal);return d}b=new V("Error: Failed to create Request from Command.",
a);ky(b)};
da.Object.defineProperties(fC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function gC(){}
v(gC,fC);function hC(){}
v(hC,gC);hC.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",ab:Qy("/getDatasyncIdsEndpoint","GET"),Na:{}}};
hC.prototype.j=function(){return[]};
hC.prototype.i=function(){};
hC.prototype.h=function(){};var iC={},jC=(iC.GET_DATASYNC_IDS=eC(hC),iC);var kC="tokens consistency service_params mss client_location entities adblock_detection response_received_commands store manifest player_preload shorts_prefetch".split(" "),lC=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PanelResponse"];
function RB(a,b,c,d){this.u=a;this.ia=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.yc||(a.yc={});a.yc=Object.assign({},jC,a.yc)}
function mC(a,b,c){var d=nC;if(RB.instance!==void 0){if(c=RB.instance,a=[d!==c.u,a!==c.ia,b!==c.j,!1,!1,!1,void 0!==c.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else RB.instance=new RB(d,a,b,c)}
function VB(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?ur:c;var d=oC(a,b);return d?new Fk(function(e,f){var g,h,k,l,m;return C(function(p){switch(p.h){case 1:return p.yield(d,2);case 2:g=p.i;h=g.u(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));p.v(0);break}eA(h.input);l=((k=h.ab)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Ae){m=pC(h.config,l);p.v(4);break}return p.yield(qC(h.config,l),5);case 5:m=p.i;case 4:e(rC(a,h,m)),p.o()}})}):
Kk(new V("Error: No request builder found for command.",b))}
function SB(a,b){function c(){}
var d="/youtubei/v1/"+PB(gz);var e=e===void 0?{dc:{identity:ur}}:e;var f=f===void 0?!0:f;c=xB(wB(d));b.context||(b.context=cC(void 0,f));return new Fk(function(g){var h,k,l,m,p;return C(function(r){if(r.h==1)return h=Oy(d),k=Aq(h)?"same-origin":"cors",a.j.Ae?(l=pC(e,k),r.v(2)):r.yield(qC(e,k),3);r.h!=2&&(l=r.i);m=Py(Oy(d));p={input:m,ab:Qy(m),Na:b,config:e};g(rC(a,p,l,c));r.o()})})}
function sC(a){var b,c,d,e,f,g;return C(function(h){switch(h.h){case 1:if(!((b=a)==null?0:(c=b.Na)==null?0:c.context)){h.v(0);break}d=a.Na.context;h.v(3);break;case 3:e=z([]),f=e.next();case 6:if(f.done){h.v(0);break}g=f.value;return h.yield(g.Dj(d),7);case 7:f=e.next(),h.v(6)}})}
function tC(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=z(kC);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function rC(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,p,r,t,x,y,w,I,F,S,Ea,ja,Od,Kb,gb,Qa,Fa,Pa,wv,xv,yv,zv;return C(function(ma){switch(ma.h){case 1:g=(e=b.config)==null?void 0:(f=e.Qj)==null?void 0:f.Pj;ma.v(2);break;case 3:h=ma.i;if(!h||h.isExpired()){ma.v(2);break}k=h.h();if(!U("web_process_response_store_responses")||h.isProcessed()){ma.v(5);break}tC(a,k,b);return ma.yield((void 0).wj(g),5);case 5:return ma.return(Promise.resolve(k));case 2:if((l=a.i)==null||!l.Lj(b.input,b.Na)){ma.v(7);break}return ma.yield(a.i.tj(b.input,b.Na),
8);case 8:return m=ma.i,tC(a,m,b),ma.return(m);case 7:return ma.yield(sC(b),9);case 9:return(t=(r=b.config)==null?void 0:r.requestKey)&&a.h.has(t)?p=a.h.get(t):(x=JSON.stringify(b.Na),I=(w=(y=b.ab)==null?void 0:y.headers)!=null?w:{},b.ab=Object.assign({},b.ab,{headers:Object.assign({},I,c)}),F=Object.assign({},b.ab),b.ab.method==="POST"&&(F=Object.assign({},F,{body:x})),((S=b.config)==null?0:S.lg)&&uB(b.config.lg),Ea=function(){return a.ia.fetch(b.input,F,b.config)},p=Ea(),t&&a.h.set(t,p)),ma.yield(p,
10);
case 10:(ja=ma.i)&&U("web_streaming_player")&&Array.isArray(ja)&&(ja=ja[0].playerResponse);if(ja&&"error"in ja&&((Od=ja)==null?0:(Kb=Od.error)==null?0:Kb.details))for(gb=ja.error.details,Qa=z(gb),Fa=Qa.next();!Fa.done;Fa=Qa.next())Pa=Fa.value,(wv=Pa["@type"])&&lC.indexOf(wv)>-1&&(delete Pa["@type"],ja=Pa);t&&a.h.has(t)&&a.h.delete(t);((xv=b.config)==null?0:xv.mg)&&uB(b.config.mg);if(ja||(yv=a.i)==null||!yv.ej(b.input,b.Na)){ma.v(11);break}return ma.yield(a.i.sj(b.input,b.Na),12);case 12:ja=ma.i;case 11:return tC(a,
ja,b),((zv=b.config)==null?0:zv.ig)&&uB(b.config.ig),d(),ma.return(ja||void 0)}})}
function oC(a,b){a:{a=a.u;var c,d=(c=sx(b,Qp))==null?void 0:c.signal;if(d&&a.yc&&(c=a.yc[d])){var e=c();break a}var f;if((c=(f=sx(b,Op))==null?void 0:f.request)&&a.cf&&(f=a.cf[c])){e=f();break a}for(e in b)if(a.Vd[e]&&(b=a.Vd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function qC(a,b){var c,d,e,f;return C(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.dc)==null?void 0:d.sessionIndex;var h=g.yield;var k=tr({sessionIndex:e});if(!(k instanceof Fk)){var l=new Fk(Dk);Gk(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},dC(b),f)))})}
function pC(a,b){var c;a=a==null?void 0:(c=a.dc)==null?void 0:c.sessionIndex;c=tr({sessionIndex:a});return Object.assign({},dC(b),c)}
;function uC(){}
v(uC,gC);uC.prototype.j=function(){return mz};
uC.prototype.i=function(a){return sx(a,aq)||void 0};
uC.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(uC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function vC(){}
v(vC,gC);vC.prototype.j=function(){return nz};
vC.prototype.i=function(a){return sx(a,$p)||void 0};
vC.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(vC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var wC=new Nw("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function xC(a){this.H=a}
v(xC,gC);xC.prototype.j=function(){return hz};
xC.prototype.i=function(a){return sx(a,Up)||sx(a,Vp)||sx(a,Tp)};
xC.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.H)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.H.i(b.clientParamIdentifier)}};
xC[Mw]=[wC];function yC(){}
v(yC,gC);yC.prototype.j=function(){return jz};
yC.prototype.i=function(a){return sx(a,Sp)||void 0};
yC.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(yC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function zC(){}
v(zC,gC);zC.prototype.j=function(){return jz};
zC.prototype.i=function(a){return sx(a,Zp)};
zC.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
da.Object.defineProperties(zC.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function AC(){}
v(AC,gC);AC.prototype.j=function(){return kz};
AC.prototype.i=function(a){return sx(a,Yp)||void 0};
AC.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function BC(){}
v(BC,gC);BC.prototype.j=function(){return lz};
BC.prototype.i=function(a){return sx(a,Xp)||void 0};
BC.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function CC(){}
v(CC,gC);CC.prototype.j=function(){return iz};
CC.prototype.i=function(a){return sx(a,Wp)};
CC.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function DC(){var a;return(a=T("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var EC=E.caches,FC;function GC(a){var b=a.indexOf(":");return b===-1?{le:a}:{le:a.substring(0,b),datasyncId:a.substring(b+1)}}
function HC(){return C(function(a){if(FC!==void 0)return a.return(FC);FC=new Promise(function(b){var c;return C(function(d){switch(d.h){case 1:return d.u(2),d.yield(EC.open("test-only"),4);case 4:return d.yield(EC.delete("test-only"),5);case 5:d.B(3);break;case 2:if(c=d.j(),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.o()}})});
return a.return(FC)})}
function IC(a){var b,c,d,e,f,g,h;C(function(k){if(k.h==1)return k.yield(HC(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(EC.keys(),3)}c=k.i;d=z(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=GC(f),h=g.datasyncId,!h||a.includes(h)||b.push(EC.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function JC(){var a,b,c,d,e,f,g;return C(function(h){if(h.h==1)return h.yield(HC(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Nr("cache contains other");return h.yield(EC.keys(),3)}b=h.i;c=z(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=GC(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function KC(){try{return!!self.sessionStorage}catch(a){return!1}}
;function LC(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function MC(a){if(KC()){var b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=LC(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function NC(){if(!KC())return!1;var a=Nr(),b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=LC(c.value),c!==void 0&&c!==a)return!0;return!1}
;function OC(){UB().then(function(a){a&&(Yt(a),IC(a),$z(a),MC(a))})}
function PC(){var a=new Zv;xn.xa(function(){var b,c,d,e,f;return C(function(g){switch(g.h){case 1:if(U("ytidb_clear_optimizations_killswitch")){g.v(2);break}b=Nr("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Yt(h);IC(h);$z(h);MC(h);return g.return()}c=aA();d=NC();return g.yield(JC(),3);case 3:return e=g.i,g.yield(Zt(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.Aa()?OC():kk(a,"publicytnetworkstatus-online",OC),g.o()}})})}
;function QC(a){return new Promise(function(b){window.setTimeout(b,a)})}
function RC(a,b,c){this.requestKey=a;this.o=b;this.i=c;this.u=function(){return new XMLHttpRequest};
this.h=void 0;this.j=[]}
RC.prototype.getLatestChallengeResponse=function(){return this.i};
function mm(a,b,c){var d,e,f,g;return C(function(h){if(h.h==1){rB();uB("att_fs",void 0,"attestation_challenge_fetch");if(!a.h)throw new dl(9,"Missing fetcher");return h.yield(a.h(b,c),2)}d=h.i;f=(e=d)==null?void 0:e.bgChallenge;if(!f)throw new dl(15,"Missing field");a.i=d;a.j.forEach(function(k){k(d)});
g=lA(f);uB("att_fc",void 0,"attestation_challenge_fetch");sB();return h.return(g)})}
function Wm(a,b){var c,d,e,f,g;return C(function(h){switch(h.h){case 1:c=new rj(100,3E5,.25,2),d=void 0;case 2:if(!(c.i<10)){h.v(4);break}h.u(5);if(!(c.i>0)){h.v(7);break}return h.yield(QC(c.getValue()),7);case 7:return h.yield(SC(a,b),9);case 9:return e=h.i,h.return(e);case 5:f=h.j();f instanceof dl?d=f:(g=f instanceof Error?f.message:"Unknown",d=new dl(9,g));sj(c);h.v(2);break;case 4:if(d)throw d;throw new dl(9,"Unknown error");}})}
function SC(a,b){b=Xl(Yl(new Wl,b),a.requestKey);var c=new Ll,d=a.u();d.open("POST",a.o);d.setRequestHeader("X-Goog-Api-Key","AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw");d.setRequestHeader("Content-Type","application/json+protobuf");d.onload=function(){if(Fq(d)){var e=sn(d.responseText);c.resolve(e)}else c.reject(new dl(bl(Gq(d)),d.statusText))};
d.onerror=function(){c.reject(new dl(bl(Gq(d)),d.statusText))};
d.send(b.serialize());return c.promise}
function TC(a){var b={bicf:function(f){a.h=f},
blc:function(){return a.getLatestChallengeResponse()},
bcr:function(f){a.j.push(f)}},c=window;
c.ntpevasrs=b;if(c.ntpqfbel!==void 0)for(var d=z(c.ntpqfbel),e=d.next();!e.done;e=d.next())e=e.value,e(b);c.ntpqfbel=void 0}
;function UC(a){var b,c;(b=a.ytcsi)==null||(c=b.tick)==null||c.call(b,"pot_ist")}
function VC(a){if(a instanceof Error){var b=H("yt.logging.errors.log");b&&b(a,"WARNING")}}
;function WC(a,b){var c=this;this.h=0;var d;this.ec=(d=b==null?void 0:b.ec)!=null?d:window;this.Bd=b==null?void 0:b.Bd;var e;this.requestKey=(e=b==null?void 0:b.requestKey)!=null?e:Lq("par_bir_key")||"O43z0dpjhgX20SCx4KAo";var f;this.He=(f=b==null?void 0:b.He)!=null?f:function(k){return new Zl(k)};
var g;d=(g=b==null?void 0:b.mj)!=null?g:function(k,l,m){return new RC(k,l,m)};
this.bgChallenge=lA(a.bgChallenge);this.ttlSeconds=nA(mA(a.challenge||""));this.Ta=d(this.requestKey,U("par_at_ep")?["www.youtube.com","m.youtube.com"].includes(E.location.hostname)?"/api/jnn/v1/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT":"https://jnn-pa.googleapis.com/$rpc/google.internal.waa.v1.Waa/GenerateIT",a);this.Ke=b==null?void 0:b.Ke;TC(this.Ta);var h;this.re=(h=b==null?void 0:b.re)!=null?h:function(k){ck(c.ec.document,"visibilitychange",function(){c.ec.document.visibilityState===
"visible"&&k()})}}
function XC(a){if(!a.vm){var b={maxAttempts:5,qe:a.ttlSeconds*1E3};UC(a.ec);a.vm=a.He({Ta:a.Ta,Qb:{disable:U("html5_web_po_disable_remote_logging"),na:"aGIf",tf:Kq(),Vf:U("wpo_dis_lfdms")?0:1E3,Wb:function(d){var e=Xz.get(d);e||(e=new Wz(d),e=new Yk(e),Xz.set(d,e));return e}},
Xb:b,Ff:a.bgChallenge,Vc:VC});a.h=Date.now();fm(a.vm,function(){a.h=Date.now()});
a.ec.bgevmc={p:function(){var d;(d=a.vm)==null||d.pause()},
r:function(){var d;(d=a.vm)==null||d.resume()},
cr:function(){var d,e;return(e=(d=a.vm)==null?void 0:d.checkForRefresh())!=null?e:Promise.resolve()}};
Gc(a.vm,function(){return C(function(d){return d.return(YC(a))})});
var c=a.j.bind(a);a.Bd&&a.ttlSeconds>0&&a.Bd.then(function(d){d.listen("publicytnetworkstatus-online",c)});
a.re(c)}}
WC.prototype.j=function(){if(Date.now()>this.h+this.ttlSeconds*1E3){var a;(a=this.vm)==null||dm(a)}};
function YC(a){if(a.i)return a.i;if(!a.vm)throw Error("VMNI");a.i=new Sm({vm:a.vm,Ta:a.Ta,Od:!0,onError:VC,Xb:a.Ke});return a.i}
function ZC(a,b){a=new WC(a,b);XC(a);(b==null?0:b.ij)||YC(a)}
function $C(a){try{var b=JSON.parse(a);if(b.bgChallenge)return b}catch(c){}}
function aD(){var a=window,b={};a=a===void 0?window:a;var c=a.ytAtR,d;b==null||(d=b.ce)==null||d.Ej();if(c){if(c=$C(c)){var e;b==null||(e=b.ce)==null||e.pe("SUCCESS");ZC(c,b)}a.ytAtR=void 0}else a.ytAtRC=function(f){if(f=$C(f)){var g;b==null||(g=b.ce)==null||g.pe("SUCCESS");ZC(f,b);a.ytAtRC=void 0}}}
;var bD=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function cD(){this.state=1;this.vm=null;this.h=void 0}
n=cD.prototype;n.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=Gp(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=Hp(a.interpreterSafeUrl).toString());dD(this,e,d,a.program,b,c)}else ly(Error("BL:CIP"))};
function dD(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,qz(Ip(c),function(){window[g]?eD(a,d,g,e):(a.state=3,sz(c),ly(new V("BL:ULB",""+c)))},f)):b?(f=Si("SCRIPT"),b instanceof Db?(f.textContent=Fb(b),Gb(f)):f.textContent=b,f.nonce=Cb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?eD(a,d,g,e):(a.state=4,ly(new V("BL:ULBJ")))):ly(new V("BL:ULV"))}
n.isLoading=function(){return this.state===2};
function eD(a,b,c,d){a.state=5;var e=!!a.h&&bD.includes(hc(a.h)||"");try{var f=new Nl({program:b,globalName:c,Qb:{disable:!U("att_web_record_metrics")||!U("att_skip_metrics_for_cookieless_domains_ks")&&e,na:"aGIf"}});f.Ub.then(function(){a.state=6;d&&d(b)});
a.Hd(f)}catch(g){a.state=7,g instanceof Error&&ly(g)}}
n.invoke=function(a){a=a===void 0?{}:a;return this.Md()?this.Ie({Ma:a}):null};
n.dispose=function(){this.Hd(null);this.state=8};
n.Md=function(){return!!this.vm};
n.Ie=function(a){return this.vm.ye(a)};
n.Hd=function(a){vc(this.vm);this.vm=a};function fD(){var a=H("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function gD(){cD.apply(this,arguments)}
v(gD,cD);gD.prototype.Hd=function(a){var b;(b=fD())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ye.bind(a)},G("yt.abuse.playerAttLoader",b),G("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(G("yt.abuse.playerAttLoader",null),G("yt.abuse.playerAttLoaderRun",null))};
gD.prototype.Md=function(){return!!fD()};
gD.prototype.Ie=function(a){return fD().bgvmc(a)};var hD=new Nw("AUTH_SERVICE_TOKEN");function iD(a){dx.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c});U("web_disable_unload_listener")&&c.persisted===!1&&(b.h=new Map)});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(iD,dx);iD.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
iD.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
iD.prototype.H=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
iD.prototype.i=function(){this.h=new Map};function jD(a){dx.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
U("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(jD,dx);jD.prototype.i=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
jD.prototype.h=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
jD.prototype.u=function(a,b){a(b==null?void 0:b.event)};
jD.prototype.H=function(a,b){a(b==null?void 0:b.event)};function kD(){this.o=new iD;this.u=new jD}
kD.prototype.install=function(){var a=D.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function lD(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
lD.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Ey(c===void 0?0:c)){a=this.client;d=new xy({trackingParams:d});var e=void 0;if(U("no_client_ve_attach_unless_shown")){var f=Sz(d,c);Oz.set(f,!0);Tz(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Rz({cttAuthInfo:Gy(c)||void 0,automatedLogEventSource:void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Uz("visualElementGestured",f,d):a?by("visualElementGestured",
d,a,f):Gs("visualElementGestured",d,f);b=!0}else b=!1;else b=!1;return b};
lD.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new xy({trackingParams:a}),b,c===void 0?0:c)};
lD.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Ey(d);a||(a=(a=By(d===void 0?0:d))?new xy({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Rz({cttAuthInfo:Gy(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Uz("visualElementStateChanged",d,b):a?by("visualElementStateChanged",b,a,d):Gs("visualElementStateChanged",b,d))}};
function mD(a,b){if(b===void 0)for(var c=Dy(),d=0;d<c.length;d++)c[d]!==void 0&&mD(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Qz(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function nD(){kD.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));U("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));U("web_log_cfg_cee_ks")||Pr(oD)}
v(nD,kD);nD.prototype.j=function(){Gs("finalPayload",{csn:Ey()})};
nD.prototype.h=function(){ry(sy)};
nD.prototype.i=function(){var a=mD;lD.instance||(lD.instance=new lD);a(lD.instance)};
function oD(){var a=T("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Be();a=z(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Gs("genericClientExperimentEvent",{eventType:c});delete iq.CLIENT_EXPERIMENT_EVENTS}}
;function pD(a,b){var c=D.apply(2,arguments);a=a===void 0?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
v(pD,V);var qD=new Nw("NETWORK_SLI_TOKEN");function rD(a){this.h=a}
rD.prototype.fetch=function(a,b,c){var d=this,e;return C(function(f){e=sD(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){ly(g);
if((c==null?0:c.sf)&&g instanceof pD&&g.errorType===1)return Promise.reject(g)}))})};
function sD(a,b,c){if(a.h){var d=ic(sc(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}a=c;U("wug_networking_gzip_request")&&(a=cv(c));return new window.Request(b,a)}
rD.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.Of)&&a.ok)return Xg(b.Of,d);d=d.replace(")]}'","");if((b==null?0:b.sf)&&d)try{var e=JSON.parse(d)}catch(g){throw new pD(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.lj(),c=c.then(function(d){ly(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
rD[Mw]=[new Ow(qD)];var tD=new Nw("NETWORK_MANAGER_TOKEN");function uD(){}
function vD(){var a=H("ytglobal.storage_");a||(a=new uD,G("ytglobal.storage_",a));return a}
uD.prototype.estimate=function(){var a,b,c;return C(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(wD()):d.return()})};
function wD(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
G("ytglobal.storageClass_",uD);function Es(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Es.prototype.wa=function(a){this.handleError(a)};
Es.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":U("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":U("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":xD(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function xD(a,b){vD().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:yD(c==null?void 0:c.usage),deviceStorageQuotaMbytes:yD(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function yD(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var nC={Vd:{feedbackEndpoint:eC(yC),modifyChannelNotificationPreferenceEndpoint:eC(AC),playlistEditEndpoint:eC(BC),shareEntityEndpoint:eC(xC),subscribeEndpoint:eC(uC),undoFeedbackEndpoint:eC(zC),unsubscribeEndpoint:eC(vC),webPlayerShareEntityServiceEndpoint:eC(CC)}};function zD(){var a=Uw();Qw(a,{uc:tD,Ld:rD});Qw(a,{uc:hD,Ld:sr});var b=bC(),c=a.resolve(hD),d=a.resolve(tD),e={};b&&(e.client_location=b);mC(d,c,e);Qw(a,{uc:TB,Ee:RB.instance})}
;var AD=new Map;function BD(a,b,c,d,e){b=new CD(a,b,c,d===void 0?function(){}:d,e===void 0?null:e);
AD.set(a,b)}
function DD(a){if(!a.onReadyPatchApplied){var b=a.addEventListener;a.addEventListener=function(c,d){c==="onReady"?Promise.resolve().then(function(){d(a)}):b.call(a,c,d)};
a.onReadyPatchApplied=!0}}
function CD(a,b,c,d,e){J.call(this);this.container=a;this.webPlayerContextConfig=b;this.h=c;this.Vc=d;this.playerVars=e;ED(this)}
v(CD,J);function ED(a){if(H("yt.player.Application.create"))Promise.resolve().then(function(){FD(a)});
else{GD(Hp(a.webPlayerContextConfig.trustedJsUrl),function(){FD(a)},function(){a.J||a.Vc()});
var b=a.webPlayerContextConfig.trustedCssUrl;b&&HD(Hp(b))}}
function FD(a){if(!a.J){var b=H("yt.player.Application.create");try{a.api=b(a.container,{args:a.playerVars},a.webPlayerContextConfig,void 0).getInternalApi(),DD(a.api),a.api.isReady=function(){return!0},a.h(a.api)}catch(c){throw a.Vc(),c;
}}}
CD.prototype.ba=function(){this.api&&this.api.destroy();Ti(this.container);J.prototype.ba.call(this)};
function HD(a){var b="ytp-"+a.toString();if(!document.getElementById(b)){var c=document.createElement("link");c.id=b;Nb(c,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(c)}}
function GD(a,b,c){var d="ytp-"+a.toString(),e=document.getElementById(d);if(e)e.dataset.failed?c():e.dataset.loaded?b():(e.addEventListener("error",function(){c()}),e.addEventListener("load",function(){b()}));
else{var f=document.createElement("script");f.id=d;f.addEventListener("error",function(){f.dataset.failed="true";c()});
f.addEventListener("load",function(){f.dataset.loaded="true";b()});
Hb(f,a);a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(f,a.firstChild)}}
;function ID(a){T("ENABLE_WEBVIEW_API")&&window.ytwebviewplayer&&(window.addEventListener("message",function(b){try{var c=JSON.parse(b.data),d=c.methodName,e=c.args||[];a:{for(var f=z(e),g=f.next();!g.done;g=f.next())if(String(g.value).includes("javascript:")){var h=!0;break a}h=!1}if(h)throw Error('Dangerous call to "'+d+'" with ['+e+"].");if(d&&typeof a[d]==="function")a[d].apply(a,A(e));else throw Error('Unknown API method: "'+d+'".');}catch(k){ky(k)}}),a.addEventListener("onReady",function(){window.ytwebviewplayer.postMessage(JSON.stringify({type:"onPlayerReady"}))}),
a.addEventListener("onStateChange",function(b){window.ytwebviewplayer.postMessage(JSON.stringify({type:"onStateChange",
state:b}))}),a.addEventListener("onError",function(b){window.ytwebviewplayer.postMessage(JSON.stringify({type:"onError",
errorCode:b}))}))}
;var JD={},KD=(JD["api.invalidparam"]=2,JD.auth=150,JD["drm.auth"]=150,JD["heartbeat.net"]=150,JD["heartbeat.servererror"]=150,JD["heartbeat.stop"]=150,JD["html5.unsupportedads"]=5,JD["fmt.noneavailable"]=5,JD["fmt.decode"]=5,JD["fmt.unplayable"]=5,JD["html5.missingapi"]=5,JD["html5.unsupportedlive"]=5,JD["drm.unavailable"]=5,JD["mrm.blocked"]=151,JD["embedder.identity.denied"]=152,JD["embedder.identity.missing.referrer"]=153,JD);var LD=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function MD(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function ND(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=z(LD);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);if(a=a.embedConfig||a.embed_config)if(typeof a==="string")b.embed_config=a;else if(La(a))try{var e=JSON.stringify(a);b.embed_config=e}catch(f){console.error("Invalid embedConfig JSON",f)}return b}
function OD(a,b,c,d){if(La(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function PD(a,b){J.call(this);var c=this;this.api=a;this.j=this.G=!1;this.I=[];this.M={};this.o=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.X=U("web_player_split_event_bus_iframe");this.B=T("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.u=function(d){c.onMessage(d)};
QD.addEventListener("message",this.u);if(a=T("WIDGET_ID"))this.sessionId=a;b&&this.u(b);RD(this,"onReady",function(){c.G=!0;var d=c.api.getVideoData();if(!d.isPlayable){c.Z=!0;d=d.errorCode;var e=e===void 0?5:e;c.errorCode=d?KD[d]||e:e;c.sendMessage("onError",Number(c.errorCode))}SD(c);c.h||c.j||window.parent===window||!c.sessionId||TD(c,{event:"readyToListen"},window.parent)});
RD(this,"onVideoProgress",this.wg.bind(this));RD(this,"onVolumeChange",this.xg.bind(this));RD(this,"onApiChange",this.pg.bind(this));RD(this,"onPlaybackQualityChange",this.tg.bind(this));RD(this,"onPlaybackRateChange",this.ug.bind(this));RD(this,"onStateChange",this.vg.bind(this));RD(this,"onWebglSettingsChanged",this.yg.bind(this));RD(this,"onCaptionsTrackListChanged",this.qg.bind(this));RD(this,"captionssettingschanged",this.rg.bind(this))}
v(PD,J);function SD(a){if(a.h)if(a.j)a.sendMessage("alreadyInitialized");else if(a.G){a.j=!0;a.G=!1;a.sendMessage("initialDelivery",UD(a));a.sendMessage("onReady");uB("ep_init_ar");for(var b=z(a.I),c=b.next();!c.done;c=b.next())TD(a,c.value);a.I=[]}}
function VD(a,b){a.sendMessage("infoDelivery",b)}
n=PD.prototype;n.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.j?TD(this,a):this.I.push(a)};
function WD(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function RD(a,b,c){a.o.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function UD(a){if(!a.api)return null;var b=a.api.getApiInterface();Ub(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
n.vg=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());VD(this,a)};
n.tg=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());VD(this,a)};
n.ug=function(a){VD(this,{playbackRate:a})};
n.pg=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
n.xg=function(){VD(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
n.wg=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());VD(this,a)};
n.yg=function(){VD(this,{sphericalProperties:this.api.getSphericalProperties()})};
n.qg=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};VD(this,a)}};
n.rg=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};VD(this,a)}};
n.onMessage=function(a){if(!(this.B!=="*"&&a.origin!==this.B||this.h&&a.source!==this.h||typeof a.data!=="string")){try{var b=JSON.parse(a.data)}catch(f){return}if(b)switch(b.event){case "listening":var c=a.source;a=a.origin;b=b.id;a!=="null"&&(this.B=this.targetOrigin=a);this.h=c;this.sessionId=b;SD(this);break;case "command":if(c=b.func,b=b.args,c==="addEventListener"&&b)c=b[0],b=a.origin,c==="onReady"?this.api.logApiCall(c+" invocation",b):c==="onError"&&this.Z&&(this.api.logApiCall(c+" invocation",
b,this.errorCode),this.errorCode=void 0),this.api.logApiCall(c+" registration",b),this.M[c]||c==="onReady"||(a=WD(this,c,b),this.i.push({eventType:c,listener:a,origin:b}),this.X?this.api.handleExternalCall("addEventListener",[c,a],b):this.api.addEventListener(c,a),this.M[c]=!0);else if(a=a.origin,this.api.isExternalMethodAvailable(c,a)){b=b||[];if(b.length>0&&MD(c)){var d=b;if(La(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},c){case "loadVideoById":case "cueVideoById":e=ND(d[0],d[1]!==void 0?
Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];typeof e==="string"&&(e={mediaContentUrl:e,startSeconds:d[1]!==void 0?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=d[2];break b}d=null}e.videoId=d;e=ND(e);break;case "loadPlaylist":case "cuePlaylist":e=OD(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(c,b,a);MD(c)&&VD(this,UD(this))}}}};
function TD(a,b,c){if(c=c===void 0?a.h:c){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var d=JSON.stringify(b);c.postMessage(d,a.targetOrigin)}catch(e){ly(e)}}}
n.ba=function(){J.prototype.ba.call(this);QD.removeEventListener("message",this.u);for(var a=0;a<this.o.length;a++){var b=this.o[a];this.api.removeEventListener(b.eventType,b.listener)}this.o=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.X?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var QD=window;function XD(a,b,c){J.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=U("web_player_split_event_bus_iframe");this.i=function(e){d.onMessage(e)};
YD.addEventListener("message",this.i);ZD(this,"RECEIVING")}
v(XD,J);n=XD.prototype;n.addListener=function(a,b){if(!(a in this.h)){var c=this.sg.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
n.sg=function(a,b){this.J||ZD(this,a,$D(a,b))};
n.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
n.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
n.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function aE(a,b){switch(a){case "loadVideoById":return[ND(b)];case "cueVideoById":return[ND(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[OD(b)];case "cuePlaylist":return[OD(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function bE(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function $D(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function ZD(a,b,c){a.J||(b={id:a.id,command:b},c&&(b.data=c),cE.postMessage(JSON.stringify(b),a.origin))}
n.onMessage=function(a){if(a.origin===this.origin){var b=a.data;if(typeof b==="string"){try{b=JSON.parse(b)}catch(e){return}if(b.command){var c=b.command;b=b.data;a=a.origin;if(!this.J){var d=b||{};switch(c){case "addEventListener":typeof d.event==="string"&&this.addListener(d.event,a);break;case "removeEventListener":typeof d.event==="string"&&this.removeListener(d.event,a);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(c,a||null)&&(b=aE(c,b||{}),b=this.api.handleExternalCall(c,
b,a||null),(b=bE(c,b))&&ZD(this,c,b))}}}}}};
n.ba=function(){YD.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);J.prototype.ba.call(this)};
var YD=window,cE=window.parent;var dE=new gD;function eE(){return dE.Md()}
function fE(a){a=a===void 0?{}:a;return dE.invoke(a)}
;function gE(a,b,c,d,e){J.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.Yb=e;this.Ka=!1;this.api={};this.ja=this.u=null;this.M=new Nn;this.h={};this.Z=this.oa=this.elementId=this.La=this.config=null;this.X=!1;this.j=this.G=null;this.Da={};this.nd=["onReady"];this.lastError=null;this.Ra=NaN;this.I={};this.fa=0;this.i=this.o=a;xc(this,this.M);hE(this);c?this.fa=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(iE(this),jE(this))}
v(gE,J);n=gE.prototype;n.getId=function(){return this.B};
n.loadNewVideoConfig=function(a){if(!this.J){this.fa&&(clearTimeout(this.fa),this.fa=0);var b=a||{};b instanceof fz||(b=new fz(b));this.config=b;this.setConfig(a);jE(this);this.isReady()&&kE(this)}};
function iE(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
n.setConfig=function(a){this.La=a;this.config=lE(a);iE(this);if(!this.oa){var b;this.oa=mE(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=pn(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=pn(Number(a)||a))};
function kE(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function nE(a){var b=!0,c=oE(a);c&&a.config&&(b=c.dataset.version===pE(a));return b&&!!H("yt.player.Application.create")}
function jE(a){if(!a.J&&!a.X){var b=nE(a);if(b&&(oE(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||qE(a);else if(rE(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),qE(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=sE(a,"player_bootstrap_method")?H("yt.player.Application.createAlternate")||H("yt.player.Application.create"):H("yt.player.Application.create");var e=a.config?lE(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Yb);qE(a)};
a.X=!0;b?a.G():(qz(pE(a),a.G),(b=tE(a))&&xz(b||""),uE(a)&&!c&&G("yt.player.Application.create",null))}}}
function oE(a){var b=Ri(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function qE(a){if(!a.J){var b=oE(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!sE(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}vE(a)}else a.Ra=setTimeout(function(){qE(a)},50)}}
function vE(a){hE(a);a.Ka=!0;var b=oE(a);if(b){a.u=wE(a,b,"addEventListener");a.ja=wE(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=wE(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);kE(a);a.oa&&a.oa(a.api);a.M.Bb("onReady",a.api)}
function wE(a,b,c){var d=b[c];return function(){var e=D.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function hE(a){a.Ka=!1;if(a.ja)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ja(b,a.h[b]);for(var c in a.I)a.I.hasOwnProperty(c)&&clearTimeout(Number(c));a.I={};a.u=null;a.ja=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.La};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
n.isReady=function(){return this.Ka};
n.addEventListener=function(a,b){var c=this,d=mE(this,b);d&&(Ob(this.nd,a)>=0||this.h[a]||(b=xE(this,a),this.u&&this.u(a,b)),this.M.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
n.removeEventListener=function(a,b){this.J||(b=mE(this,b))&&this.M.unsubscribe(a,b)};
function mE(a,b){var c=b;if(typeof b==="string"){if(a.Da[b])return a.Da[b];c=function(){var d=D.apply(0,arguments),e=H(b);if(e)try{e.apply(E,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Da[b]=c}return c?c:null}
function xE(a,b){function c(d){function e(){if(!a.J)try{a.M.Bb(b,d!=null?d:void 0)}catch(h){var g=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.bf});g.level="WARNING";throw g;}}
if(sE(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.I,h=String(f);h in g&&delete g[h]},0);
Ii(a.I,String(f))}}
return a.h[b]=c}
n.getPlayerType=function(){return this.Z||(oE(this)?"html5":null)};
n.getLastError=function(){return this.lastError};
function rE(a){a.cancel();hE(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=oE(a);b&&(nE(a)||!uE(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));a.o&&Ti(a.o)}
n.cancel=function(){this.G&&uz(pE(this),this.G);clearTimeout(this.Ra);this.X=!1};
n.ba=function(){rE(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Da=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.La=this.config=this.api=null;delete this.o;delete this.i;J.prototype.ba.call(this)};
function uE(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function pE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function tE(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function sE(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function lE(a){for(var b={},c=z(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Li(e):e}return b}
;var yE={},zE="player_uid_"+(Math.random()*1E9>>>0);function AE(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Ri(c):c;var e=zE+"_"+Ma(c),f=yE[e];if(f&&d)return BE(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new gE(c,e,a,b,void 0);yE[e]=f;f.addOnDisposeCallback(function(){delete yE[f.getId()]});
return f.api}
function BE(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var CE=null,DE=null,EE;function FE(a){CE=a;CE.addEventListener("onVideoDataChange",GE);CE.addEventListener("onReady",HE);a=T("POST_MESSAGE_ID","player");var b=T("POST_MESSAGE_ORIGIN");T("ENABLE_JS_API")?DE=new PD(CE,EE):T("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(DE=new XD(CE,a,b));EE=void 0}
function IE(){wA();U("ytidb_create_logger_embed_killswitch")||Ds();var a={};nD.h||(nD.h=new nD);nD.h.install((a.flush_logs={callback:function(){Px()}},a));
Ls||jw();zD();xn.xa(function(){PC()});
a=O("att_init_delay",200);U("enable_rta_manager")&&setTimeout(function(){U("attmusi")&&aD();var b=new QB;var c={preload:!U("enable_rta_npi"),De:U("attmusi")},d;c=(d=c)!=null?d:{preload:!0};d=c.hj?void 0:new Zv;CB.instance=new CB(b,c,d);b=CB.instance;if((U("attmusi")||U("attmusiw"))&&U("attmusi_ue")){b={s:b.o.bind(b),ir:b.u.bind(b)};c=window;c.attmp=b;if(c.attmq!==void 0){d=z(c.attmq);for(var e=d.next();!e.done;e=d.next())e=e.value,e(b)}c.attmq=void 0}else c=b.o.bind(b),G("yt.aba.att",c),b=b.u.bind(b),
G("yt.aba.att2",b)},a);
Pr(function(){if(U("enable_zw_ping")){var b=T("INNERTUBE_CLIENT_NAME","UNKNOWN_INTERFACE"),c="/establish_zw";b==="WEB_EMBEDDED_PLAYER"?c="/embed/establish_zw":b==="TVHTML5"&&(c="https://www.youtube.com/tv/establish_zw");T("COOKIELESS",!1)&&b==="WEB_EMBEDDED_PLAYER"?(b=new Headers,b.set("X-Goog-Visitor-Id",T("VISITOR_DATA")),fetch(c,{method:"GET",mode:"no-cors",headers:b})):fetch(c,{method:"GET",mode:"no-cors",credentials:"include"})}})}
function JE(){AB();var a=Cr(),b=Fr(119),c=window.devicePixelRatio>1;if(document.body&&Fn(document.body,"exp-invert-logo"))if(c&&!Fn(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Fn(d,"inverted-hdpi")){var e=Dn(d);En(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Fn(document.body,"inverted-hdpi")&&Gn();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Gr(b)||0;d=c?d|67108864:d&-67108865;d===0?delete zr[b]:(c=d.toString(16),zr[b]=c.toString());
c=!0;U("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in zr)zr.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(zr[f])));var f=d.join("&");vr(b,f,63072E3,a.i,c)}}
function GE(){KE()}
function HE(){uB("ep_init_pr");KE()}
function KE(){var a=CE.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function LE(){CE&&CE.sendAbandonmentPing&&CE.sendAbandonmentPing();T("PL_ATT")&&dE.dispose();for(var a=xn,b=0,c=tA.length;b<c;b++)a.ya(tA[b]);tA.length=0;sz(uA.toString());vA=!1;jq("DCLKSTAT",0);wc(DE);CE&&(CE.removeEventListener("onVideoDataChange",GE),CE.destroy(),CE=null)}
;uB("ep_init_eps");G("yt.setConfig",jq);G("yt.config.set",jq);G("yt.setMsg",pz);G("yt.msgs.set",pz);G("yt.logging.errors.log",ky);
G("writeEmbed",function(){uB("ep_init_wes");var a=T("PLAYER_CONFIG");if(!a){var b=T("PLAYER_VARS");b&&(a={args:b})}gA(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});b=document.referrer;window!==window.top&&b&&b!==document.URL&&(a.args.loaderUrl=b);b=DC();if(!b.serializedForcedExperimentIds){var c=xq(window.location.href);c.forced_experiments&&(b.serializedForcedExperimentIds=c.forced_experiments)}var d;((d=
a.args)==null?0:d.autoplay)?pB("watch",["pbs","pbu","pbp"]):a.args&&Sy(a.args)?pB("video_preview",["ol"]):pB("embed_no_video",["ep_init_ar"]);U("embeds_use_player_instances_library")||T("ENABLE_WEBVIEW_API")?(BD(document.getElementById("player"),b,function(e){T("ENABLE_WEBVIEW_API")?(e=e.getTrustedApi(),DD(e),ID(e)):FE(e)},function(){throw Error("Unable to load player JS");
},a.args),T("ENABLE_WEBVIEW_API")||IE()):(a=AE(a,b),FE(a),IE());
uB("ep_init_wee")});
G("yt.abuse.player.botguardInitialized",H("yt.abuse.player.botguardInitialized")||eE);G("yt.abuse.player.invokeBotguard",H("yt.abuse.player.invokeBotguard")||fE);G("yt.abuse.dclkstatus.checkDclkStatus",H("yt.abuse.dclkstatus.checkDclkStatus")||xA);G("yt.player.exports.navigate",H("yt.player.exports.navigate")||fA);G("yt.util.activity.init",H("yt.util.activity.init")||xw);G("yt.util.activity.getTimeSinceActive",H("yt.util.activity.getTimeSinceActive")||Bw);
G("yt.util.activity.setTimestamp",H("yt.util.activity.setTimestamp")||yw);window.addEventListener("load",nq(function(){JE()}));
window.addEventListener("pageshow",nq(function(a){a.persisted||JE()}));
window.addEventListener("pagehide",nq(function(a){U("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?LE():a.persisted||LE()}));
(function(){var a=a===void 0?ny:a;var b=b===void 0?{}:b;G("yt.logging.errors.log",ky);jy();jr(ir(),b);window.onerror=a;Wk=my;window.addEventListener("unhandledrejection",function(c){if(c.reason instanceof Error){var d=c.reason;oy(d,{source:"unhandledrejection"});d.name==="AbortError"&&(d.level="WARNING")}my(c.reason);c.preventDefault()})})();
(function(){if(T("ENABLE_JS_API")){var a=function(b){EE=b;window.removeEventListener("message",a)};
window.addEventListener("message",a)}})();
uB("ep_init_epe");}).call(this);
