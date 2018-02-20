const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Scroll Bar Control");

module.exports = {
  // "scrollbar.shadow": shadow,
  "scrollbarSlider.background": palette.scrollBar.bg,
  "scrollbarSlider.hoverBackground": palette.scrollBar.bg.brighten(),
  "scrollbarSlider.activeBackground": palette.scrollBar.bg.brighten(),
};