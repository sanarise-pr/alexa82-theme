const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Function');

module.exports = [
  {
    "name": "Function declarations",
    "scope": [
      "entity.name.function",
      "support.function",
      "support.constant.handlebars"
    ],
    "settings": {
      "foreground": palette.ansiMagenta
    }
  },
  {
    "name": "Function argument",
    "scope": "variable.parameter",
    "settings": {
      "fontStyle": "underline",
      "foreground": palette.ansiWhite
    }
  },
];