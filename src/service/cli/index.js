'use strict';

const generate = require('./generate');
const version = require('./version');
const help = require('./help');

const cli = {
  [generate.name]: generate,
  [version.name]: version,
  [help.name]: help
};

module.exports = {
  cli
};
