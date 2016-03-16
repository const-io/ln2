'use strict';

// MODULES //

var tape = require( 'tape' );
var ln = require( 'math-ln' );
var abs = require( 'math-abs' );
var EPS = require( 'const-eps-float64' );
var LN2 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof LN2, 'number', 'main export is a number' );
	t.end();
});

tape( 'export is a double-precision floating-point number equal to 0.6931471805599453', function test( t ) {
	t.equal( LN2, 0.6931471805599453, 'equals 0.6931471805599453' );
	t.end();
});

tape( 'export equals ln(2)', function test( t ) {
	var delta;
	var tol;
	var v;

	v = ln( 2 );
	delta = abs( v - LN2 );
	tol = EPS * LN2;

	t.ok( delta <= tol, 'equals ln(2) within tolerance '+tol );

	t.end();
});
