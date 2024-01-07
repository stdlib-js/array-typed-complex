// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,s=String.prototype.toLowerCase,c=String.prototype.toUpperCase,h=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=h.call(n,v,"$1e"),n=h.call(n,b,"e"),n=h.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=h.call(n,p,"e+0$1"),n=h.call(n,g,"e-0$1"),e.alternate&&(n=h.call(n,y,"$1."),n=h.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===c.call(e.specifier)?c.call(n):s.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function T(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var _=String.fromCharCode,x=isNaN,j=Array.isArray;function A(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,o,a,l,s,c,h;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,c=0;c<e.length;c++)if(f(n=e[c]))l+=n;else{if(r=void 0!==n.precision,!(n=A(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,h=0;h<t.length;h++)switch(o=t.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=T(n.arg,n.width,n.padRight)),l+=n.arg||"",s+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(S(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function B(e){var r,t,n;if(!R(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=L(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var O,M=Object.prototype,F=M.toString,N=M.__defineGetter__,C=M.__defineSetter__,P=M.__lookupGetter__,I=M.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(P.call(e,r)||I.call(e,r)?(n=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&N&&N.call(e,r,t.get),a&&C&&C.call(e,r,t.set),e};var Y=O;function W(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(e){return"string"==typeof e}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function z(e,r){return null!=e&&X.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var D=Z()?function(e){var r,t,n;if(null==e)return U.call(e);t=e[q],r=z(e,q);try{e[q]=void 0}catch(r){return U.call(e)}return n=U.call(e),r?e[q]=t:delete e[q],n}:function(e){return U.call(e)},H=String.prototype.valueOf;var K=Z();function Q(e){return"object"==typeof e&&(e instanceof String||(K?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object String]"===D(e)))}function ee(e){return $(e)||Q(e)}function re(e){return"number"==typeof e}W(ee,"isPrimitive",$),W(ee,"isObject",Q);var te=Number,ne=te.prototype.toString;var ie=Z();function oe(e){return"object"==typeof e&&(e instanceof te||(ie?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object Number]"===D(e)))}function ae(e){return re(e)||oe(e)}W(ae,"isPrimitive",re),W(ae,"isObject",oe);var ue=Number.POSITIVE_INFINITY,fe=te.NEGATIVE_INFINITY,le=Math.floor;function se(e){return le(e)===e}function ce(e){return e<ue&&e>fe&&se(e)}function he(e){return re(e)&&ce(e)}function pe(e){return oe(e)&&ce(e.valueOf())}function ge(e){return he(e)||pe(e)}function ye(e){return he(e)&&e>=0}function me(e){return pe(e)&&e.valueOf()>=0}function we(e){return ye(e)||me(e)}W(ge,"isPrimitive",he),W(ge,"isObject",pe),W(we,"isPrimitive",ye),W(we,"isObject",me);function be(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&se(e.length)&&e.length>=0&&e.length<=4294967295}function ve(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&se(e.length)&&e.length>=0&&e.length<=9007199254740991}var de="function"==typeof ArrayBuffer;function Ee(e){return de&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===D(e)}var Te=Array.isArray?Array.isArray:function(e){return"[object Array]"===D(e)};function _e(e){return"object"==typeof e&&null!==e&&!Te(e)}var xe=/./;function je(e){return"boolean"==typeof e}var Ae=Boolean,Ve=Boolean.prototype.toString;var ke=Z();function Se(e){return"object"==typeof e&&(e instanceof Ae||(ke?function(e){try{return Ve.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===D(e)))}function Le(e){return je(e)||Se(e)}function Re(){return new Function("return this;")()}W(Le,"isPrimitive",je),W(Le,"isObject",Se);var Be="object"==typeof self?self:null,Oe="object"==typeof window?window:null,Me="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Fe="object"==typeof Me?Me:null,Ne="object"==typeof globalThis?globalThis:null;var Ce=function(e){if(arguments.length){if(!je(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Re()}if(Ne)return Ne;if(Be)return Be;if(Oe)return Oe;if(Fe)return Fe;throw new Error("unexpected error. Unable to resolve global object.")}(),Pe=Ce.document&&Ce.document.childNodes,Ie=Int8Array;function Ye(){return/^\s*function\s*([^(]*)/i}var We=/^\s*function\s*([^(]*)/i;function $e(e){return null!==e&&"object"==typeof e}function Ge(e){var r,t,n,i;if(("Object"===(t=D(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=We.exec(n.toString()))return r[1]}return $e(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(Ye,"REGEXP",We),W($e,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Te(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}($e));var Ze="function"==typeof xe||"object"==typeof Ie||"function"==typeof Pe?function(e){return Ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ge(e).toLowerCase():r};function Ue(e){return"function"===Ze(e)}function Xe(e,r){if(!(this instanceof Xe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!re(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!re(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}W(Xe,"BYTES_PER_ELEMENT",8),W(Xe.prototype,"BYTES_PER_ELEMENT",8),W(Xe.prototype,"byteLength",16),W(Xe.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W(Xe.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var ze="function"==typeof Math.fround?Math.fround:null,Je="function"==typeof Float32Array;var qe="function"==typeof Float32Array?Float32Array:null;var De="function"==typeof Float32Array?Float32Array:void 0;var He=function(){var e,r,t;if("function"!=typeof qe)return!1;try{r=new qe([1,3.14,-3.14,5e40]),t=r,e=(Je&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ue}catch(r){e=!1}return e}()?De:function(){throw new Error("not implemented")},Ke=new He(1);var Qe="function"==typeof ze?ze:function(e){return Ke[0]=e,Ke[0]};function er(e,r){if(!(this instanceof er))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!re(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!re(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Qe(e)}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Qe(r)}),this}function rr(e){return e instanceof Xe||e instanceof er||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function tr(e){return se(e/2)}function nr(){return"function"==typeof J&&"symbol"==typeof J("foo")&&z(J,"iterator")&&"symbol"==typeof J.iterator}W(er,"BYTES_PER_ELEMENT",4),W(er.prototype,"BYTES_PER_ELEMENT",4),W(er.prototype,"byteLength",8),W(er.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),W(er.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var ir=nr()?Symbol.iterator:null;function or(e,r,t){Y(e,r,{configurable:!1,enumerable:!1,get:t})}var ar="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var fr="function"==typeof Float64Array?Float64Array:void 0;var lr=function(){var e,r,t;if("function"!=typeof ur)return!1;try{r=new ur([1,3.14,-3.14,NaN]),t=r,e=(ar&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?fr:function(){throw new Error("not implemented")};function sr(e){return e.re}function cr(e){return e.im}function hr(e,r){return new He(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function pr(e,r){return new lr(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var gr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function yr(e){var r=gr[e];return"function"==typeof r?r:gr.default}var mr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function wr(e){var r=mr[e];return"function"==typeof r?r:mr.default}function br(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(be(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!rr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(sr(n),cr(n))}return r}function vr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,be(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!rr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(sr(o),cr(o))}return n}function dr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!rr(n=r[i]))return null;e[o]=sr(n),e[o+1]=cr(n),o+=2}return e}var Er=2*lr.BYTES_PER_ELEMENT,Tr=nr();function _r(e){return e instanceof Vr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function xr(e){return e===Vr||"Complex64Array"===e.name}function jr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Er/2}function Ar(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Er}function Vr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Vr))return 0===r?new Vr:1===r?new Vr(arguments[0]):2===r?new Vr(arguments[0],arguments[1]):new Vr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new lr(0);else if(1===r)if(ye(arguments[0]))t=new lr(2*arguments[0]);else if(ve(arguments[0]))if((n=(t=arguments[0]).length)&&Te(t)&&rr(t[0])){if(null===(t=dr(new lr(2*n),t))){if(!tr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new lr(arguments[0])}}else{if(jr(t))t=hr(t,0);else if(Ar(t))t=pr(t,0);else if(!tr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new lr(t)}else if(Ee(arguments[0])){if(!se((t=arguments[0]).byteLength/Er))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Er,t.byteLength));t=new lr(t)}else{if(!_e(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Tr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ue(t[ir]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ue((t=t[ir]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=br(t))instanceof Error)throw t;t=new lr(t)}else{if(!Ee(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ye(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!se(e/Er))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Er,e));if(2===r){if(!se((n=t.byteLength-e)/Er))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Er,n));t=new lr(t,e)}else{if(!ye(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Er>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Er));t=new lr(t,e,2*n)}}return W(this,"_buffer",t),W(this,"_length",t.length/2),this}function kr(e){return e.re}function Sr(e){return e.im}function Lr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(be(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!rr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(kr(n),Sr(n))}return r}function Rr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,be(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!rr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(kr(o),Sr(o))}return n}function Br(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!rr(n=r[i]))return null;e[o]=kr(n),e[o+1]=Sr(n),o+=2}return e}W(Vr,"BYTES_PER_ELEMENT",Er),W(Vr,"name","Complex128Array"),W(Vr,"from",(function(e){var r,t,n,i,o,a,u,f,l,s,c,h;if(!Ue(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ue(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(_r(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(rr(s=n.call(r,e.get(c),c)))o[h]=sr(s),o[h+1]=cr(s);else{if(!(be(s)&&s.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(ve(e)){if(n){for(f=e.length,u=e.get&&e.set?wr("default"):yr("default"),c=0;c<f;c++)if(!rr(u(e,c))){l=!0;break}if(l){if(!tr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,c=0;c<f;c++)o[c]=n.call(r,u(e,c),c);return i}for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(rr(s=n.call(r,u(e,c),c)))o[h]=sr(s),o[h+1]=cr(s);else{if(!(be(s)&&s.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(_e(e)&&Tr&&Ue(e[ir])){if(!Ue((o=e[ir]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?vr(o,n,r):br(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,c=0;c<f;c++)o[c]=a[c];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),W(Vr,"of",(function(){var e,r;if(!Ue(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!xr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),or(Vr.prototype,"buffer",(function(){return this._buffer.buffer})),or(Vr.prototype,"byteLength",(function(){return this._buffer.byteLength})),or(Vr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),W(Vr.prototype,"BYTES_PER_ELEMENT",Vr.BYTES_PER_ELEMENT),W(Vr.prototype,"copyWithin",(function(e,r){if(!_r(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),W(Vr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!_r(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,W(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new Xe(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),W(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ir&&W(t,ir,(function(){return r.entries()})),t})),W(Vr.prototype,"get",(function(e){var r;if(!_r(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ye(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Xe((r=this._buffer)[e*=2],r[e+1])})),or(Vr.prototype,"length",(function(){return this._length})),W(Vr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!_r(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ye(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(rr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=sr(e),void(n[t+1]=cr(e))}if(_r(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Er,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new lr(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ve(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!rr(e[f])){o=!0;break}if(o){if(!tr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Er,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new lr(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=sr(u),n[t+1]=cr(u),t+=2}}));var Or=2*He.BYTES_PER_ELEMENT,Mr=nr();function Fr(e){return e instanceof Ir||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Nr(e){return e===Ir||"Complex128Array"===e.name}function Cr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Or}function Pr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Or}function Ir(){var e,r,t,n;if(r=arguments.length,!(this instanceof Ir))return 0===r?new Ir:1===r?new Ir(arguments[0]):2===r?new Ir(arguments[0],arguments[1]):new Ir(arguments[0],arguments[1],arguments[2]);if(0===r)t=new He(0);else if(1===r)if(ye(arguments[0]))t=new He(2*arguments[0]);else if(ve(arguments[0]))if((n=(t=arguments[0]).length)&&Te(t)&&rr(t[0])){if(null===(t=Br(new He(2*n),t))){if(!tr(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new He(arguments[0])}}else{if(Cr(t))t=hr(t,0);else if(Pr(t))t=pr(t,0);else if(!tr(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new He(t)}else if(Ee(arguments[0])){if(!se((t=arguments[0]).byteLength/Or))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Or,t.byteLength));t=new He(t)}else{if(!_e(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Mr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ue(t[ir]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ue((t=t[ir]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Lr(t))instanceof Error)throw t;t=new He(t)}else{if(!Ee(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ye(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!se(e/Or))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Or,e));if(2===r){if(!se((n=t.byteLength-e)/Or))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Or,n));t=new He(t,e)}else{if(!ye(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Or>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Or));t=new He(t,e,2*n)}}return W(this,"_buffer",t),W(this,"_length",t.length/2),this}W(Ir,"BYTES_PER_ELEMENT",Or),W(Ir,"name","Complex64Array"),W(Ir,"from",(function(e){var r,t,n,i,o,a,u,f,l,s,c,h;if(!Ue(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Nr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ue(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(Fr(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(rr(s=n.call(r,e.get(c),c)))o[h]=kr(s),o[h+1]=Sr(s);else{if(!(be(s)&&s.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(ve(e)){if(n){for(f=e.length,u=e.get&&e.set?wr("default"):yr("default"),c=0;c<f;c++)if(!rr(u(e,c))){l=!0;break}if(l){if(!tr(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,c=0;c<f;c++)o[c]=n.call(r,u(e,c),c);return i}for(o=(i=new this(f))._buffer,h=0,c=0;c<f;c++){if(rr(s=n.call(r,u(e,c),c)))o[h]=kr(s),o[h+1]=Sr(s);else{if(!(be(s)&&s.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));o[h]=s[0],o[h+1]=s[1]}h+=2}return i}return new this(e)}if(_e(e)&&Mr&&Ue(e[ir])){if(!Ue((o=e[ir]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Rr(o,n,r):Lr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,c=0;c<f;c++)o[c]=a[c];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),W(Ir,"of",(function(){var e,r;if(!Ue(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Nr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),or(Ir.prototype,"buffer",(function(){return this._buffer.buffer})),or(Ir.prototype,"byteLength",(function(){return this._buffer.byteLength})),or(Ir.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),W(Ir.prototype,"BYTES_PER_ELEMENT",Ir.BYTES_PER_ELEMENT),W(Ir.prototype,"copyWithin",(function(e,r){if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),W(Ir.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,W(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new er(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),W(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ir&&W(t,ir,(function(){return r.entries()})),t})),W(Ir.prototype,"get",(function(e){var r;if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ye(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new er((r=this._buffer)[e*=2],r[e+1])})),or(Ir.prototype,"length",(function(){return this._length})),W(Ir.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ye(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(rr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=kr(e),void(n[t+1]=Sr(e))}if(Fr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Or,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new He(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ve(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!rr(e[f])){o=!0;break}if(o){if(!tr(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Or,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new He(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=kr(u),n[t+1]=Sr(u),t+=2}}));var Yr={complex128:Vr,complex64:Ir};function Wr(e){return Yr[e]||null}function $r(){var e,r,t;if(null===(t=Wr(r=(e=arguments.length)&&$(arguments[e-1])?arguments[e-=1]:"complex128")))throw new TypeError(B("invalid argument. Must provide a recognized data type. Value: `%s`.",r));return e<=0?new t(0):1===e?new t(arguments[0]):2===e?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}export{$r as default};
//# sourceMappingURL=mod.js.map
