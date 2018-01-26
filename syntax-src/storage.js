const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Storage');

module.exports = [
  {
    "name": "Storage",
    "scope": "storage",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "name": "Storage type",
    "scope": "storage.type",
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  {
    "scope": "storage.modifier",
    "settings": {
      "foreground": palette.ansiBlue
    }
  }
];