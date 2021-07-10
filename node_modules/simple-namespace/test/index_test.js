'use strict';

var ns = require('../lib/index.js');

/*
======== A Handy Little Nodeunit Reference ========
https://github.com/caolan/nodeunit

Test methods:
	test.expect(numAssertions)
	test.done()
Test assertions:
	test.ok(value, [message])
	test.equal(actual, expected, [message])
	test.notEqual(actual, expected, [message])
	test.deepEqual(actual, expected, [message])
	test.notDeepEqual(actual, expected, [message])
	test.strictEqual(actual, expected, [message])
	test.notStrictEqual(actual, expected, [message])
	test.throws(block, [error], [message])
	test.doesNotThrow(block, [error], [message])
	test.ifError(value)
*/

var root;

exports.basic = {
	
	setUp: function(done) {
		root = {};
		done();
	},

	'basic': function(test) {
		
		test.expect(2);

		var init = ns('init', root);
		init.init = 'init';

		// tests here
		test.equal(root.init, init, 'should be an equal.');
		test.equal(init.init, 'init', 'should equal "init".');
		test.done();

	},

	'existing object': function(test) {

		test.expect(1);

		root.existing = 'existing';
		var existing = ns('existing', root);

		test.equal(existing, 'existing', 'should be the string "existing".');
		test.done();
	},

	'nested create': function(test) {

		test.expect(7);

		var created = ns('a.deeply.nested.namespace.is.created', root);

		test.equal(typeof root.a, 'object', 'should be an object');
		test.equal(typeof root.a.deeply, 'object', 'should be an object');
		test.equal(typeof root.a.deeply.nested, 'object', 'should be an object');
		test.equal(typeof root.a.deeply.nested.namespace, 'object', 'should be an object');
		test.equal(typeof root.a.deeply.nested.namespace.is, 'object', 'should be an object');
		test.equal(typeof root.a.deeply.nested.namespace.is.created, 'object', 'should be an object');
		test.equal(root.a.deeply.nested.namespace.is.created, created, 'should be an object');
		test.done();
	}
};
