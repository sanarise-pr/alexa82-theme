const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Storage');

module.exports = [
  {
    "scope": "storage",
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": "storage.type",
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "scope": "storage.modifier",
    "settings": {
      "foreground": palette.colors.blue
    }
  },
  {
    "name": "coloring of the Java import and package identifiers",
    "scope": [
      "storage.modifier.import.java",
      "variable.language.wildcard.java",
      "storage.modifier.package.java"
    ],
    "settings": {
      "foreground": "#d4d4d4"
    }
  }
];