const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Badge");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "badge.foreground": "#0000ff", // лейбл "не сохранено" на открытых редакторах
  "badge.background": "#00ffff",
};