
const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Lists and Trees");

// let activeSelectionBg = palette.lightBg.darken(0.5);
// let activeSelectionFg = chroma('black');

// let hoverBg = palette.lightBg.darken(0.25);
// let hoverFg = activeSelectionFg;

// let dropBg = hoverBg;

// log.val("tempBg", tempBg.hex());

module.exports = {
  "list.activeSelectionBackground": palette.list.activeSelectionBg, // папки и файлы в сайдбаре
  // "list.activeSelectionForeground": activeSelectionFg,
  // "list.dropBackground": dropBg,
  "list.focusBackground": palette.list.focusBg, 
  // "list.focusForeground": activeSelectionFg,
  // "list.highlightForeground": activeSelectionBg,
  // "list.hoverBackground": hoverBg,
  // "list.hoverForeground": hoverFg,
  "list.inactiveSelectionBackground": palette.list.inactiveSelectionBg,
  // "list.inactiveSelectionForeground": activeSelectionFg,
  // "list.inactiveFocusBackground": hoverBg,
  // "list.inactiveFocusForeground": hoverFg,
  // "list.invalidItemForeground": chroma('#ff0000'),
};