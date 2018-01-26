const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Diff Editor Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "diffEditor.insertedTextBackground": "#00ffff",
  "diffEditor.insertedTextBorder": "#ff0000",
  "diffEditor.removedTextBackground": "#00ffff",
  "diffEditor.removedTextBorder": "#ff0000",
};