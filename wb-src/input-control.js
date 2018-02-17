const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Input Control");

// let bg = palette.lightBg;
// let border = bg.darken();

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  // "input.background": bg, // поле поиска в настройках
  // "input.border": border,
  // "input.foreground": chroma('black'), // текст в поле поиска
  // "input.placeholderForeground": chroma('grey'), // плейсхолдер в поле поиска
  // "inputOption.activeBorder": border.darken(),
  // // "inputValidation.infoBackground": chroma('#00ffff'),
  // // "inputValidation.infoBorder": chroma('#ff0000'),
  // // "inputValidation.warningBackground": chroma('#00ffff'),
  // // "inputValidation.warningBorder": chroma('#ff0000'),
  // // "inputValidation.errorBackground": chroma('#00ffff'),
  // // "inputValidation.errorBorder": chroma('#ff0000'),
};