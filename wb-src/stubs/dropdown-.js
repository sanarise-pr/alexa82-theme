const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Dropdown Control");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "dropdown.background": "#00ffff",
  "dropdown.foreground": "#0000ff",
  "dropdown.border": "#ff0000",
};