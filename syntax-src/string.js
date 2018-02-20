const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('String');

module.exports = [
  {
    "scope": "string",
    "settings": {
      "foreground": palette.colors.yellow
    }
  },
  {
    "scope": "string.tag",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "string.value",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "name": "String interpolation",
    "scope": [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded"
    ],
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "name": "Reset JavaScript string interpolation expression",
    "scope": [
      "meta.template.expression"
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  }
];