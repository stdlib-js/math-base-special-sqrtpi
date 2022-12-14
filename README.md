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

# sqrtpi

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the principal [square root][@stdlib/math/base/special/sqrt] of the product of π and a positive number.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-sqrtpi
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var sqrtpi = require( '@stdlib/math-base-special-sqrtpi' );
```

#### sqrtpi( x )

Computes the principal [square root][@stdlib/math/base/special/sqrt] of the product of π and a positive double-precision floating-point number.

```javascript
var v = sqrtpi( 4.0 );
// returns ~3.5449

v = sqrtpi( 10.0 );
// returns ~5.60499

v = sqrtpi( 0.0 );
// returns 0.0

v = sqrtpi( NaN );
// returns NaN
```

For negative numbers, the principal [square root][@stdlib/math/base/special/sqrt] is **not** defined.

```javascript
var v = sqrtpi( -4.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var sqrtpi = require( '@stdlib/math-base-special-sqrtpi' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
    x = discreteUniform( 0, 100 );
    console.log( 'sqrtpi(%d) = %d', x, sqrtpi( x ) );
}
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
#include "stdlib/math/base/special/sqrtpi.h"
```

#### stdlib_base_sqrtpi( x )

Computes the principal [square root][@stdlib/math/base/special/sqrt] of the product of π and a positive double-precision floating-point number.

```c
double x = stdlib_base_sqrtpi( 4.0 );
// returns ~3.5449

x = stdlib_base_sqrtpi( 10.0 );
// returns ~5.60499
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.

```c
double stdlib_base_sqrtpi( const double x );
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
#include "stdlib/math/base/special/sqrtpi.h"
#include <stdlib.h>
#include <stdio.h>

int main() {
    double x;
    double v;
    int i;

    for ( i = 0; i < 100; i++ ) {
        x = ( (double)rand() / (double)RAND_MAX ) * 100.0;
        v = stdlib_base_sqrtpi( x );
        printf( "sqrtpi(%lf) = %lf\n", x, v );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-sqrtpi.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-sqrtpi

[test-image]: https://github.com/stdlib-js/math-base-special-sqrtpi/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-sqrtpi/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-sqrtpi/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-sqrtpi?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-sqrtpi.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-sqrtpi/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-sqrtpi/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-sqrtpi/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-sqrtpi/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-sqrtpi/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-sqrtpi/main/LICENSE

[@stdlib/math/base/special/sqrt]: https://github.com/stdlib-js/math-base-special-sqrt

</section>

<!-- /.links -->
