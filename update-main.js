#!/usr/bin/env node
const fs = require('fs');

const file = require('./package.json');
file.main = process.argv[2];

fs.writeFile(
	"./package.json",
	JSON.stringify(file, null, 2),
	err => { if (err) console.log(err); }
);
