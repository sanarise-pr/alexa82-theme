const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Markup');

module.exports = [
  {
    "scope": "markup.underline",
    "settings": {
      "fontStyle": "underline"
    }
  },
  {
    "scope": "markup.bold",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "markup.heading",
    "settings": {
      "fontStyle": "bold",
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "markup.italic",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": "markup.inserted",
    "settings": {
      "foreground": "#b5cea8"
    }
  },
  {
    "scope": "markup.deleted",
    "settings": {
      "foreground": "#ce9178"
    }
  },
  {
    "scope": "markup.changed",
    "settings": {
      "foreground": "#569cd6"
    }
  },
  {
    "scope": "beginning.punctuation.definition.quote.markdown",
    "settings": {
      "foreground": "#608b4e"
    }
  },
  {
    "scope": "beginning.punctuation.definition.list.markdown",
    "settings": {
      "foreground": "#6796e6"
    }
  },
  {
    "scope": "markup.inline.raw",
    "settings": {
      "foreground": "#ce9178"
    }
  }
];