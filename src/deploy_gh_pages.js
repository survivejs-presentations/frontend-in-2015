'use strict';

var ghpages = require('gh-pages');

// XXX: destroys ./dist!
//var config = require('../webpack.config');

main();

function main() {
  ghpages.publish('./dist', console.error.bind(console));
}
