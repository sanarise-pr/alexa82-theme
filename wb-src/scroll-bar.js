const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Scroll Bar Control");

// let shadow = palette.editorBg.set('hsl.l', '-0.1');

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  // "scrollbar.shadow": shadow,
  // // "scrollbarSlider.background": chroma('00ffff35'),
  // // "scrollbarSlider.hoverBackground": chroma('00ffff35'),
  // // "scrollbarSlider.activeBackground": chroma('00ffff35'),
};