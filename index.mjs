// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-complex-ctors@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@v0.3.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var n=s.get("dtypes.complex_floating_point");function i(){var s,i,d;if(i=(s=arguments.length)&&t(arguments[s-1])?arguments[s-=1]:n,null===(d=e(i)))throw new TypeError(r("01r2Y",i));return s<=0?new d(0):1===s?new d(arguments[0]):2===s?new d(arguments[0],arguments[1]):new d(arguments[0],arguments[1],arguments[2])}export{i as default};
//# sourceMappingURL=index.mjs.map
