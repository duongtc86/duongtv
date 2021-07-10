/*globals define,module */

/*!
 * simple-namespace
 * https://github.com/drzax/simple-namespace
 *
 * @version 0.2.0
 * @copyright Simon Elvery
 * @license MIT
 * 
 */
(function(){

	'use strict';

	// most likely `window`
	var _this = this;

	// the main function
	function main(ns, root) {
		var parts, part, space;

		root = root || _this;
		parts = ns.split('.');
		part = parts.shift();
		while (part) {
			space = root[part] || {};
			root = root[part] = space;
			part = parts.shift();
		}
		return space;
	}

	// export
	if (typeof define === "function" && define.amd) {
		define(main);
	} else if (typeof module === "object" && module.exports) {
		module.exports = main;
	} else {
		_this.ns = main;
	}

}());
