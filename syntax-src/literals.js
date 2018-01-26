const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Literals');

var objectKeyFg = palette.ansiWhite;

log.val('propNameFg contrast', chroma.contrast(objectKeyFg, palette.primaryBg));

module.exports = [
  {
    "name": "Language Variable",
    "scope": [
      "variable.language"
    ],
    "settings": {
      "foreground": palette.ansiBlue
    }
  },
  // {
  //   "name": "This",
  //   "scope": "variable.language.this",
  //   "settings": {
  //     fontStyle: "bold",
  //     "foreground": palette.ansiWhite
  //   }
  // },
  {
    "name": "Variable and parameter name",
    "scope": [
      "variable",
      "meta.definition.variable.name"
    ],
    "settings": {
      "foreground": palette.ansiWhite
    }
  },
  {
    'name': 'Object keys',
    'scope': [
      'meta.object-literal.key',
      'meta.object-literal.key string.quoted.single',
      'meta.object-literal.key string.quoted.double',
      'support.type.property-name.json'
    ],
    'settings': {
      'foreground': objectKeyFg
    }
  },
  {
    "name": "Types declaration and references",
    "scope": [
      "meta.return-type",
      "support.class",
      "support.type",
      "entity.name.type",
      "entity.name.class"
    ],
    "settings": {
      "foreground": palette.ansiGreen
    }
  },
  {
    "scope": [
      'support.variable'
    ],
    "settings": {
      "foreground": palette.ansiCyan
    }
  },
  {
    "name": "Property",
    "scope": "support.variable.property, variable.other.property, variable.other.object.property",
    "settings": {
      "foreground": palette.ansiWhite
    }
  },
];