const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Text Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "textBlockQuote.background": "#00ffff", 
  "textBlockQuote.border": "#ff0000",
  "textCodeBlock.background": "#00ffff",
  "textLink.activeForeground": "#0000ff",
  "textLink.foreground": "#0000ff",
  "textPreformat.foreground": "#0000ff",
  "textSeparator.foreground": "#0000ff",
};