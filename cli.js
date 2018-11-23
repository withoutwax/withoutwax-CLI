#!/usr/bin/env node
'use strict';

const importJsx = require('import-jsx');
const {h, render} = require('ink');
const meow = require('meow');

const ui = importJsx('./ui.js');

const cli = meow(`
	Usage
	  $ withoutwax-cli [input]

	Options
	  --name  Lorem ipsum [Default: false]

	Examples
	  $ withoutwax-cli
	  I love Ink
	  $ withoutwax-cli --name=ponies
	  I love ponies
`);

render(h(ui, cli.flags));
