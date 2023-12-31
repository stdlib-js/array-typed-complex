"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=u(function(c,n){
var i=require('@stdlib/assert-is-string/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist'),m=require('@stdlib/array-typed-complex-ctors/dist');function g(){var r,e,t;if(r=arguments.length,r&&i(arguments[r-1])?(r-=1,e=arguments[r]):e="complex128",t=m(e),t===null)throw new TypeError(s('01r2Y',e));return r<=0?new t(0):r===1?new t(arguments[0]):r===2?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}n.exports=g
});var o=a();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
