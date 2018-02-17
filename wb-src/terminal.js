const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Integrated Terminal Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "terminal.background": palette.terminal.bg,
  // "terminal.foreground": palette.ansiWhite,
  // "terminal.ansiBlack": chroma("1d2025"),
  // "terminal.ansiRed": chroma("e06c75"),
  // "terminal.ansiGreen": chroma("9ac181"),
  // "terminal.ansiYellow": chroma("d6c294"),
  // "terminal.ansiBlue": chroma("61afef"),
  // "terminal.ansiMagenta": chroma("ca90d0"),
  // "terminal.ansiCyan": chroma("56b6c2"),
  // "terminal.ansiWhite": chroma("bec2ca"),
  // "terminal.ansiBrightBlack": chroma("21252b"),
  // "terminal.ansiBrightRed": chroma("e06c75"),
  // "terminal.ansiBrightGreen": chroma("9ac181"),
  // "terminal.ansiBrightYellow": chroma("d6c294"),
  // "terminal.ansiBrightBlue": chroma("61afef"),
  // "terminal.ansiBrightMagenta": chroma("ca90d0"),
  // "terminal.ansiBrightCyan": chroma("56b6c2"),
  // "terminal.ansiBrightWhite": chroma("e3e5e8"),
  // "terminal.selectionBackground": palette.ansiWhite.darken().alpha(0.5),
  // "terminalCursor.background": palette.ansiBlack,
  // "terminalCursor.foreground": palette.ansiWhite,
};