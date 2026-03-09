"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var n=i(function(f,a){"use strict";var u=require("@stdlib/assert-is-string").isPrimitive,s=require("@stdlib/array-typed-complex-ctors"),g=require("@stdlib/array-defaults"),m=require("@stdlib/string-format"),o=g.get("dtypes.complex_floating_point");function v(){var r,e,t;if(r=arguments.length,r&&u(arguments[r-1])?(r-=1,e=arguments[r]):e=o,t=s(e),t===null)throw new TypeError(m("invalid argument. Must provide a recognized data type. Value: `%s`.",e));return r<=0?new t(0):r===1?new t(arguments[0]):r===2?new t(arguments[0],arguments[1]):new t(arguments[0],arguments[1],arguments[2])}a.exports=v});var l=n();module.exports=l;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
