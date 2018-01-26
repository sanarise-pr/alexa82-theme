const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Keywords');

module.exports = [
  {
    "scope": "keyword",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "name": "Control flow keywords",
    "scope": "keyword.control",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "scope": "keyword.operator",
    "settings": {
      "foreground": palette.ansiWhite
    }
  },
  {
    "scope": [
      "keyword.operator.new",
      "keyword.operator.expression",
      "keyword.operator.cast",
      "keyword.operator.sizeof",
      "keyword.operator.logical.python"
    ],
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": "#b5cea8"
    }
  }
];