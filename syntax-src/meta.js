const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Meta');

module.exports = [
  {
    "scope": "meta.selector",
    "settings": {
      "foreground": palette.colors.raspberry.brighten()
    }
  },
  {
    "scope": "meta.preprocessor",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "meta.preprocessor.string",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "meta.preprocessor.numeric",
    "settings": {
      "foreground": "#b5cea8"
    }
  },
  {
    "scope": "meta.structure.dictionary.key.python",
    "settings": {
      "foreground": "#9cdcfe"
    }
  },
  {
    "scope": "meta.diff.header",
    "settings": {
      "foreground": "#569cd6"
    }
  }
];