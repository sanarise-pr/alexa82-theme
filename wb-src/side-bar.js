const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Side Bar");

// let bg = palette.lightBg;
// let fg = bg.darken(5);

// let dropBg = bg.set('hsl.s', '+0.1');
// let br = palette.editorBg.darken(0.5);

// let sectionHeaderBg = bg.set('hsl.l', '-0.15');
// let sectionHeaderFg = fg.set('hsl.l', '-0.1');

// log.val("contrast", chroma.contrast(bg, fg).toFixed(2));
// log.val("sectionHeader contrast", chroma.contrast(sectionHeaderBg, sectionHeaderFg).toFixed(2));

module.exports = {
  "sideBar.background": palette.sideBar.bg,
  // "sideBar.foreground": fg,
  // "sideBarTitle.foreground": fg,
  "sideBar.border": palette.sideBar.br,
  // "sideBar.dropBackground": dropBg,
  "sideBarSectionHeader.background": palette.sideBar.sectionHeaderBg,
  // "sideBarSectionHeader.foreground": sectionHeaderFg,
};