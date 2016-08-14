const csjs = require('../../postcss-scopify-everything').csjs;

module.exports = csjs`

  .foo {
    font-size: 1.3em;
  }

  .bar { font-size: 12.5px; } .baz { width: 33.3% }

`;
