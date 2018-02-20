const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Tags');

module.exports = [
  {
    "scope": "entity.name.tag",
    "settings": {
      "foreground": palette.colors.marine
    }
  },
  // {
  //   "scope": "entity.name.tag.css",
  //   "settings": {
  //     "foreground": palette.colors.marine
  //   }
  // },
  {
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": palette.colors.emerald
    }
  },
  {
    "name": "brackets of XML/HTML tags",
    "scope": "punctuation.definition.tag",
    "settings": {
      "foreground": palette.colors.marine.darken(0.5)
    }
  },
  {
    "name": "### doctype",
    "scope": "meta.tag.sgml.doctype",
    "settings": {
      "foreground": palette.colors.yellow
    }
  },
  {
    "name": "### tag",
    "scope": "meta.tag",
    "settings": {
      "foreground": palette.colors.white
    }
  }
];