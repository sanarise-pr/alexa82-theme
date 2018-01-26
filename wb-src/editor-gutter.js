const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Editor Gutter");

let bg = palette.primaryBg;

// log.val("contrast", chroma.contrast(bg, fg).toFixed(2));

module.exports = {
  "editorGutter.background": bg,
  "editorGutter.modifiedBackground": palette.ansiBlue.desaturate(0.5).darken(1.5),
  "editorGutter.addedBackground": palette.ansiGreen.desaturate(0.5).darken(1.5),
  "editorGutter.deletedBackground": palette.ansiRed.desaturate(0.5).darken(1.5),
};