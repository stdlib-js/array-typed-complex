// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-complex-ctors@esm/index.mjs";function s(){var s,n,o;if(n=(s=arguments.length)&&e(arguments[s-1])?arguments[s-=1]:"complex128",null===(o=r(n)))throw new TypeError(t("00v2k",n));return s<=0?new o(0):1===s?new o(arguments[0]):2===s?new o(arguments[0],arguments[1]):new o(arguments[0],arguments[1],arguments[2])}export{s as default};
//# sourceMappingURL=index.mjs.map
