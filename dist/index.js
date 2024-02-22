"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=i(function(f,a){
var u=require('@stdlib/assert-is-string/dist').isPrimitive,s=require('@stdlib/array-typed-complex-ctors/dist'),g=require('@stdlib/array-defaults/dist'),m=require('@stdlib/error-tools-fmtprodmsg/dist'),o=g.get("dtypes.complex_floating_point");function v(){var r,e,t;if(r=arguments.length,r&&u(arguments[r-1])?(r-=1,e=arguments[r]):e=o,t=s(e),t===null)throw new TypeError(m('01r2Y',e));return r<=0?new t(0):r===1?new t(arguments[0]):r===2?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}a.exports=v
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
