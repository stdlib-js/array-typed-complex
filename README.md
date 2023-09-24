<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Complex Typed Arrays

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a complex number typed array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import complexarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-complex@deno/mod.js';
```

#### complexarray( \[dtype] )

Creates a complex number typed array having a specified data type `dtype`.

```javascript
var arr = complexarray();
// returns <Complex128Array>
```

The function recognizes the following data types:

-   `complex128`: double-precision complex floating-point numbers
-   `complex64`: single-precision complex floating-point numbers

By default, the output complex number typed array data type is `complex128`. To specify an alternative data type, provide a `dtype` argument.

```javascript
var arr = complexarray( 'complex64' );
// returns <Complex64Array>
```

#### complexarray( length\[, dtype] )

Returns a complex number typed array having a specified `length`.

```javascript
var arr1 = complexarray( 5 );
// returns <Complex128Array>

var arr2 = complexarray( 5, 'complex64' );
// returns <Complex64Array>
```

#### complexarray( complexarray\[, dtype] )

Creates a complex number typed array from another complex number typed array.

```javascript
var arr1 = complexarray( [ 5.0, -3.0, 2.0, 1.0 ] );
// returns <Complex128Array>

var arr2 = complexarray( arr1 );
// returns <Complex128Array>

var arr3 = complexarray( arr1, 'complex64' );
// returns <Complex64Array>
```

#### complexarray( obj\[, dtype] )

Creates a complex number typed array from an array-like object or iterable.

```javascript
var arr1 = complexarray( [ 0.5, 0.5, 0.5, 0.5 ] );
// returns <Complex128Array>

var arr2 = complexarray( [ 0.5, 0.5, 0.5, 0.5 ], 'complex64' );
// returns <Complex64Array>
```

If a provided array-like object contains interleaved real and imaginary components, the array-like object must have a length which is a multiple of two.

#### complexarray( buffer\[, byteOffset\[, length]]\[, dtype] )

Returns a complex number typed array view of an [`ArrayBuffer`][mdn-arraybuffer].

```javascript
import ArrayBuffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-buffer@deno/mod.js';
var buf = new ArrayBuffer( 64 );

var arr1 = complexarray( buf );
// returns <Complex128Array>

var arr2 = complexarray( buf, 'complex64' );
// returns <Complex64Array>

var arr3 = complexarray( buf, 32 );
// returns <Complex128Array>

var arr4 = complexarray( buf, 32, 'complex64' );
// returns <Complex64Array>

var arr5 = complexarray( buf, 32, 1 );
// returns <Complex128Array>

var arr6 = complexarray( buf, 24, 4, 'complex64' );
// returns <Complex64Array>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import gfillBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-gfill-by@deno/mod.js';
import Complex128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@deno/mod.js';
import reinterpret128 from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@deno/mod.js';
import complexarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-complex@deno/mod.js';

function rand() {
    var re = discreteUniform( -10, 10 );
    var im = discreteUniform( -10, 10 );
    return new Complex128( re, im );
}

// Create a new complex number typed array:
var arr = complexarray( 100, 'complex128' );

// Fill the array with random complex numbers:
gfillBy( arr.length, arr, 1, rand );

// Reinterpret the complex number array as a `Float64Array`:
var view = reinterpret128( arr, 0 );

// View the results:
console.log( view );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-typed-complex.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-typed-complex

[test-image]: https://github.com/stdlib-js/array-typed-complex/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/array-typed-complex/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-typed-complex/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-typed-complex?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-typed-complex.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-typed-complex/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-typed-complex/tree/deno
[umd-url]: https://github.com/stdlib-js/array-typed-complex/tree/umd
[esm-url]: https://github.com/stdlib-js/array-typed-complex/tree/esm
[branches-url]: https://github.com/stdlib-js/array-typed-complex/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-typed-complex/main/LICENSE

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

</section>

<!-- /.links -->
