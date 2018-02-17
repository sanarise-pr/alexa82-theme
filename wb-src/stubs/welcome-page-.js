const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Welcome Page");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "welcomePage.buttonBackground": "#00ffff",
  "welcomePage.buttonHoverBackground": "#00ffff",
  "walkThrough.embeddedEditorBackground": "#00ffff",
};