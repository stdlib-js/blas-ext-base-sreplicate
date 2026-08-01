<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# sreplicate

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Replicate each single-precision floating-point strided array element a specified number of times.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-sreplicate
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sreplicate = require( '@stdlib/blas-ext-base-sreplicate' );
```

#### sreplicate( N, k, x, strideX, out, strideOut )

Replicates each single-precision floating-point strided array element a specified number of times.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var out = new Float32Array( 6 );

sreplicate( x.length, 2, x, 1, out, 1 );
// out => <Float32Array>[ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **k**: number of times to replicate each element.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length for `x`.
-   **out**: output [`Float32Array`][@stdlib/array/float32].
-   **strideOut**: stride length for `out`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to replicate every other element:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var out = new Float32Array( 6 );

sreplicate( 3, 2, x, 2, out, 1 );
// out => <Float32Array>[ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var out0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var out1 = new Float32Array( out0.buffer, out0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

sreplicate( 3, 2, x1, 2, out1, 1 );
// out0 => <Float32Array>[ 0.0, 0.0, 2.0, 2.0, 4.0, 4.0, 6.0, 6.0 ]
```

#### sreplicate.ndarray( N, k, x, strideX, offsetX, out, strideOut, offsetOut )

Replicates each single-precision floating-point strided array element a specified number of times using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var out = new Float32Array( 6 );

sreplicate.ndarray( x.length, 2, x, 1, 0, out, 1, 0 );
// out => <Float32Array>[ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetOut**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to replicate every other element in the strided input array starting from the second element and to store in the last `N*k` elements of the strided output array starting from the last element:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var out = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

sreplicate.ndarray( 3, 2, x, 2, 1, out, -1, out.length-1 );
// out => <Float32Array>[ 0.0, 0.0, 6.0, 6.0, 4.0, 4.0, 2.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `k <= 0`, both functions return `out` unchanged.
-   Both functions assume that the output array supports `N*k` indexed elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var Float32Array = require( '@stdlib/array-float32' );
var sreplicate = require( '@stdlib/blas-ext-base-sreplicate' );

var x = discreteUniform( 5, -100, 100, {
    'dtype': 'float32'
});
console.log( x );

var out = new Float32Array( x.length * 3 );
console.log( out );

sreplicate( x.length, 3, x, 1, out, 1 );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/sreplicate.h"
```

#### stdlib_strided_sreplicate( N, k, \*X, strideX, \*Out, strideOut )

Replicates each single-precision floating-point strided array element a specified number of times.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
float out[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_sreplicate( 4, 2, x, 1, out, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` number of times to replicate each element.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **Out**: `[out] float*` output array.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.

```c
void stdlib_strided_sreplicate( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, float *Out, const CBLAS_INT strideOut );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_sreplicate_ndarray( N, k, \*X, strideX, offsetX, \*Out, strideOut, offsetOut )

<!-- lint enable maximum-heading-length -->

Replicates each single-precision floating-point strided array element a specified number of times using alternative indexing semantics.

```c
const float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };
float out[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

stdlib_strided_sreplicate_ndarray( 4, 2, x, 1, 0, out, 1, 0 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **k**: `[in] CBLAS_INT` number of times to replicate each element.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length for `X`.
-   **offsetX**: `[in] CBLAS_INT` starting index for `X`.
-   **Out**: `[out] float*` output array.
-   **strideOut**: `[in] CBLAS_INT` stride length for `Out`.
-   **offsetOut**: `[in] CBLAS_INT` starting index for `Out`.

```c
void stdlib_strided_sreplicate_ndarray( const CBLAS_INT N, const CBLAS_INT k, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX, float *Out, const CBLAS_INT strideOut, const CBLAS_INT offsetOut );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/sreplicate.h"
#include <stdio.h>

int main( void ) {
    // Create strided arrays:
    const float x[] = { 1.0f, 2.0f, 3.0f };
    float out[] = { 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f };

    // Specify the number of elements:
    const int N = 3;

    // Specify the number of times to replicate each element:
    const int k = 2;

    // Specify stride lengths:
    const int strideX = 1;
    const int strideOut = 1;

    // Replicate elements:
    stdlib_strided_sreplicate( N, k, x, strideX, out, strideOut );

    // Print the result:
    for ( int i = 0; i < 6; i++ ) {
        printf( "out[ %d ] = %f\n", i, out[ i ] );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

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

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-sreplicate.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-sreplicate

[test-image]: https://github.com/stdlib-js/blas-ext-base-sreplicate/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-sreplicate/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-sreplicate/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-sreplicate?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-sreplicate.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-sreplicate/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-sreplicate/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-sreplicate/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-sreplicate/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-sreplicate/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-sreplicate/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-sreplicate/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-sreplicate/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-sreplicate/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
