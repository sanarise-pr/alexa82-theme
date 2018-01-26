const log = require('../logger/logger');
const palette = require('../palette');
const chroma = require('chroma-js');

log.title("Integrated Terminal Colors");

// log.val("contrast", chroma.contrast(bg, fg));

module.exports = {
  "terminal.background": "#00ffff",
  "terminal.foreground": "#0000ff",
  "terminal.ansiBlack": "#1d2025",
  "terminal.ansiRed": "#e06c75",
  "terminal.ansiGreen": "#9ac181",
  "terminal.ansiYellow": "#d6c294",
  "terminal.ansiBlue": "#61afef",
  "terminal.ansiMagenta": "#ca90d0",
  "terminal.ansiCyan": "#56b6c2",
  "terminal.ansiWhite": "#bec2ca",
  "terminal.ansiBrightBlack": "#21252b",
  "terminal.ansiBrightRed": "#e06c75",
  "terminal.ansiBrightGreen": "#9ac181",
  "terminal.ansiBrightYellow": "#d6c294",
  "terminal.ansiBrightBlue": "#61afef",
  "terminal.ansiBrightMagenta": "#ca90d0",
  "terminal.ansiBrightCyan": "#56b6c2",
  "terminal.ansiBrightWhite": "#e3e5e8",
  "terminal.selectionBackground": "#00ffff",
  "terminalCursor.background": "#00ffff",
  "terminalCursor.foreground": "#0000ff",
};