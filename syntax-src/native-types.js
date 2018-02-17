const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Native Types');

var stringFg = palette.ansiYellow;
var numericFg = palette.ansiOrange;

log.val('stringFg contrast', chroma.contrast(stringFg, palette.editorBg));

module.exports = [
  {
    "settings": {
      "foreground": palette.ansiBrightWhite,
      "background": palette.editorBg
    }
  },
  {
    "name": "Number",
    "scope": "constant.numeric",
    "settings": {
      "foreground": numericFg
    }
  },
  {
    name: 'String',
    'scope': 'string',
    'settings': {
      'foreground': stringFg
    }
  }
];