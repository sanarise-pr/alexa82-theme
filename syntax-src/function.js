const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Function');

module.exports = [
  {
    "name": "Function keyword #new",
    "scope": "storage.type.function",
    "settings": {
      "foreground": palette.colors.magenta.brighten(0.5)
    }
  },
  {
    "name": "Function declarations",
    "scope": [
      "entity.name.function",
      "support.function",
      "support.constant.handlebars"
    ],
    "settings": {
      "foreground": palette.colors.brightBlue
    }
  }
];