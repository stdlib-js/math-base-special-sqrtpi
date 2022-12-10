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

'use strict';

/**
* Compute the principal square root of the product of π and a positive number.
*
* @module @stdlib/math-base-special-sqrtpi
*
* @example
* var sqrtpi = require( '@stdlib/math-base-special-sqrtpi' );
*
* var v = sqrtpi( 4.0 );
* // returns ~3.5449
*
* v = sqrtpi( 10.0 );
* // returns ~5.60499
*
* v = sqrtpi( 0.0 );
* // returns 0.0
*
* v = sqrtpi( -4.0 );
* // returns NaN
*
* v = sqrtpi( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;