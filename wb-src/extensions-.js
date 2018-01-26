const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Extensions");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "extensionButton.prominentForeground": "#0000ff",
  "extensionButton.prominentBackground": "#00ffff",
  "extensionButton.prominentHoverBackground": "#00ffff",
};