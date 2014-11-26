///<reference path=".d.ts"/>
"use strict";

var yargs = require("yargs");

var knownOptions: any = {
	"debug": Boolean,
	"exit": Boolean,
	"device": String,
	"stdout": String,
	"stderr": String,
	"env": String,
	"args": String,
	"help": Boolean
};

var parsed = {};

_.each(_.keys(knownOptions), opt => {
	var type = knownOptions[opt];
	if(type === String) {
		yargs.string(opt);
	} else if (type === Boolean) {
		yargs.boolean(opt);
	}
});

_.each(_.keys(yargs.argv), opt => exports[opt] = yargs.argv[opt]);

declare var exports: any;
export = exports;