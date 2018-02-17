const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Comments");

let fg = palette.comentsFg;

log.val('contrast', chroma.contrast(fg, palette.editorBg));

module.exports = [
  {
    "name": "Comments",
    "scope": [
      "comment.line",
      "comment.block"
    ],
    "settings": {
      "foreground": fg,
      "fontStyle": "italic"
    }
  },
  {
    "name": "Doc comments",
    "scope": [
      "comment.block.documentation"
    ],
    "settings": {
      "fontStyle": "italic"
    }
  }
];