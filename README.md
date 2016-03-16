LN2
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Natural logarithm][math-ln] of 2.


## Installation

``` bash
$ npm install const-ln2
```


## Usage

``` javascript
var LN2 = require( 'const-ln2' );
```

#### LN2

[Natural logarithm][math-ln] of `2`.

``` javascript
LN2 === 0.6931471805599453;
```


## Examples

``` javascript
var LN2 = require( 'const-ln2' );

console.log( LN2 );
// returns 0.6931471805599453
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/const-ln2.svg
[npm-url]: https://npmjs.org/package/const-ln2

[build-image]: http://img.shields.io/travis/const-io/ln2/master.svg
[build-url]: https://travis-ci.org/const-io/ln2

[coverage-image]: https://img.shields.io/codecov/c/github/const-io/ln2/master.svg
[coverage-url]: https://codecov.io/github/const-io/ln2?branch=master

[dependencies-image]: http://img.shields.io/david/const-io/ln2.svg
[dependencies-url]: https://david-dm.org/const-io/ln2

[dev-dependencies-image]: http://img.shields.io/david/dev/const-io/ln2.svg
[dev-dependencies-url]: https://david-dm.org/dev/const-io/ln2

[github-issues-image]: http://img.shields.io/github/issues/const-io/ln2.svg
[github-issues-url]: https://github.com/const-io/ln2/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[math-ln]: https://github.com/math-io/ln
