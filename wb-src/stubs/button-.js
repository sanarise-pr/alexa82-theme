const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Button Control");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "button.foreground": "#0000ff",
  "button.hoverBackground": "#00ffff",
  "button.background": "#00ffff",
};