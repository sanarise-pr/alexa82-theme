const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title('Status Bar');

// let bg = palette.statusBg;
// let fg = bg.set('hsl.l', '-0.8');
// let debuggingBg = palette.ansiRed;
// let debuggingFg = debuggingBg.set('hsl.l', '-0.8');

// log.val('contrast', chroma.contrast(bg, fg).toFixed(2));
// log.val('dubugging contrast', chroma.contrast(debuggingBg, debuggingFg).toFixed(2));

module.exports = {
  'statusBar.background': palette.statusBar.bg,
  // 'statusBar.foreground': fg,
  // 'statusBar.border': bg,
  // 'statusBar.debuggingBackground': debuggingBg,
  // 'statusBar.debuggingForeground': debuggingFg,
  // 'statusBar.debuggingBorder': debuggingBg,
  // // 'statusBar.noFolderForeground': noFolderBg,
  // // 'statusBar.noFolderBackground': noFolderFg,
  // // 'statusBar.noFolderBorder': '#ff0000', //debug
  // // 'statusBarItem.activeBackground': '#ff0000', //debug
  // // 'statusBarItem.hoverBackground': '#ff0000', //debug
  // // 'statusBarItem.prominentBackground': '#ff0000', //debug
  // // 'statusBarItem.prominentHoverBackground': '#ff0000', //debug
};