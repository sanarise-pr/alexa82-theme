const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Panel Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "panel.background": palette.panel.bg,
  // "panel.border": chroma("ff0000"),
  // // "panel.dropBackground": chroma("00ffff"),
  // "panelTitle.activeBorder": palette.ansiWhite,
  // "panelTitle.activeForeground": palette.ansiBrightWhite,
  // "panelTitle.inactiveForeground": palette.ansiWhite,
};