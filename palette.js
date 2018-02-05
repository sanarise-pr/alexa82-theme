const log = require('./logger/logger');
const chroma = require('chroma-js');

log.title('Palette');

let primaryBg = chroma('333945');
// let primaryBg = chroma('343d46');

let groundBg = primaryBg.brighten(1.4).desaturate(0.15);
log.val('groundBg', groundBg.hex());

let lightBg = primaryBg.brighten(3.3).desaturate(0.3);
log.val('lightBg', lightBg.hex());

let titleBg = lightBg.desaturate().brighten(0.15);
log.val('titleBg', titleBg.hex());

let titleBr = titleBg.darken(0.7);
log.val('titleBr', titleBr.hex());

let statusBarBg = primaryBg.brighten(3).desaturate(0.2);
log.val(
  'statusBarBg + contrast', 
  statusBarBg.hex(), chroma.contrast(primaryBg, statusBarBg).toFixed(2)
);

var comentsFg = primaryBg.brighten(2.2);
log.val('comentsFg contrast', chroma.contrast(primaryBg, comentsFg).toFixed(2));

var orangeFg = chroma('D19A66');

module.exports = {
  // Backgrounds
  primaryBg: primaryBg,
  groundBg: groundBg,
  lightBg: lightBg,
  titleBg: titleBg,
  titleBr: titleBr,
  statusBarBg: statusBarBg,
  // statusBarBg: chroma('abb1ba'),

  // Foregrounds
  cursorFg: chroma('SkyBlue'),
  tabActiveFg: chroma('white').darken(0.3),

  // Ansi
  ansiBlack: chroma('1d2025'),
  ansiRed: chroma('e06c75'),
  ansiGreen: chroma('9ac181'),
  ansiYellow: chroma('d6c294'),
  ansiBlue: chroma('61afef'),
  ansiMagenta: chroma('ca90d0'),
  ansiCyan: chroma('56b6c2'),
  ansiWhite: chroma('bec2ca'),
  ansiBrightBlack: chroma('21252b'),
  ansiBrightRed: chroma('e06c75'),
  ansiBrightGreen: chroma('9ac181'),
  ansiBrightYellow: chroma('d6c294'),
  ansiBrightBlue: chroma('61afef'),
  ansiBrightMagenta: chroma('ca90d0'),
  ansiBrightCyan: chroma('56b6c2'),
  ansiBrightWhite: chroma('e3e5e8'),

  ansiOrange: orangeFg,
  ansiMarine: chroma("93A1D2"),
  ansiCherry: chroma("c18190"),
  ansiEmerald: chroma("81c196"),

  // Syntax
  comentsFg: comentsFg,
  regexpFg: orangeFg
};