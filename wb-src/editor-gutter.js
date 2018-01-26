const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Editor Gutter");

let bg = palette.primaryBg;

// log.val("contrast", chroma.contrast(bg, fg).toFixed(2));

module.exports = {
  "editorGutter.background": bg,
  "editorGutter.modifiedBackground": chroma('0000ff'),
  "editorGutter.addedBackground": chroma('00ff00'),
  "editorGutter.deletedBackground": chroma('ff0000'), 
};