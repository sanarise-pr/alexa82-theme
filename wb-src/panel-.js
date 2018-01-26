const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Panel Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "panel.background": "#00ffff",
  "panel.border": "#ff000000",
  "panel.dropBackground": "#00ffff",
  "panelTitle.activeBorder": "#ff0000",
  "panelTitle.activeForeground": "#0000ff",
  "panelTitle.inactiveForeground": "#0000ff",
};