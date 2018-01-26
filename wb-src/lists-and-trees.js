
const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Lists and Trees");

let activeSelectionBg = palette.lightBg.darken(0.5);
let activeSelectionFg = chroma('black');

let hoverBg = palette.lightBg.darken(0.25);
let hoverFg = activeSelectionFg;

let dropBg = hoverBg;

// log.val("tempBg", tempBg.hex());

module.exports = {
  "list.activeSelectionBackground": activeSelectionBg, // папки и файлы в сайдбаре
  "list.activeSelectionForeground": activeSelectionFg,
  "list.dropBackground": dropBg,
  "list.focusBackground": activeSelectionBg, 
  "list.focusForeground": activeSelectionFg,
  "list.highlightForeground": activeSelectionBg,
  "list.hoverBackground": hoverBg,
  "list.hoverForeground": hoverFg,
  "list.inactiveSelectionBackground": activeSelectionBg,
  "list.inactiveSelectionForeground": activeSelectionFg,
  "list.inactiveFocusBackground": hoverBg,
  "list.inactiveFocusForeground": hoverFg,
  "list.invalidItemForeground": chroma('#ff0000'),
};