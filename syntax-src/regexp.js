const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('RegExp');

module.exports = [
  {
    "scope": "constant.regexp",
    "settings": {
      "foreground": palette.colors.orange
    }
  },
  {
    "scope": "string.regexp",
    "settings": {
      "foreground": palette.colors.orange
    }
  },
  {
    "name": "Regular expression groups",
    "scope": [
      "punctuation.definition.group.regexp",
      "punctuation.definition.group.assertion.regexp",
      "punctuation.definition.character-class.regexp",
      "punctuation.character.set.begin.regexp",
      "punctuation.character.set.end.regexp",
      "keyword.operator.negation.regexp",
      "support.other.parenthesis.regexp"
    ],
    "settings": {
      "foreground": palette.colors.white
    }
  },
  {
    "scope": [
      "constant.character.character-class.regexp",
      "constant.other.character-class.set.regexp",
      "constant.other.character-class.regexp",
      "constant.character.set.regexp"
    ],
    "settings": {
      "foreground": palette.colors.yellow
    }
  },
  {
    "scope": [
      "keyword.operator.or.regexp",
      "keyword.control.anchor.regexp"
    ],
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": "keyword.operator.quantifier.regexp",
    "settings": {
      "foreground": palette.colors.orange
    }
  }
];