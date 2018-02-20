const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Keywords');

module.exports = [
  {
    "scope": "keyword",
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": "keyword.operator",
    "settings": {
      "foreground": palette.colors.white.brighten(0.5)
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
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php"
    ],
    "settings": {
      "foreground": palette.colors.cherry
    }
  },
  {
    "name": "Control flow keywords",
    "scope": "keyword.control",
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "name": "Debugger keyword",
    "scope": "keyword.other.debugger",
    "settings": {
      "foreground": palette.colors.cherry.darken(0.5)
    }
  }
];