const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Editor Gutter");

module.exports = {
  "editorGutter.modifiedBackground": palette.editorGutter.modifiedBg,
  "editorGutter.addedBackground": palette.editorGutter.addedBg,
  // "editorGutter.deletedBackground": palette.ansiRed.desaturate(0.5).darken(),
};